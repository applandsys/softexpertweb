import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2, Shield, Search, Smartphone } from 'lucide-react';
import Image from 'next/image';

const InventoryManagementPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Inventory Management System - ইনভেন্টরি ম্যানেজমেন্ট
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            SoftExpert Inventory Management System বাংলাদেশের ব্যবসা প্রতিষ্ঠানের স্টক এবং সাপ্লাই চেইন নিয়ন্ত্রণের জন্য একটি সম্পূর্ণ Digital সমাধান। প্রোডাক্ট ট্র্যাকিং, স্টক লেভেল, পারচেজ ও সেলস হিস্ট্রি এক Platform-এ পরিচালনা করুন।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            এই Inventory Management Software টি স্থানীয় ব্যবসার প্রয়োজন অনুযায়ী তৈরি। রিয়েল-টাইম স্টক আপডেট ও অটোমেটেড অ্যালার্টের মাধ্যমে স্টক আউট বা ওভারস্টক সমস্যা দূর করে ব্যবসায়িক দক্ষতা বাড়ায়। ছোট গোডাউন থেকে শুরু করে বড় ওয়্যারহাউস সব জায়গায় এটি সহজেই ব্যবহার করা যায়।
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                ডেমো দেখুন
                            </Link>
                            <a href="tel:+8801993141214" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors flex items-center gap-2">
                                <Phone size={20} />
                                কল করুন: +88 01993-141214
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">স্টক ম্যানেজমেন্টে যেসব সমস্যা প্রতিদিন হয়</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            খাতায় বা এক্সেলে স্টক হিসাব রাখতে গিয়ে ভুল হওয়া, কোন প্রোডাক্ট স্টক আউট আর কোনটি ওভারস্টক তা বুঝতে না পারা, এবং সাপ্লায়ারদের পেমেন্ট হিসাব ঠিকমতো না থাকার কারণে ব্যবসায়ীদের প্রায়ই ক্ষতির সম্মুখীন হতে হয়। ম্যানুয়াল পদ্ধতিতে ইনভেন্টরি কন্ট্রোল করা দিন দিন কঠিন হয়ে পড়ে।
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            আমাদের Inventory Management System এই সমস্যাগুলোর একটাই সমাধান দেয়। স্টক ইন, স্টক আউট, পারচেজ ও সাপ্লায়ার ম্যানেজমেন্ট সবকিছু এক জায়গা থেকে Automated-ভাবে পরিচালনা করুন। আপনার স্টক ম্যানেজমেন্ট হবে শতভাগ নির্ভুল।
                        </p>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">এই Inventory Software কাদের জন্য উপযুক্ত?</h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>আমাদের <strong>Inventory Management System</strong> ছোট থেকে বড় সব ধরনের ব্যবসার স্টক কন্ট্রোলের জন্য উপযুক্ত।</p>
                            <p><strong>রিটেইল শপ ও সুপারশপ:</strong> হাজার হাজার প্রোডাক্টের স্টক খুব সহজেই রিয়েল-টাইমে ট্র্যাক করুন।</p>
                            <p><strong>হোলসেল ব্যবসা:</strong> সাপ্লায়ার ও কাস্টমারদের বিশাল অর্ডার এবং পেমেন্ট এক Platform-এ পরিচালনা করুন।</p>
                            <p><strong>ম্যানুফ্যাকচারিং কোম্পানি:</strong> কাঁচামাল থেকে শুরু করে ফিনিশড প্রোডাক্টের সম্পূর্ণ স্টক নির্ভুলভাবে হিসাব রাখুন।</p>
                            <p><strong>ওয়্যারহাউস ম্যানেজমেন্ট:</strong> একাধিক গোডাউন বা ব্রাঞ্চের স্টক একসাথে সেন্ট্রালি মনিটর ও ম্যানেজ করুন।</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suitability Cards */}
            <section className="py-12 bg-blue-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "সুপারশপ ও রিটেইল", desc: "হাজারো পণ্যের ইনভেন্টরি, বারকোড স্ক্যানিং এবং স্টক লেভেল অ্যালার্টের মাধ্যমে সহজে ম্যানেজ করুন।" },
                        { title: "হোলসেল ও ডিস্ট্রিবিউশন", desc: "বাল্ক অর্ডার ম্যানেজমেন্ট এবং ডিলারদের সাপ্লাই চেইন ট্র্যাক করার জন্য একটি কার্যকর সমাধান।" },
                        { title: "ম্যানুফ্যাকচারিং", desc: "র-ম্যাটেরিয়াল থেকে ফাইনাল প্রোডাক্ট তৈরি পর্যন্ত প্রতিটি ধাপে স্টকের হিসাব রাখুন।" },
                        { title: "মাল্টি-ব্রাঞ্চ ওয়্যারহাউস", desc: "বিভিন্ন লোকেশনে থাকা একাধিক গোডাউনের স্টক এক জায়গা থেকে সেন্ট্রালি নিয়ন্ত্রণ করুন।" }
                    ].map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border-t-4 border-blue-600">
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Inventory Management-এর মূল Features</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "রিয়েল-টাইম স্টক ট্র্যাকিং", desc: "প্রতিটি সেল ও পারচেজের সাথে সাথে স্টক অটোমেটিকভাবে আপডেট হয়, ফলে সব সময় সঠিক স্টক দেখা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/business-website.svg" },
                            { title: "বারকোড ও স্ক্যানিং সাপোর্ট", desc: "বারকোড স্ক্যান করে দ্রুত প্রোডাক্ট এন্ট্রি এবং সেল করার সুবিধা, যা সময় বাঁচায় ও ভুল কমায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/ecommerce-website.svg" },
                            { title: "লো-স্টক অ্যালার্ট", desc: "কোনো প্রোডাক্টের স্টক কমে গেলে সিস্টেম স্বয়ংক্রিয়ভাবে অ্যালার্ট দেয়, ফলে স্টক আউটের ঝুঁকি থাকে না।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/newspaper-website.svg" },
                            { title: "মাল্টি-ওয়্যারহাউস সাপোর্ট", desc: "একাধিক ব্রাঞ্চ বা গোডাউন থাকলে সবগুলোর স্টক এক জায়গা থেকে দেখা এবং ট্রান্সফার করা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/education-website.svg" },
                            { title: "সাপ্লায়ার ও পারচেজ ম্যানেজমেন্ট", desc: "সাপ্লায়ারদের তথ্য, বাকি পেমেন্ট এবং পারচেজ হিস্ট্রি খুব সুন্দরভাবে রেকর্ড করা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/healthcare-website.svg" },
                            { title: "রিপোর্টিং ও অ্যানালাইসিস", desc: "দৈনিক, সাপ্তাহিক বা মাসিক সেলস ও স্টকের বিস্তারিত রিপোর্ট এক ক্লিকেই জেনারেট করা সম্ভব।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/restaurant-website.svg" },
                            { title: "ডেটা সিকিউরিটি", desc: "আপনার ব্যবসায়িক ডেটা শতভাগ সুরক্ষিত থাকে এবং রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোলের মাধ্যমে স্টাফদের নিয়ন্ত্রণ করা যায়।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/personal-website.svg" },
                            { title: "অ্যাডভান্সড সার্চ ও ফিল্টার", desc: "যেকোনো প্রোডাক্ট ক্যাটাগরি, ব্র্যান্ড বা নামের মাধ্যমে খুব সহজেই খুঁজে বের করার সুবিধা।", icon: "https://digital-crop.com/wp-content/uploads/2024/05/custom-website.svg" }
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
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">আপনার ব্যবসার স্টক নির্ভুলভাবে পরিচালনা করতে আজই যোগাযোগ করুন।</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="#contact" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
                            যোগাযোগ করুন <ArrowRight size={20} />
                        </Link>
                        <a href="tel:+8801993141214" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
                            <Phone size={20} /> +88 01993-141214
                        </a>
                    </div>
                </div>
            </section>

            {/* Dashboard details & Why use */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">রিয়েল-টাইম ড্যাশবোর্ডে কী কী তথ্য এক নজরে দেখা যাবে</h2>
                        
                        <div>
                            <h3 className="text-xl font-bold mb-2">১. কারেন্ট স্টক সামারি</h3>
                            <p className="text-gray-600">ড্যাশবোর্ডেই দেখা যাবে বর্তমানে কোন প্রোডাক্ট কত পিস স্টক আছে এবং মোট ইনভেন্টরির ভ্যালু কত।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">২. সেলস ও পারচেজ হিস্ট্রি</h3>
                            <p className="text-gray-600">আজকের দিনে কত টাকার প্রোডাক্ট সেল হয়েছে এবং কত টাকার প্রোডাক্ট নতুন কেনা হয়েছে তার হিসাব।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">৩. লো-স্টক ওয়ার্নিং</h3>
                            <p className="text-gray-600">কোন প্রোডাক্টগুলোর স্টক শেষ হয়ে আসছে তার একটি তালিকা ড্যাশবোর্ডে লাল রঙে হাইলাইট করা থাকবে।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">৪. টপ সেলিং প্রোডাক্ট</h3>
                            <p className="text-gray-600">সবচেয়ে বেশি বিক্রি হওয়া প্রোডাক্টগুলোর তালিকা, যা আপনাকে পরবর্তী পারচেজ ডিসিশন নিতে সাহায্য করবে।</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">কেন এই Inventory Software ব্যবহার করবেন?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><CheckCircle2 size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">শতভাগ নির্ভুল হিসাব</h4>
                                    <p className="text-gray-600 text-sm mt-1">ম্যানুয়াল খাতার বদলে সফটওয়্যারে হিসাব রাখলে কোনো ভুল হওয়ার সম্ভাবনা থাকে না, স্টক সবসময় সঠিক থাকে।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Shield size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">ডেটা চুরি বা হারানোর ভয় নেই</h4>
                                    <p className="text-gray-600 text-sm mt-1">ক্লাউড-বেজড সিস্টেম হওয়ার কারণে আপনার ব্যবসার সব ডেটা সুরক্ষিত থাকে এবং যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Search size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">সময় ও শ্রমের সাশ্রয়</h4>
                                    <p className="text-gray-600 text-sm mt-1">অটোমেটেড সিস্টেমের কারণে স্টক মেলাতে বা রিপোর্ট তৈরি করতে ঘণ্টার পর ঘণ্টা সময় নষ্ট করতে হয় না।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Smartphone size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">যেকোনো ডিভাইস থেকে ব্যবহার</h4>
                                    <p className="text-gray-600 text-sm mt-1">কম্পিউটার, ট্যাবলেট বা মোবাইল—যেকোনো ডিভাইস দিয়ে আপনি খুব সহজেই আপনার স্টক মনিটর করতে পারবেন।</p>
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
                        <h2 className="text-3xl font-bold text-gray-900">কিভাবে আমাদের সিস্টেম স্টক পরিচালনাকে সহজ করে</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Product Entry", desc: "প্রথমে আপনার সব প্রোডাক্ট বারকোড সহ সিস্টেমে এন্ট্রি করুন এবং প্রাথমিক স্টক সেটআপ করুন।" },
                            { step: "02", title: "Purchase Management", desc: "সাপ্লায়ারের কাছ থেকে নতুন পণ্য কিনলে তা পারচেজ অর্ডারের মাধ্যমে স্টকে যোগ করুন।" },
                            { step: "03", title: "Sales & Dispatch", desc: "কাস্টমারকে পণ্য বিক্রি করলে তা সাথে সাথেই ইনভয়েসের মাধ্যমে স্টক থেকে মাইনাস হয়ে যাবে।" },
                            { step: "04", title: "Monitor Reports", desc: "যেকোনো সময় ড্যাশবোর্ড বা রিপোর্ট সেকশন থেকে আপনার বর্তমান স্টক লেভেল মনিটর করুন।" }
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

export default InventoryManagementPage;
