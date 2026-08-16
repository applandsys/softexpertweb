import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="w-full bg-white text-gray-800 py-16 px-4 md:px-8">
       <div className="max-w-4xl mx-auto">
          <Link href="/#blog" className="text-blue-600 hover:underline mb-8 inline-block">← Back to Home</Link>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">কিভাবে আপনার ই-কমার্স ওয়েবসাইটের সেলস বাড়াবেন?</h1>
          <p className="text-gray-500 mb-8 font-medium">Published on 12 AUG by Sumon</p>
          <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden">
             <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200&h=800" alt="Ecommerce sales" fill className="object-cover" />
          </div>
          <div className="prose max-w-none text-gray-700 text-lg leading-relaxed space-y-6">
             <p>ই-কমার্স ব্যবসায় বিক্রি বাড়ানো একটি চ্যালেঞ্জ। কিছু কার্যকরী টিপস এবং স্ট্র্যাটেজি ব্যবহার করে কিভাবে আপনি আপনার সেলস বাড়াতে পারেন তা আজ আমরা জানবো।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">হাই-কোয়ালিটি প্রোডাক্ট ইমেজ</h2>
             <p>প্রোডাক্টের ছবি যদি আকর্ষণীয় না হয়, কাস্টমাররা তা কিনবে্বা না। প্রতিটি প্রোডাক্টের হাই-কোয়ালিটি এবং বিভিন্ন অ্যাঙ্গেলের ছবি ব্যবহার করুন।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ডিসকাউন্ট এবং অফার</h2>
             <p>ফ্ল্যাশ সেল, ফ্রি শিপিং বা প্রথম অর্ডারে ডিসকাউন্টের মতো অফারগুলো কাস্টমারদের দ্রুত সিদ্ধান্ত নিতে সাহায্য করে।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">কাস্টমার রিভিউ এবং রেটিং</h2>
             <p>প্রোডাক্ট পেজে কাস্টমারদের পজিটিভ রিভিউ নতুন ক্রেতাদের মনে বিশ্বাস তৈরি করে। তাই আগের কাস্টমারদের রিভিউ দিতে উৎসাহিত করুন।</p>
             <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">রিটার্গেটিং অ্যাডস (Retargeting Ads)</h2>
             <p>যে ভিজিটররা আপনার সাইটে এসে কিছু না কিনেই চলে গেছে, তাদেরকে ফেসবুক বা গুগলে অ্যাড দেখিয়ে পুনরায় সাইটে ফিরিয়ে আনুন।</p>
          </div>
       </div>
    </div>
  )
}
