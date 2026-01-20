"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { outfit } from "@/lib/fonts";
import { Globe, Clock } from "lucide-react";

export function GlobalCard() {
    // Simple timezone list
    const zones = [
        { label: "India", tz: "Asia/Kolkata", active: true },
        { label: "London", tz: "Europe/London", active: false },
        { label: "New York", tz: "America/New_York", active: false },
    ];

    const [times, setTimes] = useState<Record<string, string>>({});

    useEffect(() => {
        const updateTimes = () => {
            const newTimes: Record<string, string> = {};
            zones.forEach(zone => {
                newTimes[zone.label] = new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: false,
                    timeZone: zone.tz
                });
            });
            setTimes(newTimes);
        };
        updateTimes();
        const interval = setInterval(updateTimes, 60000); // Date-fns might be better but native is lightweight
        return () => clearInterval(interval);
    }, []);

    return (
        <motion.div
            whileHover={{ scale: 1.01 }}
            className="group relative w-full h-full rounded-[30px] bg-[#0c0c0c] border border-white/10 overflow-hidden p-8 flex flex-col md:flex-row items-center justify-between"
        >
            {/* Map Background (Abstract dots) */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1" fill="currentColor" className="text-zinc-700" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                {/* Radial Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-transparent to-[#0c0c0c]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-transparent to-[#0c0c0c]" />
            </div>

            {/* Left Content */}
            <div className="relative z-10 flex flex-col h-full justify-between w-full md:w-1/2">
                <div>
                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-500/50 animate-pulse" />
                        Available Globally
                    </div>
                    <h3 className={cn(outfit.className, "text-3xl font-bold text-white")}>Adaptable across <br /><span className="text-blue-500">time zones</span></h3>
                </div>

                {/* Time List */}
                <div className="flex flex-col gap-2.5 mt-8">
                    {zones.map((zone) => (
                        <div key={zone.label} className={cn(
                            "flex items-center justify-between p-3 rounded-full border transition-all duration-300",
                            zone.active
                                ? "bg-white/5 border-orange-500/30"
                                : "bg-transparent border-transparent text-zinc-600 hover:bg-white/5"
                        )}>
                            <div className="flex items-center gap-3">
                                {zone.active && <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />}
                                <span className={cn("text-xs font-medium uppercase tracking-wider", zone.active ? "text-orange-500" : "text-zinc-600")}>
                                    {zone.label}
                                </span>
                            </div>
                            <span className="font-mono text-xs text-zinc-500">{times[zone.label]}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Graphic - Darker, cleaner Globe */}
            <div className="relative w-full md:w-1/2 h-full flex items-center justify-end mt-8 md:mt-0">
                <div className="relative w-64 h-64 rounded-full flex items-center justify-center">
                    {/* Abstract Globe Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-3xl opacity-10" />
                    <Globe className="w-32 h-32 text-zinc-800 opacity-30" strokeWidth={0.5} />

                    {/* Scanning Line */}
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent top-1/2 animate-scan" />
                    <div className="absolute w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/50 to-transparent left-1/2 animate-scan" style={{ animationDuration: "3s" }} />
                </div>
            </div>
        </motion.div>
    );
}
