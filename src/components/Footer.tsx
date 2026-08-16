import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full relative text-zinc-400 pt-16 border-t border-zinc-800 overflow-hidden bg-[#0a0f1a]">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 object-cover opacity-1">
        <Image 
          src="/footer1.png" 
          alt="Footer Background" 
          fill 
          sizes="100vw"
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
        
        {/* Column 1: Logo and About */}
        <div className="flex flex-col gap-6">
          {/* Container for logo with left padding */}
          <div className="pl-[60px]">
            <Image 
              src="/logo.svg" 
              alt="Soft Expert Zone Ltd. Logo" 
              width={105} 
              height={50} 
              priority
            />
          </div>
          
          <p className="text-sm leading-relaxed">
            Soft Expert Zone Ltd. একটি Software Development, Digital Marketing  and IT  সেবা প্রদানকারী প্রতিষ্ঠান। আমরা অত্যন্ত বিশ্বস্ততা এবং আন্তরিকতার সাথে বাংলাদেশ সহ বিশ্বের বিভিন্ন দেশে উন্নত মানের মার্কেটিং এবং প্রফেশনাল আইটি সেবা প্রদান করে আসছি।
          </p>
        </div>

        {/* Column 2: Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2">গুরুত্বপূর্ণ লিঙ্ক</h4>
          {['হোম', 'আমাদের সম্পর্কে', 'আমাদের টিম', 'শর্তাবলী', 'গোপনীয়তা নীতিমালা', 'যোগাযোগ'].map((link) => (
            <a key={link} href="#" className="hover:text-blue-500 transition-colors">{link}</a>
          ))}
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2">আমাদের সার্ভিস</h4>
          {['ডিজিটাল মার্কেটিং', 'গ্রাফিক্স ডিজাইন', 'সার্চ ইঞ্জিন অপ্টিমাইজেশন', 'ডোমেইন ও হোস্টিং', 'ওয়েবসাইট ডিজাইন এন্ড ডেভেলপমেন্ট', 'সফটওয়্যার ডেভেলপমেন্ট'].map((service) => (
            <a key={service} href="#" className="hover:text-blue-500 transition-colors">{service}</a>
          ))}
        </div>

        {/* Column 4: Contact */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-bold text-lg mb-2"> যোগাযোগের তথ্য </h4>
          <p className="flex gap-3 items-start"><span>📍</span> House # 19, Road # 01, Sector # 06, Uttara, Dhaka, Bangladesh</p>
          <p className="flex gap-3 items-center"><span>✉️</span> support@softexpertzone.com </p>
          <p className="flex gap-3 items-center"><span>🎧</span> <a href="tel:+8801722447755"> +8801722447755 </a></p>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 w-full border-t border-zinc-800 py-8 text-center text-sm">
        <p>Copyright © 2026 Soft Expert Zone. All Rights Reserved.</p>
      </div>
    </footer>
  );
}