'use client';

import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    title: "ই-কমার্স ওয়েবসাইটের জন্য ৫টি গুরুত্বপূর্ণ ফিচার",
    excerpt: "একটি সফল ই-কমার্স ওয়েবসাইটের জন্য কোন ফিচারগুলো থাকা আবশ্যক? জানুন কিভাবে আপনার অনলাইন স্টোরকে আরও আকর্ষণীয় করবেন...",
    date: "15",
    month: "AUG",
    author: "Sumon",
    comments: "0 Comments",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600&h=400",
    slug: "ecommerce-essential-features"
  },
  {
    title: "কিভাবে আপনার ই-কমার্স ওয়েবসাইটের সেলস বাড়াবেন?",
    excerpt: "ই-কমার্স ব্যবসায় বিক্রি বাড়ানো একটি চ্যালেঞ্জ। কিছু কার্যকরী টিপস এবং স্ট্র্যাটেজি ব্যবহার করে কিভাবে আপনি আপনার সেলস বাড়াতে পারেন তা জানুন...",
    date: "12",
    month: "AUG",
    author: "Sumon",
    comments: "0 Comments",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
    slug: "increase-ecommerce-sales"
  },
  {
    title: "ই-কমার্স এসইও (SEO) কেন এত গুরুত্বপূর্ণ?",
    excerpt: "আপনার ই-কমার্স ওয়েবসাইটকে সার্চ ইঞ্জিনে প্রথম পাতায় নিয়ে আসার জন্য এসইও এর গুরুত্ব অপরিসীম। জানুন কেন আপনার এসইও প্রয়োজন...",
    date: "10",
    month: "AUG",
    author: "Sumon",
    comments: "0 Comments",
    image: "https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?auto=format&fit=crop&q=80&w=600&h=400",
    slug: "ecommerce-seo-importance"
  },
];

export default function BlogPosts() {
  return (
    <section className="w-full bg-[#FDFBF7] py-20 px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading - pure black, no dark mode override */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight">
            সর্বশেষ ব্লগ পোস্ট
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <Link 
              key={index}
              href={`/blog/${blog.slug}`}
              className="bg-white rounded-none shadow-sm border border-gray-100 overflow-hidden relative transition-transform hover:-translate-y-1 group block"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={blog.image} 
                  alt={blog.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />
              </div>

              {/* Date Badge - keep background blue, text white */}
              <div className="absolute top-[210px] right-6 bg-blue-700 text-white p-2 text-center w-14 shadow-lg z-10">
                <span className="block font-bold text-lg leading-tight">{blog.date}</span>
                <span className="block text-[10px] uppercase font-bold">{blog.month}</span>
              </div>

              {/* Content Area - all text black */}
              <div className="p-6 pt-12">
                {/* Author & Comments - black (Hidden for now) */}
                <div className="hidden items-center gap-4 text-xs text-black mb-4">
                  <span className="flex items-center gap-1">👤 {blog.author}</span>
                  <span className="flex items-center gap-1">💬 {blog.comments}</span>
                </div>
                
                {/* Title - black, hover remains black or can add underline */}
                <h3 className="text-lg font-bold text-black mb-3 leading-snug hover:text-black transition-colors">
                  {blog.title}
                </h3>
                
                {/* Excerpt - black */}
                <p className="text-black text-sm mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>
                
                {/* Read More - black, border gray */}
                <div className="border-t border-gray-200 pt-4 flex justify-between items-center text-sm font-semibold text-black">
                  <span className="group-hover:underline uppercase tracking-wider">Read More</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}