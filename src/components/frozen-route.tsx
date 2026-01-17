"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef, useEffect, ReactNode } from "react";

// This component captures the LayoutRouterContext of the *current* route
// and freezes it so that when the route changes, the *children* (which depend on this context)
// can still render correctly during the exit animation.
export function FrozenRoute({ children }: { children: ReactNode }) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    // We only freeze effectively if the context is available.
    // Next.js App Router always provides this context, so frozen should be stable.

    if (!frozen) {
        return <>{children}</>;
    }

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {children}
        </LayoutRouterContext.Provider>
    );
}
