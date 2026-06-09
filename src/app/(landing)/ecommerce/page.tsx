import React from 'react';
import Footer from "@/components/Footer";
import HeroLanding from "@/components/HeroLanding";

const EcommerceLandingPage = () => {
    return (
        <div className="min-h-screen bg-white text-black">
            <main>
                <HeroLanding />
                <div className="w-full bg-black text-white py-20 px-6 font-sans ">
                    <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 justify-between items-center px-6">
                        <div>
                            <div>
                                <h1 className="text-4xl font-semibold text-white my-4">
                                    অনলাইনে ব্যবসা থাকলে যে বাড়তি সুবিধা পাওয়া যায়
                                </h1>
                                <p>
                                    আমাদের E-Commerce Website in Bangladesh ছোট থেকে বড় সব ধরনের Online ব্যবসার জন্য উপযুক্ত।

                                    Online Shop-এ: প্রোডাক্ট Catalog, অর্ডার ও Customer Management এক Platform-এ সহজে পরিচালনা করুন। ফ্যাশন, ইলেকট্রনিক্স, গ্রোসারি, কসমেটিকস বা Digital Product যেকোনো ধরনের পণ্যের জন্য এই E Commerce Website Template সমাধান সবচেয়ে কার্যকর।

                                    Brand ও D2C ব্যবসায়: এই Best E Commerce Website ব্র্যান্ডগুলোর জন্য একটি শক্তিশালী Online Sales Channel তৈরি করে। Middleman ছাড়াই সরাসরি Customer-এর কাছে পৌঁছান।

                                    Retail ব্যবসায়: Offline থেকে Online-এ আসতে চান? দ্রুত Digital Store তৈরি করে যেকোনো সময় যেকোনো জায়গা থেকে বিক্রি শুরু করুন। Campaign বা Landing Page-এর জন্য আমাদের Product Selling Landing Page দেখুন।

                                    Startup ও বড় Company-তে: ব্যবসা ছোট হোক বা বড়, এই সিস্টেম সম্পূর্ণ Scalable ও Customizable। ব্যবসা বড় হওয়ার সাথে সাথে নতুন Feature যোগ করে সহজে Grow করুন।
                                </p>
                            </div>

                            <div>
                                <h1 className="text-4xl font-semibold text-white my-4">
                                    আমরদের সার্ভিসে বাড়তি যে সব সুবিধা
                                </h1>
                                <p>
                                    প্রোডাক্ট আপডেট, অর্ডার Tracking, Payment Confirmation ও Customer Management আলাদাভাবে করতে গিয়ে সময় নষ্ট হয়, ভুল বাড়ে এবং Customer অভিজ্ঞতা নষ্ট হয়। Facebook-এ Message নিয়ে বিক্রি করা, bKash-এ পেমেন্ট নেওয়া ও Excel-এ Stock রাখা দিন দিন কঠিন হয়ে পড়ে।

                                    আমাদের Bangladesh E Commerce Website এই সমস্যাগুলোর একটাই সমাধান দেয়। প্রোডাক্ট লিস্টিং, অর্ডার, পেমেন্ট ও রিপোর্টিং সবকিছু এক জায়গা থেকে Automated-ভাবে পরিচালনা করুন। ব্যবসা হয় সংগঠিত, দ্রুত ও লাভজনক। আমাদের সব Products এই একই লক্ষ্যে তৈরি।
                                </p>
                            </div>

                        </div>
                        <div>
                            Cards
                        </div>
                    </div>
                </div>
            </main>
            <Footer /> {/* Add the footer here */}
        </div>
    );
};

export default EcommerceLandingPage;