import React, { useState } from "react";
import { writingData, distinctionsData, WritingItem } from "../data/writing";
import { AntiqueAstrolabeSVG } from "../components/RetroGraphics";
import { BookMarked, Feather, Scroll, Sparkles } from "lucide-react";

export default function WritingPage() {
  const [activeTab, setActiveTab] = useState<"all" | "desk" | "shelf">("all");
  const [hoveredBook, setHoveredBook] = useState<string | null>(null);

  const deskItems = writingData.filter((item) => item.shelf === "desk");
  const shelfItems = writingData.filter((item) => item.shelf === "shelf");

  const displayedItems =
    activeTab === "desk"
      ? deskItems
      : activeTab === "shelf"
      ? shelfItems
      : writingData;

  return (
    <div className="w-full min-h-screen bg-[#141D17] theme-dark-academia py-12 px-3 sm:px-6 relative overflow-hidden flex flex-col items-center">
      {/* Candlelight vignette background overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(255, 230, 170, 0.08) 0%, rgba(10, 20, 15, 0.85) 75%, #0B100C 100%)"
        }}
      />

      {/* Antique leather desk texture */}
      <div className="relative z-10 w-full max-w-5xl my-4">
        {/* Desk top banner / Ex Libris Header */}
        <div className="flex items-center justify-between px-4 pb-4 border-b border-[#A9823F]/30 text-[#EADFC2] font-mono text-xs">
          <div className="flex items-center gap-2">
            <Scroll className="w-4 h-4 text-[#A9823F]" />
            <span className="tracking-widest uppercase text-[#A9823F]">
              EX LIBRIS // PRACHI CHOUBEY // THE NEXUS PHYSICS
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-4 text-[#CDB88A]">
            <span>FOLIO SECUNDUM</span>
            <span>❦</span>
            <span>SONIPAT & PASADENA</span>
          </div>
        </div>

        {/* =========================================================================
            THE VELLUM FOLIO SHEET (Deckled edges, foxing spots, candlelight glow)
        ========================================================================= */}
        <div
          className="w-full mt-6 bg-[#EADFC2] text-[#2A1B12] shadow-2xl p-6 sm:p-14 relative"
          style={{
            backgroundImage: `
              radial-gradient(#CDB88A 1px, transparent 1px),
              radial-gradient(#C0A978 1px, transparent 1px)
            `,
            backgroundSize: "24px 24px, 48px 48px",
            backgroundPosition: "0 0, 12px 12px",
            border: "1px solid #A9823F",
            boxShadow:
              "0 25px 60px rgba(0, 0, 0, 0.75), inset 0 0 80px rgba(169, 130, 63, 0.18)"
          }}
        >
          {/* Deckled Edge Ornament (Antique brass fleurons in corners) */}
          <div className="absolute top-3 left-4 text-[#A9823F] text-xl font-serif select-none">
            ❦
          </div>
          <div className="absolute top-3 right-4 text-[#A9823F] text-xl font-serif select-none">
            ❦
          </div>
          <div className="absolute bottom-3 left-4 text-[#A9823F] text-xl font-serif select-none">
            ❦
          </div>
          <div className="absolute bottom-3 right-4 text-[#A9823F] text-xl font-serif select-none">
            ❦
          </div>

          {/* Ornamental Inner Border Frame */}
          <div className="border border-[#A9823F]/50 p-6 sm:p-10 relative">
            {/* Header: Astronomical Engraving & Title */}
            <div className="flex flex-col items-center text-center space-y-4 mb-10 pb-8 border-b-2 border-[#5E1B1E]/40">
              {/* Celestial Orrery / Astrolabe SVG */}
              <div className="relative">
                <AntiqueAstrolabeSVG className="w-24 h-24 text-[#5E1B1E]" />
                <div className="absolute -bottom-2 -right-2 wax-seal">
                  <span>Ω</span>
                </div>
              </div>

              {/* Latin / Scholarly Header */}
              <div className="space-y-1">
                <p className="font-academia-serif text-xs uppercase tracking-[0.3em] text-[#5E1B1E] font-semibold">
                  Tractatus de Cosmologia et Mathematica
                </p>
                <h1 className="font-academia-serif text-4xl sm:text-6xl font-normal tracking-wide text-[#2A1B12]">
                  The Scholar’s Desk & Library
                </h1>
                <p className="font-academia-body italic text-base sm:text-lg text-[#5E1B1E]/90 max-w-xl mx-auto pt-2">
                  "Being an account of treatises, working folios, marginalia, and theoretical dialogues concerning the geometry of curved spacetime."
                </p>
              </div>

              {/* Ornamental Rule with Fleuron */}
              <div className="flex items-center justify-center gap-4 w-full max-w-md pt-2 text-[#A9823F]">
                <div className="h-[1px] flex-1 bg-current" />
                <span className="text-sm">❦ &nbsp; ✦ &nbsp; ❦</span>
                <div className="h-[1px] flex-1 bg-current" />
              </div>

              {/* Navigation Filters: Desk vs Shelf */}
              <div className="flex items-center gap-4 pt-4 font-academia-serif text-xs uppercase tracking-widest">
                <button
                  onClick={() => setActiveTab("all")}
                  className={`px-4 py-1.5 transition-all border ${
                    activeTab === "all"
                      ? "bg-[#5E1B1E] text-[#EADFC2] border-[#5E1B1E]"
                      : "border-[#A9823F] text-[#2A1B12] hover:bg-[#CDB88A]/40"
                  }`}
                >
                  Complete Folio ({writingData.length})
                </button>
                <button
                  onClick={() => setActiveTab("desk")}
                  className={`px-4 py-1.5 transition-all border ${
                    activeTab === "desk"
                      ? "bg-[#5E1B1E] text-[#EADFC2] border-[#5E1B1E]"
                      : "border-[#A9823F] text-[#2A1B12] hover:bg-[#CDB88A]/40"
                  }`}
                >
                  Works Upon The Desk ({deskItems.length})
                </button>
                <button
                  onClick={() => setActiveTab("shelf")}
                  className={`px-4 py-1.5 transition-all border ${
                    activeTab === "shelf"
                      ? "bg-[#5E1B1E] text-[#EADFC2] border-[#5E1B1E]"
                      : "border-[#A9823F] text-[#2A1B12] hover:bg-[#CDB88A]/40"
                  }`}
                >
                  The Shelf ({shelfItems.length})
                </button>
              </div>
            </div>

            {/* =====================================================================
                SECTION A: WORKS UPON THE DESK (In-Progress Treatises)
            ===================================================================== */}
            {(activeTab === "all" || activeTab === "desk") && (
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#A9823F]">
                  <Feather className="w-5 h-5 text-[#5E1B1E]" />
                  <h2 className="font-academia-serif text-2xl font-bold uppercase tracking-widest text-[#5E1B1E]">
                    I. Works Upon The Desk
                  </h2>
                  <span className="font-academia-body italic text-sm text-[#2A1B12]/70">
                    — Manuscripts & Working Folios in Progress
                  </span>
                </div>

                {/* Table of Contents Layout with Dotted Leaders */}
                <div className="space-y-8">
                  {deskItems.map((item) => (
                    <article
                      key={item.id}
                      className="group relative pb-6 border-b border-[#CDB88A]/60 transition-colors"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        {/* Title with Roman Numeral */}
                        <div className="flex items-baseline gap-3 flex-1">
                          <span className="font-academia-serif font-bold text-lg text-[#5E1B1E] select-none">
                            {item.romanNumeral}.
                          </span>
                          <h3 className="font-academia-serif text-xl sm:text-2xl font-bold text-[#2A1B12] group-hover:text-[#5E1B1E] transition-colors relative inline-block">
                            {item.title}
                            <span className="block h-[1px] w-0 group-hover:w-full bg-[#5E1B1E] transition-all duration-300" />
                          </h3>
                        </div>

                        {/* Dotted Leader Line */}
                        <div className="hidden md:flex flex-1 mx-3 border-b border-dotted border-[#A9823F]/80 mb-1" />

                        {/* Status Ink Stamp & Year */}
                        <div className="flex items-center gap-3 font-academia-serif text-xs">
                          <span className="italic text-[#2A1B12]/80">{item.date}</span>
                          <span className="ink-stamp ink-stamp-oxblood text-[10px] uppercase font-bold">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      {/* Blurb & Type */}
                      <div className="mt-2 pl-6 sm:pl-7 flex flex-col sm:flex-row justify-between gap-4">
                        <p className="font-academia-body text-base text-[#2A1B12]/90 leading-relaxed max-w-2xl">
                          <span className="font-academia-serif text-xs uppercase tracking-widest font-bold text-[#A9823F] mr-2">
                            [{item.type}]
                          </span>
                          {item.blurb}
                        </p>

                        <div className="flex items-center sm:flex-col sm:items-end justify-between gap-1 text-xs font-academia-serif shrink-0">
                          <span className="italic text-[#A9823F]">{item.readingTime}</span>
                          <a
                            href={item.linkUrl}
                            className="text-[#5E1B1E] font-bold hover:underline"
                          >
                            {item.linkText} →
                          </a>
                        </div>
                      </div>

                      {/* Handwritten marginalia annotation */}
                      {item.marginaliaNote && (
                        <div className="mt-2 pl-6 sm:pl-7 flex items-center gap-2 text-[#5E1B1E]">
                          <span className="font-handwritten text-base font-bold">
                            ✍ Marginal note: "{item.marginaliaNote}"
                          </span>
                        </div>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* =====================================================================
                SECTION B: THE SHELF (Completed Works & Book Spines)
            ===================================================================== */}
            {(activeTab === "all" || activeTab === "shelf") && (
              <div className="mb-14">
                <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#A9823F]">
                  <BookMarked className="w-5 h-5 text-[#5E1B1E]" />
                  <h2 className="font-academia-serif text-2xl font-bold uppercase tracking-widest text-[#5E1B1E]">
                    II. The Shelf
                  </h2>
                  <span className="font-academia-body italic text-sm text-[#2A1B12]/70">
                    — Bound Treatises & Published Works
                  </span>
                </div>

                {/* Interactive Book Spines on Shelf View */}
                <div className="mb-8 p-4 bg-[#141D17] border-2 border-[#A9823F] shadow-inner rounded-xs">
                  <div className="text-[11px] font-mono tracking-widest text-[#CDB88A] mb-3 uppercase flex items-center justify-between">
                    <span>THE LEATHER-BOUND SHELF (HOVER TO TILT)</span>
                    <span>5 VOLUMES</span>
                  </div>

                  <div className="flex items-end gap-3 overflow-x-auto pb-4 pt-6 px-2">
                    {shelfItems.map((item) => {
                      const isHovered = hoveredBook === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onMouseEnter={() => setHoveredBook(item.id)}
                          onMouseLeave={() => setHoveredBook(null)}
                          className="h-44 w-12 sm:w-14 rounded-t-sm flex flex-col justify-between items-center py-3 text-[#EADFC2] transition-all duration-300 relative shrink-0 shadow-lg cursor-pointer"
                          style={{
                            backgroundColor: item.bookSpineColor || "#5E1B1E",
                            border: "1px solid rgba(169, 130, 63, 0.4)",
                            transform: isHovered ? "translateY(-14px) rotate(-4deg)" : "none",
                            boxShadow: isHovered
                              ? "0 14px 28px rgba(0,0,0,0.7), 0 0 10px rgba(169, 130, 63, 0.4)"
                              : "0 4px 8px rgba(0,0,0,0.5)"
                          }}
                        >
                          <span className="text-[10px] font-serif font-bold text-[#A9823F]">
                            {item.romanNumeral}
                          </span>
                          <span
                            className="font-academia-serif text-[11px] font-bold tracking-wider uppercase whitespace-nowrap"
                            style={{
                              writingMode: "vertical-rl",
                              transform: "rotate(180deg)"
                            }}
                          >
                            {item.title.substring(0, 24)}...
                          </span>
                          <span className="w-2 h-2 rounded-full bg-[#A9823F]" />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Shelf Entry List */}
                <div className="space-y-8">
                  {shelfItems.map((item) => (
                    <article
                      key={item.id}
                      className="group pb-6 border-b border-[#CDB88A]/60"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                        <div className="flex items-baseline gap-3 flex-1">
                          <span className="font-academia-serif font-bold text-lg text-[#5E1B1E]">
                            {item.romanNumeral}.
                          </span>
                          <h3 className="font-academia-serif text-xl sm:text-2xl font-bold text-[#2A1B12] group-hover:text-[#5E1B1E] transition-colors relative inline-block">
                            {item.title}
                            <span className="block h-[1px] w-0 group-hover:w-full bg-[#5E1B1E] transition-all duration-300" />
                          </h3>
                        </div>

                        <div className="hidden md:flex flex-1 mx-3 border-b border-dotted border-[#A9823F]/80 mb-1" />

                        <div className="flex items-center gap-3 font-academia-serif text-xs">
                          <span className="italic text-[#2A1B12]/80">{item.year}</span>
                          <span className="ink-stamp ink-stamp-oxblood text-[10px] font-bold">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="mt-2 pl-6 sm:pl-7 flex flex-col sm:flex-row justify-between gap-4">
                        <p className="font-academia-body text-base text-[#2A1B12]/90 leading-relaxed max-w-2xl">
                          <span className="font-academia-serif text-xs uppercase tracking-widest font-bold text-[#A9823F] mr-2">
                            [{item.type}]
                          </span>
                          {item.blurb}
                        </p>

                        <div className="flex items-center sm:flex-col sm:items-end justify-between gap-1 text-xs font-academia-serif shrink-0">
                          <span className="italic text-[#A9823F]">{item.readingTime}</span>
                          <a
                            href={item.linkUrl}
                            className="text-[#5E1B1E] font-bold hover:underline"
                          >
                            {item.linkText} →
                          </a>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* =====================================================================
                SECTION C: HONOURS & DISTINCTIONS (Ledger Certificate Style)
            ===================================================================== */}
            <div className="pt-8 border-t-2 border-[#5E1B1E]/40">
              <div className="text-center space-y-2 mb-8">
                <span className="font-academia-serif text-xs uppercase tracking-[0.25em] text-[#5E1B1E] font-bold">
                  Curriculum Vitae & Testimonials
                </span>
                <h2 className="font-academia-serif text-3xl sm:text-4xl font-normal text-[#2A1B12]">
                  Honours & Academic Distinctions
                </h2>
                <div className="w-24 h-[1px] bg-[#A9823F] mx-auto" />
              </div>

              {/* Certificate Ledger Rows */}
              <div className="divide-y divide-[#A9823F]/40 border-y border-[#A9823F]">
                {distinctionsData.map((d) => (
                  <div
                    key={d.roman}
                    className="py-4 grid grid-cols-1 md:grid-cols-12 gap-3 items-baseline hover:bg-[#CDB88A]/20 transition-colors px-3"
                  >
                    <div className="md:col-span-1 font-academia-serif font-bold text-lg text-[#5E1B1E]">
                      {d.roman}.
                    </div>
                    <div className="md:col-span-5">
                      <h4 className="font-academia-serif text-lg font-bold text-[#2A1B12]">
                        {d.title}
                      </h4>
                      <p className="font-academia-body italic text-sm text-[#5E1B1E]">
                        {d.conferrer}
                      </p>
                    </div>
                    <div className="md:col-span-4 font-academia-body text-xs text-[#2A1B12]/80">
                      {d.folioNote}
                    </div>
                    <div className="md:col-span-2 text-right font-academia-serif text-xs font-bold text-[#A9823F]">
                      {d.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Folio Colophon Footer */}
            <div className="mt-12 pt-6 border-t border-[#A9823F]/40 flex flex-col sm:flex-row items-center justify-between gap-4 font-academia-serif text-xs text-[#2A1B12]/70">
              <span>IMPRESSUM ET SCRIPTA // ANNO DOMINI MMXXVI</span>
              <span>IN PERPETUUM CUM CURVATURA SPACII ✦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
