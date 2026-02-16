"use client";

import { useState } from "react";
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
  Rocket,
} from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  const desktopLinkClass = (path) => `
    relative py-2 px-1 text-sm lg:text-base font-medium transition-colors duration-300
    ${isActive(path) ? "text-[#3f2aa3]" : "text-gray-700 hover:text-[#3f2aa3]"}
    after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0
    after:bg-[#3f2aa3] after:transition-all after:duration-300
    hover:after:w-full
    ${isActive(path) ? "after:w-full" : ""}
  `;

  const mobileLinks = [
    { href: "/", label: "Home", icon: Home },
    { href: "/about-us", label: "About Us", icon: Info },
    { href: "/atm-franchise", label: "ATM Franchise", icon: Landmark },
    { href: "/cost-requirements", label: "Cost & Requirements", icon: Wallet },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
            <Image
              src="/img/logo.webp"
              alt="EPS ATM Franchise Logo"
              width={60}
              height={60}
              priority
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <span className="text-base sm:text-xl lg:text-2xl font-bold text-slate-900 block">
                EPS <span className="text-red-800">ATM Franchise</span>
              </span>
              <span className="text-[11px] font-semibold tracking-wider text-emerald-600 uppercase block">
                Authorized Partner Network
              </span>
              <span className="text-[10px] font-medium tracking-wide text-slate-500 block">
                Powered by MAKT
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex space-x-5 lg:space-x-8 items-center">
            <Link href="/" className={desktopLinkClass("/")}>Home</Link>
            <Link href="/about-us" className={desktopLinkClass("/about-us")}>About Us</Link>
            <Link href="/atm-franchise" className={desktopLinkClass("/atm-franchise")}>ATM Franchise</Link>
            <Link href="/cost-requirements" className={desktopLinkClass("/cost-requirements")}>Cost & Requirements</Link>

            {/* DESKTOP DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setDesktopDropdownOpen(!desktopDropdownOpen)}
                className={`flex items-center gap-1 py-2 px-1 font-medium transition-colors duration-200
                  ${desktopDropdownOpen || pathname.includes("/resources")
                    ? "text-[#3f2aa3]"
                    : "text-gray-700 hover:text-[#3f2aa3]"}
                `}
              >
                Resources
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                    desktopDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {desktopDropdownOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white shadow-xl rounded-xl w-56 border border-gray-100">
                  <Link
                    href="/resources/blog"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700"
                  >
                    <BookOpen size={16} /> Blog
                  </Link>

                  <Link
                    href="/resources/faqs"
                    onClick={() => setDesktopDropdownOpen(false)}
                    className="flex items-center gap-3 px-5 py-3 hover:bg-gray-50 text-sm font-medium text-gray-700 border-t border-gray-50"
                  >
                    <HelpCircle size={16} /> FAQs
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/apply-now"
              className="ml-2 bg-gradient-to-r from-[#1d134c] to-[#3f2aa3] text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-indigo-500/30 hover:from-[#3f2aa3] hover:to-[#5b41d6] transition-all duration-300 font-semibold text-sm lg:text-base"
            >
              Apply Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-[#1d134c] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden">
          <div className="absolute right-0 top-0 h-full w-[85vw] max-w-[320px] bg-white shadow-2xl overflow-y-auto">

            <div className="flex justify-between items-center p-5 border-b">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} />
              </button>
            </div>

            <div className="py-6 px-5 space-y-2">
              {mobileLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex items-center gap-3 py-3.5 px-4 rounded-xl font-medium
                      ${isActive(link.href)
                        ? "bg-indigo-50 text-[#3f2aa3]"
                        : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    <Icon size={20} />
                    {link.label}
                  </Link>
                );
              })}

              {/* MOBILE RESOURCES DROPDOWN */}
              <div className="pt-2">
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className={`flex justify-between items-center w-full py-3.5 px-4 rounded-xl font-medium
                    ${mobileDropdownOpen
                      ? "bg-indigo-50 text-[#3f2aa3]"
                      : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className="flex items-center gap-3">
                    <BookOpen size={20} />
                    Resources
                  </span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${
                      mobileDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {mobileDropdownOpen && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-indigo-100 pl-4">
                    <Link
                      href="/resources/blog"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-600"
                    >
                      <FileText size={16} /> Blog
                    </Link>

                    <Link
                      href="/resources/faqs"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 py-2.5 px-4 rounded-lg hover:bg-gray-50 text-sm font-medium text-gray-600"
                    >
                      <HelpCircle size={16} /> FAQs
                    </Link>
                  </div>
                )}
              </div>

              <div className="pt-6 mt-4 border-t border-gray-100">
                <Link
                  href="/apply-now"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#3f2aa3] text-white px-4 py-4 rounded-xl font-bold"
                >
                  <Rocket size={20} />
                  Apply Now
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
