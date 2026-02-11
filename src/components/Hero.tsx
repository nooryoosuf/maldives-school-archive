"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-48 pb-32 px-8 overflow-hidden bg-white">
            <div className="max-w-7xl mx-auto relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[11px] font-semibold uppercase tracking-widest mb-10"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-40"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
                    </span>
                    The Maldivian Digital Archive
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-6xl md:text-8xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.05]"
                >
                    A library for school <br className="hidden md:block" />
                    <span className="text-brand">visual assets.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 0.5, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="text-lg md:text-xl text-slate-600 mb-14 max-w-2xl mx-auto leading-relaxed"
                >
                    High-resolution vector logos, color codes, and brand guidelines
                    preserved for the Maldivian design community.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="max-w-2xl mx-auto relative"
                >
                    <div className="relative flex items-center bg-slate-50 border border-slate-200 rounded-2xl p-2 transition-all focus-within:bg-white focus-within:shadow-xl focus-within:shadow-slate-200/40">
                        <div className="flex-1 flex items-center px-4">
                            <Search className="w-5 h-5 text-slate-400 mr-3" />
                            <input
                                type="text"
                                placeholder="Search school name..."
                                className="w-full bg-transparent outline-none text-slate-900 placeholder:text-slate-400 py-3 font-medium"
                            />
                        </div>
                        <button className="bg-brand text-white px-8 py-3 rounded-xl font-semibold hover:bg-brand-hover transition-colors shadow-lg shadow-brand/10">
                            Search
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Very Subtle Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] bg-brand/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[5%] w-[30vw] h-[30vw] bg-brand/5 rounded-full blur-[120px]" />
            </div>
        </section>
    );
}
