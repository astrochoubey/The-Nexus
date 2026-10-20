import React, { useState, useEffect } from "react";
import { galleryData, GalleryItem, GalleryCategory } from "../data/gallery";
import { GalleryArtworkSVG, DotMatrix, Crosshair, RetroBarcode } from "../components/RetroGraphics";
import { X, ChevronLeft, ChevronRight, Sliders, Camera, Eye } from "lucide-react";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState<GalleryCategory>("ALL");
  const [rawGrade, setRawGrade] = useState<boolean>(false);
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories: GalleryCategory[] = ["ALL", "SKY", "TRAVEL", "PEOPLE", "DESK"];

  const filteredItems =
    selectedCategory === "ALL"
      ? galleryData
      : galleryData.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox: ArrowLeft, ArrowRight, ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;

      if (e.key === "Escape") {
        setActiveLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setActiveLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const activeItem =
    activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null;

  return (
    <div className="w-full min-h-screen bg-[#0A0C10] text-[#E4D6AE] py-14 px-4 sm:px-8 relative overflow-hidden hairline-grid-dark">
      <div className="max-w-7xl mx-auto space-y-10 relative z-10">
        {/* =========================================================================
            HEADER: VINTAGE FILM ARCHIVE & ASTRONAUTS COLLAGE IDENTITY
        ========================================================================= */}
        <div className="border-b-2 border-[#E4D6AE]/20 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-[#5FA3E0]">
              <Camera className="w-4 h-4 text-[#E8602B]" />
              <span>MISSION EXPEDITION LOGS // 35MM & MEDIUM FORMAT ARCHIVE</span>
            </div>
            <h1 className="font-editorial text-4xl sm:text-6xl font-black text-[#F0E6CB] tracking-tight uppercase">
              VISUAL RECONNAISSANCE
            </h1>
            <p className="font-mono text-xs sm:text-sm text-[#A89A82] max-w-2xl">
              Photographic documentation across mountaintop observatories, particle labs, late-night chalkboard derivations, and high-altitude research camps.
            </p>
          </div>

          {/* VINTAGE / RAW Toggle Switch & Info */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#141720] border border-[#E4D6AE]/30 p-3 shadow-lg">
            <div className="flex items-center gap-2 font-mono text-xs">
              <Sliders className="w-3.5 h-3.5 text-[#E8602B]" />
              <span className="text-[#A89A82]">FILM GRADE:</span>
            </div>

            <div className="flex items-center gap-1 bg-black/60 p-1 border border-white/10 text-xs font-mono">
              <button
                type="button"
                onClick={() => setRawGrade(false)}
                className={`px-3 py-1 font-bold transition-all ${
                  !rawGrade
                    ? "bg-[#E9B93A] text-black shadow-xs"
                    : "text-[#A89A82] hover:text-white"
                }`}
              >
                VINTAGE 1974
              </button>
              <button
                type="button"
                onClick={() => setRawGrade(true)}
                className={`px-3 py-1 font-bold transition-all ${
                  rawGrade
                    ? "bg-[#5FA3E0] text-black shadow-xs"
                    : "text-[#A89A82] hover:text-white"
                }`}
              >
                RAW EXPOSURE
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================================
            FILM CANISTER FILTER TABS
        ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-2 border-b border-[#E4D6AE]/10">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`flex items-center gap-2 px-4 py-1.5 font-mono text-xs font-bold tracking-widest uppercase transition-all rounded-xs border ${
                    isSelected
                      ? "bg-[#E8602B] text-black border-[#E8602B] shadow-[2px_2px_0_#F2B48E]"
                      : "bg-[#14161E] border-[#E4D6AE]/30 text-[#E4D6AE] hover:bg-[#1E222E]"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-current" />
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

          <div className="font-mono text-xs text-[#A89A82] flex items-center gap-3">
            <span>INDEXING {filteredItems.length} FRAMES</span>
            <RetroBarcode code="ROLL-35MM" className="h-4 hidden sm:flex text-white" />
          </div>
        </div>

        {/* =========================================================================
            MASONRY COLLAGE: Overlapping Framed Panels with Cream Borders on Black
            + Taped Polaroids (Astronauts + Robin references)
        ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {filteredItems.map((item, index) => {
            return (
              <div
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="taped-polaroid p-3 bg-[#FFFDF8] border-2 border-[#0A0C10] cursor-pointer group select-none"
                style={{
                  transform: `rotate(${item.rotation}deg)`
                }}
                role="button"
                tabIndex={0}
                aria-label={`Open photo lightbox for ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveLightboxIndex(index);
                  }
                }}
              >
                {/* Masking Tape Strips (Robin Reference) */}
                {item.tapePosition === "top" && <div className="tape-strip tape-top" />}
                {item.tapePosition === "corners" && (
                  <>
                    <div className="tape-strip tape-top-left" />
                    <div className="tape-strip tape-top-right" />
                  </>
                )}
                {item.tapePosition === "diagonal" && (
                  <div className="tape-strip tape-top-left" />
                )}

                {/* Overlapping Image Panel with Cream Border on Black (Astronauts Reference) */}
                <div className="w-full aspect-4/3 bg-[#0A0C10] border-2 border-[#3A2F33] p-1.5 overflow-hidden relative shadow-inner">
                  <GalleryArtworkSVG type={item.svgType} raw={rawGrade} />

                  {/* Frame Metadata Corner Overlay */}
                  <div className="absolute bottom-2 left-2 right-2 px-2 py-1 bg-black/75 backdrop-blur-xs flex items-center justify-between font-mono text-[9px] text-[#E4D6AE] border border-white/10">
                    <span className="font-bold text-[#E8602B]">{item.frameNumber}</span>
                    <span className="text-[#A89A82]">{item.exposure}</span>
                  </div>
                </div>

                {/* Polaroid Bottom Border with Handwritten Caption */}
                <div className="pt-3 pb-1 px-1">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[#3A2F33]/70 pb-1">
                    <span className="font-bold uppercase tracking-wider">{item.category}</span>
                    <span>{item.date}</span>
                  </div>

                  <h3 className="font-editorial text-base font-bold text-[#0A0C10] leading-tight">
                    {item.title}
                  </h3>

                  {/* Handwritten Annotation Note in Cursive */}
                  <p className="font-handwritten text-base text-[#E8602B] font-bold mt-1 leading-snug">
                    "{item.handwrittenNote}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Explorer Outlined Note */}
        <div className="pt-8 text-center font-mono text-xs text-[#A89A82]">
          CLICK ANY FRAME TO ENGAGE FULL TELEMETRY LIGHTBOX // USE ARROW KEYS TO TRAVERSE
        </div>
      </div>

      {/* =========================================================================
          INTERACTIVE LIGHTBOX WITH METADATA & ARROW NAVIGATION
      ========================================================================= */}
      {activeItem && activeLightboxIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setActiveLightboxIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0A0C10] border-4 border-[#F0E6CB] p-4 sm:p-6 shadow-2xl text-[#E4D6AE]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Header Bar */}
            <div className="flex items-center justify-between border-b border-[#E4D6AE]/20 pb-3 mb-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <Crosshair className="text-[#E8602B]" />
                <span className="font-bold text-[#E8602B]">{activeItem.frameNumber}</span>
                <span className="text-[#A89A82]">·</span>
                <span className="text-[#5FA3E0]">{activeItem.exposure}</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#A89A82] hidden sm:inline">
                  [{activeLightboxIndex + 1} OF {filteredItems.length}]
                </span>
                <button
                  type="button"
                  onClick={() => setActiveLightboxIndex(null)}
                  className="p-1 border border-[#E4D6AE]/30 hover:bg-[#E8602B] hover:text-black transition-colors"
                  aria-label="Close Lightbox"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Lightbox Image View */}
            <div className="w-full aspect-16/10 sm:aspect-16/9 bg-black border-2 border-[#3A2F33] overflow-hidden relative">
              <GalleryArtworkSVG type={activeItem.svgType} raw={rawGrade} />

              {/* Prev / Next Floating Arrows */}
              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex(
                    (activeLightboxIndex - 1 + filteredItems.length) % filteredItems.length
                  )
                }
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#E8602B] hover:text-black border border-white/20 transition-all text-white"
                aria-label="Previous Frame"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                type="button"
                onClick={() =>
                  setActiveLightboxIndex((activeLightboxIndex + 1) % filteredItems.length)
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/70 hover:bg-[#E8602B] hover:text-black border border-white/20 transition-all text-white"
                aria-label="Next Frame"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Footer Details */}
            <div className="mt-4 pt-4 border-t border-[#E4D6AE]/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono">
              <div className="space-y-1">
                <h2 className="font-editorial text-2xl font-bold text-white">
                  {activeItem.title}
                </h2>
                <p className="text-xs text-[#A89A82] max-w-xl">
                  {activeItem.caption}
                </p>
                <p className="font-handwritten text-lg text-[#E9B93A] font-bold">
                  "{activeItem.handwrittenNote}"
                </p>
              </div>

              <div className="text-right text-xs space-y-1 shrink-0 self-end sm:self-center">
                <div className="text-[#5FA3E0] font-bold">{activeItem.location}</div>
                <div className="text-[#A89A82] text-[11px]">{activeItem.date}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
