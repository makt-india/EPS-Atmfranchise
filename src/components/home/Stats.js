"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import { Landmark, Map, MapPin, Building2 } from "lucide-react";

// Helper Component: Animated Counter
function Counter({ value, suffix = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const springValue = useSpring(0, { bounce: 0, duration: 2000 });
  const [displayValue, setDisplayValue] = useState(0);

  // Parse numeric part from string (e.g. "5000+" -> 5000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;

  useEffect(() => {
    if (isInView) {
      springValue.set(numericValue);
    }
  }, [isInView, springValue, numericValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {displayValue}
      {value.includes("+") ? "+" : ""}
    </span>
  );
}

// Optimization: Move variants outside
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

export default function Stats() {
  const statsData = [
    {
      id: 1,
      value: "5000+",
      label: "White Label ATMs",
      icon: Landmark,
    },
    {
      id: 2,
      value: "3500+",
      label: "Towns & Villages Covered",
      icon: Map,
    },
    {
      id: 3,
      value: "27",
      label: "States in India",
      icon: MapPin,
    },
    {
      id: 4,
      value: "10000+",
      label: "Brown Label ATMs",
      icon: Building2,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* TITLE */}
        <motion.div className="text-center mb-12" variants={cardVariants}>
          <span className="inline-block bg-[#1d134c] text-white px-6 py-2 rounded-full shadow-xl font-semibold tracking-wide text-sm md:text-base">
            🚀 India’s Fastest Growing ATM Network
          </span>
        </motion.div>

        {/* GRID CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {statsData.map((stat) => (
            <motion.div
              key={stat.id}
              className="group bg-white border border-gray-100 rounded-2xl shadow-sm p-8 flex flex-col items-center text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              variants={cardVariants}
            >
              <div className="mb-4 p-4 bg-indigo-50 rounded-full group-hover:bg-indigo-100 transition-colors">
                <stat.icon 
                  className="w-8 h-8 text-[#1d134c] group-hover:text-[#3f2aa3] transition-colors duration-300" 
                  strokeWidth={2}
                />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-2">
                <Counter value={stat.value} />
              </h3>
              
              <p className="text-gray-600 font-medium text-sm md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}