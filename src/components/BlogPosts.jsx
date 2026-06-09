'use client';

import Image from 'next/image';

const blogs = [
  {
    title: "Mobile-First Marketing কি এবং বাংলাদেশে কীভাবে এই সুযোগ নেবেন?",
    excerpt: "Mobile-first marketing কি? এই প্রশ্নের উত্তর বাংলাদেশের প্রতিটি ব্যবসায়ীর জানা...",
    date: "24",
    month: "MAY",
    author: "Sumon",
    comments: "0 Comments",
    image: "/images/blog/post1.png"
  },
  {
    title: "Answer Engine Optimization (AEO) কি? AI Search-এ Rank করার গাইড",
    excerpt: "Answer Engine Optimization (AEO) কি? এই প্রশ্নটি এখন বাংলাদেশ সহ...",
    date: "10",
    month: "MAY",
    author: "Sumon",
    comments: "0 Comments",
    image: "/images/blog/post2.png"
  },
  {
    title: "Claude AI কি? জানুন Claude AI দিয়ে কি কি করা যায়?",
    excerpt: "Claude AI কি? এই প্রশ্নটি এখন প্রযুক্তিপ্রেমী থেকে শুরু করে...",
    date: "06",
    month: "MAY",
    author: "Sumon",
    comments: "0 Comments",
    image: "/images/blog/post3.png"
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
            <div 
              key={index} 
              className="bg-white rounded-none shadow-sm border border-gray-100 overflow-hidden relative transition-transform hover:-translate-y-1 group"
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
                {/* Author & Comments - black */}
                <div className="flex items-center gap-4 text-xs text-black mb-4">
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
                  <span className="cursor-pointer hover:underline uppercase tracking-wider">Read More</span>
                  <span className="cursor-pointer">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}