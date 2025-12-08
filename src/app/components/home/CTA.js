"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";

// Optimization: Move variants outside component
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28 bg-[#1d134c] overflow-hidden">
      {/* Background Decor: Subtle gradient glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3f2aa3] opacity-30 rounded-full blur-[100px] pointer-events-none"></div>
      
      {/* Optional: Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-5 pointer-events-none"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg"
          variants={itemVariants}
        >
          Ready to Start Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
            EPS ATM Franchise?
          </span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Take the first step towards building a stable, long-term income
          source. Our team will guide you with{" "}
          <span className="text-white font-semibold">location approval</span>,{" "}
          <span className="text-white font-semibold">setup process</span>, and{" "}
          <span className="text-white font-semibold">fast installation</span>.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          variants={itemVariants}
        >
          <Link
            href="/apply-now"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-[#1d134c] px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-2xl hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Apply Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="group w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg border-2 border-white/20 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            <PhoneCall className="w-5 h-5" />
            Contact Support
          </Link>
        </motion.div>
        
        <motion.p 
            className="mt-8 text-sm text-blue-200/60"
            variants={itemVariants}
        >
            No hidden charges • 100% Transparent Process
        </motion.p>
      </motion.div>
    </section>
  );
}