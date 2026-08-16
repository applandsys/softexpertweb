import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, Monitor, Smartphone, Globe, PenTool, Layout, Zap } from 'lucide-react';

const WebDesignDevelopmentPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Web Design & Development</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 flex justify-center">
                         <div className="w-full max-w-lg bg-blue-50 rounded-xl p-16 flex items-center justify-center">
                             <Monitor className="text-blue-600 w-48 h-48" />
                         </div>
                    </div>
                    <div className="flex-1 space-y-6">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">Web Design & Development</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            আপনার ব্যবসাকে অনলাইনে আকর্ষণীয় করে তুলুন প্রফেশনাল ওয়েবসাইটের মাধ্যমে
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আমরা বিভিন্ন ধরনের <b>Web Design & Development</b> সার্ভিস দিয়ে থাকি। যেমনঃ ব্যবসায়িক, ইকমার্স, পোর্টফোলিও সহ যেকোনো ওয়েবসাইট। যা অনলাইনে আপনার ব্যবসাকে ফুটিয়ে তুলতে এবং আপনার ব্যবসায়িক পরিচিতি বাড়াতে বিশেষ ভুমিকা রাখবে।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আমাদের অভিজ্ঞ ওয়েব ডিজাইনার ও ডেভেলপার টিম আপনার ব্যবসার চাহিদা অনুযায়ী একটি <b>Responsive, Fast এবং SEO-Friendly</b> ওয়েবসাইট তৈরি করে দিবে যা যেকোনো ডিভাইসে সুন্দরভাবে সাপোর্ট করবে এবং আপনার সেলস বা ব্র্যান্ড ভ্যালু বাড়াতে সরাসরি সাহায্য করবে।
                        </p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                যোগাযোগ করুন
                            </Link>
                            <a href="tel:+8801722447755" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors flex items-center gap-2">
                                <Phone size={20} />
                                +88 01722-447755
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
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">একটি প্রফেশনাল ওয়েবসাইটের সুবিধাসমূহ</h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                ডিজিটাল যুগে ব্যবসার পরিধি বাড়াতে একটি ওয়েবসাইট সবচেয়ে কার্যকরী মাধ্যম। এটি আপনার ব্যবসাকে শুধু বিশ্বস্তই করে না, বরং নতুন কাস্টমার পেতেও সাহায্য করে।
                            </p>
                        </div>
                        
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Globe size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">অনলাইন পরিচিতি বৃদ্ধি</h4>
                                    <p className="text-gray-600 text-sm mt-1">আপনার ব্র্যান্ডকে ইন্টারনেটে ছড়িয়ে দিন। একটি সুন্দর ওয়েবসাইট আপনার কাস্টমারদের মনে একটি ভালো ইমপ্রেশন তৈরি করে।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-blue-600"><Smartphone size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">যেকোনো ডিভাইস থেকে ভিজিট</h4>
                                    <p className="text-gray-600 text-sm mt-1">আমাদের তৈরি করা ওয়েবসাইট মোবাইল, ল্যাপটপ, ট্যাবলেট সব ডিভাইসেই দারুণ রেসপন্সিভ এবং ফাস্ট কাজ করে।</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 text-green-600"><Zap size={24} /></div>
                                <div>
                                    <h4 className="font-bold text-lg">সেলস বৃদ্ধি</h4>
                                    <p className="text-gray-600 text-sm mt-1">কাস্টমাররা যেকোনো সময় আপনার সার্ভিস বা প্রোডাক্ট দেখতে পারে এবং অনলাইনে সহজেই অর্ডার করতে পারে, যা আপনার সেলস বাড়ায়।</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="w-full max-w-lg bg-teal-50 rounded-xl p-16 flex items-center justify-center">
                            <Layout className="text-teal-600 w-48 h-48" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">আমাদের Web Development সেবাসমূহ</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Corporate Website", desc: "কোম্পানি বা এজেন্সির জন্য আমরা উন্নতমানের কর্পোরেট ওয়েবসাইট তৈরি করি যা আপনার ব্র্যান্ড ভ্যালু বৃদ্ধিতে সহায়তা করে।", icon: Globe },
                            { title: "E-commerce Website", desc: "অনলাইনে পণ্য বিক্রির জন্য ডাইনামিক ইকমার্স ওয়েবসাইট। এতে পেমেন্ট গেটওয়ে, কার্ট এবং অর্ডার ম্যানেজমেন্ট সিস্টেম যুক্ত থাকে।", icon: Monitor },
                            { title: "Portfolio Website", desc: "নিজস্ব কাজ এবং দক্ষতা সুন্দরভাবে উপস্থাপন করার জন্য প্রফেশনাল পোর্টফোলিও ওয়েবসাইট ডিজাইন।", icon: PenTool },
                            { title: "Blog/News Portal", desc: "ব্লগিং বা নিউজ পাবলিশিং এর জন্য ফাস্ট এবং এসইও ফ্রেন্ডলি ব্লগ ও নিউজ পোর্টাল ডেভেলপমেন্ট।", icon: Globe },
                            { title: "Landing Page", desc: "মার্কেটিং বা অ্যাডের জন্য হাই-কনভার্টিং ল্যান্ডিং পেজ ডিজাইন, যা আপনার লিড ও সেলস জেনারেট করতে দারুণ কার্যকর।", icon: Layout },
                            { title: "Custom Web Application", desc: "আপনার ব্যবসার বিশেষ প্রয়োজনের উপর ভিত্তি করে আমরা যেকোনো ধরনের কাস্টম ওয়েব এপ্লিকেশন তৈরি করে থাকি।", icon: Zap }
                        ].map((feat, idx) => {
                            const Icon = feat.icon;
                            return (
                            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-lg transition-all text-center group">
                                <div className="mb-6 flex justify-center h-20 items-center">
                                    <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="text-blue-600 w-8 h-8" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{feat.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
                            </div>
                        )})}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">আপনার কাঙ্ক্ষিত ওয়েবসাইটটি তৈরি করতে আজই আমাদের সাথে যোগাযোগ করুন।</h2>
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

            {/* Process */}
            <section className="py-20 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">আমাদের Web Development প্রক্রিয়া</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Design & Planning", desc: "প্রথমে আপনার পছন্দ অনুযায়ী একটি দারুণ UI/UX ডিজাইন এবং ওয়েবসাইটের স্ট্রাকচার প্ল্যান করা হয়।" },
                            { step: "02", title: "Development", desc: "প্ল্যান অনুযায়ী লেটেস্ট টেকনোলজি ব্যবহার করে ফাস্ট ও রেসপন্সিভ ওয়েবসাইট ডেভেলপমেন্টের কাজ শুরু হয়।" },
                            { step: "03", title: "Testing", desc: "কাজ শেষে ওয়েবসাইটের স্পিড, সিকিউরিটি এবং রেসপন্সিভনেস খুব সতর্কতার সাথে টেস্ট করা হয়।" },
                            { step: "04", title: "Launch & Support", desc: "আপনার অনুমোদনের পর ওয়েবসাইট লাইভ করা হয় এবং এরপরও আমরা টেকনিক্যাল সাপোর্ট দিয়ে থাকি।" }
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

export default WebDesignDevelopmentPage;
