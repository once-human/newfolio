"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Smile, X, MapPin } from "lucide-react";

export function Hero() {
    const [isExpanded, setIsExpanded] = useState(false);
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const [layoutId, setLayoutId] = useState<string | undefined>("hero-profile-img");
    const hasScrolledRef = React.useRef(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const scrolled = latest > 100;
        setIsScrolled(scrolled);
        if (scrolled) hasScrolledRef.current = true;
    });

    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-10 text-center">
            {/* Background/Ambient Effect - Brighter Sky Blue */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-sky-500/60 via-black to-black" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center -mt-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 170, damping: 26, mass: 1.6 }}
                    className="flex items-center text-[15vw] md:text-[256px] font-black leading-none md:leading-[256px] tracking-tighter text-white mix-blend-difference select-none"
                >
                    <span className="relative flex items-center justify-center">
                        <span className="relative z-10">O</span>
                        <span className="absolute z-0 w-[0.4em] h-[0.4em] ml-[0.04em] mt-[0.02em] flex items-center justify-center">
                            <AnimatePresence>
                                {!isScrolled && (
                                    <motion.img
                                        key="hero-profile"
                                        onClick={() => setIsExpanded(true)}
                                        // Initial: Zoom from 0.5. Re-entry: Fade from 1.
                                        initial={{ opacity: 0, scale: hasScrolledRef.current ? 1 : 0.5 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                                        transition={
                                            hasScrolledRef.current
                                                ? { duration: 0.4, ease: "easeOut" }
                                                : { delay: 0.5, type: "spring", stiffness: 100 }
                                        }
                                        src="/assets/me.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover rounded-full grayscale-[0.15] hover:grayscale-0 transition-all duration-500 hover:scale-[3.5] hover:z-50 cursor-zoom-in"
                                    />
                                )}
                            </AnimatePresence>
                        </span>
                    </span>
                    NKA
                    R
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-8 flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-2 text-[20px] leading-[28px] font-normal uppercase tracking-[0.33em] text-white/40">
                        <span>I Design And Build Products That</span>
                    </div>
                    <div className={cn(playfair.className, "font-serif text-[48px] md:text-[72px] leading-[72px] text-white italic tracking-tight font-normal")}>
                        deliver real impact.
                    </div>
                </motion.div>
            </div>

            {/* Footer / Bottom Elements */}
            <div className="absolute bottom-12 left-12 hidden md:block">
                <div className="flex flex-col items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-500" strokeWidth={1.5} />
                    <div className="flex flex-col items-center text-center font-sans">
                        <span className="text-base font-normal leading-6 text-[#EDEDED] uppercase tracking-wide">
                            Based In Pune,
                        </span>
                        <span className="text-base font-normal leading-6 text-zinc-500 uppercase tracking-wide">
                            India
                        </span>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-12 right-12 hidden md:block">
                <div className="flex flex-col items-end gap-1 text-right">
                    <div className="text-blue-500 text-lg">
                        💻
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        Full Stack Dev <br />
                        & Designer
                    </div>
                </div>
            </div>

            {/* Lightbox / Expanded View */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xl p-4"
                        onClick={() => setIsExpanded(false)}
                    >
                        <div className="relative w-full max-w-4xl aspect-square md:aspect-video flex items-center justify-center">
                            <motion.img
                                layoutId="hero-profile-img"
                                src="/assets/me.png"
                                alt="Profile Expanded"
                                className="w-full h-full object-contain rounded-2xl"
                                transition={{ type: "spring", stiffness: 170, damping: 26 }}
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself? Maybe user wants to enable that. Let's keep it closeable by background for now but image click should maybe do nothing or close. Usually background click closes.
                            />
                            <button
                                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
                                onClick={() => setIsExpanded(false)}
                            >
                                <X size={32} />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
