"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/navbar";
import AboutHero from "../component/about-hero";
import CTA from "../component/cta";
import Footer from "../component/footer";
import {
  ShieldCheck,
  Briefcase,
  Users,
  Scale,
  Landmark,
  ArrowRight,
  Handshake,
  CheckCircle2,
  Clock,
  Sparkles,
  Gavel,
  FileCheck,
  Globe,
} from "lucide-react";

const clientLogosRow = [
  { name: "Client Partner 885", src: "/clientlogo/Frame%20885.svg" },
  { name: "Client Partner 891", src: "/clientlogo/Frame%20891.svg" },
  { name: "Client Partner 893", src: "/clientlogo/Frame%20893.svg" },
  { name: "Client Partner 895", src: "/clientlogo/Frame%20895.svg" },
  { name: "Client Partner 898", src: "/clientlogo/Frame%20898.svg" },
  { name: "Client Partner 900", src: "/clientlogo/Frame%20900.svg" },
  { name: "Client Partner 901", src: "/clientlogo/Frame%20901.svg" },
  { name: "Client Partner 908", src: "/clientlogo/Frame%20908.svg" },
  { name: "Client Partner 909", src: "/clientlogo/Frame%20909.svg" },
  { name: "Client Partner 911", src: "/clientlogo/Frame%20911.svg" },
  { name: "Client Partner 912", src: "/clientlogo/Frame%20912.svg" },
  { name: "Client Partner 917", src: "/clientlogo/Frame%20917.svg" },
  { name: "Client Partner 920", src: "/clientlogo/Frame%20920.svg" },
  { name: "Client Partner 927", src: "/clientlogo/Frame%20927.svg" },
  { name: "Client Partner 931", src: "/clientlogo/Frame%20931.svg" },
  { name: "Client Partner 932", src: "/clientlogo/Frame%20932.svg" },
  { name: "Client Partner 933", src: "/clientlogo/Frame%20933.svg" },
];

const coreValues = [
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    description:
      "Clear, honest case viability assessments and zero hidden fee structures from day one.",
  },
  {
    icon: Scale,
    title: "Courtroom Acumen",
    description:
      "Decades of trial and appellate experience spanning High Courts, DRT, NCLT, and Supreme Court.",
  },
  {
    icon: Sparkles,
    title: "Digital Accessibility",
    description:
      "Real-time case tracking, rapid legal consultations, and paperless coordination at your fingertips.",
  },
  {
    icon: Handshake,
    title: "Client-First Protection",
    description:
      "Relentless defense against aggressive collection practices, predatory litigation, and corporate disputes.",
  },
];

const impactStats = [
  {
    value: "35+ Yrs",
    label: "Combined Heritage",
    detail: "Distinguished public service & taxation jurisprudence",
  },
  {
    value: "10,000+",
    label: "Litigants & Businesses",
    detail: "Guided through complex dispute & debt resolution",
  },
  {
    value: "₹500Cr+",
    label: "Liabilities Resolved",
    detail: "Through negotiated settlements & tribunal defenses",
  },
  {
    value: "14+ Benches",
    label: "Pan-India Reach",
    detail: "Represented across High Courts & specialized tribunals",
  },
];

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

const barAssociationLogos = [
  { name: "Indian National Bar Association", src: "/affiliations/inba.png" },
  { name: "New Delhi Bar Association", src: "/affiliations/ndba.png" },
  { name: "Supreme Court Bar Association India", src: "/affiliations/scba.png" },
  { name: "Delhi High Court Bar Association", src: "/affiliations/dhcba.png" },
];

function SafetyPartnerSection() {
  return (
    <section className="relative w-full bg-[#FAF4EB] py-12 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-16 selection:bg-[#30261C] selection:text-[#FAF4EB]">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-[#1F1B18] leading-[1.08]">
                AMA Legal <span className="text-[#C59210]">Solutions</span>
                <br />
                is your legal safety partner
              </h2>

              <div className="mt-8 sm:mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#C59210] hover:bg-[#B3830C] text-[#1F1B18] text-sm sm:text-base font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
                >
                  Request a Consultation
                </Link>
              </div>
            </div>

            {/* Bar Association Seals */}
            <div className="mt-12 sm:mt-20 flex items-center gap-4 sm:gap-6 flex-wrap">
              {barAssociationLogos.map((seal, idx) => (
                <div
                  key={idx}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 transition-transform duration-200 hover:scale-105 select-none"
                >
                  <Image
                    src={seal.src}
                    alt={seal.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-7">
            {/* Our Mission Box */}
            <div className="rounded-2xl border border-neutral-200/90 bg-white/75 p-5 sm:p-6 shadow-xs border-l-[5px] border-l-[#C59210]">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#C59210] text-[11px] font-bold text-white">
                  ✓
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#1F1B18]">
                  Our Mission
                </h3>
              </div>
              <p className="mt-3 text-sm sm:text-base italic text-[#4A5568] leading-relaxed">
                &ldquo;To provide trusted, results-focused legal solutions that protect your financial and business interests ethically, clearly, and efficiently.&rdquo;
              </p>
            </div>

            {/* Paragraph 1 */}
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              With a <strong className="font-semibold text-[#1F1B18]">35-year legacy</strong>, AMA Legal Solutions is a top-rated law firm in Gurugram, India, specializing in banking & finance, corporate law, arbitration, real estate, and entertainment law. We support individuals, businesses, and startups with practical legal strategies built for real-world challenges.
            </p>

            {/* Dark Statistics Card */}
            <div className="rounded-2xl bg-[#382E26] text-[#FAF4EB] p-5 sm:p-7 shadow-sm">
              <p className="text-xs sm:text-[13.5px] text-[#FAF4EB]/85 leading-relaxed font-normal">
                Our work speaks for itself, backed by deep expertise in loan settlements, debt restructuring, financial litigation, contracts, compliance, and dispute resolution:
              </p>
              <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 text-center">
                <div>
                  <span className="block text-2xl sm:text-3xl font-bold text-[#D29E0D]">
                    1,000+
                  </span>
                  <span className="block mt-1 text-[10px] sm:text-xs font-mono tracking-wider text-[#FAF4EB]/70 uppercase font-medium">
                    CLIENTS
                  </span>
                </div>
                <div className="border-l border-white/10">
                  <span className="block text-2xl sm:text-3xl font-bold text-[#D29E0D]">
                    650+
                  </span>
                  <span className="block mt-1 text-[10px] sm:text-xs font-mono tracking-wider text-[#FAF4EB]/70 uppercase font-medium">
                    RESOLVED
                  </span>
                </div>
                <div className="border-l border-white/10">
                  <span className="block text-2xl sm:text-3xl font-bold text-[#D29E0D]">
                    300+
                  </span>
                  <span className="block mt-1 text-[10px] sm:text-xs font-mono tracking-wider text-[#FAF4EB]/70 uppercase font-medium">
                    CLOSURES
                  </span>
                </div>
              </div>
            </div>

            {/* Paragraph 2 */}
            <p className="text-sm sm:text-base text-[#4A5568] leading-relaxed">
              What defines us is our personalized approach. Every case receives focused attention and tailored strategy because here, <strong className="font-semibold text-[#1F1B18]">you&apos;re not just a case, you&apos;re a priority</strong>.
            </p>

            {/* Bottom Highlight Pill */}
            <div className="rounded-2xl border border-neutral-200/90 bg-[#ECE6DE]/80 p-4 sm:p-5 flex items-center gap-3.5 sm:gap-4">
              <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shrink-0 shadow-xs text-[#C59210]">
                <Globe className="w-5 h-5 text-[#C59210]" />
              </div>
              <p className="text-xs sm:text-[13.5px] text-[#4A5568] leading-relaxed font-normal">
                As members of leading legal and trade institutions, we combine local authority with global perspective to deliver clear advice and strong representation when it matters most.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

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
              <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 border border-[#30261C]/25 bg-white text-xs sm:text-sm font-medium text-[#1A1F26] hover:bg-[#FAF4EB] hover:border-[#30261C]/50 transition-all shadow-xs group cursor-pointer">
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
              <button className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 border border-[#30261C]/25 bg-white text-xs sm:text-sm font-medium text-[#1A1F26] hover:bg-[#FAF4EB] hover:border-[#30261C]/50 transition-all shadow-xs group cursor-pointer">
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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#FAF4EB] text-[#30261C] selection:bg-[#30261C] selection:text-[#FAF4EB]">
      {/* Light Theme Header */}
      <Navbar theme="light" />

      {/* Breadcrumb Navigation */}
      <div className="w-full border-b border-[#30261C]/10 bg-[#FAF4EB] pt-8 pb-4 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-xs font-mono tracking-widest text-[#30261C]/60 uppercase">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#D29E0D] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#30261C] font-semibold">ABOUT US</span>
          </div>
          <span className="hidden sm:inline-block text-[#D29E0D] font-medium">
            AMA LEGAL SOLUTIONS
          </span>
        </div>
      </div>

      {/* Hero Section with Corner Brackets & Dashed Border Container */}
      <AboutHero
        eyebrow="ABOUT AMA LEGAL SOLUTIONS"
        title="Courtroom Heritage. Modern Clarity."
        subtitle="Every legal challenge deserves to be understood. We listen to your concerns, simplify the complexities, and help you move forward with clear, practical legal guidance."
      />

      {/* Safety Partner Section */}
      <SafetyPartnerSection />

      {/* Credibility Section: Affiliations & Media */}
      <CredibilitySection />

     

    

     
    

     

      {/* Call To Action */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
