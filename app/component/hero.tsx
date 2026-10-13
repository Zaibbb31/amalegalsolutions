"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./navbar";

const servicesList = [
  "/ LOAN SETTLEMENT",
  "/ LEGAL PROTECTION",
  "/ INTELLECTUAL PROPERTY",
  "/ CORPORATE & COMPLIANCE",
  "/ YOUR PARTNER THROUGH COMPLEXITY",
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      const currentScroll = -rect.top;
      const rawProgress = currentScroll / totalScrollable;
      const clamped = Math.min(Math.max(rawProgress, 0), 1);
      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // UI Content fade & slide up quickly during the first ~25% of scroll
  const contentOpacity = Math.max(0, 1 - progress * 4.0);
  const contentTranslateY = -(progress * 60);

  // Exponential zoom into the door center (50% 48%)
  const imageScale = 1 + Math.pow(Math.min(progress / 0.85, 1), 2) * 24;

  // Pure #FAF4EB overlay takeover between 65% and 95%
  const whiteOpacity =
    progress < 0.65
      ? 0
      : Math.min(1, Math.pow((progress - 0.65) / 0.3, 1.2));

  return (
    <div
      ref={containerRef}
      id="doorway-hero-container"
      className="relative h-[220vh] w-full bg-black"
    >
      {/* Sticky Fullscreen Viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-[#FAF4EB]">
        {/* Background Image with Zoom centered at the door */}
        <div
          className="absolute inset-0 h-full w-full will-change-transform"
          style={{
            transform: `scale(${imageScale})`,
            transformOrigin: "50% 48%",
            transition: "transform 0.05s ease-out",
          }}
        >
          <Image
            src="/heroiamgenew.png"
            alt="Hero Zoom Background"
            fill
            priority
            quality={95}
            className="object-cover object-center select-none pointer-events-none"
          />
        </div>

        {/* Ambient Dark Gradients for contrast while hero content is visible */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/60 transition-opacity duration-300"
          style={{ opacity: contentOpacity }}
        />

        {/* Hero Top Navbar (Dark Theme) - fades away as user scrolls into the door */}
        <div
          className="relative z-30 transition-opacity duration-200"
          style={{
            opacity: contentOpacity,
            pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
          }}
        >
          <Navbar theme="dark" />
        </div>

        {/* Hero Foreground Content */}
        <div
          className="relative z-20 flex h-full w-full flex-col justify-end px-6 pb-28 pt-24 sm:px-10 sm:pb-36 lg:px-16 lg:pb-40"
          style={{
            opacity: contentOpacity,
            transform: `translateY(${contentTranslateY}px)`,
            pointerEvents: contentOpacity < 0.1 ? "none" : "auto",
            transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
          }}
        >
          <div className="mx-auto grid w-full max-w-8xl grid-cols-1 items-end gap-12 lg:grid-cols-12">
            {/* Left Column: Eyebrow, Headline, Paragraph, CTAs */}
            <div className="flex flex-col items-start lg:col-span-7">
              {/* Eyebrow */}
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-medium">
                LEGAL GUIDANCE. HUMAN UNDERSTANDING.
              </span>

              {/* Main Headline */}
              <h1 className="mt-3 max-w-2xl text-4xl font-normal tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl leading-[1.08]">
                When the way forward isn&apos;t clear, we&apos;re here to help.
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-6 max-w-xl text-sm sm:text-base font-light leading-relaxed text-neutral-300/95">
                Navigate complex legal challenges with confidence. From loan settlement and legal protection to documentation and business compliance, we help you find clarity and take the next step forward.
              </p>

              {/* Know about us with AI */}
              <div className="mt-8 flex flex-col gap-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D29E0D]" />
                  <p className="text-xs sm:text-sm font-semibold tracking-[0.18em] text-neutral-300 uppercase">
                    Know about us with AI
                  </p>
                </div>
                <div className="flex items-center gap-5 sm:gap-6">
                  <Image
                    src="/Ai/chatgpt.svg"
                    alt="ChatGPT"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 invert opacity-85 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/Ai/gemini.svg"
                    alt="Gemini"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/Ai/claude.svg"
                    alt="Claude"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/Ai/DeepSeek.svg"
                    alt="DeepSeek"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <Image
                    src="/Ai/Grok.svg"
                    alt="Grok"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 opacity-90 hover:opacity-100 transition-opacity rounded border border-white/20"
                  />
                  <Image
                    src="/Ai/perplexity.svg"
                    alt="Perplexity"
                    width={26}
                    height={26}
                    className="w-6.5 h-6.5 opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black shadow-lg transition-all duration-200 hover:bg-neutral-100 active:scale-95"
                >
                  <span>Get Legal Assistance</span>
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </Link>

                <Link
                  href="#about"
                  className="inline-flex items-center border border-white/20 bg-neutral-900/80 px-6 py-3 text-sm font-medium text-white shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-white/35 active:scale-95"
                >
                  Explore Our Expertise
                </Link>
              </div>
            </div>

            {/* Right Column: Service Highlights Stack */}
            <div className="flex flex-col items-start lg:items-end justify-end lg:col-span-5">
              <div className="space-y-2.5 text-left lg:text-right">
                {servicesList.map((service, index) => (
                  <p
                    key={index}
                    className="text-xs sm:text-sm font-mono tracking-widest text-neutral-300/90 uppercase"
                  >
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pure Takeover Overlay when fully zoomed into the gate */}
        <div
          className="pointer-events-none absolute inset-0 z-40 bg-[#FAF4EB] will-change-opacity"
          style={{
            opacity: whiteOpacity,
            transition: "opacity 0.05s ease-out",
          }}
        />
      </div>
    </div>
  );
}
