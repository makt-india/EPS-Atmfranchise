"use client";

import Image from "next/image";
import { Shield, Network, TrendingUp, MapPin, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/40 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">

          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 rounded-full px-4 py-2 mb-4">
            <Shield className="w-4 h-4 text-[#3f2aa3]" />
            <span className="text-sm font-semibold text-[#1d134c]">
              Secure ATM Franchise Infrastructure
            </span>
          </div>

          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#1d134c]"
          >
            About EPS White Label{" "}
            <span className="bg-gradient-to-r from-[#1d134c] via-[#3f2aa3] to-[#5b41d6] bg-clip-text text-transparent">
              ATM Franchise in India
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            EPS (Electronic Payment Services) operates a nationwide White Label ATM
            network powered by the secure{" "}
            <span className="font-bold text-[#1d134c]">
              BANCS Switching Platform
            </span>. 
            This banking-grade infrastructure enables fast, stable, and encrypted
            ATM transactions across India — supporting reliable monthly income
            for franchise partners.
          </p>
        </div>

        {/* ROW 1 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">

          {/* IMAGE */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white">
              <Image
                src="/img/home-sub1.webp"
                alt="Secure ATM franchise infrastructure in India powered by BANCS switching network"
                width={600}
                height={450}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
              <Network className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">
                Infrastructure & Security
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d134c]">
              Banking-Grade Secure ATM Network
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              The EPS ATM franchise model operates on high-availability
              switching systems designed for consistent uptime and secure
              transaction processing. This ensures that franchise owners
              benefit from stable transaction volumes and minimized downtime.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "98%+ Network Uptime",
                "Encrypted Transaction Processing",
                "Optimized Transaction Routing",
                "Reliable Performance in Rural & Urban Areas",
                "Centralized 24/7 Monitoring Support"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-base sm:text-lg font-medium">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative group lg:order-2">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white">
              <Image
                src="/img/home-sub2.webp"
                alt="Nationwide ATM franchise network coverage across 27 states and 3500+ towns in India"
                width={600}
                height={450}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-lg px-3 py-1.5">
              <MapPin className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">
                Nationwide Coverage
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d134c]">
              Expanding ATM Franchise Network Across India
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              EPS operates thousands of ATMs across 27+ states and 3,500+
              towns, including metro cities, commercial hubs, highways,
              transport centers, and rural regions. Wide network presence
              increases transaction potential for franchise partners.
            </p>

            <ul className="space-y-4 pt-2">
              {[
                "10,000+ ATMs Operating Nationwide",
                "Coverage in 27+ Indian States",
                "Strong Rural & Semi-Urban Presence",
                "High-Volume Transaction Locations"
              ].map((text, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mt-0.5 shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-base sm:text-lg">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}
