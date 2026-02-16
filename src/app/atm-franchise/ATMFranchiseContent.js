"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Globe, Clock, Server, CheckCircle2, ArrowRight, Building2, Landmark } from "lucide-react";

// Optimization: Move variants outside to prevent re-creation
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ATMFranchiseContent() {
  return (
    <div className="overflow-hidden bg-white">
      
      {/* --- 1. HERO SECTION --- */}
<section className="relative w-full h-[450px] md:h-[550px]" aria-labelledby="atm-hero-heading">

  <div className="absolute inset-0">
    <Image
      src="/img/atm-hero.webp"
      alt="EPS White Label ATM franchise network in India"
      fill
      className="object-cover object-center"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-r from-[#1d134c]/95 via-[#1d134c]/80 to-[#1d134c]/40" />
  </div>

  <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-6">
    <div className="max-w-3xl">

      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-300 text-sm font-semibold mb-6 backdrop-blur-sm">
        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        White Label ATM Franchise Network
      </div>

      <h1
        id="atm-hero-heading"
        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-2xl"
      >
        ATM Franchise in India –{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
          EPS White Label ATM Business
        </span>
      </h1>

      <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-2xl font-medium">
        Launch a structured ATM franchise business backed by secure
        switching infrastructure and centralized operational support.
        EPS operates within regulated White Label ATM frameworks,
        enabling stable transaction-based income across India.
      </p>

    </div>
  </div>
</section>

<div className="max-w-7xl mx-auto px-6 py-20 lg:py-24">

  {/* --- WHY EPS ATM FRANCHISE --- */}
  <section className="mb-24">

    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-6">
        Why Consider the EPS White Label ATM Franchise?
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        The <strong className="text-[#3f2aa3]">EPS ATM Franchise model</strong> 
        operates within regulated White Label ATM frameworks in India. 
        With structured documentation, centralized monitoring, and 
        secure transaction routing, it provides a professionally 
        managed ATM business structure for long-term income generation.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

      {/* Card 1 */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group">
        <div className="mb-6 p-4 rounded-xl w-fit bg-green-50 group-hover:scale-110 transition-transform">
          <ShieldCheck className="w-8 h-8 text-green-600" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
          Regulatory Framework Alignment
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          ATM deployments are executed in association with 
          RBI-authorized White Label ATM operators. Agreements 
          and installations follow operator-level compliance standards.
        </p>
      </div>

      {/* Card 2 */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group">
        <div className="mb-6 p-4 rounded-xl w-fit bg-blue-50 group-hover:scale-110 transition-transform">
          <Server className="w-8 h-8 text-blue-600" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
          Secure Transaction Routing
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          Powered by enterprise-grade switching infrastructure, 
          transactions are processed through encrypted banking networks 
          with high uptime and stability.
        </p>
      </div>

      {/* Card 3 */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group">
        <div className="mb-6 p-4 rounded-xl w-fit bg-purple-50 group-hover:scale-110 transition-transform">
          <Globe className="w-8 h-8 text-purple-600" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
          Nationwide Deployment Network
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          ATMs operate across urban, semi-urban, and rural regions, 
          enabling transaction-based revenue supported by 
          consistent footfall locations.
        </p>
      </div>

      {/* Card 4 */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm bg-white hover:shadow-xl transition-all duration-300 group">
        <div className="mb-6 p-4 rounded-xl w-fit bg-orange-50 group-hover:scale-110 transition-transform">
          <Clock className="w-8 h-8 text-orange-600" />
        </div>

        <h3 className="text-xl font-bold mb-3 text-[#1d134c]">
          Centralized Technical Monitoring
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed">
          Operator-managed 24/7 monitoring systems track uptime, 
          performance, and maintenance requirements to minimize 
          operational disruption.
        </p>
      </div>

    </div>
  </section>

        {/* --- 3. ATM NETWORK MODELS (Alternating Layout) --- */}
<section className="py-16 lg:py-20">

  <div className="text-center mb-16">
    <span className="text-[#3f2aa3] font-semibold tracking-wide uppercase text-sm">
      ATM Business Models
    </span>

    <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mt-2 mb-4">
      White Label & Brown Label ATM Franchise Models
    </h2>

    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
      EPS supports structured ATM deployment under regulated 
      White Label ATM (WLA) and Brown Label ATM (BLA) frameworks 
      across India.
    </p>
  </div>

  {/* ---------------- WLA SECTION ---------------- */}
  <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">

    <div className="relative h-[400px] w-full group">
      <div className="absolute inset-0 bg-blue-600 rounded-2xl -rotate-3 opacity-10 transition-transform group-hover:rotate-0"></div>
      <Image
        src="/img/model.webp"
        alt="White Label ATM Franchise model in India"
        fill
        className="rounded-2xl shadow-xl object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>

    <div>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Landmark className="w-6 h-6 text-blue-700" />
        </div>
        <span className="text-blue-700 font-bold bg-blue-50 px-3 py-1 rounded-full text-sm">
          White Label ATM (WLA)
        </span>
      </div>

      <h3 className="text-3xl font-bold text-[#1d134c] mb-4">
        Ideal for Rural & Semi-Urban Locations
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
        The <strong className="text-[#1d134c]">White Label ATM Franchise</strong> model 
        allows deployment of ATMs in locations where bank presence is limited. 
        Under this framework, the operator manages switching, monitoring, 
        and settlement systems while the franchise partner provides space 
        and basic infrastructure.
      </p>

      <ul className="space-y-4">
        {[
          "Designed for underserved towns and villages",
          "Transaction-based commission structure",
          "Operator-managed cash logistics & monitoring"
        ].map((txt, idx) => (
          <li key={idx} className="flex gap-3 items-center text-gray-700 font-medium">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            {txt}
          </li>
        ))}
      </ul>
    </div>
  </div>

  {/* ---------------- BLA SECTION ---------------- */}
  <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

    <div className="order-2 md:order-1">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 bg-purple-100 rounded-lg">
          <Building2 className="w-6 h-6 text-purple-700" />
        </div>
        <span className="text-purple-700 font-bold bg-purple-50 px-3 py-1 rounded-full text-sm">
          Brown Label ATM (BLA)
        </span>
      </div>

      <h3 className="text-3xl font-bold text-[#1d134c] mb-4">
        Suitable for High-Traffic Commercial Zones
      </h3>

      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
        The <strong className="text-[#1d134c]">Brown Label ATM model</strong> 
        involves shared operational responsibilities between the ATM operator 
        and partner banks. Hardware deployment and technical maintenance 
        are managed by the operator, while cash management and settlement 
        are integrated with banking partners.
      </p>

      <ul className="space-y-4">
        {[
          "Bank-integrated transaction settlement",
          "Suitable for urban and commercial hubs",
          "Structured revenue under operator agreements"
        ].map((txt, idx) => (
          <li key={idx} className="flex gap-3 items-center text-gray-700 font-medium">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            {txt}
          </li>
        ))}
      </ul>
    </div>

    <div className="order-1 md:order-2 relative h-[400px] w-full group">
      <div className="absolute inset-0 bg-purple-600 rounded-2xl rotate-3 opacity-10 transition-transform group-hover:rotate-0"></div>
      <Image
        src="/img/image.webp"
        alt="Brown Label ATM Franchise deployment in India"
        fill
        className="rounded-2xl shadow-xl object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>

  </div>
</section>
        {/* --- 4. COMPARISON TABLE --- */}
<section className="py-24" id="COMPARISON-TABLE">

  <div className="text-center mb-10">
    <h2 className="text-3xl md:text-4xl font-bold text-[#1d134c] mb-4">
      Switching Infrastructure Overview
    </h2>

    <p className="text-gray-600 max-w-2xl mx-auto">
      ATM switching networks differ in architecture, monitoring frameworks, 
      and operational scale. Below is a structural comparison to help 
      investors understand how enterprise-grade switching systems operate.
    </p>
  </div>

  <div className="overflow-x-auto shadow-2xl rounded-2xl border border-gray-100 bg-white">
    <table className="w-full min-w-[700px] border-collapse">
      <thead className="bg-[#1d134c] text-white">
        <tr>
          <th className="py-5 px-8 text-left text-lg font-bold w-1/3">
            Infrastructure Area
          </th>

          <th className="py-5 px-8 text-left text-lg font-bold w-1/3 bg-[#3f2aa3] relative">
            Enterprise Switching Network
          </th>

          <th className="py-5 px-8 text-left text-lg font-semibold w-1/3 opacity-70 bg-[#2a1c7a]">
            Smaller / Localized Switch Systems
          </th>
        </tr>
      </thead>

      <tbody className="text-gray-700">
        {[
          [
            "Transaction Routing",
            "Centralized, high-capacity routing infrastructure",
            "Regional or limited-capacity routing systems"
          ],
          [
            "Operational Monitoring",
            "24/7 centralized monitoring framework",
            "Varies by provider"
          ],
          [
            "Regulatory Alignment",
            "Structured under RBI-authorized WLA frameworks",
            "Depends on operator structure"
          ],
          [
            "Geographic Deployment",
            "Nationwide (Urban, Semi-Urban & Rural)",
            "Often concentrated in urban zones"
          ],
          [
            "Dispute Management",
            "Automated reconciliation systems",
            "Manual or semi-automated handling"
          ],
        ].map(([feature, bancs, others], i) => (
          <tr
            key={i}
            className={`border-b border-gray-100 ${
              i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
            }`}
          >
            <td className="py-5 px-8 font-semibold text-gray-900">
              {feature}
            </td>

            <td className="py-5 px-8 text-[#3f2aa3] font-semibold flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              {bancs}
            </td>

            <td className="py-5 px-8 text-gray-500">
              {others}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  <p className="text-xs text-gray-400 mt-6 text-center max-w-3xl mx-auto">
    Note: Infrastructure characteristics vary by operator and deployment model. 
    Investors are encouraged to review operator documentation and compliance 
    frameworks before proceeding.
  </p>

</section>
        {/* --- 5. TIMELINE SECTION (Responsive) --- */}
<section className="py-12 mb-12" id="atm-franchise-process">

  <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1d134c] mb-16">
    ATM Franchise Process in India
  </h2>

  <div className="relative max-w-4xl mx-auto">

    {/* Vertical Line */}
    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200"></div>

    {[
      {
        title: "Location Identification",
        desc: "Identify a ground-floor commercial space with visibility, electricity, and basic infrastructure suitable for ATM deployment.",
        step: "1",
        color: "bg-[#1d134c]"
      },
      {
        title: "Application & Documentation",
        desc: "Submit KYC, property documents, and required compliance forms for operator-level verification and approval.",
        step: "2",
        color: "bg-[#4c3ad1]"
      },
      {
        title: "Technical Assessment & Installation",
        desc: "After approval, site inspection and technical setup are scheduled. ATM hardware, connectivity, and branding are installed under operator supervision.",
        step: "3",
        color: "bg-[#ff7b54]"
      },
      {
        title: "Activation & Transaction Operations",
        desc: "Once integrated into the switching network, the ATM becomes operational and generates revenue based on transaction volume.",
        step: "4",
        color: "bg-[#00b57a]"
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`relative flex flex-col md:flex-row items-center w-full mb-12 ${
          index % 2 === 0 ? "" : "md:flex-row-reverse"
        }`}
      >

        {/* Text Side */}
        <div
          className={`w-full md:w-1/2 pl-16 md:pl-0 ${
            index % 2 === 0
              ? "md:text-right md:pr-12"
              : "md:text-left md:pl-12"
          }`}
        >
          <h3 className="text-xl font-bold text-[#1d134c]">
            {item.title}
          </h3>

          <p className="text-gray-600 mt-2 text-sm md:text-base leading-relaxed">
            {item.desc}
          </p>
        </div>

        {/* Step Indicator */}
        <div
          className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 rounded-full text-white font-bold shadow-lg ring-4 ring-white ${item.color}`}
        >
          {item.step}
        </div>

        {/* Spacer for Desktop */}
        <div className="hidden md:block w-1/2"></div>

      </div>
    ))}

  </div>

</section>

        {/* --- 6. CTA SECTION --- */}
<section className="py-16 px-6 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-center rounded-3xl shadow-2xl relative overflow-hidden">

  {/* Decorative Glow */}
  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
  <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

  <div className="relative z-10 max-w-3xl mx-auto">

    <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
      Start Your ATM Franchise Application
    </h3>

    <p className="text-lg text-blue-100 mb-10 leading-relaxed">
      Begin the structured approval process for your 
      <strong className="text-white"> White Label ATM Franchise</strong>. 
      Our team will guide you through documentation, 
      location evaluation, and installation coordination.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <Link
        href="/apply-now"
        className="flex items-center justify-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
      >
        Apply Now
        <ArrowRight className="w-5 h-5" />
      </Link>

      <Link
        href="/apply-now"
        className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white/20 text-white hover:bg-white/10 transition-all duration-300"
      >
        Contact Support
      </Link>

    </div>

    <p className="text-xs text-blue-200/70 mt-6">
      Approval timelines depend on documentation accuracy and site suitability.
    </p>

  </div>
</section>

      </div>
    </div>
  );
}