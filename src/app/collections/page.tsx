"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { getAllProducts } from "@/data/productsData";

const products = getAllProducts();

export default function CollectionsPage() {
    const { addItem, openCart } = useCart();
    const [favorites, setFavorites] = useState<string[]>([]);

    const toggleFavorite = (id: string) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    const handleAddToCart = (product: (typeof products)[0]) => {
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
        <main className="flex-1 bg-[#F8FAFC] pt-20">
            <div className="mx-auto flex max-w-[1440px] flex-col px-4 py-6 md:px-8 lg:px-12">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap items-center gap-2 pb-6 text-sm text-gray-500">
                    <Link href="/" className="hover:text-[#1152d4] transition-colors">
                        Home
                    </Link>
                    <span className="material-symbols-outlined text-[16px]">
                        chevron_right
                    </span>
                    <span className="font-medium text-gray-900">Collections</span>
                </nav>

                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
                >
                    <div className="flex max-w-2xl flex-col gap-3">
                        <h1 className="text-4xl font-black leading-tight tracking-tight text-gray-900 lg:text-5xl">
                            The Serendia Collection
                        </h1>
                        <p className="text-lg text-gray-600">
                            Discover our ethically sourced, hand-selected sapphires and rubies
                            from the heart of Sri Lanka. Each stone tells a story of heritage
                            and brilliance.
                        </p>
                    </div>
                </motion.div>

                {/* Layout: Sidebar + Grid */}
                <div className="w-full">
                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="group relative flex flex-col overflow-hidden rounded-xl bg-white border border-slate-200 transition-all duration-300 hover:shadow-xl hover:border-[#1152d4]/30"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden bg-slate-50">
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                                        <Image
                                            src={product.images[0]}
                                            alt={product.name}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {product.badge && (
                                            <div className="absolute left-3 top-3 z-20">
                                                <span
                                                    className={`inline-flex items-center rounded ${product.badgeColor} px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm`}
                                                >
                                                    {product.badge}
                                                </span>
                                            </div>
                                        )}
                                        <button
                                            onClick={() => toggleFavorite(product.id)}
                                            className="absolute right-3 top-3 z-20 flex size-8 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-[#1152d4]"
                                        >
                                            <span className="material-symbols-outlined text-lg">
                                                {favorites.includes(product.id)
                                                    ? "favorite"
                                                    : "favorite"}
                                            </span>
                                        </button>
                                        {/* Quick Add Button */}
                                        <motion.button
                                            initial={{ y: 20, opacity: 0 }}
                                            whileHover={{ scale: 1.02 }}
                                            className="absolute bottom-4 left-4 right-4 z-20 translate-y-full rounded-lg bg-[#1152d4] text-white font-semibold py-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 hover:bg-blue-600"
                                            onClick={() => handleAddToCart(product)}
                                        >
                                            Add to Cart
                                        </motion.button>
                                    </div>
                                    <Link href={`/product/${product.id}`} className="flex flex-col gap-2 p-5">
                                        <div className="flex items-start justify-between">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#1152d4] transition-colors">
                                                    {product.name}
                                                </h3>
                                                <p className="text-sm text-gray-500">
                                                    {product.weight} • {product.cut}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="mt-2 flex items-center justify-between">
                                            <span className="text-xl font-bold text-gray-900">
                                                ${product.price.toLocaleString()}
                                            </span>
                                            <span
                                                className={`text-xs font-medium px-2 py-0.5 rounded ${product.treatment === "Natural"
                                                    ? "text-green-500 bg-green-500/10"
                                                    : "text-orange-500 bg-orange-500/10"
                                                    }`}
                                            >
                                                {product.treatment}
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
