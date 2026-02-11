"use client";

import { useParams, useRouter } from "next/navigation";
import { schools } from "@/data/schools";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ShieldCheck, Phone, Globe, Hash, Share2, Users, LayoutGrid } from "lucide-react";
import ColorBlock from "@/components/ColorBlock";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SchoolBrandPage() {
    const params = useParams();
    const id = params?.id as string;
    const router = useRouter();
    const [school, setSchool] = useState<any>(null);

    useEffect(() => {
        if (id) {
            setSchool(schools.find((s) => s.id === id));
        }
    }, [id]);

    if (!school) return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-brand border-t-transparent rounded-full animate-spin" />
        </div>
    );

    return (
        <main className="min-h-screen bg-white pt-40 pb-48">
            <div className="max-w-7xl mx-auto px-8">

                {/* Navigation */}
                <button
                    onClick={() => router.back()}
                    className="flex items-center gap-2 text-[13px] font-semibold text-slate-400 hover:text-brand transition-colors mb-16 px-1"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Directory Archive
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">

                    {/* Main Info */}
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-xl font-serif text-brand">{school.nameDhivehi}</span>
                                <div className="h-4 w-px bg-slate-200" />
                                <span className="text-[12px] font-semibold text-slate-400 uppercase tracking-[0.2em]">{school.atoll}</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight leading-tight mb-16">
                                {school.name}
                            </h1>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start mb-24">
                            {/* Primary Logo Box */}
                            <div className="md:col-span-12 lg:col-span-5 aspect-square bg-[#FBFBFA] border border-slate-100 rounded-[2.5rem] flex items-center justify-center p-16 shadow-sm group relative">
                                <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                                    <Image src={school.logo} alt={school.name} fill className="object-contain" />
                                </div>
                                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-slate-300 uppercase tracking-widest">
                                    Primary Identity
                                </div>
                            </div>

                            {/* Description & Action */}
                            <div className="md:col-span-12 lg:col-span-7 flex flex-col justify-center min-h-full">
                                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 mb-6 flex items-center gap-2">
                                    <ShieldCheck className="w-3.5 h-3.5" /> Institutional Detail
                                </h3>
                                <p className="text-2xl md:text-3xl font-medium text-slate-600 leading-relaxed font-serif italic mb-12">
                                    "{school.description}"
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <div className="relative group/download">
                                        <button className="flex items-center gap-3 bg-brand text-white px-8 py-4 rounded-2xl font-semibold hover:bg-brand-hover transition-all shadow-lg shadow-brand/10">
                                            <Download className="w-5 h-5" />
                                            Download (SVG, PNG, JPEG)
                                        </button>
                                        <div className="absolute top-full left-0 mt-2 bg-slate-900 text-white text-[10px] font-semibold px-4 py-2 rounded-lg opacity-0 group-hover/download:opacity-100 transition-opacity whitespace-nowrap z-20">
                                            Includes SVG, PNG, and JPEG formats
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-3 bg-slate-50 text-slate-600 px-8 py-4 rounded-2xl font-semibold hover:bg-slate-100 transition-all border border-slate-100">
                                        <Share2 className="w-5 h-5" />
                                        Share Archive
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Clubs & Bodies Logos - New Section */}
                        {school.subLogos && school.subLogos.length > 0 && (
                            <div className="mb-24">
                                <div className="flex items-baseline justify-between mb-10 px-1 border-b border-slate-100 pb-6">
                                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                                        <Users className="w-3.5 h-3.5" /> School Bodies & Clubs
                                    </h3>
                                    <p className="text-[11px] font-semibold text-brand uppercase tracking-widest">{school.subLogos.length} Identities</p>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                                    {school.subLogos.map((sub: any, idx: number) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.05 }}
                                            className="group flex flex-col gap-4"
                                        >
                                            <div className="aspect-square bg-[#FBFBFA] border border-slate-100 rounded-2xl p-8 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-hover:-translate-y-1">
                                                <div className="relative w-full h-full grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                                    <Image src={sub.path} alt={sub.name} fill className="object-contain" />
                                                </div>
                                            </div>
                                            <p className="text-[12px] font-semibold text-slate-600 group-hover:text-brand transition-colors text-center px-2">
                                                {sub.name}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color System */}
                        <div>
                            <div className="flex items-baseline justify-between mb-10 px-1 border-b border-slate-100 pb-6">
                                <h3 className="text-[11px] font-semibold uppercase tracking-[0.3em] text-slate-400 flex items-center gap-2">
                                    <LayoutGrid className="w-3.5 h-3.5" /> Official Color Palette
                                </h3>
                                <p className="text-[11px] font-semibold text-brand uppercase tracking-widest">v1.2 Compliance</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 rounded-[2rem] overflow-hidden shadow-sm">
                                {school.colors.map((color: string) => (
                                    <ColorBlock key={color} color={color} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-4 space-y-6">
                        <div className="bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] space-y-12">
                            <div>
                                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-8 pb-4 border-b border-slate-200">School Registry Info</h4>
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between text-[14px]">
                                        <span className="text-slate-500">Location</span>
                                        <span className="font-semibold text-slate-900">{school.location}</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[14px]">
                                        <span className="text-slate-500">Resource Downloaded</span>
                                        <span className="font-semibold text-slate-900">{school.stats.downloads} times</span>
                                    </div>
                                    <div className="flex items-center justify-between text-[14px]">
                                        <span className="text-slate-500">Registry Views</span>
                                        <span className="font-semibold text-slate-900">{school.stats.views}</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 mb-8 pb-4 border-b border-slate-200">Official Channels</h4>
                                <div className="space-y-5">
                                    <div className="flex items-center gap-4 text-slate-900 text-[14px] font-semibold">
                                        <div className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-brand">
                                            <Phone className="w-4 h-4" />
                                        </div>
                                        {school.contact}
                                    </div>
                                    <div className="flex items-center gap-4 pt-6">
                                        <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-brand hover:border-brand transition-all cursor-pointer">
                                            <Globe className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-brand p-10 rounded-[2.5rem] text-white">
                            <h4 className="text-xl font-semibold leading-[1.3] mb-4">Identity missing <br />or outdated?</h4>
                            <p className="text-white/80 text-[14px] leading-relaxed mb-8">
                                Request a revision or contribute official assets to help maintain the archive's accuracy.
                            </p>
                            <Link href="/request" className="block w-full py-4 bg-white text-brand hover:bg-white/90 rounded-xl text-center text-[13px] font-semibold transition-all">
                                Registry Submission
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
