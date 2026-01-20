"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { playfair, outfit } from "@/lib/fonts";
import { Sparkles } from "lucide-react";

const tags = ["Motion", "Type", "Feedback", "Craft"];

export function PhilosophyCard() {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="group relative w-full h-full rounded-[30px] bg-[#0c0c0c] border border-white/10 overflow-hidden flex flex-col justify-between p-8"
        >
            {/* Top Bar */}
            <div className="flex justify-between items-center z-10">
                <div className="flex items-center gap-2 group/tag">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/5 text-purple-400">
                        <Sparkles size={12} />
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest group-hover/tag:text-zinc-300 transition-colors">Detail-Driven</span>
                </div>
                <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Philosophy +</div>
            </div>

            {/* Main Content - Centered */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-0 px-10 pt-10">
                <h3 className={cn(outfit.className, "text-5xl md:text-6xl font-bold text-white mb-4 tracking-tighter leading-[0.9]")}>
                    Interfaces <br />
                    <span className={cn(playfair.className, "italic font-normal text-zinc-600 group-hover:text-purple-300 transition-colors duration-500")}>you can feel.</span>
                </h3>
                <p className="text-sm text-zinc-500 max-w-sm leading-relaxed">
                    Micro-interactions, physics-based motion, and haptic feedback.
                </p>
            </div>

            {/* Bottom Tabs */}
            <div className="flex justify-between items-end z-10 mt-auto">
                <div /> {/* Spacer */}
                <div className="flex gap-1.5">
                    {tags.map((tag, i) => (
                        <div key={tag} className="px-2.5 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] text-zinc-500 uppercase tracking-wider font-medium hover:bg-white/10 transition-colors">
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
