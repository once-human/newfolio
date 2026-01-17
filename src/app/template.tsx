"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)" }}
            animate={{ clipPath: "circle(150% at 50% 50%)" }}
            transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1], // Standard curve
            }}
            className="min-h-screen"
        >
            {children}
        </motion.div>
    );
}
