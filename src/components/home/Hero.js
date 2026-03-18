"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  return (
    <section
  className="relative w-full min-h-[80vh] lg:min-h-[80vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero1.webp"
          alt="ATM Franchise in India - EPS White Label ATM Business Opportunity"
          fill
          className="object-cover object-[center_32%]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a1a] via-[#0a0a1a]/65 to-transparent"></div>
      </div>

      {/* Background blobs (kept visual, no heavy animation delays) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 sm:py-16 lg:py-20">
        <div className="text-left max-w-3xl">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6">
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">
              150+ Active ATM Franchise Partners Across India
            </span>
          </div>

          {/* Strong SEO H1 */}
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] drop-shadow-2xl"
          >
            ATM Franchise in India – Start Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EPS White Label ATM Business
            </span>
          </h1>

          {/* Strong Conversion Subheading */}
          <p className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl">
            Invest ₹3–5 Lakhs and generate recurring monthly income from ATM transactions. 
            EPS manages installation, compliance coordination, technical monitoring, and backend operations.
          </p>


          {/* Benefit Highlights */}
          <div className="mt-6 flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">
                ₹20K–₹50K Monthly Income Potential
              </span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">
                Complete Operational Support
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <Link
              href="/apply-now"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-100 text-[#1d134c] font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">
                Apply for ATM Franchise
              </span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/cost-requirements"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View ATM Franchise Cost
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8">
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">150+</div>
              <div className="text-sm text-gray-300 mt-1">Active Partners</div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">₹3–5L</div>
              <div className="text-sm text-gray-300 mt-1">Investment Range</div>
            </div>

            <div className="hidden sm:block w-px h-12 bg-white/20"></div>

            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300 mt-1">Technical Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
