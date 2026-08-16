import React from 'react';

export default function CallToAction() {
  return (
    // py-[56px] provides the 20px increase in vertical spacing
    <section className="w-full bg-gradient-to-r from-[#123D85] to-[#1A70C0] py-[56px] px-6">
      <div className="max-w-[1344px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Text Section */}
        <div className="text-white">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight">
            আপনার প্রজেক্ট সম্পর্কে আলোচনা করতে<br />
            আমাদের সাথে যোগাযোগ করুন
          </h2>
        </div>

        {/* Action Group: items-center ensures perfect vertical alignment */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          
          {/* Button */}
          <a
            href="#contact"
            className="flex items-center gap-2 bg-white text-[#123D85] px-8 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            যোগাযোগ করুন →
          </a>

          {/* Phone Number */}
          <a
            href="tel:+8801722447755"
            className="text-white font-bold text-lg flex flex-col items-center gap-1 group"
          >
            <span>+88 01722447755 🎧</span>
            {/* Lighter Underline */}
            <span className="w-full h-[1px] bg-white/40 group-hover:bg-white/70 transition-colors"></span>
          </a>
        </div>
      </div>
    </section>
  );
}