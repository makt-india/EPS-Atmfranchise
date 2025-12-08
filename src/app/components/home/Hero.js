// app/components/home/Hero.js
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Shield } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      className="relative w-full min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden"
      aria-labelledby="hero-heading"
    >
      
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/img/hero1.webp"
          alt="Professional businessman presenting EPS ATM franchise opportunity"
          fill
          className="object-cover object-[center_32%]"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Enhanced Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1d134c]/90 via-[#1d134c]/60 to-[#1d134c]/20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </div>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full py-12 sm:py-16 lg:py-20">
        <motion.div
          className="text-left max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Trust Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6"
            variants={badgeVariants}
          >
            <Shield className="w-4 h-4 text-green-400" />
            <span className="text-sm font-medium text-white">Trusted by 150+ Partners Across India</span>
          </motion.div>

          {/* Main Heading - SEO Optimized */}
          <motion.h1
            id="hero-heading"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] drop-shadow-2xl"
            variants={itemVariants}
          >
            Become an Official{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              EPS ATM Franchise
            </span>{" "}
            Partner
          </motion.h1>

          {/* Subheading */}
        
          {/* Key Benefits */}
          <motion.div 
            className="mt-6 flex flex-wrap gap-4"
            variants={itemVariants}
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">₹20K-₹50K Monthly</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
              <Shield className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">100% Support</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-6 text-gray-200 text-base sm:text-lg leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            EPS handles cash loading, monitoring, maintenance, and support — you earn{" "}
            <span className="font-semibold text-white">effortlessly every month</span>.
          </motion.p>

          <motion.p
            className="mt-3 text-gray-300 text-sm sm:text-base leading-relaxed"
            variants={itemVariants}
          >
            💼 Ideal for shop owners, property owners, and entrepreneurs looking for a{" "}
            <span className="font-medium text-white">long-term passive income opportunity</span> in India.
          </motion.p>

          {/* CTA Buttons - Enhanced */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            variants={itemVariants}
          >
            <Link
              href="/apply-now"
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-gray-100 text-[#1d134c] font-bold px-8 py-4 rounded-xl shadow-2xl hover:shadow-white/20 hover:scale-105 active:scale-95 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Apply Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            <Link
              href="/cost-requirements"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/40 px-8 py-4 rounded-xl font-bold hover:bg-white/20 hover:border-white hover:scale-105 active:scale-95 transition-all duration-300"
            >
              View Cost & Requirements
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-6 sm:gap-8"
            variants={itemVariants}
          >
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">150+</div>
              <div className="text-sm text-gray-300 mt-1">Active Partners</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">₹3-5L</div>
              <div className="text-sm text-gray-300 mt-1">Starting Investment</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-gray-300 mt-1">Support Available</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden lg:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm font-medium">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}