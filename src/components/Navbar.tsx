"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isCompact, setIsCompact] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hasTriggeredRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 1. Reset at the top: Full height, fully visible
      if (currentScrollY < 60) {
        setIsVisible(true);
        setIsCompact(false);
        hasTriggeredRef.current = false;
        if (timerRef.current) clearTimeout(timerRef.current);
        return;
      }

      // 2. If already compact, keep it visible (don't re-trigger)
      if (isCompact) return;

      // 3. Trigger the Hide and Auto-Show sequence only once per scroll-down
      if (!hasTriggeredRef.current) {
        hasTriggeredRef.current = true;
        setIsVisible(false);

        // Auto-reappear after 1 second in compact mode
        timerRef.current = setTimeout(() => {
          setIsVisible(true);
          setIsCompact(true);
        }, 500);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isCompact]);

  const menuItems = [
    { label: "হোম", href: "/" },
    { 
      label: "প্রোডাক্টস", 
      href: "#products",
      subItems: [
        { label: "ই-কমার্স ওয়েবসাইট", href: "/e-commerce-website" },
        { label: "ইনেভন্টির ম্যােনজেমন্ট", href: "/inventory-management" },
        { label: "রিটেইল ইআরপি", href: "/retail-erp" }
      ]
    },
    { 
      label: "আমাদের সার্ভিস", 
      href: "#services",
      subItems: [
        { label: "ডিজিটাল মার্কেটিং", href: "/digital-marketing" },
        { label: "সফটওয়্যার ডেভেলপমেন্ট", href: "/software-development" },
        { label: "ওয়েব ডিজাইন ও ডেভেলপমেন্ট", href: "/web-design-development" },
        { label: "ল্যান্ডিং পেজ সার্ভিস", href: "/landing-page" },
        { label: "Pixel setup", href: "/pixel-setup" }
      ]
    },
    { label: "আমাদের সম্পর্কে", href: "/about-us" },
    { label: "যোগাযোগ", href: "/contact-us" },
  ];

  return (
    <nav
      className={`w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${isCompact ? "py-2" : "py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isCompact ? "h-16" : "h-16"
        }`}>
          
          <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
            <Image 
              src="/logo.svg" 
              alt="SoftExpert Logo" 
              width={isCompact ? 70 : 85} 
              height={isCompact ? 18 : 22} 
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6 text-gray-700 font-medium">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group py-6 -my-6 flex items-center">
                <Link href={item.href} className="hover:text-blue-600 transition-colors text-sm xl:text-base flex items-center gap-1">
                  {item.label}
                  {item.subItems && <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />}
                </Link>
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-0 w-64 bg-white border border-gray-100 rounded-b-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-left flex flex-col z-50">
                    <div className="p-2">
                      {item.subItems.map(sub => (
                        <Link key={sub.label} href={sub.href} className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors font-medium">
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact-us" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2 rounded shadow-md hover:shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all font-medium text-sm">
              ফর কনসালটেশন
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="flex lg:hidden items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-700 hover:text-blue-600 focus:outline-none">
              <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 shadow-inner overflow-y-auto max-h-[80vh]">
          {menuItems.map((item) => (
            <div key={item.label} className="border-b border-gray-50 last:border-0">
              <div className="flex items-center justify-between">
                <Link href={item.href} onClick={() => !item.subItems && setIsOpen(false)} className="flex-grow text-gray-700 hover:text-blue-600 font-medium py-3">
                  {item.label}
                </Link>
                {item.subItems && <ChevronDown className="w-5 h-5 text-gray-500" />}
              </div>
              {item.subItems && (
                <div className="pl-4 pb-3 space-y-1 border-l-2 border-blue-100 ml-2">
                  {item.subItems.map(sub => (
                    <Link key={sub.label} href={sub.href} onClick={() => setIsOpen(false)} className="block text-gray-600 hover:text-blue-600 py-2 text-sm font-medium">
                      {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}