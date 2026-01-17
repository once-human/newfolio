"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef } from "react";

// Frozen Route Context to keep the old page from unmounting
function FrozenRoute({ children }: { children: React.ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    // Explicitly return null if no context found (sanity check, though Next.js always provides it)
    if (!frozen) return <>{children}</>;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {children}
        </LayoutRouterContext.Provider>
    );
}

// Animation Configuration: "Cinematic Slow Motion"
const ANIMATION_CONFIG = {
    initial: {
        clipPath: "circle(0% at 50vw 50vh)",
        filter: "blur(20px)",
        // opacity: 1, // Start visible
        zIndex: 50, // Entering page on top
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
        // opacity: 1,
    },
    exit: {
        // No clip path change needed, just stay there
        zIndex: 0, // Drop below entering page
        // opacity: 1, // Stay visible
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
        // Grid Stack Container: Forces overlap without absolute positioning
        <div className="grid grid-cols-1 grid-rows-1 min-h-screen w-full overflow-hidden">
            {/* mode="sync" (default) allows both to exist simultaneously */}
            <AnimatePresence initial={false}>
                <motion.div
                    key={pathname}
                    initial={ANIMATION_CONFIG.initial}
                    animate={ANIMATION_CONFIG.animate}
                    exit={ANIMATION_CONFIG.exit}
                    transition={TRANSITION_PROPS}
                    // Force grid placement
                    className="col-start-1 row-start-1 min-h-screen w-full"
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
