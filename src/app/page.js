import Hero from "@/components/home/Hero";
import Benefits from "@/components/home/Benefits";
import About from "@/components/home/About";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import CTA from "@/components/home/CTA";
import Link from "next/link";

export const metadata = {
  title:
    "ATM Franchise in India 2026 – Cost, Commission, ROI & EPS Dealership Guide (Updated)",

  description:
    "Complete guide to starting an ATM Franchise in India in 2026. Investment ₹3–5 Lakhs, commission structure, monthly profit, ROI calculation and EPS ATM dealership process explained step-by-step.",

  keywords: [
    "ATM franchise in India",
    "ATM franchise cost 2026",
    "ATM franchise profit",
    "EPS ATM dealership",
    "ATM business income",
  ],

  alternates: {
    canonical: "https://epsatmfranchise.com/",
  },

  openGraph: {
    title:
      "ATM Franchise in India 2026 – Cost, Profit & EPS Dealership Guide",
    description:
      "Learn ATM franchise cost, commission per transaction, monthly income and ROI. Complete EPS ATM dealership opportunity breakdown.",
    url: "https://epsatmfranchise.com/",
    siteName: "EPS ATM Franchise",
    type: "website",
    images: [
      {
        url: "https://epsatmfranchise.com/img/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ATM Franchise in India - EPS Dealership Opportunity",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ATM Franchise in India 2026 – Investment, Profit & Commission",
    description:
      "Detailed breakdown of ATM franchise cost, monthly earnings and EPS dealership model in India.",
    images: ["https://epsatmfranchise.com/img/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://epsatmfranchise.com/#organization",
      "name": "EPS ATM Franchise",
      "url": "https://epsatmfranchise.com/",
      "logo": "https://epsatmfranchise.com/img/logo.webp",
      "sameAs": [
        "https://www.facebook.com/",
        "https://www.linkedin.com/",
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://epsatmfranchise.com/#website",
      "url": "https://epsatmfranchise.com/",
      "name": "EPS ATM Franchise",
      "publisher": {
        "@id": "https://epsatmfranchise.com/#organization",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://epsatmfranchise.com/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://epsatmfranchise.com/",
        }
      ],
    },
    {
      "@type": "Service",
      "@id": "https://epsatmfranchise.com/#service",
      "name": "ATM Franchise Dealership in India",
      "description":
        "White label ATM franchise opportunity in India with low investment and recurring commission income.",
      "provider": {
        "@id": "https://epsatmfranchise.com/#organization",
      },
      "areaServed": {
        "@type": "Country",
        "name": "India",
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "INR",
        "price": "300000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://epsatmfranchise.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the cost of ATM franchise in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "The total investment for an ATM franchise in India typically starts from ₹3 Lakhs and can go up to ₹5 Lakhs depending on location, security setup, and machine configuration.",
          },
        },
        {
          "@type": "Question",
          "name": "How much commission does an ATM franchise earn per transaction?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "ATM franchise owners earn commission per financial and non-financial transaction. Monthly income depends on footfall and transaction volume in the selected location.",
          },
        },
      ],
    },
    {
      "@type": "Product",
      "@id": "https://epsatmfranchise.com/#product",
      "name": "EPS White Label ATM Franchise in India",
      "image": "https://epsatmfranchise.com/img/og-image.jpg",
      "description": "Start an ATM franchise business in India with EPS. Low investment of ₹3-5 Lakhs, high ROI, and recurring monthly commission income.",
      "brand": {
        "@type": "Brand",
        "name": "EPS ATM Franchise"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://epsatmfranchise.com/apply-now",
        "priceCurrency": "INR",
        "price": "300000",
        "priceValidUntil": "2026-12-31",
        "availability": "https://schema.org/InStock"
      }
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <article>
        <header>
          {/* Make sure Hero contains ONE clear H1:
              ATM Franchise in India 2026 – EPS ATM Dealership */}
          <Hero />
        </header>

        <main>
          <section id="benefits">
            <Benefits />
          </section>

          <section id="about">
            <About />
          </section>

          <section id="market">
            <Stats />
          </section>

          <section id="testimonials">
            <Testimonials />
          </section>

          {/* BLUF SEO Section */}
          <section id="atm-franchise-guide" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1d134c] mb-6">
              ATM Franchise Cost & Commission Structure (2026 Overview)
            </h2>
            
            {/* BLUF Layout: Costs & Earnings upfront */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-xl">
              <h3 className="text-xl font-bold text-[#1d134c] mb-4">Bottom Line Up Front:</h3>
              <ul className="space-y-3 text-lg text-gray-800">
                <li><strong className="font-bold">Total Setup Investment:</strong> ₹3,000,000 – ₹5,000,000</li>
                <li><strong className="font-bold">Estimated Monthly Profit:</strong> ₹20,000 – ₹75,000+ (Based on 100-300 daily transactions)</li>
                <li><strong className="font-bold">Required Space:</strong> 50 to 80 sq. ft. (Shop-in-shop or dedicated cabin)</li>
                <li><strong className="font-bold">Average Break-Even Timeline:</strong> 10 to 14 Months</li>
              </ul>
            </div>

            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              The total investment for starting an ATM franchise in India includes the core machine cost, site preparation, electricity backup, 
              CCTV security system, and initial cash management setup. Your commission income relies entirely on the location's financial and non-financial transaction volume.
            </p>

            <h2 className="text-2xl font-bold text-[#1d134c] mb-4">Eligibility & Documents Required</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Applicants must possess a commercial space in a high-footfall area (like a bus depot, market, or hospital). Basic financial stability and standard KYC documentation (Aadhaar, PAN, Electricity Bill, Rental Agreement) are mandatory for immediate dealership approval.
            </p>

            <h2 className="text-2xl font-bold text-[#1d134c] mb-4">Fast Return on Investment (ROI)</h2>
            <p className="text-gray-700 mb-12 leading-relaxed">
              ROI depends strictly on daily transaction volume. High-traffic urban areas generate rapid returns, but rural and semi-urban Indian locations are increasingly proving to be highly profitable monopolies due to lower rental overhead and cash dependency.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-[#1d134c] mb-6">Latest Resources & Guides</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Link href="/resources/blog/atm-franchise-profit-india-2026/" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h4 className="text-lg font-bold text-[#1d134c] group-hover:text-[#3f2aa3] mb-2">ATM Franchise Profit Guide (2026)</h4>
                  <p className="text-sm text-gray-600">Detailed investment breakdown, ₹20k–₹75k monthly income projections, and ROI calculation.</p>
                </Link>
                <Link href="/resources/blog/how-to-start-atm-franchise-in-india-2026/" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h4 className="text-lg font-bold text-[#1d134c] group-hover:text-[#3f2aa3] mb-2">How to Start an ATM Franchise</h4>
                  <p className="text-sm text-gray-600">Step-by-step guide covering documents, RBI rules, location strategy, and application process.</p>
                </Link>
                <Link href="/resources/blog/hitachi-vs-eps-atm-franchise-2025-comparison/" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h4 className="text-lg font-bold text-[#1d134c] group-hover:text-[#3f2aa3] mb-2">Hitachi vs EPS Dealership Comparison</h4>
                  <p className="text-sm text-gray-600">Compare security deposit, onboarding speed, space requirements, and profit potential.</p>
                </Link>
                <Link href="/resources/blog/atm-franchise-rural-india-2026-opportunity/" className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <h4 className="text-lg font-bold text-[#1d134c] group-hover:text-[#3f2aa3] mb-2">The Untapped Rural ATM Opportunity</h4>
                  <p className="text-sm text-gray-600">Why rural and semi-urban Indian locations are becoming the most profitable ATM investments.</p>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <aside id="apply-now">
            <CTA />
          </aside>
        </footer>
      </article>
    </>
  );
}