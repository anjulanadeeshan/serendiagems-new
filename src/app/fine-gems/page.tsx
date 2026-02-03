"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { getAllProducts, Product } from "@/data/productsData";

export default function FineGemsPage() {
    const { addItem, openCart } = useCart();
    const [favorites, setFavorites] = useState<string[]>([]);

    const allProducts = getAllProducts();
    const products = allProducts.filter(p => p.category === "Fine Gems");

    const toggleFavorite = (id: string) => {
        setFavorites((prev: string[]) =>
            prev.includes(id) ? prev.filter((fav: string) => fav !== id) : [...prev, id]
        );
    };

    const handleAddToCart = (product: Product) => {
        addItem({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            weight: product.weight,
            cut: product.cut,
        });
        openCart();
    };

    return (
        <main className="min-h-screen bg-[#F8FAFC] pt-32 pb-20">
            <div className="mx-auto max-w-[1440px] px-4 md:px-10 lg:px-20">
                {/* Header Section */}
                <div className="flex flex-col items-center text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-6 mt-10">
                            Fine <span className="text-[#b38e5d]">Gemstones</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
                            Discover our curated collection of semi-precious gemstones. Each piece is hand-selected for its exceptional color, clarity, and unique character, straight from the heart of nature.
                        </p>
                    </motion.div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-white p-10">
                                <Link href={`/product/${product.id}`} className="block relative w-full h-full">
                                    <Image
                                        src={product.images[0]}
                                        alt={product.name}
                                        fill
                                        className="object-contain transition-transform duration-1000 group-hover:scale-110"
                                    />
                                </Link>

                                {/* Badge */}
                                {product.badge && (
                                    <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white ${product.badgeColor || 'bg-[#b38e5d]'}`}>
                                        {product.badge}
                                    </div>
                                )}

                                {/* Favorite Button */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleFavorite(product.id);
                                    }}
                                    className="absolute top-6 right-6 size-12 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-md text-gray-400 hover:text-rose-500 transition-all duration-300 shadow-sm border border-slate-100"
                                >
                                    <span className={`material-symbols-outlined text-[22px] ${favorites.includes(product.id) ? "fill-1 text-rose-500" : ""}`}>
                                        favorite
                                    </span>
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-8 flex flex-col gap-6">
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-[#b38e5d] transition-colors">
                                            {product.name}
                                        </h3>
                                        <span className="text-2xl font-bold text-[#b38e5d]">
                                            ${product.price.toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">
                                        {product.description}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 text-xs font-medium text-gray-400">
                                    <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                        <span className="material-symbols-outlined text-sm">weight</span>
                                        {product.weight}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                                        <span className="material-symbols-outlined text-sm">diamond</span>
                                        {product.cut}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between gap-4 pt-4 border-t border-slate-50">
                                    <button
                                        onClick={() => handleAddToCart(product)}
                                        className="flex-1 py-4 bg-[#b38e5d] text-white rounded-2xl font-bold text-sm shadow-lg shadow-[#b38e5d]/20 transform transition-all hover:bg-[#a17e4f] active:scale-95"
                                    >
                                        Add to Cart
                                    </button>
                                    <Link
                                        href={`/product/${product.id}`}
                                        className="p-4 text-gray-400 border border-slate-100 rounded-2xl hover:text-[#b38e5d] hover:border-[#b38e5d]/30 transition-all hover:bg-slate-50 active:scale-95"
                                    >
                                        <span className="material-symbols-outlined text-[24px]">visibility</span>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="mt-24 bg-white rounded-[40px] p-12 md:p-20 border border-slate-100 shadow-sm overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38e5d]/5 rounded-full -mr-32 -mt-32 blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-100 rounded-full -ml-32 -mb-32 blur-3xl" />

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
                                Authentic Sri Lankan Quality
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                Every gemstone in our collection comes with a guarantee of authenticity. We pride ourselves on ethical sourcing and expert craftsmanship, ensuring you receive only the finest pieces.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#b38e5d] font-bold text-lg hover:gap-4 transition-all"
                            >
                                Inquire about custom settings
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </Link>
                        </div>
                        <div className="shrink-0">
                            <Image
                                src="/logo.jpg"
                                alt="Serendia Gems"
                                width={200}
                                height={200}
                                className="rounded-2xl shadow-xl grayscale"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
