"use client";

import React from "react";
import Link from "next/link";
import { Command } from "lucide-react";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Blogs", href: "#blogs" },
    { name: "More", href: "#more" },
];

export function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12">
            {/* Left: Logo + Tagline */}
            <div className="flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2 group">
                    <span className="font-serif text-2xl font-bold tracking-tight text-white">
                        OY
                    </span>
                </Link>

                {/* Separator */}
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

            {/* Center: Navigation Pill */}
            <nav className="hidden md:flex items-center justify-center">
                <div className="flex items-center gap-1 rounded-full bg-white/10 dark:bg-zinc-900/50 backdrop-blur-md border border-zinc-200/20 dark:border-white/10 p-1 shadow-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:text-black dark:hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Right: Actions */}
            <div className="flex items-center gap-3">
                <button className="rounded-full p-2.5 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors">
                    <Command className="w-4 h-4" />
                </button>

                <Link
                    href="#contact"
                    className="hidden sm:flex h-9 items-center rounded-full bg-zinc-900 dark:bg-white px-4 text-xs font-semibold text-white dark:text-black transition-colors hover:bg-zinc-700 dark:hover:bg-zinc-200"
                >
                    Book a Call
                </Link>
            </div>
        </header>
    );
}
