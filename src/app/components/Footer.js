"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  MapPin, 
  Mail, 
  Phone, 
  ChevronRight 
} from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:bg-[#1877F2]" },
    { icon: Twitter, href: "#", color: "hover:bg-[#1DA1F2]" },
    { icon: Instagram, href: "#", color: "hover:bg-[#E4405F]" },
    { icon: Linkedin, href: "#", color: "hover:bg-[#0A66C2]" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "ATM Franchise", href: "/atm-franchise" },
    { name: "Cost & Requirements", href: "/cost-requirements" },
    { name: "Apply Now", href: "/apply-now" },
  ];

  const resourceLinks = [
    { name: "Blog", href: "/resources/blog" },
    { name: "FAQs", href: "/resources/faqs" },
    { name: "Guides", href: "/resources/guides" },
    { name: "Help & Support", href: "/resources/support" },
  ];

  return (
    <footer className="bg-[#1d134c] text-white pt-20 pb-8 relative overflow-hidden">
      {/* --- BACKGROUND ANIMATIONS (Optimized with CSS + Motion) --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1d134c] via-[#2a1c7a] to-[#1d134c] z-0"></div>
      
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COLUMN 1: BRAND INFO */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="relative w-10 h-10">
                <Image
                  src="/img/logo.webp"
                  alt="EPS ATM Franchise Logo"
                  fill
                  className="object-contain"
                  sizes="40px"
                />
              </div>
              <span className="text-2xl font-extrabold tracking-wide text-white">
                EPS ATM
              </span>
            </Link>

            <p className="text-blue-100/80 text-sm leading-relaxed max-w-xs">
              India’s trusted partner for White Label ATM deployment. We empower entrepreneurs with secure, profitable, and hassle-free ATM franchise opportunities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className={`p-2.5 rounded-lg bg-white/5 border border-white/10 text-white transition-all duration-300 hover:scale-110 ${social.color}`}
                  aria-label="Social Link"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-blue-100/70 hover:text-yellow-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-yellow-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: RESOURCES */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full"></span>
              Resources
            </h4>
            <ul className="space-y-3">
              {resourceLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href} 
                    className="group flex items-center gap-2 text-blue-100/70 hover:text-yellow-400 transition-colors duration-200 text-sm md:text-base"
                  >
                    <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-yellow-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: CONTACT INFO */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-yellow-400 rounded-full"></span>
              Contact Us
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Our Connection</p>
                  <p className="text-sm text-blue-100/70 mt-1">
                    PAN-India Franchise Support 
                    <br />
                    ATM Network Solutions
                  </p>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                  <Mail className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Email Us</p>
                  <a href="mailto:littlemelody0000@gmail.com" className="text-sm text-blue-100/70 hover:text-white transition-colors">
                    littlemelody0000@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-4">
                <div className="p-2 bg-white/10 rounded-lg shrink-0">
                  <Phone className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">Call Support</p>
                  <a href="tel:+918883335553" className="text-sm text-blue-100/70 hover:text-white transition-colors">
                    +91 88833 35553
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200/50">
          <p>
            © {new Date().getFullYear()} <span className="text-white font-medium">EPS ATM Franchise</span>. All rights reserved by MAKT.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <span className="flex items-center gap-1">
              Made by <span className="text-yellow-400 font-medium">Makt Solution</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}