import React from "react";
import StarfieldCanvas from "../components/StarfieldCanvas";
import ProjectFolders from "../components/ProjectFolders";
import { siteData } from "../data/site";
import { achievementsData } from "../data/achievements";
import {
  Crosshair,
  DotMatrix,
  SegmentedBar,
  ChevronChain,
  HazardDiamond,
  RetroBarcode,
  WireframeGlobe
} from "../components/RetroGraphics";
import { ArrowDown, Terminal, Award, BookOpen, Compass, Orbit, Database, Radio, Cpu } from "lucide-react";

export default function AstroPage() {
  const scrollToAbout = () => {
    const el = document.getElementById("about-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full relative overflow-hidden bg-[#0A0C10] text-[#E4D6AE]">
      {/* =========================================================================
          SECTION 1: HERO LANDING (Space in the 70s Title Card & Mission Control Console)
          (PHOTO PLACEHOLDER REMOVED AS REQUESTED)
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex flex-col justify-between p-6 sm:p-10 hairline-grid-dark border-b border-[#E4D6AE]/20">
        <StarfieldCanvas />

        {/* Corner Telemetry Registration Marks */}
        <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#A89A82]/80">
          <div className="flex items-center gap-2">
            <Crosshair className="text-[#E8602B]" />
            <span>STN // {siteData.stationId}</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span>{siteData.coordinates}</span>
            <DotMatrix className="text-[#5FA3E0]/60" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYSTEMS NOMINAL // DUAL-DEGREE SCHOLAR</span>
          </div>
        </div>

        {/* Hero Center Display Area */}
        <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Vertical Eyebrow + 70s Title Card */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Vertical/Horizontal Eyebrow ("PRACHI CHOUBEY PRESENTS") */}
            <div className="flex items-center gap-3">
              <span className="w-8 h-[2px] bg-[#E8602B]" />
              <span className="font-display-wide text-xs sm:text-sm font-bold tracking-[0.28em] text-[#F2B48E]">
                {siteData.eyebrow}
              </span>
            </div>

            {/* Main 70s Display Title */}
            <h1 className="title-card-70s text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-none uppercase">
              {siteData.mainTitle}
            </h1>

            {/* Sub-Title Monospace Banner */}
            <div className="border-l-2 border-[#E9B93A] pl-4 py-1">
              <p className="font-mono text-xs sm:text-sm tracking-widest text-[#E4D6AE] font-bold">
                {siteData.subTitle}
              </p>
              <p className="text-xs text-[#A89A82] font-mono mt-1">
                {siteData.bio.lead}
              </p>
            </div>

            {/* Research Core Focus Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {siteData.researchInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-black/60 border border-[#E4D6AE]/30 text-[10px] font-mono font-bold text-[#E9B93A]"
                >
                  ✦ {interest}
                </span>
              ))}
            </div>

            {/* Explore More CTA Button & Badges */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToAbout}
                className="retro-btn retro-btn-space group"
                aria-label="Explore Portfolio Sections"
              >
                <span className="btn-icon-box group-hover:translate-y-0.5 transition-transform">
                  <ArrowDown className="w-3 h-3" />
                </span>
                <span>EXPLORE ARCHIVE</span>
              </button>

              <div className="flex items-center gap-2 text-xs font-mono text-[#A89A82] border border-[#E4D6AE]/20 px-3 py-1.5 bg-black/40">
                <ChevronChain count={3} className="text-[#E8602B]" />
                <span>ORCID: {siteData.orcid}</span>
              </div>
            </div>
          </div>

          {/* Right: Mission Control Telemetry Console (PHOTO PLACEHOLDER REMOVED) */}
          <div className="lg:col-span-5 relative w-full">
            <div className="border-2 border-[#E4D6AE]/40 bg-[#0F1117] p-6 shadow-2xl rounded-xs hud-border space-y-5">
              {/* Telemetry Console Header */}
              <div className="flex items-center justify-between border-b border-[#E4D6AE]/20 pb-3 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#5FA3E0]">
                  <Orbit className="w-4 h-4 text-[#E8602B]" />
                  <span className="font-bold tracking-widest">MISSION TELEMETRY CONSOLE</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 bg-[#E8602B] text-black font-bold">
                  ACTIVE
                </span>
              </div>

              {/* Scholar Dual Degree Dossier */}
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 bg-black/60 border border-white/10 space-y-1">
                  <div className="flex justify-between text-[#A89A82] text-[10px]">
                    <span>RESEARCH SCHOLAR</span>
                    <span>PRIMARY STATION</span>
                  </div>
                  <div className="flex justify-between font-bold text-[#F0E6CB]">
                    <span>{siteData.ownerName}</span>
                    <span>{siteData.location}</span>
                  </div>
                </div>

                <div className="p-3 bg-black/60 border border-white/10 space-y-2 text-[11px]">
                  <div className="flex items-start gap-2">
                    <Cpu className="w-3.5 h-3.5 text-[#5FA3E0] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block">B.Tech in Computer Science & AI</strong>
                      <span className="text-[#A89A82]">Newton School of Technology, Rishihood Univ (2029)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 pt-2 border-t border-white/10">
                    <Database className="w-3.5 h-3.5 text-[#E9B93A] mt-0.5 shrink-0" />
                    <div>
                      <strong className="text-white block">B.Sc in Physics, Math & Chemistry</strong>
                      <span className="text-[#A89A82]">Indira Gandhi National Open University (IGNOU)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wireframe Celestial Coordinate Subsystem & Status */}
              <div className="flex items-center justify-between pt-2 border-t border-[#E4D6AE]/20 font-mono text-xs">
                <div className="flex items-center gap-3">
                  <WireframeGlobe className="w-12 h-12 text-[#E8602B]" />
                  <div className="text-[10px] space-y-0.5">
                    <div className="text-[#5FA3E0] font-bold">ORBITAL DYNAMICS // PEG</div>
                    <div className="text-[#A89A82]">NASA TESS + EXOPLANET ARCHIVE</div>
                  </div>
                </div>

                <RetroBarcode code="ASTRO-CHOUBEY" className="h-6 text-[#E4D6AE]" />
              </div>
            </div>
          </div>
        </div>

        {/* Hero Bottom Telemetry Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#E4D6AE]/20 text-[11px] font-mono text-[#A89A82]">
          <div className="flex items-center gap-3">
            <span className="text-[#E8602B] font-bold">SOLVER TELEMETRY:</span>
            <SegmentedBar total={8} filled={7} color="#E8602B" />
          </div>
          <div className="flex items-center gap-4">
            <span className="tracking-widest">TEST-DRIVEN NUMERICAL ASTROPHYSICS // ASTROPY + SCIPY</span>
            <button
              onClick={scrollToAbout}
              className="text-[#5FA3E0] hover:text-[#F2B48E] flex items-center gap-1 font-bold"
            >
              <span>DESCEND</span>
              <ChevronChain count={2} />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: ABOUT (Parchment Section like Astronauts Reference)
      ========================================================================= */}
      <section
        id="about-section"
        className="w-full py-20 px-6 sm:px-10 bg-[#E4D6AE] text-[#3A2F33] paper-texture hairline-grid relative border-b-2 border-[#3A2F33]/30"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Eyebrow & Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#3A2F33]/20 pb-4 mb-12">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E8602B]">
                <Crosshair className="text-[#E8602B]" />
                <span>PERSONNEL FILE // DOSSIER 01</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-black text-[#0A0C10] tracking-tight uppercase mt-1">
                ABOUT THE INVESTIGATOR
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <RetroBarcode code="RESEARCHER-PRACHI-CHOUBEY" className="h-7 text-[#3A2F33]" />
              <div className="ink-stamp ink-stamp-orange text-xs">
                DUAL-DEGREE SCHOLAR
              </div>
            </div>
          </div>

          {/* Main Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Technical Archival Dossier Frame & Rotated Labels */}
            <div className="lg:col-span-5 relative flex flex-col items-center sm:items-start">
              <div className="relative w-full max-w-sm">
                {/* Rotated Name Label Strip on side */}
                <div
                  className="hidden sm:block absolute -left-10 top-12 font-display-wide text-xs font-bold tracking-widest text-[#6E6B4E]"
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)"
                  }}
                >
                  PRACHI CHOUBEY // RESEARCHER
                </div>

                {/* Archival Research Identity Panel */}
                <div className="relative z-10 w-full aspect-4/5 bg-[#0A0C10] border-4 border-[#F0E6CB] p-4 shadow-2xl text-[#E4D6AE] flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-white/20 pb-2 text-[10px] font-mono">
                      <span className="text-[#E8602B] font-bold">DOSSIER_CHOUBEY_2026</span>
                      <span>IN // HAR</span>
                    </div>

                    <div className="p-3 bg-[#1C1E24] border border-[#3A2F33] flex items-center justify-center">
                      <WireframeGlobe className="w-28 h-28 text-[#E9B93A]" />
                    </div>

                    <div className="font-mono text-xs space-y-1">
                      <p className="text-white font-bold text-sm">{siteData.ownerName}</p>
                      <p className="text-[#5FA3E0] text-[11px]">{siteData.affiliation}</p>
                      <p className="text-[#A89A82] text-[10px]">{siteData.location}</p>
                    </div>
                  </div>

                  <div className="border-t border-white/10 pt-3 flex justify-between items-center text-[9px] font-mono text-[#A89A82]">
                    <span>ORCID: {siteData.orcid}</span>
                    <span className="text-[#22C55E]">STATUS: ACTIVE</span>
                  </div>
                </div>

                {/* Taped Polaroid Note offset at bottom right (Robin reference seasoning) */}
                <div
                  className="absolute -bottom-10 -right-6 w-48 sm:w-56 p-3 bg-white border border-[#3A2F33]/20 taped-polaroid z-20 hidden sm:block"
                  style={{ transform: "rotate(3deg)" }}
                >
                  <div className="tape-strip tape-top" />
                  <div className="w-full aspect-square bg-[#1C1E24] overflow-hidden border border-[#3A2F33]/20 flex flex-col items-center justify-center p-3 text-center space-y-1">
                    <span className="text-[10px] font-mono text-[#E8602B] font-bold">EVENT HORIZON 2026</span>
                    <span className="text-[9px] font-mono text-white/80">Director & Founder // 500+ Innovators</span>
                  </div>
                  <div className="mt-2 text-center">
                    <p className="font-handwritten text-sm text-[#0A0C10] font-bold">
                      {siteData.bio.handwrittenNote}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Bio Paragraphs + Handwritten Annotation + Sticker Tags */}
            <div className="lg:col-span-7 space-y-6">
              {/* Bio Lead & Narrative */}
              <div className="space-y-4 font-mono text-sm leading-relaxed text-[#3A2F33]">
                <p className="text-base font-bold text-[#0A0C10] bg-white/70 p-4 border-l-4 border-[#E8602B] shadow-xs">
                  {siteData.bio.lead}
                </p>

                {siteData.bio.paragraphs.map((para, i) => (
                  <p key={i} className="text-justify">
                    {para}
                  </p>
                ))}
              </div>

              {/* Handwritten margin note with arrow */}
              <div className="flex items-center gap-3 py-2 text-[#E8602B]">
                <span className="font-handwritten text-xl font-bold">
                  ⤷ "Testing photoevaporation slopes dlogR/dlogP ≈ -0.15 on NASA catalogs"
                </span>
                <span className="text-xs font-mono font-bold">[NOTE // RESEARCH]</span>
              </div>

              {/* Skills & Toolsets as Torn / Zig-zag Sticker Tags */}
              <div className="pt-4 border-t-2 border-[#3A2F33]/20 space-y-4">
                <h3 className="font-mono text-xs font-bold tracking-widest text-[#0A0C10] uppercase flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#E8602B]" />
                  TECHNICAL SKILLS & COMPUTATIONAL TOOLSETS:
                </h3>

                {siteData.skills.map((group) => (
                  <div key={group.category} className="space-y-2">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-[#6E6B4E]">
                      {group.category} //
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, sIdx) => {
                        const rotations = [-2, 1.5, -1, 2, -1.5, 1];
                        const rot = rotations[sIdx % rotations.length];
                        return (
                          <span
                            key={skill}
                            className="sticker-tag"
                            style={{ "--rot": rot } as React.CSSProperties}
                          >
                            {skill}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Explorer Outlined Button */}
              <div className="pt-4 flex items-center gap-4">
                <a
                  href="#projects-archive"
                  className="retro-btn"
                >
                  <span className="btn-icon-box">↓</span>
                  <span>INSPECT THE 6 RESEARCH DOSSIERS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: THE ARCHIVE (Signature Physical File Folders - Grid Daily Style)
      ========================================================================= */}
      <section
        id="projects-archive"
        className="w-full py-10 px-4 sm:px-8 bg-[#0F1116] border-b-2 border-[#E4D6AE]/20 hairline-grid-dark relative"
      >
        <div className="max-w-7xl mx-auto space-y-5">
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E4D6AE]/20 pb-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#5FA3E0]">
                <DotMatrix className="text-[#5FA3E0]" />
                <span>GRID DAILY_01–06 // COMPUTATIONAL ASTROPHYSICS CODEBASES</span>
              </div>
              <h2 className="font-editorial text-3xl sm:text-5xl font-black text-[#E4D6AE] tracking-tight uppercase mt-1">
                RESEARCH & COMPUTATIONAL PROJECTS
              </h2>
            </div>

            <div className="flex items-center gap-3 font-mono text-xs text-[#A89A82]">
              <span className="hidden sm:inline">CLICK FOLDER TO PULL FORWARD // ESC TO CLOSE</span>
              <div className="ink-stamp text-xs text-[#E9B93A] border-[#E9B93A]">
                6 DOSSIERS CLASSIFIED
              </div>
            </div>
          </div>

          {/* Physical Folders Accordion Component */}
          <ProjectFolders />
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: ACHIEVEMENTS ("MISSION LOG" - Mars Exploration Tee Style)
      ========================================================================= */}
      <section className="w-full py-20 px-6 sm:px-10 bg-[#2B2C2E] text-white relative border-b-2 border-black">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Mission Log Header in Mars Tee Style */}
          <div className="flex flex-wrap items-center justify-between gap-6 border-b-2 border-white/20 pb-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <HazardDiamond label="1" className="w-7 h-7 text-[#E8602B]" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#E8602B] uppercase">
                  MISSION LOG // HONORS, COMPETITIONS & LEADERSHIP
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-6xl font-black text-white tracking-tight uppercase">
                AWARDS & RECOGNITION
              </h2>
            </div>

            {/* Wireframe globe & barcode */}
            <div className="flex items-center gap-4">
              <WireframeGlobe className="w-16 h-16 text-white/70 hidden sm:block" />
              <RetroBarcode code="PRACHI-HONORS-2026" className="text-white" />
            </div>
          </div>

          {/* Sub-Header Rounded Outlined Caption Bar with Orange Mono Text */}
          <div className="p-3 rounded-full border-2 border-white/40 bg-black/40 text-center font-mono text-xs tracking-wider text-[#E8602B] max-w-3xl mx-auto">
            "TRANSLATING COMPLEX MATHEMATICAL AND PHYSICAL PRINCIPLES INTO VERIFIED, HIGH-PERFORMANCE SCIENTIFIC CODEBASES."
          </div>

          {/* 6 Achievements in Chamfered HUD Boxes */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievementsData.map((item) => (
              <div
                key={item.id}
                className="chamfer-card hud-border p-6 bg-[#1F2022] hover:bg-[#25272A] transition-all hover:-translate-y-1 border border-white/20 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  {/* Top Header Tag */}
                  <div className="flex items-center justify-between font-mono text-[11px] mb-3 pb-2 border-b border-white/10">
                    <span className="text-[#E8602B] font-bold tracking-wider">
                      {item.code}
                    </span>
                    <span className="px-2 py-0.5 rounded-xs bg-black/50 text-[#E4D6AE] text-[9px] font-bold">
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-editorial text-xl font-bold text-white group-hover:text-[#F2B48E] transition-colors leading-snug mb-2">
                    {item.title}
                  </h3>

                  {/* Organisation */}
                  <p className="font-mono text-xs text-[#5FA3E0] font-semibold mb-3">
                    {item.organisation}
                  </p>

                  {/* Description */}
                  <p className="font-mono text-xs text-white/75 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Footer Tag & Segmented Indicator */}
                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono">
                  <span className="text-[#A89A82] tracking-wider uppercase">
                    {item.hudTag}
                  </span>
                  <ChevronChain count={3} className="text-[#E8602B]" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Tee Graphic Details: Icons, Chevrons, Dashes */}
          <div className="pt-8 border-t border-white/20 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-white/60">
            <div className="flex items-center gap-4">
              <HazardDiamond label="A" className="w-5 h-5 text-amber-500" />
              <span>COMPUTATIONAL ASTROPHYSICS & AI DIVISION</span>
            </div>
            <div className="flex items-center gap-3">
              <span>STATUS:</span>
              <SegmentedBar total={10} filled={10} color="#E8602B" />
              <ChevronChain count={4} className="text-[#E8602B]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
