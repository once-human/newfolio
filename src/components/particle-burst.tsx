"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ParticleBurst = ({ onComplete }: { onComplete: () => void }) => {
    // Generate particles
    const particles = React.useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            angle: (i * 360) / 20, // Distribute evenly
            distance: Math.random() * 100 + 100, // Random distance 100-200px
            size: Math.random() * 4 + 2, // Random size 2-6px
            color: i % 2 === 0 ? "bg-white" : "bg-blue-400",
        }));
    }, []);

    React.useEffect(() => {
        const timer = setTimeout(onComplete, 1000);
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Shockwave Ripple */}
            <motion.div
                initial={{ scale: 0.5, opacity: 1, borderWidth: 4 }}
                animate={{ scale: 2, opacity: 0, borderWidth: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute w-full h-full rounded-full border-blue-500/50"
            />

            {/* Particles */}
            {particles.map((p) => (
                <motion.div
                    key={p.id}
                    initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                    animate={{
                        x: Math.cos((p.angle * Math.PI) / 180) * p.distance,
                        y: Math.sin((p.angle * Math.PI) / 180) * p.distance,
                        opacity: 0,
                        scale: 0,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className={cn("absolute rounded-full shadow-[0_0_10px_currentColor]", p.color)}
                    style={{
                        width: p.size,
                        height: p.size,
                    }}
                />
            ))}
        </div>
    );
};
