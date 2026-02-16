"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Zap, MapPin, FileText, Server, ArrowRight, XCircle, Info } from "lucide-react";
import Care360Section from "../components/Care360Section";


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

export default function CostRequirementsContent() {
  return (
    <div className="overflow-hidden bg-white">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative w-full py-24 md:py-32 bg-[#1d134c] text-white overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        
        <div className="relative w-full max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
             initial="hidden"
             animate="visible"
             variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium mb-8 text-blue-100">
              <Info className="w-4 h-4" />
              <span>Transparent Pricing • Zero Hidden Fees</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              EPS ATM Cost &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">
                Requirements
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
              Get complete clarity on investment, documents, and eligibility to start your <strong className="text-white">EPS ATM Franchise</strong>. 
              We believe in 100% transparency.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                href="#cost-breakdown"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-[#1d134c] font-bold shadow-xl hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                View Cost Breakdown
              </Link>
              <Link
                href="/apply-now"
                className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/30 bg-white/5 text-white font-bold backdrop-blur-sm hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Apply for Franchise <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Metrics */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
          >
            {[
              { value: "₹2L – 4.0L", label: "Setup Cost Range" },
              { value: "15 – 30 Days", label: "Fast Installation" },
              { value: "₹25K – ₹60K+", label: "Monthly Earnings" },
            ].map((metric, i) => (
              <motion.div key={i} variants={fadeUp} className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 transition-colors">
                <h3 className="text-2xl md:text-3xl font-extrabold text-white">{metric.value}</h3>
                <p className="text-blue-200 text-sm mt-1 font-medium">{metric.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

<section className="py-28 bg-[#f8fafc] relative">
  <div className="max-w-7xl mx-auto px-6">

    {/* Section Header */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center mb-20 max-w-3xl mx-auto"
    >
      <div className="inline-block px-5 py-2 rounded-full bg-[#1d134c]/5 text-[#1d134c] text-xs font-semibold tracking-widest uppercase mb-6">
        RBI-Compliant Eligibility Criteria
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d134c] mb-6 leading-tight">
        Location & Infrastructure Requirements
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        To maintain operational stability, security standards, and transaction
        reliability, your proposed location must meet the following structured
        eligibility parameters.
      </p>
    </motion.div>

    {/* Requirement Grid */}
    <div className="grid md:grid-cols-2 gap-10">

      {[
        {
          icon: MapPin,
          title: "Minimum Space Specifications",
          points: [
            "Full Shop Model: 8 ft × 10 ft",
            "Shop-in-Shop Model: 6 ft × 6 ft",
            "Ground floor preferred for maximum visibility"
          ],
          accent: "border-l-4 border-blue-600"
        },
        {
          icon: FileText,
          title: "Documentation Checklist",
          points: [
            "Government ID Proof (Aadhaar & PAN)",
            "Electricity Bill (Location Verification)",
            "Ownership Proof or Registered Lease Agreement"
          ],
          accent: "border-l-4 border-indigo-600"
        },
        {
          icon: Zap,
          title: "Electrical Requirements",
          points: [
            "Single Phase Supply (Minimum 1 KVA)",
            "24×7 Stable Power Availability",
            "Proper Earthing Connection (Mandatory)"
          ],
          accent: "border-l-4 border-yellow-500"
        },
        {
          icon: Server,
          title: "Connectivity & Network",
          points: [
            "VSAT Space (Minimum 6×6 ft Rooftop)",
            "Strong Network Signal Zone",
            "Permission for Antenna Installation"
          ],
          accent: "border-l-4 border-purple-600"
        },
      ].map((item, i) => (
        <motion.div
          key={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ delay: i * 0.1 }}
          className={`bg-white rounded-2xl p-10 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 ${item.accent}`}
        >
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-xl bg-gray-50 text-[#1d134c]">
              <item.icon className="w-7 h-7" strokeWidth={1.8} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#1d134c] mb-6">
                {item.title}
              </h3>

              <ul className="space-y-4">
                {item.points.map((point, j) => (
                  <li
                    key={j}
                    className="flex items-start gap-3 text-gray-700 text-base"
                  >
                    <span className="mt-2 w-2 h-2 rounded-full bg-[#1d134c] flex-shrink-0" />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      ))}

    </div>

    {/* Regulatory Note */}
    <div className="mt-20 text-center max-w-3xl mx-auto">
      <p className="text-sm text-gray-500 leading-relaxed">
        Final approval depends on operator-level technical evaluation, site
        suitability, and regulatory compliance verification.
      </p>
    </div>

  </div>
</section>

      {/* ========================================= */}
      {/* 3. FRANCHISE PACKAGES (COST)              */}
      {/* ========================================= */}
<section id="cost-breakdown" className="py-28 bg-[#f8fafc]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className="text-center mb-20 max-w-3xl mx-auto"
    >
      <div className="inline-block px-5 py-2 rounded-full bg-[#1d134c]/5 text-[#1d134c] text-xs font-semibold tracking-widest uppercase mb-6">
        Structured Deployment Models
      </div>

      <h2 className="text-4xl md:text-5xl font-extrabold text-[#1d134c] mb-6">
        ATM Installation Investment Structure
      </h2>

      <p className="text-lg text-gray-600 leading-relaxed">
        Investment varies depending on infrastructure model, location category,
        and operator approval. Below are standard deployment structures.
      </p>
    </motion.div>

    {/* Grid */}
    <div className="grid md:grid-cols-3 gap-10 items-stretch">

      {/* Model 1 */}
      <motion.div
        variants={fadeUp}
        className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-2xl font-bold text-[#1d134c] mb-4">
          Shop Integration Model
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Suitable for existing retail establishments.
        </p>

        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">
            Estimated Infrastructure Range
          </p>
          <span className="text-3xl font-extrabold text-[#1d134c]">
            ₹1.2L – ₹1.8L
          </span>
        </div>

        <ul className="space-y-4 text-gray-700 text-sm">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            6×6 ft Minimum Space
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Shared Utility Infrastructure
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Operator-Managed Transactions
          </li>
        </ul>
      </motion.div>

      {/* Model 2 (Primary) */}
      <motion.div
        variants={fadeUp}
        className="bg-[#1d134c] rounded-2xl p-10 shadow-2xl text-white relative"
      >
        <div className="absolute top-6 right-6 text-yellow-400 text-xs font-bold uppercase tracking-wider">
          Recommended
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Dedicated Cabin Model
        </h3>

        <p className="text-sm text-blue-200 mb-6">
          Structured setup for high-visibility commercial zones.
        </p>

        <div className="mb-8">
          <p className="text-sm text-blue-200 mb-1">
            Estimated Infrastructure Range
          </p>
          <span className="text-3xl font-extrabold">
            ₹2.5L – ₹3.5L
          </span>
        </div>

        <ul className="space-y-4 text-sm text-blue-100">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-yellow-300" />
            Independent ATM Cabin Structure
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-yellow-300" />
            VSAT + CCTV Installation
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-yellow-300" />
            Enhanced Branding & Visibility
          </li>
        </ul>
      </motion.div>

      {/* Model 3 */}
      <motion.div
        variants={fadeUp}
        className="bg-white rounded-2xl p-10 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300"
      >
        <h3 className="text-2xl font-bold text-[#1d134c] mb-4">
          Standalone Deployment
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          Designed for high-footfall and premium corridors.
        </p>

        <div className="mb-8">
          <p className="text-sm text-gray-500 mb-1">
            Estimated Infrastructure Range
          </p>
          <span className="text-3xl font-extrabold text-[#1d134c]">
            ₹4.0L+
          </span>
        </div>

        <ul className="space-y-4 text-gray-700 text-sm">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Multi-ATM Capability
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Dedicated Lobby Design
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            Higher Transaction Potential
          </li>
        </ul>
      </motion.div>

    </div>

    {/* Compliance Note */}
    <div className="mt-16 text-center max-w-3xl mx-auto">
      <p className="text-sm text-gray-500 leading-relaxed">
        Final investment depends on site inspection, operator approval,
        and infrastructure requirements. Security deposits and operational
        policies are governed by the respective White Label ATM operator.
      </p>
    </div>

  </div>
</section>
      {/* ========================================= */}
      {/* 4. ELIGIBILITY SECTION                    */}
      {/* ========================================= */}
<section className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-6">

    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-6">
        Eligibility Criteria for ATM Installation
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Applicants must meet the following baseline requirements before
        site inspection and operator approval.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {/* Legal Eligibility */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-[#1d134c] mb-4">
          Legal Eligibility
        </h3>
        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Minimum 18 years of age
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Valid PAN & Aadhaar documentation
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            No unresolved financial or fraud-related cases
          </li>
        </ul>
      </div>

      {/* Property Requirement */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-[#1d134c] mb-4">
          Location & Property
        </h3>
        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Ownership proof or valid rental agreement
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            NOC from landlord (if rented)
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Location must meet minimum space & visibility standards
          </li>
        </ul>
      </div>

      {/* Financial Capacity */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-[#1d134c] mb-4">
          Investment Readiness
        </h3>
        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Ability to arrange required infrastructure investment
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Understanding of transaction-based revenue model
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Acceptance of operator approval process
          </li>
        </ul>
      </div>

      {/* Compliance */}
      <div className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
        <h3 className="text-xl font-bold text-[#1d134c] mb-4">
          Regulatory Compliance
        </h3>
        <ul className="space-y-4 text-gray-700 text-sm leading-relaxed">
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Agreement executed under WLA operator framework
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Site inspection approval mandatory
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
            Compliance with RBI and operator installation guidelines
          </li>
        </ul>
      </div>

    </div>

    <div className="mt-14 text-center max-w-3xl mx-auto">
      <p className="text-sm text-gray-500 leading-relaxed">
        Meeting eligibility criteria does not guarantee installation.
        Final approval depends on site evaluation, operator policies,
        and regional deployment requirements.
      </p>
    </div>

  </div>
</section>
      <Care360Section />


      {/* ========================================= */}
      {/* 5. MISCONCEPTIONS SECTION                 */}
      {/* ========================================= */}
<section className="py-24 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">

    <div className="text-center mb-16 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-6">
        Common Questions Clarified
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Before investing in an ATM franchise, it is important to understand
        how the model actually works. Here are clear explanations.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">

      {[
        {
          myth: "Do franchise owners handle cash?",
          reality:
            "No. Cash loading, reconciliation, and settlement are handled by authorized Cash Management Service (CMS) providers under operator supervision.",
        },
        {
          myth: "Is income guaranteed?",
          reality:
            "No income is guaranteed. Earnings depend entirely on transaction volume at your selected location.",
        },
        {
          myth: "Is the ATM owned by the franchisee?",
          reality:
            "The ATM hardware and switching infrastructure remain under the authorized operator. The franchise partner provides space and receives transaction-based commission.",
        },
        {
          myth: "Is this legally compliant?",
          reality:
            "All installations are executed under RBI-authorized White Label ATM operators with formal agreements and documented approvals.",
        },
        {
          myth: "Does higher investment mean higher profit?",
          reality:
            "Not necessarily. Profit is linked to footfall and withdrawal volume, not the size of the cabin or branding level.",
        },
        {
          myth: "What if transactions drop?",
          reality:
            "Transaction performance depends on location viability. Site selection and visibility are critical for sustainable volume.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all"
        >
          <h3 className="text-lg font-bold text-[#1d134c] mb-4">
            {item.myth}
          </h3>

          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 shrink-0" />
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.reality}
            </p>
          </div>
        </div>
      ))}

    </div>

  </div>
</section>

      {/* ========================================= */}
      {/* 6. PREMIUM CTA SECTION                    */}
      {/* ========================================= */}
<section className="py-24 text-center relative overflow-hidden bg-white">

  <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none"></div>

  <div className="relative max-w-3xl mx-auto px-6 z-10">

    <h3 className="text-3xl md:text-5xl font-extrabold text-[#1d134c] mb-6">
      Start Your ATM Franchise Application
    </h3>

    <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
      Submit your details for site evaluation and documentation review.
      Our team will guide you through the structured onboarding process
      under RBI-authorized operator frameworks.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-4">

      <Link
        href="/apply-now"
        className="inline-flex items-center justify-center gap-2 bg-[#1d134c] text-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-[#3b2aa3] hover:scale-105 transition-all duration-200"
      >
        Apply Now
        <ArrowRight className="w-5 h-5" />
      </Link>

      <Link
        href="/apply-now"
        className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl border-2 border-gray-200 text-[#1d134c] font-bold text-lg hover:border-[#1d134c] transition-all duration-200"
      >
        Speak With Support
      </Link>

    </div>

    <p className="text-xs text-gray-500 mt-6">
      Approval is subject to documentation accuracy and site suitability.
    </p>

  </div>
</section>

    </div>
  );
}