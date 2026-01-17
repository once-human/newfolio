"use client";

import React from "react";
import { motion } from "framer-motion";
import { outfit, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-[1000px] mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
                        Get In Touch
                    </span>
                    <h1 className={cn(outfit.className, "text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]")}>
                        Let's start a <br />
                        <span className={cn(playfair.className, "text-zinc-600 italic font-normal")}>conversation.</span>
                    </h1>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"
                >
                    <div className="flex flex-col gap-8">
                        <p className="text-xl text-zinc-400 leading-relaxed font-sans max-w-md">
                            Interested in working together? I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <Link
                            href="mailto:contact@onkaryaglewad.com" // Replace with actual email if known, defaulting to generic pattern or placeholder
                            className="group flex items-center gap-4 text-white hover:text-blue-400 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-all duration-300">
                                <Mail className="w-5 h-5" />
                            </div>
                            <span className="text-lg font-medium">hello@onkaryaglewad.com</span>
                        </Link>
                    </div>

                    {/* Quick Form or info could go here, for now just a simple decorative element or list */}
                    <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <h3 className={cn(outfit.className, "text-2xl font-bold text-white mb-6")}>
                            What I can help you with
                        </h3>
                        <ul className="flex flex-col gap-4">
                            {["Web Development", "Product Design", "Interactive Experiences", "MVP Development"].map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-zinc-400"
                                >
                                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

            </div>

        </main>
    );
}
