"use client";

import { Button } from "@/components/ui/button"
import Image from "next/image";

export default function HeroLanding() {
  return (
      <section className="w-full bg-gray-900 text-white py-20 px-6 font-sans ">

          <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 justify-between items-center px-6">
           <div>
              <h1 className="text-4xl font-bold leading-normal">E-Commerce Website Bangladesh -ই-কমার্স ওয়েবসাইট</h1>
               <div className="my-4">
                   <p className="my-4 tex-xl leading-relaxed">
                       Digital Crop E-Commerce Website বাংলাদেশের Online উদ্যোক্তা, রিটেইল ব্যবসা ও ব্র্যান্ডের জন্য সম্পূর্ণ Digital সমাধান। প্রোডাক্ট লিস্টিং, কার্ট, অর্ডার, পেমেন্ট ও Customer Management সব এক Platform-এ পরিচালনা করুন।

                   </p>
                   <p className="leading-relaxed">
                       এই E-Commerce Website Design স্থানীয় বাজারের বাস্তব চাহিদা অনুযায়ী তৈরি। Conversion-Focused Layout, নিরাপদ Payment System ও দ্রুত Performance-এর মাধ্যমে বিক্রি বাড়ে। একটি Ready-to-Use E Commerce Website Template হিসেবে এটি ছোট Online Shop থেকে বড় Best E Commerce Website পর্যন্ত সহজেই Scale করা যায়। আমাদের Web Design and Development টিম প্রতিটি ব্যবসার চাহিদা বুঝে এটি তৈরি ক
                   </p>
               </div>
               <div className="flex items-center justify-left w-full gap-4">
                   <Button variant="secondary" className="text-lg p-4 font-semibold">ডেমো দেখুন</Button>
                   <Button variant="secondary" className="text-lg p-4 font-semibold">Call +880158888 </Button>
               </div>
           </div>
          <div className="ml-24 text-center">
            <Image src="/images/hero.jpg" width={500} height={500} alt="Hero Image" />
          </div>
        </div>
    </section>
  );
}