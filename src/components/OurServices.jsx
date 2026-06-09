'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = ['ALL', 'GRAPHICS DESIGN', 'SEO', 'WEBSITE DESIGN & DEVELOPMENT'];

const services = [
  { src: '/images/services/whatsappservice.jpg', category: 'SEO' },
  { src: '/images/services/our services 2.png', category: 'SEO' },
  { src: '/images/services/our services 3.png', category: 'GRAPHICS DESIGN' },
  { src: '/images/services/our services 4.png', category: 'WEBSITE DESIGN & DEVELOPMENT' },
  { src: '/images/services/our services 5.png', category: 'GRAPHICS DESIGN' },
  { src: '/images/services/our services 6.png', category: 'WEBSITE DESIGN & DEVELOPMENT' },
  { src: '/images/services/our services 1.png', category: 'SEO' },
  { src: '/images/services/our services 2.png', category: 'SEO' },
  { src: '/images/services/our services 3.png', category: 'GRAPHICS DESIGN' },
];

export default function OurServices() {
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredServices = activeCategory === 'ALL' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    // Matching the exact container width and background of AboutUs
    <section className="w-full bg-zinc-950 py-20 px-6 font-sans">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-50 tracking-tight">
            আমাদের সফল সার্ভিস সমূহ
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Filter Navigation */}
        <div className="flex justify-center flex-wrap gap-6 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-semibold tracking-widest transition-all uppercase pb-2 ${
                activeCategory === cat 
                ? 'text-blue-500 border-b-2 border-blue-500' 
                : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-zinc-900 p-2 border border-zinc-800 rounded-none overflow-hidden hover:border-zinc-600 transition-all group"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={service.src}
                  alt={`Service ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <a
            href="/services"
            className="h-12 flex items-center justify-center bg-blue-700 hover:bg-blue-800 text-white px-10 rounded-none font-semibold transition-colors shadow-lg min-w-[200px]"
          >
            সবগুলো দেখুন
          </a>
        </div>
      </div>
    </section>
  );
}