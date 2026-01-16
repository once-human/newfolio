"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Command, Moon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blogs", href: "/blogs" },
    { name: "More", href: "#more", isDropdown: true },
];

function NavItem({ item }: { item: { name: string; href: string; isDropdown?: boolean } }) {
    const pathname = usePathname();
    const isActive = pathname === item.href;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Link
            href={item.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative flex items-center gap-1 px-5 py-2.5 text-sm font-medium transition-colors duration-300",
                isActive ? "text-black" : "text-white/60 hover:text-white"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                    transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.8 }}
                />
            )}

            <AnimatePresence>
                {isHovered && !isActive && (
                    <motion.div
                        layoutId="hoverTab"
                        className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                )}
            </AnimatePresence>

            <span className="relative z-10 flex items-center gap-1">
                {item.name}
                {item.isDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />}
            </span>
        </Link>
    );
}

export function Header() {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none">

            {/* Left: Logo (Floaty) */}
            <motion.div
                className="flex items-center gap-4 pointer-events-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-serif text-3xl font-bold tracking-tight text-white drop-shadow-2xl">
                        OY
                    </span>
                </Link>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="hidden md:flex items-center gap-3">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    </div>
                    <div className="flex flex-col text-[10px] mobile:text-[9px] font-medium leading-[14px] tracking-widest uppercase text-white/40 font-sans">
                        <span>Creative Engineer</span>
                        <span className="text-emerald-500/80 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">Building The Future</span>
                    </div>
                </div>
            </motion.div>

            {/* Right: Pure Liquid Glass Pill */}
            <motion.div
                className="flex items-center gap-4 pointer-events-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {/* Main Pill Container: Crystalline Glass */}
                <div className="hidden md:flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-3xl ring-1 ring-white/[0.03] transition-all duration-500 hover:bg-white/[0.06] hover:ring-white/[0.08] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">

                    {/* Navigation Links */}
                    <nav className="flex items-center relative pl-1">
                        {navItems.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </nav>

                    {/* Divider - subtle */}
                    <div className="mx-4 h-5 w-[1px] bg-white/10" />

                    {/* Theme Toggle - subtle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 relative group"
                    >
                        <Moon className="w-4 h-4" />
                    </motion.button>

                    {/* Book a Call Button - High Contrast Premium */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Link
                            href="#contact"
                            className="ml-2 relative block overflow-hidden rounded-full bg-white px-6 py-2.5 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] text-sm font-bold text-black"
                        >
                            Book a Call
                        </Link>
                    </motion.div>
                </div>

                {/* Command Button - Matches Pill Aesthetic */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.08] backdrop-blur-3xl shadow-lg ring-1 ring-white/[0.03] group"
                >
                    <Command className="w-5 h-5" />
                </motion.button>
            </motion.div>
        </header>
    );
}
