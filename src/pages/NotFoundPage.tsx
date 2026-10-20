import React from "react";
import { Link } from "react-router-dom";
import StarfieldCanvas from "../components/StarfieldCanvas";
import { Crosshair, ChevronChain } from "../components/RetroGraphics";

export default function NotFoundPage() {
  return (
    <div className="w-full min-h-[85vh] relative flex flex-col items-center justify-center p-6 bg-[#070B16] text-[#E4D6AE] overflow-hidden">
      {/* Deep speckled starfield with blue glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(30, 63, 160, 0.35) 0%, rgba(15, 27, 61, 0.7) 50%, #070B16 100%)"
        }}
      />
      <StarfieldCanvas />

      {/* Main 404 Content */}
      <div className="relative z-10 max-w-xl mx-auto text-center space-y-6 p-8 border-2 border-[#E9B93A]/40 bg-black/60 backdrop-blur-md shadow-2xl">
        {/* Top Telemetry Warning */}
        <div className="flex items-center justify-center gap-2 font-mono text-xs text-[#E8602B]">
          <Crosshair className="text-[#E8602B]" />
          <span className="font-bold tracking-widest uppercase">
            WARNING // TRAJECTORY CALCULATION ERROR 404
          </span>
          <Crosshair className="text-[#E8602B]" />
        </div>

        {/* Chunky Hand-Cut Amber Letters (Lost in Space Style) */}
        <div className="py-2">
          <h1 className="title-card-amber text-6xl sm:text-8xl font-black uppercase leading-none">
            LOST IN
          </h1>
          <h1 className="title-card-amber text-6xl sm:text-8xl font-black uppercase leading-none mt-2">
            SPACE
          </h1>
        </div>

        {/* Humorous Cosmology Explanation */}
        <p className="font-mono text-xs sm:text-sm text-[#A89A82] leading-relaxed">
          The requested coordinate lies beyond the cosmological event horizon or has been scattered by a primordial black hole perturbation.
        </p>

        {/* Re-Engage Navigation Button */}
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            to="/"
            className="retro-btn retro-btn-space"
          >
            <span className="btn-icon-box">✦</span>
            <span>RE-ENGAGE NAV COMPUTER</span>
          </Link>
        </div>

        <div className="pt-2 text-[10px] font-mono text-[#A89A82]/60">
          COORDINATES UNRESOLVED // RETURN TO ORBITAL BASELINE
        </div>
      </div>
    </div>
  );
}
