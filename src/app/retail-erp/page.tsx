import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2, Shield, Search, Smartphone } from 'lucide-react';
import Image from 'next/image';

const RetailERPPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Hero Section */}
            <section className="bg-gray-50 py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 items-center">
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Retail ERP System - রিটেইল ইআরপি
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Soft Expert Zone Ltd. Retail ERP System বাংলাদেশের রিটেইল ব্যবসার জন্য একটি সম্পূর্ণ Digital সমাধান। সেলস, বিলিং, কাস্টমার, স্টক ও একাউন্টিং সব এক Platform-এ পরিচালনা করুন।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            এই Retail ERP Software টি সুপারশপ, ফার্মেসি, রেস্টুরেন্ট এবং অন্যান্য রিটেইল ব্যবসার প্রয়োজন অনুযায়ী তৈরি। রিয়েল-টাইম বিলিং, অটোমেটেড স্টক আপডেট ও রিপোর্টিংয়ের মাধ্যমে ব্যবসায়িক দক্ষতা বাড়ায়। ছোট দোকান থেকে শুরু করে বড় চেইন শপ সব জায়গায় এটি সহজেই ব্যবহার করা যায়।
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                ডেমো দেখুন
                            </Link>
                            <a href="tel:+8801722447755" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors flex items-center gap-2">
                                <Phone size={20} />
                                কল করুন: +88 01722-447755
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Problems Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto space-y-8">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">রিটেইল ব্যবসায় যেসব সমস্যা প্রতিদিন হয়</h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-4">
                            খাতায় বা এক্সেলে হিসাব রাখতে গিয়ে ভুল হওয়া, সেলস ও স্টকের সঠিক হিসাব না থাকা, এবং কাস্টমার ও সাপ্লায়ারদের পেমেন্ট হিসাব ঠিকমতো না থাকার কারণে ব্যবসায়ীদের প্রায়ই ক্ষতির সম্মুখীন হতে হয়। ম্যানুয়াল পদ্ধতিতে রিটেইল ম্যানেজমেন্ট করা দিন দিন কঠিন হয়ে পড়ে।
                        </p>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            আমাদের Retail ERP System এই সমস্যাগুলোর একটাই সমাধান দেয়। সেলস, বিলিং (POS), স্টক, পারচেজ ও সাপ্লায়ার ম্যানেজমেন্ট সবকিছু এক জায়গা থেকে Automated-ভাবে পরিচালনা করুন। আপনার ব্যবসার হিসাব হবে শতভাগ নির্ভুল।
                        </p>
                    </div>

                    <div className="pt-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">এই Retail ERP কাদের জন্য উপযুক্ত?</h2>
                        <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                            <p>আমাদের <strong>Retail ERP System</strong> ছোট থেকে বড় সব ধরনের ব্যবসার জন্য উপযুক্ত।</p>
                            <p><strong>সুপারশপ ও রিটেইল শপ:</strong> দ্রুত বিলিং, বারকোড স্ক্যানিং এবং স্টক সহজে পরিচালনা করুন।</p>
                            <p><strong>ফার্মেসি ও ঔষধের দোকান:</strong> ঔষধের এক্সপায়ারি ডেট ট্র্যাকিং ও দ্রুত সেলস প্যানেল।</p>
                            <p><strong>রেস্টুরেন্ট ও ক্যাফে:</strong> টেবিল ম্যানেজমেন্ট, কিচেন ডিসপ্লে এবং ফাস্ট বিলিং।</p>
                            <p><strong>গার্মেন্টস ও ফ্যাশন শপ:</strong> সাইজ ও কালার ভিত্তিক প্রোডাক্ট এবং কাস্টমার ম্যানেজমেন্ট।</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Suitability Cards */}
            <section className="py-12 bg-blue-50 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { title: "সুপারশপ ও রিটেইল", desc: "হাজারো পণ্যের ইনভেন্টরি, বারকোড স্ক্যানিং এবং ফাস্ট বিলিং (POS) এর মাধ্যমে সহজে ম্যানেজ করুন।" },
                        { title: "ফার্মেসি", desc: "ঔষধের স্টক, ব্যাচ নম্বর ও এক্সপায়ারি ডেট ট্র্যাকিং এর জন্য একটি কার্যকর সমাধান।" },
                        { title: "রেস্টুরেন্ট ও ক্যাফে", desc: "অর্ডার, টেবিল, কিচেন এবং পেমেন্ট ম্যানেজমেন্ট সবকিছু এক সিস্টেমে।" },
                        { title: "ফ্যাশন ও লাইফস্টাইল", desc: "সাইজ, কালার এবং ক্যাটাগরি অনুযায়ী প্রোডাক্ট লিস্টিং ও সেলস কন্ট্রোল করুন।" }
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
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Retail ERP-এর মূল Features</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "POS ও ফাস্ট বিলিং", desc: "বারকোড স্ক্যান করে খুব দ্রুত ইনভয়েস তৈরি করার সুবিধা, যা কাস্টমারের সময় বাঁচায়।" },
                            { title: "স্টক ম্যানেজমেন্ট", desc: "প্রতিটি সেল ও পারচেজের সাথে সাথে স্টক অটোমেটিকভাবে আপডেট হয়।" },
                            { title: "কাস্টমার ম্যানেজমেন্ট", desc: "কাস্টমারদের ডাটাবেজ, লয়ালটি পয়েন্ট এবং ডিউ পেমেন্ট সুন্দরভাবে রেকর্ড করুন।" },
                            { title: "মাল্টি-ব্রাঞ্চ সাপোর্ট", desc: "একাধিক ব্রাঞ্চ বা দোকান থাকলে সবগুলোর সেলস ও স্টক এক জায়গা থেকে দেখা যায়।" },
                            { title: "সাপ্লায়ার ও পারচেজ", desc: "সাপ্লায়ারদের তথ্য, বাকি পেমেন্ট এবং পারচেজ হিস্ট্রি খুব সুন্দরভাবে রেকর্ড করা যায়।" },
                            { title: "একাউন্টিং ও রিপোর্টস", desc: "দৈনিক, সাপ্তাহিক বা মাসিক আয়-ব্যয় ও লাভ-ক্ষতির বিস্তারিত রিপোর্ট।" },
                            { title: "ডেটা সিকিউরিটি", desc: "আপনার ডেটা শতভাগ সুরক্ষিত থাকে এবং রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোলের মাধ্যমে স্টাফদের নিয়ন্ত্রণ করা যায়।" },
                            { title: "ইউজার ফ্রেন্ডলি ড্যাশবোর্ড", desc: "সহজ ও সুন্দর ইন্টারফেস, যা যেকোনো সাধারণ মানুষ খুব সহজেই চালাতে পারবে।" }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className="mb-6 flex justify-center">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <CheckCircle2 className="text-blue-600" size={32} />
                                    </div>
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
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">আপনার রিটেইল ব্যবসার ডিজিটাল সমাধানে আজই যোগাযোগ করুন।</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact-us" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">রিয়েল-টাইম ড্যাশবোর্ডে কী কী তথ্য এক নজরে দেখা যাবে</h2>
                        
                        <div>
                            <h3 className="text-xl font-bold mb-2">১. টুডে সেলস ও কালেকশন</h3>
                            <p className="text-gray-600">ড্যাশবোর্ডেই দেখা যাবে আজকের দিনে মোট কত টাকার সেল হয়েছে এবং কত টাকা কালেকশন হয়েছে।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">২. কারেন্ট স্টক সামারি</h3>
                            <p className="text-gray-600">বর্তমানে কোন প্রোডাক্ট কত পিস স্টক আছে এবং মোট ইনভেন্টরির ভ্যালু কত তা জানা যাবে।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">৩. লো-স্টক ওয়ার্নিং</h3>
                            <p className="text-gray-600">কোন প্রোডাক্টগুলোর স্টক শেষ হয়ে আসছে তার একটি তালিকা ড্যাশবোর্ডে হাইলাইট করা থাকবে।</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">৪. টপ সেলিং প্রোডাক্ট ও কাস্টমার</h3>
                            <p className="text-gray-600">সবচেয়ে বেশি বিক্রি হওয়া প্রোডাক্ট এবং সেরা কাস্টমারদের তালিকা।</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">কেন এই Retail ERP ব্যবহার করবেন?</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><CheckCircle2 size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">শতভাগ নির্ভুল হিসাব</h4>
                                    <p className="text-gray-600 text-sm mt-1">ম্যানুয়াল খাতার বদলে সফটওয়্যারে হিসাব রাখলে কোনো ভুল হওয়ার সম্ভাবনা থাকে না, সেলস ও একাউন্টিং সবসময় সঠিক থাকে।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Shield size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">ডেটা চুরি বা হারানোর ভয় নেই</h4>
                                    <p className="text-gray-600 text-sm mt-1">সিস্টেম নিরাপদ হওয়ার কারণে আপনার ব্যবসার সব ডেটা সুরক্ষিত থাকে এবং যেকোনো জায়গা থেকে অ্যাক্সেস করা যায়।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Search size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">সময় ও শ্রমের সাশ্রয়</h4>
                                    <p className="text-gray-600 text-sm mt-1">অটোমেটেড সিস্টেমের কারণে হিসাব মেলাতে বা রিপোর্ট তৈরি করতে ঘণ্টার পর ঘণ্টা সময় নষ্ট করতে হয় না।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Smartphone size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">যেকোনো ডিভাইস থেকে ব্যবহার</h4>
                                    <p className="text-gray-600 text-sm mt-1">কম্পিউটার, ল্যাপটপ বা পিওএস মেশিন—যেকোনো ডিভাইস দিয়ে আপনি খুব সহজেই আপনার ব্যবসা মনিটর করতে পারবেন।</p>
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
                        <h2 className="text-3xl font-bold text-gray-900">কিভাবে আমাদের সিস্টেম আপনার ব্যবসাকে সহজ করে</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Product Entry", desc: "প্রথমে আপনার সব প্রোডাক্ট বারকোড সহ সিস্টেমে এন্ট্রি করুন এবং সেলস প্রাইস সেট করুন।" },
                            { step: "02", title: "Quick Billing (POS)", desc: "কাস্টমার আসলে বারকোড স্ক্যান করে খুব দ্রুত ইনভয়েস প্রিন্ট করে দিন।" },
                            { step: "03", title: "Auto Stock & Accounts", desc: "বিক্রির সাথে সাথেই স্টক কমে যাবে এবং ক্যাশ বা ব্যাংক একাউন্টে টাকা যোগ হবে।" },
                            { step: "04", title: "Monitor Reports", desc: "দিনশেষে ড্যাশবোর্ড বা রিপোর্ট থেকে মোট সেলস, স্টক ও লাভ-ক্ষতির হিসাব দেখুন।" }
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

export default RetailERPPage;
