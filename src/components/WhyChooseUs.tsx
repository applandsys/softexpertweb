import { Users, BadgeCheck, DollarSign, Target, Truck, Headset } from 'lucide-react';

const features = [
  { icon: Users, title: "Expert Team", desc: "আমাদের দক্ষ এবং দীর্ঘ অভিজ্ঞতা সম্পূর্ণ টিম রয়েছে যারা আপনার ব্যবসার জন্য সেরা Digital Marketing ও IT সেবা প্রদান করে থাকে।" },
  { icon: BadgeCheck, title: "Experienced", desc: "Soft Expert Zone Ltd. অফিসিয়াল ভাবে ১০ বছরের অধিক সময় সফলতার সাথে গ্রাহকদের Digital Marketing ও IT সেবাসমূহ প্রদান আসছে।" },
  { icon: DollarSign, title: "Affordable Price", desc: "আমরা সাশ্রয়ী মূল্যে কাজের Quality বজায় রেখে উন্নতমানের Digital Marketing ও IT সেবা দিয়ে থাকি।" },
  { icon: Target, title: "Clearness", desc: "আমরা গ্রাহকদের সাথে সম্পূর্ণ স্বচ্ছতার সাথে কাজ করে থাকি এবং তাদের প্রতিটি পদক্ষেপে আপডেট রাখি। যেকোনো ধরনের প্রশ্ন বা পরামর্শের জন্য আমরা সর্বদা প্রস্তুত থাকি।" },
  { icon: Truck, title: "Fast Delivery", desc: "আমরা দ্রুত এবং দক্ষতার সাথে Quality বজায় রেখে প্রত্যেকটি কাজ সম্পন্ন করে থাকি এবং সঠিক সময়ে প্রজেক্ট ডেলিভার দিয়ে থাকি।" },
  { icon: Headset, title: "24/7 customer support", desc: "আমরা 24/7 সহায়তা প্রদান করি এবং আমাদের গ্রাহকদের প্রশ্ন ও সমস্যার দ্রুত সমাধান করি। আমাদের দক্ষ টিম আপনাদের সমস্যা সমাধানের জন্য সর্বদা প্রস্তুত।" }
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            কেন Soft Expert Zone Ltd. কে বেছে নিবেন?
          </h2>
          <div className="w-20 h-1 bg-teal-500 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-gray-100">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="p-10 border-r border-b border-gray-100 flex flex-col items-center text-center bg-white hover:bg-gray-50 transition-colors"
            >
              <div className="mb-6 w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center">
                <item.icon size={36} className="text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}