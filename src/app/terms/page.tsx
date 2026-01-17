"use client";

import React from "react";
import { motion } from "framer-motion";
import { outfit, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-black pt-32 pb-20 px-6 overflow-hidden">
            <div className="max-w-[1000px] mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6"
                >
                    <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
                        Legal
                    </span>
                    <h1 className={cn(outfit.className, "text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]")}>
                        Terms of <br />
                        <span className={cn(playfair.className, "text-zinc-600 italic font-normal")}>Service.</span>
                    </h1>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-20 flex flex-col gap-12 text-zinc-400 leading-relaxed font-sans max-w-2xl"
                >
                    <Section title="1. Acceptance of Terms">
                        <p>
                            By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using this websites particular services, you shall be subject to any posted guidelines or rules applicable to such services.
                        </p>
                    </Section>

                    <Section title="2. Intellectual Property">
                        <p>
                            The content, organization, graphics, design, compilation, magnetic translation, digital conversion and other matters related to the Site are protected under applicable copyrights, trademarks and other proprietary (including but not limited to intellectual property) rights.
                        </p>
                    </Section>

                    <Section title="3. Use License">
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                        </p>
                    </Section>

                    <Section title="4. Disclaimer">
                        <p>
                            The materials on this website are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </Section>

                    <Section title="5. Governing Law">
                        <p>
                            Any claim relating to this website shall be governed by the laws of India without regard to its conflict of law provisions.
                        </p>
                    </Section>

                    <div className="pt-12 text-sm text-zinc-600">
                        Last updated: January 2026
                    </div>
                </motion.div>

            </div>

            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none -translate-y-1/2" />
        </main>
    );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
    return (
        <div className="flex flex-col gap-4">
            <h3 className={cn(outfit.className, "text-2xl font-bold text-white")}>
                {title}
            </h3>
            <div className="text-lg">
                {children}
            </div>
        </div>
    );
}
