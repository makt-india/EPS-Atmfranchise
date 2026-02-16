import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
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
      "ATM Franchise in India – Cost, Profit & EPS White Label Dealership",
    template: "%s | EPS ATM Franchise",
  },

  description:
    "Start an ATM franchise in India with low investment. Learn about ATM franchise cost, monthly profit, commission structure and how EPS white label ATM dealership works.",

  verification: {
    google: "f7CK6QlryZb1I7sLwRF6qtJ9PPesNYgQrpo7QARrKqM",
  },

  alternates: {
    canonical: "https://epsatmfranchise.com/",
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
      "ATM Franchise in India – EPS White Label ATM Dealership",
    description:
      "Explore ATM franchise cost, earnings, and business model in India. EPS provides complete white label ATM dealership support.",
    url: "https://epsatmfranchise.com",
    siteName: "EPS ATM Franchise",
    images: [
      {
        url: "https://epsatmfranchise.com/og-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ATM Franchise Business Opportunity in India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "ATM Franchise in India – Cost & Profit Explained",
    description:
      "Learn how ATM franchise business works in India. Investment, income and dealership details.",
    images: ["https://epsatmfranchise.com/og-banner.jpg"],
  },

  robots: {
    index: true,
    follow: true,
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
        url: "https://epsatmfranchise.com",
        logo: "https://epsatmfranchise.com/img/logo.webp",
        description:
          "White label ATM franchise provider in India offering ATM dealership opportunities.",
        areaServed: {
          "@type": "Country",
          name: "India",
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://epsatmfranchise.com/#website",
        url: "https://epsatmfranchise.com",
        name: "ATM Franchise in India – EPS",
      },
      {
        "@type": "Service",
        "@id": "https://epsatmfranchise.com/#service",
        name: "White Label ATM Franchise",
        description:
          "ATM franchise dealership model in India with recurring commission income.",
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
          availability: "https://schema.org/InStock",
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-FVR1F27K6Q"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FVR1F27K6Q');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "vd3493inoo");
          `}
        </Script>

        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
