window.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("certificateCanvas");
  const ctx = canvas.getContext("2d");
  const downloadBtn = document.getElementById("downloadBtn");

  // Ensure the download button is visible and fixed in the iframe viewport
  try {
    const style = document.createElement("style");
    style.innerHTML = `#downloadBtn{position:fixed; right:18px; bottom:18px; z-index:9999; padding:0.6rem 0.9rem; border-radius:6px; border:none; background:#a78bfa; color:#0f0521; font-weight:600;}`;
    document.head.appendChild(style);
  } catch (err) {
    console.warn("Unable to inject button style:", err);
  }

  downloadBtn.disabled = true;

  const img = new Image();
  img.src = "./assets/cer.png";
  img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Draw verified name from backend
    const name = window.verifiedName || "Unknown";
    ctx.font = "bold 60px Arial";
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.fillText(name, canvas.width / 2, 480);

    downloadBtn.disabled = true;
    // make sure button is visible after enabling it
    if (downloadBtn) {
      downloadBtn.style.display = "inline-block";
      downloadBtn.style.opacity = 0;
    }
  };

  img.onerror = () => {
    ctx.font = "30px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(
      "Certificate image not found!",
      canvas.width / 2,
      canvas.height / 2
    );
  };

  downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = "certificate.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});
