"use client";

import { useState, useMemo } from "react";
import { schools, School } from "@/data/schools";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, X, ArrowUpRight, GraduationCap, MapPin } from "lucide-react";

export default function SchoolsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAtoll, setSelectedAtoll] = useState<string>("All");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [selectedIsland, setSelectedIsland] = useState<string>("All");

    const atolls = useMemo(() => ["All", ...Array.from(new Set(schools.map(s => s.atoll)))], []);
    const islands = useMemo(() => {
        const filteredSchools = selectedAtoll === "All" ? schools : schools.filter(s => s.atoll === selectedAtoll);
        return ["All", ...Array.from(new Set(filteredSchools.map(s => s.island)))];
    }, [selectedAtoll]);
    const categories = ["All", "Primary", "Secondary", "Higher Secondary", "Combined"];

    const filteredSchools = useMemo(() => {
        return schools.filter(school => {
            const matchesSearch = school.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                school.location.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesAtoll = selectedAtoll === "All" || school.atoll === selectedAtoll;
            const matchesCategory = selectedCategory === "All" || school.category === selectedCategory;
            const matchesIsland = selectedIsland === "All" || school.island === selectedIsland;

            return matchesSearch && matchesAtoll && matchesCategory && matchesIsland;
        });
    }, [searchQuery, selectedAtoll, selectedCategory, selectedIsland]);

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedAtoll("All");
        setSelectedCategory("All");
        setSelectedIsland("All");
    };

    return (
        <main className="min-h-screen bg-white pt-40 pb-48">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 px-1">
                    <div>
                        <h1 className="text-5xl font-semibold tracking-tight text-slate-900 mb-4">Official Schools.</h1>
                        <p className="text-lg text-slate-500 font-medium">Browse the complete archive of school identities.</p>
                    </div>
                    <div className="text-[13px] font-semibold text-slate-400 uppercase tracking-widest">
                        {filteredSchools.length} Schools found
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Main Content: School Cards */}
                    <div className="lg:col-span-9 order-2 lg:order-1">
                        <div className="hidden lg:flex items-center bg-slate-50 border border-slate-100 rounded-2xl p-2 mb-12 focus-within:bg-white focus-within:shadow-xl focus-within:shadow-slate-200/40 transition-all">
                            <Search className="w-5 h-5 text-slate-400 ml-4 mr-3" />
                            <input
                                type="text"
                                placeholder="Search school name or location..."
                                className="flex-1 bg-transparent py-3 outline-none text-[15px] font-medium placeholder:text-slate-400"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="popLayout">
                                {filteredSchools.map((school) => (
                                    <motion.div
                                        key={school.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Link href={`/school/${school.id}`} className="group block">
                                            <div className="aspect-[4/5] bg-slate-50 border border-slate-100 rounded-3xl p-12 flex items-center justify-center relative overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-slate-200/50 group-hover:-translate-y-1">
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
                                            <div className="mt-6 px-1">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-brand bg-brand/5 px-2 py-0.5 rounded">
                                                        {school.atoll}
                                                    </span>
                                                    <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                                                        {school.category}
                                                    </span>
                                                </div>
                                                <h3 className="text-[17px] font-semibold text-slate-900 group-hover:text-brand transition-colors">
                                                    {school.name}
                                                </h3>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {filteredSchools.length === 0 && (
                            <div className="py-32 text-center bg-slate-50 rounded-[3rem] border border-dashed border-slate-200">
                                <Filter className="w-12 h-12 text-slate-300 mx-auto mb-6" />
                                <h3 className="text-xl font-semibold text-slate-900 mb-2">No schools found</h3>
                                <p className="text-slate-500 mb-8 max-w-sm mx-auto">Try adjusting your search or filters to find what you're looking for.</p>
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2 bg-brand text-white rounded-xl font-semibold hover:bg-brand-hover transition-all"
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Sidebar: Filters */}
                    <div className="lg:col-span-3 order-1 lg:order-2 space-y-8">
                        <div className="bg-slate-50 border border-slate-100 p-8 rounded-[2.5rem] sticky top-32">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200">
                                <h4 className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                                    <Filter className="w-3.5 h-3.5" /> Filter Assets
                                </h4>
                                <button
                                    onClick={clearFilters}
                                    className="text-[10px] font-semibold text-brand hover:text-brand-hover uppercase tracking-widest"
                                >
                                    Reset
                                </button>
                            </div>

                            <div className="space-y-10">
                                {/* Category Filter */}
                                <div className="space-y-4">
                                    <p className="flex items-center gap-2 text-[12px] font-semibold text-slate-900">
                                        <GraduationCap className="w-4 h-4 text-brand" /> Category
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {categories.map(cat => (
                                            <button
                                                key={cat}
                                                onClick={() => setSelectedCategory(cat)}
                                                className={`px-4 py-2 rounded-xl text-[12px] font-semibold transition-all
                            ${selectedCategory === cat
                                                        ? 'bg-brand text-white shadow-lg shadow-brand/10'
                                                        : 'bg-white text-slate-500 hover:bg-slate-100 border border-slate-100'}
                          `}
                                            >
                                                {cat}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Atoll Filter */}
                                <div className="space-y-4">
                                    <p className="flex items-center gap-2 text-[12px] font-semibold text-slate-900">
                                        <MapPin className="w-4 h-4 text-brand" /> Atoll
                                    </p>
                                    <select
                                        value={selectedAtoll}
                                        onChange={(e) => {
                                            setSelectedAtoll(e.target.value);
                                            setSelectedIsland("All");
                                        }}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-medium outline-none focus:border-brand/40 transition-all"
                                    >
                                        {atolls.map(atoll => (
                                            <option key={atoll} value={atoll}>{atoll}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Island Filter */}
                                <div className="space-y-4">
                                    <p className="flex items-center gap-2 text-[12px] font-semibold text-slate-900">
                                        <MapPin className="w-4 h-4 text-brand" /> Island
                                    </p>
                                    <select
                                        value={selectedIsland}
                                        onChange={(e) => setSelectedIsland(e.target.value)}
                                        className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-[14px] font-medium outline-none focus:border-brand/40 transition-all"
                                    >
                                        {islands.map(island => (
                                            <option key={island} value={island}>{island}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
