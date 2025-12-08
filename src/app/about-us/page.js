// app/about-us/page.js

// Import the content component we just created
import AboutContent from "./AboutContent";

export const metadata = {
  title: "About Us | EPS ATM Franchise India",
  description:
    "Learn about our mission, values, and commitment to providing reliable EPS ATM Franchise services across India. Trusted support, high uptime, and nationwide service.",
};

export default function AboutUsPage() {
  return (
    // We just render the content component here
    <AboutContent />
  );
}