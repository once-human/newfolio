"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientLight() {
    const { scrollY } = useScroll();
    // Fade out as user scrolls down the first 500px
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="pointer-events-none fixed -top-[20%] -right-[10%] z-0 h-[800px] w-[800px] select-none overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent blur-[120px] opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-bl from-white/20 via-transparent to-transparent blur-[100px] opacity-40 mix-blend-overlay" />
        </motion.div>
    );
}
