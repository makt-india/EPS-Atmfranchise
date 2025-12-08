import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
  fallback: ['system-ui', 'arial'],
});

export const metadata = {
  metadataBase: new URL('https://yourdomain.com'), // ⚠️ Replace with your actual domain
  
  title: {
    default: "EPS ATM Franchise | Earn ₹20K-₹50K Monthly Income with ATM Business in India",
    template: "%s | EPS ATM Franchise"
  },
  
  description:
    "Start your EPS ATM franchise business with low investment of ₹3-5 Lakhs. Earn stable monthly income of ₹20,000-₹50,000. Get complete support for installation, maintenance & profit sharing with Hitachi, Findi & India1 ATMs. Apply now for ATM dealership opportunity!",
  
  keywords: [
    "EPS ATM franchise",
    "ATM franchise India",
    "ATM business opportunity",
    "passive income ATM",
    "earn from ATM",
    "Hitachi ATM franchise",
    "Findi ATM franchise",
    "India1 ATM franchise",
    "ATM dealership",
    "brown label ATM",
    "white label ATM",
    "ATM franchise cost",
    "ATM franchise profit",
    "ATM business investment"
  ],
  
  authors: [{ name: "EPS ATM Franchise", url: "https://yourdomain.com" }],
  creator: "EPS ATM Franchise",
  publisher: "EPS ATM Franchise",
  
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yourdomain.com",
    title: "EPS ATM Franchise | Start Your Profitable ATM Business Today",
    description: "Earn ₹20,000-₹50,000 monthly with EPS ATM franchise. Low investment, high returns with Hitachi, Findi & India1 ATMs. Complete support provided. Apply now!",
    siteName: "EPS ATM Franchise",
    images: [
      {
        url: "/img/og-image.jpg", // Create a dedicated OG image (1200x630)
        width: 1200,
        height: 630,
        alt: "EPS ATM Franchise - Earn Monthly Income with ATM Business"
      }
    ]
  },
  
  twitter: {
    card: "summary_large_image",
    title: "EPS ATM Franchise | Earn ₹20K-₹50K Monthly Income",
    description: "Start your ATM business with low investment. Earn stable monthly income with complete support.",
    images: ["/img/og-image.jpg"],
    creator: "@yourtwitter" // Add your Twitter handle
  },
  
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: 'https://epsatmfranchise.com/',
  },
  
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#1e40af' }
    ]
  },
  
  manifest: '/manifest.json',
  
  verification: {
    google: 'your-google-verification-code', // ⚠️ Add your Google Search Console code
    // yandex: 'your-yandex-code',
    // bing: 'your-bing-code',
  },
  
  category: 'business',
  
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to important domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white text-gray-900 selection:bg-blue-100 selection:text-blue-900`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}