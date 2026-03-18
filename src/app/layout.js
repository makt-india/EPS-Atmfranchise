import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ["system-ui", "arial"],
});

export const metadata = {
  metadataBase: new URL("https://epsatmfranchise.com"),

  title: {
    default:
      "ATM Franchise in India 2026 – Cost, Commission, Profit & EPS Dealership Guide",
    template: "%s | EPS ATM Franchise",
  },

  description:
    "Complete guide to ATM franchise in India. Investment ₹3–5 Lakhs, commission structure, monthly income, ROI and EPS white label ATM dealership opportunity explained step-by-step.",

  keywords: [
    "ATM franchise in India",
    "ATM franchise cost",
    "ATM franchise profit",
    "white label ATM dealership",
    "ATM business income India",
    "EPS ATM franchise",
  ],

  alternates: {
    canonical: "https://epsatmfranchise.com/",
  },

  verification: {
    google: "f7CK6QlryZb1I7sLwRF6qtJ9PPesNYgQrpo7QARrKqM",
  },

  icons: {
    icon: [
      { url: "/img/logo1.png", sizes: "32x32", type: "image/png" },
      { url: "/img/logo1.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/img/logo1.png", sizes: "180x180", type: "image/png" },
    ],
  },

  openGraph: {
    title:
      "ATM Franchise in India 2026 – Cost, Profit & EPS White Label Dealership",
    description:
      "Explore ATM franchise cost, commission per transaction, ROI and business model in India. EPS provides full white label ATM dealership support.",
    url: "https://epsatmfranchise.com/",
    siteName: "EPS ATM Franchise",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://epsatmfranchise.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ATM Franchise Business Opportunity in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ATM Franchise in India – Investment, Commission & Profit Explained",
    description:
      "Learn ATM franchise cost, earnings, ROI and how EPS white label ATM dealership works in India.",
    images: ["https://epsatmfranchise.com/og-banner.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d134c",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://epsatmfranchise.com/#organization",
        name: "EPS ATM Franchise",
        url: "https://epsatmfranchise.com/",
        logo: "https://epsatmfranchise.com/img/logo.webp",
        description:
          "White label ATM franchise provider in India offering ATM dealership opportunities with recurring commission income.",
        sameAs: [
          "https://www.facebook.com/",
          "https://www.linkedin.com/",
          "https://twitter.com/",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+91-XXXXXXXXXX",
          contactType: "sales",
          areaServed: "IN",
          availableLanguage: ["English", "Hindi"],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://epsatmfranchise.com/#website",
        url: "https://epsatmfranchise.com/",
        name: "EPS ATM Franchise",
        publisher: {
          "@id": "https://epsatmfranchise.com/#organization",
        },
      },
      {
        "@type": "Service",
        "@id": "https://epsatmfranchise.com/#service",
        name: "White Label ATM Franchise in India",
        description:
          "ATM franchise dealership model with low investment and recurring commission-based income.",
        provider: {
          "@id": "https://epsatmfranchise.com/#organization",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "300000",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVR1F27K6Q"
          strategy="afterInteractive"
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-FVR1F27K6Q');
            `
          }}
        />

        {/* Microsoft Clarity */}
    
    <Script
  id="clarity"
  strategy="lazyOnload"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;
        t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "vd3493inoo");
    `,
  }}
/>
        <Navbar />

        <main className="min-h-screen">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}