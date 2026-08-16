import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2, Shield, Search, Smartphone } from 'lucide-react';
import Image from 'next/image';
import localFont from 'next/font/local';

const kalpana = localFont({
    src: '../../../public/fonts/Kalpana UNICODE.ttf',
    display: 'swap',
});

const EcommerceWebsitePage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-6">
                        <h1 className={`text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-blue-600 ${kalpana.className}`}>
                            আপনার ব্যবসার  Online সমাধান আমাদের  High Tech E-Commerce
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Soft Expert Zone Ltd. E-Commerce Website বাংলাদেশের Online উদ্যোক্তা, রিটেইল ব্যবসা ও ব্র্যান্ডের জন্য সম্পূর্ণ Digital সমাধান। প্রোডাক্ট লিস্টিং, কার্ট, অর্ডার, পেমেন্ট ও Customer Management সব এক Platform-এ পরিচালনা করুন।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            এই E-Commerce Website Design স্থানীয় বাজারের বাস্তব চাহিদা অনুযায়ী তৈরি। Conversion-Focused Layout, নিরাপদ Payment System ও দ্রুত Performance-এর মাধ্যমে বিক্রি বাড়ে। একটি Ready-to-Use E Commerce Website Template হিসেবে এটি ছোট Online Shop থেকে বড় Best E Commerce Website পর্যন্ত সহজেই Scale করা যায়।
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/portfolio" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                ডেমো দেখুন
                            </Link>
                            <a
                                className="flex h-12 items-center justify-center rounded-none border border-white/40 bg-white/10 backdrop-blur-sm px-8 font-semibold text-white shadow-sm transition-all hover:bg-white/20 hover:border-white/70 min-w-[180px]"
                                href="tel:+8801722447755"
                            >
                                +8801722447755
                            </a>
                        </div>
                    </div>
                    
                    {/* YouTube Video Section */}
                    <div className="flex-1 w-full mt-8 md:mt-0">
                        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                            <iframe 
                                className="absolute top-0 left-0 w-full h-full" 
                                src="https://www.youtube.com/embed/u5taZdVIHeA" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">অনলাইন ব্যবসায় যেসব সমস্যা প্রতিদিন হয়</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            প্রোডাক্ট আপডেট, অর্ডার Tracking, Payment Confirmation ও Customer Management আলাদাভাবে করতে গিয়ে সময় নষ্ট হয়, ভুল বাড়ে এবং Customer অভিজ্ঞতা নষ্ট হয়। Facebook-এ Message নিয়ে বিক্রি করা, bKash-এ পেমেন্ট নেওয়া ও Excel-এ Stock রাখা দিন দিন কঠিন হয়ে পড়ে।
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            আমাদের Bangladesh E Commerce Website এই সমস্যাগুলোর একটাই সমাধান দেয়। প্রোডাক্ট লিস্টিং, অর্ডার, পেমেন্ট ও রিপোর্টিং সবকিছু এক জায়গা থেকে Automated-ভাবে পরিচালনা করুন। ব্যবসা হয় সংগঠিত, দ্রুত ও লাভজনক।
                        </p>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">এই E-commerce Website কাদের জন্য উপযুক্ত?</h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>আমাদের <strong>E-Commerce Website in Bangladesh</strong> ছোট থেকে বড় সব ধরনের Online ব্যবসার জন্য উপযুক্ত।</p>
                            <p><strong>Online Shop-এ:</strong> প্রোডাক্ট Catalog, অর্ডার ও Customer Management এক Platform-এ সহজে পরিচালনা করুন।</p>
                            <p><strong>Brand ও D2C ব্যবসায়:</strong> এই Best E Commerce Website ব্র্যান্ডগুলোর জন্য একটি শক্তিশালী Online Sales Channel তৈরি করে।</p>
                            <p><strong>Retail ব্যবসায়:</strong> Offline থেকে Online-এ আসতে চান? দ্রুত Digital Store তৈরি করে যেকোনো সময় যেকোনো জায়গা থেকে বিক্রি শুরু করুন।</p>
                            <p><strong>Startup ও বড় Company-তে:</strong> ব্যবসা ছোট হোক বা বড়, এই সিস্টেম সম্পূর্ণ Scalable ও Customizable।</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suitability Cards */}
            <section className="py-12 bg-blue-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "অনলাইন শপ", desc: "এই E-commerce Website ব্যবহার করে প্রোডাক্ট ক্যাটালগ, অর্ডার এবং কাস্টমার ম্যানেজমেন্ট এক প্ল্যাটফর্মে সহজে পরিচালনা করা যায়।" },
                        { title: "ব্র্যান্ড ও ডাইরেক্ট-টু-কাস্টমার (D2C)", desc: "এই Best E-commerce Website ব্র্যান্ডগুলোর জন্য একটি শক্তিশালী অনলাইন সেলস চ্যানেল তৈরি করে।" },
                        { title: "রিটেইল ব্যবসা", desc: "যেসব রিটেইল ব্যবসা অফলাইন থেকে অনলাইনে যেতে চায়, তাদের জন্য এটি একটি সহজ ও কার্যকর সমাধান।" },
                        { title: "স্টার্টআপ ও বড় কোম্পানি", desc: "ব্যবসা ছোট হোক বা বড়, এই সিস্টেমটি সম্পূর্ণ স্কেলযোগ্য ও কাস্টমাইজেবল।" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-600">
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-16 px-4 md:px-8 bg-white border-t border-gray-100">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">প্রযুক্তির মাধ্যমে শক্তিশালী সমাধান</h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
                        আমাদের ই-কমার্স প্ল্যাটফর্মটি অত্যাধুনিক প্রযুক্তির উপর ভিত্তি করে তৈরি, যা নিশ্চিত করে সর্বোচ্চ নিরাপত্তা, দ্রুত পারফরম্যান্স এবং চমৎকার ইউজার এক্সপেরিয়েন্স।
                    </p>
                    <div className="flex flex-wrap justify-center gap-10 md:gap-16">
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-green-100 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl font-bold text-green-600">Node.js</span>
                            </div>
                            <h3 className="text-gray-800 font-semibold">Backend</h3>
                        </div>
                        
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-24 bg-black rounded-full flex items-center justify-center mb-4 shadow-sm border border-gray-800 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl font-bold text-white">Next.js</span>
                            </div>
                            <h3 className="text-gray-800 font-semibold">Frontend</h3>
                        </div>
                        
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-blue-100 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-sm font-bold text-blue-600">PostgreSQL</span>
                            </div>
                            <h3 className="text-gray-800 font-semibold">Database</h3>
                        </div>
                        
                        <div className="flex flex-col items-center group">
                            <div className="w-24 h-24 bg-cyan-50 rounded-full flex items-center justify-center mb-4 shadow-sm border border-cyan-100 group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl font-bold text-cyan-600">Tailwind</span>
                            </div>
                            <h3 className="text-gray-800 font-semibold">Styling</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">E-Commerce Website Design-এর মূল Features</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "সম্পূর্ণ ডাইনামিক ই-কমার্স সিস্টেম", desc: "ক্যাটাগরি ভিত্তিক প্রোডাক্ট লিস্টিং, উন্নত সার্চ অপশন এবং সহজ ফিল্টার সিস্টেমের মাধ্যমে কাস্টমার খুব দ্রুত পছন্দের পণ্য খুঁজে নিতে পারে।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/business-website.svg" },
                            { title: "অ্যাড-টু-কার্ট ও কার্ট ম্যানেজমেন্ট", desc: "কাস্টমার সহজেই কার্টে পণ্য যোগ বা কমাতে পারে, কার্ট রিভিউ দেখতে পারে এবং ঝামেলামুক্তভাবে চেকআউট সম্পন্ন করতে পারে।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/ecommerce-website.svg" },
                            { title: "ইউজার রেজিস্ট্রেশন ও লগইন", desc: "কাস্টমার নিজের একাউন্ট তৈরি করে লগইন করতে পারে, ব্যক্তিগত ড্যাশবোর্ড থেকে অর্ডার হিস্ট্রি ও অর্ডার স্ট্যাটাস দেখতে পারে।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/newspaper-website.svg" },
                            { title: "অর্ডার ম্যানেজমেন্ট ও ট্র্যাকিং", desc: "অর্ডারের বর্তমান স্ট্যাটাস আপডেট, অর্ডার প্রসেসিং এবং ইনভয়েস জেনারেশন সহজভাবে ম্যানেজ করা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/education-website.svg" },
                            { title: "অ্যাডমিন ড্যাশবোর্ড", desc: "অ্যাডমিন এক জায়গা থেকেই প্রোডাক্ট, কাস্টমার, অর্ডার এবং ইনভেন্টরি সম্পূর্ণভাবে কন্ট্রোল করতে পারেন।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/healthcare-website.svg" },
                            { title: "রিয়েল-টাইম ডেটা আপডেট", desc: "সব বিক্রয়, অর্ডার ও স্টক সংক্রান্ত তথ্য লাইভ আপডেট হয়, ফলে সবসময় সঠিক ডেটা দেখা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/restaurant-website.svg" },
                            { title: "পেমেন্ট মডিউল", desc: "বিভিন্ন পেমেন্ট অপশনের মাধ্যমে লেনদেন সম্পন্ন হয় এবং সব পেমেন্ট ও ট্রানজ্যাকশন হিস্ট্রি এক জায়গায় সংরক্ষিত থাকে।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/personal-website.svg" },
                            { title: "রেসপন্সিভ ডিজাইন", desc: "ওয়েবসাইটটি মোবাইল, ট্যাবলেট ও ডেস্কটপ সব ডিভাইসে সুন্দরভাবে কাজ করে এবং ইউজারদের জন্য স্মুথ অভিজ্ঞতা নিশ্চিত করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/custom-website.svg" },
                            { title: "Fraud Checking", desc: "নিরাপদ লেনদেন নিশ্চিত করতে স্বয়ংক্রিয় ফ্রড ডিটেকশন ও প্রিভেনশন সিস্টেম।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/business-website.svg" },
                            { title: "Courier Integration", desc: "জনপ্রিয় কুরিয়ার সার্ভিসের সাথে এপিআই ইন্টিগ্রেশন, ফলে সরাসরি প্যানেল থেকেই পার্সেল বুকিং করা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/ecommerce-website.svg" },
                            { title: "Accounts", desc: "আয়-ব্যয়, লাভ-ক্ষতি এবং অন্যান্য আর্থিক হিসাব সহজে পরিচালনা করার জন্য স্বয়ংসম্পূর্ণ একাউন্টিং মডিউল।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/newspaper-website.svg" },
                            { title: "Inventory", desc: "স্টক ম্যানেজমেন্ট, লো স্টক অ্যালার্ট এবং ইনভেন্টরি ট্র্যাকিং সিস্টেম যা আপনার স্টক সম্পর্কে সবসময় আপডেটেড রাখে।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/education-website.svg" },
                            { title: "Banner and Promotion", desc: "ওয়েবসাইটের বিভিন্ন স্থানে প্রমোশনাল ব্যানার এবং অফার সেটআপ করার সহজ উপায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/healthcare-website.svg" },
                            { title: "Reports", desc: "সেলস, কাস্টমার, স্টক এবং অন্যান্য গুরুত্বপূর্ণ মেট্রিক্সের বিস্তারিত রিপোর্ট ও অ্যানালিটিক্স।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/restaurant-website.svg" },
                            { title: "Activity Log", desc: "সিস্টেমে কে কখন কী পরিবর্তন বা আপডেট করেছে তার সম্পূর্ণ ট্র্যাকিং বা অ্যাক্টিভিটি লগ।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/personal-website.svg" },
                            { title: "Pixel Setup", desc: "ফেসবুক পিক্সেল, গুগল অ্যানালিটিক্স এবং অন্যান্য সোশ্যাল মিডিয়া ট্র্যাকিং টুলস সহজে সেটআপ করার সুবিধা।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/custom-website.svg" },
                            { title: "Vendor Management", desc: "একাধিক ভেন্ডর যুক্ত করা এবং তাদের সেলস, প্রোডাক্ট ও কমিশন সহজে ম্যানেজ করার সুবিধা।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/business-website.svg" },
                            { title: "Coupon and Deal", desc: "স্পেশাল অফার, ডিসকাউন্ট এবং কুপন কোড তৈরি করে কাস্টমারদের সহজে আকৃষ্ট করার সিস্টেম।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/ecommerce-website.svg" },
                            { title: "Brand Manage", desc: "ব্র্যান্ড অনুযায়ী প্রোডাক্ট ক্যাটাগরাইজ করা এবং নির্দিষ্ট ব্র্যান্ডের জন্য আলাদা লিস্টিং তৈরি করার সুবিধা।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/newspaper-website.svg" },
                            { title: "Multi Level Category", desc: "প্রোডাক্টগুলোকে প্রধান ক্যাটাগরি, সাব-ক্যাটাগরি এবং চাইল্ড ক্যাটাগরিতে বিভক্ত করার অত্যাধুনিক সিস্টেম।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/education-website.svg" }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className="mb-6 flex justify-center">
                                    <Image src={feat.icon} alt={feat.title} width={64} height={64} className="group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-lg font-bold mb-3 text-gray-800">{feat.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">আপনার ব্যবসার জন্য একটি ওয়েবসাইট তৈরি করার জন্য এখনি যোগাযোগ করুন।</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
                            যোগাযোগ করুন <ArrowRight size={20} />
                        </Link>
                        <a href="tel:+8801722447755" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
                            <Phone size={20} /> +88 01722-447755
                        </a>
                    </div>
                </div>
            </section>

            {/* Dashboard details & Why use */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">রিয়ে-টাইম ড্যাশবোর্ডে কী কী তথ্য এক নজরে দেখা যাবে</h2>

                        <div>
                            <h3 className="text-xl font-bold mb-2">১. প্রোডাক্ট ম্যানেজমেন্ট</h3>
                            <p className="text-gray-600">ড্যাশবোর্ড থেকেই নতুন প্রোডাক্ট যোগ করা, বিদ্যমান প্রোডাক্ট আপডেট করা এবং প্রয়োজন অনুযায়ী প্রোডাক্ট ডিলিট করা খুব সহজভাবে করা যায়।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">২. অর্ডার ম্যানেজমেন্ট</h3>
                            <p className="text-gray-600">সব অর্ডারের স্ট্যাটাস Pending থেকে শুরু করে Processing, Shipped এবং Delivered পর্যন্ত রিয়েল-টাইমে দেখা ও আপডেট করা যায়।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">৩. কাস্টমার ম্যানেজমেন্ট</h3>
                            <p className="text-gray-600">গ্রাহকদের প্রোফাইল, তাদের অর্ডার হিস্ট্রি এবং কেনাকাটার কার্যক্রম এক জায়গা থেকেই সহজে দেখা ও ম্যানেজ করা সম্ভব।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">৪. স্টক ও ইনভেন্টরি কন্ট্রোল</h3>
                            <p className="text-gray-600">প্রতিটি প্রোডাক্টের স্টক রিয়েল-টাইমে ট্র্যাক করা যায় এবং স্টক কমে গেলে অটোমেটিক নোটিফিকেশনের মাধ্যমে আগেই জানা যায়।</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">কেন এই E-commerce Website ব্যবহার করবেন?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><CheckCircle2 size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">রিয়েল-টাইম ডেটা আপডেট</h4>
                                    <p className="text-gray-600 text-sm mt-1">অর্ডার, স্টক এবং কাস্টমার সম্পর্কিত সব তথ্য সঙ্গে সঙ্গে আপডেট হয়। ফলে যেকোনো পরিবর্তন তাৎক্ষণিকভাবে দেখা যায় এবং সিদ্ধান্ত নেওয়া সহজ হয়।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Shield size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">দৃঢ় সিকিউরিটি</h4>
                                    <p className="text-gray-600 text-sm mt-1">JWT ও Session ভিত্তিক নিরাপত্তা ব্যবস্থার কারণে ইউজার ডেটা, অর্ডার তথ্য এবং পেমেন্ট সংক্রান্ত তথ্য সুরক্ষিত থাকে।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Search size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">সহজ ইনভেন্টরি কন্ট্রোল</h4>
                                    <p className="text-gray-600 text-sm mt-1">স্টক সবসময় আপডেট থাকে এবং অটোমেটেড সিস্টেমের কারণে ভুল বা ডুপ্লিকেট এন্ট্রির ঝামেলা থাকে না।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Smartphone size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">মোবাইল ও ডেস্কটপ রেসপন্সিভ</h4>
                                    <p className="text-gray-600 text-sm mt-1">ওয়েবসাইটটি মোবাইল, ট্যাবলেট ও ডেস্কটপ সব ডিভাইসে সমানভাবে স্মুথ পারফরম্যান্স দেয়, ফলে যেকোনো জায়গা থেকে সহজে ব্যবহার করা যায়।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">কিভাবে আমাদের সিস্টেম অনলাইন শপ পরিচালনাকে সহজ করে</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Product & Category Setup", desc: "অ্যাডমিন ড্যাশবোর্ড থেকে প্রোডাক্ট ও ক্যাটাগরি খুব সহজেই সেটআপ, আপডেট বা ম্যানেজ করতে পারেন।" },
                            { step: "02", title: "Customer Browsing & Cart", desc: "গ্রাহকরা ওয়েবসাইটে ঢুকে প্রোডাক্ট ব্রাউজ করেন এবং পছন্দের পণ্য কার্টে যোগ করেন।" },
                            { step: "03", title: "Checkout & Order Placement", desc: "সহজ ও নিরাপদ চেকআউট সিস্টেমের মাধ্যমে গ্রাহক দ্রুত অর্ডার প্লেস করতে পারেন।" },
                            { step: "04", title: "Real-time Order Tracking", desc: "কাস্টমার নিজের অর্ডারের বর্তমান স্ট্যাটাস রিয়েল-টাইমে দেখতে পারেন।" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                                <div className="text-5xl font-black text-gray-100 absolute top-4 right-4">{item.step}</div>
                                <div className="relative z-10 mt-8">
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default EcommerceWebsitePage;
