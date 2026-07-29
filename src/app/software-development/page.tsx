import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, Gauge, Database, Banknote, Smile, Trophy } from 'lucide-react';
import Image from 'next/image';

const SoftwareDevelopmentPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Best Software Development Service in Bangladesh</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2024/06/software-development.svg" 
                            alt="software development" 
                            width={525} 
                            height={438} 
                            className="w-full max-w-lg mx-auto"
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">Software Development</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            আপনার ব্যবসার জন্য প্রয়োজনীয় সকল Software Development Service এখানেই!
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আপনার ব্যবসার জন্য অপরিহার্য <b>Software Development Service</b> এখন আপনার হাতের মুঠোয়! Digital Crop আপনার ব্যবসার চাহিদা পূরণের লক্ষ্যে সকল প্রকার উন্নতমানের Software Development সেবা প্রদান করছে। সফটওয়্যার ব্যবহারের মাধ্যমে আপনার ব্যবসায়িক কার্যক্রম স্বয়ংক্রিয় ও দক্ষ হয়, সময় ও অর্থের সাশ্রয় হয়, এবং সঠিক ও নিরাপদ ডেটা ব্যবস্থাপনা নিশ্চিত হয়।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আমাদের অভিজ্ঞ ডেভেলপার টিম আপনার ব্যবসার নির্দিষ্ট চাহিদা বিশ্লেষণ করে, সেই অনুযায়ী <b>Customized Software</b> তৈরী করে দিয়ে থাকে। আমাদের সেবার মধ্যে রয়েছে <b>Web Application Development, Mobile App Development, Cloud Solutions, and System Integration.</b> আমরা প্রতিটি প্রোজেক্টে গ্রাহকের সঙ্গে নিবিড়ভাবে কাজ করি।
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                যোগাযোগ করুন
                            </Link>
                            <a href="tel:+8801993141214" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors flex items-center gap-2">
                                <Phone size={20} />
                                +88 01993-141214
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">ব্যবসায়িক Software এর সুবিধাসমূহ</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                আজকের প্রতিযোগিতামূলক বাজারে, যেকোনো ব্যবসার সাফল্যের জন্য Software অপরিহার্য। Software ব্যবহার করে ব্যবসায়িক গণ তাদের <b>দক্ষতা, উৎপাদনশীলতা, গ্রাহক পরিসেবা এবং সামগ্রিক সকল বিষয়</b> সহজে ব্যবহার যোগ্য করে তুলতে পারে।
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Gauge size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">কার্যকারিতা বৃদ্ধি</h4>
                                    <p className="text-gray-600 text-sm mt-1">স্বয়ংক্রিয়করণের মাধ্যমে কাজের গতি ও দক্ষতা উল্লেখযোগ্যভাবে বৃদ্ধি পায়, যা দ্রুত ও সঠিক সিদ্ধান্ত গ্রহণে সহায়তা করে।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Database size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">ডেটা ব্যবস্থাপনা</h4>
                                    <p className="text-gray-600 text-sm mt-1">সঠিক ও নিরাপদ ডেটা ব্যবস্থাপনা নিশ্চিত হয়, যার মাধ্যমে আপনার ব্যবসার জন্য গুরুত্বপূর্ণ তথ্য সহজেই সংরক্ষণ ও পুনরুদ্ধার করা যায়。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-green-600"><Banknote size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">খরচ সাশ্রয়</h4>
                                    <p className="text-gray-600 text-sm mt-1">Manual কার্যক্রম হ্রাস করে খরচ কমানো যায়, যা আপনার ব্যবসায়ের মুনাফা বাড়াতে সহায়তা করে。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-yellow-500"><Smile size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">গ্রাহক সন্তুষ্টি</h4>
                                    <p className="text-gray-600 text-sm mt-1">উন্নত গ্রাহক সেবা প্রদান করা সম্ভব হয়, যার ফলে গ্রাহকরা দ্রুত ও নির্ভুল সেবা পেয়ে সন্তুষ্ট থাকে。</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-purple-600"><Trophy size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">প্রতিযোগিতামূলক সুবিধা</h4>
                                    <p className="text-gray-600 text-sm mt-1">বাজারে প্রতিযোগিতায় এগিয়ে থাকা যায়, যা আপনার ব্যবসাকে আরও সফল ও সম্প্রসারিত করতে সহায়তা করে।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2024/06/business-software.svg" 
                            alt="সফটওয়্যার ডেভেলপমেন্ট" 
                            width={628} 
                            height={454} 
                            className="w-full max-w-lg mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">আমাদের Software Development সেবাসমূহ</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "ERP Software", desc: "আমাদের ERP software গুলো আপনার ব্যবসার বিভিন্ন বিভাগকে একত্রে সংযোগ করে, কার্যক্রমকে সহজ করে তোলে, এবং ব্যবসায়িক তথ্যের প্রবাহ সঠিকভাবে পরিচালনা করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/erp-software.svg" },
                            { title: "Accounting Management Software", desc: "আমাদের Accounting Management Software আপনার আর্থিক লেনদেন ও হিসাব ব্যবস্থাপনাকে সহজ ও নির্ভুল করে তোলে। এটি আয়-ব্যয়ের সঠিক হিসাব রাখে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/accounting-software.svg" },
                            { title: "Pharmaceutical Software", desc: "Pharmaceutical শিল্পের জন্য বিশেষভাবে ডিজাইন করা আমাদের সফটওয়্যার আপনাকে সমস্ত কার্যক্রম, যেমনঃ Inventory, order management and delivery, কার্যকরভাবে পরিচালনা করতে সহায়তা করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/pharmacy-software.svg" },
                            { title: "Point of Sale (POS) Software", desc: "আমাদের Point of Sale (POS) software গুলো বিক্রয় প্রক্রিয়াকে দ্রুত এবং সহজ করে তোলে, বিক্রয় ডেটা পরিচালনা করে এবং স্টক ম্যানেজমেন্টে সহায়তা করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/pos-software.svg" },
                            { title: "Inventory Software", desc: "আমাদের Inventory software আপনার স্টক ম্যানেজমেন্টের প্রতিটি ধাপকে সঠিক ও সহজ করে তোলে। এটি আপনার স্টক লেভেল ট্র্যাক করতে, রি-অর্ডার পয়েন্ট সেট করতে সহায়তা করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/inventory-software.svg" },
                            { title: "Institution Management Software", desc: "শিক্ষা প্রতিষ্ঠানগুলোর জন্য আমাদের Management Software সম্পূর্ণ ব্যবস্থাপনার সল্যুশন প্রদান করে। এটি ছাত্রছাত্রী, শিক্ষক ও প্রশাসনিক কার্যক্রমকে সহজ করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/school-software-.svg" },
                            { title: "Office Management Software", desc: "অফিস ব্যবস্থাপনার সমস্ত কার্যক্রমকে সহজ ও সুশৃঙ্খলভাবে পরিচালনার জন্য আমাদের Office Management Software অত্যন্ত কার্যকর।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/office-software.svg" },
                            { title: "Hospital Management Software", desc: "আমাদের Hospital Management Software হাসপাতালের প্রতিদিনের কার্যক্রম যেমনঃ রোগীর রেজিস্ট্রেশন, Appointment, চিকিৎসা রেকর্ড, এবং বিলিং কার্যক্রমকে সহজ করে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/hospital-software.svg" },
                            { title: "Custom Website", desc: "আপনার প্রয়োজনের উপর ভিত্তি করে আমরা বিভিন্ন ওয়েব টেকনিলোজি দিয়ে ওয়েবসাইট বা ওয়েব অ্যাপ তৈরি করে দিয়ে থাকি যা আপনার ব্যবসাকে আরও এগিয়ে নেবে।", icon: "https://digital-crop.com/wp-content/uploads/2024/06/custom-software.svg" }
                        ].map((feat, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className="mb-6 flex justify-center h-20 items-center">
                                    <Image src={feat.icon} alt={feat.title} width={64} height={64} className="group-hover:scale-110 transition-transform duration-300" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{feat.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">আপনার ব্যবসার জন্য সফটওয়্যার তৈরি করার জন্য এখনি যোগাযোগ করুন।</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/contact-us" className="bg-white text-blue-700 hover:bg-gray-100 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
                            যোগাযোগ করুন <ArrowRight size={20} />
                        </Link>
                        <a href="tel:+8801993141214" className="border-2 border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 rounded font-bold transition-colors flex items-center gap-2">
                            <Phone size={20} /> +88 01993-141214
                        </a>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">আমাদের Software Development প্রক্রিয়া</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Requirements", desc: "প্রথমে আমরা আপনার সাথে আপনার প্রয়োজোনীয় Software নিয়ে আলোচনা করবো। আপনি কি ধরনের Software ও কি ফিচার চাচ্ছেন তার Requirements জানবো।" },
                            { step: "02", title: "Requirements Analysis", desc: "আপনার প্রয়োজনীয়তার তথ্য পাওয়ার পর আমরা সেগুলো বিশ্লেষণ করে আপনার প্রকল্পের উপযুক্ত মূল্য নির্ধারণ করব এবং একটি প্রস্তাবনা পাঠাব।" },
                            { step: "03", title: "Planning & Development", desc: "আপনি আমাদের প্রস্তাবনা পছন্দ করলে, আমরা আপনার কাছ থেকে প্রয়োজনীয় উপাদান সংগ্রহ করে Software তৈরির কাজ শুরু করব।" },
                            { step: "04", title: "Testing & Delivery", desc: "ডেভেলপমেন্ট শেষে সফটওয়্যারটি সম্পূর্ণরূপে টেস্ট করা হয় এবং এরপর ক্লায়েন্টের কাছে হ্যান্ডওভার ও সাপোর্ট প্রদান করা হয়।" }
                        ].map((item, idx) => (
                            <div key={idx} className="relative p-8 bg-white rounded-lg shadow-sm border border-gray-100 h-full">
                                <div className="text-6xl font-black text-gray-100 absolute top-4 right-4">{item.step}</div>
                                <div className="relative z-10 mt-10">
                                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default SoftwareDevelopmentPage;
