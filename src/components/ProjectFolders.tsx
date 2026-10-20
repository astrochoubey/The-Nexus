import React, { useState, useEffect } from "react";
import { projectsData, Project } from "../data/projects";
import { ProjectFigureSVG, RetroBarcode, Crosshair, DotMatrix } from "./RetroGraphics";
import { ExternalLink, X, ArrowUpRight, FolderOpen } from "lucide-react";

export default function ProjectFolders() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Close with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelectFolder = (project: Project) => {
    if (activeProject?.slug === project.slug) {
      setActiveProject(null);
    } else {
      setActiveProject(project);
    }
  };

  // Custom folder colors matching the exact Grid Daily poster reference
  const folderStyles = [
    {
      // 01: Olive/Sage
      bg: "#7E8474",
      text: "#FFFFFF",
      tabText: "#F0E6CB",
      accent: "#E9B93A",
      border: "rgba(255,255,255,0.2)"
    },
    {
      // 02: Warm Parchment / Cream
      bg: "#EBE5D3",
      text: "#2A2521",
      tabText: "#3A2F33",
      accent: "#E8602B",
      border: "rgba(58,47,51,0.25)"
    },
    {
      // 03: Slate Blue-Gray
      bg: "#64778C",
      text: "#FFFFFF",
      tabText: "#F0E6CB",
      accent: "#5FA3E0",
      border: "rgba(255,255,255,0.2)"
    },
    {
      // 04: Caramel Ochre Leather
      bg: "#9A6034",
      text: "#FFFFFF",
      tabText: "#F0E6CB",
      accent: "#F5A623",
      border: "rgba(255,255,255,0.2)"
    },
    {
      // 05: Charcoal Black with Gold Chamfer
      bg: "#18191E",
      text: "#F0E6CB",
      tabText: "#E5B842",
      accent: "#E5B842",
      border: "rgba(229,184,66,0.4)"
    },
    {
      // 06: Dark Forest Olive
      bg: "#2E362C",
      text: "#FFFFFF",
      tabText: "#A8D49E",
      accent: "#22C55E",
      border: "rgba(255,255,255,0.2)"
    }
  ];

  return (
    <div className="w-full space-y-6">
      {/* =========================================================================
          DESKTOP: COMPACT PHYSICAL FOLDER RACK WITH STEPPED NOTCHED TABS
          (Faithfully modeled on GRID DAILY_01-05 reference poster)
      ========================================================================= */}
      <div className="hidden md:block w-full">
        {/* Shorter, compact rack container (height ~460px) */}
        <div className="relative h-[460px] bg-[#0A0C10] p-4 border-2 border-[#E4D6AE]/30 rounded-xs shadow-2xl overflow-hidden flex items-stretch gap-2.5">
          {/* Background Archive Markings */}
          <div className="absolute top-2 right-4 text-[9px] font-mono text-[#A89A82]/50 tracking-widest select-none pointer-events-none">
            GRID DAILY_01-06 // PHYSICAL ARCHIVE FOLDER SYSTEM
          </div>

          {projectsData.map((project, index) => {
            const style = folderStyles[index % folderStyles.length];
            const isSelected = activeProject?.slug === project.slug;
            // Stepped tab positions from top to bottom (staggered down like in the reference)
            const tabTopPos = 20 + index * 62;

            return (
              <div
                key={project.slug}
                onClick={() => handleSelectFolder(project)}
                className={`group relative flex-1 h-full cursor-pointer transition-all duration-300 select-none flex flex-col justify-between p-3.5 rounded-t-xs shadow-lg ${
                  isSelected
                    ? "ring-2 ring-[#E8602B] -translate-y-2.5 z-30 brightness-105"
                    : "hover:-translate-y-2 hover:shadow-2xl hover:brightness-105 z-10"
                }`}
                style={{
                  backgroundColor: style.bg,
                  color: style.text,
                  borderTop: `1px solid ${style.border}`,
                  borderLeft: `1px solid ${style.border}`,
                  borderRight: `1px solid ${style.border}`,
                  boxShadow: isSelected
                    ? "0 18px 36px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.25)"
                    : "0 8px 16px rgba(0,0,0,0.35)"
                }}
              >
                {/* -------------------------------------------------------------
                    STEPPED NOTCHED SIDE TAB (Like the reference image)
                ------------------------------------------------------------- */}
                <div
                  className="absolute -right-3 w-7 h-16 z-20 flex items-center justify-center transition-transform group-hover:scale-105 shadow-md"
                  style={{
                    top: `${tabTopPos}px`,
                    backgroundColor: style.bg,
                    borderTop: `1px solid ${style.border}`,
                    borderRight: `2px solid ${style.accent}`,
                    borderBottom: `1px solid ${style.border}`,
                    clipPath: "polygon(0 0, 75% 0, 100% 12px, 100% calc(100% - 12px), 75% 100%, 0 100%)"
                  }}
                  title={`${project.codeLabel} ${project.tabTitle}`}
                >
                  <span
                    className="text-[9px] font-mono font-bold tracking-widest whitespace-nowrap"
                    style={{
                      color: style.tabText,
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)"
                    }}
                  >
                    {project.codeLabel}
                  </span>
                </div>

                {/* Top of Folder Strip */}
                <div className="flex flex-col gap-1 border-b pb-2" style={{ borderColor: style.border }}>
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="font-bold tracking-wider" style={{ color: style.accent }}>
                      {project.codeLabel}
                    </span>
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.status === "ACTIVE" ? "bg-amber-400 animate-pulse" : "bg-emerald-400"
                      }`}
                    />
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider truncate opacity-90">
                    {project.tabTitle}
                  </span>
                </div>

                {/* Middle: Bold Vertical Typography Running Along Folder Spine */}
                <div className="flex-1 flex items-center justify-center py-4 overflow-hidden">
                  <div
                    className="font-display-wide text-xs sm:text-sm font-black tracking-[0.22em] uppercase whitespace-nowrap opacity-95 group-hover:scale-105 transition-transform"
                    style={{
                      writingMode: "vertical-rl",
                      transform: "rotate(180deg)"
                    }}
                  >
                    {project.title}
                  </div>
                </div>

                {/* Bottom of Folder Strip */}
                <div className="border-t pt-2 space-y-1 text-center" style={{ borderColor: style.border }}>
                  <div className="text-[9px] font-mono tracking-widest opacity-75">
                    {project.year} // FILE_0{index + 1}
                  </div>
                  <div className="text-[8px] font-mono tracking-wider font-bold py-0.5 px-1 bg-black/25 rounded-xs">
                    {isSelected ? "▲ OPEN IN DOSSIER" : "▼ CLICK TO INSPECT"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW: COMPACT STACKED FOLDER DIVIDERS WITH STAGGERED TABS
      ========================================================================= */}
      <div className="md:hidden flex flex-col gap-2.5">
        {projectsData.map((project, index) => {
          const style = folderStyles[index % folderStyles.length];
          const isSelected = activeProject?.slug === project.slug;

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => handleSelectFolder(project)}
              className={`w-full p-3 text-left rounded-xs transition-all flex items-center justify-between border ${
                isSelected ? "ring-2 ring-[#E8602B] scale-[1.01]" : ""
              }`}
              style={{
                backgroundColor: style.bg,
                color: style.text,
                borderColor: style.border
              }}
            >
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold" style={{ color: style.accent }}>
                  {project.codeLabel}
                </span>
                <span className="text-xs font-bold font-mono tracking-wide">
                  {project.title}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[9px] font-mono px-1.5 py-0.5 bg-black/40 rounded-xs text-amber-300">
                  {project.status}
                </span>
                <span className="text-xs font-bold opacity-80">
                  {isSelected ? "▲" : "▼"}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* =========================================================================
          IN-PAGE ARCHIVAL DOSSIER DETAILS SHEET (OPENS RIGHT IN THE SAME PAGE!)
          Includes "VIEW ON GITHUB ↗" button to the project's repository.
      ========================================================================= */}
      {activeProject && (
        <div
          id="project-detail-sheet"
          className="w-full bg-[#F0E6CB] text-[#3A2F33] paper-texture p-6 sm:p-8 border-4 border-[#0A0C10] shadow-2xl relative rounded-xs transition-all animate-fadeIn"
          style={{
            borderTop: "6px solid var(--nasa-orange)"
          }}
        >
          {/* Top Dossier Header Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#3A2F33]/25 pb-4 mb-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-[#E8602B]">
                <Crosshair className="text-[#E8602B]" />
                <span>{activeProject.codeLabel}</span>
                <span>// ARCHIVAL PROJECT DOSSIER</span>
                {activeProject.affiliation && (
                  <span className="text-[#6E6B4E] hidden sm:inline">
                    · {activeProject.affiliation}
                  </span>
                )}
              </div>
              <h3 className="font-editorial text-2xl sm:text-4xl font-black text-[#0A0C10] leading-tight">
                {activeProject.title}
              </h3>
            </div>

            {/* Actions: VIEW ON GITHUB and Close */}
            <div className="flex items-center gap-3">
              <span className="ink-stamp ink-stamp-orange text-xs">
                STATUS: {activeProject.status}
              </span>

              {/* DIRECT GITHUB BUTTON */}
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="retro-btn bg-[#0A0C10] text-[#F0E6CB] border-[#0A0C10] hover:bg-[#E8602B] hover:text-black font-bold shadow-md"
                aria-label={`View ${activeProject.title} repository on GitHub`}
              >
                <span className="btn-icon-box">↗</span>
                <span>VIEW ON GITHUB</span>
              </a>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="p-2 border border-[#3A2F33]/40 hover:bg-[#E8602B] hover:text-black hover:border-black transition-colors"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Project Summary Lead */}
          <div className="p-4 bg-white/70 border-l-4 border-[#6E6B4E] mb-6 shadow-xs font-mono text-xs sm:text-sm leading-relaxed text-[#0A0C10] font-medium">
            {activeProject.summary}
          </div>

          {/* Two-Column Technical Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
            {/* Left: What It Does & How It Works */}
            <div className="lg:col-span-7 space-y-4 font-mono text-xs">
              <div>
                <h4 className="font-bold tracking-wider text-[#0A0C10] uppercase flex items-center gap-2 mb-1.5 text-xs">
                  <span className="w-2.5 h-2.5 bg-[#E8602B]" />
                  WHAT IT DOES
                </h4>
                <p className="leading-relaxed text-[#3A2F33]/90 bg-white/40 p-3 border border-[#3A2F33]/15">
                  {activeProject.details.whatItDoes}
                </p>
              </div>

              <div>
                <h4 className="font-bold tracking-wider text-[#0A0C10] uppercase flex items-center gap-2 mb-1.5 text-xs">
                  <span className="w-2.5 h-2.5 bg-[#5FA3E0]" />
                  HOW IT WORKS (PHYSICS & COMPUTATIONAL METHODS)
                </h4>
                <p className="leading-relaxed text-[#3A2F33]/90 bg-white/40 p-3 border border-[#3A2F33]/15">
                  {activeProject.details.howItWorks}
                </p>
              </div>

              {/* Mathematical Formulation */}
              <div className="p-3.5 bg-[#0A0C10] text-[#5FA3E0] font-mono text-xs rounded-xs border-2 border-[#E8602B]/40 shadow-inner">
                <div className="text-[10px] text-[#A89A82] mb-1 font-bold tracking-widest uppercase flex items-center justify-between">
                  <span>GOVERNING MATHEMATICAL FORMULATION:</span>
                  <span className="text-[#E9B93A]">{activeProject.year}</span>
                </div>
                <code className="block overflow-x-auto py-1 text-xs sm:text-sm">
                  {activeProject.details.equations}
                </code>
              </div>
            </div>

            {/* Right: Halftone Plot Figure */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="border-2 border-[#3A2F33] bg-black p-2 shadow-lg">
                <ProjectFigureSVG type={activeProject.figureType} />
              </div>
              <span className="text-[10px] font-mono text-[#6E6B4E] mt-2 italic leading-tight">
                {activeProject.figureCaption}
              </span>
            </div>
          </div>

          {/* Stack Tags & Footer Controls */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-[#3A2F33]/20 font-mono text-xs">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] tracking-widest font-bold text-[#6E6B4E]">COMPUTATIONAL STACK:</span>
              {activeProject.tech.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-0.5 bg-black/10 border border-[#3A2F33]/30 text-[10px] font-bold"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={activeProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs font-bold text-[#E8602B] hover:underline flex items-center gap-1"
              >
                <span>OPEN REPOSITORY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="px-3 py-1 bg-black/10 hover:bg-black hover:text-white border border-[#3A2F33]/40 text-xs font-bold transition-all"
              >
                [ CLOSE DOSSIER ✕ ]
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
