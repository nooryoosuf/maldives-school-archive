"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Schools", href: "/schools" },
    { name: "About", href: "/about" },
    { name: "Request Logo", href: "/request" },
];

export default function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-fit">
            <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="flex items-center gap-2 p-1.5 bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200/60 shadow-lg shadow-slate-200/30"
            >
                <Link href="/" className="px-5 py-2 group">
                    <span className="font-semibold tracking-tight text-[17px] text-slate-900">
                        MV <span className="text-brand transition-colors group-hover:text-brand-hover">Assets</span>
                    </span>
                </Link>

                <div className="h-4 w-px bg-slate-200 mx-1" />

                <div className="flex gap-1">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative px-4 py-2 text-[13px] font-semibold transition-colors rounded-xl
                  ${isActive ? 'text-white' : 'text-slate-500 hover:text-brand'}
                `}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute inset-0 bg-brand rounded-xl -z-10"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        );
                    })}
                </div>
            </motion.div>
        </nav>
    );
}
