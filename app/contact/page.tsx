"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "../component/navbar";
import FaqSection from "../component/faq";
import CTA from "../component/cta";
import Footer from "../component/footer";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  MessageSquare,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
  Clock,
  ShieldCheck,
  MapPin,
  Calendar,
  Lock,
  Send,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

// WhatsApp SVG Icon
function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
    </svg>
  );
}

const serviceOptions = [
  "Banking and Finance",
  "Loan Settlement & Debt Resolution",
  "Intellectual Property Rights (IPR)",
  "Entertainment & Media Law",
  "Real Estate Law & RERA",
  "Criminal Law & Bail Matters",
  "Corporate Law & Compliance",
  "Arbitration & Dispute Resolution",
  "IT and Cyber Law",
  "Civil Law & Family Estate",
  "Legal Drafting & Documentation",
  "Litigation & Courtroom Advocacy",
  "General Legal Consultation",
];

const clientLogos = [
  { name: "Client Partner 1", src: "/clientlogo/Frame%20885.svg" },
  { name: "Client Partner 2", src: "/clientlogo/Frame%20891.svg" },
  { name: "Client Partner 3", src: "/clientlogo/Frame%20893.svg" },
  { name: "Client Partner 4", src: "/clientlogo/Frame%20895.svg" },
  { name: "Client Partner 5", src: "/clientlogo/Frame%20898.svg" },
  { name: "Client Partner 6", src: "/clientlogo/Frame%20900.svg" },
  { name: "Client Partner 7", src: "/clientlogo/Frame%20901.svg" },
  { name: "Client Partner 8", src: "/clientlogo/Frame%20908.svg" },
  { name: "Client Partner 9", src: "/clientlogo/Frame%20909.svg" },
  { name: "Client Partner 10", src: "/clientlogo/Frame%20911.svg" },
  { name: "Client Partner 11", src: "/clientlogo/Frame%20912.svg" },
  { name: "Client Partner 12", src: "/clientlogo/Frame%20917.svg" },
  { name: "Client Partner 13", src: "/clientlogo/Frame%20920.svg" },
  { name: "Client Partner 14", src: "/clientlogo/Frame%20927.svg" },
  { name: "Client Partner 15", src: "/clientlogo/Frame%20931.svg" },
  { name: "Client Partner 16", src: "/clientlogo/Frame%20932.svg" },
  { name: "Client Partner 17", src: "/clientlogo/Frame%20933.svg" },
];

function SupportingDetails() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Phone / Call Box */}
        <div className="p-4 rounded-xl border border-neutral-200 bg-[#FAF8F5]/60 hover:border-[#D29E0D] transition-colors">
          <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-500 uppercase">
            <Phone className="w-3.5 h-3.5 text-[#D29E0D]" />
            <span>Direct Legal Helpline</span>
          </div>
          <a
            href="tel:+919289458249"
            className="mt-1.5 block text-base font-semibold text-black hover:text-[#D29E0D] transition-colors"
          >
            +91 92894 58249
          </a>
          <span className="text-xs text-neutral-500 block mt-0.5">Mon – Sat, 9:30 AM – 7:30 PM</span>
        </div>

        {/* Email Box */}
        <div className="p-4 rounded-xl border border-neutral-200 bg-[#FAF8F5]/60 hover:border-[#D29E0D] transition-colors">
          <div className="flex items-center gap-2.5 text-xs font-mono text-neutral-500 uppercase">
            <Mail className="w-3.5 h-3.5 text-[#D29E0D]" />
            <span>Official Counsel Desk</span>
          </div>
          <a
            href="mailto:contact@amalegalsolutions.com"
            className="mt-1.5 block text-sm font-semibold text-black hover:text-[#D29E0D] transition-colors truncate"
          >
            contact@amalegalsolutions.com
          </a>
          <span className="text-xs text-neutral-500 block mt-0.5">Confidential client inbox</span>
        </div>
      </div>

      {/* Assurance Badges */}
      <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-600 pt-2">
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4 text-[#D29E0D]" />
          <span>&lt; 48-Hour Response</span>
        </div>
        <span className="text-neutral-300">•</span>
        <div className="flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-[#D29E0D]" />
          <span>100% Confidential</span>
        </div>
        <span className="text-neutral-300">•</span>
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-[#D29E0D]" />
          <span>Bar Certified Advocates</span>
        </div>
      </div>

      {/* Trusted by Clients Across India + Client Logos Carousel */}
      <div className="pt-6">
        <div className="flex items-center justify-between mb-3.5">
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-neutral-900 font-mono uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D29E0D]" />
            Trusted by Clients Across India
          </span>
          <span className="text-[11px] font-mono text-neutral-500">
            500+ Retainers & Disputed Claims
          </span>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full overflow-hidden rounded-xl py-3 group select-none">
          {/* Gradient Fade Masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10" />

          <div className="flex w-max">
            {/* Track 1 */}
            <div
              className="flex shrink-0 items-center gap-3 animate-marquee-left group-hover:[animation-play-state:paused] pr-3"
              style={{ animation: "marquee-left 25s linear infinite" }}
            >
              {clientLogos.map((client, idx) => (
                <div
                  key={`logo-a-${idx}`}
                  className="flex shrink-0 items-center justify-center w-[120px] sm:w-[135px] h-[50px] sm:h-[54px] px-3 py-2 bg-white rounded-lg border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D29E0D] transition-all"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-6 sm:max-h-7 w-auto max-w-[95px] sm:max-w-[105px] object-contain select-none pointer-events-none opacity-85 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Track 2 for seamless loop */}
            <div
              className="flex shrink-0 items-center gap-3 animate-marquee-left group-hover:[animation-play-state:paused] pr-3"
              style={{ animation: "marquee-left 25s linear infinite" }}
              aria-hidden="true"
            >
              {clientLogos.map((client, idx) => (
                <div
                  key={`logo-b-${idx}`}
                  className="flex shrink-0 items-center justify-center w-[120px] sm:w-[135px] h-[50px] sm:h-[54px] px-3 py-2 bg-white rounded-lg border border-neutral-200/80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-[#D29E0D] transition-all"
                >
                  <img
                    src={client.src}
                    alt={client.name}
                    className="max-h-6 sm:max-h-7 w-auto max-w-[95px] sm:max-w-[105px] object-contain select-none pointer-events-none opacity-85 hover:opacity-100 transition-opacity"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending brief
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <main className="relative min-h-screen w-full bg-[#FAF4EB] text-[#1F2937] selection:bg-[#30261C] selection:text-[#FAF4EB]">
      {/* Light Navbar */}
      <Navbar theme="light" />

      {/* Main Hero & Contact Form Section */}
      <section className="relative w-full pt-10 pb-20 sm:pb-28 px-6 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumbs (matching image style) */}
          <div className="mb-8 flex items-center gap-2 text-xs sm:text-sm font-mono tracking-widest text-neutral-600 uppercase">
            <Link href="/" className="hover:text-black transition-colors">
              HOME
            </Link>
            <span className="text-neutral-400">/</span>
            <span className="text-black font-semibold">CONTACT</span>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column (Content strictly matching Image 1) */}
            <div className="lg:col-span-6 flex flex-col justify-start">
              {/* Contact Pill Badge */}
              <div className="mb-6">
                <span className="inline-block bg-black text-white text-xs sm:text-sm font-semibold px-3 py-1 rounded-[3px] tracking-wide">
                  Contact
                </span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-black leading-[1.08] max-w-xl">
                Tell us the idea. We&apos;ll give you our two cents.
              </h1>

              {/* Subtitle / Description */}
              <p className="mt-6 text-base sm:text-lg lg:text-xl text-neutral-600 font-normal leading-relaxed max-w-xl">
                The fastest way to start is a 15-minute call. Prefer writing? Send a short brief and we&apos;ll reply within two working days.
              </p>

              {/* Desktop Only: Supporting Details placed on left column */}
              <div className="hidden lg:block mt-10 sm:mt-12 pt-8 border-t border-neutral-200/80">
                <SupportingDetails />
              </div>
            </div>

            {/* Right Column: Form (Strictly matching fields and design from Image 2) */}
            <div className="lg:col-span-6">
              <div className="bg-white border border-neutral-200/90 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-8 lg:p-10 transition-all">
                {submitted ? (
                  /* Success Feedback State */
                  <div className="py-12 px-4 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
                      <CheckCircle2 className="w-9 h-9" />
                    </div>
                    <h3 className="text-2xl font-bold text-black tracking-tight">
                      Brief Received Successfully
                    </h3>
                    <p className="mt-3 text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
                      Thank you, <span className="font-semibold text-black">{formData.name}</span>. Our advocate team has logged your query regarding{" "}
                      <span className="font-medium text-black">{formData.service || "legal services"}</span>. An advocate will reach out to you within two working days.
                    </p>

                    <div className="mt-6 p-4 bg-neutral-50 border border-neutral-200 text-left text-xs font-mono text-neutral-700 w-full max-w-sm space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Reference:</span>
                        <span className="font-semibold text-black">AMA-{Math.floor(100000 + Math.random() * 900000)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Response By:</span>
                        <span className="font-semibold text-black">Within 48 Working Hours</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-neutral-400">Contact:</span>
                        <span className="font-semibold text-black">{formData.phone || formData.email}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleReset}
                      className="mt-8 px-6 py-2.5 bg-black text-white text-xs sm:text-sm font-semibold rounded-xl hover:bg-[#D29E0D] hover:text-black transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  /* Contact Form Fields strictly matching Image 2 */
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    {/* Field 1: Your Name */}
                    <div className="relative flex items-center border border-neutral-200 bg-white px-4 py-3.5 sm:py-4 transition-all duration-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 hover:border-neutral-300">
                      <div className="mr-3 text-neutral-400 shrink-0 select-none">
                        <User className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 font-normal focus:outline-none"
                      />
                    </div>

                    {/* Field 2: Your Email */}
                    <div className="relative flex items-center border border-neutral-200 bg-white px-4 py-3.5 sm:py-4 transition-all duration-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 hover:border-neutral-300">
                      <div className="mr-3 text-neutral-400 shrink-0 select-none">
                        <Mail className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your Email"
                        className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 font-normal focus:outline-none"
                      />
                    </div>

                    {/* Field 3: Your Phone Number with WhatsApp icon on right */}
                    <div className="relative flex items-center border border-neutral-200 bg-white px-4 py-3.5 sm:py-4 transition-all duration-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 hover:border-neutral-300">
                      <div className="mr-3 text-neutral-400 shrink-0 select-none">
                        <Phone className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your Phone Number"
                        className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 font-normal focus:outline-none"
                      />
                      {/* WhatsApp icon on the right as shown in Image 2 */}
                      <a
                        href="https://wa.me/919289458249"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Chat with us directly on WhatsApp"
                        className="ml-3 shrink-0 text-[#25D366] hover:scale-110 transition-transform cursor-pointer"
                      >
                        <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                      </a>
                    </div>

                    {/* Field 4: Select Service Required (Dropdown with Briefcase on left & Chevron on right) */}
                    <div className="relative flex items-center border border-neutral-200 bg-white px-4 py-3.5 sm:py-4 transition-all duration-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 hover:border-neutral-300">
                      <div className="mr-3 text-neutral-400 shrink-0 select-none">
                        <Briefcase className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <select
                        id="contact-service"
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full bg-transparent text-sm sm:text-base focus:outline-none appearance-none cursor-pointer pr-6 ${
                          formData.service ? "text-neutral-900 font-normal" : "text-neutral-500 font-normal"
                        }`}
                      >
                        <option value="" disabled className="text-neutral-400">
                          Select Service Required
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="text-neutral-900 py-1">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {/* Chevron Down indicator */}
                      <div className="pointer-events-none absolute right-4 text-neutral-400">
                        <ChevronDown className="w-5 h-5 stroke-[2]" />
                      </div>
                    </div>

                    {/* Field 5: Your Message (Textarea with MessageSquare icon) */}
                    <div className="relative flex items-start border border-neutral-200 bg-white px-4 py-3.5 sm:py-4 transition-all duration-200 focus-within:border-black focus-within:ring-2 focus-within:ring-black/5 hover:border-neutral-300">
                      <div className="mr-3 text-neutral-400 shrink-0 select-none mt-0.5">
                        <MessageSquare className="w-5 h-5 stroke-[1.75]" />
                      </div>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Your Message"
                        className="w-full bg-transparent text-sm sm:text-base text-neutral-900 placeholder:text-neutral-500 font-normal focus:outline-none resize-none leading-relaxed"
                      />
                    </div>

                    {/* Submit CTA Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-black text-white text-sm sm:text-base font-medium rounded-xl hover:bg-[#30261C] active:scale-[0.99] transition-all duration-200 shadow-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/30 border-t-white animate-spin" />
                            <span>Transmitting Brief...</span>
                          </>
                        ) : (
                          <>
                            <span>Send Message</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </div>

                    {/* Privacy and Privilege notice */}
                    <p className="text-center text-xs text-neutral-500 font-mono pt-1">
                      🔒 All communications protected by attorney-client privilege.
                    </p>
                  </form>
                )}
              </div>

              {/* Mobile Only: Supporting Details appear AFTER the form */}
              <div className="block lg:hidden mt-10 pt-8 border-t border-neutral-200/80">
                <SupportingDetails />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations & Jurisdictions Section */}
      <section className="relative w-full bg-[#FAF4EB] py-8 sm:py-10 px-6 sm:px-10 lg:px-16 text-[#30261C]">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
                OUR CHAMBERS & ADVISORY DESKS
              </span>
              <h2 className="mt-2 text-2xl sm:text-4xl font-medium tracking-tight text-[#30261C]">
                Chambers in New Delhi & Mumbai, <br />   Pan-India Reach
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#30261C]/70 max-w-md">
              Whether meeting at our High Court chambers or collaborating via secure virtual counsel sessions, we provide unwavering advocacy across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* New Delhi Chambers */}
            <div className="border border-[#30261C]/15 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#D29E0D] uppercase mb-4">
                <span>Supreme Court & High Court Desk</span>
                <span className="w-2 h-2 rounded-full bg-[#D29E0D]" />
              </div>
              <h3 className="text-xl font-bold text-[#30261C]">New Delhi Chambers</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#30261C]/75 leading-relaxed font-normal">
                Supreme Court of India, Delhi High Court Benches & Patiala House District Courts Complex.
              </p>
              <div className="mt-6 pt-5 border-t border-[#30261C]/10 text-xs font-mono text-[#30261C]/80 space-y-1">
                <div>Phone: +91 92894 58249</div>
                <div>Hours: Mon - Sat, 9:30 AM - 7:30 PM</div>
              </div>
            </div>

            {/* Mumbai Chambers */}
            <div className="border border-[#30261C]/15 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#D29E0D] uppercase mb-4">
                <span>Commercial & Banking Desk</span>
                <span className="w-2 h-2 rounded-full bg-[#D29E0D]" />
              </div>
              <h3 className="text-xl font-bold text-[#30261C]">Mumbai Chambers</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#30261C]/75 leading-relaxed font-normal">
                Bombay High Court, Fort Commercial District, DRT Mumbai & NCLT Appellate Benches.
              </p>
              <div className="mt-6 pt-5 border-t border-[#30261C]/10 text-xs font-mono text-[#30261C]/80 space-y-1">
                <div>Phone: +91 92894 58249</div>
                <div>Hours: Mon - Sat, 9:30 AM - 7:30 PM</div>
              </div>
            </div>

            {/* Virtual Counsel & Pan-India */}
            <div className="border border-[#30261C]/15 bg-white p-7 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-[#D29E0D] uppercase mb-4">
                <span>Pan-India Network</span>
                <span className="w-2 h-2 rounded-full bg-[#D29E0D]" />
              </div>
              <h3 className="text-xl font-bold text-[#30261C]">Virtual Advisory Desk</h3>
              <p className="mt-3 text-xs sm:text-sm text-[#30261C]/75 leading-relaxed font-normal">
                Encrypted remote legal consultations via video conference, instant case updates, and digital document vetting.
              </p>
              <div className="mt-6 pt-5 border-t border-[#30261C]/10 text-xs font-mono text-[#30261C]/80 space-y-1">
                <div>Email: contact@amalegalsolutions.com</div>
                <div>Coverage: All 28 States & 8 UTs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global FAQ Component used as it is */}
      <FaqSection />

      {/* Reusable CTA */}
      <CTA />

      {/* Global Footer */}
      <Footer />
    </main>
  );
}
