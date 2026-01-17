"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)", filter: "blur(20px)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)", filter: "blur(0px)" }}
            transition={{
                duration: 1.2,
                ease: [0.25, 1, 0.5, 1], // Soft "Apple" deceleration
                filter: { duration: 0.8, ease: "easeOut" } // Focus faster than reveal
            }}
            className="min-h-screen bg-black"
        >
            {children}
        </motion.div>
    );
}
