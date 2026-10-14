"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/#about" },
  { label: "Services", href: "/service" },
  { label: "Insight", href: "/#blogs" },
];

function ArticlesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="3.5" width="19" height="6.5" rx="1.5" />
      <line x1="2.5" y1="14.5" x2="10.5" y2="14.5" />
      <line x1="2.5" y1="18.5" x2="10.5" y2="18.5" />
      <rect x="14" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </svg>
  );
}

function LiveIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.93 4.93a10 10 0 0 0 0 14.14" />
      <path d="M7.76 7.76a6 6 0 0 0 0 8.48" />
      <circle cx="12" cy="12" r="1.75" fill="currentColor" />
      <path d="M16.24 7.76a6 6 0 0 1 0 8.48" />
      <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
    </svg>
  );
}

function StarOutlineIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function BriefcaseIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M7.5 7V4.5A1.5 1.5 0 0 1 9 3h6a1.5 1.5 0 0 1 1.5 1.5V7" />
      <line x1="7" y1="12" x2="7" y2="15.5" />
      <line x1="17" y1="12" x2="17" y2="15.5" />
    </svg>
  );
}

function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

interface NavbarProps {
  className?: string;
  style?: React.CSSProperties;
  theme?: "dark" | "light";
}

export default function Navbar({
  className = "",
  style,
  theme = "dark",
}: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isInsightOpen, setIsInsightOpen] = useState(false);
  const [mobileInsightOpen, setMobileInsightOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isLight = theme === "light";

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsInsightOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsInsightOpen(false);
    }, 140);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);
    setIsInsightOpen(false);

    if (href === "/" || href === "#home") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href === "/service") {
      if (pathname === "/service") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }

    if (href.startsWith("#") || href.startsWith("/#")) {
      const targetId = href.replace(/^\/?#/, "");
      if (pathname === "/") {
        e.preventDefault();
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        if (typeof window !== "undefined") {
          window.history.pushState(null, "", `#${targetId}`);
        }
      }
    }
  };

  const insightLeftLinks = [
    {
      label: "Articles",
      href: "/#blogs",
      icon: <ArticlesIcon className="w-5 h-5" />,
    },
    {
      label: "AMA Live",
      href: "/#about",
      icon: (
        <div
          className={`flex h-7 w-7 items-center justify-center ${
            isLight
              ? "bg-[#EFE9E2] text-[#28201A]"
              : "bg-white/10 text-white"
          }`}
        >
          <LiveIcon className="w-3.5 h-3.5" />
        </div>
      ),
    },
    {
      label: "Success Stories",
      href: "/#about",
      icon: <StarOutlineIcon className="w-5 h-5" />,
    },
    {
      label: "Careers",
      href: "/#contact",
      icon: <BriefcaseIcon className="w-5 h-5" />,
    },
  ];

  return (
    <header
      style={style}
      className={`sticky top-0 left-0 right-0 z-50 w-full border-b backdrop-blur-md transition-all duration-200 relative ${
        isLight
          ? "border-[#30261C]/10 bg-[#FAF4EB]/90 text-[#30261C] shadow-[0_1px_3px_rgba(48,38,28,0.04)]"
          : "border-white/[0.08] bg-black/25 text-white"
      } ${className}`}
    >
      <div className="relative mx-auto flex h-20 max-w-8xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Left: Logo using Logo.svg */}
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }}
          className="group flex items-center transition-opacity"
        >
          <div className="relative h-9 w-44 sm:h-10 sm:w-52">
            <Image
              src="/Logo.svg"
              alt="AMA Legal Solutions"
              fill
              priority
              className={`object-contain object-left ${
                isLight ? "" : "brightness-0 invert"
              }`}
            />
          </div>
        </Link>

        {/* Center: Desktop Navigation Links centered horizontally */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navItems.map((item) => {
            if (item.label === "Insight") {
              return (
                <div
                  key="Insight"
                  className="relative py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setIsInsightOpen((prev) => !prev)}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                      isLight
                        ? isInsightOpen
                          ? "text-[#30261C]"
                          : "text-[#30261C]/80 hover:text-[#30261C]"
                        : isInsightOpen
                        ? "text-white"
                        : "text-neutral-300 hover:text-white"
                    }`}
                    aria-expanded={isInsightOpen}
                  >
                    <span>Insight</span>
                    <svg
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        isInsightOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </button>

                  {/* Dropdown Menu with hover-bridge buffer */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-[62%] lg:-translate-x-1/2 pt-3 transition-all duration-200 z-50 ${
                      isInsightOpen
                        ? "opacity-100 visible translate-y-0 pointer-events-auto"
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    <div
                      className={`w-[540px] p-6 backdrop-blur-2xl transition-all duration-200 ${
                        isLight
                          ? "bg-white/98 text-[#28201A] border border-[#30261C]/10 shadow-[0_20px_50px_rgba(40,30,20,0.14)]"
                          : "bg-[#18130F]/98 text-[#FAF4EB] border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]"
                      }`}
                    >
                      <div className="grid grid-cols-12 gap-5">
                        {/* Left column: List of links with icons */}
                        <div className="col-span-5 flex flex-col justify-between py-1">
                          {insightLeftLinks.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className={`flex items-center gap-3.5 px-2.5 py-2 transition-all duration-150 ${
                                isLight
                                  ? "text-[#28201A] hover:bg-[#30261C]/5 hover:text-black"
                                  : "text-[#FAF4EB]/90 hover:bg-white/5 hover:text-white"
                              }`}
                            >
                              <div className="flex w-7 items-center justify-center shrink-0">
                                {link.icon}
                              </div>
                              <span className="text-[15px] font-medium tracking-tight">
                                {link.label}
                              </span>
                            </Link>
                          ))}
                        </div>

                        {/* Right column: Cards */}
                        <div className="col-span-7 flex flex-col gap-3.5">
                          {/* Top: Blogs (Yellow/Gold Card) */}
                          <Link
                            href="/#blogs"
                            onClick={(e) => handleNavClick(e, "/#blogs")}
                            className="group/card flex min-h-[96px] items-center justify-between bg-[#D4A017] px-6 py-5 text-[#201710] shadow-sm transition-all duration-200 hover:bg-[#C59210] hover:shadow-md hover:scale-[1.01]"
                          >
                            <span className="text-xl font-medium tracking-tight">
                              Blogs
                            </span>
                            <ArrowRightIcon className="h-5 w-5 transition-transform duration-200 group-hover/card:translate-x-1" />
                          </Link>

                          {/* Bottom Row: AMA + Virtual Counsel */}
                          <div className="grid grid-cols-2 gap-3">
                            {/* AMA (Dark Card) */}
                            <Link
                              href="/#about"
                              onClick={(e) => handleNavClick(e, "/#about")}
                              className="group/card flex min-h-[90px] items-center justify-center gap-2 bg-[#28201A] p-4 text-white shadow-sm transition-all duration-200 hover:bg-[#382E26] hover:shadow-md hover:scale-[1.01]"
                            >
                              <span className="text-[15px] font-semibold tracking-wide">
                                AMA
                              </span>
                              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/card:translate-x-0.5" />
                            </Link>

                            {/* Virtual Counsel (Beige Card) */}
                            <Link
                              href="/service"
                              onClick={(e) => handleNavClick(e, "/service")}
                              className="group/card flex min-h-[90px] flex-col justify-center bg-[#ECE6DE] p-4 text-[#28201A] shadow-sm transition-all duration-200 hover:bg-[#E0D8CE] hover:shadow-md hover:scale-[1.01]"
                            >
                              <span className="text-sm font-semibold leading-tight">
                                Virtual
                              </span>
                              <span className="flex items-center gap-1.5 text-sm font-semibold leading-tight mt-0.5">
                                Counsel
                                <ArrowRightIcon className="h-3.5 w-3.5 transition-transform duration-200 group-hover/card:translate-x-0.5" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isLight
                    ? "text-[#30261C]/80 hover:text-[#30261C]"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: Book a Call CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            onClick={(e) => handleNavClick(e, "/contact")}
            className={`inline-flex items-center justify-center px-5 py-2 text-xs font-medium shadow-sm backdrop-blur-sm transition-all duration-200 active:scale-95 sm:text-sm ${
              isLight
                ? "border border-[#30261C]/20 bg-[#30261C]/5 text-[#30261C] hover:bg-[#30261C]/10 hover:border-[#30261C]/30"
                : "border border-white/20 bg-neutral-800/80 text-white hover:border-white/35 hover:bg-neutral-700/80"
            }`}
          >
            Book a call
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:hidden ${
              isLight
                ? "text-neutral-800 hover:text-black"
                : "text-neutral-300 hover:text-white"
            }`}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.75"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu - absolutely positioned so it overlays content without pushing it down */}
      {mobileMenuOpen && (
        <div
          className={`absolute left-0 right-0 top-full border-t px-6 py-5 backdrop-blur-xl md:hidden max-h-[85vh] overflow-y-auto ${
            isLight
              ? "border-[#30261C]/10 bg-[#FAF4EB]/95 text-[#30261C]"
              : "border-white/[0.08] bg-black/90 text-white"
          }`}
        >
          <nav className="flex flex-col items-center text-center gap-4">
            {navItems.map((item) => {
              if (item.label === "Insight") {
                return (
                  <div key="mobile-insight" className="w-full flex flex-col items-center">
                    <button
                      type="button"
                      onClick={() => setMobileInsightOpen((prev) => !prev)}
                      className={`flex items-center justify-center gap-1.5 py-1 text-base font-medium tracking-wide transition-colors ${
                        isLight
                          ? "text-neutral-800 hover:text-black"
                          : "text-neutral-300 hover:text-white"
                      }`}
                    >
                      <span>Insight</span>
                      <svg
                        className={`h-4 w-4 transition-transform duration-200 ${
                          mobileInsightOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>

                    {mobileInsightOpen && (
                      <div className="mt-3 w-full max-w-sm rounded-2xl border p-4 text-left border-[#30261C]/10 bg-white/90 text-[#28201A] space-y-4 shadow-sm">
                        <div className="space-y-2">
                          {insightLeftLinks.map((link) => (
                            <Link
                              key={`m-${link.label}`}
                              href={link.href}
                              onClick={(e) => handleNavClick(e, link.href)}
                              className="flex items-center gap-3 rounded-lg px-2 py-1.5 hover:bg-[#30261C]/5"
                            >
                              <div className="flex w-6 items-center justify-center shrink-0">
                                {link.icon}
                              </div>
                              <span className="text-sm font-medium">{link.label}</span>
                            </Link>
                          ))}
                        </div>

                        <Link
                          href="/#blogs"
                          onClick={(e) => handleNavClick(e, "/#blogs")}
                          className="flex items-center justify-between rounded-xl bg-[#D4A017] px-4 py-3 text-[#201710] font-medium"
                        >
                          <span>Blogs</span>
                          <ArrowRightIcon className="h-4 w-4" />
                        </Link>

                        <div className="grid grid-cols-2 gap-2">
                          <Link
                            href="/#about"
                            onClick={(e) => handleNavClick(e, "/#about")}
                            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#28201A] p-3 text-white text-sm font-medium"
                          >
                            <span>AMA</span>
                            <ArrowRightIcon className="h-3.5 w-3.5" />
                          </Link>
                          <Link
                            href="/service"
                            onClick={(e) => handleNavClick(e, "/service")}
                            className="flex flex-col justify-center rounded-xl bg-[#ECE6DE] p-3 text-[#28201A] text-xs font-semibold leading-tight"
                          >
                            <span>Virtual</span>
                            <span className="flex items-center gap-1">
                              Counsel
                              <ArrowRightIcon className="h-3 w-3" />
                            </span>
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`py-1 text-base font-medium tracking-wide transition-colors ${
                    isLight
                      ? "text-neutral-800 hover:text-black"
                      : "text-neutral-300 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
