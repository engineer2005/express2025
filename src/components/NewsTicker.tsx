import { Link, useLocation } from "react-router-dom";

function NewsTicker() {
  const location = useLocation();

  if (location.pathname === "/upcoming-events") {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#8861FF] py-2 md:py-3 z-50 overflow-hidden">
      <Link to="/upcoming-events" className="ticker-wrapper cursor-pointer">
        <div className="ticker-text text-base md:text-xl text-neutral-800">
          📢 Click <span className="font-bold text-black">here</span> to
          Register for Sherlock Holmes Mystery Night now!
        </div>
      </Link>
    </div>
  );
}

export default NewsTicker;
