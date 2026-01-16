"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
    {
        title: "Project Alpha",
        category: "Design System",
        description: "A comprehensive design system for a fintech unicorn.",
        gradient: "from-purple-500/20 to-blue-500/20",
    },
    {
        title: "Neon Nexus",
        category: "Web Application",
        description: "Real-time collaboration platform with futuristic UI.",
        gradient: "from-emerald-500/20 to-teal-500/20",
    },
    {
        title: "Velvet UI",
        category: "Component Library",
        description: "Open-source React component library focused on smooth interactions.",
        gradient: "from-rose-500/20 to-orange-500/20",
    },
    {
        title: "Flux Dashboard",
        category: "Data Visualization",
        description: "High-performance analytics dashboard processing millions of rows.",
        gradient: "from-cyan-500/20 to-indigo-500/20",
    },
];

export default function WorkPage() {
    return (
        <main className="min-h-screen pt-32 px-6 md:px-12 bg-black text-white">
            <div className="max-w-6xl mx-auto space-y-16 pb-20">

                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <h1 className="text-5xl md:text-7xl font-black tracking-tighter">
                        Selected Work
                    </h1>
                    <p className="text-xl text-zinc-400 max-w-2xl">
                        A curated collection of projects that define my journey in digital craftsmanship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                            whileTap={{ scale: 0.98 }}
                            className="group relative rounded-[2rem] bg-zinc-900/50 border border-white/5 overflow-hidden hover:border-white/10 aspect-[4/3] backdrop-blur-sm cursor-pointer"
                        >
                            {/* Background Gradient Blob */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />

                            <div className="absolute inset-0 p-10 flex flex-col justify-end z-10">
                                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <span className="text-xs font-bold tracking-widest uppercase text-white/50 mb-2 block">{project.category}</span>
                                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-zinc-400 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </main>
    );
}
