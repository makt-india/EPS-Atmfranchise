"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Target, Lightbulb, ArrowRight, Phone, ShieldCheck,Lock,Handshake,Scale,FileCheck } from "lucide-react";
import RecentInstallations from "@/components/RecentInstallations";



// Optimization: Move variants outside to prevent re-creation

export default function AboutContent() {
  return (
    <div className="overflow-hidden bg-white">
<section className="py-20 lg:py-24" aria-labelledby="about-cta-heading">
  <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

    {/* LEFT CONTENT */}
    <div>

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-800 text-sm font-semibold mb-6">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
        </span>
        Operating Since 2013
      </div>

      <h2
        id="about-cta-heading"
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1d134c] mb-6 leading-tight"
      >
        Trusted White Label{" "}
        <span className="text-[#3f2aa3]">
          ATM Franchise in India
        </span>
      </h2>

      <p className="text-lg text-gray-600 mb-6 leading-relaxed">
        EPS supports entrepreneurs, shop owners, and commercial property
        holders in launching structured{" "}
        <strong className="text-[#1d134c]">
          ATM franchise businesses
        </strong>{" "}
        across India. Our operational framework ensures installation,
        compliance coordination, and centralized monitoring.
      </p>

      <p className="text-lg text-gray-600 mb-8 leading-relaxed">
        The objective is straightforward — deliver a transparent,
        transaction-based income model backed by secure infrastructure,
        defined processes, and dedicated technical support.
      </p>

      {/* Trust Highlights */}
      <div className="space-y-4">
        {[
          "Transparent Investment Structure (₹3–5 Lakhs Range)",
          "Location Evaluation & Installation Coordination",
          "Secure White Label ATM Infrastructure",
          "Nationwide Monitoring & Technical Support",
        ].map((item, index) => (
          <div key={index} className="flex items-start gap-3 group">
            <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
            <p className="text-gray-700 font-medium group-hover:text-[#1d134c] transition-colors">
              {item}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RIGHT IMAGE */}
    <div className="relative w-full h-[400px] lg:h-[500px]">

      <div className="absolute inset-0 bg-[#3f2aa3] rounded-2xl rotate-3 opacity-10"></div>

      <Image
        src="/img/group.webp"
        alt="EPS ATM franchise support team assisting partners across India"
        fill
        className="rounded-2xl shadow-2xl object-cover border-4 border-white"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority
      />

      {/* Floating Stats Card */}
      <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100 hidden sm:block">
        <p className="text-sm text-gray-500 font-medium">
          ATM Network Presence
        </p>
        <p className="text-3xl font-bold text-[#1d134c]">
          15,000+
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Active ATMs Across India
        </p>
      </div>
    </div>
  </div>
</section>
      {/* SECTION 2: MISSION & VISION */}
<section className="py-20 bg-gray-50 relative overflow-hidden" aria-labelledby="mission-vision-heading">

  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#1d134c_1px,transparent_1px)] [background-size:20px_20px]"></div>

  <div className="max-w-7xl mx-auto px-6 space-y-20 relative z-10">

    {/* ROW 1 — Mission */}
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

      <div className="relative w-full h-[350px] lg:h-[400px] group">
        <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-2 opacity-10 transition-transform group-hover:rotate-0"></div>

        <Image
          src="/img/mission.webp"
          alt="ATM franchise expansion mission across cities, towns and villages in India"
          fill
          className="rounded-2xl shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div>
        <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
          <Target className="w-7 h-7 text-blue-700" />
        </div>

        <h2
          id="mission-vision-heading"
          className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6"
        >
          Our Mission – Expanding ATM Franchise Access in India
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our mission is to strengthen ATM accessibility across every{" "}
          <strong className="text-[#1d134c]">
            city, town, and rural region in India
          </strong>{" "}
          through a structured White Label ATM franchise model. 
          EPS focuses on uptime reliability, secure transaction routing,
          and nationwide operational coordination.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-blue-500 pl-4 bg-white/50 py-2">
          We provide entrepreneurs with a{" "}
          <strong className="text-[#1d134c]">
            transparent, compliance-aligned, and scalable ATM franchise business
          </strong>{" "}
          that generates recurring transaction-based income.
        </p>
      </div>
    </div>

    {/* ROW 2 — Vision */}
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

      <div className="order-2 md:order-1">

        <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
          <Lightbulb className="w-7 h-7 text-purple-700" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
          Our Vision – Building a Trusted White Label ATM Network
        </h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          Our vision is to build one of India’s most reliable ATM networks,
          supporting financial access in{" "}
          <strong className="text-[#1d134c]">
            rural, semi-urban, and commercial locations
          </strong>. 
          Wide coverage ensures higher transaction availability and
          stronger earning potential for franchise partners.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-purple-500 pl-4 bg-white/50 py-2">
          We aim to provide a secure pathway for business owners to earn{" "}
          <strong className="text-[#1d134c]">
            stable monthly income through ATM franchise operations
          </strong>{" "}
          backed by centralized monitoring and technical support.
        </p>
      </div>

      <div className="order-1 md:order-2 relative w-full h-[350px] lg:h-[400px] group">
        <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-2 opacity-10 transition-transform group-hover:rotate-0"></div>

        <Image
          src="/img/vision.webp"
          alt="White label ATM franchise network expansion across rural and semi-urban India"
          fill
          className="rounded-2xl shadow-lg object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

    </div>
  </div>
</section>
< RecentInstallations/>
{/* SECTION 3: WHY CHOOSE US */}
<section className="py-20 bg-white" aria-labelledby="why-choose-heading">
  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center max-w-3xl mx-auto">
      <h2
        id="why-choose-heading"
        className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6"
      >
        Why Choose EPS for Your ATM Franchise in India?
      </h2>

      <p className="text-lg text-gray-600 mb-12 leading-relaxed">
        EPS provides structured onboarding, transparent investment details,
        and centralized operational coordination for individuals starting a{" "}
        <strong className="text-[#3f2aa3]">
          White Label ATM franchise business
        </strong>.
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-8">

      {[
        {
          title: "Dedicated Franchise Support",
          desc:
            "From enquiry to installation, our team assists with location evaluation, documentation guidance, and operational coordination.",
          icon: "🤝",
          color: "bg-blue-50 border-blue-100 hover:border-blue-300",
        },
        {
          title: "Transparent Cost & Earnings Structure",
          desc:
            "Clear explanation of investment range (₹3–5 Lakhs), transaction-based income model, and operational responsibilities.",
          icon: "💎",
          color: "bg-green-50 border-green-100 hover:border-green-300",
        },
        {
          title: "Reliable Technical & Monitoring System",
          desc:
            "Centralized monitoring, uptime-focused infrastructure, and structured backend management to ensure consistent ATM performance.",
          icon: "🚀",
          color: "bg-purple-50 border-purple-100 hover:border-purple-300",
        },
      ].map((card, i) => (
        <div
          key={i}
          className={`p-8 border rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ${card.color}`}
        >
          <div className="text-4xl mb-4">{card.icon}</div>

          <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
            {card.title}
          </h3>

          <p className="text-gray-700 leading-relaxed">
            {card.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-16 md:py-24 bg-slate-950 text-white overflow-hidden relative" id="compliance">

  {/* Background Glow */}
  <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] -mr-48 -mt-48" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -ml-48 -mb-48" />

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* HEADER */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-900/30 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-widest mb-6">
        <Lock className="w-3 h-3" />
        Compliance & Operational Structure
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight">
        How the EPS ATM Franchise{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          System Works
        </span>
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
        EPS provides structured onboarding, documentation coordination,
        and operational support under legally registered entities and
        RBI-compliant White Label ATM frameworks.
      </p>
    </div>

    {/* CARDS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">

      {/* Card 1 */}
      <div className="group bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-emerald-500/30 hover:bg-slate-800/50 transition-all duration-300">
        <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 border border-emerald-500/20 group-hover:scale-110 transition-transform">
          <ShieldCheck className="text-emerald-400 w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-emerald-300 transition-colors">
          Structured Investment Framework
        </h3>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          Investment requirements, refundable security deposits,
          and installation costs are defined clearly before onboarding.
          All payments are processed under registered business entities.
        </p>
      </div>

      {/* Card 2 */}
      <div className="group bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-blue-500/30 hover:bg-slate-800/50 transition-all duration-300">
        <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
          <Handshake className="text-blue-400 w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors">
          End-to-End Coordination
        </h3>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          EPS manages location documentation, approval coordination,
          and engineer scheduling. Technical monitoring and transaction
          processing operate within secure operator infrastructure.
        </p>
      </div>

      {/* Card 3 */}
      <div className="group bg-slate-900/50 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 hover:bg-slate-800/50 transition-all duration-300">
        <div className="w-14 h-14 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6 border border-cyan-500/20 group-hover:scale-110 transition-transform">
          <Scale className="text-cyan-400 w-7 h-7" />
        </div>

        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">
          Regulatory Compliance
        </h3>

        <p className="text-slate-400 leading-relaxed text-sm md:text-base">
          Installations operate under RBI-regulated White Label ATM
          frameworks. Agreements, invoices, and operational records
          follow defined compliance standards.
        </p>
      </div>
    </div>

    {/* VERIFICATION BOX */}
    <div className="mt-16 relative p-px rounded-2xl overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-blue-500/30 to-emerald-500/30 rounded-2xl" />

      <div className="relative bg-slate-950/90 rounded-2xl p-6 md:p-8 text-center backdrop-blur-xl">

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-slate-300 text-sm md:text-base">

          <div className="flex items-center gap-2 text-emerald-400 font-bold shrink-0">
            <FileCheck className="w-5 h-5" />
            <span>Official Business Details:</span>
          </div>

          <p className="max-w-2xl">
            EPS operates under registered corporate entities with valid GST
            and statutory documentation available for verification.
          </p>

<button
  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#1d134c] text-white font-semibold hover:bg-[#2a1d6a] transition-colors whitespace-nowrap"
>
  Business Credentials →
</button>

        </div>
      </div>
    </div>

  </div>
</section>

{/* SECTION 4: CTA */}
<section
  className="py-20 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-center text-white relative overflow-hidden"
  aria-labelledby="final-cta-heading"
>

  {/* Decorative Circles */}
  <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 right-0 w-80 h-80 bg-white opacity-5 rounded-full translate-x-1/2 translate-y-1/2"></div>

  <div className="max-w-4xl mx-auto px-6 relative z-10">

    <h3
      id="final-cta-heading"
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6"
    >
      Launch Your{" "}
      <span className="text-emerald-300">
        ATM Franchise in India
      </span>{" "}
      with EPS
    </h3>

    <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
      Invest ₹3–5 Lakhs and start a structured White Label ATM business.
      EPS supports location evaluation, approval coordination, installation,
      and centralized monitoring to help you build{" "}
      <strong className="text-white">
        stable monthly transaction-based income
      </strong>.
    </p>

    <div className="flex flex-col sm:flex-row justify-center items-center gap-5">

      <Link
        href="/apply-now"
        className="flex items-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Apply for EPS ATM Franchise
        <ArrowRight className="w-5 h-5" />
      </Link>


    </div>

    <p className="mt-8 text-sm text-blue-200/80">
      Transparent investment structure • No hidden charges • Dedicated onboarding assistance
    </p>

  </div>
</section>
   </div>
  );
}