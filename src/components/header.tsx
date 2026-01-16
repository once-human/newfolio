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
                isActive ? "text-black" : "text-zinc-400 hover:text-white"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
            )}

            <AnimatePresence>
                {isHovered && !isActive && (
                    <motion.div
                        layoutId="hoverTab"
                        className="absolute inset-0 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>

            <span className="relative z-10 flex items-center gap-1">
                {item.name}
                {item.isDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />}
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
                    <span className="font-serif text-3xl font-bold tracking-tight text-white drop-shadow-lg">
                        OY
                    </span>
                </Link>
                <div className="h-8 w-[1px] bg-white/10" />
                <div className="hidden md:flex items-center gap-3">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    </div>
                    <div className="flex flex-col text-[10px] mobile:text-[9px] font-medium leading-[14px] tracking-widest uppercase text-zinc-400 font-sans">
                        <span>Creative Engineer</span>
                        <span className="text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.3)]">Building The Future</span>
                    </div>
                </div>
            </motion.div>

            {/* Right: Liquid Glass Pill */}
            <motion.div
                className="flex items-center gap-4 pointer-events-auto"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
            >
                {/* Main Pill Container */}
                <div className="hidden md:flex items-center p-1 rounded-full bg-black/60 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] backdrop-blur-2xl ring-1 ring-white/5 transition-all duration-300 hover:ring-white/10 hover:bg-black/70">

                    {/* Navigation Links */}
                    <nav className="flex items-center relative pl-1">
                        {navItems.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="mx-4 h-5 w-[1px] bg-white/10" />

                    {/* Theme Toggle */}
                    <button className="p-3 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all duration-300 relative group active:scale-95">
                        <Moon className="w-4 h-4" />
                    </button>

                    {/* Book a Call Button (Refined Gradient) */}
                    <Link
                        href="#contact"
                        className="ml-2 relative group overflow-hidden rounded-full bg-gradient-to-b from-zinc-700 to-zinc-900 px-6 py-2.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-white/5 text-sm font-semibold text-zinc-200 transition-all active:scale-95"
                    >
                        <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        Book a Call
                    </Link>
                </div>

                {/* Command Button */}
                <button className="flex h-12 w-12 items-center justify-center rounded-full bg-black/50 border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 hover:bg-black/70 transition-all duration-300 backdrop-blur-md shadow-lg group active:scale-95">
                    <Command className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
            </motion.div>
        </header>
    );
}
