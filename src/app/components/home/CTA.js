"use client";

import Link from "next/link";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative py-20 lg:py-28 bg-[#1d134c] overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3f2aa3] opacity-30 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <h2
          id="cta-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
        >
          Start Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            ATM Franchise in India
          </span>{" "}
          with EPS
        </h2>

        <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
          Invest ₹3–5 Lakhs and launch a structured white label ATM business.
          EPS supports you with location evaluation, approval coordination,
          installation, and continuous technical monitoring.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">

          <Link
            href="/apply-now"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Apply for ATM Franchise
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5" />
            Speak to Our Support Team
          </Link>
        </div>

        <p className="mt-8 text-sm text-blue-200/70">
          Transparent investment model • No hidden charges • Dedicated onboarding assistance
        </p>
      </div>
    </section>
  );
}
