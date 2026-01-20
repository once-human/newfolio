"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function GiantClock() {
    const [time, setTime] = useState<Date | null>(null);

    useEffect(() => {
        setTime(new Date());
        const interval = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(interval);
    }, []);

    // Prevent hydration mismatch
    if (!time) return <div className="w-[400px] h-[400px] rounded-full border border-white/5" />;

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours % 12 + minutes / 60) / 12) * 360;

    return (
        <div className="relative w-[360px] h-[360px] rounded-full bg-[#0c0c0c] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] flex items-center justify-center z-30 pointer-events-auto select-none overflow-hidden">
            {/* Outer Rim Detail */}
            <div className="absolute inset-2 rounded-full border border-white/5" />
            <div className="absolute inset-[3px] rounded-full border border-zinc-900" />

            {/* Tick Marks - High Contrast */}
            {Array.from({ length: 12 }).map((_, i) => {
                return (
                    <div
                        key={i}
                        className="absolute w-[2px] h-4 bg-zinc-500 rounded-full top-6 left-1/2 -translate-x-1/2 origin-[50%_156px]"
                        style={{ transform: `translateX(-50%) rotate(${i * 30}deg)` }}
                    />
                );
            })}
            {Array.from({ length: 60 }).map((_, i) => {
                if (i % 5 === 0) return null;
                return (
                    <div
                        key={i}
                        className="absolute w-[1px] h-2 bg-zinc-800 top-6 left-1/2 -translate-x-1/2 origin-[50%_156px]"
                        style={{ transform: `translateX(-50%) rotate(${i * 6}deg)` }}
                    />
                );
            })}

            {/* Numbers */}
            <div className="absolute text-zinc-500 font-sans font-medium text-xs top-12">12</div>
            <div className="absolute text-zinc-500 font-sans font-medium text-xs bottom-12">6</div>
            <div className="absolute text-zinc-500 font-sans font-medium text-xs left-12">9</div>
            <div className="absolute text-zinc-500 font-sans font-medium text-xs right-12">3</div>

            {/* Inner Depth Ring */}
            <div className="absolute inset-32 rounded-full border border-white/5 bg-gradient-to-br from-white/5 to-transparent" />

            {/* Hands */}
            {/* Hour */}
            <div
                className="absolute w-2 h-24 bg-zinc-200 rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 shadow-lg z-10"
                style={{ transform: `translateX(-50%) rotate(${hourDegrees}deg)` }}
            />
            {/* Minute */}
            <div
                className="absolute w-1.5 h-32 bg-zinc-400 rounded-full origin-bottom bottom-1/2 left-1/2 -translate-x-1/2 shadow-lg z-10"
                style={{ transform: `translateX(-50%) rotate(${minuteDegrees}deg)` }}
            />
            {/* Second - Blue accent */}
            <div
                className="absolute w-[1px] h-36 bg-blue-500 origin-bottom bottom-[140px] left-1/2 -translate-x-1/2 z-20"
                style={{ transform: `translateX(-50%) rotate(${secondDegrees}deg)` }}
            >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
            </div>

            {/* Center Cap */}
            <div className="absolute w-3 h-3 bg-zinc-200 rounded-full z-30 shadow-md flex items-center justify-center">
                <div className="w-1 h-1 bg-black rounded-full" />
            </div>
        </div>
    );
}
