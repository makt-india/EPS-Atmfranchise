"use client";

import { Banknote, Wallet, Headset } from "lucide-react";

// Removed framer-motion to prevent delayed rendering and improve performance

export default function Benefits() {
  const benefitsData = [
    {
      id: 1,
      title: "High Monthly Income from ATM Transactions",
      icon: Banknote,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "hover:border-blue-500",
      shadow: "hover:shadow-blue-100",
      content: (
        <>
          Earn recurring commission from{" "}
          <span className="font-semibold text-gray-900">
            cash withdrawals, balance enquiries, and mini statements
          </span>. 
          High-footfall locations in India can generate{" "}
          <span className="font-bold text-[#1d134c] bg-blue-50 px-1 rounded">
            ₹25,000 – ₹60,000+ per month
          </span>{" "}
          depending on transaction volume.
        </>
      ),
    },
    {
      id: 2,
      title: "Low Investment ATM Franchise Model",
      icon: Wallet,
      color: "text-purple-600",
      bg: "bg-purple-50",
      border: "hover:border-purple-500",
      shadow: "hover:shadow-purple-100",
      content: (
        <>
          Start your{" "}
          <span className="font-semibold text-gray-900">
            ATM franchise in India
          </span>{" "}
          with ₹3–5 Lakhs investment. The refundable security deposit model 
          reduces risk, and you are not responsible for cash handling.
          It’s a structured and compliance-aligned business setup.
        </>
      ),
    },
    {
      id: 3,
      title: "Complete Installation & 24/7 Technical Support",
      icon: Headset,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      border: "hover:border-indigo-500",
      shadow: "hover:shadow-indigo-100",
      content: (
        <>
          EPS coordinates{" "}
          <span className="font-semibold text-gray-900">
            ATM installation, site inspection, monitoring, and maintenance
          </span>. 
          Backend operations and service support are managed centrally, 
          allowing you to focus on location performance.
        </>
      ),
    },
  ];

  return (
    <section
      id="benefits"
      className="py-20 lg:py-24 bg-white relative overflow-hidden"
      aria-labelledby="benefits-heading"
    >
      {/* Background Grid Texture */}
      <div className="absolute inset-0 bg-[url('/img/grid-pattern.svg')] opacity-[0.03]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
          >
            Why Choose EPS for Your{" "}
            <span className="text-[#3f2aa3]">
              ATM Franchise in India?
            </span>
          </h2>

          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            The EPS White Label ATM Franchise model is designed for
            entrepreneurs seeking{" "}
            <span className="font-semibold text-[#1d134c]">
              stable monthly income, low investment risk, and structured operational support
            </span>. 
            It combines recurring transaction-based earnings with centralized technical management.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {benefitsData.map((benefit) => (
            <div
              key={benefit.id}
              className={`p-8 border border-gray-100 rounded-2xl shadow-sm transition-all duration-300 group bg-white ${benefit.border} hover:shadow-xl ${benefit.shadow} hover:-translate-y-1`}
            >
              <div
                className={`w-14 h-14 rounded-xl ${benefit.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <benefit.icon
                  className={`w-7 h-7 ${benefit.color}`}
                  strokeWidth={2}
                />
              </div>

              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-[#1d134c] group-hover:text-[#3f2aa3] transition-colors">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-base lg:text-[17px]">
                {benefit.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
