"use client";

import { LayoutRouterContext, GlobalLayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef, ReactNode } from "react";

// This component captures the Router Contexts of the *current* route
// and freezes them so that when the route changes, the *children* (which depend on these contexts)
// can still render correctly during the exit animation.
// We must freeze ALL relevant contexts to prevent leaks.
export function FrozenRoute({ children }: { children: ReactNode }) {
    const layoutContext = useContext(LayoutRouterContext);
    const globalLayoutContext = useContext(GlobalLayoutRouterContext);

    // Use refs to hold the initial values (from when this component first mounted/rendered with this key)
    const frozenLayoutContext = useRef(layoutContext).current;
    const frozenGlobalLayoutContext = useRef(globalLayoutContext).current;

    // Render with the FROZEN providers
    // We nest them to ensure all consumers find the frozen values.

    // Safe return if contexts are null (though they usually aren't in App Router)
    if (!frozenLayoutContext) return <>{children}</>;

    return (
        <LayoutRouterContext.Provider value={frozenLayoutContext}>
            {frozenGlobalLayoutContext ? (
                <GlobalLayoutRouterContext.Provider value={frozenGlobalLayoutContext}>
                    {children}
                </GlobalLayoutRouterContext.Provider>
            ) : (
                children
            )}
        </LayoutRouterContext.Provider>
    );
}
