import CostRequirementsContent from "./CostRequirementsContent";

export const metadata = {
  title:
    "ATM Franchise Cost & Space Requirements in India (2025) | EPS Guide",

  description:
    "Explore ATM franchise investment cost (₹3–5 Lakhs), refundable security deposit, electricity setup, space requirements (25–40 sq ft), and required documents for White Label ATM installation in India.",

  alternates: {
    canonical: "https://epsatmfranchise.com/cost-requirements",
  },

  openGraph: {
    title:
      "ATM Franchise Cost & Requirements in India (2025)",
    description:
      "Complete breakdown of ATM franchise investment, space requirements, security deposit, and documentation process.",
    url: "https://epsatmfranchise.com/cost-requirements",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATM Franchise Cost & Requirements Guide",
    description:
      "Understand ATM investment cost, eligibility, and setup requirements in India.",
  },
};

export default function CostRequirementsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://epsatmfranchise.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Cost & Requirements",
            "item": "https://epsatmfranchise.com/cost-requirements"
          }
        ]
      },

      {
        "@type": "Article",
        "@id": "https://epsatmfranchise.com/cost-requirements#article",
        "headline":
          "ATM Franchise Cost & Space Requirements in India (2025)",
        "description":
          "Detailed explanation of ATM franchise investment, refundable deposit, space size, electricity requirements, and documentation process.",
        "author": {
          "@type": "Organization",
          "name": "EPS ATM Franchise"
        },
        "publisher": {
          "@type": "Organization",
          "name": "EPS ATM Franchise",
          "logo": {
            "@type": "ImageObject",
            "url": "https://epsatmfranchise.com/img/logo.webp"
          }
        },
        "mainEntityOfPage":
          "https://epsatmfranchise.com/cost-requirements"
      },

      {
        "@type": "Service",
        "@id": "https://epsatmfranchise.com/cost-requirements#service",
        "serviceType": "ATM Franchise Setup",
        "provider": {
          "@type": "Organization",
          "name": "EPS ATM Franchise"
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
            "maxPrice": "500000"
          }
        }
      },

      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the total investment required for an ATM franchise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The investment typically ranges between ₹3 Lakhs to ₹5 Lakhs depending on location, infrastructure, and operator framework."
            }
          },
          {
            "@type": "Question",
            "name": "How much space is required to install an ATM?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A ground-floor space of approximately 25–40 square feet with electricity connection and structural suitability is generally required."
            }
          },
          {
            "@type": "Question",
            "name": "Is the security deposit refundable?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Security deposits are typically refundable as per operator agreement terms and conditions."
            }
          },
          {
            "@type": "Question",
            "name": "What are the electricity requirements for ATM installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A dedicated single-phase electricity connection with proper grounding is generally required for ATM deployment."
            }
          },
          {
            "@type": "Question",
            "name": "What documents are required for ATM franchise approval?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "Common documents include identity proof, address proof, property ownership or lease agreement, photographs, and bank details."
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
