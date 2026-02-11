"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Send, Upload, Info, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function RequestPage() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <main className="min-h-screen bg-white flex items-center justify-center p-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-slate-50 p-16 md:p-24 rounded-[3rem] border border-slate-100 text-center max-w-2xl"
                >
                    <div className="w-16 h-16 bg-brand/10 rounded-2xl flex items-center justify-center mx-auto mb-10 text-brand">
                        <Send className="w-8 h-8" />
                    </div>
                    <h1 className="text-4xl font-semibold mb-6 tracking-tight">Request Received</h1>
                    <p className="text-lg text-slate-500 mb-12 leading-relaxed">
                        Thank you for helping us maintain the archive. Our curators will review the details and update the repository accordingly.
                    </p>
                    <Link href="/" className="inline-block bg-brand text-white px-10 py-4 rounded-xl font-semibold hover:bg-brand-hover transition-all">
                        Return to Archive
                    </Link>
                </motion.div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white pb-32 pt-48">
            <div className="max-w-4xl mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-24 text-center"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[11px] font-semibold uppercase tracking-widest mb-8">
                        <MessageSquare className="w-3.5 h-3.5" />
                        Registry Support
                    </div>
                    <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-8 leading-[1.1]">
                        Asset <span className="text-brand">Registry.</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Help us complete the archive. Request missing assets or report outdated school logos.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-slate-50 rounded-[3rem] p-10 md:p-20 border border-slate-100"
                >
                    <form onSubmit={handleSubmit} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 ml-4">Full School Name</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. Malé English School"
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none transition-all focus:border-brand/40 font-medium text-slate-900 placeholder:text-slate-300"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 ml-4">Atoll / Island</label>
                                <input
                                    required
                                    type="text"
                                    placeholder="e.g. K. Malé"
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none transition-all focus:border-brand/40 font-medium text-slate-900 placeholder:text-slate-300"
                                />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 ml-4">Reference Source (URL)</label>
                            <div className="relative">
                                <input
                                    type="url"
                                    placeholder="Link to official document or clear photo..."
                                    className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 pl-14 outline-none transition-all focus:border-brand/40 font-medium text-slate-900 placeholder:text-slate-300"
                                />
                                <Upload className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 w-5 h-5 border-r border-slate-100 pr-2" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <label className="text-[11px] font-semibold uppercase tracking-widest text-slate-400 ml-4">Submission Notes</label>
                            <textarea
                                rows={4}
                                placeholder="Mention specific variations or historical details..."
                                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none transition-all focus:border-brand/40 font-medium text-slate-900 placeholder:text-slate-300 resize-none"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-brand text-white py-6 rounded-2xl font-semibold text-lg hover:bg-brand-hover transition-all flex items-center justify-center gap-3 shadow-lg shadow-brand/10"
                        >
                            Submit to Registry
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}

function ArrowRight({ className }: { className?: string }) {
    return (
        <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
        </svg>
    );
}
