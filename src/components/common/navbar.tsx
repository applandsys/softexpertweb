import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full bg-white border-b border-gray-100 py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

                {/* Logo Section */}
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                        DC
                    </div>
                    <div>
                        <div className="text-2xl font-bold text-gray-900 tracking-tight">
                            Soft<span className="text-teal-600">Expert</span>
                        </div>
                        <div className="text-[10px] text-gray-500 uppercase tracking-wider">
                            Ensure Growth of Your Online Business
                        </div>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
                    {["হোম", "প্রোডাক্টস +", "আমাদের সার্ভিস +", "আমাদের সম্পর্কে", "পোর্টফোলিও", "ব্লগ", "যোগাযোগ"].map((item) => (
                        <Link key={item} href="#" className="hover:text-blue-600 transition-colors">
                            {item}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <button className="bg-gradient-to-r from-blue-700 to-blue-500 text-white px-6 py-2 rounded shadow-md hover:shadow-lg transition-all font-medium">
                    ফ্রি কনসালটেশন
                </button>

            </div>
        </nav>
    );
}