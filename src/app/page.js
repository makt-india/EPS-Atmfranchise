import Hero from "./components/home/Hero";
import Benefits from "./components/home/Benefits";
import About from "./components/home/About";
import Stats from "./components/home/Stats";
import Testimonials from "./components/home/Testimonials";
import CTA from "./components/home/CTA";

export const metadata = {
  title:
    "ATM Franchise in India 2026 – Cost, Profit & EPS ATM Dealership",

  description:
    "Start an ATM Franchise in India with ₹3–5 Lakhs investment. Check cost, monthly profit, commission structure, and how EPS ATM dealership works. Apply now.",

  alternates: {
    canonical: "https://epsatmfranchise.com",
  },

  openGraph: {
    title:
      "ATM Franchise in India – Cost & Profit | EPS ATM Dealership",
    description:
      "Explore ATM franchise cost, ROI, and monthly income potential in India. EPS offers white label ATM dealership opportunities with full support.",
    url: "https://epsatmfranchise.com",
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
      "ATM Franchise in India – Cost, Profit & ROI Explained",
    description:
      "Learn how to start an ATM business in India. Investment, earnings, and complete EPS franchise details.",
    images: ["https://epsatmfranchise.com/img/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://epsatmfranchise.com/#organization",
      "name": "EPS ATM Franchise",
      "url": "https://epsatmfranchise.com",
      "logo": "https://epsatmfranchise.com/img/logo.webp",
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
      "url": "https://epsatmfranchise.com",
      "name": "ATM Franchise in India – EPS",
      "potentialAction": {
        "@type": "SearchAction",
        "target":
          "https://epsatmfranchise.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
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
        "price": "300000-500000",
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
              "The investment for an ATM franchise in India typically ranges between ₹3 to ₹5 lakhs depending on location, installation and security setup.",
          },
        },
        {
          "@type": "Question",
          "name": "How much profit can I earn from an ATM business?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text":
              "Monthly income depends on transaction volume and location. In high-footfall areas, earnings can range from ₹20,000 to ₹50,000 per month.",
          },
        },
      ],
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
          {/* IMPORTANT: Hero must contain a clear H1:
             "ATM Franchise in India – EPS ATM Dealership" */}
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
