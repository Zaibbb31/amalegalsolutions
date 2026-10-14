"use client";

import React, { useState } from "react";
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
  { label: "Blogs", href: "/#blogs" },
];

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
  const pathname = usePathname();
  const isLight = theme === "light";

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    setMobileMenuOpen(false);

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
          {navItems.map((item) => (
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
          ))}
        </nav>

        {/* Right: Book a Call CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3">
          <Link
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className={`inline-flex items-center justify-center  px-5 py-2 text-xs font-medium shadow-sm backdrop-blur-sm transition-all duration-200 active:scale-95 sm:text-sm ${
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
          className={`absolute left-0 right-0 top-full border-t px-6 py-5 backdrop-blur-xl md:hidden ${
            isLight
              ? "border-[#30261C]/10 bg-[#FAF4EB]/95 text-[#30261C]"
              : "border-white/[0.08] bg-black/90 text-white"
          }`}
        >
          <nav className="flex flex-col items-center text-center gap-4">
            {navItems.map((item) => (
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
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
