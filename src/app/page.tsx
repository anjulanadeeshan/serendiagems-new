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
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <h3 className="text-gray-900 font-medium text-lg transition-colors group-hover:text-[#1152d4]">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="material-symbols-outlined text-gray-400 group-hover:text-[#1152d4] flex-shrink-0"
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
            <div className="pb-8 pt-0">
              <p className="text-gray-600 leading-relaxed max-w-2xl">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


const categories = [
  {
    id: 1,
    name: "Blue Sapphire",
    price: 4250,
    image: "/collections/blue.jpg",
  },
  {
    id: 2,
    name: "Pink Sapphire",
    price: 3100,
    image: "/collections/pink.png",
  },
  {
    id: 3,
    name: "Ruby",
    price: 8500,
    image: "/collections/ruby.png",
  },
  {
    id: 4,
    name: "Yellow Sapphire",
    price: 5900,
    image: "/collections/yellow.png",
  },
  {
    id: 5,
    name: "Padparadscha",
    price: 12500,
    image: "/collections/padparadscha.png",
  },
  {
    id: 6,
    name: "Cat's Eye",
    price: 4800,
    image: "/collections/cats-eye.png",
  },
  {
    id: 7,
    name: "Green Sapphire",
    price: 2800,
    image: "/collections/green.png",
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
        {/* Philosophy Section: Rare Gems */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-10"
        >
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            {/* Left side: Overlapping Images */}
            <motion.div variants={fadeInUp} className="flex-1 relative">
              <div className="group relative aspect-square w-full max-w-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <motion.div
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src="/neckless.jpg"
                    alt="Fine Jewelry"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute -bottom-8 -right-8 w-48 h-48 rounded-xl overflow-hidden border-8 border-white shadow-xl hidden md:block"
              >
                <Image
                  src="/philosophy-section.jpeg"
                  alt="Gemstone Detail"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Right side: Content */}
            <motion.div variants={fadeInUp} className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <h2 className="text-gray-900 font-serif text-5xl md:text-6xl leading-[1.1]">
                  Rare gems for <br />
                  <span className="text-[#b38e5d] italic font-serif">unique moments</span>
                </h2>
                <div className="w-16 h-[2px] bg-gray-300 mt-6" />
              </div>

              <p className="text-gray-600 text-lg font-light leading-relaxed max-w-xl">
                At Serendia Gems, we don't just sell stones; we curate legacies.
                Each gem in our collection is hand-selected from the
                mines of Ratnapura district in Sri Lanka ensuring
                unparalleled clarity and vibrant color.
              </p>

              <div className="grid grid-cols-2 gap-10 py-4">
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-gray-900">500+</span>
                  <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">Stones Sold</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-3xl font-bold text-gray-900">100%</span>
                  <span className="text-gray-400 text-sm uppercase tracking-wider font-medium">Certified Natural</span>
                </div>
              </div>

              <Link
                href="/about"
                className="flex items-center gap-2 text-gray-900 font-bold border-b-2 border-gray-900 w-fit pb-1 group hover:text-[#1152d4] hover:border-[#1152d4] transition-all"
              >
                <span className="text-xs uppercase tracking-[0.2em]">Read our philosophy</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Categories Slider */}
        {/* Gemstone Categories Grid */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col gap-10"
        >
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <h2 className="text-gray-900 text-3xl md:text-5xl font-serif font-bold mb-4 uppercase tracking-widest text-center">
              Gemstone Categories
            </h2>
            <p className="text-gray-500 text-sm max-w-2xl mx-auto">
              Explore the finest selection of ethically sourced gemstones from the heart of Sri Lanka.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-12"
          >
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="flex flex-col gap-4 group transition-all duration-300"
              >
                <Link href="/collections" className="w-full aspect-square rounded-none overflow-hidden relative bg-white border border-slate-100 p-6">
                  <div className="relative w-full h-full">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-contain transition-transform duration-1000 group-hover:scale-110"
                    />
                  </div>
                </Link>
                <div className="flex flex-col gap-1">
                  <h3 className="text-gray-900 text-sm font-medium group-hover:text-[#1152d4] transition-colors line-clamp-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-900 font-bold text-sm">
                    ${category.price.toLocaleString()}
                  </p>
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
          <div className="max-w-4xl w-full">
            <div className="text-center mb-16">
              <span className="text-[#b38e5d] font-bold tracking-[0.2em] uppercase text-xs">
                Common Questions
              </span>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-serif font-bold mt-4">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="flex flex-col">
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
