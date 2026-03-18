import CostRequirementsContent from "./CostRequirementsContent";

export const metadata = {
  title:
    "ATM Franchise Cost in India 2025 – Investment, Space & Requirements Guide",

  description:
    "Complete breakdown of ATM franchise cost in India (₹3–5 Lakhs), refundable security deposit, 25–40 sq ft space requirement, electricity setup and required documents for White Label ATM installation.",

  alternates: {
    canonical: "https://epsatmfranchise.com/cost-requirements/",
  },

  openGraph: {
    title:
      "ATM Franchise Cost & Space Requirements in India (2025)",
    description:
      "Detailed guide covering ATM investment cost, eligibility criteria, refundable deposit, electricity setup and documentation process.",
    url: "https://epsatmfranchise.com/cost-requirements/",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATM Franchise Cost & Requirements (2025)",
    description:
      "Understand ATM franchise investment, ROI factors and installation requirements in India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function CostRequirementsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "BreadcrumbList",
        "@id": "https://epsatmfranchise.com/cost-requirements/#breadcrumb",
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
            "name": "ATM Franchise Cost & Requirements",
            "item": "https://epsatmfranchise.com/cost-requirements/"
          }
        ]
      },

      {
        "@type": "Article",
        "@id": "https://epsatmfranchise.com/cost-requirements/#article",
        "headline":
          "ATM Franchise Cost in India 2025 – Investment, Space & Eligibility Guide",
        "description":
          "Detailed explanation of ATM franchise investment, refundable deposit, required space, electricity specifications and documentation process.",
        "image": "https://epsatmfranchise.com/og-banner.jpg",
        "author": {
          "@type": "Organization",
          "@id": "https://epsatmfranchise.com/#organization",
          "name": "EPS ATM Franchise"
        },
        "publisher": {
          "@id": "https://epsatmfranchise.com/#organization"
        },
        "datePublished": "2025-01-01",
        "dateModified": "2025-01-01",
        "inLanguage": "en-IN",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://epsatmfranchise.com/cost-requirements/"
        },
        "isPartOf": {
          "@id": "https://epsatmfranchise.com/#website"
        }
      },

      {
        "@type": "Service",
        "@id": "https://epsatmfranchise.com/cost-requirements/#service",
        "serviceType": "ATM Franchise Setup & Installation",
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
          "availability": "https://schema.org/InStock"
        }
      },

      {
        "@type": "FAQPage",
        "@id": "https://epsatmfranchise.com/cost-requirements/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the total investment required for an ATM franchise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The total investment typically ranges between ₹3 Lakhs to ₹5 Lakhs depending on location, infrastructure setup and operator model."
            }
          },
          {
            "@type": "Question",
            "name": "How much space is required to install an ATM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A ground-floor space of approximately 25–40 square feet with proper visibility, electricity connection and structural suitability is generally required."
            }
          },
          {
            "@type": "Question",
            "name": "Is the security deposit refundable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Security deposits are typically refundable based on operator agreement terms and conditions."
            }
          },
          {
            "@type": "Question",
            "name": "What electricity setup is needed for ATM installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A dedicated single-phase electricity connection with grounding and power backup provision is generally required for ATM deployment."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for ATM franchise approval?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Identity proof, address proof, property ownership or lease agreement, photographs, bank details and KYC documents are commonly required."
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
      <CostRequirementsContent />
    </>
  );
}