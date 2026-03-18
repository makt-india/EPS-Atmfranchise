import ATMFranchiseContent from "./ATMFranchiseContent";

export const metadata = {
  title:
    "ATM Franchise in India 2025 – Cost, Commission & Profit Complete Guide",

  description:
    "Complete ATM franchise guide for India. Learn investment cost (₹3–5 Lakhs), commission per transaction, monthly profit, ROI calculation, site requirements and installation process.",

  alternates: {
    canonical: "https://epsatmfranchise.com/atm-franchise/",
  },

  openGraph: {
    title:
      "ATM Franchise Cost & Profit Guide (2025) – EPS",
    description:
      "Explore ATM franchise investment, commission structure, ROI model and installation process in India.",
    url: "https://epsatmfranchise.com/atm-franchise/",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATM Franchise Cost & Profit Guide 2025",
    description:
      "Breakdown of ATM franchise investment, commission earnings and installation process in India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ATMFranchisePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "BreadcrumbList",
        "@id": "https://epsatmfranchise.com/atm-franchise/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://epsatmfranchise.com/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "ATM Franchise Guide",
            "item": "https://epsatmfranchise.com/atm-franchise/"
          }
        ]
      },

      {
        "@type": "Article",
        "@id": "https://epsatmfranchise.com/atm-franchise/#article",
        "headline":
          "ATM Franchise in India 2025 – Cost, Commission & Profit Guide",
        "description":
          "Comprehensive guide explaining ATM franchise investment, commission per transaction, ROI model and installation process in India.",
        "image": "https://epsatmfranchise.com/og-banner.jpg",
        "author": {
          "@id": "https://epsatmfranchise.com/#organization"
        },
        "publisher": {
          "@id": "https://epsatmfranchise.com/#organization"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-01-01",
        "inLanguage": "en-IN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://epsatmfranchise.com/atm-franchise/"
        },
        "isPartOf": {
          "@id": "https://epsatmfranchise.com/#website"
        }
      },

      {
        "@type": "Service",
        "@id": "https://epsatmfranchise.com/atm-franchise/#service",
        "serviceType": "ATM Franchise Opportunity in India",
        "provider": {
          "@id": "https://epsatmfranchise.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "minPrice": "300000",
            "maxPrice": "500000",
            "priceCurrency": "INR"
          },
          "availability": "https://schema.org/InStock",
          "priceValidUntil": "2026-12-31"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://epsatmfranchise.com/atm-franchise/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the cost of ATM franchise in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The investment typically ranges between ₹3 Lakhs to ₹5 Lakhs depending on location, infrastructure setup and operator model."
            }
          },
          {
            "@type": "Question",
            "name": "How much commission do ATM franchise owners earn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Commission depends on transaction volume. Earnings are calculated per financial and non-financial transaction under the regulated interchange fee model."
            }
          },
          {
            "@type": "Question",
            "name": "What are the site requirements for ATM franchise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A ground-floor commercial space with 25–40 sq ft area, electricity connection, proper visibility and connectivity is generally required."
            }
          }
        ]
      }

    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <ATMFranchiseContent />
    </>
  );
}