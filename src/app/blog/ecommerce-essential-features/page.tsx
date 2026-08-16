import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-gray-800 py-16 px-4 md:px-8">
       <div className="max-w-4xl mx-auto">
          <Link href="/#blog" className="text-blue-600 hover:underline mb-8 inline-block">← Back to Home</Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">ই-কমার্স ওয়েবসাইটের জন্য ৫টি গুরুত্বপূর্ণ ফিচার</h1>
          <p className="text-gray-500 mb-8 font-medium">Published on 15 AUG by Sumon</p>
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1200&h=800" alt="Ecommerce features" fill className="object-cover" />
          </div>
          <div className="prose max-w-none text-gray-700 text-lg leading-relaxed space-y-6">
             <p>একটি সফল ই-কমার্স ওয়েবসাইটের জন্য কোন ফিচারগুলো থাকা আবশ্যক? আজ আমরা এমন ৫টি গুরুত্বপূর্ণ ফিচার নিয়ে আলোচনা করবো যা আপনার অনলাইন স্টোরকে আরও আকর্ষণীয় এবং লাভজনক করে তুলবে।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">১. মোবাইল-ফ্রেন্ডলি ডিজাইন (Mobile-Friendly Design)</h2>
             <p>বর্তমানে বেশিরভাগ মানুষ মোবাইল ফোন দিয়ে অনলাইনে কেনাকাটা করেন। তাই আপনার ওয়েবসাইটটি অবশ্যই রেসপন্সিভ এবং মোবাইল-ফ্রেন্ডলি হতে হবে।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">২. ফাস্ট লোডিং স্পিড (Fast Loading Speed)</h2>
             <p>আপনার ওয়েবসাইট লোড হতে যদি ৩ সেকেন্ডের বেশি সময় নেয়, তবে অর্ধেকের বেশি ভিজিটর সাইট ছেড়ে চলে যেতে পারে। ফাস্ট লোডিং স্পিড কাস্টমার এক্সপেরিয়েন্স ভালো করে।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">৩. সিকিউর পেমেন্ট গেটওয়ে (Secure Payment Gateway)</h2>
             <p>গ্রাহকদের আস্থার জন্য একাধিক সিকিউর পেমেন্ট অপশন থাকা জরুরি। বিকাশ, নগদ, রকেট এবং কার্ড পেমেন্টের সুবিধা থাকা উচিত।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">৪. সহজ চেকআউট প্রসেস (Easy Checkout Process)</h2>
             <p>চেকআউট পেজ যত সহজ হবে, কাস্টমার তত দ্রুত অর্ডার কনফার্ম করবে। গেস্ট চেকআউট অপশন রাখলে সেলস বৃদ্ধি পায়।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">৫. ক্লিয়ার রিটার্ন এবং রিফান্ড পলিসি (Clear Return & Refund Policy)</h2>
             <p>স্পষ্ট রিটার্ন এবং রিফান্ড পলিসি কাস্টমারের মনে বিশ্বাস তৈরি করে, যা নতুন ক্রেতাদের কিনতে উৎসাহিত করে।</p>
          </div>
       </div>
    </div>
  )
}
