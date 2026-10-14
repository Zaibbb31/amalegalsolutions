"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import Navbar from "../../component/navbar";
import CTA from "../../component/cta";
import Footer from "../../component/footer";
import {
  ArrowLeft,
  ArrowUpRight,
  Star,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  Clock,
  Building2,
  Scale,
  FileText,
} from "lucide-react";

interface ServiceDetail {
  title: string;
  subtitle: string;
  filedUnder: string;
  published: string;
  readingTime: string;
  author: string;
  authorRole: string;
  shortVersion: string[];
  reviewsCount: string;
  rating: string;
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
}

const servicesDataMap: Record<string, ServiceDetail> = {
  "loan-settlement": {
    title: "What recovery agents are doing when they call you",
    subtitle:
      "The first call is friendly, quick, and recorded. Here is what it is actually for, and what a reasonable person should say to protect their legal rights.",
    filedUnder: "Debt Resolution & RBI Fair Practice",
    published: "August 14, 2026",
    readingTime: "5 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founding Partner & Legal Strategist",
    shortVersion: [
      "The first call is early on purpose, before your exact legal defenses or dispute letters have been drafted.",
      "You may confirm your identity without narrating the entire financial timeline or making verbal admissions.",
      "'I am currently reviewing this with my legal counsel' is a complete, lawful, and reasonable answer.",
      "If you have already received a demand notice or arbitration letter, say so plainly—it allows us to invoke statutory remedies.",
    ],
    reviewsCount: "212+ verified reviews",
    rating: "4.9",
    sections: [
      {
        heading: "The first call, before anyone has decided anything",
        paragraphs: [
          "A recovery agent or bank representative will usually reach you within a day or two of default, often before you have had time to review your loan sanction letters or consult with your advocates. The call is short and the tone is remarkably kind. That is not a trick; it is professional training designed to elicit unvetted statements.",
          "Nothing about the first call is neutral. It is the formal opening of an audit trail that will be scrutinized by debt-collection teams whose primary job is to protect their financial reserves and limit their exposure. Every commitment to pay by a certain date is logged as an admission of debt.",
        ],
      },
      {
        heading: "Three things the call is actually for",
        paragraphs: [
          "The first is to fix your account of events while you still have natural gaps in your timeline. Memory for sequence degrades faster than memory for detail, and an impromptu verbal statement given on day two will be cited against formal dispute petitions filed later.",
          "The second is to assess how vulnerable you feel before you understand statutory protections. Latent defenses—such as unlawful interest compounding, unfair penal charges, or insurance mis-selling—frequently manifest after thorough legal audits. 'I am helpless and can pay something' is an innocent sentence that gets quoted back as a concession.",
          "The third is to establish leverage for a quick, unfavorable repayment structure before you explore an official One-Time Settlement (OTS) under RBI's Fair Practice Code.",
        ],
      },
      {
        heading: "What to do instead: The 4 golden legal rules",
        paragraphs: [
          "First, request all communications in writing. Under RBI guidelines, recovery agents are strictly prohibited from making threatening phone calls, contacting relatives, or calling outside prescribed hours (8:00 AM to 7:00 PM).",
          "Second, maintain a call and message log. Note the date, exact time, caller identity, and NBFC/bank name. This documentation forms critical evidence when filing complaints with the Banking Ombudsman.",
          "Third, do not sign blank promissory notes or surrender post-dated cheques without formal written settlement terms bearing authorized bank stamps.",
          "Fourth, seek formal legal counsel to initiate structured settlement negotiations backed by relevant precedents and statutory waivers.",
        ],
      },
      {
        heading: "Statutory protections under RBI Guidelines",
        paragraphs: [
          "The Reserve Bank of India has repeatedly issued directives clarifying that banks and NBFCs cannot use musclemen or intimidate borrowers. Any harassment entitles the borrower to pursue civil injunctions, consumer court remedies, and criminal complaints for criminal intimidation.",
          "A structured legal notice issued by an advocate establishes clear boundaries, halts unauthorized third-party harassment, and compels the lending institution to engage in lawful compromise negotiations.",
        ],
      },
    ],
  },
  "banking-and-finance": {
    title: "Navigating commercial banking disputes and SARFAESI notices",
    subtitle:
      "When a lender classifies an account as NPA or issues a 13(2) notice, immediate strategic legal intervention determines whether assets are protected or foreclosed.",
    filedUnder: "Banking Regulations & Commercial Finance",
    published: "September 2, 2026",
    readingTime: "6 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founding Partner & Banking Counsel",
    shortVersion: [
      "A Section 13(2) notice under SARFAESI allows a 60-day window to raise detailed statutory objections under Section 13(3A).",
      "Do not ignore pre-classification demand letters; proactive debt restructuring prevents automatic NPA classification.",
      "Lenders must provide reasoned replies to borrower objections before initiating physical possession under Section 14.",
      "The Debt Recovery Tribunal (DRT) provides immediate appellate remedies through Section 17 Securitization Applications.",
    ],
    reviewsCount: "185+ commercial cases",
    rating: "4.9",
    sections: [
      {
        heading: "The Anatomy of an NPA Classification",
        paragraphs: [
          "Commercial lending operations adhere to strict statutory guidelines laid down by the Reserve Bank of India. When an asset is marked as Non-Performing, institutional lenders often initiate dual tracks: internal asset reconstruction and statutory enforcement.",
          "Borrowers frequently assume the bank has absolute discretion. In reality, procedural irregularities—such as incorrect classification dates, improper interest compounding, and non-compliance with prudential norms—frequently invalidate premature recovery proceedings.",
        ],
      },
      {
        heading: "Responding to SARFAESI Notices",
        paragraphs: [
          "Under Section 13(3A) of the SARFAESI Act, the borrower has a statutory right to submit representations and objections. The lender is legally bound to consider these objections and communicate a reasoned response within 15 days.",
          "Failure by the bank to deliver a reasoned response vitiates subsequent measures taken under Section 13(4), providing strong grounds for obtaining interim stay orders from the jurisdictional Debt Recovery Tribunal.",
        ],
      },
      {
        heading: "Strategic DRT & Appellate Intervention",
        paragraphs: [
          "Where amicable resolution fails, filing a Securitization Application under Section 17 of the Act before the DRT protects secured commercial assets, factories, and residential collateral from premature auctions.",
          "Simultaneously, exploring One-Time Settlements (OTS) or restructuring under RBI's resolution framework enables businesses to retain operational control while resolving legacy financial distress.",
        ],
      },
    ],
  },
  "intellectual-property-rights": {
    title: "Protecting proprietary brand assets from infringement and dilution",
    subtitle:
      "Securing trademark certificates is only the first step. Here is how leading enterprises defend copyrights, patents, and trade identity across Indian jurisdictions.",
    filedUnder: "IPR Prosecution & Trademark Litigation",
    published: "August 28, 2026",
    readingTime: "4 min read",
    author: "Adv. Team",
    authorRole: "IPR Practice Group",
    shortVersion: [
      "Prior commercial use often trumps subsequent registration under Indian common law principles of 'passing off'.",
      "Receiving a Cease & Desist notice requires strategic review, not immediate panic or unconditional capitulation.",
      "Statutory trademark oppositions must be filed strictly within 4 months of publication in the Trade Marks Journal.",
      "Ex-parte ad-interim injunctions from High Courts can halt counterfeit manufacturing within 48 to 72 hours.",
    ],
    reviewsCount: "320+ registrations",
    rating: "4.9",
    sections: [
      {
        heading: "The Critical Distinction: Registration vs. Prior User Rights",
        paragraphs: [
          "Under the Trade Marks Act, 1999, registration confers statutory monopoly, but prior continuous commercial use holds formidable evidentiary weight. Many startups discover too late that an established regional entity holds common-law priority.",
          "Before investing in branding, nationwide marketing, or domain acquisition, conducting a rigorous multi-class clearance search across phonetic and visual variants is mandatory.",
        ],
      },
      {
        heading: "Handling Infringement & Cease-and-Desist Actions",
        paragraphs: [
          "When a competitor infringes on your mark or passes off inferior goods under a deceptive similarity, prompt service of a meticulously drafted legal notice sets the evidentiary threshold.",
          "If the opposing party persists, instituting a commercial suit seeking permanent injunctions, rendition of accounts, and punitive damages before the Commercial Court protects brand goodwill.",
        ],
      },
    ],
  },
  "entertainment-law": {
    title: "Navigating talent contracts, licensing, and media rights disputes",
    subtitle:
      "From streaming distribution pacts to artist agreements and pre-release injunctions, proactive legal structuring secures creative ownership and revenue streams.",
    filedUnder: "Media, Film & Entertainment Law",
    published: "August 19, 2026",
    readingTime: "5 min read",
    author: "Adv. Team",
    authorRole: "Media & IP Practice Group",
    shortVersion: [
      "Talent exclusivity clauses must be rigorously balanced against restraint-of-trade limitations under Indian contract law.",
      "Sync licensing, broadcast territoriality, and digital streaming rights must be categorized distinctly in master production deeds.",
      "Pre-release legal vetting protects producers against last-minute defamation suits and stay orders.",
      "Royalties collection mechanisms through registered societies (IPRS/ISRA) require explicit statutory assignment language.",
    ],
    reviewsCount: "140+ production deals",
    rating: "4.9",
    sections: [
      {
        heading: "Structuring Bulletproof Production & Distribution Deeds",
        paragraphs: [
          "Entertainment law operates at the intersection of intellectual property, commercial contracts, and labor regulations. With the rapid expansion of OTT platforms and digital syndication, production agreements require watertight clauses covering derivative rights, sequels, and overseas distribution.",
          "Vague wording in artist and technician agreements often leads to post-release ownership disputes that jeopardize multi-crore platform releases.",
        ],
      },
      {
        heading: "Defamation, Obscenity & Pre-Release Vetting",
        paragraphs: [
          "Frivolous PILs and defamation claims filed days before a theatrical or digital premiere represent immense commercial risk. Our proactive pre-release script vetting and compliance audits identify vulnerable dialogues and third-party references in advance.",
          "When emergency injunctions are sought, our advocates appear before High Courts to defend artistic freedom and prevent unmerited release stay orders.",
        ],
      },
    ],
  },
  "real-estate-law": {
    title: "Resolving builder delays, RERA litigation, and title disputes",
    subtitle:
      "Whether you are facing possession defaults by developers or navigating commercial land acquisition, statutory remedies protect your real estate capital.",
    filedUnder: "Property Law & RERA Compliance",
    published: "September 8, 2026",
    readingTime: "6 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founding Partner & Real Estate Counsel",
    shortVersion: [
      "Under Section 18 of RERA, buyers are entitled to full refund with statutory interest for prolonged construction delays.",
      "A 30-year title search across sub-registrar registries is essential to uncover encumbrances and inherited co-ownership claims.",
      "Builder-buyer arbitration clauses do not bar consumers from approaching RERA or Consumer Dispute Commissions.",
      "Execution petitions before RERA authorities enable recovery certificates (RC) through district revenue recovery machinery.",
    ],
    reviewsCount: "260+ property matters",
    rating: "4.9",
    sections: [
      {
        heading: "The Reality of Delayed Possession & Statutory Rights",
        paragraphs: [
          "The Real Estate (Regulation and Development) Act, 2016 (RERA) transformed homebuyer remedies in India. Builders often attempt to shield themselves behind force majeure clauses, citing supply chain delays or municipal approval lags.",
          "RERA tribunals and appellate authorities have repeatedly held that developers cannot indefinitely withhold possession or unilaterally alter master architectural plans without written consent from two-thirds of allottees.",
        ],
      },
      {
        heading: "Enforcing Recovery Certificates and NCLT Remedies",
        paragraphs: [
          "When a builder fails to honor refund orders, RERA issues a Recovery Certificate (RC), directing the District Collector to recover dues as arrears of land revenue through asset attachment.",
          "In cases of chronic insolvency or diversion of escrow funds, collective homebuyer petitions before the National Company Law Tribunal (NCLT) provide potent leverage for corporate resolution.",
        ],
      },
    ],
  },
  "criminal-law": {
    title: "Immediate legal defense in economic offenses and bail proceedings",
    subtitle:
      "When facing FIRs, criminal complaints, or summons by regulatory agencies, early strategic defense representation protects liberty and reputation.",
    filedUnder: "Criminal Defense & Appellate Advocacy",
    published: "August 30, 2026",
    readingTime: "5 min read",
    author: "Adv. Team",
    authorRole: "Criminal Defense Practice",
    shortVersion: [
      "Anticipatory bail applications under Section 438 CrPC can be moved before arrest to secure personal freedom.",
      "Section 41A CrPC mandates police to serve formal notice of appearance in offenses punishable with under 7 years imprisonment.",
      "Commercial disputes disguised as criminal cheating (Section 420 IPC / BNS) are subject to immediate quashing under Section 482.",
      "Summons from investigative agencies (ED, SFIO, Police) require legal presence and structured written statement vetting.",
    ],
    reviewsCount: "190+ defense proceedings",
    rating: "4.9",
    sections: [
      {
        heading: "Bail Advocacy: Securing Personal Liberty Without Delay",
        paragraphs: [
          "The fundamental maxim of Indian criminal jurisprudence remains: 'Bail is the rule, jail is the exception.' When a complaint or FIR is registered, prompt evaluation of statutory grounds for anticipatory bail before the Sessions Court or High Court is critical.",
          "Establishing that the accused has roots in society, poses no flight risk, and is willing to join investigation enables courts to grant protective bail conditions.",
        ],
      },
      {
        heading: "Quashing Malicious & Civil-Color Complaints",
        paragraphs: [
          "In commercial transactions, disgruntled counterparties frequently convert contractual disagreements into criminal complaints of breach of trust and cheating to exert coercive recovery pressure.",
          "The Supreme Court has consistently held that criminal machinery cannot be weaponized for civil debt recovery. We move High Courts under Section 482 CrPC to quash baseless FIRs at the threshold.",
        ],
      },
    ],
  },
  "corporate-law": {
    title: "Navigating corporate governance, shareholder pacts, and NCLT matters",
    subtitle:
      "From seed-stage funding agreements to cross-border mergers and insolvency resolution, robust legal counsel shields corporate leadership from liability.",
    filedUnder: "Corporate Law & Mergers & Acquisitions",
    published: "September 14, 2026",
    readingTime: "7 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founding Partner & Corporate Strategist",
    shortVersion: [
      "Shareholders' Agreements (SHA) must clearly demarcate drag-along, tag-along, and deadlock resolution mechanisms.",
      "Board resolutions and Director disqualification defenses require strict adherence to Section 164 of the Companies Act.",
      "Operational creditors must follow strict Section 8 demand notice procedures before filing Section 9 IBC petitions.",
      "ROC compliance defaults can be compounded through regional director (RD) and NCLT compounding applications.",
    ],
    reviewsCount: "175+ corporate retainers",
    rating: "4.9",
    sections: [
      {
        heading: "Corporate Structuring & Fiduciary Protection",
        paragraphs: [
          "A business entity's stability depends heavily on the precision of its constitutional documents—Articles of Association (AoA), Founders' Agreements, and Employment Charters. Misaligned clauses during initial funding rounds frequently lead to boardroom deadlocks.",
          "Our corporate practice guides leadership through statutory governance audits, protecting directors from personal liability while maintaining regulatory compliance under the Ministry of Corporate Affairs.",
        ],
      },
      {
        heading: "Insolvency & Bankruptcy Code (IBC) Proceedings",
        paragraphs: [
          "Before the National Company Law Tribunal (NCLT), Section 7 and Section 9 petitions require rigorous proof of undisputed debt and default. Navigating the Corporate Insolvency Resolution Process (CIRP) demands deep financial and procedural acumen.",
          "Whether representing corporate debtors against aggressive creditors or guiding resolution applicants through revival plans, strategic advocacy preserves enterprise value.",
        ],
      },
    ],
  },
  "arbitration-law": {
    title: "Enforcing arbitral awards and resolving high-stakes commercial disputes",
    subtitle:
      "Alternative Dispute Resolution provides swift, private settlement for domestic and cross-border commercial claims when managed by experienced arbitrators.",
    filedUnder: "Domestic & International Arbitration",
    published: "August 22, 2026",
    readingTime: "5 min read",
    author: "Adv. Team",
    authorRole: "Arbitration & Dispute Resolution",
    shortVersion: [
      "Section 9 petitions before High Courts secure interim injunctions and asset freezes before arbitral tribunals are constituted.",
      "Arbitral award challenges under Section 34 are confined strictly to patent illegality and public policy violations.",
      "Section 11 court applications compel recalcitrant parties to appoint neutral sole arbitrators or presiding arbitral panels.",
      "Foreign arbitral awards under the New York Convention are enforceable under Part II of the Arbitration & Conciliation Act.",
    ],
    reviewsCount: "115+ commercial arbitrations",
    rating: "4.9",
    sections: [
      {
        heading: "The Speed and Confidentiality of Modern Arbitration",
        paragraphs: [
          "Commercial enterprises favor arbitration to avoid multi-year civil court backlogs and public litigation scrutiny. The Arbitration and Conciliation Act, 1996 mandates statutory timeframes for completing pleadings and rendering awards within 12 to 18 months.",
          "Our team represents corporations in domestic and international institutional arbitrations (MCIA, SIAC, LCIA, and DIAC), drafting concise statements of claim and conducting surgical cross-examinations.",
        ],
      },
      {
        heading: "Securing Interim Protection & Executing Final Awards",
        paragraphs: [
          "An arbitral victory is meaningless if the opposing party drains assets during proceedings. Moving the High Court under Section 9 for bank account freezes and security deposits preserves the subject matter of the dispute.",
          "Once an award is passed, our execution team moves the relevant civil court under Order XXI of the CPC to attach assets and realize commercial dues promptly.",
        ],
      },
    ],
  },
  "it-and-cyber-law": {
    title: "Mitigating cyber financial fraud, data leaks, and DPDP Act compliance",
    subtitle:
      "As digital commerce and cybersecurity regulations tighten across India, proactive legal counsel protects enterprise data and recovers frozen accounts.",
    filedUnder: "Cybercrime, Data Privacy & Tech Law",
    published: "September 11, 2026",
    readingTime: "6 min read",
    author: "Adv. Team",
    authorRole: "Cyber Law & Data Privacy",
    shortVersion: [
      "The Digital Personal Data Protection (DPDP) Act imposes severe statutory penalties up to ₹250 Crores for data breaches.",
      "Bank account freezes by cyber crime cells (under Section 102 CrPC) require formal de-freezing petitions before Magistrate Courts.",
      "Software licensing agreements must explicitly address IP indemnification, API access tiers, and SLA commitments.",
      "Online financial fraud complaints must be lodged within the golden window (first 2 hours) on the National Cybercrime Portal.",
    ],
    reviewsCount: "210+ cyber & privacy matters",
    rating: "4.9",
    sections: [
      {
        heading: "De-freezing Bank Accounts Subjected to Cyber Cell Liens",
        paragraphs: [
          "A major contemporary challenge facing legitimate merchants, cryptocurrency traders, and professionals is arbitrary account freezing by state cyber cells investigating layered financial fraud. Even incidental secondary or tertiary transactions trigger blanket Section 102 CrPC freeze notices.",
          "Our cyber law practice coordinates with investigating officers and files Section 451/457 petitions before jurisdictional Magistrate Courts to release legitimate operating funds without operational delay.",
        ],
      },
      {
        heading: "DPDP Compliance & Enterprise Cybersecurity Governance",
        paragraphs: [
          "With the notification of the Digital Personal Data Protection Act, every corporate entity handling personal data qualifies as a Data Fiduciary. Implementing lawful consent notices, data principal grievance redressal mechanisms, and vendor data agreements is a legal mandate.",
          "We structure privacy policies, conduct data audit trails, and represent organizations during statutory breach inquiries to prevent financial and reputational penalties.",
        ],
      },
    ],
  },
  "civil-law": {
    title: "Resolving property partitions, estate succession, and recovery suits",
    subtitle:
      "Rooted in decades of distinguished civil trial heritage, our advocates deliver strategic representation in inheritance, title declarations, and contractual breach suits.",
    filedUnder: "Civil Litigation & Estate Law",
    published: "August 25, 2026",
    readingTime: "6 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founding Partner & Civil Counsel",
    shortVersion: [
      "Summary Suits under Order 37 CPC fast-track commercial debt recovery by compelling defendants to obtain leave to defend.",
      "Coparcenary rights of daughters under the Hindu Succession (Amendment) Act hold equal weight regardless of the father's demise date.",
      "Temporary injunction applications under Order 39 Rules 1 & 2 prevent alienation of disputed immovable property.",
      "Probate and Letters of Administration from High Courts authenticate Wills and resolve contested succession disputes.",
    ],
    reviewsCount: "310+ civil suits",
    rating: "4.9",
    sections: [
      {
        heading: "Trial Court Rigor in Complex Property & Title Disputes",
        paragraphs: [
          "Civil disputes are won or lost on the foundational strength of pleadings and documentary evidence. Under the Code of Civil Procedure (CPC), every averment not specifically denied in the written statement is deemed admitted.",
          "Our advocates draw upon decades of public service and court experience to frame precise plaints, secure interim protective injunctions, and conduct rigorous examination-in-chief in family partitions and boundary disputes.",
        ],
      },
      {
        heading: "Summary Suits & Commercial Debt Recovery",
        paragraphs: [
          "For recovery of debts arising from written contracts, negotiable instruments, or invoices, instituting an Order 37 summary suit bypasses standard multi-year trial delays.",
          "Unless the defendant establishes a genuine, bona-fide defense on affidavits, the court enters judgment in favor of the plaintiff, expediting financial recovery.",
        ],
      },
    ],
  },
  "legal-drafting-and-documentation": {
    title: "Drafting bulletproof contracts, wills, deeds, and statutory notices",
    subtitle:
      "Every lawsuit begins with an ambiguous clause. Our precision legal architecture eliminates future ambiguity and insulates your business from exposure.",
    filedUnder: "Legal Drafting, Vetting & Documentation",
    published: "September 5, 2026",
    readingTime: "4 min read",
    author: "Adv. Team",
    authorRole: "Contract Architecture Practice",
    shortVersion: [
      "Clear indemnification caps and limitation-of-liability clauses prevent catastrophic commercial exposure.",
      "Arbitration agreements must specify seat vs. venue to prevent multi-jurisdictional forum-shopping disputes.",
      "A registered Will witnessed by two independent attestors prevents prolonged probate challenges among legal heirs.",
      "Statutory legal notices must clearly specify cause of action, demand amount, and statutory cure periods.",
    ],
    reviewsCount: "1,500+ drafted instruments",
    rating: "4.9",
    sections: [
      {
        heading: "Contract Architecture: Prevention over Litigation",
        paragraphs: [
          "A contract should not merely record commercial intent; it must anticipate dispute scenarios. Inadequate termination clauses, vague intellectual property transfer provisions, and poorly defined governing law clauses frequently cause expensive courtroom battles.",
          "Our contract drafting practice tailors bespoke Master Service Agreements, SaaS licensing packs, non-disclosure deeds, and vendor contracts designed to withstand rigorous judicial scrutiny.",
        ],
      },
      {
        heading: "Statutory Notices & Private Client Estate Instruments",
        paragraphs: [
          "A well-crafted legal notice often resolves disputes before litigation commences by laying out an irrefutable legal and factual position that forces the opposing party to compromise.",
          "For private individuals, drafting clear family settlement deeds, gift deeds, and registered testamentary instruments ensures smooth intergenerational wealth transfer without inheritance discord.",
        ],
      },
    ],
  },
  "litigation": {
    title: "Formidable courtroom advocacy from District Courts to Supreme Court",
    subtitle:
      "When disputes demand resolute judicial intervention, our litigation advocates deliver commanding representation before High Courts, Supreme Court, and Tribunals.",
    filedUnder: "Trial & Appellate Litigation",
    published: "September 1, 2026",
    readingTime: "6 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founder & High Court Advocate",
    shortVersion: [
      "Writ Petitions under Article 226 and Article 32 challenge arbitrary state action, tenders, and regulatory overreach.",
      "Special Leave Petitions (SLP) before the Supreme Court demand demonstrating substantial questions of law of national importance.",
      "Appellate practice requires surgical identification of legal misdirection rather than re-arguing pure factual disputes.",
      "Urgent mentioning for early listing and interim stays protects clients from immediate statutory coercion.",
    ],
    reviewsCount: "450+ court appearances",
    rating: "4.9",
    sections: [
      {
        heading: "Strategic Courtroom Representation Across Jurisdictions",
        paragraphs: [
          "Courtroom litigation demands an intricate blend of legal scholarship, immediate tactical adaptability, and commanding oral advocacy. From District Courts to High Courts across India, our advocates represent individuals, institutions, and corporations in contested trials.",
          "Every case is backed by extensive precedent research, surgical skeleton arguments, and prompt filing of certified pleadings to secure vital interlocutory relief.",
        ],
      },
      {
        heading: "Constitutional Writs & Supreme Court SLPs",
        paragraphs: [
          "When government authorities, public sector undertakings, or regulatory bodies act in violation of fundamental rights or principles of natural justice, filing writ petitions under Article 226 before High Courts provides direct constitutional recourse.",
          "In appellate proceedings before the Supreme Court of India, our team formulates compelling Special Leave Petitions (SLPs) challenging adverse High Court rulings on pivotal constitutional and commercial interpretations.",
        ],
      },
    ],
  },
};

function ServiceDetailContent() {
  const params = useParams();
  const rawSlug = typeof params?.slug === "string" ? params.slug : "loan-settlement";

  // Readable service name for breadcrumbs & back link
  const formattedTitle = rawSlug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const fallbackService: ServiceDetail = {
    title: `Navigating legal strategy and dispute resolution in ${formattedTitle}`,
    subtitle: `Comprehensive statutory advisory, risk mitigation, and assertive advocacy tailored for complex ${formattedTitle.toLowerCase()} challenges.`,
    filedUnder: `${formattedTitle} & Regulatory Practice`,
    published: "Updated October 2026",
    readingTime: "5 min read",
    author: "Anuj Anand Malik",
    authorRole: "Founding Partner & Advocate",
    shortVersion: [
      "Early legal consultation protects your statutory rights before admissions are made.",
      "Statutory compliance audits prevent compounding penalties and regulatory overreach.",
      "Written legal representations establish binding records before courts and tribunals.",
      "Confidential dispute negotiations resolve high-stakes issues before trial costs escalate.",
    ],
    reviewsCount: "150+ verified matters",
    rating: "4.9",
    sections: [
      {
        heading: `Foundations of strategic representation in ${formattedTitle}`,
        paragraphs: [
          "Every legal engagement begins with an exhaustive audit of documentary evidence, statutory timelines, and regulatory frameworks. Our advocates prioritize rapid risk insulation and strategic positioning.",
          "Whether managing institutional negotiations, dispute mediation, or court litigation, we provide clear, practical guidance designed to achieve definitive legal outcomes.",
        ],
      },
      {
        heading: "What to do first: Strategic steps & counsel",
        paragraphs: [
          "Preserve all relevant communication, notices, and agreements without making impromptu concessions to the opposing party.",
          "Consult with experienced advocates to formulate a structured response backed by statutory protections and binding judicial precedents.",
        ],
      },
    ],
  };

  const service = servicesDataMap[rawSlug] || fallbackService;

  return (
    <main className="relative min-h-screen w-full bg-[#FAF4EB] text-[#30261C] selection:bg-[#30261C] selection:text-[#FAF4EB]">
      {/* Light Navbar */}
      <Navbar theme="light" />

      {/* Hero Container with Rounded Frame & Background Sketch Effect */}
      <div className="w-full px-4 sm:px-8 lg:px-12 pt-6 sm:pt-8">
        <section className="relative mx-auto max-w-7xl border border-[#30261C]/15 bg-[#30261C] p-6 sm:p-12 lg:p-16 overflow-hidden shadow-[0_4px_30px_rgba(48,38,28,0.04)]">
          

          {/* Top: Back to Services Link */}
          <div className="relative z-10 mb-8 sm:mb-12">
            <Link
              href="/service"
              className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-widest text-[#FAF4EB]/60 hover:text-[#D29E0D] uppercase transition-colors group"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
              <span>BACK TO ALL SERVICES</span>
            </Link>
          </div>

          {/* Hero Content: Two-Column Layout matching Screenshot 1 */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-end">
            {/* Left Column: Big Title & Subtitle */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-medium tracking-tight text-[#FAF4EB] leading-[1.12]">
                {service.title}
              </h1>
              <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-[#FAF4EB]/80 font-normal leading-relaxed max-w-2xl">
                {service.subtitle}
              </p>
            </div>

            {/* Right Column: Metadata Table with Horizontal Lines */}
            <div className="lg:col-span-5 w-full">
              <div className="divide-y divide-[#FAF4EB]/10 border-t border-b border-[#FAF4EB]/10">
                {/* Row 1: Filed Under */}
                <div className="py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-mono text-[11px] sm:text-xs tracking-wider text-[#FAF4EB]/60 uppercase">
                    FILED UNDER
                  </span>
                  <span className="font-medium text-[#FAF4EB] text-right">
                    {service.filedUnder}
                  </span>
                </div>

                {/* Row 2: Published */}
                <div className="py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-mono text-[11px] sm:text-xs tracking-wider text-[#FAF4EB]/60 uppercase">
                    PUBLISHED
                  </span>
                  <span className="font-medium text-[#FAF4EB]">
                    {service.published}
                  </span>
                </div>

                {/* Row 3: Reading Time */}
                <div className="py-3 sm:py-3.5 flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-mono text-[11px] sm:text-xs tracking-wider text-[#FAF4EB]/60 uppercase">
                    READING TIME
                  </span>
                  <span className="font-medium text-[#FAF4EB]">
                    {service.readingTime}
                  </span>
                </div>

                {/* Row 4: Written By */}
                <div className="py-3 sm:py-3.5 flex items-start justify-between text-xs sm:text-sm">
                  <span className="font-mono text-[11px] sm:text-xs tracking-wider text-[#FAF4EB]/60 uppercase mt-0.5">
                    WRITTEN BY
                  </span>
                  <div className="text-right">
                    <p className="font-medium text-[#FAF4EB]">
                      {service.author}
                    </p>
                    <p className="text-[11px] sm:text-xs text-[#FAF4EB]/60">
                      {service.authorRole}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Main Content Area: Sticky Left Column + Scrolling Right Column matching Screenshot 2 */}
      <section className="relative w-full py-12 sm:py-18 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
            {/* Left Column: Sticky Cards (Sticks just below navbar till right side content ends) */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 self-start z-20">
              {/* Card 1: THE SHORT VERSION */}
              <div className=" border border-[#30261C]/15 bg-[#F6EFE6] p-6 sm:p-7 shadow-[0_2px_12px_rgba(48,38,28,0.03)]">
                <h3 className="text-xs sm:text-sm font-mono tracking-widest text-[#30261C] uppercase font-bold mb-4">
                  THE SHORT VERSION
                </h3>

                <ul className="space-y-4 text-xs sm:text-[13px] text-[#30261C]/85 leading-relaxed">
                  {service.shortVersion.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3">
                      {/* Terracotta/coral accent dot matching screenshot */}
                      <span className="w-2 h-2 bg-[#E06D53] shrink-0 mt-1.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card 2: 5-Star Reviews & Confidential Consultation CTA */}
              <div className=" border border-[#30261C]/15 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(48,38,28,0.04)]">
                {/* 5 Yellow Stars + Rating */}
                <div className="flex items-center gap-1.5">
                  <div className="flex items-center text-[#D29E0D]">
                    <Star className="w-4 h-4 fill-[#D29E0D] text-[#D29E0D]" />
                    <Star className="w-4 h-4 fill-[#D29E0D] text-[#D29E0D]" />
                    <Star className="w-4 h-4 fill-[#D29E0D] text-[#D29E0D]" />
                    <Star className="w-4 h-4 fill-[#D29E0D] text-[#D29E0D]" />
                    <Star className="w-4 h-4 fill-[#D29E0D] text-[#D29E0D]" />
                  </div>
                  <span className="text-xs font-semibold text-[#1A1F26] ml-1">
                    {service.rating}
                  </span>
                  <span className="text-xs text-[#30261C]/60 font-normal">
                    ({service.reviewsCount})
                  </span>
                </div>

                {/* Trust Paragraph */}
                <p className="mt-3.5 text-xs sm:text-[13px] text-[#30261C]/75 leading-relaxed font-normal">
                  If any of this touches your legal rights, banking liabilities, or notice disputes, our initial legal review is completely confidential and free.
                </p>

                {/* Primary CTA Button */}
                <div className="mt-5 pt-1">
                  <Link
                    href="/#contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#1F1B18] text-[#FAF4EB] text-xs sm:text-sm font-semibold hover:bg-[#D29E0D] hover:text-black transition-all duration-200 shadow-sm group cursor-pointer"
                  >
                    <span>Tell us what happened</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>
            </aside>

            {/* Right Column: In-Depth Legal Guidance Sections */}
            <article className="lg:col-span-8 space-y-10 sm:space-y-14 text-[#30261C] pt-1">
              {service.sections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-[#1A1F26] leading-snug">
                    {section.heading}
                  </h2>
                  <div className="space-y-4">
                    {section.paragraphs.map((p, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-sm sm:text-base text-[#30261C]/80 leading-relaxed font-normal"
                      >
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Bottom Assurance Card */}
              <div className="mt-12 p-7 sm:p-9 rounded-2xl border border-dashed border-[#30261C]/25 bg-[#FAF4EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D29E0D]/15 border border-[#D29E0D]/30 flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-[#876505]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#1A1F26]">
                      Need immediate advocate representation?
                    </h4>
                    <p className="text-xs sm:text-sm text-[#30261C]/70 mt-0.5 font-normal">
                      Speak directly with our senior advocates for urgent reply notices and DRT / court representation.
                    </p>
                  </div>
                </div>

                <Link
                  href="/#contact"
                  className="shrink-0 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D29E0D] text-black text-xs sm:text-sm font-semibold hover:bg-[#30261C] hover:text-white transition-all shadow-sm"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Schedule Consultation</span>
                </Link>
              </div>
            </article>
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

export default function ServiceSlugPage() {
  return (
    <React.Suspense
      fallback={
        <div className="min-h-screen w-full bg-[#FAF4EB] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#D29E0D] border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <ServiceDetailContent />
    </React.Suspense>
  );
}
