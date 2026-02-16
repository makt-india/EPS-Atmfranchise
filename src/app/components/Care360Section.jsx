import { CheckCircle2, ShieldCheck, Wrench, FileText } from "lucide-react";

export default function Care360Section() {
  const features = [
    "GMB & Local Visibility Assistance",
    "Settlement Delay Follow-up Coordination",
    "Insurance Claim Documentation Support",
    "Technical Escalation Assistance",
    "Dispute Filing & Tracking Support",
    "Asset & Branding Coordination",
    "194N TDS Documentation Guidance",
    "Settlement Account Setup Assistance",
  ];

  return (
    <section className="py-24 bg-white text-[#1d134c]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-blue-600 mb-4">
            Optional Operational Support
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold mb-6">
            ATM Care360 Assistance Program
          </h3>
          <p className="text-gray-600 leading-relaxed text-lg">
            A non-mandatory support program designed to help franchise partners
            with post-installation coordination, documentation tracking, and
            operational follow-ups.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 items-stretch">

          {/* Pricing Card */}
          <div className="lg:col-span-2 border border-gray-100 rounded-3xl p-10 shadow-lg bg-gray-50">

            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-8 h-8 text-blue-600" />
              <h4 className="text-xl font-bold">
                Care360 Support Plan
              </h4>
            </div>

            <div className="mb-6">
              <span className="text-4xl font-extrabold">
                ₹30,000
              </span>
              <span className="text-gray-500 text-lg ml-2">
                one-time service fee
              </span>
            </div>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              This is an optional facilitation service. Installation and operator
              agreements are not dependent on enrollment in this program.
            </p>

            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Not mandatory for franchise approval
              </li>
              <li className="flex gap-3">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                Designed for operational assistance only
              </li>
            </ul>

            <button className="mt-8 w-full py-4 rounded-xl bg-[#1d134c] text-white font-bold hover:bg-[#3f2aa3] transition-all">
              Request Care360 Details
            </button>
          </div>

          {/* Features */}
          <div className="lg:col-span-3 border border-gray-100 rounded-3xl p-10">

            <div className="flex items-center gap-3 mb-8">
              <Wrench className="w-6 h-6 text-blue-600" />
              <h4 className="text-lg font-bold">
                Services Covered Under Care360
              </h4>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5 mt-0.5 shrink-0" />
                  <span className="text-sm text-gray-700 leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500 leading-relaxed">
              Care360 does not replace official operator technical support,
              regulatory compliance obligations, or banking agreements.
              It is a coordination assistance service only.
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
