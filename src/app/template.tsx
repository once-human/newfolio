"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ clipPath: "circle(0% at 50% 50%)", filter: "blur(20px)" }}
            animate={{
                clipPath: [
                    "circle(0% at 50% 50%)",   // 0% - Start
                    "circle(10% at 50% 50%)",  // 30% - Slow Start
                    "circle(80% at 50% 50%)",  // 60% - Fast Middle
                    "circle(85% at 50% 50%)",  // 80% - Pause/Slow
                    "circle(170% at 50% 50%)"  // 100% - Fast Finish
                ],
                filter: [
                    "blur(20px)",
                    "blur(15px)",
                    "blur(5px)",
                    "blur(5px)",
                    "blur(0px)"
                ]
            }}
            transition={{
                duration: 2.4, // Very slow (0.3x speed)
                times: [0, 0.3, 0.6, 0.8, 1], // Timing distribution
                ease: "easeInOut" // Smooth blending between keyframes
            }}
            className="min-h-screen bg-black"
        >
            {children}
        </motion.div>
    );
}
