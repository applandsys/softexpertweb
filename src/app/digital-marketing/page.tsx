import React from 'react';
import Link from 'next/link';
import { Phone, Users, DollarSign, Target, MessageSquare, CheckCircle2, Award, CreditCard, ThumbsUp, Headset } from 'lucide-react';
import Image from 'next/image';

const DigitalMarketingPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Professional Digital Marketing Services in Bangladesh</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 md:order-2 flex justify-center">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2024/06/digital-marketing.svg" 
                            alt="Digital Marketing Service" 
                            width={300} 
                            height={300} 
                            className="w-full max-w-sm mx-auto"
                        />
                    </div>
                    <div className="flex-1 space-y-6 md:order-1">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">Digital Marketing Service</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            আপনার ব্যবসার জন্য সেরা Digital Marketing Service এখানেই!
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আপনি কি আপনার ব্যবসার growth এবং online presence বাড়ানোর জন্য উন্নতমানের digital marketing services খুঁজছেন? <strong>SoftExpert</strong> দিচ্ছে আধুনিক ও কার্যকর সকল ডিজিটাল মার্কেটিং সেবা, যা আপনার ব্র্যান্ডকে অনলাইন এবং অফলাইনে আরও দৃশ্যমান করে তুলবে এবং customer engagement ও sales বৃদ্ধি করতে সহায়তা করবে। আমাদের সেবার মধ্যে রয়েছে SEO, Social Media Marketing, Social Media Management, Email Marketing, Leads Collection, Content Creation এবং Pay-Per-Click (PPC) Advertising।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আমরা আপনার ব্যবসার জন্য কাস্টমাইজড marketing strategy তৈরি করি, যা আপনার targeted audience পর্যন্ত পৌঁছাতে সাহায্য করে এবং ব্যবসার বিকাশে গুরুত্বপূর্ণ ভূমিকা পালন করে। সঠিক মার্কেটিং কৌশল আপনার ব্র্যান্ডকে প্রতিযোগিতামূলক বাজারে শক্তিশালী অবস্থানে নিয়ে যায়, গ্রাহকদের সঙ্গে দীর্ঘমেয়াদি সম্পর্ক গড়ে তোলে এবং ব্র্যান্ডের বিশ্বাসযোগ্যতা বাড়ায়।
                        </p>
                        <p className="text-lg text-gray-600 font-medium">
                            আপনার ব্যবসার জন্য professional digital marketing services নিতে অথবা <b>free marketing consultation</b> পেতে আজই আমাদের সঙ্গে যোগাযোগ করুন।
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
                </div>
            </section>

            {/* Why Choose Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">আমাদের সার্ভিসেস</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">আপনার ব্যবসার সাফল্যের জন্য আমাদের Digital Marketing Service কেন বেছে নেবেন?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                            বর্তমান প্রতিযোগিতামূলক বাজারে <strong>professional digital marketing services</strong> ছাড়া ব্যবসা দ্রুত বৃদ্ধি পাওয়া কঠিন। গ্রাহকরা আজ অনলাইনে সক্রিয়, তাই সঠিক <strong>digital marketing agency</strong> বেছে নেওয়া খুবই গুরুত্বপূর্ণ।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Users size={32} />, title: "More Customers", desc: "আমাদের digital marketing service এর মাধ্যমে আপনি আপনার ব্র্যান্ড, সার্ভিস বা পণ্যগুলি বিশ্বব্যাপী লক্ষ লক্ষ মানুষের কাছে পৌঁছাতে পারবেন। ইন্টারনেট এবং সোশ্যাল মিডিয়ার মাধ্যমে, আপনি সহজেই আপনার targeted audience নির্ধারণ করে তাদের কাছে পণ্য বা সেবার বার্তা পৌঁছে দিতে পারেন।" },
                            { icon: <DollarSign size={32} />, title: "Low Cost", desc: "ট্র্যাডিশনাল মার্কেটিংয়ের তুলনায় affordable digital marketing solutions অনেক বেশি কার্যকর ও সাশ্রয়ী। আপনি আপনার বাজেট অনুযায়ী বিভিন্ন online marketing services ব্যবহার করতে পারবেন। এছাড়াও, Digital Marketing-এর ROI ট্র্যাক করা সহজ, যা আপনাকে মার্কেটিং প্রচেষ্টার সাফল্য মূল্যায়ন করতে সাহায্য করে।" },
                            { icon: <Target size={32} />, title: "Targeted Audience", desc: "ডিজিটাল মার্কেটিং এর মাধ্যমে আপনি বয়স, লিঙ্গ, অবস্থান, আগ্রহ সহ আরও অনেক তথ্যের ভিত্তিতে আপনার Targeted Audience নির্ধারণ করতে পারবেন। যার মাধ্যমে আপনি আপনার বিজ্ঞাপনগুলি এমন লোকেদের কাছে দেখাতে পারবেন যারা আপনার পণ্য বা সেবা গুলিতে আগ্রহী হওয়ার সম্ভাবনা বেশি, যার ফলে রূপান্তরের হারও বেশি।" },
                            { icon: <MessageSquare size={32} />, title: "Customer Interaction", desc: "Professional digital marketing services বড় এবং ছোট উভয় ব্যবসার জন্যই গুরুত্বপূর্ণ। এটি আপনাকে গ্রাহকদের সঙ্গে সংযোগ তৈরি করতে, brand loyalty বৃদ্ধি করতে এবং ব্যবসার growth ত্বরান্বিত করতে সাহায্য করে। সঠিক কৌশল প্রয়োগের মাধ্যমে এটি আপনাকে প্রতিযোগীদের তুলনায় এগিয়ে রাখে।" }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all group">
                                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform">{item.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Grid Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">আমাদের Digital Marketing Service সমূহ</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { icon: "https://digital-crop.com/wp-content/uploads/2024/05/facebook-ads.svg", title: "Facebook Boosting & Marketing", desc: "আপনার ব্যবসার Facebook presence বাড়াতে আমরা বিশ্বস্ততা ও সফলতার সাথে Facebook Page Marketing এবং Boosting করি। এছাড়াও, টার্গেটেড Facebook Ads পরিচালনা করে আপনার পণ্য ও সেবার প্রচারণার জন্য উল্লেখযোগ্য ফলাফল নিশ্চিত করি।" },
                            { icon: "https://digital-crop.com/wp-content/uploads/2024/03/seo-icon.svg", title: "Search Engine Optimization (SEO & AEO)", desc: "অনলাইনে আপনার ওয়েবসাইটকে শক্তিশালী করার জন্য আমরা SEO এবং Answer Engine Optimization (AEO) ব্যবহার করি। এছাড়াও, keyword research, on-page ও off-page SEO, technical optimization এর মাধ্যমে organic traffic বৃদ্ধি এবং Google ranking উন্নত করি।" },
                            { icon: "https://digital-crop.com/wp-content/uploads/2024/05/social-media.svg", title: "Social Media Management", desc: "ব্র্যান্ডের social media presence কে শক্তিশালী করতে আমরা Facebook, Instagram, LinkedIn সহ সকল platform-এ Social Media Management করি। এছাড়াও, content planning, posting এবং audience engagement-এর মাধ্যমে lead generation এবং customer trust বৃদ্ধি করি।" },
                            { icon: "https://digital-crop.com/wp-content/uploads/2024/05/ppc-ads.svg", title: "Pay-per-click (PPC) Advertising", desc: "দ্রুত website traffic ও lead generation-এর জন্য আমরা Google Ads এবং Facebook Ads Campaigns পরিচালনা করি। এছাড়াও, targeted audience ads এবং ROI optimization ব্যবহার করে আপনার বিজ্ঞাপন থেকে সর্বোচ্চ ফলাফল নিশ্চিত করি।" },
                            { icon: "https://digital-crop.com/wp-content/uploads/2024/05/content-marketing.svg", title: "Content Marketing", desc: "ব্র্যান্ডের পরিচিতি ও গ্রাহক engagement বাড়াতে আমরা blog posts, infographics এবং videos তৈরি করি। এছাড়াও, content strategies-এর মাধ্যমে marketing campaigns-এর সাথে seamless integration এবং audience attraction নিশ্চিত করি।" },
                            { icon: "https://digital-crop.com/wp-content/uploads/2024/05/email-marketing.svg", title: "Email Marketing", desc: "আমরা কাস্টমাইজড Email Campaign তৈরি করে আপনার লিডগুলিকে গ্রাহকে রূপান্তর করতে সহায়তা করি। এই ইমেইল মার্কেটিং কৌশল আপনার গ্রাহকদের সঙ্গে শক্তিশালী সম্পর্ক গড়ে তুলতে, তাদের সর্বশেষ অফার ও আপডেট সম্পর্কে জানাতে এবং ব্যবসার প্রবৃদ্ধি ত্বরান্বিত করতে গুরুত্বপূর্ণ ভূমিকা পালন করে।" }
                        ].map((srv, idx) => (
                            <div key={idx} className="bg-white border border-gray-100 p-8 rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all">
                                <div className="mb-6">
                                    <Image src={srv.icon} alt={srv.title} width={64} height={64} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{srv.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{srv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Importance Section */}
            <section className="py-16 px-4 md:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                            ব্যবসার প্রবৃদ্ধিতে Digital Marketing Service কতটা গুরুত্বপূর্ণ?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আজকের প্রতিযোগিতামূলক বাজারে ব্যবসার টেকসই বৃদ্ধি নিশ্চিত করতে digital marketing services অপরিহার্য। এটি শুধু অনলাইন উপস্থিতি বাড়ায় না, বরং সঠিক digital marketing strategy প্রয়োগের মাধ্যমে ব্র্যান্ডকে তার লক্ষ্যে পৌঁছে দেয়। আধুনিক সময়ের গ্রাহকরা অনলাইনে বেশি সক্রিয় থাকায় <strong>SoftExpert</strong> মার্কেটিং এজেন্সি ব্যবসার জন্য নতুন সুযোগ তৈরি করে। এর মাধ্যমে শুধুমাত্র দেশীয় বাজারেই নয়, বরং আন্তর্জাতিক বাজারেও পণ্য ও সেবার প্রসার ঘটানো সম্ভব। ব্যবসার খাতভেদে ভিন্ন professional digital marketing services প্রয়োগ করে প্রতিযোগিতামূলক বাজারে এগিয়ে থাকা যায়।
                        </p>
                        
                        <div className="space-y-4 pt-2">
                            {[
                                { text: "ব্র্যান্ড ভিজিবিলিটি ও রিচ বৃদ্ধিঃ সঠিক ডিজিটাল মার্কেটিং কৌশল ব্যবসাকে লক্ষাধিক সম্ভাব্য গ্রাহকের কাছে পৌঁছে দেয়।" },
                                { text: "টার্গেটেড মার্কেটিংঃ নির্দিষ্ট অডিয়েন্স টার্গেট করে সর্বোচ্চ ROI নিশ্চিত করা সম্ভব।" },
                                { text: "ডাটা-ড্রিভেন ডিসিশন মেকিংঃ Analytics এবং Performance Tracking-এর মাধ্যমে মার্কেটিং কৌশল অপ্টিমাইজ করা যায়।" },
                                { text: "কস্ট-ইফেকটিভ মার্কেটিং সলিউশনঃ ট্র্যাডিশনাল বিজ্ঞাপনের তুলনায় কম খরচে বেশি ফলাফল।" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-start">
                                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2024/03/about-us.svg" 
                            alt="importance of digital marketing" 
                            width={500} 
                            height={500} 
                            className="w-full max-w-lg mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Why Us Features */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">কেন আমাদের থেকে Digital Marketing Service নিবেন?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Award size={36} />, title: "Experienced", desc: "আমরা দীর্ঘদিন ধরে বিশ্বস্ততা ও সফলতার সাথে Digital Marketing Service দেওয়ার মাধ্যমে গ্রাহকের ব্যবসা বৃদ্ধি করতে সহায়তা করে আসছি।" },
                            { icon: <CreditCard size={36} />, title: "Domestic Payment", desc: "আপনি আমাদের সেবা নেওয়ার জন্য দেশী payment Method বিকাশ, রকেট, নগদ সহ, ব্যাংক ইত্যাদি সহ আরো অন্যান্য মাধ্যমে পেমেন্ট করতে পারবেন।" },
                            { icon: <ThumbsUp size={36} />, title: "Budget Friendly Price", desc: "আমরা আপনার বাজেটের মধ্যে সেরা সার্ভিস প্রদান করে থাকি। আমাদের প্রত্যেকটি Digital Marketing সেবা সুলভ মূল্যে পেয়ে যাবেন।" },
                            { icon: <Headset size={36} />, title: "Customer Support", desc: "24/7 আমাদের দক্ষ Support Team আপনার প্রশ্নের উত্তর দিতে এবং আপনার সমস্যা সমাধান করতে সর্বদা প্রস্তুত।" }
                        ].map((feature, idx) => (
                            <div key={idx} className="bg-gray-50 p-8 rounded-xl text-center group hover:bg-blue-600 hover:text-white transition-colors duration-300">
                                <div className="text-blue-600 mb-6 flex justify-center group-hover:text-white transition-colors">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-sm group-hover:text-blue-50 transition-colors">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingPage;
