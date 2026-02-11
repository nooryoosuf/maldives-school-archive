"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Trophy, Users } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pb-32 pt-48">
            <div className="max-w-4xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-32"
                >
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-slate-900 mb-10 leading-[1.1]">
                        We're building a <br className="hidden md:block" />
                        <span className="text-brand">legacy for education.</span>
                    </h1>
                    <p className="text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
                        MV Assets is a dedicated platform to preserve the visual identities of Maldivian schools, ensuring their history is documented in high resolution.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32 text-center md:text-left">
                    <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-8 mx-auto md:mx-0">
                            <Shield className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-tight">Verified Archive</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">
                            Every logo in our repository undergoes a validation process to meet the brand standards of the respective school.
                        </p>
                    </div>
                    <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                        <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center text-brand mb-8 mx-auto md:mx-0">
                            <Sparkles className="w-6 h-6" />
                        </div>
                        <h3 className="text-lg font-semibold mb-4 uppercase tracking-tight">Digital Clarity</h3>
                        <p className="text-slate-500 leading-relaxed text-[15px]">
                            No more blurry scans. We provide high-resolution SVG formats optimized for modern design workflows.
                        </p>
                    </div>
                </div>

                <div className="bg-slate-900 rounded-[3rem] p-16 text-white text-center">
                    <Trophy className="w-10 h-10 text-brand mx-auto mb-8" />
                    <h2 className="text-3xl font-semibold mb-6">Open for Contributors</h2>
                    <p className="text-lg text-slate-400 mb-10 max-w-lg mx-auto">
                        If you have access to official school assets or brand guides, join us in completing the national archive.
                    </p>
                    <Link href="/request" className="inline-block bg-brand text-white px-10 py-5 rounded-2xl font-semibold hover:bg-brand-hover transition-all">
                        Contact Archive Team
                    </Link>
                </div>
            </div>
        </main>
    );
}
