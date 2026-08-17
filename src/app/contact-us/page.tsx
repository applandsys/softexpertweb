import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactUsPage = () => {
    return (
        <div className="w-full bg-white text-gray-800">
            {/* Page Header */}
            <section className="bg-gray-900 text-white py-20 px-4 md:px-8 text-center bg-cover bg-center" style={{ backgroundImage: "url('https://digital-crop.com/wp-content/uploads/2024/03/main-pageheader.jpg')" }}>
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-bold">যোগাযোগ</h1>
                </div>
            </section>

            {/* Intro Section */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900">আমাদের সাথে যোগাযোগ করুন</h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                        আমরা <strong>SoftExpert</strong> টিম আপনার ডিজিটাল জগতের যে কোন সমস্যার সমাধানের জন্য বদ্ধপরিকর। যে কোন তথ্যের জন্য নিচে দেওয়া ফর্মটি পূরণ করুন। আমরা আগামী 24 ঘন্টার মধ্যেই আপনার সমস্যার/ প্রশ্নের উত্তর নিয়ে যোগাযোগ করবো ইনশাল্লাহ। অথবা সরাসরি যোগাযোগ করতে নিচে দেওয়া মাধ্যমগুলো ব্যবহার করুন।
                    </p>
                </div>
            </section>

            {/* Info Boxes */}
            <section className="py-8 px-4 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Phone size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">মোবাইল নাম্বার / Whatsapp </h3>
                        <a href="tel:+8801837664478" className="text-blue-600 font-medium hover:underline text-lg">
                            +8801722447755
                        </a>
                    </div>
                    
                    <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">ইমেইল</h3>
                        <a href="mailto:support@softexpertzone.com" className="text-blue-600 font-medium hover:underline text-lg">
                            support@softexpertzone.com
                        </a>
                    </div>

                    <div className="bg-white border border-gray-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center group">
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                            <MapPin size={32} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">অফিসের ঠিকানা</h3>
                        <p className="text-gray-600 font-medium leading-relaxed">
                            House # 19, Road # 01, Sector # 06,<br/>Uttara, Dhaka 1230
                        </p>
                    </div>
                </div>
            </section>

            {/* Map & Form Section */}
            <section className="py-16 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
                    {/* Google Map */}
                    <div className="flex-1 w-full min-h-[400px] rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white">
                        <iframe 
                            src="https://maps.google.com/maps?q=Sector%2006,%20Uttara,%20Dhaka&t=m&z=15&output=embed&iwloc=near" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, minHeight: '400px' }} 
                            allowFullScreen={true} 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Office Location Map"
                        ></iframe>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="flex-1 space-y-8 bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">আমাদের সাথে যোগাযোগ করার জন্য নিচের ফর্মটি ব্যবহার করুন</h2>
                            <p className="text-gray-600 leading-relaxed">
                                আমাদের সম্পর্কে কোন প্রশ্ন অথবা কোন প্রজেক্টের বিষয়ে আলোচনা করতে নিচের ফর্মটি সঠিক তথ্য দিয়ে যোগাযোগ করুন। আমরা আপনার সাথে ২৪ ঘন্টার মধ্যে যোগাযোগ করবো।
                            </p>
                        </div>
                        
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUsPage;
