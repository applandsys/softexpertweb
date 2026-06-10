import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Users, MonitorSmartphone , Handbag} from "lucide-react";

const features = [
    {
        icon: Handbag,
        title: "সম্পূর্ণ ডাইনামিক ই-কমার্স সিস্টেম",
        description: "ক্যাটাগরি ভিত্তিক প্রোডাক্ট লিস্টিং, উন্নত সার্চ অপশন এবং সহজ ফিল্টার সিস্টেমের মাধ্যমে কাস্টমার খুব দ্রুত পছন্দের পণ্য খুঁজে নিতে পারে।",
    },
    {
        icon: Rocket,
        title: "রিটেইল ব্যবসা",
        description: "যেসব রিটেইল ব্যবসা অফলাইন থেকে অনলাইনে যেতে চায়, তাদের জন্য এটি একটি সহজ ও কার্যকর সমাধান। খুব দ্রুত ডিজিটাল স্টোর তৈরি করে যেকোনো সময়, যেকোনো জায়গা থেকে সেল শুরু করা যায়।",
    },
    {
        icon: Users,
        title: "ব্র্যান্ড ও ডাইরেক্ট-টু-কাস্টমার (D2C)",
        description: "এই Best E-commerce Website ব্র্যান্ডগুলোর জন্য একটি শক্তিশালী অনলাইন সেলস চ্যানেল তৈরি করে।",
    },
    {
        icon: MonitorSmartphone,
        title: "স্টার্টআপ ও বড় কোম্পানি",
        description: "ব্যবসা ছোট হোক বা বড়, এই সিস্টেমটি সম্পূর্ণ স্কেলযোগ্য ও কাস্টমাইজেবল। ব্যবসা বড় হওয়ার সাথে সাথে নতুন ফিচার যোগ করে বা প্রয়োজন অনুযায়ী পরিবর্তন করে সহজেই গ্রো করা যায়।",
    },
];

export default function MainFeatures() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <Card
                            key={index}
                            className="border border-zinc-800 bg-zinc-900 shadow-sm rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-zinc-950/50"
                        >
                            <CardContent className="p-8 flex flex-col items-start">
                                <div className="text-blue-400 mb-6">
                                    <Icon className="w-10 h-10 stroke-[1.25]" />
                                </div>

                                <h3 className="text-xl font-extrabold text-zinc-50 mb-4 tracking-tight">
                                    {feature.title}
                                </h3>

                                <p className="text-zinc-400 text-[15px] leading-relaxed antialiased font-normal">
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    );
                })}
        </div>
    );
}