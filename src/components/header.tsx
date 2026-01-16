"use client";

import React from "react";
import Link from "next/link";
import { Command, ChevronDown, Moon } from "lucide-react";

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
            <div className="flex items-center gap-4">
                {/* Main Pill Container */}
                <div className="hidden md:flex items-center rounded-full bg-zinc-900/90 border border-zinc-800 p-1.5 shadow-lg backdrop-blur-md">

                    {/* Navigation Links */}
                    <nav className="flex items-center">
                        <Link href="/" className="px-4 py-1.5 text-xs font-semibold text-black bg-white rounded-full transition-colors">
                            Home
                        </Link>
                        <Link href="#about" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                            About
                        </Link>
                        <Link href="#work" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                            Work
                        </Link>
                        <Link href="#blogs" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
                            Blogs
                        </Link>
                        <Link href="#more" className="px-4 py-1.5 text-xs font-medium text-zinc-400 hover:text-white transition-colors flex items-center gap-1">
                            More <ChevronDown className="w-3 h-3" />
                        </Link>
                    </nav>

                    {/* Divider */}
                    <div className="mx-2 h-4 w-[1px] bg-zinc-800" />

                    {/* Theme Toggle */}
                    <button className="p-2 text-zinc-400 hover:text-white transition-colors">
                        <Moon className="w-4 h-4" />
                    </button>

                    {/* Book a Call Button */}
                    <Link
                        href="#contact"
                        className="ml-2 flex items-center rounded-full bg-zinc-700/50 hover:bg-zinc-700 border border-zinc-600 px-4 py-1.5 text-xs font-semibold text-white transition-colors"
                    >
                        Book a Call
                    </Link>
                </div>

                {/* Command Button (Outside the pill) */}
                <button className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-colors backdrop-blur-md shadow-lg">
                    <Command className="w-4 h-4" />
                </button>
            </div>
        </header>
    );
}
