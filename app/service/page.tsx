"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../component/navbar";
import CTA from "../component/cta";
import Footer from "../component/footer";
import {
  Landmark,
  Handshake,
  Lightbulb,
  Film,
  Building,
  ShieldAlert,
  Building2,
  Scale,
  Globe,
  Users,
  FileText,
  Gavel,
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  MapPin,
  Search,
} from "lucide-react";

interface ServiceCardData {
  number: string;
  category: string;
  title: string;
  slug: string;
  description: string;
  icon: React.ElementType;
  highlights: string[];
  statLabel: string;
  statValue: string;
}

const serviceCards: ServiceCardData[] = [
  {
    number: "01",
    category: "FINANCIAL REGULATION",
    title: "Banking and Finance",
    slug: "banking-and-finance",
    description:
      "Comprehensive advisory on commercial lending, regulatory compliance under RBI, bank fraud defenses, debt restructuring, and tribunal advocacy.",
    icon: Landmark,
    highlights: [
      "RBI Regulatory Compliance & Audits",
      "Banking Fraud & Financial Scam Defense",
      "Securitization & SARFAESI Matters",
      "Debt Restructuring & DRT Advocacy",
    ],
    statValue: "₹500Cr+",
    statLabel: "Cumulative financial dispute value managed",
  },
  {
    number: "02",
    category: "DEBT RELIEF & OTS",
    title: "Loan Settlement",
    slug: "loan-settlement",
    description:
      "Strategic negotiation and legal defense against aggressive recovery tactics for personal loans, business credit, credit cards, and MSME debts under RBI guidelines.",
    icon: Handshake,
    highlights: [
      "Credit Card & Personal Loan Settlement",
      "Protection from Harassment & Coercion",
      "NBFC & Bank Dispute Advocacy",
      "One-Time Settlement (OTS) Negotiation",
    ],
    statValue: "50%–70%",
    statLabel: "Average waiver negotiated on accumulated liabilities",
  },
  {
    number: "03",
    category: "PATENTS & TRADEMARKS",
    title: "Intellectual Property Rights (IPR)",
    slug: "intellectual-property-rights",
    description:
      "End-to-end protection for brand names, innovations, artistic creations, and proprietary technologies through rapid statutory filings and enforcement.",
    icon: Lightbulb,
    highlights: [
      "Trademark Search, Filing & Objections",
      "Copyright Registration & Media Protection",
      "Patent Prosecution & Advisory",
      "Cease-and-Desist & Anti-Infringement Actions",
    ],
    statValue: "99.4%",
    statLabel: "Application success rate with prompt statutory filing",
  },
  {
    number: "04",
    category: "MEDIA & BROADCASTING",
    title: "Entertainment Law",
    slug: "entertainment-law",
    description:
      "Specialized legal counsel for production houses, artists, creators, and media agencies covering artist contracts, licensing, distribution, and IP rights.",
    icon: Film,
    highlights: [
      "Talent & Artist Representation Contracts",
      "Film, Music & OTT Distribution Agreements",
      "Copyright, Royalty & Piracy Disputes",
      "Defamation & Pre-Release Legal Vetting",
    ],
    statValue: "250+",
    statLabel: "Media agreements negotiated and vetted",
  },
  {
    number: "05",
    category: "PROPERTY & RERA",
    title: "Real Estate Law",
    slug: "real-estate-law",
    description:
      "Advising buyers, developers, and investors on property due diligence, RERA compliance, title verification, commercial leasing, and land disputes.",
    icon: Building,
    highlights: [
      "RERA Filings & Buyer Redressal",
      "Title Search, Verification & Due Diligence",
      "Builder-Buyer Agreements & Litigation",
      "Commercial Leases & Land Acquisitions",
    ],
    statValue: "100%",
    statLabel: "Due diligence accuracy across property transactions",
  },
  {
    number: "06",
    category: "CRIMINAL DEFENSE",
    title: "Criminal Law",
    slug: "criminal-law",
    description:
      "Formidable defense advocacy across economic offenses, white-collar crime, bail proceedings, FIR quashing, and High Court / Supreme Court trials.",
    icon: ShieldAlert,
    highlights: [
      "Anticipatory & Regular Bail Hearings",
      "White-Collar & Economic Offenses (PMLA/ED)",
      "FIR Quashing under Section 482 CrPC",
      "Trial Court & Appellate Criminal Defense",
    ],
    statValue: "24/7",
    statLabel: "Emergency defense response & urgent bail hearings",
  },
  {
    number: "07",
    category: "ENTERPRISE & GOVERNANCE",
    title: "Corporate Law",
    slug: "corporate-law",
    description:
      "Holistic legal counsel for founders, corporations, and institutions—spanning master agreements, regulatory compliance, statutory filings, and restructuring.",
    icon: Building2,
    highlights: [
      "Company Incorporation & Governance",
      "Shareholders Agreements & Funding Vetting",
      "ROC & Statutory Compliance Audits",
      "NCLT Insolvency & Restructuring",
    ],
    statValue: "100+",
    statLabel: "Corporate & institutional clients advised across India",
  },
  {
    number: "08",
    category: "DISPUTE RESOLUTION",
    title: "Arbitration Law",
    slug: "arbitration-law",
    description:
      "Expedited dispute resolution providing strategic, confidential arbitration for high-stakes domestic and international commercial disagreements.",
    icon: Scale,
    highlights: [
      "Domestic & International Commercial Arbitration",
      "Section 9 & Section 11 Court Petitions",
      "Arbitral Award Enforcement & Challenges",
      "Mediation & Conciliation Proceedings",
    ],
    statValue: "60%",
    statLabel: "Faster dispute resolution vs traditional court trials",
  },
  {
    number: "09",
    category: "CYBERSECURITY & DATA",
    title: "IT and Cyber Law",
    slug: "it-and-cyber-law",
    description:
      "Defending against cyber financial fraud, ensuring DPDP data privacy compliance, drafting software licensing terms, and advising tech platforms.",
    icon: Globe,
    highlights: [
      "Cyber Crime & Online Financial Fraud Cases",
      "DPDP Act Compliance & Data Privacy Audits",
      "SaaS Agreements & Software Licensing",
      "E-Commerce Regulatory Compliance",
    ],
    statValue: "<24h",
    statLabel: "Immediate cyber emergency response & freezing petitions",
  },
  {
    number: "10",
    category: "CIVIL JURISDICTION",
    title: "Civil Law",
    slug: "civil-law",
    description:
      "Resolving property partitions, family estate disputes, recovery suits, injunctions, and breach of contract matters across all civil courts.",
    icon: Users,
    highlights: [
      "Partition & Family Estate Disputes",
      "Summary Suits for Debt Recovery (Order 37)",
      "Injunctions & Specific Performance Suits",
      "Probate, Wills & Succession Certificates",
    ],
    statValue: "35+ Yrs",
    statLabel: "Distinguished trial court heritage and advocacy",
  },
  {
    number: "11",
    category: "CONTRACT ARCHITECTURE",
    title: "Legal Drafting and Documentation",
    slug: "legal-drafting-and-documentation",
    description:
      "Precision-drafted contracts, master service agreements, power of attorney, legal notices, and statutory affidavits designed to eliminate future liability.",
    icon: FileText,
    highlights: [
      "Master Service Agreements & Vendor Contracts",
      "Legal Notices & Reply Drafting",
      "Power of Attorney, Wills & Deeds",
      "Non-Disclosure (NDA) & Non-Compete Pacts",
    ],
    statValue: "1,500+",
    statLabel: "Bulletproof commercial agreements drafted",
  },
  {
    number: "12",
    category: "COURTROOM ADVOCACY",
    title: "Litigation",
    slug: "litigation",
    description:
      "Formidable courtroom representation before District Courts, High Courts, Supreme Court of India, and specialized tribunals like NCLT, NCDRC & DRT.",
    icon: Gavel,
    highlights: [
      "District & Sessions Courts Representation",
      "High Court Writs & Appeals",
      "Supreme Court Special Leave Petitions (SLP)",
      "DRT, NCLT & Appellate Tribunals",
    ],
    statValue: "95%+",
    statLabel: "Favorable rulings and negotiated out-of-court settlements",
  },
];

/**
 * Checkerboard color logic across 3 columns:
 * Row 1 (row 0): middle card is yellow (col 1)
 * Row 2 (row 1): both side cards are yellow (col 0, col 2)
 * Row 3 (row 2): middle card is yellow (col 1)
 * Row 4 (row 3): both side cards are yellow (col 0, col 2)
 */
function isYellowCard(index: number): boolean {
  const row = Math.floor(index / 3);
  const col = index % 3;
  if (row % 2 === 0) {
    return col === 1;
  }
  return col === 0 || col === 2;
}

interface JurisdictionItem {
  name: string;
  type: "State" | "Union Territory";
  bench: string;
  code: string;
}

const indianJurisdictions: JurisdictionItem[] = [
  // 28 States
  { name: "Andhra Pradesh", type: "State", bench: "High Court of Andhra Pradesh, Amaravati", code: "AP" },
  { name: "Arunachal Pradesh", type: "State", bench: "Gauhati High Court Permanent Bench, Itanagar", code: "AR" },
  { name: "Assam", type: "State", bench: "Gauhati High Court, Guwahati", code: "AS" },
  { name: "Bihar", type: "State", bench: "Patna High Court, Patna", code: "BR" },
  { name: "Chhattisgarh", type: "State", bench: "High Court of Chhattisgarh, Bilaspur", code: "CG" },
  { name: "Goa", type: "State", bench: "High Court of Bombay at Goa, Panaji", code: "GA" },
  { name: "Gujarat", type: "State", bench: "Gujarat High Court, Ahmedabad", code: "GJ" },
  { name: "Haryana", type: "State", bench: "Punjab and Haryana High Court, Chandigarh", code: "HR" },
  { name: "Himachal Pradesh", type: "State", bench: "Himachal Pradesh High Court, Shimla", code: "HP" },
  { name: "Jharkhand", type: "State", bench: "Jharkhand High Court, Ranchi", code: "JH" },
  { name: "Karnataka", type: "State", bench: "High Court of Karnataka, Bengaluru", code: "KA" },
  { name: "Kerala", type: "State", bench: "High Court of Kerala, Ernakulam / Kochi", code: "KL" },
  { name: "Madhya Pradesh", type: "State", bench: "Madhya Pradesh High Court, Jabalpur", code: "MP" },
  { name: "Maharashtra", type: "State", bench: "High Court of Bombay, Mumbai", code: "MH" },
  { name: "Manipur", type: "State", bench: "High Court of Manipur, Imphal", code: "MN" },
  { name: "Meghalaya", type: "State", bench: "High Court of Meghalaya, Shillong", code: "ML" },
  { name: "Mizoram", type: "State", bench: "Gauhati High Court Aizawl Bench, Aizawl", code: "MZ" },
  { name: "Nagaland", type: "State", bench: "Gauhati High Court Kohima Bench, Kohima", code: "NL" },
  { name: "Odisha", type: "State", bench: "Orissa High Court, Cuttack", code: "OD" },
  { name: "Punjab", type: "State", bench: "Punjab and Haryana High Court, Chandigarh", code: "PB" },
  { name: "Rajasthan", type: "State", bench: "Rajasthan High Court, Jodhpur & Jaipur", code: "RJ" },
  { name: "Sikkim", type: "State", bench: "High Court of Sikkim, Gangtok", code: "SK" },
  { name: "Tamil Nadu", type: "State", bench: "Madras High Court, Chennai", code: "TN" },
  { name: "Telangana", type: "State", bench: "Telangana High Court, Hyderabad", code: "TS" },
  { name: "Tripura", type: "State", bench: "High Court of Tripura, Agartala", code: "TR" },
  { name: "Uttar Pradesh", type: "State", bench: "Allahabad High Court & Lucknow Bench", code: "UP" },
  { name: "Uttarakhand", type: "State", bench: "Uttarakhand High Court, Nainital", code: "UK" },
  { name: "West Bengal", type: "State", bench: "Calcutta High Court, Kolkata", code: "WB" },
  // 8 Union Territories
  { name: "Andaman and Nicobar Islands", type: "Union Territory", bench: "Calcutta High Court Circuit Bench, Port Blair", code: "AN" },
  { name: "Chandigarh", type: "Union Territory", bench: "Punjab and Haryana High Court, Chandigarh", code: "CH" },
  { name: "Dadra & Nagar Haveli and Daman & Diu", type: "Union Territory", bench: "High Court of Bombay Jurisdiction", code: "DN" },
  { name: "Delhi (NCT)", type: "Union Territory", bench: "Delhi High Court, New Delhi", code: "DL" },
  { name: "Jammu and Kashmir", type: "Union Territory", bench: "High Court of J&K and Ladakh, Srinagar / Jammu", code: "JK" },
  { name: "Ladakh", type: "Union Territory", bench: "High Court of J&K and Ladakh", code: "LA" },
  { name: "Lakshadweep", type: "Union Territory", bench: "High Court of Kerala Jurisdiction", code: "LD" },
  { name: "Puducherry", type: "Union Territory", bench: "Madras High Court Jurisdiction", code: "PY" },
];

export default function ServicePage() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <main className="relative min-h-screen w-full bg-[#FAF4EB] text-[#30261C] selection:bg-[#30261C] selection:text-[#FAF4EB]">
      {/* Light Navbar */}
      <Navbar theme="light" />

      {/* Hero Eyebrow / Breadcrumbs */}
      <div className="w-full border-b border-[#30261C]/10 bg-[#FAF4EB] pt-8 pb-4 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl flex items-center justify-between text-xs font-mono tracking-widest text-[#30261C]/60 uppercase">
          <div className="flex items-center gap-2">
            <Link href="/" className="hover:text-[#D29E0D] transition-colors">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#30261C] font-semibold">SERVICES & PRACTICE AREAS</span>
          </div>
          <span className="hidden sm:inline-block text-[#D29E0D] font-medium">
            AMA LEGAL SOLUTIONS
          </span>
        </div>
      </div>

      {/* Service Page Hero Section */}
      <section className="relative w-full bg-[#FAF4EB] text-[#30261C] pt-12 sm:pt-16 pb-8 sm:pb-12 px-6 sm:px-10 lg:px-16 selection:bg-[#30261C] selection:text-[#FAF4EB]">
        <div className="mx-auto max-w-7xl flex flex-col items-center text-center">
          {/* Eyebrow */}
          <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-semibold mb-3">
            LEGAL SUPPORT THAT UNDERSTANDS YOU
          </span>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#30261C] text-center leading-[1.1] max-w-4xl">
            You don&apos;t have to face legal challenges alone.
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-[#30261C]/80 text-center font-normal max-w-2xl leading-relaxed">
            From loan settlement and legal protection to documentation and compliance, we help you understand your options, navigate complex situations, and take your next step with confidence.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#30261C] text-[#FAF4EB] text-sm font-semibold hover:bg-[#D29E0D] hover:text-black transition-all duration-200 shadow-sm group cursor-pointer"
            >
              <span>Get Legal Assistance</span>
              
            </Link>

           
          </div>

          {/* Trust Line */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-mono text-[#30261C]/70">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
              Clear Guidance
            </span>
            <span className="text-[#30261C]/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
              Practical Solutions
            </span>
            <span className="text-[#30261C]/30">•</span>
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
              Client-First Support
            </span>
          </div>

          {/* Dashed Box Container with 4 Corner Brackets in Brand Brown */}
          <div className="relative w-full max-w-7xl mt-10 sm:mt-14 border border-dashed border-[#30261C]/25 bg-[#FAF4EB] p-0 shadow-[0_2px_12px_rgba(48,38,28,0.03)]">
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

            {/* Image: 16:9 on mobile responsive, preserved fixed heights on desktop */}
            <div className="relative w-full aspect-[16/9] sm:aspect-auto sm:h-[460px] md:h-[550px] lg:h-[605px] overflow-hidden select-none">
              <Image
                src="/service.png"
                alt="You don't have to face legal challenges alone - AMA Legal Solutions"
                fill
                priority
                className="object-cover object-[center_35%] select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 12 Services Section with Alternating Pattern */}
      <section id="services" className="relative w-full bg-[#FAF4EB] py-12 sm:py-16 px-6 sm:px-10 lg:px-16 border-t border-[#30261C]/15">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#D29E0D] uppercase font-medium">
                PRACTICE AREAS & ADVISORY
              </span>
              <h3 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] leading-[1.15]">
                Comprehensive Legal Counsel Built for Impact
              </h3>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-[#30261C]/75 leading-relaxed font-normal">
                From high-stakes banking and debt settlement to intellectual property and trial litigation, explore our specialized legal solutions.
              </p>
            </div>

            {/* Quick badge */}
            <div className="inline-flex items-center gap-2 self-start md:self-end px-3.5 py-1.5 border border-[#30261C]/20 bg-white/70 text-xs font-mono text-[#30261C]">
              <ShieldCheck className="w-4 h-4 text-[#D29E0D]" />
              <span>BAR CERTIFIED & PAN-INDIA COVERAGE</span>
            </div>
          </div>

          {/* 12 Cards Grid (3 columns on desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCards.map((service, idx) => {
              const Icon = service.icon;
              const isYellow = isYellowCard(idx);

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveCard(idx)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={`relative flex flex-col justify-between p-7 sm:p-9 transition-all duration-300 group ${
                    isYellow
                      ? "bg-[#ffedba] border border-[#D29E0D] shadow-[0_4px_24px_rgba(210,158,13,0.12)]"
                      : "bg-white border border-[#30261C]/20 shadow-[0_4px_20px_rgba(48,38,28,0.04)]"
                  }`}
                >
                  {/* Subtle Top Accent Corner Brackets on Hover */}
                  <span
                    aria-hidden="true"
                    className="absolute -top-[1px] -left-[1px] w-4 h-4 border-t-2 border-l-2 border-[#30261C] opacity-0 group-hover:opacity-100 transition-opacity"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute -top-[1px] -right-[1px] w-4 h-4 border-t-2 border-r-2 border-[#30261C] opacity-0 group-hover:opacity-100 transition-opacity"
                  />

                  {/* Top Header of Card */}
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-2xl sm:text-3xl font-mono font-medium tracking-tight transition-colors ${
                          isYellow
                            ? "text-[#30261C]/50 group-hover:text-[#30261C]"
                            : "text-[#30261C]/40 group-hover:text-[#D29E0D]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div
                        className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 shadow-xs ${
                          isYellow
                            ? "border-[#30261C]/25 bg-white/90 group-hover:bg-[#30261C]"
                            : "border-[#30261C]/20 bg-white group-hover:bg-[#30261C]"
                        }`}
                      >
                        <Icon className="w-6 h-6 text-[#30261C] group-hover:text-[#FAF4EB] transition-colors duration-300 stroke-[1.8]" />
                      </div>
                    </div>

                    {/* Category Eyebrow */}
                    <div className="mt-6 flex items-center gap-2">
                      <span
                        className={`inline-block px-2.5 py-0.5 text-[10px] font-mono tracking-wider uppercase font-semibold border ${
                          isYellow
                            ? "bg-[#30261C]/10 text-[#30261C] border-[#30261C]/20"
                            : "bg-[#30261C]/5 text-[#30261C] border-[#30261C]/10"
                        }`}
                      >
                        {service.category}
                      </span>
                    </div>

                    {/* Card Title linking to slug */}
                    <Link href={`/service/${service.slug}`} className="group/title block">
                      <h4 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-[#30261C] group-hover/title:text-[#D29E0D] transition-colors leading-snug">
                        {service.title}
                      </h4>
                    </Link>

                    {/* Description */}
                    <p
                      className={`mt-3 text-xs sm:text-sm leading-relaxed font-normal ${
                        isYellow ? "text-[#30261C]/85" : "text-[#30261C]/75"
                      }`}
                    >
                      {service.description}
                    </p>

                    {/* Highlights / Capabilities */}
                    <div className="mt-6 pt-5 border-t border-[#30261C]/10 space-y-2.5">
                      <p className="text-[11px] font-mono tracking-wider uppercase text-[#30261C]/60 font-medium">
                        Key Interventions:
                      </p>
                      {service.highlights.map((item, hIdx) => (
                        <div
                          key={hIdx}
                          className={`flex items-start gap-2 text-xs sm:text-[13px] ${
                            isYellow ? "text-[#30261C]/90 font-medium" : "text-[#30261C]/85"
                          }`}
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 mt-0.5 ${
                              isYellow ? "text-[#30261C]" : "text-[#D29E0D]"
                            }`}
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Metric Box & CTA Button */}
                  <div className="mt-8 pt-6 border-t border-[#30261C]/10 flex flex-col gap-5">
                    {/* Action Button redirecting to service slug */}
                    <Link
                      href={`/service/${service.slug}`}
                      className={`inline-flex items-center justify-between w-full px-5 py-3 border text-xs sm:text-sm font-medium transition-all duration-200 group/btn shadow-xs cursor-pointer ${
                        isYellow
                          ? "border-[#30261C] bg-[#30261C] text-[#FAF4EB] hover:bg-white hover:text-[#30261C]"
                          : "border-[#30261C] bg-[#30261C] text-[#FAF4EB] hover:bg-[#FAF4EB] hover:text-[#30261C]"
                      }`}
                    >
                      <span>Explore Practice Details</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          
        </div>
      </section>

      {/* Pan-India States & Union Territories Jurisdiction Section */}
      <section className="relative w-full  bg-[#FAF4EB] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 selection:bg-[#30261C] selection:text-[#FAF4EB]">
        <div className="mx-auto max-w-7xl">
          {/* Section Heading & Subheading */}
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#30261C] leading-tight">
              Pan-India Legal Jurisdiction Across All States & Union Territories
            </h2>

            <p className="mt-4 text-xs sm:text-sm md:text-base text-[#30261C]/75 leading-relaxed font-normal max-w-2xl">
              From High Courts and District Sessions to Debt Recovery Tribunals (DRT), NCLT, and consumer dispute forums, our advocate network delivers prompt, strategic legal representation across all 28 States and 8 Union Territories.
            </p>
          </div>

          {/* 4 Boxes in a Row Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {indianJurisdictions.map((region) => (
              <div
                key={region.name}
                className="group relative flex items-center justify-center border border-[#30261C]/15 bg-[#FAF4EB]/75 p-6 text-center transition-all duration-200 hover:border-[#D29E0D]"
              >
                <h4 className="text-base sm:text-lg font-medium tracking-tight text-[#30261C] transition-colors leading-snug text-center">
                  {region.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <CTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
