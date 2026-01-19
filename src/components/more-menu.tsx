"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";
import { FlaskConical, Link2, Monitor, Send, Mail } from "lucide-react";

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
    {
        name: "Book a Call",
        description: "Schedule a session",
        href: "/book-a-call",
        icon: Mail,
    },
];

export function MoreMenu() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 5 }}
            animate={{ opacity: 1, scale: 1, y: 15 }}
            exit={{ opacity: 0, scale: 0.95, y: 5 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 w-[460px] p-2 rounded-3xl bg-black/40 backdrop-blur-3xl border border-white/10 shadow-2xl z-50 overflow-hidden flex flex-row gap-2 origin-top backdrop-saturate-150"
        >
            {/* Labs Card (Left) */}
            <motion.div className="flex-1 relative" whileHover="hover">
                <Link
                    href="/labs"
                    className="group relative h-full w-full bg-gradient-to-br from-sky-500/30 to-emerald-600/30 border border-sky-500/20 rounded-2xl p-5 flex flex-col justify-end overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                >
                    {/* Background Decor - Interactive Flask */}
                    <motion.div
                        className="absolute top-[-15px] right-[-15px] text-white/10"
                        variants={{
                            hover: {
                                rotate: -15, // Smooth single tilt
                                scale: 1.1,
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                }
                            }
                        }}
                    >
                        <FlaskConical className="w-36 h-36" />
                    </motion.div>

                    <div className="relative z-10">
                        <h3 className={cn(outfit.className, "text-2xl font-bold text-white mb-1")}>Labs</h3>
                        <p className="text-white/80 text-sm font-medium leading-relaxed">
                            Experimental playground & fun micro-tools
                        </p>
                    </div>
                </Link>
            </motion.div>

            {/* Links List (Right) */}
            <div className="flex-1 flex flex-col gap-2">
                {subLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="group flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
                    >
                        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/5 border border-white/10 text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                            <link.icon strokeWidth={1.5} className="w-5 h-5" />
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
