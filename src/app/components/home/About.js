// app/components/home/About.js
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, Network, TrendingUp, MapPin, CheckCircle2 } from "lucide-react";

// Optimization: Move variants outside the component to prevent re-creation on every render
const fadeInUp = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromLeft = {
  hidden: { x: -60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fromRight = {
  hidden: { x: 60, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function About() {
  return (
    <section 
      id="about" 
      // Changed background from gray to a fresh Indigo/Blue tint
      className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-indigo-50/40 via-white to-blue-50/40 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl -z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.div 
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100/50 rounded-full px-4 py-2 mb-4"
            variants={fadeInUp}
          >
            <Shield className="w-4 h-4 text-[#3f2aa3]" />
            <span className="text-sm font-semibold text-[#1d134c]">Trusted Infrastructure</span>
          </motion.div>

          <motion.h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-[#1d134c]"
            variants={fadeInUp}
          >
            About{" "}
            <span className="bg-gradient-to-r from-[#1d134c] via-[#3f2aa3] to-[#5b41d6] bg-clip-text text-transparent">
              EPS
            </span>{" "}
            &{" "}
            <span className="bg-gradient-to-r from-[#1d134c] via-[#3f2aa3] to-[#5b41d6] bg-clip-text text-transparent">
              BANCS
            </span>
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            EPS (Electronic Payment Services) is one of India's most reliable
            White Label ATM Operators. Its ATMs are powered by the highly secure{" "}
            <span className="font-bold text-[#1d134c]">
              BANCS Switching Network
            </span>
            , the same infrastructure trusted by major Indian banks for fast,
            stable, and secure transactions.
          </motion.p>
        </motion.div>

        {/* ROW 1 — LEFT IMAGE / RIGHT TEXT */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image */}
          <motion.div 
            variants={fromLeft}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white">
              <Image
                src="/img/home-sub1.webp"
                alt="EPS ATM Network infrastructure showing secure BANCS switching system"
                width={600}
                height={450}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={85}
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={fromRight}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-lg px-3 py-1.5">
              <Network className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-semibold text-blue-900">Infrastructure</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d134c]">
              Reliable & Secure Infrastructure
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              EPS operates on the advanced{" "}
              <span className="font-bold text-[#3f2aa3]">BANCS switching system</span>,
              providing{" "}
              <span className="font-semibold text-gray-900">
                high uptime, faster transaction speeds
              </span>
              , and stable connectivity across India. This robust infrastructure ensures every
              transaction remains{" "}
              <span className="font-bold text-[#3f2aa3]">
                safe, encrypted, and banking-grade secure
              </span>
              .
            </p>

            <motion.ul 
              className="space-y-4 pt-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { icon: TrendingUp, text: "98%+ Uptime Guarantee" },
                { icon: Shield, text: "Bank-Grade Encryption" },
                { icon: Network, text: "Optimized Routing Technology" },
                { icon: MapPin, text: "Stable Rural Performance" },
                { icon: CheckCircle2, text: "Centralized 24/7 Monitoring" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 group"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                    <item.icon className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-base sm:text-lg font-medium group-hover:text-blue-700 transition-colors">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* ROW 2 — RIGHT IMAGE / LEFT TEXT */}
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Image - Order 2 on desktop */}
          <motion.div 
            variants={fromRight}
            className="relative group lg:order-2"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl border border-white/50 bg-white">
              <Image
                src="/img/home-sub2.webp"
                alt="Map showing EPS ATM expansion across 27+ states and 3500+ towns in India"
                width={600}
                height={450}
                className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                quality={85}
              />
            </div>
          </motion.div>

          {/* Content - Order 1 on desktop */}
          <motion.div 
            variants={fromLeft}
            className="space-y-6 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-lg px-3 py-1.5">
              <MapPin className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-purple-900">Network Coverage</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1d134c]">
              Nationwide ATM Network
            </h3>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              EPS operates a rapidly expanding ATM network across India, covering
              major cities, busy commercial zones, highways, transport hubs, and
              deep rural regions where bank ATMs are limited. This expansion not
              only increases ATM availability but also strengthens{" "}
              <span className="font-bold text-[#3f2aa3]">financial accessibility</span> for
              millions of users.
            </p>

            <motion.ul 
              className="space-y-4 pt-2"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "10,000+", text: "ATMs Operating Nationwide" },
                { number: "27+", text: "States & 3,500+ Towns Covered" },
                { number: "Strong", text: "Rural & Semi-Urban Coverage" },
                { number: "Consistent", text: "High-Volume Transactions" }
              ].map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3 group"
                  variants={fadeInUp}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center mt-0.5 group-hover:scale-110 transition-transform shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-slate-700 text-base sm:text-lg">
                    <span className="font-bold text-[#1d134c]">{item.number}</span>{" "}
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}