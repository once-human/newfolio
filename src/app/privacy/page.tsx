"use client";

import React from "react";
import { motion } from "framer-motion";
import { outfit, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
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
                        Privacy <br />
                        <span className={cn(playfair.className, "text-zinc-600 italic font-normal")}>Policy.</span>
                    </h1>
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-20 flex flex-col gap-12 text-zinc-400 leading-relaxed font-sans max-w-2xl"
                >
                    <Section title="1. Overview">
                        <p>
                            This Privacy Policy describes how we collect, use, and handle your information when you use our website and services ("Services"). We are committed to protecting your personal information and your right to privacy.
                        </p>
                    </Section>

                    <Section title="2. Information Collection">
                        <p>
                            We collect information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.
                        </p>
                    </Section>

                    <Section title="3. Use of Information">
                        <p>
                            We use personal information collected via our Services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                        </p>
                    </Section>

                    <Section title="4. Data Protection">
                        <p>
                            We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information we process. However, despite our safeguards and efforts to secure your information, no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure.
                        </p>
                    </Section>

                    <Section title="5. Contact Us">
                        <p>
                            If you have questions or comments about this policy, you may contact us by email at privacy@onkaryaglewad.com.
                        </p>
                    </Section>

                    <div className="pt-12 text-sm text-zinc-600">
                        Last updated: January 2026
                    </div>
                </motion.div>

            </div>

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
