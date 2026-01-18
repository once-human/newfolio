"use client";

import React, { createContext, useContext, useState } from "react";

interface ScrollContextType {
    isFooterProfileVisible: boolean;
    setFooterProfileVisible: (visible: boolean) => void;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children }: { children: React.ReactNode }) {
    const [isFooterProfileVisible, setFooterProfileVisible] = useState(false);

    return (
        <ScrollContext.Provider value={{ isFooterProfileVisible, setFooterProfileVisible }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollContext() {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScrollContext must be used within a ScrollProvider");
    }
    return context;
}
