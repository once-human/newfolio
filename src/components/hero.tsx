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
                    <span className="relative flex items-center justify-center">
                        <span className="relative z-10">O</span>
                        <motion.img
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop"
                            alt="Profile"
                            className="absolute z-0 w-[0.38em] h-[0.38em] object-cover rounded-full grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ml-[0.08em] mt-[0.02em]"
                        />
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
