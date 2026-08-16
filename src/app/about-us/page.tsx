import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const AboutUsPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">আমাদের সম্পর্কে</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2024/03/about-us.svg" 
                            alt="about us" 
                            width={500} 
                            height={500} 
                            className="w-full max-w-lg mx-auto"
                        />
                    </div>
                    <div className="flex-1 space-y-6">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">SoftExpert.com</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                            Software Development , Digital Marketing এবং IT Service প্রদানকারী প্রতিষ্ঠান
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            বর্তমান ডিজিটাল যুগে অনলাইন উপস্থিতি একটি ব্যবসার সাফল্যের জন্য অপরিহার্য। <b>SoftExpert</b> একটি অভিজ্ঞ Software Development , Automation , Digital Marketing এবং IT Service প্রদানকারী প্রতিষ্ঠান। আমরা আমাদের দক্ষতা ও অভিজ্ঞতাকে কাজে লাগিয়ে আপনার ব্যবসাকে অনলাইনে সাফল্যের শীর্ষে পৌঁছে দিতে সর্বদা প্রস্তুত।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            <b>১6+ বছরের </b>অভিজ্ঞতা এবং দক্ষ প্রফেশনাল টিমের সমন্বয়ে গঠিত <b>SoftExpert</b>। আপনার নির্দিষ্ট প্রয়োজনের উপর ভিত্তি করে আমরা কাস্টমাইজড সমাধান প্রদান করে থাকি। আমরা লোকাল এবং ফ্রিল্যান্সিং প্রজেক্টের মাধ্যমে দেশ-বিদেশে উন্নতমানের Digital Marketing এবং IT Solution পরিসেবা প্রদান করে আসছি। ছোট থেকে মাঝারি, মাঝারি থেকে বড় সব ধরনের ব্যবসা প্রতিষ্ঠান বা ব্যক্তিদেরকে নায্য মূল্যে উন্নতমানের Digital Marketing এবং IT Service প্রদানে আমাদের সুখ্যাতি রয়েছে। আপনার ব্যবসাকে Digitalized করতে A to Z সমাধান প্রদান করতে আমরা সদা প্রস্তুত।
                        </p>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {[
                                "Digital Marketing Service",
                                "Graphic Design Service",
                                "Search Engine Optimization Service",
                                "Domain & Hosting Service",
                                "Web Design & Development Service",
                                "Software Development Service"
                            ].map((service, idx) => (
                                <div key={idx} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-blue-600 flex-shrink-0" size={20} />
                                    <span className="text-gray-700 font-medium">{service}</span>
                                </div>
                            ))}
                        </div>
                        
                        <p className="text-lg text-gray-600 leading-relaxed pt-4">
                            আমরা আপনার ব্যবসার জন্য সময় উপযোগী Digital Marketing এবং IT service প্রদান করে থাকি। আপনার ব্যবসাকে অনলাইনে সাফল্য অর্জনের জন্য আমরা কীভাবে সাহায্য করতে পারি জানতে আমাদের সাথে যোগাযোগ করুন।
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

            {/* Mission Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">Our Mission & Vision</span>
                        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                            আপনার ব্যবসাকে ডিজিটাল যুগে এগিয়ে নিয়ে যাওয়ার সহায়ক
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            তথ্য ও প্রযুক্তির অগ্রগতির সাথে সাথে ব্যবসা-বাণিজ্যের ধরণও বদলে গেছে। বর্তমানে প্রতিটি ব্যবসা প্রতিষ্ঠানের জন্য ডিজিটাল উপস্থিতি অত্যন্ত গুরুত্বপূর্ণ। ইন্টারনেটের মাধ্যমে বিশ্বব্যাপী গ্রাহকদের কাছে পৌঁছানো এবং ব্যবসার প্রসার ঘটানো সম্ভব।
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            বড় প্রতিষ্ঠানগুলো ইন্টারনেটের মাধ্যমে নিজেদের পরিচিতি বৃদ্ধি ও সাফল্য অর্জন করতে সক্ষম হলেও, ছোট ও মাঝারি ব্যবসা প্রতিষ্ঠানগুলো এ ক্ষেত্রে অনেক পিছিয়ে। <b>SoftExpert</b> এই ব্যবসা প্রতিষ্ঠানগুলোকে সাহায্য করার জন্যই কাজ করে যাচ্ছে।
                        </p>
                        
                        <div className="pt-4">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">আমাদের উদ্দেশ্য ও লক্ষ্য:</h3>
                            <div className="space-y-4">
                                {[
                                    "ছোট ও মাঝারি ব্যবসা প্রতিষ্ঠানগুলোকে ডিজিটাল মাধ্যমে তাদের ব্যবসা পরিচালনা করতে সহায়তা করা।",
                                    "ব্যবসা প্রতিষ্ঠানগুলোকে ইন্টারনেটের মাধ্যমে নতুন গ্রাহকদের কাছে পৌঁছানোর সুযোগ করে দেওয়া।",
                                    "ব্যবসার প্রসার ও উন্নয়নে ডিজিটাল সমাধান প্রদান করা।"
                                ].map((mission, idx) => (
                                    <div key={idx} className="flex gap-3 items-start">
                                        <CheckCircle2 className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-gray-700 text-lg">{mission}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex-1">
                        <Image 
                            src="https://digital-crop.com/wp-content/uploads/2024/03/our-missions.svg" 
                            alt="our missions" 
                            width={525} 
                            height={350} 
                            className="w-full max-w-lg mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-semibold uppercase tracking-wider">টীম মেম্বার</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">আমাদের কোর টীম মেম্বার</h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { name: "Kazi Ahmad Moin Uddin", role: "CEO", image: "/images/team/KaziAhmadMoinUddin.jpeg" },
                            { name: "Tarique Mosharraf", role: "Tech Lead", image: "/images/team/TariqueMosharraf.jpg" },
                            { name: "Joyto Noyan Sarker", role: "SEO Specialist", image: "/images/team/JoytoNoyanSarker.jpg" },
                            { name: "Tamim Mosharraf", role: "Creative Director", image: "/images/team/TamimMosharraf.jpg" }
                        ].map((member, idx) => (
                            <div key={idx} className="text-center group">
                                <div className="relative mb-6 overflow-hidden rounded-xl bg-gray-100 mx-auto max-w-[250px]">
                                    <Image 
                                        src={member.image} 
                                        alt={member.name} 
                                        width={400} 
                                        height={400} 
                                        className="w-full h-auto group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <h4 className="text-xl font-bold text-gray-900">{member.name}</h4>
                                <p className="text-blue-600 mt-1">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-r from-blue-700 to-blue-500 text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">আপনার প্রজেক্ট সম্পর্কে আলোচনা করতে আমাদের সাথে যোগাযোগ করুন</h2>
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

        </div>
    );
};

export default AboutUsPage;
