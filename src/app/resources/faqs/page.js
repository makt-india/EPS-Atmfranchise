"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search, HelpCircle, MessageCircle } from "lucide-react";
import Link from "next/link";
import { faqs } from "./data";

export default function FAQPage() {
  const [openIds, setOpenIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  /* =========================
     AUTO OPEN HIGH INTENT FAQs
  ========================== */
  useEffect(() => {
    const highIntent = faqs.slice(0, 2).map((f) => f.id);
    setOpenIds(highIntent);
  }, []);

  /* =========================
     DEBOUNCE SEARCH
  ========================== */
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm.toLowerCase());
    }, 300);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  /* =========================
     FILTER LOGIC
  ========================== */
  const filteredFaqs = useMemo(() => {
    return faqs.filter(
      (faq) =>
        faq.question.toLowerCase().includes(debouncedTerm) ||
        faq.answer.toLowerCase().includes(debouncedTerm)
    );
  }, [debouncedTerm]);

  /* =========================
     TOGGLE MULTIPLE OPEN
  ========================== */
  const toggleFAQ = (id) => {
    setOpenIds((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  /* =========================
     FAQ STRUCTURED DATA
  ========================== */
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">

      {/* JSON-LD STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO SECTION */}
      <section className="bg-[#1d134c] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4 text-yellow-300" />
            Support Center
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            ATM Franchise <span className="text-yellow-400">FAQs</span>
          </h1>

          <p className="text-lg text-blue-100 max-w-2xl mx-auto mb-10">
            Clear answers about investment, profit, risks, RBI rules, and real earning potential.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search cost, profit, location..."
              className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 bg-white shadow-xl focus:ring-4 focus:ring-blue-500/30 focus:outline-none"
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search FAQs"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="max-w-3xl mx-auto px-6 -mt-10 relative z-20">
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);

              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? "border-blue-500 shadow-lg ring-1 ring-blue-500/20"
                      : "border-gray-200 shadow-sm hover:border-blue-300"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-${faq.id}`}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className="text-lg font-bold text-gray-800">
                      {faq.question}
                    </span>

                    <div className={`p-2 rounded-full ${
                      isOpen ? "bg-blue-100 text-blue-600" : "bg-gray-100 text-gray-500"
                    }`}>
                      {isOpen ? (
                        <Minus className="w-5 h-5" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        id={`faq-${faq.id}`}
                        role="region"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })
          ) : (
            <div className="text-center py-10">
              <p className="text-gray-500 text-lg">
                No matching questions found.
              </p>
            </div>
          )}
        </div>

        {/* HIGH-CONVERSION CTA */}
        <div className="mt-20 bg-[#1d134c] text-white rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Start Your ATM Franchise?
          </h3>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">
            Check eligibility, investment breakdown, and expected monthly profit before applying.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold hover:bg-yellow-300 transition shadow-lg"
            >
              Apply Now
            </Link>

            <Link
              href="/apply-now"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 rounded-lg font-semibold hover:bg-white/10 transition"
            >
              <MessageCircle className="w-5 h-5" />
              Talk to Expert
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
