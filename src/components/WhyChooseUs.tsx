'use client';

import { Users, Award, DollarSign, Eye, Truck, Headset } from 'lucide-react';

const features = [
  { icon: Users, title: "Digital Marketing", desc: "অনলাইনে আপনার ব্যবসার প্রচার প্রচারণা করার জন্য ইফেক্টিভ Digital Marketing Service প্রদান করে থাকি। যা আপনার ব্যবসার অনলাইন পরিচিতি ও মুনাফা বাড়াতে সাহায্য করবে।" },
  { icon: Award, title: "Graphic Design", desc: "আমাদের দক্ষ Graphic Design টিম আপনার ব্যবসার জন্য Logo, Banner, Branding, Packaging সহ বিভিন্ন Graphic সেবা প্রদান করে থাকে।" },
  { icon: DollarSign, title: "Search Engine Optimization", desc: "আপনার ওয়েবসাইট কে সার্চ ইঞ্জিনে টপ র‍্যাংক করাতে আমরা দিচ্ছি প্রফেশনাল Search Engine Optimization এর সকল সার্ভিস।" },
  { icon: Eye, title: "Domain & Hosting", desc: "আমরা দিচ্ছি সুপার ফাস্ট, সিকিউর, নির্ভরযোগ্য SSD storage-এ ওয়েব Domain & Hosting রেজিস্ট্রেশন সার্ভিস।" },
  { icon: Truck, title: "Web Design & Development", desc: "আমরা বিভিন্ন ধরনের Web Design & Development সার্ভিস দিয়ে থাকি। যেমনঃ ব্যবসায়িক, ইকমার্স, পোর্টফোলিও সহ যেকোনো ওয়েবসাইট।" },
  { icon: Headset, title: "Software Development", desc: "আপনার ব্যবসা সুন্দর ভাবে পরিচালনা করার জন্য আমরা যেকোনো ধরনের কাস্টম Software Development সেবা প্রদান করে থাকি।" },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Headline Centered above the cards */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            কেন Soft Expert Zone Ltd. কে বেছে নিবেন?
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 p-8 border border-zinc-800 rounded-lg hover:border-zinc-700 transition-colors"
            >
              <div className="mb-6">
                <item.icon size={40} className="text-teal-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {item.desc}
              </p>
              <a href="#" className="text-teal-400 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                বিস্তারিত দেখুন →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}