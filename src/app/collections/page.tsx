"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getAllProducts, Product } from "@/data/productsData";

function CollectionsContent() {
    const searchParams = useSearchParams();
    const categoryFilter = searchParams.get("category");
    const { addItem, openCart } = useCart();
    const [favorites, setFavorites] = useState<string[]>([]);

    const allProducts = getAllProducts();
    const products = categoryFilter
        ? allProducts.filter(p => p.category?.toLowerCase().replace(/\s+/g, '-') === categoryFilter.toLowerCase())
        : allProducts;

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
        <main className="flex-1 bg-slate-50 pt-32 pb-20">
            <div className="mx-auto flex max-w-[1440px] flex-col px-4 md:px-10 lg:px-20">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 pb-8 text-sm font-medium text-gray-400">
                    <Link href="/" className="hover:text-gray-900 transition-colors">
                        Home
                    </Link>
                    <span className="material-symbols-outlined text-[14px]">
                        chevron_right
                    </span>
                    <span className="text-gray-900">Collections</span>
                </nav>

                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6">
                        The Serendia Collection
                    </h1>
                    <p className="text-lg md:text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
                        Discover our ethically sourced, hand-selected sapphires and rubies
                        from the heart of Sri Lanka. Each stone tells a story of heritage
                        and brilliance.
                    </p>
                </motion.div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden bg-slate-50">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
                                    {product.badge ? (
                                        <span
                                            className={`px-3 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider text-white shadow-sm ${product.badgeColor}`}
                                        >
                                            {product.badge}
                                        </span>
                                    ) : <div />}

                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleFavorite(product.id);
                                        }}
                                        className="size-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-400 group-hover:text-rose-500 transition-all duration-300 shadow-sm"
                                    >
                                        <span className="material-symbols-outlined text-[20px] leading-none">
                                            {favorites.includes(product.id) ? "favorite" : "favorite"}
                                        </span>
                                    </button>
                                </div>

                                {/* Hover Overlay Add to Cart */}
                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <Link href={`/product/${product.id}`} className="p-6 md:p-8 flex flex-col gap-4">
                                <div>
                                    <h3 className="text-xl font-serif font-bold text-gray-900 group-hover:text-[#1152d4] transition-colors mb-1">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-500 text-sm font-light">
                                        {product.weight} • {product.cut}
                                    </p>
                                </div>

                                <div className="flex items-center justify-between pt-2">
                                    <span className="text-2xl font-bold text-gray-900 font-serif">
                                        ${product.price.toLocaleString()}
                                    </span>
                                    <span
                                        className={`px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider ${product.treatment === "Natural"
                                            ? "text-emerald-600 bg-emerald-50 border border-emerald-100"
                                            : product.treatment === "Heated" || product.treatment === "Heat Only"
                                                ? "text-amber-600 bg-amber-50 border border-amber-100"
                                                : "text-blue-600 bg-blue-50 border border-blue-100"
                                            }`}
                                    >
                                        {product.treatment}
                                    </span>
                                </div>

                                {/* Action Button (Desktop Only on hover or always on mobile) */}
                                <button
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAddToCart(product);
                                    }}
                                    className="w-full mt-2 py-3 bg-[#1152d4] text-white rounded-xl font-bold text-sm transform transition-all duration-300 active:scale-95 group-hover:bg-[#0e43ad]"
                                >
                                    Add to Cart
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default function CollectionsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-slate-50 pt-32 flex items-center justify-center font-serif text-2xl animate-pulse">Loading Collection...</div>}>
            <CollectionsContent />
        </Suspense>
    );
}
