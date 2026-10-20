import React, { useState, useEffect } from "react";
import { projectsData, Project } from "../data/projects";
import { ProjectFigureSVG, RetroBarcode, Crosshair } from "./RetroGraphics";
import { ExternalLink, X } from "lucide-react";

export default function ProjectFolders() {
  // Deep-link initial state via window.location.hash
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        const found = projectsData.find((p) => p.slug === hash || p.codeLabel.toLowerCase().includes(hash));
        if (found) {
          setActiveSlug(found.slug);
        }
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Keyboard navigation & ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && activeSlug) {
        setActiveSlug(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSlug]);

  const toggleFolder = (slug: string) => {
    if (activeSlug === slug) {
      setActiveSlug(null);
      // update hash cleanly
      history.replaceState(null, "", window.location.pathname + window.location.search);
    } else {
      setActiveSlug(slug);
      window.location.hash = slug;
    }
  };

  return (
    <div className="w-full">
      {/* DESKTOP ACCORDION: Stacked vertical folders with staggered notched tabs */}
      <div className="hidden lg:flex items-stretch min-h-[640px] gap-2 p-4 bg-[#14161D] border-2 border-[#E4D6AE]/30 rounded-xs shadow-2xl relative overflow-hidden">
        {/* Subtle background registration markings */}
        <div className="absolute top-2 right-4 text-[10px] font-mono text-[#A89A82]/40 select-none">
          ARCHIVE_INDEX // PHYSICAL_SERIES_01-06
        </div>

        {projectsData.map((project, index) => {
          const isExpanded = activeSlug === project.slug;

          return (
            <div
              key={project.slug}
              className={`transition-all duration-400 ease-out flex flex-col relative rounded-t-sm shadow-xl ${
                isExpanded ? "flex-[5] z-30" : "flex-1 hover:-translate-y-3 cursor-pointer z-10"
              }`}
              style={{
                backgroundColor: project.color,
                boxShadow: isExpanded
                  ? "0 20px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.2)"
                  : "0 10px 20px rgba(0,0,0,0.35)"
              }}
            >
              {/* Notched Tab on Top (Staggered height / offset stepping down left to right) */}
              <div
                className="w-full relative flex items-center justify-between px-3 py-2 text-white font-mono select-none"
                style={{
                  paddingTop: `${project.tabOffset}px`,
                  backgroundColor: "rgba(0,0,0,0.18)",
                  borderBottom: "1px solid rgba(255,255,255,0.15)"
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-bold tracking-widest text-[#E9B93A]">
                    {project.codeLabel}
                  </span>
                  <span className="text-[10px] tracking-wider uppercase opacity-90 truncate max-w-[120px]">
                    {project.tabTitle}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      project.status === "ACTIVE" ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
                    }`}
                  />
                  {isExpanded && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlug(null);
                      }}
                      className="p-1 hover:bg-black/30 rounded text-white/80 hover:text-white"
                      aria-label="Close folder"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* COLLAPSED VIEW: Rotated vertical typography on strip face */}
              {!isExpanded ? (
                <button
                  type="button"
                  aria-expanded="false"
                  onClick={() => toggleFolder(project.slug)}
                  className="w-full flex-1 flex flex-col justify-between items-center py-6 focus:outline-none focus:ring-2 focus:ring-amber-400 text-left"
                >
                  {/* Top stamp */}
                  <div className="text-[9px] font-mono tracking-widest text-white/60 writing-mode-vertical">
                    ARCHIVE LOG // {project.status}
                  </div>

                  {/* Vertical title */}
                  <div
                    className="font-display-wide text-sm font-bold tracking-widest text-white/95 whitespace-nowrap"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)"
                    }}
                  >
                    {project.title}
                  </div>

                  {/* Bottom barcode & notch */}
                  <div className="flex flex-col items-center gap-2 opacity-75">
                    <div className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
                    <span className="text-[8px] font-mono text-white/50">{`#0${index + 1}`}</span>
                  </div>
                </button>
              ) : (
                /* EXPANDED VIEW: Archival Paper Dossier Sheet */
                <div
                  className="flex-1 p-6 overflow-y-auto text-[#3A2F33] bg-[#F0E6CB] paper-texture relative"
                  style={{
                    borderTop: "3px solid var(--nasa-orange)"
                  }}
                >
                  {/* Dossier Header Strip */}
                  <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#3A2F33]/20 pb-4 mb-5">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E8602B]">
                        <span>{project.codeLabel}</span>
                        <span>// CONFIDENTIAL DOSSIER</span>
                      </div>
                      <h3 className="font-editorial text-2xl sm:text-3xl font-black text-[#0A0C10] mt-1">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="ink-stamp ink-stamp-orange text-xs">
                        STATUS: {project.status}
                      </span>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="retro-btn"
                      >
                        <span className="btn-icon-box">↗</span>
                        <span>VIEW ON GITHUB</span>
                      </a>
                    </div>
                  </div>

                  {/* Summary Lead */}
                  <p className="font-mono text-sm leading-relaxed text-[#3A2F33] font-medium mb-6 bg-white/60 p-3 border-l-4 border-[#6E6B4E]">
                    {project.summary}
                  </p>

                  {/* Two-Column Technical Breakdown */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Left: What It Does & How It Works */}
                    <div className="space-y-4 font-mono text-xs">
                      <div>
                        <h4 className="font-bold tracking-wider text-[#0A0C10] uppercase flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 bg-[#E8602B]" />
                          WHAT IT DOES
                        </h4>
                        <p className="leading-relaxed text-[#3A2F33]/90">
                          {project.details.whatItDoes}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-bold tracking-wider text-[#0A0C10] uppercase flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 bg-[#5FA3E0]" />
                          HOW IT WORKS (PHYSICS + CODE)
                        </h4>
                        <p className="leading-relaxed text-[#3A2F33]/90">
                          {project.details.howItWorks}
                        </p>
                      </div>

                      {/* Mathematical Governing Equation */}
                      <div className="p-3 bg-black/90 text-[#5FA3E0] font-mono text-[11px] rounded border border-[#E8602B]/40">
                        <div className="text-[9px] text-[#A89A82] mb-1 font-bold tracking-widest uppercase">
                          GOVERNING RELATIVISTIC / INTEGRATOR FORMULATION:
                        </div>
                        <code>{project.details.equations}</code>
                      </div>
                    </div>

                    {/* Right: Halftone Plot Figure */}
                    <div className="flex flex-col">
                      <div className="border border-[#3A2F33]/40 bg-black p-2 rounded-xs shadow-md">
                        <ProjectFigureSVG type={project.figureType} />
                      </div>
                      <span className="text-[10px] font-mono text-[#6E6B4E] mt-2 italic">
                        {project.figureCaption}
                      </span>
                    </div>
                  </div>

                  {/* Stack Tags & Archival Footer */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-[#3A2F33]/20 font-mono text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[10px] tracking-widest font-bold text-[#6E6B4E]">STACK:</span>
                      {project.tech.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-black/10 border border-[#3A2F33]/30 text-[10px] font-bold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <RetroBarcode code={`SLUG-${project.slug.toUpperCase()}`} className="h-6" />
                      <button
                        type="button"
                        onClick={() => setActiveSlug(null)}
                        className="text-[11px] font-bold tracking-wider text-[#E8602B] hover:underline"
                      >
                        [ CLOSE DOSSIER ✕ ]
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* MOBILE STACKED VIEW: Horizontal staggered tabs */}
      <div className="lg:hidden flex flex-col gap-3">
        {projectsData.map((project, index) => {
          const isExpanded = activeSlug === project.slug;

          return (
            <div
              key={project.slug}
              className="border-2 border-[#E4D6AE]/40 rounded-xs overflow-hidden shadow-lg transition-all"
              style={{ backgroundColor: project.color }}
            >
              {/* Tab Header Button */}
              <button
                type="button"
                aria-expanded={isExpanded}
                onClick={() => toggleFolder(project.slug)}
                className="w-full flex items-center justify-between p-3.5 text-left text-white font-mono focus:outline-none focus:ring-2 focus:ring-amber-400"
                style={{
                  borderLeft: `6px solid ${project.accentColor}`
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xs text-[#E9B93A]">{project.codeLabel}</span>
                  <span className="font-bold text-sm tracking-wide">{project.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] px-2 py-0.5 rounded bg-black/40 text-amber-300 font-mono">
                    {project.status}
                  </span>
                  <span className="text-base font-bold text-white/80">
                    {isExpanded ? "▲" : "▼"}
                  </span>
                </div>
              </button>

              {/* Mobile Expanded Sheet */}
              {isExpanded && (
                <div className="p-4 bg-[#F0E6CB] text-[#3A2F33] paper-texture border-t border-[#3A2F33]/30 space-y-4">
                  <p className="font-mono text-xs leading-relaxed font-medium">
                    {project.summary}
                  </p>

                  <div className="border border-[#3A2F33]/40 bg-black p-1.5 rounded-xs">
                    <ProjectFigureSVG type={project.figureType} />
                    <span className="text-[9px] font-mono text-[#A89A82] block mt-1">
                      {project.figureCaption}
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div>
                      <strong className="text-[#0A0C10] block mb-1">WHAT IT DOES:</strong>
                      <p className="text-current/90">{project.details.whatItDoes}</p>
                    </div>

                    <div>
                      <strong className="text-[#0A0C10] block mb-1">HOW IT WORKS:</strong>
                      <p className="text-current/90">{project.details.howItWorks}</p>
                    </div>

                    <div className="p-2 bg-black text-[#5FA3E0] font-mono text-[10px] rounded border border-[#E8602B]/40">
                      <code>{project.details.equations}</code>
                    </div>
                  </div>

                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 bg-black/10 border border-[#3A2F33]/30 text-[10px] font-bold">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#3A2F33]/20">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="retro-btn"
                    >
                      <span className="btn-icon-box">↗</span>
                      <span>GITHUB REPO</span>
                    </a>
                    <button
                      onClick={() => setActiveSlug(null)}
                      className="text-xs font-mono font-bold text-[#E8602B]"
                    >
                      CLOSE ✕
                    </button>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
