"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";
import { FlaskConical, Link2, Monitor, Send } from "lucide-react";

const subLinks = [
    {
        name: "Links",
        description: "Socials & Profiles",
        href: "/links",
        icon: Link2,
    },
    {
        name: "Uses",
        description: "My gear & software",
        href: "/uses",
        icon: Monitor,
    },
    {
        name: "Contact Me",
        description: "Get in touch",
        href: "/contact",
        icon: Send,
    },
];

export function MoreMenu() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 15 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[420px] p-1.5 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl z-50 overflow-hidden flex flex-row gap-1.5 origin-top backdrop-saturate-150"
        >
            {/* Labs Card (Left) */}
            <motion.div className="flex-1 relative" whileHover="hover">
                <Link
                    href="/labs"
                    className="group relative h-full w-full bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-4 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                    {/* Background Decor - Interactive Flask */}
                    <motion.div
                        className="absolute top-[-10px] right-[-10px] text-white/10"
                        variants={{
                            hover: {
                                rotate: [12, -5, 12],
                                y: [0, -6, 0],
                                scale: [1, 1.05, 1],
                                transition: {
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }
                            }
                        }}
                    >
                        <FlaskConical className="w-32 h-32" />
                    </motion.div>

                    <div className="relative z-10">
                        <h3 className={cn(outfit.className, "text-xl font-bold text-white mb-1")}>Labs</h3>
                        <p className="text-white/80 text-xs font-medium leading-relaxed">
                            Experimental playground & fun micro-tools
                        </p>
                    </div>
                </Link>
            </motion.div>

            {/* Links List (Right) */}
            <div className="flex-1 flex flex-col gap-1.5">
                {subLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center gap-3 p-2.5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 border border-white/10 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                            <link.icon strokeWidth={1.5} className="w-4 h-4" />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(outfit.className, "text-white font-bold text-sm")}>
                                {link.name}
                            </span>
                            <span className="text-white/40 text-[10px] font-medium group-hover:text-white/60 transition-colors">
                                {link.description}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}
