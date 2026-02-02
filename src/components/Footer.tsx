import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-slate-200 mt-auto">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 text-gray-900">
                            <Image
                                src="/logo.jpg"
                                alt="Serendia Gems Logo"
                                width={48}
                                height={48}
                                className="object-contain"
                            />
                            <h2 className="text-xl font-serif font-bold">Serendia Gems</h2>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Exporting the finest Sri Lankan gemstones to the world with
                            integrity, transparency, and a commitment to our heritage.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#1152d4] transition-colors"
                            >
                                <span className="material-symbols-outlined">public</span>
                            </a>
                            <a
                                href="#"
                                className="text-gray-400 hover:text-[#1152d4] transition-colors"
                            >
                                <span className="material-symbols-outlined">
                                    alternate_email
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Links - Collections */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-900 font-bold text-sm tracking-widest uppercase">
                            Collections
                        </h3>
                        <Link
                            href="/collections"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Blue Sapphires
                        </Link>
                        <Link
                            href="/collections"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Rubies
                        </Link>
                        <Link
                            href="/collections"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Padparadscha
                        </Link>
                        <Link
                            href="/collections"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Engagement Rings
                        </Link>
                    </div>

                    {/* Links - Company */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-900 font-bold text-sm tracking-widest uppercase">
                            Company
                        </h3>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Our Story
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Ethical Mining
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Certification (GIA/GRS)
                        </Link>
                        <Link
                            href="/about"
                            className="text-gray-600 hover:text-[#1152d4] transition-colors text-sm"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col gap-4">
                        <h3 className="text-gray-900 font-bold text-sm tracking-widest uppercase">
                            Stay Updated
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Subscribe to receive exclusive offers and gemological insights.
                        </p>
                        <div className="flex gap-2">
                            <input
                                className="bg-slate-50 border border-slate-300 rounded-lg px-4 py-2 text-gray-900 text-sm w-full focus:outline-none focus:border-[#1152d4] transition-colors"
                                placeholder="Email address"
                                type="email"
                            />
                            <button className="bg-[#1152d4] hover:bg-blue-600 text-white rounded-lg px-4 py-2 text-sm font-bold transition-colors">
                                Join
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-xs">
                        © 2024 Serendia Gems. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <span className="text-gray-400 text-xs hover:text-[#1152d4] cursor-pointer transition-colors">
                            Privacy Policy
                        </span>
                        <span className="text-gray-400 text-xs hover:text-[#1152d4] cursor-pointer transition-colors">
                            Terms of Service
                        </span>
                        <span className="text-gray-400 text-xs hover:text-[#1152d4] cursor-pointer transition-colors">
                            Shipping &amp; Returns
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
