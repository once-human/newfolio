"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientLight() {
    const { scrollY } = useScroll();
    const opacity = useTransform(scrollY, [0, 200], [1, 0]);

    return (
        <motion.div
            style={{ opacity }}
            className="pointer-events-none fixed top-0 right-[10%] z-40 h-[300px] w-[800px] -translate-y-1/2 overflow-visible"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/30 via-blue-500/10 to-transparent blur-[120px]" />
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] mix-blend-screen" />
        </motion.div>
    );
}
