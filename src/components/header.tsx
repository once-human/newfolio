"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Command, Mail, ChevronDown } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useMotionTemplate,
    useScroll,
    useMotionValueEvent,
    useTransform
} from "framer-motion";
import { cn } from "@/lib/utils";
import { CommandMenu } from "./command-menu";
import { MoreMenu } from "./more-menu";
import { useScrollContext } from "@/context/scroll-context";

const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blogs", href: "/blogs" },
    { name: "More", href: "#more", isDropdown: true },
];

// Reverting to the original "Snappy" Apple Spring
const IOS_SPRING = { type: "spring", mass: 1, stiffness: 170, damping: 26 } as const;

function NavItem({
    item,
    onHover,
    isHovered
}: {
    item: { name: string; href: string; isDropdown?: boolean };
    onHover: (name: string | null) => void;
    isHovered: boolean;
}) {
    const pathname = usePathname();
    const isActive = pathname === item.href;

    return (
        <div
            className="relative z-20"
            onMouseEnter={() => onHover(item.name)}
            onMouseLeave={() => onHover(null)}
        >
            <Link
                href={item.href}
                className={cn(
                    "relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium transition-colors duration-300",
                    isActive ? "text-black" : "text-white/80 hover:text-white"
                )}
            >
                {isActive && (
                    <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full bg-white shadow-[0_0_20px_-5px_rgba(255,255,255,0.7)] z-[-1]"
                        transition={IOS_SPRING}
                    />
                )}

                <AnimatePresence>
                    {isHovered && !isActive && (
                        <motion.div
                            layoutId="hoverTab"
                            className="absolute inset-0 rounded-full bg-white/10 z-[-1] backdrop-blur-md"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        />
                    )}
                </AnimatePresence>

                {/* Text Layer - Pure colors for max visibility */}
                <span className={cn(
                    "relative z-10 flex items-center gap-1",
                    isActive ? "text-black font-semibold" : "text-white group-hover:text-white"
                )} style={{ textShadow: isActive ? "none" : "0 1px 3px rgba(0,0,0,0.3)" }}>
                    {item.name}
                    {item.isDropdown && <ChevronDown className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${isHovered ? "rotate-180" : ""}`} />}
                </span>
            </Link>

            <AnimatePresence>
                {item.isDropdown && isHovered && (
                    <MoreMenu />
                )}
            </AnimatePresence>
        </div>
    );
}

export function Header() {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Snappier spotlight tracking
    const smoothMouseX = useSpring(mouseX, { mass: 0.5, stiffness: 100, damping: 15 });
    const smoothMouseY = useSpring(mouseY, { mass: 0.5, stiffness: 100, damping: 15 });

    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [hoveredNav, setHoveredNav] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const isHome = pathname === "/";
    const { isFooterProfileVisible } = useScrollContext();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
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

    const handleProfileClick = () => {
        if (isHome) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            router.push("/");
        }
    };

    const spotlightBackground = useMotionTemplate`radial-gradient(400px circle at ${smoothMouseX}px ${smoothMouseY}px, rgba(255,255,255,0.08), transparent 80%)`;

    return (
        <>
            <CommandMenu open={open} setOpen={setOpen} />
            <header className="fixed top-6 left-0 right-0 z-[60] grid grid-cols-[auto_1fr_auto] items-center px-6 md:px-12 pointer-events-none gap-4">

                {/* Left: Dynamic Profile / Label */}
                <motion.div
                    className="flex items-center pointer-events-auto justify-self-start z-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.div
                        initial={isHome ? { width: 0, opacity: 0, marginRight: 0 } : { width: 44, opacity: 1, marginRight: 0 }}
                        animate={
                            isFooterProfileVisible ? { width: 0, opacity: 0, marginRight: 0 }
                                : (isHome ? {
                                    width: isScrolled ? 44 : 0,
                                    opacity: isScrolled ? 1 : 0,
                                    marginRight: isScrolled ? 12 : 0
                                } : {
                                    width: 44,
                                    opacity: 1,
                                    marginRight: 12
                                })
                        }
                        transition={IOS_SPRING}
                        className="relative flex items-center justify-center overflow-hidden"
                    >
                        <button
                            onClick={handleProfileClick}
                            // Using glass-pill here to match center exactly
                            className="relative w-11 h-11 flex items-center justify-center rounded-full glass-pill cursor-pointer hover:scale-105 transition-transform duration-300 group shadow-lg"
                        >
                            <AnimatePresence mode="wait">
                                {(isScrolled || !isHome) && !isFooterProfileVisible && (
                                    <motion.img
                                        layoutId="header-profile-img"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={IOS_SPRING}
                                        src="/assets/me.png"
                                        alt="Profile"
                                        className="w-full h-full rounded-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                                    />
                                )}
                            </AnimatePresence>
                        </button>
                    </motion.div>

                    {/* Separator */}
                    <motion.div
                        initial={{ height: 0, opacity: 0, width: 0 }}
                        animate={{
                            height: (isScrolled && !isFooterProfileVisible) ? 24 : 0,
                            opacity: (isScrolled && !isFooterProfileVisible) ? 1 : 0,
                            width: (isScrolled && !isFooterProfileVisible) ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/20 rounded-full"
                    />

                    {/* Label Container - Now using glass-pill class */}
                    <motion.div
                        layout
                        initial={!isHome ? { width: 0, opacity: 0, x: -10 } : { width: "auto", opacity: 1, x: 0 }}
                        animate={!isHome ? {
                            width: isScrolled ? "auto" : 0,
                            opacity: isScrolled ? 1 : 0,
                            x: isScrolled ? 0 : -10,
                            paddingLeft: isScrolled ? 12 : 0
                        } : {
                            width: "auto",
                            opacity: 1,
                            x: 0,
                            paddingLeft: isScrolled ? 12 : 0
                        }}
                        transition={IOS_SPRING}
                        // Upgraded to glass-pill for consistent liquid glass look
                        // Added min-height to match the look
                        className={`hidden md:flex items-center gap-3 py-2 rounded-full overflow-hidden ${isScrolled ? "glass-pill px-5 shadow-xl" : ""}`}
                    >
                        <div className="relative flex h-2.5 w-2.5 items-center justify-center shrink-0">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)]"></span>
                        </div>
                        <div className="flex flex-col text-[10px] mobile:text-[9px] font-medium leading-[14px] tracking-widest uppercase text-white/70 font-sans whitespace-nowrap min-w-[120px]">
                            <span className="text-[9px] font-bold text-white/40 mb-0.5 tracking-[0.2em]">Status</span>
                            <div className="relative h-[16px] overflow-hidden">
                                <AnimatePresence mode="wait">
                                    <motion.span
                                        key={isScrolled ? "name" : "tagline"}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="block text-white font-bold drop-shadow-md"
                                    >
                                        {isScrolled ? "Onkar Yaglewad" : "Future Architect"}
                                    </motion.span>
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Middle: LIQUID GLASS PILL */}
                <motion.div
                    layout
                    className={cn(
                        "relative hidden md:flex items-center pointer-events-auto",
                        isScrolled ? "justify-self-end" : "justify-self-center"
                    )}
                    initial={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ ...IOS_SPRING, delay: 0.2 }}
                    style={{ zIndex: 100 }}
                >
                    <div
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative group/pill"
                    >
                        {/* Glass Background - Hardcoded Inline Styles to Force Render */}
                        <motion.div
                            ref={ref}
                            transition={IOS_SPRING}
                            className="absolute inset-0 rounded-full border border-white/10 overflow-hidden transition-all duration-300 shadow-2xl"
                            style={{
                                backgroundColor: "rgba(10, 10, 10, 0.25)", // Lighter (half of 0.5)
                                backdropFilter: "blur(40px) saturate(250%)", // Boosted saturation for "liquid" look
                                WebkitBackdropFilter: "blur(40px) saturate(250%)",
                                transform: "translate3d(0,0,0)",
                            }}
                        />

                        {/* Dynamic Spotlight */}
                        <motion.div
                            className="absolute inset-0 rounded-full pointer-events-none opacity-0 group-hover/pill:opacity-100 transition-opacity duration-300 mix-blend-overlay"
                            style={{ background: spotlightBackground }}
                        />

                        {/* Content */}
                        <div className="relative flex items-center p-1.5 z-10">
                            <nav className="flex items-center relative pl-1">
                                {navItems.map((item) => (
                                    <NavItem
                                        key={item.name}
                                        item={item}
                                        onHover={setHoveredNav}
                                        isHovered={hoveredNav === item.name}
                                    />
                                ))}
                            </nav>

                            <div className="mx-3 h-5 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent" />

                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.9 }}
                                transition={IOS_SPRING}
                                className="p-3 rounded-full text-white/70 hover:text-white relative group"
                            >
                                <Mail className="w-4 h-4 drop-shadow-sm" />
                            </motion.button>

                            <motion.div
                                className="pl-1"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={IOS_SPRING}
                            >
                                <Link
                                    href="/book-a-call"
                                    className="relative block overflow-hidden rounded-full bg-white px-5 py-2.5 shadow-[0_0_20px_-5px_rgba(255,255,255,0.5)] text-sm font-bold text-black hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.8)] transition-shadow duration-300"
                                >
                                    Book a Call
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Command Button */}
                <motion.div
                    className="justify-self-end pointer-events-auto"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                >
                    <motion.button
                        onClick={() => setOpen(true)}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={IOS_SPRING}
                        className="flex h-12 w-12 items-center justify-center rounded-full glass-pill text-white/70 hover:text-white hover:bg-white/10 group transition-all duration-300"
                    >
                        <Command className="w-5 h-5 drop-shadow-sm" />
                    </motion.button>
                </motion.div>
            </header>
        </>
    );
}
