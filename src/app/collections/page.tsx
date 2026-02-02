"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { getAllProducts, Product } from "@/data/productsData";

function CollectionsContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const categoryFilter = searchParams.get("category");
    const { addItem, openCart } = useCart();
    const [favorites, setFavorites] = useState<string[]>([]);

    // Sort and filtering states (simulation based on image)
    const [selectedType, setSelectedType] = useState<string[]>([]);
    const [selectedColor, setSelectedColor] = useState<string>("");

    const allProducts = getAllProducts();

    // Filter logic
    const products = allProducts.filter(p => {
        const matchesCategory = categoryFilter
            ? p.category?.toLowerCase().replace(/\s+/g, '-') === categoryFilter.toLowerCase()
            : true;
        return matchesCategory;
    });

    const categories = [
        { name: "Blue Sapphire", slug: "blue-sapphire" },
        { name: "Pink Sapphire", slug: "pink-sapphire" },
        { name: "Yellow Sapphire", slug: "yellow-sapphire" },
        { name: "Padparadscha", slug: "padparadscha" },
        { name: "Ruby", slug: "ruby" },
        { name: "Cat's Eye", slug: "cats-eye" },
        { name: "Emerald", slug: "emerald" },
    ];

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

    const handleCategoryClick = (slug: string) => {
        if (categoryFilter === slug) {
            router.push('/collections');
        } else {
            router.push(`/collections?category=${slug}`);
        }
    };

    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            <div className="mx-auto max-w-[1440px] px-4 md:px-10 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Sidebar - Filter Pane */}
                    <aside className="lg:w-64 flex-shrink-0 flex flex-col gap-10">
                        {/* Categories */}
                        <div className="flex flex-col gap-6">
                            <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider">Category</h3>
                            <nav className="flex flex-col gap-3">
                                {categories.map((cat) => (
                                    <button
                                        key={cat.slug}
                                        onClick={() => handleCategoryClick(cat.slug)}
                                        className={`text-left text-sm transition-colors hover:text-[#b38e5d] ${categoryFilter === cat.slug
                                            ? "text-[#b38e5d] font-bold"
                                            : "text-gray-500 font-medium"
                                            }`}
                                    >
                                        {cat.name}
                                    </button>
                                ))}
                            </nav>
                        </div>

                        {/* Filter by: */}
                        <div className="flex flex-col gap-10">
                            <h3 className="text-gray-900 font-bold text-sm uppercase tracking-wider">Filter by:</h3>

                            {/* Type Filter */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-gray-900">Type</span>
                                    <span className="material-symbols-outlined text-gray-400 text-sm">expand_less</span>
                                </div>
                                <div className="flex flex-col gap-3">
                                    {["Unheated", "Heat Only", "Natural"].map((type) => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                            <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-[#b38e5d] focus:ring-[#b38e5d]" />
                                            <span className="text-sm text-gray-500 group-hover:text-gray-900">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Shape Filter */}
                            <div className="flex flex-col gap-5">
                                <div className="flex items-center gap-2 cursor-pointer group">
                                    <span className="material-symbols-outlined text-gray-900 text-lg">arrow_drop_down</span>
                                    <span className="text-sm font-bold text-gray-900">Shape</span>
                                </div>
                                <div className="flex flex-col gap-3 ml-1">
                                    {[
                                        { name: "Briolette", count: 1 },
                                        { name: "Cabochon", count: 1 },
                                        { name: "Cushion", count: 8 },
                                        { name: "Mix", count: 1 },
                                        { name: "Octagon", count: 1 },
                                        { name: "Oval", count: 20 },
                                    ].map((shape) => (
                                        <label key={shape.name} className="flex items-center justify-between group cursor-pointer">
                                            <div className="flex items-center gap-3">
                                                <input type="checkbox" className="w-4 h-4 border-gray-300 rounded text-[#b38e5d] focus:ring-[#b38e5d] cursor-pointer" />
                                                <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">{shape.name}</span>
                                            </div>
                                            <span className="text-sm text-gray-400 font-light group-hover:text-gray-600">({shape.count})</span>
                                        </label>
                                    ))}
                                </div>
                                <div className="h-[1px] bg-gray-100 mt-2" />
                            </div>

                            {/* Price Filter Redesigned */}
                            <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-2 cursor-pointer group">
                                    <span className="material-symbols-outlined text-gray-900 text-lg">arrow_drop_down</span>
                                    <span className="text-sm font-bold text-gray-900">Price (Rs)</span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex-1 flex items-center border border-gray-200 rounded min-w-0">
                                        <div className="bg-gray-100 px-2 py-2 text-[#b38e5d] font-bold text-sm border-r border-gray-200">Rs</div>
                                        <input type="number" placeholder="139400" className="w-full px-2 py-2 text-sm focus:outline-none bg-transparent" />
                                    </div>
                                    <span className="text-gray-400">-</span>
                                    <div className="flex-1 flex items-center border border-gray-200 rounded min-w-0">
                                        <div className="bg-gray-50 px-2 py-2 text-gray-500 font-medium text-sm border-r border-gray-200">Rs</div>
                                        <input type="number" placeholder="2515600" className="w-full px-2 py-2 text-sm focus:outline-none bg-transparent" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-4 px-1">
                                    <div className="relative h-1 bg-gray-900 rounded-full mt-4">
                                        <div className="absolute -top-[7px] left-0 w-4 h-4 rounded-full bg-white border-2 border-gray-900 cursor-pointer shadow-sm hover:scale-110 transition-transform" />
                                        <div className="absolute -top-[7px] right-0 w-4 h-4 rounded-full bg-white border-2 border-gray-900 cursor-pointer shadow-sm hover:scale-110 transition-transform" />

                                        {/* Ticks Simulation */}
                                        <div className="absolute top-0 left-0 w-full h-full flex justify-between px-1">
                                            {[...Array(5)].map((_, i) => (
                                                <div key={i} className="w-[1px] h-2 bg-gray-900 -mt-0.5" />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex justify-between text-[10px] text-gray-500 font-medium tracking-tighter">
                                        <span>139,400</span>
                                        <span>733,450</span>
                                        <span>1,327,500</span>
                                        <span>1,921,550</span>
                                        <span>2,515,600</span>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full py-4 bg-[#b38e5d] text-white rounded-lg font-bold text-sm shadow-md transition-all active:scale-95 hover:bg-[#a17e4f]">
                                Apply Filters
                            </button>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 flex flex-col gap-8">
                        {/* Header & Controls */}
                        <div className="flex flex-col gap-6">
                            {/* Breadcrumbs */}
                            <nav className="flex items-center gap-2 text-[12px] font-medium text-gray-400 uppercase tracking-widest">
                                <Link href="/" className="hover:text-gray-900">Main Page</Link>
                                <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                <Link href="/collections" className={`${!categoryFilter ? "text-gray-900" : "hover:text-gray-900"}`}>Category</Link>
                                {categoryFilter && (
                                    <>
                                        <span className="material-symbols-outlined text-[12px]">chevron_right</span>
                                        <span className="text-gray-900 uppercase">{categoryFilter.replace(/-/g, ' ')}</span>
                                    </>
                                )}
                            </nav>

                            <div className="flex items-end justify-between">
                                <h1 className="text-4xl font-serif font-bold text-gray-900 capitalize">
                                    {categoryFilter ? categoryFilter.replace(/-/g, ' ') : "All Collections"}
                                </h1>
                                <div className="flex items-center gap-4 border border-gray-200 rounded-lg px-4 py-2 text-sm font-medium text-gray-500 cursor-pointer hover:bg-gray-50 transition-colors">
                                    <span>Sort by: <span className="text-gray-900">Most Popular</span></span>
                                    <span className="material-symbols-outlined text-sm">sort</span>
                                </div>
                            </div>

                            {/* Active Tags */}
                            <div className="flex flex-wrap gap-2">
                                {categoryFilter && (
                                    <button
                                        onClick={() => router.push('/collections')}
                                        className="flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-200 transition-colors"
                                    >
                                        {categoryFilter.toUpperCase()}
                                        <span className="material-symbols-outlined text-[14px]">close</span>
                                    </button>
                                )}
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                            {products.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden bg-white border-b border-slate-100 p-8">
                                        <Link href={`/product/${product.id}`} className="block relative w-full h-full">
                                            <Image
                                                src={product.images[0]}
                                                alt={product.name}
                                                fill
                                                className="object-contain transition-transform duration-1000 group-hover:scale-120"
                                            />
                                        </Link>

                                        {/* Top Badges */}
                                        <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
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
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-lg font-serif font-bold text-gray-900 group-hover:text-[#b38e5d] transition-colors line-clamp-1">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center justify-between">
                                                <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                                                    Price
                                                </p>
                                                <span className="text-xl font-bold text-gray-900">
                                                    ${product.price.toLocaleString()}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between gap-3 pt-2">
                                            <button
                                                onClick={() => handleAddToCart(product)}
                                                className="flex-1 py-3 bg-[#b38e5d] text-white rounded-xl font-bold text-sm shadow-md shadow-[#b38e5d]/10 transform transition-all active:scale-95"
                                            >
                                                Add to Cart
                                            </button>
                                            <Link
                                                href={`/product/${product.id}`}
                                                className="p-3 text-gray-400 border border-gray-100 rounded-xl hover:text-[#b38e5d] hover:border-[#b38e5d]/20 transition-all active:scale-95"
                                            >
                                                <span className="material-symbols-outlined text-[20px] leading-none">visibility</span>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Pagination Simulation */}
                        <div className="mt-12 flex items-center justify-center gap-2">
                            <span className="text-sm font-bold text-gray-400 cursor-not-allowed">Previous</span>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    className={`w-10 h-10 rounded-lg text-sm font-bold transition-all ${num === 1 ? "bg-[#b38e5d] text-white shadow-lg shadow-[#b38e5d]/20" : "text-gray-500 hover:bg-gray-100"
                                        }`}
                                >
                                    {num}
                                </button>
                            ))}
                            <span className="text-sm font-bold text-gray-400">...</span>
                            <button className="w-10 h-10 rounded-lg text-sm font-bold text-gray-500 hover:bg-gray-100">20</button>
                            <span className="text-sm font-bold text-[#b38e5d] cursor-pointer hover:underline">Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default function CollectionsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white pt-32 flex items-center justify-center font-serif text-2xl animate-pulse text-[#b38e5d]">Loading Collection...</div>}>
            <CollectionsContent />
        </Suspense>
    );
}
