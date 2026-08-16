"use client";

import Image from "next/image";

export default function AboutUs() {
    return (
        <section className="w-full bg-white py-20 px-6 font-sans dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Side: Vector Illustration */}
                    <div className="relative w-full aspect-[4/3] max-w-xl mx-auto lg:max-w-none flex items-center justify-center">
                        <Image
                            src="/images/about-us.svg"
                            alt="Delivering Digital Success Illustration"
                            width={550}
                            height={450}
                            priority
                            className="object-contain"
                        />
                    </div>

                    {/* Right Side: Copywriting Content */}
                    <div className="flex flex-col gap-6 text-left">

                        {/* Heading */}
                        <h2 className="text-3xl font-extrabold text-slate-900 dark:text-zinc-50 sm:text-4xl lg:text-5xl tracking-tight leading-tight">
                            Delivering Digital Success <br />
                            to <span className="text-blue-600">100+ Happy Customers</span>
                        </h2>

                        {/* Paragraph 1 */}
                        <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed text-justify">
                            আপনি কি আপনার ব্যবসাকে ডিজিটাল দুনিয়ায় এগিয়ে নিয়ে যেতে চান? আমরা আপনাকে সাহায্য করতে পারি!
                            <span className="font-semibold text-slate-800 dark:text-zinc-200"> SoftExpert</span> একটি সমন্বিত Software Development, Digital Marketing এবং IT Service কোম্পানি যা আপনার ব্যবসার সাফল্যের জন্য প্রয়োজনীয় সমস্ত কিছু সরবরাহ করে থাকে। আমাদের অফিস বগুড়া শহরের হাকিড় মোড়ে অবস্থিত। আমরা বাংলাদেশ সহ বিশ্বের বিভিন্ন দেশে ফ্রিল্যান্সিং প্রজেক্টের মাধ্যমে সুনামের সাথে Marketing ও সকল IT সেবা দিয়ে আসছি। আমাদের দিচ্ছি Digital Marketing, Graphic Design, SEO, Web Design & Development, Domain & Hosting, Software Development ইত্যাদি, যা আপনি আপনার প্রয়োজন অনুসারে নিতে পারেন।
                        </p>

                        {/* Paragraph 2 */}
                        <p className="text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed text-justify">
                            আমরা আপনার ব্যবসার জন্য সঠিক Digital Marketing এবং IT Service প্রদান করে থাকি। আজই আমাদের সাথে যোগাযোগ করুন এবং আপনার ব্যবসাকে নিয়ে যান অনলাইন সাফল্যের এক নতুন উচ্চতায়।
                        </p>

                        {/* Action Group: Button + Phone Call */}
                        <div className="mt-4 flex flex-row flex-wrap items-center gap-6 sm:gap-8">

                            {/* Square Button */}
                            <a
                                href="#about"
                                className="inline-flex h-12 items-center justify-center rounded-none bg-blue-700 hover:bg-blue-800 text-white px-8 font-semibold tracking-wide shadow-md transition-colors min-w-[160px]"
                            >
                                আমাদের সম্পর্কে
                            </a>

                            {/* Headset Phone Link */}
                            <a
                                href="tel:+8801722447755"
                                className="inline-flex items-center gap-3 text-lg sm:text-xl font-bold text-blue-700 hover:text-blue-800 transition-colors group"
                            >
                                {/* Minimal Headset SVG Icon */}
                                <div className="p-1 group-hover:scale-105 transition-transform">
                                    <svg className="w-6 h-6 stroke-current fill-none" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-3.394 11.25 11.25 0 1 0-19.482 0A9.094 9.094 0 0 0 6 18.72M18 18.72a9 9 0 0 0-12 0m12 0a2.25 2.25 0 0 1-2.25 2.25H10.5A2.25 2.25 0 0 1 8.25 18.72M12 2.25V4.5m0 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
                                    </svg>
                                </div>
                                <span>+8801722447755</span>
                            </a>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}