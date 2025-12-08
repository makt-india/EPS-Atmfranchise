"use client";

import { motion } from "framer-motion";
import { Banknote, Wallet, Headset, ArrowRight } from "lucide-react";

// Optimization: Move variants outside to prevent re-creation on render
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Benefits() {
  // Data array for cleaner code and easier management
  const benefitsData = [
    {
      id: 1,
      title: "High Monthly Income",
      icon: Banknote,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-500",
      shadow: "hover:shadow-blue-100",
      content: (
        <>
          Earn through <span className="font-semibold text-gray-900">cash withdrawals</span>,{" "}
          <span className="font-semibold text-gray-900">balance enquiries</span>, and{" "}
          <span className="font-semibold text-gray-900">transaction surcharges</span>.
          Locations with good footfall can generate{" "}
          <span className="font-bold text-[#1d134c] bg-blue-50 px-1 rounded">
            ₹25,000 – ₹60,000+ per month
          </span>.
        </>
      ),
    },
    {
      id: 2,
      title: "Low Investment & Returns",
      icon: Wallet,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "hover:border-purple-500",
      shadow: "hover:shadow-purple-100",
      content: (
        <>
          EPS offers one of the most <span className="font-semibold text-gray-900">affordable ATM franchise</span>{" "}
          models in India. With a refundable security deposit and no cash-handling responsibility, the business is{" "}
          <span className="font-bold text-[#1d134c] bg-purple-50 px-1 rounded">
            safe, secure, and hassle-free
          </span>.
        </>
      ),
    },
    {
      id: 3,
      title: "Full Nationwide Support",
      icon: Headset,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "hover:border-indigo-500",
      shadow: "hover:shadow-indigo-100",
      content: (
        <>
          Enjoy <span className="font-semibold text-gray-900">24/7 ATM monitoring</span>,{" "}
          <span className="font-semibold text-gray-900">cash management</span>, technical
          maintenance, and prompt service. You earn passively while EPS handles the{" "}
          <span className="font-bold text-[#1d134c] bg-indigo-50 px-1 rounded">
            entire operation
          </span>.
        </>
      ),
    },
  ];

  return (
    <section 
      id="benefits" 
      className="py-20 lg:py-24 bg-white relative overflow-hidden"
    >
      {/* Subtle Background Grid Pattern for texture */}
      <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.03]"></div>
      
      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="text-center mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            variants={cardVariants}
          >
            Why Choose <span className="text-[#3f2aa3]">EPS ATM Franchise</span>?
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            The <span className="font-semibold text-[#1d134c]">EPS White Label ATM Franchise</span> model 
            is one of India’s most trusted opportunities. With low investment and complete backend support, 
            you can build a stable, long-term income stream effortlessly.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {benefitsData.map((benefit) => (
            <motion.div
              key={benefit.id}
              className={`p-8 border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 group bg-white ${benefit.border} hover:shadow-xl ${benefit.shadow} hover:-translate-y-1`}
              variants={cardVariants}
            >
              {/* Icon Circle */}
              <div className={`w-14 h-14 rounded-xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <benefit.icon className={`w-7 h-7 ${benefit.color}`} strokeWidth={2} />
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#1d134c] group-hover:text-[#3f2aa3] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base lg:text-[17px]">
                {benefit.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}