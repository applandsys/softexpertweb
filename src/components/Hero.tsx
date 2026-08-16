"use client";

import Image from "next/image";
import localFont from 'next/font/local';

const kalpana = localFont({
  src: '../../public/fonts/Kalpana UNICODE.ttf',
  display: 'swap',
});


export default function Hero() {
  return (
    <div className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden font-sans bg-black">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.jpg"
          alt="SoftExpert Background Illustration"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 mx-auto  w-full px-6 py-24 sm:py-32 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-3xl flex flex-col items-center gap-6">
          <h1 className={`text-2xl md:text-2xl  tracking-tight text-white sm:text-4xl lg:text-5xl drop-shadow-md leading-tight ${kalpana.className}`}>
             বিশ্বমানের সফটওয়্যার ডেভেলপমেন্ট  ও আইটি সলুশন
          </h1>

          <p className="max-w-xl text-lg leading-8 text-zinc-300 drop-shadow-sm">
            ওয়েব, মোবাইল, কাস্টম সফটওয়্যার ডেভেলপমেন্ট, অটোমেশন <br /> ও ডিজিটাল সলিউশন প্রোভাইডার
          </p>

          <div className="mt-6 flex flex-row flex-wrap items-center justify-center gap-4 w-full sm:w-auto">
            <a
              className="flex h-12 items-center justify-center rounded-none bg-blue-600 px-8 font-semibold text-white shadow-lg transition-all hover:bg-blue-700 active:scale-[0.98] min-w-[150px]"
              href="/contact-us"
            >
              যোগাযোগ করুন
            </a>

            <a
              className="flex h-12 items-center justify-center rounded-none border border-white/40 bg-white/10 backdrop-blur-sm px-8 font-semibold text-white shadow-sm transition-all hover:bg-white/20 hover:border-white/70 min-w-[180px]"
              href="tel:+8801722447755"
            >
              +8801722447755
            </a>
          </div>
        </div>
      </div>
    </div >
  );
}