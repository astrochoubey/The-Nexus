import React from "react";

// Crosshair registration mark (+)
export function Crosshair({ className = "" }: { className?: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={`inline-block ${className}`} aria-hidden="true">
      <line x1="7" y1="0" x2="7" y2="14" stroke="currentColor" strokeWidth="1" />
      <line x1="0" y1="7" x2="14" y2="7" stroke="currentColor" strokeWidth="1" />
      <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="0.75" />
    </svg>
  );
}

// Dot matrix glyph
export function DotMatrix({ className = "" }: { className?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" className={`inline-block ${className}`} aria-hidden="true">
      <circle cx="3" cy="3" r="1.2" />
      <circle cx="9" cy="3" r="1.2" />
      <circle cx="15" cy="3" r="1.2" />
      <circle cx="3" cy="9" r="1.2" />
      <circle cx="9" cy="9" r="1.2" />
      <circle cx="15" cy="9" r="1.2" />
      <circle cx="3" cy="15" r="1.2" />
      <circle cx="9" cy="15" r="1.2" />
      <circle cx="15" cy="15" r="1.2" />
    </svg>
  );
}

// Segmented dash bar [ ■ ■ ■ ■ ■ ■ □ □ ]
export function SegmentedBar({ total = 10, filled = 6, color = "var(--nasa-orange)" }: { total?: number; filled?: number; color?: string }) {
  return (
    <div className="flex items-center gap-1 inline-flex select-none" aria-label={`Progress: ${filled} of ${total}`}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="w-3.5 h-2 inline-block transition-colors"
          style={{
            backgroundColor: i < filled ? color : "rgba(120, 120, 120, 0.25)",
            border: "1px solid rgba(0,0,0,0.15)"
          }}
        />
      ))}
    </div>
  );
}

// Chevron arrows >>>>
export function ChevronChain({ count = 4, className = "text-amber-500" }: { count?: number; className?: string }) {
  return (
    <span className={`tracking-tighter font-mono font-bold select-none ${className}`} aria-hidden="true">
      {">".repeat(count)}
    </span>
  );
}

// Hazard Diamond Icon
export function HazardDiamond({ label = "4", className = "w-6 h-6 text-amber-500" }: { label?: string; className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      <rect x="16" y="2" width="20" height="20" transform="rotate(45 16 2)" />
      <text x="16" y="19" fill="currentColor" fontSize="10" fontWeight="bold" fontFamily="monospace" textAnchor="middle">
        {label}
      </text>
    </svg>
  );
}

// Barcode graphic
export function RetroBarcode({ code = "NEXUS-7492-CS", className = "h-8" }: { code?: string; className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-0.5 ${className}`}>
      <div className="flex items-stretch h-6 gap-0.5">
        {[2, 1, 3, 1, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3].map((w, idx) => (
          <span
            key={idx}
            className="bg-current inline-block h-full"
            style={{ width: `${w}px` }}
          />
        ))}
      </div>
      <span className="text-[9px] font-mono tracking-widest text-opacity-80">{code}</span>
    </div>
  );
}

// Wireframe globe from Mars exploration tee
export function WireframeGlobe({ className = "w-24 h-24 text-stone-300" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className} aria-label="Wireframe Celestial Coordinate Globe">
      {/* Outer circle */}
      <circle cx="50" cy="50" r="44" strokeWidth="1.5" />
      {/* Latitudes */}
      <ellipse cx="50" cy="50" rx="44" ry="14" />
      <ellipse cx="50" cy="50" rx="44" ry="28" />
      <line x1="6" y1="50" x2="94" y2="50" strokeWidth="1.5" />
      {/* Longitudes */}
      <ellipse cx="50" cy="50" rx="16" ry="44" />
      <ellipse cx="50" cy="50" rx="32" ry="44" />
      <line x1="50" y1="6" x2="50" y2="94" strokeWidth="1.5" />
      {/* Prime Meridian marker & Polar cross */}
      <circle cx="50" cy="6" r="2.5" fill="currentColor" />
      <circle cx="50" cy="94" r="2.5" fill="currentColor" />
    </svg>
  );
}

// Original 70s Mission Wordmark (NOT the NASA worm or meatball)
export function MissionWordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <div className="w-8 h-8 rounded bg-[#E8602B] flex items-center justify-center text-[#0A0C10] font-black text-xs font-mono shadow-sm">
        74
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display-wide text-xs font-bold tracking-widest text-[#5FA3E0]">
          NEXUS
        </span>
        <span className="text-[8px] font-mono tracking-wider text-[#A89A82]">
          COSMIC ARCHIVE
        </span>
      </div>
    </div>
  );
}

// Astronaut portrait graphic (Lithograph vintage print style)
export function VintageAstronautGraphic({ className = "w-full h-full" }: { className?: string }) {
  return (
    <svg viewBox="0 0 360 420" className={className} xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Vintage-graded astronaut helmet with cosmic reflections">
      <defs>
        <radialGradient id="helmetVisorGlow" cx="45%" cy="40%" r="55%">
          <stop offset="0%" stopColor="#F2B48E" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#E8602B" stopOpacity="0.4" />
          <stop offset="70%" stopColor="#0F1B3D" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#0A0C10" stopOpacity="0.98" />
        </radialGradient>
        <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E4D6AE" />
          <stop offset="50%" stopColor="#CDB88A" />
          <stop offset="100%" stopColor="#8C9275" />
        </linearGradient>
      </defs>

      {/* Background Frame */}
      <rect width="360" height="420" fill="#0A0C10" />

      {/* Starfield backdrop */}
      <circle cx="45" cy="65" r="1.5" fill="#E4D6AE" opacity="0.6" />
      <circle cx="310" cy="85" r="2" fill="#5FA3E0" opacity="0.8" />
      <circle cx="280" cy="40" r="1" fill="#FFFFFF" opacity="0.5" />
      <circle cx="70" cy="180" r="1.5" fill="#E9B93A" opacity="0.7" />

      {/* Space Suit Torso & Collar */}
      <path d="M 40 420 L 80 290 L 130 260 L 230 260 L 280 290 L 320 420 Z" fill="url(#suitGrad)" />
      {/* Suit seams & valves */}
      <path d="M 120 280 L 120 420 M 240 280 L 240 420 M 180 290 L 180 420" stroke="#3A2F33" strokeWidth="2" strokeDasharray="6 3" />
      <circle cx="140" cy="340" r="14" fill="#3A2F33" stroke="#E8602B" strokeWidth="2" />
      <circle cx="140" cy="340" r="6" fill="#5FA3E0" />
      <circle cx="220" cy="340" r="14" fill="#3A2F33" stroke="#E9B93A" strokeWidth="2" />
      <rect x="170" y="335" width="20" height="30" fill="#3B3B3D" stroke="#E4D6AE" strokeWidth="1" />

      {/* Helmet Shell */}
      <ellipse cx="180" cy="165" rx="115" ry="125" fill="#F0E6CB" stroke="#3A2F33" strokeWidth="3" />
      <ellipse cx="180" cy="165" rx="105" ry="115" fill="#0A0C10" />

      {/* Visor bubble */}
      <ellipse cx="180" cy="165" rx="88" ry="92" fill="url(#helmetVisorGlow)" stroke="#E4D6AE" strokeWidth="1.5" />

      {/* Reflections in Visor: Earth Horizon & Lunar Surface */}
      <path d="M 100 185 Q 180 145 260 185 L 260 240 Q 180 260 100 240 Z" fill="#0A0C10" opacity="0.7" />
      <path d="M 110 190 Q 180 160 250 190" stroke="#5FA3E0" strokeWidth="3" fill="none" opacity="0.85" />
      <circle cx="160" cy="140" r="18" fill="#F2B48E" opacity="0.3" filter="blur(2px)" />

      {/* Reflection crosshair */}
      <line x1="175" y1="165" x2="185" y2="165" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />
      <line x1="180" y1="160" x2="180" y2="170" stroke="#FFFFFF" strokeWidth="1" opacity="0.8" />

      {/* Helmet Neck Ring Clamps */}
      <rect x="110" y="255" width="140" height="14" rx="4" fill="#3A2F33" stroke="#E9B93A" strokeWidth="1.5" />

      {/* Halftone / scanline overlay effect */}
      <line x1="20" y1="40" x2="60" y2="40" stroke="#E8602B" strokeWidth="2" />
      <text x="24" y="34" fill="#E8602B" fontSize="9" fontFamily="monospace" letterSpacing="2">ASTRONAUT_LOG_74</text>
      <text x="240" y="405" fill="#E4D6AE" fontSize="9" fontFamily="monospace" letterSpacing="1">SEC_09 // 01-A</text>
    </svg>
  );
}

// Project Figure Generator (Technical Halftone / Plot Figures)
export function ProjectFigureSVG({ type }: { type: "fulton_valley" | "supernova_cosmo" | "tess_transit" | "rocket_peg" | "lunar_registration" | "rover_planning" }) {
  switch (type) {
    case "fulton_valley":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto bg-[#0A0C10] border border-[#3A2F33]" role="img" aria-label="Exoplanet Radius Valley Fulton Gap Distribution">
          <line x1="45" y1="20" x2="45" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <line x1="45" y1="200" x2="380" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <text x="310" y="218" fill="#A89A82" fontSize="9" fontFamily="monospace">Orbital Period P [days]</text>
          <text x="12" y="110" fill="#A89A82" fontSize="9" fontFamily="monospace" transform="rotate(-90 15 110)">Planetary Radius [R_Earth]</text>

          {/* Halftone grid lines */}
          <line x1="45" y1="150" x2="380" y2="150" stroke="#3A2F33" strokeDasharray="2 4" />
          <line x1="45" y1="95" x2="380" y2="95" stroke="#3A2F33" strokeDasharray="2 4" />
          <line x1="45" y1="45" x2="380" y2="45" stroke="#3A2F33" strokeDasharray="2 4" />

          {/* Fulton Valley Gap Slope line (dlogR/dlogP ~ -0.15) */}
          <path d="M 60 100 L 360 135" stroke="#E8602B" strokeWidth="2.5" strokeDasharray="4 3" fill="none" />
          <text x="210" y="112" fill="#E8602B" fontSize="9" fontFamily="monospace">Fulton Valley Gap (dlogR/dlogP ≈ -0.15)</text>

          {/* Sub-Neptunes population cluster (top) */}
          <ellipse cx="180" cy="65" rx="90" ry="22" fill="#5FA3E0" fillOpacity="0.25" stroke="#5FA3E0" strokeWidth="1" />
          <text x="140" y="60" fill="#5FA3E0" fontSize="9" fontFamily="monospace" fontWeight="bold">Sub-Neptunes (2.0 - 3.5 R⊕)</text>

          {/* Super-Earths rocky core cluster (bottom) */}
          <ellipse cx="170" cy="165" rx="80" ry="20" fill="#E9B93A" fillOpacity="0.25" stroke="#E9B93A" strokeWidth="1" />
          <text x="135" y="170" fill="#E9B93A" fontSize="9" fontFamily="monospace" fontWeight="bold">Super-Earths (1.0 - 1.7 R⊕)</text>

          {/* Scatter data points */}
          {[
            [80, 55], [110, 68], [140, 50], [170, 72], [200, 60], [230, 80], [260, 65],
            [90, 160], [130, 155], [160, 172], [190, 160], [220, 175], [250, 180]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="#F0E6CB" />
          ))}
          <text x="260" y="35" fill="#F0E6CB" fontSize="8" fontFamily="monospace">NASA Exoplanet Archive N≈5,000</text>
        </svg>
      );

    case "supernova_cosmo":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto bg-[#0A0C10] border border-[#3A2F33]" role="img" aria-label="Riess et al 1998 Supernova Hubble Diagram Acceleration">
          <line x1="45" y1="20" x2="45" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <line x1="45" y1="200" x2="380" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <text x="320" y="218" fill="#A89A82" fontSize="9" fontFamily="monospace">Redshift z</text>
          <text x="12" y="110" fill="#A89A82" fontSize="9" fontFamily="monospace" transform="rotate(-90 15 110)">Delta mu (Residual mag)</text>

          {/* Zero acceleration baseline */}
          <line x1="45" y1="120" x2="380" y2="120" stroke="#7A8497" strokeWidth="1.5" strokeDasharray="3 3" />
          <text x="55" y="115" fill="#7A8497" fontSize="8" fontFamily="monospace">Empty Universe Baseline</text>

          {/* Accelerating Lambda > 0 model curve */}
          <path d="M 45 120 Q 180 85 360 45" stroke="#E8602B" strokeWidth="2.5" fill="none" />
          <text x="230" y="45" fill="#E8602B" fontSize="9" fontFamily="monospace">Ω_M=0.28, Ω_Λ=0.72 (Accelerating)</text>

          {/* Decelerating matter-only curve */}
          <path d="M 45 120 Q 180 150 360 175" stroke="#5FA3E0" strokeWidth="1.5" strokeDasharray="4 2" fill="none" />
          <text x="250" y="185" fill="#5FA3E0" fontSize="8" fontFamily="monospace">Ω_M=1.0, Ω_Λ=0 (Decelerating)</text>

          {/* Supernova data points with error bars */}
          {[
            [70, 118], [110, 108], [145, 98], [180, 88], [215, 80], [250, 72], [290, 62], [330, 52]
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="2.5" fill="#E9B93A" />
              <line x1={x} y1={y - 8} x2={x} y2={y + 8} stroke="#E9B93A" strokeWidth="1" />
            </g>
          ))}
          <text x="50" y="32" fill="#E9B93A" fontSize="9" fontFamily="monospace">Riess et al. (1998) Verified via pytest</text>
        </svg>
      );

    case "tess_transit":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto bg-[#0A0C10] border border-[#3A2F33]" role="img" aria-label="TESS Exoplanet Transit Light Curve Photometry">
          <line x1="45" y1="20" x2="45" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <line x1="45" y1="200" x2="380" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <text x="310" y="218" fill="#A89A82" fontSize="9" fontFamily="monospace">Orbital Phase [hours]</text>
          <text x="12" y="110" fill="#A89A82" fontSize="9" fontFamily="monospace" transform="rotate(-90 15 110)">Normalized Flux</text>

          {/* Out-of-transit flux = 1.0 */}
          <line x1="45" y1="60" x2="380" y2="60" stroke="#3A2F33" strokeDasharray="3 3" />
          <text x="50" y="52" fill="#A89A82" fontSize="8" fontFamily="monospace">F_norm = 1.000</text>

          {/* Transit Dip Curve with Limb Darkening */}
          <path
            d="M 45 60 L 140 60 Q 155 60 165 140 Q 200 160 235 140 Q 245 60 260 60 L 380 60"
            stroke="#5FA3E0"
            strokeWidth="2.5"
            fill="none"
          />

          {/* Transit Depth Marker */}
          <line x1="200" y1="60" x2="200" y2="155" stroke="#E8602B" strokeWidth="1.2" strokeDasharray="2 2" />
          <text x="210" y="115" fill="#E8602B" fontSize="8" fontFamily="monospace">Depth delta = (Rp/R*)^2</text>

          {/* Photometric scatter points from TESS */}
          {[
            [60, 62], [90, 58], [120, 61], [150, 75], [165, 125], [180, 148], [200, 155], [220, 149],
            [235, 130], [250, 78], [280, 59], [310, 63], [340, 58], [370, 61]
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="#E9B93A" opacity="0.85" />
          ))}
          <text x="50" y="185" fill="#5FA3E0" fontSize="9" fontFamily="monospace">ISRO BAH 2026 // Transit Least Squares + GP Detrending</text>
        </svg>
      );

    case "rocket_peg":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto bg-[#0A0C10] border border-[#3A2F33]" role="img" aria-label="Ignis Powered Explicit Guidance Ascent Trajectory">
          <line x1="45" y1="20" x2="45" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <line x1="45" y1="200" x2="380" y2="200" stroke="#A89A82" strokeWidth="1.5" />
          <text x="310" y="218" fill="#A89A82" fontSize="9" fontFamily="monospace">Downrange Distance [km]</text>
          <text x="12" y="110" fill="#A89A82" fontSize="9" fontFamily="monospace" transform="rotate(-90 15 110)">Altitude [km]</text>

          {/* Karman Line (100km) */}
          <line x1="45" y1="120" x2="380" y2="120" stroke="#7A8497" strokeDasharray="3 3" />
          <text x="55" y="114" fill="#7A8497" fontSize="8" fontFamily="monospace">Karman Line (100 km)</text>

          {/* Rocket Ascent Gravity Turn & PEG Trajectory */}
          <path d="M 45 200 Q 70 195 90 170 Q 140 120 220 80 T 360 65" stroke="#E8602B" strokeWidth="2.5" fill="none" />

          {/* Max-Q marker */}
          <circle cx="110" cy="150" r="4" fill="#E9B93A" />
          <text x="120" y="153" fill="#E9B93A" fontSize="8" fontFamily="monospace">Max-Q Dynamic Pressure</text>

          {/* Stage Separation MECO */}
          <circle cx="170" cy="105" r="4" fill="#5FA3E0" />
          <text x="180" y="102" fill="#5FA3E0" fontSize="8" fontFamily="monospace">Stage 1 MECO / Separation</text>

          {/* PEG Active guidance orbital insertion */}
          <circle cx="360" cy="65" r="4" fill="#22C55E" />
          <text x="270" y="58" fill="#22C55E" fontSize="8" fontFamily="monospace">Orbital Insertion (250 km)</text>

          <text x="50" y="35" fill="#E4D6AE" fontSize="9" fontFamily="monospace">IGNIS // Powered Explicit Guidance Flight Engine</text>
        </svg>
      );

    case "lunar_registration":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto bg-[#0A0C10] border border-[#3A2F33]" role="img" aria-label="Lunar Image Registration Feature Correspondence Matching">
          {/* Dual Sensor Split Panels */}
          <rect x="50" y="40" width="135" height="150" fill="#1A1C22" stroke="#A89A82" strokeWidth="1" />
          <rect x="215" y="40" width="135" height="150" fill="#1A1C22" stroke="#A89A82" strokeWidth="1" />

          <text x="55" y="32" fill="#E4D6AE" fontSize="9" fontFamily="monospace">Sensor 1: Chandrayaan OHRC</text>
          <text x="220" y="32" fill="#E4D6AE" fontSize="9" fontFamily="monospace">Sensor 2: LRO NAC (Grazing Sun)</text>

          {/* Crater in Sensor 1 */}
          <ellipse cx="115" cy="115" rx="35" ry="28" fill="#2B2E38" stroke="#E9B93A" strokeWidth="1.5" />
          <circle cx="115" cy="115" r="5" fill="#0A0C10" />

          {/* Warped Crater in Sensor 2 with shadow inversion */}
          <ellipse cx="280" cy="118" rx="36" ry="26" fill="#2B2E38" stroke="#E9B93A" strokeWidth="1.5" transform="rotate(-8 280 118)" />
          <circle cx="280" cy="118" r="5" fill="#0A0C10" />

          {/* Robust Tie-Point Correspondence lines */}
          {[
            [[90, 100], [255, 102]],
            [[140, 102], [305, 106]],
            [[115, 87], [280, 92]],
            [[115, 143], [280, 144]],
            [[115, 115], [280, 118]]
          ].map(([p1, p2], i) => (
            <line
              key={i}
              x1={p1[0]}
              y1={p1[1]}
              x2={p2[0]}
              y2={p2[1]}
              stroke="#22C55E"
              strokeWidth="1.2"
              strokeDasharray="3 2"
            />
          ))}

          <text x="60" y="215" fill="#22C55E" fontSize="9" fontFamily="monospace">SIH 2026 // LoFTR + SuperPoint Correspondence Inliers</text>
        </svg>
      );

    case "rover_planning":
      return (
        <svg viewBox="0 0 400 240" className="w-full h-auto bg-[#0A0C10] border border-[#3A2F33]" role="img" aria-label="Autonomous Rover Kinodynamic RRT Trajectory Tree">
          {/* Contour elevation topography */}
          <ellipse cx="200" cy="120" rx="140" ry="80" fill="none" stroke="#3A2F33" strokeDasharray="3 3" />
          <ellipse cx="200" cy="120" rx="90" ry="50" fill="none" stroke="#3A2F33" strokeDasharray="3 3" />
          <ellipse cx="200" cy="120" rx="45" ry="25" fill="#1C1F28" stroke="#E8602B" strokeWidth="1" />
          <text x="180" y="125" fill="#E8602B" fontSize="8" fontFamily="monospace">Hazard Crater</text>

          {/* Start and Goal points */}
          <circle cx="70" cy="170" r="5" fill="#22C55E" />
          <text x="60" y="190" fill="#22C55E" fontSize="8" fontFamily="monospace">Rover Start</text>

          <circle cx="340" cy="65" r="5" fill="#E9B93A" />
          <text x="325" y="55" fill="#E9B93A" fontSize="8" fontFamily="monospace">Way Goal</text>

          {/* Kinodynamic RRT* tree branches */}
          <path d="M 70 170 L 110 160 L 145 175 M 110 160 L 150 145 M 150 145 L 180 165 M 150 145 L 185 130" stroke="#7A8497" strokeWidth="1" fill="none" opacity="0.6" />
          <path d="M 185 130 L 220 145 M 185 130 L 230 115" stroke="#7A8497" strokeWidth="1" fill="none" opacity="0.6" />

          {/* Optimal smooth planned traversal path around crater */}
          <path d="M 70 170 Q 130 130 170 70 Q 230 40 280 55 T 340 65" stroke="#5FA3E0" strokeWidth="3" fill="none" />
          <text x="130" y="50" fill="#5FA3E0" fontSize="9" fontFamily="monospace">Kinodynamic RRT* Selected Trajectory</text>

          <text x="60" y="215" fill="#A89A82" fontSize="9" fontFamily="monospace">SAST / RIT // Rover Slip & Slope Stability Envelope</text>
        </svg>
      );
  }
}

// 12 Gallery Artwork SVG Renderers
export function GalleryArtworkSVG({ type, raw = false }: { type: string; raw?: boolean }) {
  const filterClass = raw ? "" : "vintage-grade";

  return (
    <div className={`w-full h-full relative overflow-hidden bg-[#0A0C10] ${filterClass}`}>
      <svg viewBox="0 0 320 240" className="w-full h-full block" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id={`glow-${type}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F2B48E" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#5FA3E0" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A0C10" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Base starfield background for all gallery photos */}
        <rect width="320" height="240" fill="#0F1116" />
        <circle cx="30" cy="40" r="1" fill="#FFFFFF" opacity="0.6" />
        <circle cx="90" cy="20" r="1.2" fill="#E4D6AE" opacity="0.8" />
        <circle cx="290" cy="50" r="1.5" fill="#FFFFFF" opacity="0.5" />
        <circle cx="260" cy="210" r="1" fill="#E9B93A" opacity="0.7" />

        {type === "andromeda" && (
          <g>
            <ellipse cx="160" cy="120" rx="110" ry="45" fill={`url(#glow-${type})`} transform="rotate(-30 160 120)" />
            <ellipse cx="160" cy="120" rx="35" ry="15" fill="#FFFDF8" transform="rotate(-30 160 120)" />
            {/* Dark dust lanes */}
            <path d="M 90 145 Q 160 130 230 95" stroke="#0A0C10" strokeWidth="4" fill="none" opacity="0.85" />
            <path d="M 80 155 Q 160 140 240 105" stroke="#0A0C10" strokeWidth="3" fill="none" opacity="0.7" />
            <circle cx="120" cy="70" r="6" fill="#FFFDF8" opacity="0.8" />
            <text x="130" y="73" fill="#E4D6AE" fontSize="7" fontFamily="monospace">M32</text>
          </g>
        )}

        {type === "observatory" && (
          <g>
            {/* Ridge mountain silhouette */}
            <path d="M 0 190 Q 90 160 160 170 Q 230 150 320 185 L 320 240 L 0 240 Z" fill="#1C1E24" />
            {/* Dome structure */}
            <rect x="130" y="110" width="60" height="65" fill="#E4D6AE" stroke="#3A2F33" strokeWidth="1" />
            <path d="M 125 110 A 35 35 0 0 1 195 110 Z" fill="#F0E6CB" stroke="#3A2F33" strokeWidth="1" />
            {/* Dome shutter slit */}
            <rect x="156" y="80" width="8" height="95" fill="#0A0C10" />
            {/* Laser guide star / beam */}
            <line x1="160" y1="80" x2="230" y2="0" stroke="#E8602B" strokeWidth="1.5" strokeOpacity="0.85" />
          </g>
        )}

        {type === "desk_chalkboard" && (
          <g>
            <rect x="20" y="20" width="280" height="200" fill="#202A24" stroke="#A89A82" strokeWidth="3" />
            <text x="40" y="55" fill="#E4D6AE" fontSize="12" fontFamily="monospace">R_uv - 1/2 g_uv R = 8pi G T_uv</text>
            <text x="40" y="85" fill="#E4D6AE" fontSize="11" fontFamily="monospace">Gamma^u_ab = 1/2 g^uc (d_a g_bc...)</text>
            <path d="M 50 110 Q 140 150 240 110" stroke="#E9B93A" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
            <text x="40" y="170" fill="#F2B48E" fontSize="10" fontFamily="cursive">nabla_v T^uv = 0  [energy cons!]</text>
          </g>
        )}

        {type === "total_eclipse" && (
          <g>
            {/* Corona rays */}
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <line
                key={deg}
                x1="160"
                y1="120"
                x2={160 + Math.cos((deg * Math.PI) / 180) * 85}
                y2={120 + Math.sin((deg * Math.PI) / 180) * 85}
                stroke="#F0E6CB"
                strokeWidth="1.5"
                opacity="0.6"
              />
            ))}
            <circle cx="160" cy="120" r="42" fill="#E4D6AE" opacity="0.4" filter="blur(6px)" />
            {/* Black moon disk */}
            <circle cx="160" cy="120" r="38" fill="#0A0C10" />
            {/* Diamond ring gleam */}
            <circle cx="187" cy="94" r="5" fill="#FFFDF8" filter="drop-shadow(0 0 6px #FFFFFF)" />
          </g>
        )}

        {type === "symposium" && (
          <g>
            <rect x="0" y="140" width="320" height="100" fill="#1A1C22" />
            {/* People silhouettes around table */}
            <circle cx="80" cy="120" r="16" fill="#3B3B3D" />
            <path d="M 60 145 C 60 135 100 135 100 145 Z" fill="#3B3B3D" />
            <circle cx="150" cy="115" r="17" fill="#3B3B3D" />
            <path d="M 125 145 C 125 130 175 130 175 145 Z" fill="#3B3B3D" />
            <circle cx="230" cy="125" r="15" fill="#3B3B3D" />
            <path d="M 210 145 C 210 135 250 135 250 145 Z" fill="#3B3B3D" />
            {/* Illuminated slide on wall */}
            <rect x="70" y="30" width="180" height="70" fill="#E4D6AE" opacity="0.9" stroke="#3A2F33" strokeWidth="2" />
            <line x1="90" y1="50" x2="160" y2="50" stroke="#0A0C10" strokeWidth="2" />
            <path d="M 90 85 L 120 65 L 160 78 L 220 55" stroke="#E8602B" strokeWidth="2" fill="none" />
          </g>
        )}

        {type === "high_altitude_camp" && (
          <g>
            {/* Jagged mountain peaks */}
            <polygon points="0,200 70,80 150,180 230,60 320,200 320,240 0,240" fill="#242730" />
            <polygon points="70,80 90,120 60,120" fill="#E4D6AE" opacity="0.7" />
            <polygon points="230,60 255,105 215,105" fill="#E4D6AE" opacity="0.7" />
            {/* Expedition orange tent */}
            <polygon points="120,210 145,175 170,210" fill="#E8602B" stroke="#3A2F33" strokeWidth="1" />
            <polygon points="145,175 170,210 185,205 160,172" fill="#C04A1A" />
            {/* Telescope tripod */}
            <line x1="210" y1="180" x2="200" y2="215" stroke="#E4D6AE" strokeWidth="1.5" />
            <line x1="210" y1="180" x2="220" y2="215" stroke="#E4D6AE" strokeWidth="1.5" />
            <line x1="205" y1="175" x2="225" y2="165" stroke="#5FA3E0" strokeWidth="4" strokeLinecap="round" />
          </g>
        )}

        {type === "radio_dish" && (
          <g>
            {/* Radio dish parabolic bowl */}
            <ellipse cx="160" cy="110" rx="90" ry="40" fill="#282B34" stroke="#E4D6AE" strokeWidth="1.5" />
            {/* Support struts */}
            <line x1="160" y1="110" x2="160" y2="60" stroke="#E8602B" strokeWidth="1.5" />
            <line x1="100" y1="110" x2="160" y2="60" stroke="#A89A82" strokeWidth="1" />
            <line x1="220" y1="110" x2="160" y2="60" stroke="#A89A82" strokeWidth="1" />
            {/* Feed horn */}
            <circle cx="160" cy="60" r="5" fill="#E9B93A" />
            {/* Pedestal base */}
            <polygon points="140,150 180,150 190,220 130,220" fill="#1C1E24" stroke="#3A2F33" strokeWidth="1" />
          </g>
        )}

        {type === "orrery_brass" && (
          <g>
            <circle cx="160" cy="120" r="18" fill="#E9B93A" stroke="#A9823F" strokeWidth="2" />
            <ellipse cx="160" cy="120" rx="45" ry="20" stroke="#A9823F" strokeWidth="1" fill="none" strokeDasharray="3 2" />
            <circle cx="195" cy="110" r="5" fill="#5FA3E0" />
            <ellipse cx="160" cy="120" rx="85" ry="40" stroke="#A9823F" strokeWidth="1.2" fill="none" />
            <circle cx="230" cy="135" r="9" fill="#E8602B" />
            {/* Saturn ring */}
            <ellipse cx="230" cy="135" rx="16" ry="4" stroke="#F0E6CB" strokeWidth="1.5" fill="none" />
            {/* Gear teeth border */}
            <circle cx="160" cy="120" r="95" stroke="#A9823F" strokeWidth="2" strokeDasharray="4 6" fill="none" />
          </g>
        )}

        {type === "muon_chamber" && (
          <g>
            <rect x="40" y="30" width="240" height="180" fill="#0A0C10" stroke="#5FA3E0" strokeWidth="2" />
            {/* Muon straight ionizing vapor track */}
            <line x1="90" y1="30" x2="230" y2="210" stroke="#FFFDF8" strokeWidth="2" filter="drop-shadow(0 0 4px #5FA3E0)" />
            {/* Alpha particle curly track */}
            <path d="M 120 140 Q 110 170 135 165 T 140 185" stroke="#E9B93A" strokeWidth="3" fill="none" />
            <circle cx="90" cy="30" r="3" fill="#FFFDF8" />
            <text x="50" y="50" fill="#5FA3E0" fontSize="8" fontFamily="monospace">MUON TRACK: 3.4 GeV</text>
          </g>
        )}

        {type === "supercomputer_rack" && (
          <g>
            {/* Server racks with blinkenlights */}
            {[40, 125, 210].map((rx, idx) => (
              <g key={idx}>
                <rect x={rx} y="30" width="70" height="180" fill="#1A1C20" stroke="#3A2F33" strokeWidth="1.5" />
                {[50, 75, 100, 125, 150, 175].map((ry, sidx) => (
                  <g key={sidx}>
                    <line x1={rx + 5} y1={ry} x2={rx + 65} y2={ry} stroke="#3A2F33" strokeWidth="1" />
                    <circle cx={rx + 12} cy={ry - 5} r="2" fill="#E8602B" />
                    <circle cx={rx + 20} cy={ry - 5} r="2" fill="#5FA3E0" />
                    <circle cx={rx + 28} cy={ry - 5} r="2" fill="#E9B93A" />
                  </g>
                ))}
              </g>
            ))}
          </g>
        )}

        {type === "caltech_arches" && (
          <g>
            <rect width="320" height="240" fill="#E4D6AE" />
            {/* Colonnade arches */}
            {[20, 110, 200, 290].map((ax, idx) => (
              <g key={idx}>
                <rect x={ax} y="70" width="16" height="170" fill="#8C9275" />
                <path d={`M ${ax - 8} 70 Q ${ax + 35} 10 ${ax + 78} 70`} stroke="#3A2F33" strokeWidth="3" fill="none" />
                <rect x={ax + 8} y="150" width="60" height="90" fill="#3A2F33" opacity="0.35" />
              </g>
            ))}
          </g>
        )}

        {type === "lunar_crater" && (
          <g>
            <rect width="320" height="240" fill="#1C1E24" />
            {/* Crater rim & Central peak with harsh shadows */}
            <ellipse cx="160" cy="120" rx="90" ry="70" fill="#3B3B3D" stroke="#A89A82" strokeWidth="2" />
            <ellipse cx="160" cy="120" rx="80" ry="60" fill="#0A0C10" />
            <polygon points="145,120 160,95 175,120 160,125" fill="#E4D6AE" />
            <polygon points="160,95 175,120 190,135 160,125" fill="#0A0C10" />
            {/* Ejecta rays */}
            <line x1="80" y1="80" x2="20" y2="40" stroke="#A89A82" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="240" y1="80" x2="300" y2="40" stroke="#A89A82" strokeWidth="1" strokeDasharray="3 2" />
            <line x1="160" y1="190" x2="160" y2="235" stroke="#A89A82" strokeWidth="1" strokeDasharray="3 2" />
          </g>
        )}
      </svg>
    </div>
  );
}

// Dark Academia Celestial Engraving Ornaments
export function AntiqueAstrolabeSVG({ className = "w-32 h-32 text-amber-800" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="0.8" aria-hidden="true">
      <circle cx="50" cy="50" r="46" strokeWidth="1.2" />
      <circle cx="50" cy="50" r="42" strokeDasharray="1 1.5" />
      <circle cx="50" cy="50" r="32" />
      <circle cx="50" cy="50" r="18" />
      {/* Astrolabe rete curves */}
      <path d="M 18 50 C 18 32 32 18 50 18 C 68 18 82 32 82 50" />
      <path d="M 28 65 Q 50 30 72 65" strokeDasharray="2 2" />
      <line x1="50" y1="4" x2="50" y2="96" />
      <line x1="4" y1="50" x2="96" y2="50" />
      {/* Alidade pointer */}
      <line x1="20" y1="80" x2="80" y2="20" strokeWidth="1.5" stroke="#5E1B1E" />
      <circle cx="50" cy="50" r="3" fill="#A9823F" />
      {/* Suspension throne ring */}
      <circle cx="50" cy="6" r="4" strokeWidth="1.2" />
    </svg>
  );
}
