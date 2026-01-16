"use client";

import React from "react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 pt-20 text-center">
            {/* Background/Ambient Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-black to-black" />

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 170, damping: 26, mass: 1.6 }}
                    className="text-[12vw] sm:text-[15vw] font-black leading-none tracking-tighter text-white mix-blend-difference select-none"
                >
                    ONKAR
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                        opacity: 1,
                        y: [0, -10, 0]
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        y: { repeat: Infinity, duration: 4, ease: "easeInOut" }
                    }}
                    className="mt-8 flex flex-col items-center gap-2"
                >
                    <div className="flex items-center gap-2 text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
                        <span>I Design And Build Products That</span>
                    </div>
                    <div className="font-serif text-4xl sm:text-6xl text-white italic tracking-tight">
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
