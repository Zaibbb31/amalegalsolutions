"use client";

import React, { useState } from "react";
import { Plus, Minus, Mail } from "lucide-react";

const faqs = [
  {
    question: "What types of legal cases does AMA Legal Solutions handle?",
    answer:
      "We specialise in loan settlement, banking & finance disputes, intellectual property rights (trademark, copyright, patents), corporate law (company incorporation, mergers, compliance), and general legal advisory. Whether you're an individual facing a debt issue or a business seeking regulatory compliance, we have the expertise to guide you.",
  },
  {
    question: "How quickly can I get a consultation?",
    answer:
      "We typically respond within 24 hours of your inquiry. For urgent matters — such as imminent court dates, bank notices, or enforcement actions — we offer priority consultations that can be arranged within a few hours. Simply mention the urgency in your message and we will fast-track the process.",
  },
  {
    question: "Do you offer pro-bono or free initial consultations?",
    answer:
      "Yes. We offer a free initial consultation for all new clients to understand the scope of your legal matter, assess your options, and provide a clear overview of how we can help — with no obligation to proceed. We believe quality legal guidance should be accessible to everyone.",
  },
  {
    question: "What is the loan settlement process and how long does it take?",
    answer:
      "Loan settlement involves negotiating with your lender (bank or NBFC) to reduce the outstanding principal or interest to an agreed lump-sum amount. The timeline depends on the lender and the complexity of the case, but most settlements are concluded within 60–180 days. We handle all negotiations, documentation, and correspondence on your behalf.",
  },
  {
    question: "How do I protect my trademark or brand in India?",
    answer:
      "Trademark protection in India involves filing an application with the Trade Marks Registry under the relevant class(es) for your goods or services. Once accepted, you receive a TM symbol immediately, and ® protection after registration (typically 18–24 months). We manage the entire process — from class selection and filing to responding to examination reports and oppositions.",
  },
  {
    question: "What is AMA Legal Solutions' fee structure?",
    answer:
      "Our fees are transparent and vary by the nature and complexity of the matter. We offer fixed-fee packages for straightforward matters (e.g. trademark registration, company incorporation) and retainer-based arrangements for ongoing advisory. We provide a clear written estimate before commencing any work — no hidden charges.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-[#FAF4EB] py-16 sm:py-24 px-6 sm:px-10 lg:px-16 border-t border-[#30261C]/15 selection:bg-[#30261C] selection:text-[#FAF4EB]"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* ── Left Column ── */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <span className="inline-flex items-center text-[11px] font-mono tracking-widest text-[#D29E0D] uppercase font-semibold">
                FAQ
              </span>

              {/* Heading */}
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-[2.6rem] font-medium tracking-tight text-[#30261C] leading-[1.12]">
                Common Questions, Straight Answers
              </h2>

              {/* Subtext */}
              <p className="mt-4 sm:mt-5 text-sm sm:text-[15px] text-[#30261C]/70 leading-relaxed font-normal max-w-sm">
                Clear, zero-fluff answers to the most common legal questions —
                from your first inquiry to successful resolution.
              </p>
            </div>

            {/* Email CTA — sits at the bottom on desktop */}
            <div className="mt-10 lg:mt-16">
              {/* Thin vertical rule */}
              <div className="w-0.5 h-10 bg-[#30261C]" />
              <a
                href="mailto:info@amalegalsolutions.com"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 bg-[#30261C] text-[#FAF4EB] text-xs font-semibold tracking-wide hover:bg-[#1A1209] transition-colors shadow-sm group"
              >
                <Mail className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
                info@amalegalsolutions.com
              </a>
            </div>
          </div>

          {/* ── Right Column: Accordion ── */}
          <div className="lg:col-span-8 divide-y divide-[#30261C]/12">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={i} className="py-5 sm:py-6">
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-start justify-between gap-6 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-sm sm:text-base font-medium leading-snug transition-colors duration-200 ${
                        isOpen
                          ? "text-[#30261C]"
                          : "text-[#30261C]/80 group-hover:text-[#30261C]"
                      }`}
                    >
                      {faq.question}
                    </span>

                    {/* +/− icon */}
                    <span
                      className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                        isOpen
                          ? "border-[#D29E0D] bg-[#D29E0D] text-black"
                          : "border-[#30261C]/30 bg-transparent text-[#30261C]/60 group-hover:border-[#30261C]/60"
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3 h-3" />
                      ) : (
                        <Plus className="w-3 h-3" />
                      )}
                    </span>
                  </button>

                  {/* Animated answer panel */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm sm:text-[15px] text-[#30261C]/70 leading-relaxed font-light pr-8">
                      {faq.answer}
                    </p>
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
