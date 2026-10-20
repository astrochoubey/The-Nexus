import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "../data/site";
import { MissionWordmark, Crosshair } from "./RetroGraphics";
import { Mail, ArrowUpRight, X } from "lucide-react";

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

interface NavProps {
  isDarkAcademia?: boolean;
}

export default function Navigation({ isDarkAcademia = false }: NavProps) {
  const location = useLocation();
  const currentPath = location.pathname;
  const [showContactModal, setShowContactModal] = useState(false);

  const navLinks = [
    { label: "ASTRO", path: "/" },
    { label: "WRITING", path: "/writing" },
    { label: "IMPOSSIBLE LIST", path: "/impossible" },
    { label: "GALLERY", path: "/gallery" },
  ];

  // Theme-specific styles
  const navBg = isDarkAcademia 
    ? "bg-[#141D17]/95 border-[#A9823F]/30 text-[#EADFC2]" 
    : "bg-[#0A0C10]/95 border-[#E4D6AE]/20 text-[#E4D6AE]";

  const activeBlockStyle = isDarkAcademia
    ? "bg-[#5E1B1E] text-[#EADFC2] shadow-[2px_2px_0_#A9823F]"
    : "bg-[#E9B93A] text-[#0A0C10] shadow-[2px_2px_0_#E8602B]";

  const hoverLinkStyle = isDarkAcademia
    ? "hover:text-[#A9823F]"
    : "hover:text-[#E9B93A]";

  return (
    <>
      <header className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${navBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link to="/" className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-amber-500">
            <MissionWordmark />
            <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-current/20 text-[10px] font-mono tracking-widest opacity-75">
              <Crosshair className="text-amber-500" />
              <span>{siteData.stationId}</span>
            </div>
          </Link>

          {/* Central Pill Nav Links */}
          <nav className="flex items-center p-1 rounded-sm border border-current/25 bg-black/40 text-xs font-mono tracking-wider overflow-x-auto max-w-[calc(100vw-180px)] sm:max-w-none">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-1.5 transition-all font-bold whitespace-nowrap rounded-xs ${
                    isActive ? activeBlockStyle : `text-current/80 ${hoverLinkStyle}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons & Contact */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://github.com/astrochoubey"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="p-1.5 border border-current/20 hover:border-current hover:text-amber-500 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com/in/prachi-choubeyyy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-1.5 border border-current/20 hover:border-current hover:text-amber-500 transition-colors hidden sm:inline-flex"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="mailto:prachichoubey.thenexusphysics@gmail.com"
              aria-label="Send Email"
              className="p-1.5 border border-current/20 hover:border-current hover:text-amber-500 transition-colors hidden sm:inline-flex"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Outlined Contact Button */}
            <button
              onClick={() => setShowContactModal(true)}
              className={`px-3 py-1 text-xs font-mono font-bold tracking-widest border transition-all flex items-center gap-1.5 ${
                isDarkAcademia
                  ? "border-[#A9823F] text-[#EADFC2] hover:bg-[#A9823F] hover:text-[#141D17]"
                  : "border-[#E8602B] text-[#E4D6AE] hover:bg-[#E8602B] hover:text-[#0A0C10]"
              }`}
            >
              <span>CONTACT</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      </header>

      {/* Retro Mission Control Contact Modal */}
      {showContactModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        >
          <div className="relative w-full max-w-md bg-[#0A0C10] border-2 border-[#E8602B] p-6 text-[#E4D6AE] shadow-[8px_8px_0_#E8602B]">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[#E4D6AE]/20 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#E8602B] animate-ping" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#5FA3E0]">
                  TRANSMISSION CHANNEL // OPEN
                </span>
              </div>
              <button
                onClick={() => setShowContactModal(false)}
                className="p-1 border border-[#E4D6AE]/30 hover:bg-[#E8602B] hover:text-[#0A0C10] transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="space-y-4 font-mono text-xs">
              <p className="text-sm">
                Direct inquiry to <span className="font-bold text-[#E9B93A]">{siteData.ownerName}</span> // Computational Astrophysics & AI Scholar.
              </p>

              <div className="p-3 bg-[#161922] border border-[#E4D6AE]/20 space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A89A82]">STATION:</span>
                  <span>{siteData.stationId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89A82]">LOCATION:</span>
                  <span>{siteData.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89A82]">COORDINATES:</span>
                  <span>{siteData.coordinates}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89A82]">EMAIL:</span>
                  <a
                    href="mailto:prachichoubey.thenexusphysics@gmail.com"
                    className="text-[#5FA3E0] hover:underline"
                  >
                    {siteData.email}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89A82]">PHONE:</span>
                  <a
                    href="tel:+919693662269"
                    className="text-[#E9B93A] hover:underline"
                  >
                    {siteData.phone}
                  </a>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A89A82]">ORCID:</span>
                  <a
                    href="https://orcid.org/0009-0008-0481-3021"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#22C55E] hover:underline"
                  >
                    {siteData.orcid}
                  </a>
                </div>
              </div>

              <div className="pt-2 flex justify-end gap-3">
                <a
                  href={`mailto:${siteData.email}?subject=Transmission%20from%20The%20Nexus%20Archive`}
                  className="retro-btn retro-btn-space"
                >
                  <span className="btn-icon-box">↗</span>
                  <span>DISPATCH TRANSMISSION</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
