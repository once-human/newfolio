"use client";

import React from "react";
import { motion } from "framer-motion";
import { ProfileCard } from "./profile-card";
import { PhilosophyCard } from "./philosophy-card";
import { ConnectCard } from "./connect-card";
import { GlobalCard } from "./global-card";
import { StackCard } from "./stack-card";
import { GiantClock } from "./giant-clock";

export function BentoGrid() {
    return (
        <section className="relative w-full max-w-[1400px] mx-auto px-4 md:px-8 py-20 z-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
            >
                {/* Desktop Layout: Specific Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

                    {/* Top Row: Profile (1), Philosophy (2), Connect (1) */}
                    <div className="md:col-span-1 h-[360px]">
                        <ProfileCard />
                    </div>
                    <div className="md:col-span-2 h-[360px]">
                        <PhilosophyCard />
                    </div>
                    <div className="md:col-span-1 h-[360px]">
                        <ConnectCard />
                    </div>

                    {/* Bottom Row: Global (2), Stack (2) */}
                    <div className="md:col-span-2 h-[320px] mt-0 md:mt-24">
                        <GlobalCard />
                    </div>
                    <div className="md:col-span-2 h-[320px] mt-0 md:mt-24">
                        <StackCard />
                    </div>
                </div>

                {/* The Giant Clock - Centered Absolutely on Desktop */}
                <div className="hidden md:flex absolute top-[360px] left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                    <GiantClock />
                </div>
            </motion.div>
        </section>
    );
}
