"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Animation Configuration: "Cinematic Slow Motion"
const ANIMATION_CONFIG = {
    initial: {
        clipPath: "circle(0% at 50vw 50vh)",
        filter: "blur(20px)",
        zIndex: 50,
        opacity: 1, // Start visible
    },
    animate: {
        clipPath: [
            "circle(0% at 50vw 50vh)",
            "circle(10% at 50vw 50vh)",
            "circle(80% at 50vw 50vh)",
            "circle(85% at 50vw 50vh)",
            "circle(170% at 50vw 50vh)"
        ],
        filter: [
            "blur(20px)",
            "blur(15px)",
            "blur(5px)",
            "blur(5px)",
            "blur(0px)"
        ],
        zIndex: 50,
        opacity: 1,
    },
    exit: {
        zIndex: 0,
        opacity: 1, // Keep visible under the new page
        position: "absolute" as const,
        top: 0,
        left: 0,
        width: "100%",
    }
};

const TRANSITION_PROPS = {
    duration: 2.4, // Matches 0.3x speed request
    times: [0, 0.3, 0.6, 0.8, 1],
    ease: "easeInOut" as const
};

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="popLayout" initial={false}>
            <motion.div
                key={pathname}
                initial={ANIMATION_CONFIG.initial}
                animate={ANIMATION_CONFIG.animate}
                exit={ANIMATION_CONFIG.exit}
                transition={TRANSITION_PROPS}
                className="min-h-screen bg-black w-full"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
