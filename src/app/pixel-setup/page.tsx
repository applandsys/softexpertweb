import React from 'react';
import Link from 'next/link';
import { Phone, CheckCircle2, Target, BarChart, Settings, ShoppingBag, Eye, Award, CreditCard, ThumbsUp, Headset } from 'lucide-react';

const PixelSetupPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">Facebook Pixel & GTM Setup Services</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 md:order-2 flex justify-center">
                        <div className="w-full max-w-sm mx-auto bg-blue-50 p-16 rounded-xl flex items-center justify-center">
                            <Settings className="text-blue-600 w-32 h-32" />
                        </div>
                    </div>
                    <div className="flex-1 space-y-6 md:order-1">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">Pixel Setup Service</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            আপনার ই-কমার্স ব্যবসার জন্য Facebook Pixel ও GTM সেটআপ করুন
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            আপনি কি জানেন যে আপনার ওয়েবসাইটে আসা ভিজিটররা কী করছে? কারা কার্টে প্রোডাক্ট অ্যাড করছে কিন্তু কিনছে না? <strong>Facebook Pixel</strong> এবং <strong>Google Tag Manager (GTM)</strong> এর মাধ্যমে আপনি আপনার ওয়েবসাইটের প্রতিটি ভিজিটরের অ্যাক্টিভিটি ট্র্যাক করতে পারবেন।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            সঠিক ডেটা ট্র্যাকিং ছাড়া অ্যাডভার্টাইজিং-এ টাকা খরচ করা মানে অন্ধকারে তীর ছোঁড়া। আমরা আপনার ওয়েবসাইটের জন্য Facebook Pixel Conversion API (CAPI), Google Analytics 4 (GA4), এবং Google Tag Manager (GTM) নিখুঁতভাবে সেটআপ করে দিই, যাতে আপনি রিটার্গেটিং করে আপনার সেলস কয়েকগুণ বাড়াতে পারেন।
                        </p>
                        <p className="text-lg text-gray-600 font-medium">
                            আপনার ওয়েবসাইটের ট্র্যাকিং সেটআপ করতে আজই আমাদের সাথে যোগাযোগ করুন।
                        </p>
                        
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link href="/contact-us" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium transition-colors">
                                যোগাযোগ করুন
                            </Link>
                            <a href="tel:+8801722447755" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded font-medium transition-colors flex items-center gap-2">
                                <Phone size={20} />
                                +8801722447755
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
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">Facebook Pixel ও GTM কেন প্রয়োজন?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
                            সঠিক ট্র্যাকিং আপনার মার্কেটিং বাজেটের অপচয় রোধ করে এবং আপনাকে ডেটা-ড্রিভেন সিদ্ধান্ত নিতে সাহায্য করে।
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Target size={32} />, title: "Retargeting Ads", desc: "যারা আপনার সাইট ভিজিট করেছে বা কার্টে অ্যাড করেছে তাদের কাছে পুনরায় অ্যাড দেখিয়ে সেলস কনভার্সন রেট বাড়াতে পারবেন।" },
                            { icon: <BarChart size={32} />, title: "Track ROI", desc: "কোন অ্যাড থেকে কত সেলস আসছে তা নিখুঁতভাবে ট্র্যাক করতে পারবেন। এতে আপনার মার্কেটিং বাজেট সঠিকভাবে কাজে লাগাতে পারবেন।" },
                            { icon: <ShoppingBag size={32} />, title: "E-commerce Tracking", desc: "ViewContent, AddToCart, InitiateCheckout, Purchase - প্রতিটি ইভেন্ট সার্ভার সাইড ট্র্যাকিং (CAPI) এর মাধ্যমে ট্র্যাক করা যায়।" },
                            { icon: <Eye size={32} />, title: "Audience Insights", desc: "আপনার কাস্টমারদের বয়স, অবস্থান ও আগ্রহ সম্পর্কে বিস্তারিত ধারণা পাবেন যা ভবিষ্যতে ভালো অ্যাড রান করতে সাহায্য করবে।" }
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

            {/* Importance Section */}
            <section className="py-16 px-4 md:px-8 bg-blue-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                            Conversion API (CAPI) সেটআপ কেন এত গুরুত্বপূর্ণ?
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            iOS 14 আপডেটের পর থেকে ব্রাউজার-ভিত্তিক পিক্সেল ট্র্যাকিং আগের মতো সঠিকভাবে কাজ করে না। তাই সঠিক ডেটা পাওয়ার জন্য সার্ভার-সাইড ট্র্যাকিং বা Conversion API (CAPI) সেটআপ করা অত্যন্ত জরুরি। এটি অ্যাড ব্লকার বা ব্রাউজার রেস্ট্রিকশন এড়িয়ে সরাসরি সার্ভার থেকে ডেটা ফেসবুকে পাঠায়।
                        </p>
                        
                        <div className="space-y-4 pt-2">
                            {[
                                { text: "ডেটা লস রোধ করা এবং সঠিক ট্র্যাকিং নিশ্চিত করা।" },
                                { text: "ফেসবুক অ্যাডের পারফরম্যান্স এবং কনভার্সন রেট বৃদ্ধি করা।" },
                                { text: "ব্রাউজার রেস্ট্রিকশন এবং অ্যাড ব্লকারের প্রভাব মুক্ত।" },
                                { text: "অ্যাকাউন্টের অ্যাডভার্টাইজিং কস্ট (CPA) কমানো।" }
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-3 items-start">
                                    <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                    <span className="text-gray-700">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <div className="w-full bg-blue-100 rounded-xl p-16 flex justify-center items-center">
                            <Target className="text-blue-600 w-48 h-48" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Us Features */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900">কেন আমাদের থেকে Pixel Setup সার্ভিস নিবেন?</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Award size={36} />, title: "Experienced", desc: "আমরা অভিজ্ঞ ডেভেলপার এবং মার্কেটার দিয়ে নিখুঁতভাবে পিক্সেল এবং ইভেন্ট সেটআপ করে থাকি।" },
                            { icon: <CreditCard size={36} />, title: "Domestic Payment", desc: "আপনি আমাদের সেবা নেওয়ার জন্য দেশী পেমেন্ট মাধ্যম যেমন বিকাশ, নগদ, রকেট ব্যবহার করতে পারবেন।" },
                            { icon: <ThumbsUp size={36} />, title: "Affordable Price", desc: "আমরা আপনার বাজেটের মধ্যে সেরা মানের ট্র্যাকিং এবং পিক্সেল সেটআপ সার্ভিস প্রদান করে থাকি।" },
                            { icon: <Headset size={36} />, title: "Customer Support", desc: "সেটআপ পরবর্তী যেকোনো সমস্যায় আমরা দ্রুত সাপোর্ট প্রদান করি।" }
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

export default PixelSetupPage;
