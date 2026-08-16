import React from "react";
import { ArrowRight, Headphones } from "lucide-react";

export default function CallToAction() {
    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-8">
            <div className="bg-gradient-to-r from-[#0d6efd] via-[#0a58ca] to-[#023e8a] rounded-xl p-6 md:p-10 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">

                {/* Decorative subtle background overlay to match the original image pattern */}
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                {/* Left Side: Bengali Heading Text */}
                <div className="text-white text-center lg:text-left font-bold text-xl md:text-2xl lg:text-3xl max-w-2xl leading-snug tracking-wide z-10">
                    আপনার ব্যবসার জন্য একটি ওয়েবসাইট তৈরি করার জন্য এখনি যোগাযোগ করুন।
                </div>

                {/* Right Side: Action Elements */}
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 z-10 w-full lg:w-auto justify-center">

                    {/* Contact Button */}
                    <button className="bg-white text-slate-900 font-bold px-6 py-3.5 rounded-sm flex items-center gap-2 hover:bg-slate-100 transition-all active:scale-[0.98] shadow-sm w-full sm:w-auto justify-center text-[15px]">
                        যোগাযোগ করুন
                        <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                    </button>

                    {/* Phone Number Link */}
                    <a
                        href="tel:+8801722447755"
                        className="flex items-center gap-2 text-white font-semibold text-lg md:text-xl border-b-2 border-white/80 pb-1 hover:border-white transition-colors tracking-wider whitespace-nowrap"
                    >
                        +88 01722-447755
                        <Headphones className="w-5 h-5 stroke-[2] inline-block" />
                    </a>

                </div>
            </div>
        </div>
    );
}