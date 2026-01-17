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
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 30 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] p-2 rounded-3xl bg-[#0A0A0A]/90 backdrop-blur-2xl border border-white/10 shadow-2xl z-50 overflow-hidden flex flex-row gap-2 origin-top"
        >
            {/* Labs Card (Left) */}
            <Link
                href="/labs"
                className="group relative flex-1 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform duration-300"
            >
                {/* Background Decor - Interactive Flask */}
                <motion.div
                    className="absolute top-[-20px] right-[-20px] text-white/10"
                    variants={{
                        hover: {
                            rotate: [12, -5, 12],
                            y: [0, -10, 0],
                            scale: [1, 1.05, 1],
                            transition: {
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }
                        }
                    }}
                >
                    <FlaskConical className="w-48 h-48" />
                </motion.div>

                <div className="relative z-10">
                    <h3 className={cn(outfit.className, "text-2xl font-bold text-white mb-2")}>Labs</h3>
                    <p className="text-white/80 text-sm font-medium leading-relaxed">
                        Experimental playground & fun micro-tools
                    </p>
                </div>
            </Link>

            {/* Links List (Right) */}
            <div className="flex-1 flex flex-col gap-2">
                {subLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                            <link.icon strokeWidth={1.5} className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                            <span className={cn(outfit.className, "text-white font-bold text-base")}>
                                {link.name}
                            </span>
                            <span className="text-white/40 text-xs font-medium group-hover:text-white/60 transition-colors">
                                {link.description}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </motion.div>
    );
}
