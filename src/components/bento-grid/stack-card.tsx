"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Layers, Cpu, Database } from "lucide-react";

export function StackCard() {
    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="group relative w-full h-full rounded-[30px] bg-[#0c0c0c] border border-white/10 overflow-hidden p-8"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-purple-500/5 group-hover:to-purple-500/10 transition-colors duration-500" />

            {/* Header */}
            <div className="flex justify-between items-start mb-12 relative z-10">
                <div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">Core Stack</div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                        <span className="text-sm text-white font-medium tracking-wide">Product Engineering</span>
                    </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center border border-white/5 text-zinc-500">
                    <Code2 className="w-4 h-4 group-hover:text-purple-400 transition-colors" />
                </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-8">
                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Layers className="w-3 h-3 text-zinc-600" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["React", "Next.js", "TypeScript", "Tailwind", "Framer"].map(tech => (
                            <span key={tech} className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/10 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center gap-2 mb-4">
                        <Cpu className="w-3 h-3 text-zinc-600" />
                        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {["Node.js", "Go", "Postgres", "Redis", "Docker"].map(tech => (
                            <span key={tech} className="px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-[10px] text-zinc-400 group-hover:text-zinc-200 group-hover:border-white/10 transition-all">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
