"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

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
    { label: "প্রোডাক্টস +", href: "#products" },
    { label: "আমাদের সার্ভিস +", href: "#services" },
    { label: "আমাদের সম্পর্কে", href: "#about" },
    { label: "পোর্টফলিও", href: "#portfolio" },
    { label: "ব্লগ", href: "#blog" },
    { label: "যোগাযোগ", href: "#contact" },
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
              <Link key={item.label} href={item.href} className="hover:text-blue-600 transition-colors text-sm xl:text-base">
                {item.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="#consultation" className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2 rounded shadow-md hover:shadow-lg hover:from-blue-800 hover:to-blue-600 transition-all font-medium text-sm">
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
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-4 pb-6 space-y-3 shadow-inner">
          {menuItems.map((item) => (
            <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="block text-gray-700 hover:text-blue-600 font-medium py-2 border-b border-gray-50 last:border-0">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}