import AboutContent from "./AboutContent";

export const metadata = {
  title:
    "About EPS ATM Franchise – Trusted White Label ATM Network in India",

  description:
    "Learn about EPS ATM Franchise, a nationwide White Label ATM network in India. Discover our infrastructure, ATM managed services, and commitment to financial inclusion and franchise partner growth.",

  alternates: {
    canonical: "https://epsatmfranchise.com/about",
  },

  openGraph: {
    title:
      "About EPS ATM Franchise – White Label ATM Operator in India",
    description:
      "EPS operates a secure ATM network across India supporting entrepreneurs with structured ATM franchise opportunities.",
    url: "https://epsatmfranchise.com/about",
    siteName: "EPS ATM Franchise",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "About EPS ATM Franchise",
    description:
      "Nationwide White Label ATM network enabling ATM franchise partners across India.",
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://epsatmfranchise.com/about#aboutpage",
        "url": "https://epsatmfranchise.com/about",
        "name": "About EPS ATM Franchise",
        "description":
          "Information about EPS ATM Franchise, a White Label ATM network operating across India.",
      },
      {
        "@type": "Organization",
        "@id": "https://epsatmfranchise.com/#organization",
        "name": "EPS ATM Franchise",
        "url": "https://epsatmfranchise.com",
        "foundingDate": "2011",
        "areaServed": {
          "@type": "Country",
          "name": "India",
        },
        "description":
          "EPS operates a White Label ATM network in India offering ATM franchise opportunities with structured operational support.",
        "knowsAbout": [
          "ATM Franchise in India",
          "White Label ATM Operations",
          "ATM Managed Services",
          "Financial Inclusion",
          "Payment Switching Infrastructure"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
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
      <AboutContent />
    </>
  );
}
