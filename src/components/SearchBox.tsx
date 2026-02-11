"use client";

import { Search } from "lucide-react";
import { motion } from "framer-motion";

export default function SearchBox() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-4xl w-full mx-auto px-8 sticky top-8 z-50 mt-16"
        >
            <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors" />
                <div className="relative flex items-center rounded-full border border-slate-200 bg-white/80 backdrop-blur-md px-8 py-6 shadow-2xl transition-all duration-300 group-focus-within:ring-4 group-focus-within:ring-atoll/10 group-focus-within:border-atoll/20">
                    <Search className="w-6 h-6 text-slate-400 mr-4" />
                    <input
                        type="text"
                        placeholder="Search school names, islands, or atolls..."
                        className="w-full bg-transparent border-none outline-none text-xl font-medium placeholder:text-slate-400"
                    />
                    <div className="hidden md:flex items-center gap-2">
                        <kbd className="px-2 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-400">⌘</kbd>
                        <kbd className="px-2 py-1 rounded-md bg-slate-100 text-xs font-bold text-slate-400">K</kbd>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
