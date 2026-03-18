import AboutContent from "./AboutContent";

export const metadata = {
  title:
    "About EPS ATM Franchise – White Label ATM Network & Dealership Model in India",

  description:
    "Learn about EPS ATM Franchise, a White Label ATM network in India offering structured dealership opportunities, ATM managed services and nationwide operational support.",

  alternates: {
    canonical: "https://epsatmfranchise.com/about/",
  },

  openGraph: {
    title:
      "About EPS ATM Franchise – White Label ATM Operator in India",
    description:
      "Explore EPS ATM Franchise infrastructure, managed ATM services and nationwide franchise partner support framework.",
    url: "https://epsatmfranchise.com/about/",
    siteName: "EPS ATM Franchise",
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "About EPS ATM Franchise",
    description:
      "Nationwide White Label ATM network supporting franchise partners across India.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [

      {
        "@type": "AboutPage",
        "@id": "https://epsatmfranchise.com/about/#aboutpage",
        "url": "https://epsatmfranchise.com/about/",
        "name": "About EPS ATM Franchise",
        "description":
          "Information about EPS ATM Franchise and its White Label ATM dealership model in India.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://epsatmfranchise.com/#website"
        },
        "breadcrumb": {
          "@id": "https://epsatmfranchise.com/about/#breadcrumb"
        }
      },

      {
        "@type": "BreadcrumbList",
        "@id": "https://epsatmfranchise.com/about/#breadcrumb",
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
            "name": "About",
            "item": "https://epsatmfranchise.com/about/"
          }
        ]
      },

      {
        "@type": "Organization",
        "@id": "https://epsatmfranchise.com/#organization",
        "name": "EPS ATM Franchise",
        "url": "https://epsatmfranchise.com/",
        "logo": {
          "@type": "ImageObject",
          "url": "https://epsatmfranchise.com/img/logo.webp"
        },
        "foundingDate": "2011",
        "description":
          "EPS ATM Franchise operates a White Label ATM network across India, offering structured ATM dealership opportunities with operational, compliance and cash management support.",
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "sameAs": [
          "https://www.facebook.com/",
          "https://www.linkedin.com/",
          "https://twitter.com/"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "telephone": "+91-XXXXXXXXXX",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        },
        "knowsAbout": [
          "ATM Franchise in India",
          "White Label ATM Operations",
          "ATM Managed Services",
          "Financial Inclusion",
          "ATM Switching Infrastructure",
          "Interchange Commission Model"
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
      <AboutContent />
    </>
  );
}