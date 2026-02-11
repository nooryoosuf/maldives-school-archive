"use client";

import { motion } from "framer-motion";
import { schools } from "@/data/schools";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function SchoolList() {
    return (
        <div id="vault" className="max-w-7xl mx-auto px-8 py-24">
            <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 border-b border-slate-100 pb-8">
                <div>
                    <h2 className="text-3xl font-semibold mb-2">The Directory</h2>
                    <p className="text-slate-500 text-lg">Browse curated school assets across all atolls.</p>
                </div>
                <div className="mt-4 md:mt-0 text-[13px] font-semibold text-slate-400 tracking-wider uppercase">
                    {schools.length} Resources Available
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {schools.map((school) => (
                    <Link key={school.id} href={`/school/${school.id}`} className="group">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <div className="aspect-[4/5] bg-slate-50 border border-slate-100 rounded-2xl p-12 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-200/50 group-hover:-translate-y-1">
                                <div className="relative w-full h-full grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                                    <Image
                                        src={school.logo}
                                        alt={school.name}
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                                        <ArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>

                            <div className="px-1">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-brand mb-1 block">
                                    {school.atoll}
                                </span>
                                <h3 className="text-[17px] font-semibold text-slate-900 group-hover:text-brand transition-colors">
                                    {school.name}
                                </h3>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
