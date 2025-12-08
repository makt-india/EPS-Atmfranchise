// app/page.js
import Hero from "./components/home/Hero";
import Benefits from "./components/home/Benefits";
import About from "./components/home/About";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";

export const metadata = {
  title: "EPS ATM Franchise | Start Your ATM Business & Earn ₹20K-₹50K Monthly",
  description:
    "Join EPS ATM Franchise program with brands like Hitachi, Findi & India1. Low investment of ₹3-5 Lakhs, earn ₹20,000-₹50,000 monthly. Get complete installation support, maintenance & profit sharing. 150+ successful franchisees. Apply now!",
  
  keywords: "EPS ATM franchise, ATM business India, earn from ATM, passive income, ATM franchise cost, Hitachi ATM, Findi ATM, India1 ATM, brown label ATM, white label ATM franchise",
  
  alternates: {
    canonical: "https://yourdomain.com",
  },
  
  openGraph: {
    title: "Start Your EPS ATM Franchise | Earn ₹20K-₹50K Monthly Passive Income",
    description: "Low investment ATM franchise opportunity. Earn ₹20,000-₹50,000 per month with EPS, Hitachi, Findi & India1 ATMs. 150+ successful partners.",
    url: "https://yourdomain.com",
    type: "website",
    images: [
      {
        url: "/img/og-image.jpg", // Use same OG image as layout for consistency
        width: 1200,
        height: 630,
        alt: "EPS ATM Franchise Business Opportunity - Earn Monthly Income"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "EPS ATM Franchise | Earn ₹20K-₹50K Monthly",
    description: "Start your ATM business with low investment. Complete support, training & profit sharing included.",
    images: ["/img/og-image.jpg"],
  }
};

// Enhanced JSON-LD Structured Data for better SEO & Rich Results
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://yourdomain.com/#organization",
      "name": "EPS ATM Franchise",
      "url": "https://yourdomain.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/img/logo.webp",
        "width": 512,
        "height": 512
      },
      "description": "Leading ATM franchise provider in India with EPS, Hitachi, Findi and India1 partnerships",
      "sameAs": [
        "https://facebook.com/yourpage", // Add your social media
        "https://twitter.com/yourhandle",
        "https://linkedin.com/company/yourcompany"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-XXXXXXXXXX", // Add your contact number
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://yourdomain.com/#service",
      "name": "EPS ATM Franchise",
      "description": "ATM franchise business opportunity with EPS, Hitachi, Findi and India1. Earn ₹20,000-₹50,000 monthly with low investment.",
      "url": "https://yourdomain.com",
      "image": "https://yourdomain.com/img/og-image.jpg",
      "provider": {
        "@id": "https://yourdomain.com/#organization"
      },
      "priceRange": "₹₹",
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "serviceType": "ATM Franchise Opportunity",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "bestRating": "5",
        "worstRating": "1",
        "reviewCount": "150"
      },
      "offers": {
        "@type": "Offer",
        "description": "ATM Franchise Business Opportunity",
        "priceCurrency": "INR",
        "price": "300000",
        "priceValidUntil": "2025-12-31",
        "availability": "https://schema.org/InStock",
        "url": "https://yourdomain.com"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://yourdomain.com/#webpage",
      "url": "https://yourdomain.com",
      "name": "EPS ATM Franchise | Start Your ATM Business & Earn ₹20K-₹50K Monthly",
      "description": "Join EPS ATM Franchise program with brands like Hitachi, Findi & India1. Low investment, earn monthly passive income.",
      "isPartOf": {
        "@type": "WebSite",
        "@id": "https://yourdomain.com/#website",
        "url": "https://yourdomain.com",
        "name": "EPS ATM Franchise",
        "publisher": {
          "@id": "https://yourdomain.com/#organization"
        }
      },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://yourdomain.com/img/og-image.jpg"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://yourdomain.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much can I earn from an EPS ATM franchise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can earn between ₹20,000 to ₹50,000 per month from an EPS ATM franchise, depending on transaction volume and location."
          }
        },
        {
          "@type": "Question",
          "name": "What is the investment required for EPS ATM franchise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The initial investment for an EPS ATM franchise ranges from ₹3 to ₹5 lakhs, which includes machine cost, installation, and setup."
          }
        },
        {
          "@type": "Question",
          "name": "Which ATM brands are available with EPS franchise?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "EPS offers franchise opportunities with leading brands including Hitachi, Findi, and India1 ATMs."
          }
        }
      ]
    }
  ]
};

export default function HomePage() {
  return (
    <>
      {/* Enhanced JSON-LD Structured Data for Google Rich Results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Semantic HTML for better accessibility & SEO */}
      <article className="overflow-hidden">
        {/* Hero Section - Above the fold */}
        <header>
          <Hero />
        </header>
        
        {/* Main Content Sections */}
        <section id="benefits" aria-labelledby="benefits-heading">
          <Benefits />
        </section>
        
        <section id="about" aria-labelledby="about-heading">
          <About />
        </section>
        
        <section id="stats" aria-labelledby="stats-heading">
          <Stats />
        </section>
        
        <section id="testimonials" aria-labelledby="testimonials-heading">
          <Testimonials />
        </section>
        
        {/* Call to Action - Conversion focused */}
        <aside id="apply" aria-labelledby="cta-heading">
          <CTA />
        </aside>
      </article>
    </>
  );
}