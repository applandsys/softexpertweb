'use client';

import React from 'react';
import Image from 'next/image';
// Using require to bypass module compatibility issues in Next.js/Turbopack
const Slider = require('react-slick').default;
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ClientCarousel = () => {
  const partners = ['akig.png', 'bangal.png', 'citygroup.png', 'code-village.png','natural.png', 'pran.png', 'teer.png'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Set to false to match the clean look of your reference
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="w-full py-12 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8 text-gray-800 dark:text-white">Our Clients</h2>
        <Slider {...settings}>
          {partners.map((file, index) => (
            <div key={index} className="px-4">
              <div className="relative h-24 w-full">
                <Image 
                  src={`/images/partner/${file}`} 
                  alt="Client Logo"
                  fill
                  style={{ objectFit: 'contain' }}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ClientCarousel;