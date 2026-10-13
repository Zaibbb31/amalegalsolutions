"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import HeroSection from "./component/hero";
import Navbar from "./component/navbar";
import FaqSection from "./component/faq";
import { ShieldCheck, Briefcase, Users, Globe, Scale, Landmark, ArrowRight, Handshake, Lightbulb, Building2 } from "lucide-react";

function TrustSection({ className = "" }: { className?: string }) {
  return (
    <section
      className={`relative w-full bg-[#FAF4EB] text-[#30261C] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 selection:bg-[#30261C] selection:text-[#FAF4EB] ${className}`}
    >
      <div className="mx-auto max-w-7xl flex flex-col items-center">
        {/* Eyebrow */}
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-medium mb-3">
          THE AMA APPROACH
        </span>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] text-center leading-[1.1]">
          Your concerns. Our commitment.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#30261C]/80 text-center font-normal max-w-2xl leading-relaxed">
          Every legal challenge deserves to be understood. We listen to your concerns, simplify the complexities, and help you move forward with clear, practical legal guidance.
        </p>

        {/* Dashed Box Container with 4 Corner Brackets in Brand Brown */}
        <div className="relative w-full max-w-7xl mt-10 sm:mt-14 border border-dashed border-[#30261C]/25 bg-[#FAF4EB] px-0 pt-6 sm:pt-8 pb-6 sm:pb-8 shadow-[0_2px_12px_rgba(48,38,28,0.03)]">
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

          {/* Trust Image spanning 100% full width from border to border */}
          <div className="relative w-full select-none">
            <Image
              src="/turstwobg.png"
              alt="Your concerns. Our commitment. - The AMA Approach"
              width={2172}
              height={724}
              priority
              className="w-full h-auto block select-none"
            />

            {/* Pins and Labels directly below the image */}
            <div className="w-full grid grid-cols-2 px-6 sm:px-12">
              {/* Left Pin Label (Brown lilbox) */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 bg-[#30261C]" />
                <div className="w-[1.5px] h-6 bg-[#30261C]/30" />
                <span className="mt-2 text-xs sm:text-sm font-sans font-medium text-[#30261C] tracking-wide uppercase">
                  YOUR CONCERNS
                </span>
              </div>

              {/* Right Pin Label (Yellow lilbox) */}
              <div className="flex flex-col items-center">
                <div className="w-2.5 h-2.5 bg-[#D29E0D]" />
                <div className="w-[1.5px] h-6 bg-[#30261C]/30" />
                <span className="mt-2 text-xs sm:text-sm font-sans font-medium text-[#30261C] tracking-wide uppercase">
                  OUR COMMITMENT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const rowOneLogos = [
  { name: "Client Partner 885", src: "/clientlogo/Frame%20885.svg" },
  { name: "Client Partner 891", src: "/clientlogo/Frame%20891.svg" },
  { name: "Client Partner 893", src: "/clientlogo/Frame%20893.svg" },
  { name: "Client Partner 895", src: "/clientlogo/Frame%20895.svg" },
  { name: "Client Partner 898", src: "/clientlogo/Frame%20898.svg" },
  { name: "Client Partner 900", src: "/clientlogo/Frame%20900.svg" },
  { name: "Client Partner 901", src: "/clientlogo/Frame%20901.svg" },
  { name: "Client Partner 908", src: "/clientlogo/Frame%20908.svg" },
  { name: "Client Partner 909", src: "/clientlogo/Frame%20909.svg" },
];

const rowTwoLogos = [
  { name: "Client Partner 911", src: "/clientlogo/Frame%20911.svg" },
  { name: "Client Partner 912", src: "/clientlogo/Frame%20912.svg" },
  { name: "Client Partner 917", src: "/clientlogo/Frame%20917.svg" },
  { name: "Client Partner 920", src: "/clientlogo/Frame%20920.svg" },
  { name: "Client Partner 927", src: "/clientlogo/Frame%20927.svg" },
  { name: "Client Partner 931", src: "/clientlogo/Frame%20931.svg" },
  { name: "Client Partner 932", src: "/clientlogo/Frame%20932.svg" },
  { name: "Client Partner 933", src: "/clientlogo/Frame%20933.svg" },
];

function ClientLogosSection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-8 sm:py-10  overflow-hidden  border-[#30261C]/10 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 text-center mb-10 sm:mb-14">
        <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-medium">
          TRUSTED PARTNERSHIPS
        </span>
        <h3 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-medium tracking-tight text-[#30261C]">
          Trusted by Industry Leaders & Institutions
        </h3>
        <p className="mt-3 text-sm sm:text-base text-[#30261C]/75 max-w-xl mx-auto">
          We protect corporate assets, resolve disputes, and ensure rigorous regulatory compliance for leading enterprises.
        </p>
      </div>

      {/* Dual Row Marquee Container with edge gradients */}
      <div className="relative w-full overflow-hidden min-h-[220px] space-y-5 sm:space-y-6">
        {/* Left & Right Smooth Fading Gradient Masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 bg-gradient-to-r from-[#FAF4EB] via-[#FAF4EB]/80 to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 bg-gradient-to-l from-[#FAF4EB] via-[#FAF4EB]/80 to-transparent z-10" />

        {/* Row 1: Right to Left (Moving Left) */}
        <div className="flex w-full overflow-hidden group">
          <div
            className="flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused] pr-5 sm:pr-6 py-2"
            style={{ animation: "marquee-left 32s linear infinite" }}
          >
            {rowOneLogos.map((client, idx) => (
              <div
                key={`row1-a-${idx}`}
                className="flex shrink-0 items-center justify-center w-[180px] sm:w-[220px] h-[76px] sm:h-[84px] px-6 py-3.5 border border-[#30261C]/20 hover:border-[#D29E0D] transition-colors duration-300 cursor-default select-none"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain select-none pointer-events-none opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </div>
            ))}
          </div>
          <div
            className="flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee-left group-hover:[animation-play-state:paused] pr-5 sm:pr-6 py-2"
            style={{ animation: "marquee-left 32s linear infinite" }}
            aria-hidden="true"
          >
            {rowOneLogos.map((client, idx) => (
              <div
                key={`row1-b-${idx}`}
                className="flex shrink-0 items-center justify-center w-[180px] sm:w-[220px] h-[76px] sm:h-[84px] px-6 py-3.5 border border-[#30261C]/20 hover:border-[#D29E0D] transition-colors duration-300 cursor-default select-none"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain select-none pointer-events-none opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Left to Right (Moving Right) */}
        <div className="flex w-full overflow-hidden group">
          <div
            className="flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused] pr-5 sm:pr-6 py-2"
            style={{ animation: "marquee-right 32s linear infinite" }}
          >
            {rowTwoLogos.map((client, idx) => (
              <div
                key={`row2-a-${idx}`}
                className="flex shrink-0 items-center justify-center w-[180px] sm:w-[220px] h-[76px] sm:h-[84px] px-6 py-3.5 border border-[#30261C]/20 hover:border-[#D29E0D] transition-colors duration-300 cursor-default select-none"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain select-none pointer-events-none opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </div>
            ))}
          </div>
          <div
            className="flex shrink-0 items-center gap-5 sm:gap-6 animate-marquee-right group-hover:[animation-play-state:paused] pr-5 sm:pr-6 py-2"
            style={{ animation: "marquee-right 32s linear infinite" }}
            aria-hidden="true"
          >
            {rowTwoLogos.map((client, idx) => (
              <div
                key={`row2-b-${idx}`}
                className="flex shrink-0 items-center justify-center w-[180px] sm:w-[220px] h-[76px] sm:h-[84px] px-6 py-3.5 border border-[#30261C]/20 hover:border-[#D29E0D] transition-colors duration-300 cursor-default select-none"
              >
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-9 sm:max-h-11 w-auto max-w-[140px] sm:max-w-[170px] object-contain select-none pointer-events-none opacity-90 hover:opacity-100 transition-opacity"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AmaCubeBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`p-2 bg-black/45 backdrop-blur-xs border border-white/10 ${className}`}>
      <svg width="24" height="22" viewBox="0 0 52 46" fill="none" className="block select-none pointer-events-none">
        <path d="M29.3747 32.55L24.7287 44.7H23.5297V32.55H20.5323L17.2351 38.7L14.0879 32.55H11.0904V44.7H9.59173L5.09561 32.55H2.5478L0 39.15L0.299742 17.25H35.6693V42.6L31.9225 32.55H29.3747Z" fill="#FAF4EB"/>
        <path d="M3.89663 35.5498L2.24805 40.1998H5.54521L3.89663 35.5498Z" fill="#FAF4EB"/>
        <path d="M1.04932 44.5501L1.94854 41.8501H5.69531L6.74441 44.5501H1.04932Z" fill="#FAF4EB"/>
        <path d="M30.5734 35.3999L28.9248 40.0499H32.222L30.5734 35.3999Z" fill="#FAF4EB"/>
        <path d="M27.7261 44.4002L28.6253 41.7002H32.3721L33.4212 44.4002H27.7261Z" fill="#FAF4EB"/>
        <path d="M13.7881 44.5499V37.6499L16.6356 42.5999H18.1343L20.6821 37.6499V44.5499H13.7881Z" fill="#FAF4EB"/>
        <path d="M37.3179 44.9998V11.5498L49.3075 38.5498L37.3179 44.9998Z" fill="#D29E0D"/>
        <path d="M50.5063 2.8501L38.5166 8.7001L50.2065 36.3001L50.5063 2.8501Z" fill="#D29E0D"/>
        <path d="M14.6874 0.899902L0.149902 7.49991H35.8192L50.5344 0.899902H14.6874Z" fill="#D29E0D"/>
      </svg>
    </div>
  );
}

function LeadershipSection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-8 sm:py-10 px-6 sm:px-10 lg:px-16  border-[#30261C]/10 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-medium">
            OUR LEADERSHIP & HERITAGE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] leading-[1.1]">
            Guided by Heritage. Driven by Vision.
          </h2>
          <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-[#30261C]/80 leading-relaxed font-normal">
            Rooted in decades of distinguished public service and institutional experience, shaping forward-thinking legal counsel for today&apos;s complex landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: The Foundation - Late Adv. R.C. Malik */}
          <div className="flex flex-col md:flex-row w-full rounded-none border border-[#30261C]/25 bg-[#1F1B18] shadow-[0_4px_20px_rgba(48,38,28,0.06)] overflow-hidden">
            {/* Left: Photo Column with charcoal slate gradient */}
            <div className="relative w-full h-[300px] sm:h-[340px] md:h-auto md:w-[45%] md:min-h-[380px] bg-gradient-to-b from-[#4A5055] via-[#353A3E] to-[#202427] overflow-hidden shrink-0">
              {/* Portrait */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/dadaji.png"
                  alt="Late Adv. R.C. Malik"
                  fill
                  priority
                  className="object-cover object-top scale-150 origin-top select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right: Content Column (Dark Theme) */}
            <div className="w-full md:w-[55%] p-5 sm:p-6 lg:p-7 flex flex-col justify-center text-left bg-[#1F1B18] text-[#FAF4EB]">
              {/* Eyebrow */}
              <div className="flex flex-col items-start">
                <span className="text-xs font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
                  THE FOUNDATION
                </span>
                <div className="w-8 h-[2px] bg-[#D29E0D] mt-1.5 mb-2.5" />
              </div>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                Late Adv. R.C. Malik
              </h3>

              {/* Roles */}
              <div className="mt-1.5 space-y-0.5">
                <p className="text-xs sm:text-sm font-semibold text-[#D29E0D]">
                  Ex-Comptroller and Auditor General of India
                </p>
                <p className="text-xs sm:text-[13px] text-neutral-400 font-normal">
                  Director General of Audit (Central-Receipt)
                </p>
              </div>

              {/* Write-up */}
              <p className="mt-3.5 text-xs sm:text-[13px] text-neutral-300 font-light leading-relaxed">
                R.C. Malik started his professional journey as a gazetted officer at DGACR, progressing through different roles within the Income Tax Department before taking on administrative duties at the Office of the Comptroller and Auditor General (CAG) of India. After retiring from the CAG office, R.C. Malik transitioned into a legal career as an advocate specializing in taxation, leveraging the extensive experience gained during his tenure as an officer.
              </p>
            </div>
          </div>

          {/* Card 2: The Vision - Anuj Anand Malik */}
          <div className="flex flex-col md:flex-row w-full rounded-none border border-[#30261C]/25 bg-white shadow-[0_4px_20px_rgba(48,38,28,0.06)] overflow-hidden">
            {/* Left: Photo Column with charcoal slate gradient */}
            <div className="relative w-full h-[300px] sm:h-[340px] md:h-auto md:w-[45%] md:min-h-[380px] bg-gradient-to-b from-[#4A5055] via-[#353A3E] to-[#202427] overflow-hidden shrink-0">
              {/* Portrait */}
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src="/bhiyaaaaa.png"
                  alt="Anuj Anand Malik"
                  fill
                  priority
                  className="object-cover object-top scale-150 origin-top select-none pointer-events-none"
                />
              </div>
            </div>

            {/* Right: Content Column (Clean White Theme) */}
            <div className="w-full md:w-[55%] p-5 sm:p-6 lg:p-7 flex flex-col justify-center text-left bg-white text-[#30261C]">
              {/* Eyebrow */}
              <div className="flex flex-col items-start">
                <span className="text-xs font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
                  THE VISION
                </span>
                <div className="w-8 h-[2px] bg-[#D29E0D] mt-1.5 mb-2.5" />
              </div>

              {/* Name */}
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#30261C] leading-tight">
                Anuj Anand Malik
              </h3>

              {/* Roles */}
              <div className="mt-1.5 space-y-0.5">
                <p className="text-xs sm:text-sm font-semibold text-[#D29E0D]">
                  Founder, AMA Legal Solutions
                </p>
                <p className="text-xs sm:text-[13px] text-[#30261C]/70 font-normal">
                  Advocate & Legal Strategist
                </p>
              </div>

              {/* Write-up */}
              <p className="mt-3.5 text-xs sm:text-[13px] text-[#30261C]/80 font-light leading-relaxed">
                Anuj Anand Malik works at the intersection of law, finance, and business strategy, specializing in banking disputes and debt resolution. Driven by the vision to make quality legal assistance accessible across India, he recently launched the country&apos;s first pro-bono law firm-backed legal assistance app. His mission is to provide fast, reliable legal guidance and awareness to everyone when they need it most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const uspItems = [
  {
    icon: ShieldCheck,
    title: "Built on Integrity",
    description: "Decades of unwavering ethical standards.",
  },
  {
    icon: Briefcase,
    title: "Driven by Excellence",
    description: "A commitment to delivering exceptional legal outcomes.",
  },
  {
    icon: Users,
    title: "Generations of Trust",
    description: "A legacy of relationships built on trust and results.",
  },
  {
    icon: Globe,
    title: "Empowering the Future",
    description: "Innovating legal solutions for a stronger tomorrow.",
  },
];

function UspSection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-10 sm:py-14 px-6 sm:px-10 lg:px-16 border-y border-[#30261C]/15 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0">
          {uspItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-center gap-4 py-2 ${
                  index !== uspItems.length - 1
                    ? "lg:border-r lg:border-[#30261C]/15 lg:pr-8"
                    : ""
                } ${index !== 0 ? "lg:pl-8" : ""}`}
              >
                {/* Dark Circle with Gold Icon */}
                <div className="w-12 h-12 rounded-full bg-[#1F1914] border border-[#30261C]/30 flex items-center justify-center shrink-0 shadow-sm">
                  <Icon className="w-5 h-5 text-[#D29E0D] stroke-[2.2]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col text-left">
                  <h4 className="text-sm sm:text-base font-bold text-[#30261C] tracking-tight">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs sm:text-[13px] text-[#30261C]/75 font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const impactStats = [
  {
    value: "+57h",
    label: "Reclaimed per corporate client in legal workflows",
  },
  {
    value: "0x",
    label: "Friction in dispute resolution & corporate filings",
  },
  {
    value: "1.2x",
    label: "Multiplier on institutional legal bandwidth",
  },
  {
    value: "<7s",
    label: "From query to initial legal intelligence & assessment",
  },
];

function ImpactSection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-b border-[#30261C]/15 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      <div className="mx-auto max-w-7xl">
        {/* Eyebrow Badge & Heading */}
        <div className="flex flex-col items-start text-left max-w-3xl">
          <span className="inline-flex items-center px-2.5 py-1 text-[11px] font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
            IMPACT
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] leading-[1.15]">
            AMA gives your legal strategy an unfair advantage
          </h2>
        </div>

        {/* 4 Impact Stat Cards (2x2 grid on mobile, 4 in 1 row on desktop) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mt-8 sm:mt-14">
          {impactStats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-4 sm:p-7 min-h-[160px] sm:min-h-[220px] bg-[#ffedba] border border-[#D29E0D] shadow-[0_2px_10px_rgba(48,38,28,0.03)] hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl sm:text-5xl font-normal tracking-tight text-[#1E2530]">
                {stat.value} 
              </span>
              <p className="mt-6 sm:mt-12 text-xs sm:text-[13px] text-[#424A58] font-normal leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const affiliationLogos = [
  { name: "Affiliation 1", src: "/affiliations/aff2.webp" },
  { name: "Affiliation 2", src: "/affiliations/aff3.webp" },
  { name: "Affiliation 3", src: "/affiliations/aff4.png" },
  { name: "Affiliation 4", src: "/affiliations/aff5.webp" },
];

const newsLogos = [
  { name: "Livemint", src: "/news/livemint.webp" },
  { name: "Bar & Bench", src: "/news/barandbench.webp" },
  { name: "YourStory", src: "/news/yourstory.webp" },
  { name: "Mid-Day", src: "/news/mid_day.webp" },
];

function CredibilitySection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-3xl">
          <span className="inline-flex items-center text-[11px] font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
            REPUTATION & REACH
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] leading-[1.15]">
            Backed by Leaders. Recognized Across the Nation.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#30261C]/75 leading-relaxed font-normal">
            From premier institutional affiliations to extensive nationwide media recognition, our legal stewardship earns enduring trust.
          </p>
        </div>

        {/* Two Box Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-10 sm:mt-14">
          {/* Box 1: Left Card - Affiliations */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 bg-white border border-[#30261C]/15 shadow-[0_4px_24px_rgba(48,38,28,0.04)]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1F26]">
                Affiliations
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Proudly affiliated and accredited with leading regulatory institutions, bar councils, and prestigious national legal bodies.
              </p>
            </div>

            {/* Logo Row - Original Color */}
            <div className="py-8 sm:py-12 my-2 flex items-center justify-between gap-4 sm:gap-6 overflow-hidden">
              {affiliationLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center flex-1 max-w-[110px] h-9 sm:h-10">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-8 sm:max-h-9 w-auto max-w-full object-contain select-none pointer-events-none transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5  border border-[#30261C]/25 bg-white text-xs sm:text-sm font-medium text-[#1A1F26] hover:bg-[#FAF4EB] hover:border-[#30261C]/50 transition-all shadow-xs group cursor-pointer">
                <span>About us</span>
                <ArrowRight className="w-4 h-4 text-[#1A1F26] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

          {/* Box 2: Right Card - Media / News */}
          <div className="flex flex-col justify-between p-7 sm:p-10 lg:p-12 bg-white border border-[#30261C]/15 shadow-[0_4px_24px_rgba(48,38,28,0.04)]">
            <div>
              <h3 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1F26]">
                Media
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-[#4A5568] leading-relaxed">
                Featured across premier national publications, business dailies, and legal forums for landmark debt resolution and advisory.
              </p>
            </div>

            {/* Logo Row - Original Color */}
            <div className="py-8 sm:py-12 my-2 flex items-center justify-between gap-4 sm:gap-6 overflow-hidden">
              {newsLogos.map((logo, idx) => (
                <div key={idx} className="flex items-center justify-center flex-1 max-w-[110px] h-9 sm:h-10">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="max-h-8 sm:max-h-9 w-auto max-w-full object-contain select-none pointer-events-none transition-transform hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Button */}
            <div>
              <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5  border border-[#30261C]/25 bg-white text-xs sm:text-sm font-medium text-[#1A1F26] hover:bg-[#FAF4EB] hover:border-[#30261C]/50 transition-all shadow-xs group cursor-pointer">
                <span>More stories</span>
                <ArrowRight className="w-4 h-4 text-[#1A1F26] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const servicesData = [
  {
    icon: Handshake,
    title: "Loan Settlement",
    tags: "Credit Card | Personal Loan | Business Loan | Vehicle Loan | Bank Loan Default | NBFC Loan Dispute | RBI Loan Settlement Guidelines |",
    bgClass: "bg-white border border-[#30261C]/15",
    btnClass: "border-[#30261C]/25 bg-white hover:bg-[#FAF4EB] text-[#30261C]",
  },
  {
    icon: Lightbulb,
    title: "Intellectual Property Rights",
    tags: "Trademark Registration | Copyright Protection | Patent Filing | Brand Protection | IPR Litigation",
    bgClass: "bg-[#ffedba] border border-[#D29E0D]/60",
    btnClass: "border-[#30261C]/25 bg-white/80 hover:bg-white text-[#30261C]",
  },
  {
    icon: Building2,
    title: "Corporate Law",
    tags: "Company Incorporation | Compliance | Mergers & Acquisitions | Corporate Litigation | Contract Drafting",
    bgClass: "bg-[#ffedba] border border-[#D29E0D]/60",
    btnClass: "border-[#30261C]/25 bg-white/80 hover:bg-white text-[#30261C]",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    tags: "Financial Fraud | Financial Scam | Banking Regulatory Compliance | Commercial Banking Issues | Financial Litigation",
    bgClass: "bg-white border border-[#30261C]/15",
    btnClass: "border-[#30261C]/25 bg-white hover:bg-[#FAF4EB] text-[#30261C]",
  },
];

function ServicesSection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-b border-[#30261C]/15 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-10 sm:mb-14">
          <span className="inline-flex items-center text-[11px] font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
            AREAS OF PRACTICE
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] leading-[1.15]">
            Dedicated Legal Services Built for Impact
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-[#30261C]/75 leading-relaxed font-normal">
            From loan settlement and banking disputes to corporate compliance and intellectual property protection, we deliver strategic outcomes.
          </p>
        </div>

        {/* Unified Framed Matrix (Single continuous structure with internal borders) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 border border-[#30261C]/20  overflow-hidden bg-white shadow-[0_4px_24px_rgba(48,38,28,0.04)]">
          {/* Left Side: Office Image Card (5 cols on lg) */}
          <div className="lg:col-span-5 relative min-h-[460px] lg:min-h-full flex flex-col justify-between p-8 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[#30261C]/20 group">
            <Image
              src="/Office.jpg"
              alt="AMA Legal Solutions Chambers"
              fill
              className="object-cover transition-transform duration-700  select-none pointer-events-none"
            />
            

            {/* Top Content */}
            <div className="relative z-10 flex flex-col items-start">
              <span className="px-3 py-1 rounded-full bg-[#D29E0D] text-black text-[11px] font-mono font-semibold tracking-wider uppercase">
                CHAMBERS & STRATEGY
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-tight">
                Comprehensive legal counsel with relentless dedication
              </h3>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10 flex flex-col items-start mt-10">
              <p className="text-xs sm:text-sm text-neutral-200 font-light leading-relaxed mb-6">
                Operating out of premier modern chambers, our team combines regulatory acumen, financial dispute strategy, and court representation.
              </p>
              <button className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#D29E0D] text-black text-xs sm:text-sm font-semibold hover:bg-[#FAF4EB] transition-all shadow-md group/btn cursor-pointer">
                <span>Book a consultation</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Side: 4 Service Quadrants in 2x2 Grid (2x2 on mobile, tablet, and desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2">
            {servicesData.map((service, idx) => {
              const Icon = service.icon;
              const isLeftCol = idx % 2 === 0;
              const isTopRow = idx < 2;

              return (
                <div
                  key={idx}
                  className={`flex flex-col justify-between p-4 sm:p-7 lg:p-9 ${service.bgClass}
                    ${isLeftCol ? "border-r border-[#30261C]/20" : ""}
                    ${isTopRow ? "border-b border-[#30261C]/20" : ""}
                    transition-all duration-200`}
                >
                  <div>
                    {/* Icon */}
                    <div className="flex items-center justify-start">
                      <Icon className="w-7 h-7 sm:w-9 sm:h-9 text-[#30261C] stroke-[1.8]" />
                    </div>

                    {/* Title */}
                    <h4 className="mt-3 sm:mt-5 text-sm sm:text-lg lg:text-2xl font-bold text-[#1A1F26] tracking-tight leading-snug">
                      {service.title}
                    </h4>

                    {/* Tags / Subtext */}
                    <p className="mt-2 sm:mt-3 text-[10px] sm:text-xs lg:text-[13px] text-[#4A5568] leading-tight sm:leading-relaxed font-normal">
                      {service.tags}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-4 sm:mt-8 pt-1 sm:pt-2">
                    <button
                      className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 py-1.5 sm:px-4 sm:py-2 border ${service.btnClass} text-[10px] sm:text-xs font-semibold transition-all shadow-xs group/btn cursor-pointer`}
                    >
                      <span>Consult Now</span>
                      <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials Section ───────────────────────────────────────────────────

const testimonials = [
  {
    src: "/testi/testivid1.mp4",
    label: "Client Story",
    name: "Loan Settlement",
  },
  {
    src: "/testi/testivid2.mp4",
    label: "Client Story",
    name: "Banking Dispute",
  },
  {
    src: "/testi/testivid3.mp4",
    label: "Client Story",
    name: "Corporate Law",
  },
  {
    src: "/testi/testivid4.mp4",
    label: "Client Story",
    name: "IPR Protection",
  },
];

function TestimonialsSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = "grabbing";
    trackRef.current.style.userSelect = "none";
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    trackRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const stopDrag = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = "grab";
      trackRef.current.style.userSelect = "";
    }
  };

  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#1A1209] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 selection:bg-[#D29E0D] selection:text-black overflow-hidden"
    >
      {/* Subtle warm radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(210,158,13,0.08),transparent)]" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-3xl mb-10 sm:mb-14">
          <span className="inline-flex items-center text-[11px] font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
            CLIENT VOICES
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-white leading-[1.15]">
            Real people. Real outcomes.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-normal">
            Hear directly from clients whose lives and businesses were transformed through our legal counsel.
          </p>
        </div>

        {/* Desktop: 4 cards in a row | Mobile: draggable horizontal scroll */}
        <div
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
          className="
            flex gap-4 sm:gap-5
            overflow-x-auto md:overflow-x-visible
            scroll-smooth
            snap-x snap-mandatory md:snap-none
            pb-4 md:pb-0
            cursor-grab md:cursor-default
            [-webkit-overflow-scrolling:touch]
            [scrollbar-width:none]
            [&::-webkit-scrollbar]:hidden
          "
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="
                relative flex-shrink-0
                w-[72vw] sm:w-[55vw] md:w-0 md:flex-1
                snap-center
                 overflow-hidden
                bg-neutral-900 border border-white/10
                shadow-[0_8px_40px_rgba(0,0,0,0.5)]
                group
              "
              style={{ aspectRatio: "9/16" }}
            >
              {/* Video */}
              <video
                src={t.src}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

              {/* Dark gradient overlay at bottom */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              
              {/* Bottom caption */}
              <div className="absolute bottom-5 left-4 right-4">
                <p className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile drag hint */}
        <p className="mt-5 text-center text-[11px] font-mono tracking-widest text-neutral-600 uppercase md:hidden">
          ← Drag to explore →
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero is h-[220vh] — show light navbar once we've scrolled past the full hero container
      // We watch for the top of the content div (right after hero) entering the viewport.
      // A simple proxy: scrollY > (window.innerHeight * 1.95)
      const threshold = window.innerHeight * 1.95;
      setNavbarVisible(window.scrollY >= threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="relative w-full bg-[#FAF4EB]">
      {/* Fixed Light Theme Navbar — slides in once hero scroll is complete */}
      <div
        className="fixed top-0 left-0 right-0 z-[60] transition-transform duration-300 ease-out"
        style={{
          transform: navbarVisible ? "translateY(0)" : "translateY(-110%)",
        }}
      >
        <Navbar theme="light" />
      </div>

      {/* Scroll-zoom Doorway Hero Section */}
      <HeroSection />

      {/* Main Content Sections in Natural Window Document Flow */}
      <div className="relative z-20 w-full bg-[#FAF4EB]">
        {/* The AMA Approach Section */}
        <div id="approach">
          <TrustSection />
        </div>

        {/* Client Logos Dual-Row Carousel */}
        <div id="clients">
          <ClientLogosSection />
        </div>

        {/* Leadership Section: The Foundation & The Vision */}
        <div id="leadership">
          <LeadershipSection />
        </div>

        {/* USP Section: 4 Key Pillars */}
        <div id="usp">
          <UspSection />
        </div>

        {/* Impact Section: 4 Metric Cards */}
        <div id="impact">
          <ImpactSection />
        </div>

        {/* Credibility Section: Investors & Media */}
        <div id="recognition">
          <CredibilitySection />
        </div>

        {/* Services Section: Office Hero Card + 4 Practice Areas */}
        <div id="services">
          <ServicesSection />
        </div>

        {/* Testimonials Section: 4 Video Cards */}
        <div id="testimonials">
          <TestimonialsSection />
        </div>

        {/* FAQ Section */}
        <div id="faq">
          <FaqSection />
        </div>

        {/* Footer */}
        <footer className="border-t border-[#30261C]/15 bg-[#FAF4EB] px-6 py-12 text-center text-xs text-[#30261C]/60">
          <p>© 2025 AMA Legal Solutions. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}

