"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ColorBlock({ color }: { color: string }) {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
    };

    return (
        <div
            onClick={copyToClipboard}
            className="h-44 w-full relative group cursor-pointer overflow-hidden transition-transform active:scale-95"
            style={{ backgroundColor: color }}
        >
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/10 backdrop-blur-[2px]">
                <AnimatePresence mode="wait">
                    {copied ? (
                        <motion.div
                            key="copied"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="bg-white px-4 py-2 rounded-lg shadow-xl border border-slate-100 flex items-center gap-2"
                        >
                            <Check className="w-3.5 h-3.5 text-brand" />
                            <span className="text-[11px] font-semibold text-slate-900 uppercase tracking-wider">Copied</span>
                        </motion.div>
                    ) : (
                        <div className="flex flex-col items-center gap-2 text-white/90">
                            <Copy className="w-5 h-5" />
                            <span className="text-[10px] font-semibold uppercase tracking-widest">{color}</span>
                        </div>
                    )}
                </AnimatePresence>
            </div>
            <div className="absolute bottom-3 left-4">
                <div className="bg-white/10 backdrop-blur-md px-2 py-0.5 rounded text-[10px] text-white/60 font-mono uppercase tracking-widest outline outline-1 outline-white/20">
                    {color}
                </div>
            </div>
        </div>
    );
}
