import Link from "next/link";

export default function Services() {
    const servicesData = [
        {
            title: "Digital Marketing",
            description: "অনলাইনে আপনার ব্যবসার প্রচার প্রচারণা করার জন্য ইফেক্টিভ Digital Marketing Service প্রদান করে থাকি। যা আপনার ব্যবসার অনলাইন পরিচিতি ও মুনাফা বাড়াতে সাহায্য করবে এবং আপনার ব্যবসাকে অনলাইনে সুন্দর ভাবে উপস্থাপন করতে সাহায্য করবে।",
            href: "#digital-marketing",
            icon: (
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
                </svg>
            )
        },
        {
            title: "Graphic Design",
            description: "আমাদের দক্ষ Graphic Design টিম আপনার ব্যবসার জন্য Logo, Banner, Branding, Packaging সহ বিভিন্ন Graphic সেবা প্রদান করে থাকে। দৃষ্টিনন্দন ডিজাইন আপনার ব্যবসাকে গ্রাহকের সামনে সঠিকভাবে উপস্থাপন করতে সাহায্য করবে।",
            href: "#graphic-design",
            icon: (
                <svg className="w-12 h-12 text-purple-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1-1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a16.004 16.004 0 0 1-4.764-4.648l0 0Z" />
                </svg>
            )
        },
        {
            title: "Search Engine Optimization",
            description: "আপনার ওয়েবসাইট কে সার্চ ইঞ্জিনে টপ র‍্যাংক করাতে আমরা দিচ্ছি প্রফেশনাল Search Engine Optimization এর সকল সার্ভিস। যা আপনার ওয়েবসাইটের Organic Traffic বৃদ্ধিতে সহায়তা করবে এবং অধিক মুনাফা অর্জন করতে সাহায্য করবে।",
            href: "#seo",
            icon: (
                <svg className="w-12 h-12 text-teal-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            )
        },
        {
            title: "Domain & Hosting",
            description: "আমরা দিচ্ছি সুপার ফাস্ট, সিকিউর, নির্ভরযোগ্য SSD storage-এ ওয়েব Domain & Hosting রেজিস্ট্রেশন সার্ভিস। যেখানে আপনি নিশ্চিন্তে আপনার ওয়েবসাইট Host করতে পারবেন। যেকোন ধরনের Hosting समस्याओं জন্য পেয়ে যাবেন দক্ষ সাপোর্ট টিম।",
            href: "#domain-hosting",
            icon: (
                <svg className="w-12 h-12 text-amber-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v5m6-5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 0v5" />
                </svg>
            )
        },
        {
            title: "Web Design & Development",
            description: "আমরা বিভিন্ন ধরনের Web Design & Development সার্ভিস দিয়ে থাকি। যেমনঃ ব্যবসায়িক, ইকমার্স, পোর্টফোলিও সহ যেকোনো ওয়েবসাইট। যা অনলাইনে আপনার ব্যবসাকে ফুটিয়ে তুলতে এবং আপনার ব্যবসায়িক পরিচিতি বাড়াতে বিশেষ ভুমিকা রাখবে।",
            href: "#web-development",
            icon: (
                <svg className="w-12 h-12 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                </svg>
            )
        },
        {
            title: "Software Development",
            description: "আপনার ব্যবসা সুন্দর ভাবে পরিচালনা করার জন্য আমরা যেকোনো ধরনের কাস্টম Software Development সেবা প্রদান করে থাকি। যেমনঃ School Management, Accounting Software, Custom Website Development ইত্যাদি।",
            href: "#software-development",
            icon: (
                <svg className="w-12 h-12 text-rose-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-zinc-50 py-20 px-6 font-sans dark:bg-zinc-950">
            <div className="mx-auto max-w-7xl">

                {/* Header Content Wrapper */}
                <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col gap-4">
                    <h2 className="text-3xl font-extrabold text-slate-900 dark:text-zinc-50 sm:text-4xl tracking-tight">
                        আমাদের <span className="text-blue-600">Digital Marketing</span> ও <span className="text-teal-600">IT Service</span> সমূহ
                    </h2>
                    <p className="text-gray-600 dark:text-zinc-400 text-base leading-relaxed">
                        আপনার ব্যবসার জন্য আমরা দিচ্ছি উন্নতমানের Digital Marketing ও IT সেবাসমূহ। যা আপনার ব্যবসা বৃদ্ধিতে সহায়তা করবে এবং আপনার ব্যবসার অনলাইন উপস্থিতি নিশ্চিত করবে।
                    </p>
                </div>

                {/* 3-Column Grid Layout (নতুন কার্ডগুলো স্বয়ংক্রিয়ভাবে নিচে বসে যাবে) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-zinc-900 p-8 flex flex-col gap-5 border border-gray-100 dark:border-zinc-800 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-300 items-start rounded-sm group"
                        >
                            {/* Icon Container */}
                            <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-sm group-hover:scale-105 transition-transform duration-300">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-slate-800 dark:text-zinc-100 tracking-tight">
                                {service.title}
                            </h3>

                            {/* Description Body */}
                            <p className="text-gray-600 dark:text-zinc-400 text-sm leading-6 text-justify">
                                {service.description}
                            </p>

                            {/* View Details Link */}
                            <Link
                                href={service.href}
                                className="mt-auto text-blue-600 dark:text-blue-400 font-semibold text-sm inline-flex items-center gap-1.5 border-b border-transparent hover:border-blue-600 transition-all pt-2"
                            >
                                বিস্তারিত দেখুন
                                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}