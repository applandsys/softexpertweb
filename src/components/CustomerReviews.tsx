'use client';

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  { name: "BCS কনফার্ম", role: "owner", text: "বগুড়ার মধ্যে বেস্ট কোয়ালিটির বুস্টিং সার্ভিস আমার মনে হয়। সবচেয়ে বড় কথা সুখে দুঃখে এর ওনার লাভলু ভাইকে আমি পাশে পাই।", avatar: "B" },
  { name: "Wood plan", role: "owner", text: "Good marketing strategy and friendly behavior. Promotion and sales of my business has helped a lot.", avatar: "W" },
  { name: "Tuki Taki", role: "Owner", text: "Digital Crop বন্ধু সুলভ ও সুদক্ষ মার্কেটিং কৌশল আমার পেজ এর জন্য সহায়ক হয়েছে।", avatar: "T" },
  { name: "Tech Solutions", role: "Manager", text: "Excellent services and very professional team. Highly recommended for any business.", avatar: "T" },
];

export default function CustomerReviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    // Matches AboutUs: w-full, vertical padding, and dark mode background
    <section className="w-full bg-gray-50 py-20 px-6 dark:bg-zinc-950">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Heading - Centered to match your design */}
        <div className="text-center mb-16">
          <p className="text-blue-700 dark:text-blue-500 font-bold tracking-widest text-sm mb-2">▲ কাস্টমার রিভিউ</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
            আমাদের সম্পর্কে কাস্টমাররা যা বলছে
          </h2>
        </div>
        
        {/* Carousel - Container width is managed by max-w-7xl above */}
        <div className="w-full">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <div className="bg-white dark:bg-zinc-900 p-8 rounded-none shadow-sm border border-gray-100 dark:border-zinc-800 text-left h-[300px] flex flex-col justify-between">
                  
                  <p className="text-gray-600 dark:text-zinc-400 mb-8 leading-relaxed italic text-sm sm:text-base">
                    {review.text}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center font-bold text-blue-700 dark:text-blue-400">
                        {review.avatar}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-zinc-50">{review.name}</h4>
                        <p className="text-sm text-gray-500 dark:text-zinc-400">{review.role}</p>
                      </div>
                    </div>
                    <span className="text-4xl text-blue-700 dark:text-blue-500/50">❝</span>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}