"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientLight() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 100], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="pointer-events-none fixed top-0 right-0 z-40 h-[400px] w-[600px] -translate-y-1/2 translate-x-1/3 overflow-visible"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-emerald-500/5 to-transparent blur-[100px]" />
            <div className="absolute inset-0 bg-emerald-500/10 blur-[80px] mix-blend-screen" />
        </motion.div>
    );
}
