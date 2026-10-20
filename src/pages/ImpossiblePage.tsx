import React, { useState } from "react";
import { impossibleData, ImpossibleCategory, ImpossibleItem } from "../data/impossible";
import {
  SegmentedBar,
  HazardDiamond,
  ChevronChain,
  Crosshair,
  DotMatrix,
  RetroBarcode
} from "../components/RetroGraphics";
import { CheckSquare, Square, Clock, Filter, AlertTriangle } from "lucide-react";

export default function ImpossiblePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const categories: ("ALL" | ImpossibleCategory)[] = [
    "ALL",
    "RESEARCH",
    "COMPUTATION",
    "EXPEDITION",
    "ACADEMIC",
    "CREATIVE"
  ];

  const filteredItems =
    selectedCategory === "ALL"
      ? impossibleData
      : impossibleData.filter((item) => item.category === selectedCategory);

  const totalCount = impossibleData.length;
  const achievedCount = impossibleData.filter((i) => i.status === "ACHIEVED").length;
  const inProgressCount = impossibleData.filter((i) => i.status === "IN_PROGRESS").length;

  return (
    <div className="w-full min-h-screen bg-[#2B2C2E] text-white py-14 px-4 sm:px-8 relative overflow-hidden hairline-grid-dark">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        {/* =========================================================================
            HEADER: "THE SKY WAS NEVER THE LIMIT" POSTER STYLE
        ========================================================================= */}
        <div className="border-4 border-[#F0E6CB] bg-[#0A0C10] p-6 sm:p-12 shadow-2xl relative">
          {/* Top Registration Corner Marks */}
          <div className="flex items-center justify-between font-mono text-[11px] text-[#A89A82] border-b border-white/20 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <Crosshair className="text-[#E8602B]" />
              <span>NASA MISSION PROTOCOL // CHECKLIST_SERIES_T</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#E8602B] font-bold">STATUS: CRITICAL PATH</span>
              <RetroBarcode code="T-SERIES-MISSION" className="h-5 text-white" />
            </div>
          </div>

          <div className="space-y-4">
            {/* Poster Eyebrow */}
            <p className="font-display-wide text-xs sm:text-sm font-bold tracking-[0.25em] text-[#E8602B]">
              THE SKY WAS NEVER THE LIMIT.
            </p>

            {/* Giant Editorial Headline */}
            <h1 className="font-editorial text-4xl sm:text-7xl lg:text-8xl font-black text-[#F0E6CB] uppercase tracking-tighter leading-none">
              THE IMPOSSIBLE LIST
            </h1>

            {/* Technical NASA Poster Paragraph in Small Type */}
            <p className="font-mono text-xs sm:text-sm leading-relaxed text-[#A89A82] max-w-3xl pt-2">
              An evolving operational log of intellectual, computational, and physical challenges that appear mathematically improbable until executed. Inspired by the Apollo lunar trajectory calculations and Joel Runyon’s impossible list philosophy. Status is data-driven from research field logs.
            </p>
          </div>

          {/* Segmented Telemetry Banner: MISSION PROGRESS X/20 */}
          <div className="mt-8 pt-6 border-t border-white/20 flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[#E9B93A]">
                MISSION PROGRESS: {achievedCount}/{totalCount} ACHIEVED
              </span>
              <SegmentedBar total={totalCount} filled={achievedCount} color="#E8602B" />
            </div>

            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="flex items-center gap-1.5 text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                {achievedCount} ACHIEVED
              </span>
              <span className="flex items-center gap-1.5 text-amber-400">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                {inProgressCount} IN PROGRESS
              </span>
              <span className="flex items-center gap-1.5 text-stone-400">
                <span className="w-2 h-2 rounded-full bg-stone-500" />
                {totalCount - achievedCount - inProgressCount} PENDING
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CATEGORY FILTER CHIPS
        ========================================================================= */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 bg-[#1F2022] border border-white/20">
          <div className="flex items-center gap-2 font-mono text-xs text-[#A89A82]">
            <Filter className="w-4 h-4 text-[#E8602B]" />
            <span className="font-bold tracking-wider">FILTER SUBSYSTEMS:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 text-xs font-mono font-bold tracking-wider transition-all border ${
                    isSelected
                      ? "bg-[#E8602B] text-black border-[#E8602B] shadow-[2px_2px_0_#F2B48E]"
                      : "border-white/20 text-white/80 hover:border-white hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            20 CHAMFERED HUD CHECKLIST ROWS
        ========================================================================= */}
        <div className="space-y-3">
          {filteredItems.map((item) => {
            const isAchieved = item.status === "ACHIEVED";
            const isInProgress = item.status === "IN_PROGRESS";

            return (
              <div
                key={item.id}
                className={`chamfer-box p-4 sm:p-5 transition-all border flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  isAchieved
                    ? "bg-[#181D1A] border-emerald-500/40 hover:border-emerald-500"
                    : isInProgress
                    ? "bg-[#24211A] border-amber-500/40 hover:border-amber-500"
                    : "bg-[#1A1B1E] border-white/15 hover:border-white/40"
                }`}
              >
                {/* Left: ID + Checkbox + Title */}
                <div className="flex items-start sm:items-center gap-4 flex-1">
                  {/* Status Checkbox Icon */}
                  <div className="mt-0.5 sm:mt-0 shrink-0">
                    {isAchieved ? (
                      <div className="w-6 h-6 rounded-xs bg-emerald-500 flex items-center justify-center text-black font-bold">
                        ✓
                      </div>
                    ) : isInProgress ? (
                      <div className="w-6 h-6 rounded-xs bg-amber-500/20 border-2 border-amber-400 flex items-center justify-center text-amber-400 font-bold">
                        ⋯
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-xs border-2 border-stone-600 bg-black/40" />
                    )}
                  </div>

                  {/* ID Tag */}
                  <span className="font-mono text-xs font-bold tracking-widest text-[#E8602B] shrink-0">
                    [{item.id}]
                  </span>

                  {/* Main Goal Title */}
                  <div className="space-y-1">
                    <h3
                      className={`font-mono text-sm sm:text-base font-bold ${
                        isAchieved
                          ? "text-white line-through decoration-emerald-500/60"
                          : "text-white/95"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-[#A89A82] leading-snug">
                      {item.notes}
                    </p>
                  </div>
                </div>

                {/* Right: Category Chip & Stamp */}
                <div className="flex items-center gap-3 shrink-0 self-end md:self-center font-mono text-xs">
                  <span className="px-2.5 py-0.5 border border-white/20 bg-black/50 text-[10px] tracking-wider text-[#A89A82] uppercase">
                    {item.category}
                  </span>

                  {isAchieved ? (
                    <span className="ink-stamp ink-stamp-orange text-[10px]">
                      ACHIEVED // {item.achievedDate}
                    </span>
                  ) : isInProgress ? (
                    <span className="px-2.5 py-0.5 text-amber-400 bg-amber-950/40 border border-amber-500/30 text-[10px] font-bold tracking-wider">
                      IN PROGRESS
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 text-stone-500 bg-stone-900 border border-stone-700 text-[10px] font-bold tracking-wider">
                      PENDING
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Mission Note */}
        <div className="p-4 bg-black/60 border border-white/20 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#A89A82] gap-4">
          <div className="flex items-center gap-2">
            <HazardDiamond label="T" className="w-5 h-5 text-[#E8602B]" />
            <span>DATA-DRIVEN CHECKLIST // EDITED IN /SRC/DATA/IMPOSSIBLE.TS</span>
          </div>
          <span className="text-white/60">"THE BARRIER IS NOT GRAVITY; THE BARRIER IS AUDACITY."</span>
        </div>
      </div>
    </div>
  );
}
