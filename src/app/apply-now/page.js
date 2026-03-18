import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone, Clock, CheckCircle } from "lucide-react";

// 1. SEO METADATA - Targeted at conversion keywords
export const metadata = {
  title: "Apply Now | EPS ATM Franchise Application Form 2025",
  description: "Start your ATM business today. Fill out the official EPS ATM Franchise application form. Low security deposit, high commissions, and RBI-authorized setup.",
  keywords: "ATM franchise application, start ATM business India, EPS franchise form, Hitachi money spot application alternative",
};

export default function ApplyNowPage() {
  // 2. JSON-LD for Lead Generation & Contact Point
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "FinancialService",
      "name": "EPS ATM Franchise Support",
      "description": "Franchise application portal for EPS White Label ATMs.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-88833-35553",
        "contactType": "Sales and Support",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-[520px] bg-[#1d134c] rounded-b-[60px] z-0"></div>
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Header Section */}
          <div className="text-center text-white mb-12">
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Start Your <span className="text-yellow-400">ATM Journey</span>
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
              Join 150+ successful entrepreneurs. Complete the form below and 
              our regional manager will reach out with a customized ROI plan.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden grid lg:grid-cols-3 border border-gray-100">
            
            {/* LEFT SIDE — Trust & Contact */}
            <div className="bg-[#1d134c] text-white p-10 md:p-14 flex flex-col">
              <div className="mb-10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-yellow-400/20 transition-colors">
                      <Phone className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Direct Line</p>
                      <a href="tel:+918883335553" className="text-xl font-semibold hover:text-yellow-400 transition-colors">
                        +91 88833 35553
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-yellow-400/20 transition-colors">
                      <Mail className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Inquiry Email</p>
                      <a href="mailto:maktin.help@gmail.com" className="text-lg font-semibold hover:text-yellow-400 break-all transition-colors">
                           maktin.help@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-white/10 rounded-2xl group-hover:bg-yellow-400/20 transition-colors">
                      <Clock className="w-6 h-6 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-blue-300 font-bold mb-1">Support Hours</p>
                      <p className="text-lg font-semibold">24/7 Monitoring</p>
                      <p className="text-blue-200 text-sm">Offices: Mon-Sat (9-7)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Signal Box (Critical for conversion) */}
              <div className="mt-auto p-6 bg-white/5 rounded-3xl border border-white/10">
                <p className="text-sm font-bold text-yellow-400 uppercase mb-3 italic">Why Choose EPS?</p>
                <ul className="space-y-3 text-sm text-blue-50">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" /> Lowest Security Deposit
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" /> Fast RBI-Approved Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400" /> Dedicated Relationship Manager
                  </li>
                </ul>
              </div>
            </div>

            {/* RIGHT SIDE — The Form */}
            <div className="lg:col-span-2 p-8 md:p-16 bg-white">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900">Application Details</h3>
                <p className="text-gray-500 mt-2">Please provide your location details for feasibility check.</p>
              </div>
              <ContactForm />
            </div>

          </div>
        </div>
      </div>
    </>
  );
}