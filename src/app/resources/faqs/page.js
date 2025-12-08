"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { faqs } from "./data";

export default function FAQPage() {
  const [openId, setOpenId] = useState(null); // Track which ID is open
  const [searchTerm, setSearchTerm] = useState("");

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      
      {/* HERO SECTION */}
      <section className="bg-[#1d134c] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4 text-yellow-300" />
              <span>Support Center</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Frequently Asked <span className="text-yellow-400">Questions</span>
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
              Have questions about the franchise? Find answers about cost, profit, cash loading, and more.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-lg mx-auto">
              <input
                type="text"
                placeholder="Search questions (e.g., 'cost', 'cash')..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white shadow-xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openId === faq.id 
                    ? "border-blue-500 shadow-lg ring-1 ring-blue-500/20" 
                    : "border-gray-200 shadow-sm hover:border-blue-300"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-lg font-bold transition-colors ${
                    openId === faq.id ? "text-[#1d134c]" : "text-gray-800"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-colors ${
                     openId === faq.id ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                  }`}>
                    {openId === faq.id ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">No matching questions found.</p>
            </div>
          )}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 text-center">
            <h3 className="text-xl font-bold text-[#1d134c] mb-4">Still have questions?</h3>
            <div className="flex justify-center gap-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-gray-300 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition">
                    <MessageCircle className="w-5 h-5" /> Contact Support
                </Link>
                <Link href="/apply-now" className="inline-flex items-center gap-2 px-6 py-3 bg-[#1d134c] rounded-lg font-semibold text-white hover:bg-[#2a1c7a] transition shadow-lg">
                    Apply Now
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}