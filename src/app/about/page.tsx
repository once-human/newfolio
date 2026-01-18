"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 text-white selection:bg-emerald-500/30">
            <div className="max-w-4xl mx-auto space-y-24 pb-20">

                {/* Intro Section */}
                <section className="space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="text-4xl md:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-white/50"
                    >
                        About Me
                    </motion.h1>
                    <div className="text-xl md:text-2xl font-light text-zinc-400 space-y-6 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
                        >
                            I am a <strong className="text-white font-medium">Creative Engineer</strong> oriented towards
                            building high-performance, interactive, and aesthetically pleasing digital experiences.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            transition={{ duration: 0.8, delay: 1.5, ease: "easeOut" }}
                        >
                            With a deep passion for <span className="text-emerald-400">design perfection</span> and engineering
                            precision, I bridge the gap between imagination and reality.
                        </motion.p>
                    </div>
                </section>

                {/* Experience Section */}
                <section className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <h2 className="text-2xl font-bold tracking-tight text-zinc-200 flex items-center gap-3">
                        <span className="h-px flex-1 bg-zinc-800" />
                        Experience
                    </h2>

                    <div className="grid gap-6">
                        {/* Card 1 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 backdrop-blur-xl cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-white">Senior Frontend Developer</h3>
                                    <span className="text-sm font-medium text-zinc-500 font-mono">2023 - Present</span>
                                </div>
                                <p className="text-zinc-400 leading-normal">
                                    Spearheading the UI/UX overhaul of core products. Implementing advanced animations
                                    and optimizing performance for a global user base.
                                </p>
                            </div>
                        </motion.div>

                        {/* Card 2 */}
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                            className="group relative p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:bg-zinc-900/60 hover:border-white/10 backdrop-blur-xl cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-white">Full Stack Engineer</h3>
                                    <span className="text-sm font-medium text-zinc-500 font-mono">2021 - 2023</span>
                                </div>
                                <p className="text-zinc-400 leading-normal">
                                    Built scalable backend services and responsive frontend architectures.
                                    Collaborated with cross-functional teams to deliver robust solutions.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Connect Section */}
                <section className="flex justify-center pt-10 animate-in fade-in zoom-in duration-1000 delay-300">
                    <Link
                        href="#contact"
                    >
                        <motion.div
                            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            Let&apos;s Work Together
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </motion.div>
                    </Link>
                </section>

            </div>
        </main>
    );
}
