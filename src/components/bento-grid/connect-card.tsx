"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { outfit, playfair } from "@/lib/fonts";
import { Copy, Check, ArrowUpRight } from "lucide-react";

export function ConnectCard() {
    const [copied, setCopied] = useState(false);
    const email = "hello@onkaryaglewad.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative w-full h-full rounded-[30px] bg-[#0c0c0c] border border-white/10 overflow-hidden p-6 flex flex-col justify-between"
        >
            {/* Status */}
            <div className="flex justify-end">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                    </span>
                    <span className="text-[9px] font-medium text-zinc-300 uppercase tracking-widest">Available for work</span>
                </div>
            </div>

            {/* Main CTA */}
            <div className="mt-4">
                <h3 className={cn(outfit.className, "text-2xl font-bold text-white uppercase leading-tight mb-2 tracking-wide")}>
                    Let's Build <br /> Something
                </h3>
                <p className={cn(playfair.className, "text-lg italic text-zinc-600 font-medium")}>
                    that actually works.
                </p>
            </div>

            {/* Action Area */}
            <div className="flex flex-col gap-4 mt-auto">
                <button
                    onClick={handleCopy}
                    className="flex flex-col items-start gap-1 group/email cursor-pointer pl-1"
                >
                    <div className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 group-hover/email:bg-zinc-700 group-hover/email:text-zinc-300 transition-all">
                            {copied ? <Check size={10} /> : <Copy size={10} />}
                        </div>
                        <span className="text-sm font-mono text-zinc-400 group-hover/email:text-white transition-colors">hello@onkaryaglewad.com</span>
                    </div>
                    {/* Copy Feedback */}
                    <span className={cn(
                        "text-[9px] text-zinc-600 uppercase tracking-widest ml-8 transition-opacity duration-300",
                        copied ? "opacity-100" : "opacity-0 group-hover/email:opacity-100"
                    )}>
                        {copied ? "Copied to clipboard" : "Tap to copy"}
                    </span>
                </button>

                <a
                    href="/contact"
                    className="w-full py-4 rounded-full bg-white text-black text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                >
                    Connect Now
                    <ArrowUpRight className="w-3 h-3" />
                </a>
            </div>
        </motion.div>
    );
}
