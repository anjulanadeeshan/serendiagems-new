"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// FAQ Item Component
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#1152d4]/30 transition-colors"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <h3 className="text-gray-900 font-medium text-lg pr-4">{question}</h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="material-symbols-outlined text-[#1152d4] flex-shrink-0"
        >
          expand_more
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-gray-600 leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}


const categories = [
  {
    id: 1,
    name: "Blue Sapphire",
    description: "The Royal Standard of Ceylon",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTCaY_EkGXz6lrrsqyXZ1rnopMkwq_kPEKnFC3lh_tP68XLmhSUdN5k_KVNCLVC29M4AEhAc4XkxAx6IRDx-746tndvLvYnkGgwr-ffUuZAtUL_rRPk3wOLzGA7x7vOja76c1S2arJyEnEeI9OovOhcocNXwbrruxWGwz_23xfI50BMoyxr86t7qIGx_CqZ-XZDSfFmxEEgAlwCuyBm4jYW1VKFXAwHFtjsZW8SWWeXLSewl8C2FkIVZ7BVA5NME8rjHKweaWRwfWs",
    featured: true,
  },
  {
    id: 2,
    name: "Ruby",
    description: "King of Gems",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAUn8VfJHfHXKAo3TaWOXLrYt9LYpgBdBJ-h9-6aVXLf8RrQuBcyXUp63ComqtsddUokM0FklZWKcXv3yOlOVjuxUv7rY2EtNA2zHsyVFKHZPQRy8es-hkXHY5R4AqitLF-XappCsoYorKhctO4FJI7-r0hb8amysR78FUz8mZQheRNI_KyigfJ1rJEyLGZ2QVGWud4_gL3mDZ7qsmfxGOobo89FnrQScgpDfyal_TvIpQAtVK1T0Y1B31bi_PWfVYRju7Yndaf3W2n",
    featured: false,
  },
  {
    id: 3,
    name: "Padparadscha",
    description: "Lotus Blossom Rarity",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAAX-Avzr-5AFW3w1F6YQBzINYvglGGUtrMQMTtpX4KzH9VLITzT_w3WSbVcd9RdE-HGYe_GOLZdIDeTciqxU90UrZ6P4vpEynfVGYvTu39-vTm_G1OvLcJZU3huYM4AiIWFKiz0BypJUwNEMcxEuuzlVohOw0QcxxV6zfpfGhjAQyBiXgI-65tqk4_GrlgZ6UlEMxsyO1Tvt5dklyQYZZ4VobCl0Tjz0OjNuCvov2-YuV2ic_ikKT1fYJPhOGY497HwPoxkNkuyvz8",
    featured: false,
  },
  {
    id: 4,
    name: "Spinel",
    description: "Vibrant Fire & Brilliance",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5wk3QPV2qt77ih5cO3P8TmIrRXH_EMLcy3Pi5HPlt3toMtlNzpMomJMxeiqLtEqgHCjmR9ampeWkxHyCV8Mk_T-8bvuH4_C7ETKuVH66LpHz_kkaBXHmUKirYM0z-qu1h69avDPQX94JiB6GigzAHkkDnB-7alAW1ODWg_HRCIUJVRhT1U-Cv-1gCcuAndXkDwh1Vtg75D7bCDZ5-_UOSFFUBZatpUf-YKUcs6BZQkg_dj8zWsnkdQN9kU04rYRg6EZSp8Zm79D44",
    featured: false,
  },
  {
    id: 5,
    name: "Cat's Eye",
    description: "Mystical Chatoyancy",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD4U-xog-erq81W9nJpIGKUEndwg2BYbqGQWbFjsz27kOGgB4op6jlnPlzk4YzXLqMt8gQZJ1r7PcpBT6CZRN9nb5xSXlXFIm4hgLbvoTZdHfEqJ-K9QSBg-WkYMGnK4aEih5TQgiKChErFDelOr8B-l5ar6USsOa9U4d4rulZMYfwqKfV8EV0g4-B2skwnYej0NG4OBfOJSfHGqKSFtJix-mGrun3oyC_JijSWXrKj8aflnFwpPLy76DSpajj0RbP4k2_DUzuRUQAq",
    featured: false,
  },
];

const artworks = [
  {
    id: 1,
    name: "The Kandy Royal Necklace",
    specs: "18k White Gold, 5ct Sapphire",
    status: "inquire",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBzboHJXeA-ppzIDfi_Lh1hXeEmDxv0n7DcCu7s9ARUlr_FHV0l50BbE5PRHjvF45ngtTbvan4j7mlPrwoXAlQ8K0JFNsZCtSvZi1eszRUcWvpf7Z1wulBP-ficHTShcb-5pz636a8TXhmutHuwaP5DRSxmpB5SpSRJ-hBHn_oiWITmOavwe7-WPFCdil1tkT6eWfEidWtpXbi8oc0gDzLx1lUiSBHdiY8YYhHGgCvxIb4uuJhjYoUluiaGO4_acvWIFYKpHm-ARjqb",
  },
  {
    id: 2,
    name: "Crimson Sunset Ring",
    specs: "22k Gold, 2.5ct Ruby",
    status: "sold",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDOhgpexZ3y-H3tnpyIEDHX9M6ZbiKtQVv51tFLT_ZJsg2UaGnccgUi8jvR_Hjx2S3N9wiIYQgdl4DuEiyDwktN_w2Dz7x2BvVs_4pRMg4Ji4XOBrsvq904LuMqoJuE8TBSI_Hi7dmb0fpNpHO4AtOAx6XvEKxLVB694W29YO_6k8uGkEBUIk_bFwl9Cc7SrIz_JM-C8QvwTsfXMo3dhSC4J9jAWBLJbpD_9Tr3RkY9yNGwl6rHpV4OLcLUZ4Ft78oKKdteXpX91-W5",
  },
  {
    id: 3,
    name: "Emerald Tear Earrings",
    specs: "Platinum, 4ct Total",
    status: "inquire",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA_U_Qw7hN5Myq02NnxrKV3gE3_K0NQ-ClIHzUm7LtERwWo6sdO1-7aXyTjiVLtHwybdElGj84L_Rj6z3LLX5pcp6Q6poNN3hEqNaAcDt7xF8exINzpRW0N2TIobnlnrl87ViSnrDUMQ-HejhAqgSMvKmVZ-e818-_kbCKR9Kve9WFr_ZOYxFhqwMbtLlD3uwgkCLLrysjsdKODHCFz_W1Sk__sovjgZaFjQpOeRUZLlJuxdXelmN2LWuUL4BSmhaC7nSbY2F71WNjg",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroImages = [
    "/hero/hero.jpeg",
    "/hero/hero1.jpeg",
    "/hero/hero3.jpeg",
    "/hero/hero4.jpeg",
  ];

  // Automatic slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50">
      {/* Hero Section */}
      <header className="relative flex min-h-screen items-center justify-center pt-24 pb-8 px-4 md:px-8">
        <div className="absolute inset-2 md:inset-4 z-0 rounded-3xl overflow-hidden">
          {/* Slideshow backgrounds */}
          {heroImages.map((image, index) => (
            <div
              key={image}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                className="h-full w-full bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.3) 0%, rgba(11, 15, 25, 0.7) 100%), url("${image}")`,
                }}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/20 z-0" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-10 flex flex-col items-start text-left max-w-4xl px-4 md:px-10 lg:px-20 w-full"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white text-5xl md:text-7xl font-serif font-bold leading-tight tracking-tight mb-6 drop-shadow-2xl"
          >
            The Heart of Sri Lanka
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-white text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-10 drop-shadow-xl"
          >
            Every sapphire tells a story of Sri Lanka’s rich earth. Discover hand-selected gemstones, ethically mined and precision-cut to capture the island’s light.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Link
              href="/collections"
              className="group relative flex items-center justify-center overflow-hidden rounded-full bg-[#1152d4] hover:bg-[#1152d4]/90 text-white h-14 px-8 transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(17,82,212,0.5)]"
            >
              <span className="text-base font-bold tracking-wide mr-2">
                Explore Collection
              </span>
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </header>

      {/* Features Section */}
      <section className="bg-slate-50 py-12 border-y border-slate-200">
        <div className="max-w-[1440px] mx-auto px-4 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {/* Natural Gemstones */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#1152d4]">
                <span className="material-symbols-outlined text-4xl">diamond</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">Natural Gemstones</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">Unheated & Untreated</p>
              </div>
            </motion.div>

            {/* Lab Certified */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#1152d4]">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">Lab Certified</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">Get Authenticity Proof</p>
              </div>
            </motion.div>

            {/* Affordable Range */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#1152d4]">
                <span className="material-symbols-outlined text-4xl">sell</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">Affordable Range</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">Wide Variety</p>
              </div>
            </motion.div>

            {/* 100% Payment Secure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#1152d4]">
                <span className="material-symbols-outlined text-4xl">shield</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">100% Payment Secure</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">Secure Payment</p>
              </div>
            </motion.div>

            {/* World Wide Shipping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#1152d4]">
                <span className="material-symbols-outlined text-4xl">public</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">World Wide Shipping</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">Global Delivery</p>
              </div>
            </motion.div>

            {/* 100% Pure */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[#1152d4]">
                <span className="material-symbols-outlined text-4xl">package_2</span>
              </div>
              <div>
                <h3 className="text-gray-900 font-bold text-sm mb-1">100% Pure</h3>
                <p className="text-gray-500 text-xs uppercase tracking-wide">Direct from Mine</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="layout-container flex grow flex-col max-w-[1440px] mx-auto w-full px-4 md:px-10 lg:px-20 py-16 gap-20">
        {/* Story Section: Raw to Polished */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-12"
        >
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 flex-1">
              <span className="text-[#1152d4] font-bold tracking-widest uppercase text-xs">
                Our Heritage
              </span>
              <h2 className="text-gray-900 font-serif text-4xl md:text-5xl font-bold leading-tight">
                From the Earth to Elegance
              </h2>
              <p className="text-gray-600 text-lg font-light leading-relaxed">
                Witness the journey of our gemstones, from the rich soils of
                Ratnapura to the hands of master cutters. We preserve the
                natural soul of every stone while revealing its inner brilliance
                through generations of craftsmanship.
              </p>
              <Link
                href="/about"
                className="flex items-center gap-2 text-[#1152d4] font-bold hover:text-white transition-colors mt-2 w-fit group"
              >
                <span>Read Our Story</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex-1 grid grid-cols-2 gap-4 w-full"
            >
              <div className="flex flex-col gap-3 group">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center rounded-lg overflow-hidden relative shadow-lg"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDO4hlOoy4ecrdHUi31zyf4TqkucPNoR7EmMHhSZP9lu3f7VFww9qdIcp9e_DnzIwNSnoUQGk0Nhg9nRqWuq7-EoPhIMDKjpgdfMIhzkykKnQ6g3jAbcAyAMyaz7LUjL92WIGGGYRXqyczelDfF-tGPkLs80pj9CJwStlIhpjlobTJrMMnZr3I6DMETsHzw7gdDiD8bhP2V-LmBTjOLaseRrFG4i5qFj3XbTkHprknviMK2J2uYDiZPEsFvXFXnUEWoruo023cQupnZ")`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-serif font-medium">
                    Ethically Sourced Raw
                  </p>
                  <p className="text-gray-500 text-sm">
                    Direct from Ratnapura mines.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 group mt-12">
                <div
                  className="w-full aspect-[4/5] bg-cover bg-center rounded-lg overflow-hidden relative shadow-lg border border-slate-200"
                  style={{
                    backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuB8Ml4K9lCp7GNcEvhCKDwTma4WKlpCs8qQxPysEYTEf3R6frWl9JulXIKVikaERzki3yWByL7aQtk5ZjP2QQEX-LLWgkCBpnjMtE6r4aTVzSTrmOc6Xe6_OuIX0Nn0QG5toB1dPw4Byrm2qwgAy37kBInNl_xZ59CNjn27IYExiFcZ2THCArkyf6WhUCWCmly_ORJe55w4GQFyjmzG6u2S7XZlD3UDZpUUTcA7NJHffi2oLsrGDdtnzBISNesmWpBd-GhYQT2q_X6N")`,
                  }}
                >
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-[#1152d4]/10 transition-colors duration-500 mix-blend-overlay" />
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-serif font-medium">
                    Masterfully Polished
                  </p>
                  <p className="text-gray-500 text-sm">
                    Cut by heritage artisans.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Categories Slider */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-8"
        >
          <motion.div
            variants={fadeInUp}
            className="border-b border-slate-200 pb-4"
          >
            <h2 className="text-gray-900 text-3xl md:text-4xl font-serif font-bold">
              Gemstone Categories
            </h2>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex overflow-x-auto gap-6 no-scrollbar pb-4 snap-x snap-mandatory"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="flex flex-col gap-4 min-w-[280px] snap-start group cursor-pointer"
              >
                <Link href="/collections" className="w-full aspect-[3/4] rounded-xl overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url("${category.image}")` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  {category.featured && (
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="bg-[#1152d4]/90 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider backdrop-blur-sm">
                        Featured
                      </span>
                    </div>
                  )}
                </Link>
                <div>
                  <h3 className="text-gray-900 text-xl font-serif font-medium group-hover:text-[#1152d4] transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Artworks / Bespoke Jewelry */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center max-w-2xl mx-auto flex flex-col gap-4"
          >
            <span className="text-[#1152d4] font-bold tracking-widest uppercase text-xs">
              Atelier
            </span>
            <h2 className="text-gray-900 text-4xl md:text-5xl font-serif font-bold">
              Bespoke Artworks
            </h2>
            <p className="text-gray-600">
              Unique jewelry pieces designed around the soul of our most
              exceptional stones.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {artworks.map((artwork, index) => (
              <motion.div
                key={artwork.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#1152d4]/30 transition-colors shadow-sm"
              >
                <div className="aspect-square overflow-hidden relative">
                  <Image
                    src={artwork.image}
                    alt={artwork.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex flex-col gap-2">
                  <h3 className="text-gray-900 text-xl font-serif">
                    {artwork.name}
                  </h3>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-500 text-sm">{artwork.specs}</span>
                    {artwork.status === "inquire" ? (
                      <span className="text-[#1152d4] text-sm font-bold cursor-pointer group-hover:underline">
                        Inquire
                      </span>
                    ) : (
                      <span className="text-gray-400 text-sm font-medium italic">
                        Sold Out
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} className="flex justify-center mt-4">
            <Link
              href="/collections"
              className="border border-slate-300 text-gray-700 px-8 py-3 rounded-full hover:bg-[#1152d4] hover:text-white hover:border-[#1152d4] transition-colors font-medium text-sm tracking-wide"
            >
              View All Masterpieces
            </Link>
          </motion.div>
        </motion.section>

        {/* Luxury Testimonial */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center py-10"
        >
          <div className="bg-white p-10 md:p-16 rounded-2xl border border-slate-200 relative max-w-4xl text-center shadow-lg">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-slate-50 p-3 rounded-full border border-slate-200 text-[#1152d4]">
              <span className="material-symbols-outlined text-4xl">
                format_quote
              </span>
            </div>
            <div className="flex justify-center gap-1 mb-6 text-[#FFD700]">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined fill-current">
                  star
                </span>
              ))}
            </div>
            <blockquote className="text-gray-900 text-xl md:text-2xl font-serif italic leading-relaxed mb-8">
              &quot;The sapphire I purchased from Serendia Gems is unlike anything
              I&apos;ve seen in European boutiques. The depth of color and the
              ethical provenance make it truly priceless.&quot;
            </blockquote>
            <div className="flex flex-col items-center gap-1">
              <cite className="text-gray-900 font-bold not-italic">
                Eleanor Sterling
              </cite>
              <span className="text-gray-500 text-sm uppercase tracking-wider">
                London, UK
              </span>
            </div>
          </div>
        </motion.section>

        {/* FAQ Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center py-20"
        >
          <div className="max-w-3xl w-full">
            <div className="text-center mb-12">
              <span className="text-[#1152d4] font-bold tracking-widest uppercase text-xs">
                Common Questions
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-serif font-bold mt-3">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              <FAQItem
                question="Are your gemstones natural and treated?"
                answer="All our gemstones are 100% natural. We clearly disclose any treatments. The majority of our collection consists of unheated and untreated stones, directly sourced from mines."
              />
              <FAQItem
                question="Do you provide certification?"
                answer="Yes, every gemstone comes with a certificate of authenticity from reputable gemological laboratories. We ensure transparency in every purchase."
              />
              <FAQItem
                question="What is your return policy?"
                answer="We offer a 30-day money-back guarantee. If you are not completely satisfied with your purchase, you can return it for a full refund or exchange, provided it is in its original condition."
              />
              <FAQItem
                question="Do you ship internationally?"
                answer="Yes, we offer secure, insured worldwide shipping. Shipping times vary by location, but we strive to deliver your precious gems as safely and quickly as possible."
              />
              <FAQItem
                question="Can I request a custom jewelry design?"
                answer="Absolutely! We specialize in bespoke jewelry design. Our master craftsmen can create unique pieces around the gemstone of your choice. Contact us to discuss your vision."
              />
              <FAQItem
                question="How do I care for my gemstones?"
                answer="Store your gemstones separately in soft pouches, clean them with mild soap and water, and avoid exposure to harsh chemicals. We provide detailed care instructions with every purchase."
              />
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
