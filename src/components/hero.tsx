"use client";

import React from "react";
import { motion } from "framer-motion";
import { playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Smile } from "lucide-react";

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-10 text-center">
            {/* Background/Ambient Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center -mt-12">
                <motion.h1
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 170, damping: 26, mass: 1.6 }}
                    className="flex items-center text-[15vw] md:text-[256px] font-black leading-none md:leading-[256px] tracking-tighter text-white mix-blend-difference select-none"
                >
                    <span className="relative">
                        O
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 0.6, type: "spring", stiffness: 200, damping: 15 }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            <svg viewBox="0 0 100 100" className="w-[60%] h-[60%] fill-black pointer-events-none">
                                <circle cx="35" cy="40" r="8" />
                                <circle cx="65" cy="40" r="8" />
                                <path d="M 30 65 Q 50 85 70 65" stroke="black" strokeWidth="8" fill="transparent" strokeLinecap="round" />
                            </svg>
                        </motion.div>
                    </span>
                    NKAR
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-8 flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-2 text-[20px] leading-[28px] font-normal uppercase tracking-[0.2em] text-white/40">
                        <span>I Design And Build Products That</span>
                    </div>
                    <div className={cn(playfair.className, "font-serif text-[48px] md:text-[72px] leading-[72px] text-white italic tracking-tight font-normal")}>
                        deliver real impact.
                    </div>
                </motion.div>
            </div>

            {/* Footer / Bottom Elements */}
            <div className="absolute bottom-12 left-12 hidden md:block">
                <div className="flex flex-col items-start gap-1">
                    <div className="text-emerald-500 text-lg">
                        📍
                    </div>
                    <div className="text-xs font-medium uppercase tracking-wider text-zinc-500">
                        Based in India <br />
                        & Remote
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
        </section>
    );
}
