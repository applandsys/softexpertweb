import React from 'react';
import Link from 'next/link';
import { Phone, BookOpen, ShoppingBag, Home, Plane, User, Coffee, Monitor, CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';

const LandingPageService = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Landing Page Service</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            আপনার ব্যবসার জন্য Best <span className="text-teal-500">Landing Page Design Service</span> In Bangladesh
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আপনার ওয়েবসাইটটি প্রথম দর্শনেই কাস্টমারদের মন জয় করতে হলে দরকার হয় একটি প্রফেশনাল ও আকর্ষণীয় Landing Page। আমরা তৈরি করি কাস্টম ডিজাইন যেটা শুধু দেখতে ভালো নয়, বরং কনভার্সন-ফোকাসড, যা লিড ও সেলস দুই-ই বাড়াতে সাহায্য করে। প্রতিটি ডিজাইনে থাকে আপনার ব্র্যান্ডের সঠিক পরিচিতি, আধুনিক UI/UX অপটিমাইজেশন এবং মোবাইল ফ্রেন্ডলি ভিজ্যুয়াল ফ্লো।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আপনার ব্যবসার গতি কয়েকগুণ বাড়াতে এবং অনলাইন উপস্থিতিকে নতুন মাত্রায় নিয়ে যেতে, একটি প্রফেশনাল ল্যান্ডিং পেজ হতে পারে আপনার ডিজিটাল সাফল্যের প্রথম ধাপ। অর্ডার করতে আজই যোগাযোগ করুন আমাদের সাথে।
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                যোগাযোগ করুন
                            </Link>
                            <a href="tel:+8801837664478" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors flex items-center gap-2">
                                <Phone size={20} />
                                +8801837664478
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2025/09/Untitled-design11.png" 
                            alt="Landing Page Design Service" 
                            width={525} 
                            height={350} 
                            className="w-full max-w-lg mx-auto drop-shadow-xl rounded-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 md:order-2 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                            সফল অনলাইন ব্যবসার শুরু একটি Professional Landing Page দিয়ে
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            আজকের প্রতিযোগিতামূলক ডিজিটাল বাজারে শুধু একটা ওয়েবসাইট থাকলেই আপনার ব্যবসা সফল হবে এমনটা ভাবা ভুল! আজকাল মানুষ অনলাইনে খুব দ্রুত সিদ্ধান্ত নেয়। আপনার ওয়েবসাইটে ভিজিট করতে এসে কাস্টমার যদি বুঝতেই না পারে কোনটা তার প্রয়োজন এবং কীভাবে তা অর্ডার করতে হবে তাহলে সেলস তো দূর কাস্টমার আপনার ব্রান্ড সম্পর্কে একটি খারাপ ধারণা নিয়ে চলে যাবে।
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            সেক্ষেত্রে একটি আকর্ষণীয় ও প্রফেশনাল মানের Landing Page হতে পারে আপনার জন্য সঠিক সমাধান। একটি পেজেই সাজানো গোছানো থাকবে আপনার প্রোডাক্ট ও প্রোডাক্ট সম্পর্কিত সকল তথ্য। যা দেখে কাস্টমার খুব সহজেই আপনার প্রোডাক্টটি অর্ডার করতে পারবে। এতে সেলসও বাড়বে বহু গুণ।
                        </p>
                        <p className="text-gray-800 font-bold leading-relaxed">
                            তাই আর সময় নষ্ট না করে আপনার ব্র্যান্ডের জন্য তৈরি করুন একটি Professional Landing Page যা শুধু দেখতেই নয়, বিক্রিতেও দক্ষ। আমাদের অভিজ্ঞ টিম আপনাকে দিচ্ছে কাস্টম ডিজাইন, ইউজার ফ্রেন্ডলি লেআউট এবং কনভার্সন-ফোকাসড স্ট্র্যাটেজি। আপনার অনলাইন সফলতার যাত্রা নতুনভাবে শুরু করতে আজই যোগাযোগ করুন।
                        </p>
                        <div className="pt-4">
                            <Link href="/contact-us" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                                ফ্রি কনসালটেশন <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>
                    <div className="flex-1 md:order-1 flex justify-center">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2025/09/Digital-Crop-Flyer39-500x500.png" 
                            alt="Professional Landing Page" 
                            width={400} 
                            height={400} 
                            className="w-full max-w-md mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Business Types Section */}
            <section className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">যে সকল ব্যবসার জন্য প্রয়োজন Landing Page!</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { 
                                icon: <BookOpen size={40} />, 
                                title: "কোচিং সেন্টার ও অনলাইন কোর্স", 
                                desc: "আমাদের তথ্যবহুল, কাস্টমার এনগেজিং, User-friendly ইন্টারফেসে কাস্টমার খুব সহজেই আপনার সার্ভিস সম্পর্কে জানতে ও অর্ডার করতে পারবে। আমাদের Full Responsive Coaching Center Landing Page গুলো স্টুডেন্ট থেকে শুরু করে অভিভাবক সকলের ব্যবহারের জন্য উপযোগী।" 
                            },
                            { 
                                icon: <ShoppingBag size={40} />, 
                                title: "ই-কমার্স / অনলাইন শপ", 
                                desc: "আপনার ই-কমার্স বা অনলাইন শপ পরিচালনার জন্য রয়েছে আমাদের ফুল রেসপন্সিভ Ecommerce Landing Page। যেখানে পণ্যের ফিচারস, রিভিউ, ডিসকাউন্ট অফার, দ্রুত চেকআউট এবং অর্ডার ট্র্যাকিং সুবিধা রয়েছে।" 
                            },
                            { 
                                icon: <Home size={40} />, 
                                title: "রিয়েল এস্টেট বা রেন্টাল সার্ভিস", 
                                desc: "আমরা রিয়েল এস্টেট বা রেন্টাল সার্ভিসের জন্য আধুনিক ও রেসপন্সিভ Real Estate Landing Page তৈরি করে থাকি, যেখানে প্রপার্টির ছবি, অবস্থান, বিবরণ, মূল্য এবং বুকিং ফর্ম যুক্ত থাকে।" 
                            },
                            { 
                                icon: <Plane size={40} />, 
                                title: "ট্রাভেল এজেন্সি", 
                                desc: "আমরা ট্রাভেল এজেন্সির জন্য ভিজ্যুয়ালি আকর্ষণীয় ও মোবাইল-ফ্রেন্ডলি ল্যান্ডিং পেজ ডিজাইন করি, যেখানে ট্যুর প্যাকেজ, ডেস্টিনেশন তালিকা, সময়সীমা, অফার ও বুকিং অপশন সঠিকভাবে উপস্থাপিত থাকে।" 
                            },
                            { 
                                icon: <User size={40} />, 
                                title: "ফ্রিল্যান্সার (পোর্টফলিও)", 
                                desc: "আমরা ফ্রিল্যান্স ডিজাইন, ডেভেলপমেন্ট, কনসাল্টিং সহ অন্যান্য সার্ভিস এক্সপার্ট দের জন্য প্রফেশনাল Portfolio Landing Page তৈরি করি। যেখানে পোর্টফোলিও, ক্লায়েন্ট রিভিউ, স্কিলস উপস্থাপন করা হয়।" 
                            },
                            { 
                                icon: <Coffee size={40} />, 
                                title: "রেস্টুরেন্ট বা ফুড ডেলিভারি", 
                                desc: "আমরা রেস্টুরেন্ট বা ফুড ডেলিভারি কোম্পানির জন্য User-Friendly Landing Page তৈরি করি। যেখানে মেনু, অর্ডার অপশন, লোকেশন, রিভিউ, অফারসহ সব তথ্য সুন্দরভাবে উপস্থাপন করা হয়।" 
                            },
                            { 
                                icon: <Monitor size={40} />, 
                                title: "App বা Software (SaaS) কোম্পানি", 
                                desc: "আমরা App বা Software কোম্পানির জন্য আধুনিক SaaS Landing Page তৈরি করি। যেখানে App এর ফিচারসমূহ, ডেমো, ডাউনলোড লিংক, সাবস্ক্রিপশন, অফারসহ সকল তথ্য সুন্দরভাবে উপস্থাপন করা হয়।" 
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all group">
                                <div className="text-blue-600 mb-6 bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 px-4 md:px-8 bg-blue-600 text-white text-center">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        লিড, সেলস, আর ব্র্যান্ডিং সব একসাথে পেতে আজই প্রফেশনাল ল্যান্ডিং পেজ অর্ডার করুন
                    </h2>
                    <Link href="/contact-us" className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold px-10 py-4 rounded-full transition-colors text-lg shadow-lg">
                        যোগাযোগ করুন
                    </Link>
                </div>
            </section>

            {/* Ideal Landing Page Features */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">একটি আদর্শ Landing Page এর বৈশিষ্ট্য</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {[
                            "আকর্ষণীয় ডিজাইন ও ক্লিন ইউজার ইন্টারফেস",
                            "দ্রুত লোডিং স্পিড",
                            "মোবাইল ও এসইও ফ্রেন্ডলি (Responsive & SEO Friendly)",
                            "শক্তিশালী ও স্পষ্ট কল-টু-অ্যাকশন (CTA)",
                            "কাস্টমার রিভিউ বা টেস্টিমোনিয়াল সেকশন",
                            "সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
                            "ফেসবুক পিক্সেল সাপোর্ট",
                            "সহজ ও দ্রুত পেমেন্ট বা লিড সংগ্রহ ফর্ম"
                        ].map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg border border-gray-100">
                                <CheckCircle2 className="text-teal-500 flex-shrink-0" size={24} />
                                <span className="font-medium text-gray-700">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LandingPageService;
