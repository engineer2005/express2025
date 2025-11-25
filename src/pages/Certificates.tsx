import React, { useEffect, useMemo, useRef, useState } from "react";
import "./Certificates.css";
import ParticleBackground from "../components/ParticleBackground";

type VerificationResult =
  | {
      type: "html";
      data: string;
    }
  | {
      type: "error";
      data: string;
    };

const Certificates: React.FC = () => {
  const [event, setEvent] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<VerificationResult | null>(null);
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      const res = await fetch(
        "https://certificate-backend-v5ny.onrender.com/verify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name }),
        }
      );

      const contentType = res.headers.get("content-type");

      if (contentType && contentType.includes("text/html")) {
        const html = await res.text();
        setResult({ type: "html", data: html });
      } else {
        const data = await res.json();
        if (data.name === "Name does not exist") {
          setResult({
            type: "error",
            data: "This name was not found in our records.",
          });
        }
      }
    } catch (err) {
      console.error("API Error:", err);
      setResult({ type: "error", data: "Could not connect to the server." });
    } finally {
      setLoading(false);
    }
  };

  const cleanHtml = useMemo(() => {
    if (!result || result.type !== "html") return "";
    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(result.data, "text/html");

      // Hide elements that serve as duplicate download buttons but keep them in the DOM
      const hideById = [
        "downloadBtn",
        "download-button",
        "downloadCertificate",
      ];
      hideById.forEach((id) => {
        const el = doc.getElementById(id);
        if (el) el.style.display = "none";
      });

      // Hide any elements (buttons, links) that contain 'download' text
      doc.querySelectorAll("button, a").forEach((el) => {
        if ((el.textContent || "").toLowerCase().includes("download")) {
          (el as HTMLElement).style.display = "none";
        }
      });

      // Inject CSS to hide scrollbars and fit the certificate in the viewport
      const style = doc.createElement("style");
      style.innerHTML = `
        html, body {height: 100%; width: 100%; margin: 0; overflow: hidden; -ms-overflow-style: none; scrollbar-width: none;}
        ::-webkit-scrollbar { display: none; }
        #certificateCanvas, canvas, img { max-width: 100% !important; max-height: calc(80vh - 120px) !important; height: auto !important; display:block; margin: 0 auto; }
        body > * { box-sizing: border-box; }
      `;
      if (doc.head) doc.head.appendChild(style);

      return "<!doctype html>" + doc.documentElement.outerHTML;
    } catch (e) {
      console.error("Failed to clean result HTML:", e);
      return result.data;
    }
  }, [result]);

  useEffect(() => {
    // lock body scroll when overlay is open
    if (showOverlay) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showOverlay]);

  const handleDownload = () => {
    if (!iframeRef.current) return;
    try {
      const doc =
        iframeRef.current?.contentDocument ||
        iframeRef.current?.contentWindow?.document;
      const downloadBtn = doc?.getElementById(
        "downloadBtn"
      ) as HTMLButtonElement | null;
      if (downloadBtn) {
        downloadBtn.click();
      } else {
        // fallback: try to find a canvas and download directly
        const canvas = doc?.getElementById(
          "certificateCanvas"
        ) as HTMLCanvasElement | null;
        if (canvas) {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = "certificate.png";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    } catch (err) {
      console.error("Download failed:", err);
    }
  };

  useEffect(() => {
    if (result?.type === "html") {
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  }, [result]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowOverlay(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (showOverlay) {
      // focus close button when overlay opens
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    }
  }, [showOverlay]);

  return (
    <>
      <ParticleBackground />
      <div className="certificate-container">
        <div
          className={`certificate-card ${
            result?.type === "html" ? "certificate-generated" : ""
          }`}
        >
          <div className="form-header">
            <h1 className="main-title">Certificate Validator</h1>
            <p className="subtitle">Claim Your Certificate</p>
          </div>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-group">
              <label>Select Event</label>
              <select
                value={event}
                onChange={(e) => setEvent(e.target.value)}
                required
              >
                <option value="">-- Choose an Event --</option>
                <option value="veritas">Veritas</option>
              </select>
            </div>

            <div className="form-group">
              <label>Enter Your Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Jane Doe"
                required
              />
            </div>

            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? (
                <span className="spinner-container">
                  <span className="spinner"></span> Verifying...
                </span>
              ) : (
                "Get Certificate"
              )}
            </button>
          </form>

          {result?.type === "error" && (
            <div className="error-message">{result.data}</div>
          )}

          {result?.type === "html" && (
            <>
              {showOverlay && (
                <div
                  className="certificate-overlay"
                  role="dialog"
                  aria-modal="true"
                  onClick={(e) => {
                    if (e.target === e.currentTarget) setShowOverlay(false);
                  }}
                >
                  <div
                    className="certificate-modal"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="certificate-modal-header">
                      <button
                        ref={closeBtnRef}
                        className="modal-close"
                        onClick={() => setShowOverlay(false)}
                        aria-label="Close"
                      >
                        ×
                      </button>
                      <div className="modal-actions">
                        <button
                          className="download-btn"
                          onClick={handleDownload}
                        >
                          Download
                        </button>
                      </div>
                    </div>
                    <iframe
                      ref={iframeRef}
                      srcDoc={cleanHtml || result.data}
                      title="Certificate"
                      className="certificate-modal-iframe"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Certificates;
