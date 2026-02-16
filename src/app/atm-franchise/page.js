import ATMFranchiseContent from "./ATMFranchiseContent";

export const metadata = {
  title:
    "ATM Franchise Cost, Commission & Profit in India (2025) | EPS Complete Guide",

  description:
    "Detailed guide to ATM Franchise in India. Learn about investment cost (₹3–5 Lakhs), commission per transaction, monthly profit potential, site requirements, and step-by-step installation process with EPS.",

  alternates: {
    canonical: "https://epsatmfranchise.com/atm-franchise",
  },

  openGraph: {
    title:
      "ATM Franchise Cost & Profit Guide (2025) – EPS",
    description:
      "Explore ATM franchise investment, commission structure, ROI calculation, and installation process in India.",
    url: "https://epsatmfranchise.com/atm-franchise",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "ATM Franchise Cost & Profit Guide 2025",
    description:
      "Complete breakdown of ATM franchise investment, earnings, and installation process in India.",
  },
};

export default function ATMFranchisePage() {
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
            "name": "ATM Franchise Guide",
            "item": "https://epsatmfranchise.com/atm-franchise"
          }
        ]
      },
      {
        "@type": "Article",
        "@id": "https://epsatmfranchise.com/atm-franchise#article",
        "headline":
          "ATM Franchise Cost, Commission & Profit in India (2025 Guide)",
        "description":
          "Comprehensive guide explaining ATM franchise investment, transaction commission, ROI model, and installation process in India.",
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
          "https://epsatmfranchise.com/atm-franchise"
      },
      {
        "@type": "Service",
        "@id": "https://epsatmfranchise.com/atm-franchise#service",
        "serviceType": "ATM Franchise in India",
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
            "price": "300000",
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
            "name": "What is the cost of ATM franchise in India?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "The investment typically ranges between ₹3 Lakhs to ₹5 Lakhs depending on location, infrastructure, and operator framework."
            }
          },
          {
            "@type": "Question",
            "name": "How much commission do ATM franchise owners earn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "ATM franchise earnings depend on transaction volume. Commission is typically calculated per withdrawal transaction under the regulated interchange model."
            }
          },
          {
            "@type": "Question",
            "name": "What are the site requirements for ATM franchise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text":
                "A ground-floor commercial space with electricity, visibility, and stable connectivity is typically required for ATM installation."
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
