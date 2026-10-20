import React from "react";
import { siteData } from "../data/site";
import { SegmentedBar, ChevronChain, Crosshair } from "./RetroGraphics";
import { ChevronUp } from "lucide-react";

interface FooterProps {
  isDarkAcademia?: boolean;
}

export default function Footer({ isDarkAcademia = false }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerClass = isDarkAcademia
    ? "bg-[#141D17] border-t border-[#A9823F]/30 text-[#EADFC2]"
    : "bg-[#0A0C10] border-t border-[#E4D6AE]/20 text-[#E4D6AE]";

  return (
    <footer className={`w-full py-8 border-t transition-colors ${footerClass}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-xs">
        {/* Left: Mission identity */}
        <div className="flex items-center gap-3">
          <Crosshair className={isDarkAcademia ? "text-[#A9823F]" : "text-[#E8602B]"} />
          <span className="tracking-widest font-bold">
            {siteData.missionFooter}
          </span>
        </div>

        {/* Center: Segmented telemetry bar */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] tracking-wider text-current/60 uppercase">TELEMETRY_LINK</span>
          <SegmentedBar total={12} filled={10} color={isDarkAcademia ? "#A9823F" : "#E8602B"} />
          <ChevronChain count={3} className={isDarkAcademia ? "text-[#A9823F]" : "text-[#E8602B]"} />
        </div>

        {/* Right: Back to top button */}
        <button
          onClick={scrollToTop}
          className={`flex items-center gap-2 px-3 py-1.5 border transition-all ${
            isDarkAcademia
              ? "border-[#A9823F]/50 hover:bg-[#A9823F] hover:text-[#141D17]"
              : "border-[#E4D6AE]/40 hover:bg-[#E8602B] hover:text-[#0A0C10] hover:border-[#E8602B]"
          }`}
          aria-label="Scroll back to top of page"
        >
          <span className="text-[11px] font-bold tracking-widest uppercase">BACK TO TOP</span>
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-4 mt-4 border-t border-current/10 flex flex-col sm:flex-row justify-between items-center text-[10px] text-current/50 font-mono">
        <span>{siteData.coordinates} // ALL SYSTEMS NOMINAL</span>
        <span>DESIGNED WITH RETRO 70s MISSION-CONTROL ARCHITECTURE // NO COOKIES OR TRACKERS</span>
      </div>
    </footer>
  );
}
