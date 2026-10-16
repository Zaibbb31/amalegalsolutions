import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ShieldCheck, Scale, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const practiceAreas = [
    { name: "Banking & Finance Regulation", href: "/service/banking-and-finance" },
    { name: "Loan Settlement & OTS", href: "/service/loan-settlement" },
    { name: "Intellectual Property Rights", href: "/service/intellectual-property-rights" },
    { name: "Entertainment & Media Law", href: "/service/entertainment-law" },
    { name: "Debt Recovery & DRT Advocacy", href: "/service" },
    { name: "Commercial & Corporate Litigation", href: "/service" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About the Firm", href: "/about" },
    { name: "All Practice Areas", href: "/service" },
    { name: "Insight & Articles", href: "/#blogs" },
    { name: "Client Testimonials", href: "/#testimonials" },
    { name: "Contact & Consultations", href: "/contact" },
  ];

  return (
    <footer className="relative w-full overflow-hidden border-t border-[#30261C]/15 bg-[#FAF4EB] text-[#30261C]">
      {/* Upper Content Section: Placed safely up from the bottom graphics */}
      <div className="relative z-10 mx-auto max-w-8xl px-6 sm:px-10 lg:px-16 pt-16 sm:pt-20 pb-3 sm:pb-5">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#30261C]/15">
          {/* Brand & Purpose Column */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="/" className="inline-block group">
              <div className="relative h-10 w-52 sm:w-60">
                <Image
                  src="/Logo.svg"
                  alt="AMA Legal Solutions"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-[#30261C]/80 leading-relaxed font-normal max-w-md">
              AMA Legal Solutions is a distinguished full-service law firm providing strategic litigation, debt resolution advisory, and intellectual property defense across Supreme Court, High Courts, and Tribunals nationwide.
            </p>

           
          </div>

          {/* Practice Areas */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#30261C] uppercase">
              Key Practice Areas
            </h4>
            <ul className="space-y-2.5 text-sm">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <Link
                    href={area.href}
                    className="text-[#30261C]/75 hover:text-[#D29E0D] transition-colors flex items-center justify-between group"
                  >
                    <span>{area.name}</span>
                
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#30261C] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#30261C]/75 hover:text-[#D29E0D] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Consultation */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#30261C] uppercase">
              Consultation
            </h4>
            <div className="space-y-3 text-xs text-[#30261C]/80 leading-relaxed font-mono">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 mt-0.5 text-[#D29E0D] shrink-0" />
                <span>Supreme Court & High Court Benches • New Delhi • Mumbai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#D29E0D] shrink-0" />
                <span>+91 92894 58249</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D29E0D] shrink-0" />
                <span className="truncate">contact@amalegalsolutions.com</span>
              </div>
            </div>

            
          </div>
        </div>

       

        {/* Bottom Bar: Copyright & Links (positioned safely above the graphics) */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#30261C]/70">
          <p>© 2026 AMA Legal Solutions. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#D29E0D] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-[#D29E0D] transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/disclaimer" className="hover:text-[#D29E0D] transition-colors">
              Legal Disclaimer
            </Link>
          </div>
        </div>
      </div>

      {/* Very Bottom Section: Courtroom & Scales of Justice Graphic (Pushed slightly up) */}
      <div className="relative w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[530px] -mt-6 sm:-mt-10 md:-mt-14 select-none pointer-events-none overflow-hidden">
        <Image
          src="/footerimg.png"
          alt="Indian Courtroom Bench, National Emblem, and Scales of Justice"
          fill
          priority
          className="object-cover object-bottom"
        />
        {/* Soft atmospheric gradient blend at the top transition */}
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#FAF4EB] via-[#FAF4EB]/60 to-transparent" />
      </div>
    </footer>
  );
}
