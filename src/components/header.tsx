"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { Command, Moon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useMotionTemplate,
    useScroll,
    useMotionValueEvent
} from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blogs", href: "/blogs" },
    { name: "More", href: "#more", isDropdown: true },
];

// Apple-style "Fluid" Spring Config
const IOS_SPRING = { type: "spring", mass: 1, stiffness: 170, damping: 26 } as const;

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
                    className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] z-0"
                    transition={IOS_SPRING}
                />
            )}

            <AnimatePresence>
                {isHovered && !isActive && (
                    <motion.div
                        layoutId="hoverTab"
                        className="absolute inset-0 rounded-full bg-white/5 z-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </AnimatePresence>

            {/* Ensure text is above background layers */}
            <span className={cn(
                "relative z-10 flex items-center gap-1",
                isActive ? "text-black font-semibold" : ""
            )}>
                {item.name}
                {item.isDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />}
            </span>
        </Link>
    );
}

export function Header() {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 100);
    });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const spotlightBackground = useMotionTemplate`radial-gradient(150px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.1), transparent 80%)`;

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 pointer-events-none">

            {/* Left: Dynamic Profile / Label */}
            <motion.div
                className="flex items-center gap-4 pointer-events-auto"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {/* Dynamic Image Slot */}
                <div className="relative w-10 h-10 flex items-center justify-center">
                    <AnimatePresence>
                        {isScrolled && (
                            <motion.img
                                layoutId="hero-profile-img"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0 }}
                                transition={{ type: "spring", stiffness: 170, damping: 26 }}
                                src="/assets/me.png"
                                alt="Small Profile"
                                className="absolute w-8 h-8 object-cover rounded-full"
                            />
                        )}
                    </AnimatePresence>
                </div>

                {/* Separator - Visible only on scroll */}
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isScrolled ? 32 : 0, opacity: isScrolled ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-[1px] bg-white/10"
                />

                <motion.div
                    animate={{ x: isScrolled ? 0 : -20 }}
                    transition={IOS_SPRING}
                    className="hidden md:flex items-center gap-3"
                >
                    <div className="relative flex h-2 w-2 items-center justify-center">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)]"></span>
                    </div>
                    <div className="flex flex-col text-[10px] mobile:text-[9px] font-medium leading-[14px] tracking-widest uppercase text-white/40 font-sans">
                        <span>Product Engineer</span>
                        <span className="text-sky-500/80 drop-shadow-[0_0_10px_rgba(14,165,233,0.3)]">Building The Future</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Right: Flat Liquid Glass Pill (No Tilt) */}
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                ref={ref}
                className="flex items-center gap-4 pointer-events-auto group/pill"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            >
                {/* Main Pill Container */}
                <div className="relative hidden md:flex items-center p-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] backdrop-blur-3xl ring-1 ring-white/[0.03] overflow-hidden">

                    {/* Spotlight Effect Layer */}
                    <motion.div
                        className="absolute inset-0 pointer-events-none opacity-0 group-hover/pill:opacity-100 transition-opacity duration-500"
                        style={{ background: spotlightBackground }}
                    />

                    {/* Navigation Links */}
                    <nav className="flex items-center relative pl-1 z-10">
                        {navItems.map((item) => (
                            <NavItem key={item.name} item={item} />
                        ))}
                    </nav>

                    {/* Divider */}
                    <div className="mx-4 h-5 w-[1px] bg-white/10 z-10" />

                    {/* Theme Toggle */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={IOS_SPRING}
                        className="p-3 rounded-full text-white/50 hover:text-white hover:bg-white/10 relative group z-10"
                    >
                        <Moon className="w-4 h-4" />
                    </motion.button>

                    {/* Book a Call Button */}
                    <motion.div
                        className="z-10"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={IOS_SPRING}
                    >
                        <Link
                            href="#contact"
                            className="ml-2 relative block overflow-hidden rounded-full bg-white px-6 py-2.5 shadow-[0_0_30px_-5px_rgba(255,255,255,0.3)] text-sm font-bold text-black"
                        >
                            Book a Call
                        </Link>
                    </motion.div>
                </div>

                {/* Command Button */}
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={IOS_SPRING}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/[0.03] border border-white/[0.08] text-white/60 hover:text-white hover:bg-white/[0.08] backdrop-blur-3xl shadow-lg ring-1 ring-white/[0.03] group z-10"
                >
                    <Command className="w-5 h-5" />
                </motion.button>
            </motion.div>
        </header>
    );
}
