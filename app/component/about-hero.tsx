"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface PinItem {
  color: "brown" | "yellow";
  label: string;
}

interface AboutHeroProps {
  className?: string;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  pins?: PinItem[];
  showCtas?: boolean;
}

const defaultPins: PinItem[] = [
  { color: "brown", label: "LIVE CASE UPDATES" },
  { color: "yellow", label: "INSTANT ADVISORY" },
  { color: "brown", label: "EXPERT ADVOCACY" },
  { color: "yellow", label: "UNIFIED LEGAL HUB" },
];

export default function AboutHero({
  className = "",
  eyebrow = "ABOUT AMA LEGAL SOLUTIONS",
  title = "Courtroom Heritage. Modern Clarity.",
  subtitle = "Every legal challenge deserves clarity. Founded on decades of distinguished judicial and public service, AMA Legal Solutions bridges traditional courtroom defense with modern digital transparency — putting legal empowerment directly in your hands.",
  pins = defaultPins,
  showCtas = true,
}: AboutHeroProps) {
  return (
    <section
      className={`relative w-full bg-[#FAF4EB] text-[#30261C] pt-12 sm:pt-16 pb-14 sm:pb-20 px-6 sm:px-10 lg:px-16 selection:bg-[#30261C] selection:text-[#FAF4EB] ${className}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-semibold mb-3">
          {eyebrow}
        </span>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#30261C] text-center leading-[1.1] max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#30261C]/80 text-center font-normal max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Optional Action CTAs & Trust Badges */}
        {showCtas && (
          <>
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#30261C] text-[#FAF4EB] text-sm font-semibold hover:bg-[#D29E0D] hover:text-black transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>Consult Our Advocates</span>
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </Link>
              <Link
                href="/service"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#30261C]/25 bg-transparent text-[#30261C] text-sm font-semibold hover:border-[#30261C] hover:bg-[#30261C]/5 transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Explore Practice Areas</span>
              </Link>
            </div>

            {/* Micro Trust Indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-mono text-[#30261C]/70">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
                35+ Years Heritage
              </span>
              <span className="text-[#30261C]/30">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
                10,000+ Cases Guided
              </span>
              <span className="text-[#30261C]/30">•</span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
                Pan-India High Courts & Tribunals
              </span>
            </div>
          </>
        )}

        {/* Dashed Box Container with 4 Corner Brackets in Brand Brown */}
        <div className="relative w-full max-w-7xl mt-10 sm:mt-14 border border-dashed border-[#30261C]/25 bg-[#EAE7DC] px-0 pt-6 sm:pt-10 pb-6 sm:pb-8 shadow-[0_2px_12px_rgba(48,38,28,0.03)]">
          {/* Top-Left Corner Bracket ┌ */}
          <span
            aria-hidden="true"
            className="absolute -top-[1.5px] -left-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-l-2 border-[#30261C] pointer-events-none z-10"
          />

          {/* Top-Right Corner Bracket ┐ */}
          <span
            aria-hidden="true"
            className="absolute -top-[1.5px] -right-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#30261C] pointer-events-none z-10"
          />

          {/* Bottom-Left Corner Bracket └ */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[1.5px] -left-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#30261C] pointer-events-none z-10"
          />

          {/* Bottom-Right Corner Bracket ┘ */}
          <span
            aria-hidden="true"
            className="absolute -bottom-[1.5px] -right-[1.5px] w-5 h-5 sm:w-6 sm:h-6 border-b-2 border-r-2 border-[#30261C] pointer-events-none z-10"
          />

          {/* About Us Hero Image spanning full width */}
          <div className="relative w-full select-none flex flex-col items-center">
            <div className="relative w-full max-w-5xl px-3 sm:px-8">
              <Image
                src="/about-hero21.webp"
                alt="AMA Legal Solutions - Accessible, Modern Legal Advocacy"
                width={1914}
                height={1270}
                priority
                className="w-full h-auto block select-none object-contain mx-auto"
              />
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
}
