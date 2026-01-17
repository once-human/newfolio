"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { FrozenRoute } from "@/components/frozen-route";
import { useRef } from "react";

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

// Helper component to hold the route content based on a SPECIFIC path prop.
// This ensures that when AnimatePresence holds the "old" instance, 
// the 'route' prop remains the OLD path, so we fetch the OLD children from the cache.
function RenderRoute({ route, childrenCache }: { route: string, childrenCache: Map<string, React.ReactNode> }) {
    const children = childrenCache.get(route);
    // Fallback to null if not found (shouldn't happen if logic is correct)
    if (!children) return null;
    return <FrozenRoute>{children}</FrozenRoute>;
}

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const frozenChildren = useRef(new Map<string, React.ReactNode>()).current;

    // Cache the children for this pathname if not already cached
    // This ensures we keep the exact React Element associated with this path
    if (!frozenChildren.has(pathname)) {
        frozenChildren.set(pathname, children);
    }

    // Update the cache if the children reference changes (e.g. strict mode or dev refresh)
    // to ensure we have the latest version of the current page.
    frozenChildren.set(pathname, children);

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
                    {/* Pass pathname as a PROP so it gets frozen by AnimatePresence */}
                    <RenderRoute route={pathname} childrenCache={frozenChildren} />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
