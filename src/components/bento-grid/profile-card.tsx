"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { playfair } from "@/lib/fonts";

export function ProfileCard() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
                timeZone: "Asia/Kolkata"
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative w-full h-full rounded-[30px] bg-[#0c0c0c] border border-white/10 overflow-hidden flex flex-col items-center pt-6"
        >
            {/* Header */}
            <div className="flex flex-col items-center gap-1 z-20">
                <h3 className={cn(playfair.className, "text-2xl text-white italic")}>Onkar Yaglewad</h3>
                <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    <MapPin className="w-3 h-3" />
                    <span>Pune, IN • {time}</span>
                </div>
            </div>

            {/* Phone-shaped Image Container */}
            <div className="relative w-[80%] h-full mt-6 rounded-t-[30px] overflow-hidden border-x border-t border-white/10 bg-black shadow-2xl translate-y-4 group-hover:translate-y-2 transition-transform duration-500">
                <img
                    src="/assets/me.png"
                    alt="Profile"
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />

                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none" />
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-900/50 to-black pointer-events-none z-10" />
        </motion.div>
    );
}
