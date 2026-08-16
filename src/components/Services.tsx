import Link from "next/link";
import { Headset, Users, PenTool, DollarSign, Eye, Monitor } from "lucide-react";

export default function Services() {
    const servicesData = [
        {
            title: "Software Development",
            description: "আপনার ব্যবসা সুন্দর ভাবে পরিচালনা করার জন্য আমরা যেকোনো ধরনের কাস্টম Software Development সেবা প্রদান করে থাকি। যেমনঃ School Management, Accounting Software, Custom Website Development ইত্যাদি।",
            href: "/software-development",
            icon: <Headset className="w-10 h-10 text-teal-500" />
        },
        {
            title: "Digital Marketing",
            description: "অনলাইনে আপনার ব্যবসার প্রচার প্রচারণা করার জন্য ইফেক্টিভ Digital Marketing Service প্রদান করে থাকি। যা আপনার ব্যবসার অনলাইন পরিচিতি ও মুনাফা বাড়াতে সাহায্য করবে।",
            href: "/digital-marketing",
            icon: <Users className="w-10 h-10 text-teal-500" />
        },
        {
            title: "Landing Page Design",
            description: "যেকোনো প্রোডাক্ট বা সার্ভিসের মার্কেটিং ও অ্যাড ক্যাম্পেইনের জন্য আমরা হাই-কনভার্টিং Landing Page ডিজাইন করে থাকি। যা আপনার লিড জেনারেশন এবং সেলস বাড়াতে সরাসরি সাহায্য করবে।",
            href: "/landing-page",
            icon: <PenTool className="w-10 h-10 text-teal-500" />
        },
        {
            title: "Search Engine Optimization",
            description: "আপনার ওয়েবসাইট কে সার্চ ইঞ্জিনে টপ র‍্যাংক করাতে আমরা দিচ্ছি প্রফেশনাল Search Engine Optimization এর সকল সার্ভিস। যা আপনার ওয়েবসাইটের Organic Traffic বৃদ্ধিতে সহায়তা করবে।",
            href: "#seo",
            icon: <DollarSign className="w-10 h-10 text-teal-500" />
        },
        {
            title: "Domain & Hosting",
            description: "আমরা দিচ্ছি সুপার ফাস্ট, সিকিউর, নির্ভরযোগ্য SSD storage-এ ওয়েব Domain & Hosting রেজিস্ট্রেশন সার্ভিস। যেখানে আপনি নিশ্চিন্তে আপনার ওয়েবসাইট Host করতে পারবেন।",
            href: "#domain-hosting",
            icon: <Eye className="w-10 h-10 text-teal-500" />
        },
        {
            title: "Web Design & Development",
            description: "আমরা বিভিন্ন ধরনের Web Design & Development সার্ভিস দিয়ে থাকি। যেমনঃ ব্যবসায়িক, ইকমার্স, পোর্টফোলিও সহ যেকোনো ওয়েবসাইট।",
            href: "/web-design-development",
            icon: <Monitor className="w-10 h-10 text-teal-500" />
        }
    ];

    return (
        <section className="w-full bg-[#0d1117] py-20 px-4 md:px-8 font-sans">
            <div className="mx-auto max-w-7xl">
                {/* 3-Column Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#161b22] p-8 flex flex-col gap-5 rounded-xl border border-[#30363d] hover:border-teal-500/50 transition-colors group"
                        >
                            {/* Icon */}
                            <div className="mb-2">
                                {service.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white tracking-wide">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed text-left flex-grow">
                                {service.description}
                            </p>

                            {/* View Details Link */}
                            <Link
                                href={service.href}
                                className="mt-4 text-teal-500 hover:text-teal-400 font-medium text-sm inline-flex items-center gap-1.5 transition-all w-fit"
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