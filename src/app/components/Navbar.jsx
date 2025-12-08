"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; 
import { 
  Menu, 
  X, 
  ChevronDown, 
  Home, 
  Info, 
  Landmark, 
  Wallet, 
  BookOpen, 
  FileText, 
  HelpCircle, 
  Rocket 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const pathname = usePathname(); 
  const dropdownRef = useRef(null);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when click outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDesktopDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  // Animation variants
  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      opacity: 0, 
      x: "100%",
      transition: { duration: 0.2, ease: "easeIn" } 
    },
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, display: "none" },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      display: "block",
      transition: { duration: 0.2, ease: "easeOut" } 
    },
    exit: { 
      opacity: 0, 
      y: -10, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn", transitionEnd: { display: "none" } } 
    },
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdownOpen(false);
  };

  const isActive = (path) => pathname === path;

  // Reusable Link Classes for Desktop
  const desktopLinkClass = (path) => `
    relative py-2 px-1 text-sm lg:text-base font-medium transition-colors duration-300
    ${isActive(path) ? "text-[#3f2aa3]" : "text-gray-700 hover:text-[#3f2aa3]"}
    after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 
    after:bg-[#3f2aa3] after:transition-all after:duration-300
    hover:after:w-full
    ${isActive(path) ? "after:w-full" : ""}
  `;

  // Mobile Menu Data
  const mobileLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: Info },
    { href: "/atm-franchise", label: "ATM Franchise", icon: Landmark },
    { href: "/cost-requirements", label: "Cost & Requirements", icon: Wallet },
  ];

  return (
    <>
      <motion.nav
        className={`w-full sticky top-0 z-[50] transition-all duration-300 ${
          scrolled 
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200" 
            : "bg-white/90 backdrop-blur-lg shadow-md border-b border-gray-100"
        }`}
        variants={navVariants}
        initial="hidden"
        animate="visible"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
          
          {/* LOGO */}
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 group focus:outline-none rounded-lg"
            aria-label="EPS ATM Franchise Home"
          >
            <div className="relative overflow-hidden">
               <Image
                  src="/img/logo.webp"
                  alt="EPS ATM Franchise Logo"
                  className="h-9 w-9 sm:h-10 sm:w-10 object-contain transition-transform group-hover:scale-110 duration-300"
                  width={40}
                  height={40}
                  priority
                  quality={90}
              />
            </div>
            <span className="text-base sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] bg-clip-text text-transparent whitespace-nowrap tracking-tight">
              EPS ATM Franchise
            </span>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-5 lg:space-x-8 items-center">
            <Link href="/" className={desktopLinkClass("/")}>Home</Link>
            <Link href="/about-us" className={desktopLinkClass("/about-us")}>About Us</Link>
            <Link href="/atm-franchise" className={desktopLinkClass("/atm-franchise")}>ATM Franchise</Link>
            <Link href="/cost-requirements" className={desktopLinkClass("/cost-requirements")}>Cost & Requirements</Link>

            {/* DESKTOP DROPDOWN */}
            <div className="relative" ref={dropdownRef}>
              <button
                className={`flex items-center gap-1 py-2 px-1 font-medium transition-colors duration-200 outline-none
                  ${desktopDropdownOpen || pathname.includes('/resources') ? "text-[#3f2aa3]" : "text-gray-700 hover:text-[#3f2aa3]"}
                `}
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setDesktopDropdownOpen(!desktopDropdownOpen);
                  }
                }}
                aria-expanded={desktopDropdownOpen}
                aria-haspopup="true"
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {desktopDropdownOpen && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white shadow-xl rounded-xl w-56 overflow-hidden border border-gray-100 ring-1 ring-black ring-opacity-5"
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    role="menu"
                  >
                    <div className="py-1">
                      <Link 
                          href="/resources/blog" 
                          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 hover:text-[#3f2aa3] transition-colors duration-200 text-sm font-medium text-gray-700"
                          onClick={() => setDesktopDropdownOpen(false)}
                      >
                          <BookOpen size={16} className="text-[#3f2aa3]" /> Blog
                      </Link>
                      <Link 
                          href="/resources/faqs" 
                          className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 hover:text-[#3f2aa3] transition-colors duration-200 text-sm font-medium text-gray-700 border-t border-gray-50"
                          onClick={() => setDesktopDropdownOpen(false)}
                      >
                          <HelpCircle size={16} className="text-[#3f2aa3]" /> FAQs
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/apply-now"
              className="ml-2 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-indigo-500/30 hover:from-[#3f2aa3] hover:to-[#5b41d6] transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 font-semibold text-sm lg:text-base"
            >
              Apply Now
            </Link>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-[#1d134c] p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU - Moved OUTSIDE of motion.nav to fix Z-Index/Stacking issues */}
      <AnimatePresence mode="wait">
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-[3px] md:hidden z-[9998]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
            />
            
            {/* Mobile Menu Panel */}
            <motion.div
              id="mobile-menu"
              className="fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white shadow-2xl md:hidden z-[9999] overflow-y-auto"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Header */}
              <div className="flex justify-between items-center p-5 border-b border-gray-100 bg-gray-50/50">
                <span className="font-bold text-lg text-[#1d134c]">Menu</span>
                <button
                  onClick={closeMobileMenu}
                  className="p-2 rounded-full hover:bg-red-50 hover:text-red-500 transition-colors"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="py-6 px-5 space-y-2">
                {mobileLinks.map((link) => {
                    const Icon = link.icon; // Explicitly assign icon component
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`flex items-center gap-3 py-3.5 px-4 rounded-xl transition-all font-medium border border-transparent
                                ${isActive(link.href) 
                                    ? "bg-indigo-50 text-[#3f2aa3] border-indigo-100" 
                                    : "text-gray-600 hover:bg-gray-50 hover:text-[#3f2aa3]"
                                }`}
                            onClick={closeMobileMenu}
                        >
                            <Icon size={20} strokeWidth={2} />
                            {link.label}
                        </Link>
                    );
                })}

                {/* MOBILE DROPDOWN */}
                <div className="pt-2">
                  <button
                    className={`flex justify-between items-center w-full py-3.5 px-4 rounded-xl transition-all font-medium border border-transparent
                        ${mobileDropdownOpen 
                            ? "bg-indigo-50 text-[#3f2aa3] border-indigo-100" 
                            : "text-gray-600 hover:bg-gray-50"}
                    `}
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  >
                    <span className="flex items-center gap-3">
                        <BookOpen size={20} strokeWidth={2} /> 
                        Resources
                    </span>
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-200 ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileDropdownOpen && (
                      <motion.div
                        className="ml-4 mt-2 space-y-1 border-l-2 border-indigo-100 pl-4"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        <Link
                          href="/resources/blog"
                          className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-gray-50 text-gray-600 text-sm font-medium transition-colors"
                          onClick={closeMobileMenu}
                        >
                          <FileText size={16} /> Blog
                        </Link>
                        <Link
                          href="/resources/faqs"
                          className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-gray-50 text-gray-600 text-sm font-medium transition-colors"
                          onClick={closeMobileMenu}
                        >
                          <HelpCircle size={16} /> FAQs
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="pt-6 mt-4 border-t border-gray-100">
                    <Link
                        href="/apply-now"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-center gap-2 w-full bg-[#3f2aa3] text-white px-4 py-4 rounded-xl shadow-lg shadow-indigo-200 hover:bg-[#322185] transition-all font-bold active:scale-95 transform"
                    >
                        <Rocket size={20} />
                        Apply Now
                    </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}