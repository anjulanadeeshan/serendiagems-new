"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const gemCategories = [
    { name: "Blue Sapphires", href: "/collections?category=blue-sapphire" },
    { name: "Pink Sapphires", href: "/collections?category=pink-sapphire" },
    { name: "Yellow Sapphires", href: "/collections?category=yellow-sapphire" },
    { name: "Rubies", href: "/collections?category=ruby" },
    { name: "Padparadscha", href: "/collections?category=padparadscha" },
    { name: "Spinels", href: "/collections?category=spinel" },
    { name: "Cat's Eye", href: "/collections?category=cats-eye" },
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { totalItems, totalPrice, toggleCart } = useCart();
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            <nav
                className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-[1400px] mt-4"
            >
                <div className="bg-white/80 backdrop-blur-xl shadow-lg border border-white/40 rounded-full px-6 lg:px-12 py-5">
                    <div className="flex items-center justify-between w-full">
                        {/* Left Section - Home & Sapphires Dropdown (Desktop) */}
                        <div className="hidden md:flex items-center flex-1 gap-8">
                            {/* Home Link */}
                            <Link
                                href="/"
                                className="text-gray-700 hover:text-[#1152d4] text-sm font-medium transition-colors"
                            >
                                Home
                            </Link>

                            {/* Sapphires Dropdown */}
                            <div className="relative" ref={dropdownRef}>
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center gap-2 text-gray-700 hover:text-[#1152d4] text-sm font-medium transition-colors"
                                >
                                    <span>Sapphires</span>
                                    <motion.span
                                        animate={{ rotate: dropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                        className="material-symbols-outlined text-lg"
                                    >
                                        expand_more
                                    </motion.span>
                                </button>

                                {/* Dropdown Menu */}
                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-0 mt-3 w-56 bg-white backdrop-blur-xl border border-slate-200 rounded-xl shadow-xl overflow-hidden"
                                        >
                                            <div className="py-2">
                                                {gemCategories.map((category) => (
                                                    <Link
                                                        key={category.name}
                                                        href={category.href}
                                                        onClick={() => setDropdownOpen(false)}
                                                        className="flex items-center px-4 py-3 text-gray-700 hover:text-[#1152d4] hover:bg-blue-50 transition-colors text-sm"
                                                    >
                                                        {category.name}
                                                    </Link>
                                                ))}
                                                <div className="border-t border-slate-200 my-2" />
                                                <Link
                                                    href="/collections"
                                                    onClick={() => setDropdownOpen(false)}
                                                    className="flex items-center px-4 py-3 text-[#1152d4] hover:text-blue-700 hover:bg-[#1152d4]/10 transition-colors text-sm font-medium"
                                                >
                                                    <span className="material-symbols-outlined text-lg mr-3">
                                                        arrow_forward
                                                    </span>
                                                    View All Collections
                                                </Link>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Mobile Left - Logo */}
                        <Link href="/" className="md:hidden flex items-center gap-3 text-gray-900">
                            <Image
                                src="/logo.jpg"
                                alt="Serendia Gems Logo"
                                width={40}
                                height={40}
                                className="object-contain rounded-full"
                            />
                            <h2 className="text-gray-900 text-lg font-serif font-bold tracking-tight">
                                Serendia Gem
                            </h2>
                        </Link>

                        {/* Center Logo (Desktop) */}
                        <Link
                            href="/"
                            className="hidden md:flex items-center gap-4 text-gray-900 absolute left-1/2 transform -translate-x-1/2"
                        >
                            <Image
                                src="/logo.jpg"
                                alt="Serendia Gems Logo"
                                width={64}
                                height={64}
                                className="object-contain rounded-full"
                            />
                            <h2 className="text-gray-900 text-lg font-serif font-bold tracking-tight">
                                Serendia Gems
                            </h2>
                        </Link>

                        {/* Right Section - Contact Us, About Us & Cart (Desktop) + Mobile Icons */}
                        <div className="flex items-center gap-6 flex-1 justify-end">
                            {/* Contact Us Link (Desktop) */}
                            <Link
                                href="/about#contact"
                                className="hidden md:flex text-gray-700 hover:text-[#1152d4] text-sm font-medium transition-colors"
                            >
                                Contact Us
                            </Link>

                            {/* About Us Link (Desktop) */}
                            <Link
                                href="/about"
                                className="hidden md:flex text-gray-700 hover:text-[#1152d4] text-sm font-medium transition-colors"
                            >
                                About Us
                            </Link>

                            {/* Cart Button with Price */}
                            <button
                                onClick={toggleCart}
                                className="flex items-center gap-2 text-gray-700 hover:text-[#1152d4] transition-colors relative"
                            >
                                {/* Total Price (Desktop) */}
                                {totalItems > 0 && (
                                    <span className="hidden md:block text-sm font-medium text-gray-600">
                                        ${totalPrice.toLocaleString()}
                                    </span>
                                )}
                                <span className="material-symbols-outlined text-2xl">shopping_bag</span>
                                {totalItems > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        className="absolute -top-2 -right-2 bg-[#1152d4] text-white text-xs font-bold h-5 w-5 flex items-center justify-center rounded-full"
                                    >
                                        {totalItems}
                                    </motion.span>
                                )}
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="md:hidden text-gray-700 hover:text-[#1152d4] transition-colors"
                            >
                                <span className="material-symbols-outlined text-2xl">
                                    {mobileMenuOpen ? "close" : "menu"}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-white border-t border-slate-200"
                        >
                            <div className="flex flex-col px-6 py-6">
                                {/* Sapphires Section */}
                                <div className="mb-4">
                                    <h3 className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-3">
                                        Collections
                                    </h3>
                                    <div className="flex flex-col gap-2">
                                        {gemCategories.map((category) => (
                                            <Link
                                                key={category.name}
                                                href={category.href}
                                                className="flex items-center text-gray-700 hover:text-[#1152d4] text-base font-medium transition-colors py-2"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <span className="material-symbols-outlined text-[#1152d4] text-lg mr-3">
                                                    diamond
                                                </span>
                                                {category.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="border-t border-slate-200 my-4" />

                                {/* Other Links */}
                                <Link
                                    href="/"
                                    className="text-gray-700 hover:text-[#1152d4] text-base font-medium transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/collections"
                                    className="text-gray-700 hover:text-[#1152d4] text-base font-medium transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    View All Collections
                                </Link>
                                <Link
                                    href="/about#contact"
                                    className="text-gray-700 hover:text-[#1152d4] text-base font-medium transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-gray-700 hover:text-[#1152d4] text-base font-medium transition-colors py-2"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About Us
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Cart Drawer */}
            <CartDrawer />
        </>
    );
}
