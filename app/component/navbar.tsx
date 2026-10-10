"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function AnimatedText({ text }: { text: string }) {
  const chars = text.split("");
  return (
    <span className="relative overflow-hidden inline-flex">
      {chars.map((char, index) => {
        const delay = (chars.length - 1 - index) * 35; // 35ms stagger from right to left
        return (
          <span
            key={index}
            className="relative flex flex-col transition-transform duration-300 ease-in-out group-hover:translate-y-full"
            style={{ transitionDelay: `${delay}ms` }}
          >
            <span className="absolute bottom-full left-0 w-full flex justify-center" aria-hidden="true">
              {char === " " ? "\u00A0" : char}
            </span>
            <span>{char === " " ? "\u00A0" : char}</span>
          </span>
        );
      })}
    </span>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isOpen ? "bg-[#F5F0E7] border-b-transparent" : "bg-white/20 backdrop-blur-xl backdrop-saturate-150 border-b border-white/40"
    }`}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50 bg-inherit">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
              <Image 
                src="/Logo.svg" 
                alt="Logo" 
                width={40} 
                height={40} 
                className="w-45 h-45 object-contain" 
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="group text-brand-brown/80 hover:text-brand-brown font-medium transition-colors">
              <AnimatedText text="Home" />
            </Link>
            <Link href="/about" className="group text-brand-brown/80 hover:text-brand-brown font-medium transition-colors">
              <AnimatedText text="About" />
            </Link>
            <Link href="/blog" className="group text-brand-brown/80 hover:text-brand-brown font-medium transition-colors">
              <AnimatedText text="Blog" />
            </Link>
            <Link href="/blog-details" className="group text-brand-brown/80 hover:text-brand-brown font-medium transition-colors">
              <AnimatedText text="Blog Details" />
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="group bg-[#E3DCD1] text-brand-brown px-6 py-2 rounded font-medium hover:bg-[#D5CECD] transition-colors inline-flex">
              <AnimatedText text="Contact" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/contact" className="group bg-[#E3DCD1] text-brand-brown px-4 py-1.5 rounded text-sm font-medium hover:bg-[#D5CECD] transition-colors inline-flex">
              <AnimatedText text="Contact" />
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-brown hover:text-brand-yellow focus:outline-none"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Marquee Ribbon */}
      <div className={`absolute top-[5rem] left-0 w-full overflow-hidden bg-brand-yellow text-brand-brown border-y border-brand-brown/10 py-2 flex shadow-sm transition-all duration-300 ${isOpen ? "opacity-0 -z-10" : "opacity-100 z-40"}`}>
        <div className="flex whitespace-nowrap animate-marquee-left w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-8 px-4 items-center font-bold text-sm tracking-widest uppercase">
              <span>Trusted Counsel</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Proven Expertise</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Client Commitment</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Legal Excellence</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Strategic Solutions</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Ethical Advocacy</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Dedicated Support</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
              <span>Lasting Trust</span> <span className="w-1.5 h-1.5 rounded-full bg-brand-brown"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out relative z-50 bg-[#F5F0E7] ${
          isOpen ? "max-h-[100dvh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="h-[calc(100dvh-5rem)] px-8 pt-12 flex flex-col gap-6">
          <Link href="/" onClick={() => setIsOpen(false)} className="group text-brand-brown font-medium text-2xl w-fit">
            <AnimatedText text="Home" />
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="group text-brand-brown font-medium text-2xl w-fit">
            <AnimatedText text="About" />
          </Link>
          <Link href="/blog" onClick={() => setIsOpen(false)} className="group text-brand-brown font-medium text-2xl w-fit">
            <AnimatedText text="Blog" />
          </Link>
          <Link href="/blog-details" onClick={() => setIsOpen(false)} className="group text-brand-brown font-medium text-2xl w-fit">
            <AnimatedText text="404" />
          </Link>
        </div>
      </div>
    </nav>
  );
}
