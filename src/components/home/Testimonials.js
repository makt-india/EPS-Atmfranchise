"use client";

import { Star, Quote, CheckCircle } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Priya",
    role: "Retail Shop Owner – Tamil Nadu",
    text: "Installing an EPS ATM franchise increased daily customer visits and added a stable monthly income stream. The onboarding process was structured and professionally managed.",
    theme: "from-[#1d134c] to-[#3f2aa3]",
  },
  {
    id: 2,
    name: "Saravanan",
    role: "Property Owner – Coimbatore",
    text: "The ATM franchise setup was completed quickly. Transaction volumes started within the first week. Technical support and monitoring are handled efficiently.",
    theme: "from-[#059669] to-[#10b981]",
  },
  {
    id: 3,
    name: "Sobana Chitra",
    role: "Entrepreneur – Madurai",
    text: "EPS managed installation, compliance coordination, and maintenance. It is a structured white label ATM business model suitable for long-term passive income.",
    theme: "from-[#4f46e5] to-[#7c3aed]",
  },
];

export default function Testimonials() {
  return (
    <section
      className="py-20 lg:py-24 bg-white relative overflow-hidden"
      aria-labelledby="testimonials-heading"
    >
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute right-0 top-0 bg-blue-50 w-96 h-96 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute left-0 bottom-0 bg-emerald-50 w-96 h-96 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* SEO Optimized Heading */}
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-[#1d134c]"
        >
          Real Reviews from{" "}
          <span className="text-[#3f2aa3]">
            ATM Franchise Partners in India
          </span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review) => (
            <div
              key={review.id}
              className={`relative p-8 rounded-2xl shadow-xl bg-gradient-to-br ${review.theme} text-white flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/10 rotate-180" />

              {/* Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-lg border border-white/20">
                  <span className="text-sm font-bold text-white px-1">
                    Verified
                  </span>
                </div>

                <div>
                  <div className="flex gap-0.5 mb-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-300 fill-yellow-300"
                      />
                    ))}
                  </div>
                  <p className="text-xs font-medium text-white/80 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3" />
                    Franchise Partner
                  </p>
                </div>
              </div>

              {/* Content */}
              <p className="leading-relaxed mb-6 text-lg font-medium text-white/95 flex-grow italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="mt-auto pt-6 border-t border-white/20">
                <h4 className="font-bold text-lg tracking-wide">
                  {review.name}
                </h4>
                <p className="text-sm text-white/80 font-medium">
                  {review.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
