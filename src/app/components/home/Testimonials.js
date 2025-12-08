"use client";

import { motion } from "framer-motion";
import { Star, Quote, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

// Optimization: Move variants outside to prevent re-creation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

// Data for Testimonials
const reviews = [
  {
    id: 1,
    name: "Priya",
    role: "Retail Shop Owner – Tamil Nadu",
    text: "EPS ATM has transformed my shop revenue. The installation was quick and the monthly income is stable. EPS support team handles everything smoothly.",
    theme: "from-[#1d134c] to-[#3f2aa3]", // Brand Blue/Purple
    shadow: "shadow-indigo-200",
  },
  {
    id: 2,
    name: "Saravanan",
    role: "Property Owner – Coimbatore",
    text: "My ATM began earning transactions in the first week. EPS has the best support team—professional, fast and honest. Highly recommended.",
    theme: "from-[#059669] to-[#10b981]", // Emerald Green (Your Preference)
    shadow: "shadow-emerald-200",
  },
  {
    id: 3,
    name: "Sobana Chitra",
    role: "Entrepreneur – Madurai",
    text: "EPS handled everything—approval, installation, maintenance. Very transparent & trustworthy. Best passive income source for beginners.",
    theme: "from-[#4f46e5] to-[#7c3aed]", // Deep Violet
    shadow: "shadow-violet-200",
  },
];

export default function Testimonials() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <section className="py-20 bg-white min-h-[500px]" />;
  }

  return (
    <section className="py-20 lg:py-24 bg-white relative overflow-hidden">
       {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 bg-blue-50 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 bg-emerald-50 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-6 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1d134c]"
          variants={cardVariants}
        >
          What Our <span className="text-[#3f2aa3]">Franchise Partners</span> Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className={`relative p-8 rounded-2xl shadow-xl bg-gradient-to-br ${review.theme} text-white flex flex-col h-full`}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              {/* Decorative Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10 rotate-180" />

              {/* Header: Verified Badge */}
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
                    <span className="text-xl font-bold text-white px-1">G</span>
                </div>
                <div>
                    <div className="flex gap-0.5 mb-0.5">
                        {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                        ))}
                    </div>
                    <p className="text-xs font-medium text-white/80 flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> Verified Partner
                    </p>
                </div>
              </div>

              {/* Content */}
              <p className="leading-relaxed mb-6 text-lg font-medium text-white/95 flex-grow italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-auto pt-6 border-t border-white/20">
                <h4 className="font-bold text-lg tracking-wide">{review.name}</h4>
                <p className="text-sm text-white/80 font-medium">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}