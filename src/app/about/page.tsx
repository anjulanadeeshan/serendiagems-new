"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
};

export default function AboutPage() {
    return (
        <div className="flex flex-col items-center w-full pt-16 bg-[#F8FAFC]">
            {/* Hero Section */}
            <div className="w-full max-w-[1280px] px-4 md:px-10 py-5">
                <div className="@container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex min-h-[560px] flex-col gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-8 overflow-hidden shadow-2xl"
                        style={{
                            backgroundImage: `linear-gradient(rgba(16, 22, 34, 0.4) 0%, rgba(16, 22, 34, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBYvmlCtu9ssqJC4pCAXsrEBCxhHOMBU9QtOgMh6dmJzCKhYJv7u-zRO9BGyKQrBqFzkp93JI3QD7y3fqQuiqoa7PWTuTidi0_Ia_CedVSIxJQalYJ2rEdlXjA3c2PrBIxxXmsGyQCtHUeQfX6k46forE_fPWx_T78vdYpscAVQkTOJhTlLBXFoStVZBfITeXkgApVEaZoZDdjDGT1WzOOerTmiuu3rN6sKdhwPVBHDl_XrSYym7yuLTV7X4kMRwK2Wi1kAvNX5f-X7")`,
                        }}
                    >
                        {/* hii */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="flex flex-col gap-4 text-center max-w-[800px] z-10"
                        >
                            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-[-0.033em] drop-shadow-lg">
                                Unearthing Sri Lanka&apos;s Finest Treasures
                            </h1>
                            <h2 className="text-gray-200 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                                For generations, we have been the bridge between the rich soils
                                of Ratnapura and the world&apos;s most exclusive jewelry
                                collections.
                            </h2>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="flex gap-4 z-10 pt-4"
                        >
                            <Link
                                href="/collections"
                                className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#1152d4] hover:bg-blue-700 transition-all text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-blue-900/50"
                            >
                                <span>Explore Our Legacy</span>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Story Section 1: Image Left, Text Right */}
            <div className="w-full max-w-[1080px] px-4 md:px-10 py-12 md:py-20">
                <div className="flex flex-col gap-10 md:gap-16 md:flex-row items-center">
                    <motion.div
                        {...fadeInUp}
                        className="w-full md:w-1/2 aspect-[4/3] rounded-xl shadow-xl overflow-hidden group relative"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWbm8yJ94FzFmXDnUI6RgGnmSiq7xDD8sT69H-76lQKYBe_BkecEIRbW6LliMNq-LAEaNWayMHA4NHjY8ypE-9NUyQZ_l-SNdBC9HUParxkDFBJwEPPeC3Aq3q3pJxhkaWafD6AoP6AMXJbJURcI7AcOuq7hY7K6Bj54eSP_yQBlkiTda99BHTI6T4fWtA7KeQL8kOsf_xmmgdRi-lGEcRNCoiDN1h2ZzHpzMeWyWauMZqoOgW-XhSBYeEqeFe5_0IOnUSFwW1Cs7n"
                            alt="Historical gem mining in Ratnapura"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                    </motion.div>
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-1/2 flex flex-col gap-6 justify-center"
                    >
                        <div className="flex flex-col gap-4 text-left">
                            <div className="inline-flex items-center gap-2 text-[#1152d4] font-bold uppercase tracking-widest text-xs">
                                <span className="w-8 h-[2px] bg-[#1152d4]" />
                                History
                            </div>
                            <h2 className="text-gray-900 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                                The Ratnapura Legacy
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Deep within the rich soils of the City of Gems, our story
                                begins. For over a century, our family has ethically sourced
                                rough stones directly from the artisanal miners of Ratnapura. We
                                honor the earth that gifts us these treasures and the hands that
                                unearth them.
                            </p>
                        </div>
                        <button className="self-start text-[#1152d4] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            Read Our History
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                    </motion.div>
                </div>
            </div>

            {/* Story Section 2: Text Left, Image Right */}
            <div className="w-full max-w-[1080px] px-4 md:px-10 py-12 md:py-20">
                <div className="flex flex-col-reverse gap-10 md:gap-16 md:flex-row items-center">
                    <motion.div
                        {...fadeInUp}
                        transition={{ delay: 0.2 }}
                        className="w-full md:w-1/2 flex flex-col gap-6 justify-center"
                    >
                        <div className="flex flex-col gap-4 text-left">
                            <div className="inline-flex items-center gap-2 text-[#1152d4] font-bold uppercase tracking-widest text-xs">
                                <span className="w-8 h-[2px] bg-[#1152d4]" />
                                Craftsmanship
                            </div>
                            <h2 className="text-gray-900 text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">
                                Ethical Sourcing & Precision Cutting
                            </h2>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                Every stone is cut by master lapidaries who preserve the
                                gem&apos;s soul while maximizing its brilliance. We are
                                committed to sustainable practices that benefit local
                                communities, ensuring that every gem you purchase supports the
                                ecosystem it came from.
                            </p>
                        </div>
                        <button className="self-start text-[#1152d4] font-bold flex items-center gap-2 hover:gap-3 transition-all">
                            View Certifications
                            <span className="material-symbols-outlined text-sm">
                                arrow_forward
                            </span>
                        </button>
                    </motion.div>
                    <motion.div
                        {...fadeInUp}
                        className="w-full md:w-1/2 aspect-[4/3] rounded-xl shadow-xl overflow-hidden group relative"
                    >
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB50Oy7StUzpEsN7y0F69HelVpzfBvVrHeEWh1om89-8zkXhtHMTvyM9PfBntBetSopQTF0rIb69VwFxJq95M9nOfwwQi1sO_ktoBeFvjtxFWKKNBSGJg0t384zoQiG7W9n5uBGdV0K8kEbi7jol0xkkOwunIU0Wy_DkWbm8CORnS7HDGmtNlmZmOlL5KuFZUQLPpwuneTKIKDG1aojS4t1aquVwX9yl2A5iOidqp0yIhh3q177pLBjNh-UZm7keRicjkdokIfAAg7E"
                            alt="Master craftsman polishing sapphire"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
                    </motion.div>
                </div>
            </div>

            {/* Our Details Section */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full bg-slate-50 mt-10 border-y border-slate-200"
            >
                <div className="w-full max-w-[1080px] mx-auto px-4 md:px-10 py-16">
                    <div className="mb-12 text-center">
                        <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em]">
                            Our Details
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Visit our headquarters or verify our authenticity.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Location */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col gap-4 shadow-sm"
                        >
                            <div className="flex items-center gap-3 text-gray-900 font-bold text-lg">
                                <span className="material-symbols-outlined text-[#1152d4]">
                                    location_on
                                </span>
                                <span>Headquarters</span>
                            </div>
                            <div className="w-full aspect-video bg-gray-200 rounded-lg overflow-hidden relative">
                                <Image
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAv3vZ9NiNnfKygQhnpORz_9oYRwfvExv7J7AfC_SauSE3X3V1HIxkOAfW136kRVD7tHyBLYzfGtjk7ALTcOoFufVdyBh8yuvG3_qHpKGbDq80oW5zisBfZ8NWWNWIG6hFFOcEM2PtfDGI2vTBA7m4iTn9sKC1og3o1KE5TyZPmq3w459-eC55E_J-iDwbrQ5Kt_cNc7vWf47Jf1UIjhxXvOmysp_a7ZwvS2mmHnQs_D0ZqdID6Tc5wG4mJOGifxDaA11QSbO19_cAL"
                                    alt="Map of Colombo, Sri Lanka"
                                    fill
                                    className="object-cover opacity-90"
                                />
                            </div>
                            <address className="text-gray-600 not-italic text-sm leading-6">
                                123 Gem Street, World Trade Center
                                <br />
                                Colombo 01, Sri Lanka
                            </address>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col gap-4 shadow-sm"
                        >
                            <div className="flex items-center gap-3 text-gray-900 font-bold text-lg">
                                <span className="material-symbols-outlined text-[#1152d4]">
                                    verified
                                </span>
                                <span>Certifications</span>
                            </div>
                            <div className="flex-1 flex flex-col gap-4 justify-center py-4">
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1152d4]">
                                        <span className="material-symbols-outlined">
                                            workspace_premium
                                        </span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-medium">NGJA Certified</h4>
                                        <p className="text-xs text-gray-500">License #88392-A</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-blue-50 flex items-center justify-center text-[#1152d4]">
                                        <span className="material-symbols-outlined">gavel</span>
                                    </div>
                                    <div>
                                        <h4 className="text-gray-900 font-medium">
                                            Fair Trade Gemstones
                                        </h4>
                                        <p className="text-xs text-gray-500">
                                            Ethically sourced pledge
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-sm text-[#1152d4] bg-[#1152d4]/10 p-3 rounded-lg border border-[#1152d4]/20">
                                Look for our holographic seal on every authenticity report.
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="bg-white p-6 rounded-xl border border-slate-200 flex flex-col gap-4 shadow-sm"
                        >
                            <div className="flex items-center gap-3 text-gray-900 font-bold text-lg">
                                <span className="material-symbols-outlined text-[#1152d4]">
                                    contact_support
                                </span>
                                <span>Direct Contact</span>
                            </div>
                            <div className="flex-1 flex flex-col gap-6 py-4">
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">
                                        General Inquiries
                                    </h4>
                                    <a
                                        href="mailto:hello@ceylongems.com"
                                        className="text-gray-900 hover:text-[#1152d4] transition-colors text-lg"
                                    >
                                        hello@serendiagems.com
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">
                                        Concierge (WhatsApp)
                                    </h4>
                                    <a
                                        href="tel:+94112345678"
                                        className="text-gray-900 hover:text-[#1152d4] transition-colors text-lg"
                                    >
                                        +94 11 234 5678
                                    </a>
                                </div>
                                <div>
                                    <h4 className="text-gray-500 text-xs uppercase tracking-wider font-bold mb-1">
                                        Hours
                                    </h4>
                                    <p className="text-gray-700">Mon - Fri: 9am - 6pm (IST)</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[800px] px-4 md:px-10 py-20"
            >
                <div className="bg-white border border-slate-200 rounded-2xl p-8 md:p-12 shadow-lg">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-black text-gray-900 mb-3">
                            Begin Your Journey
                        </h2>
                        <p className="text-gray-600">
                            Interested in a bespoke piece or a specific stone? Let us know.
                        </p>
                    </div>
                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="e.g. John Doe"
                                    className="w-full rounded-lg bg-slate-50 border border-slate-300 text-gray-900 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-transparent outline-none transition-all placeholder-gray-400"
                                />
                            </div>
                            <div className="space-y-2">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-medium text-gray-700"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="e.g. john@example.com"
                                    className="w-full rounded-lg bg-slate-50 border border-slate-300 text-gray-900 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-transparent outline-none transition-all placeholder-gray-400"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="subject"
                                className="text-sm font-medium text-gray-700"
                            >
                                Inquiry Type
                            </label>
                            <select
                                id="subject"
                                className="w-full rounded-lg bg-slate-50 border border-slate-300 text-gray-900 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-transparent outline-none transition-all"
                            >
                                <option>Bespoke Jewelry Design</option>
                                <option>Loose Gemstone Inquiry</option>
                                <option>Investment Grade Sapphires</option>
                                <option>General Support</option>
                            </select>
                        </div>
                        <div className="space-y-2">
                            <label
                                htmlFor="message"
                                className="text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Tell us about the stone or design you are looking for..."
                                className="w-full rounded-lg bg-slate-50 border border-slate-300 text-gray-900 px-4 py-3 focus:ring-2 focus:ring-[#1152d4] focus:border-transparent outline-none transition-all placeholder-gray-400"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            type="button"
                            className="w-full bg-[#1152d4] hover:bg-blue-700 text-white font-bold py-4 rounded-lg transition-colors shadow-lg text-lg"
                        >
                            Send Inquiry
                        </motion.button>
                        <p className="text-center text-xs text-gray-500 mt-4">
                            By submitting this form, you agree to our privacy policy. We
                            typically reply within 24 hours.
                        </p>
                    </form>
                </div>
            </motion.div>
        </div>
    );
}
