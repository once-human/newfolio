"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Command, Moon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blogs", href: "/blogs" },
    { name: "More", href: "#more" },
];

function NavItem({ item }: { item: { name: string; href: string } }) {
    const pathname = usePathname();
    const isActive = pathname === item.href;
    const [isHovered, setIsHovered] = useState(false);
    const isMore = item.name === "More";

    return (
        <Link
            href={item.href}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={cn(
                "relative px-5 py-2.5 text-sm font-medium transition-colors duration-200 block h-10 overflow-hidden", // Fixed height for mask
                isActive ? "text-black" : "text-zinc-400"
            )}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 rounded-full bg-white"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}

            <div className="relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: isHovered ? -20 : 0 }}
                    transition={{ duration: 0.3, ease: [0.33, 1, 0.68, 1] }} // buttery smooth
                    className="flex flex-col items-center"
                >
                    <span className={cn("h-5 flex items-center justify-center", isActive ? "text-black" : "group-hover:text-white")}>
                        {item.name} {isMore && <ChevronDown className="w-3.5 h-3.5 ml-1 inline-block" />}
                    </span>
                    <span className={cn("h-5 flex items-center justify-center absolute top-5", isActive ? "text-black" : "text-white")}>
                        {item.name} {isMore && <ChevronDown className="w-3.5 h-3.5 ml-1 inline-block" />}
                    </span>
                </motion.div>
            </div>
        </Link>
    );
}

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 pointer-events-none">
            {/* Left: Logo + Tagline */}
            <div className="flex items-center gap-4 pointer-events-auto">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-serif text-2xl font-bold tracking-tight text-white">
                        OY
                    </span>
                </Link>
                <div className="h-8 w-[1px] bg-zinc-800" />
                <div className="hidden md:flex items-center gap-3">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                    </div>
                    <div className="flex flex-col text-[9px] font-medium leading-[14px] tracking-widest uppercase text-zinc-500 font-sans">
                        <span>Creative Engineer</span>
                        <span className="text-emerald-600">Building The Future</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Consolidated Nav + Actions */}
            <div className="flex items-center gap-4 pointer-events-auto">
                {/* Main Pill Container */}
                <div className="hidden md:flex items-center rounded-full bg-zinc-900/80 border border-white/10 p-1.5 shadow-2xl backdrop-blur-2xl ring-1 ring-white/5">

                    {/* Navigation Links */}
                    <nav className="flex items-center relative gap-1">
                        {navItems.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="mx-3 h-4 w-[1px] bg-white/10" />

                    {/* Theme Toggle */}
                    <button className="p-2 text-zinc-400 hover:text-white transition-colors relative group">
                        <span className="absolute inset-0 rounded-full bg-white/0 group-hover:bg-white/10 transition-colors duration-300" />
                        <Moon className="w-4 h-4 relative z-10" />
                    </button>

                    {/* Book a Call Button */}
                    <Link
                        href="#contact"
                        className="ml-2 flex items-center rounded-full bg-white text-black px-5 py-2.5 text-xs font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Command Button (Outside the pill) */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors backdrop-blur-md shadow-lg group">
                    <Command className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </button>
            </div>
        </header>
    );
}
