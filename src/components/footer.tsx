"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { outfit } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin, Instagram, Send, Star } from "lucide-react";

const socialLinks = [
    { icon: Github, href: "https://github.com/onkar", label: "Github" },
    { icon: Linkedin, href: "https://linkedin.com/in/onkar", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/onkar", label: "X" },
    { icon: Send, href: "https://t.me/onkar", label: "Telegram" },
    { icon: Instagram, href: "https://instagram.com/onkar", label: "Instagram" },
];

const footerLinks = [
    {
        title: "General",
        links: [
            { name: "Home", href: "/" },
            { name: "Blogs", href: "/blogs" },
            { name: "Guestbook", href: "/guestbook" },
            { name: "Uses", href: "/uses" },
        ],
    },
    {
        title: "About",
        links: [
            { name: "About Me", href: "/about" },
            { name: "Projects", href: "/projects" },
            { name: "Contact", href: "/contact" },
        ],
    },
    {
        title: "Projects",
        links: [
            { name: "Newfolio", href: "#" },
            { name: "Agentic", href: "#" },
            { name: "Cosmos", href: "#" },
        ],
    },
    {
        title: "Legal",
        links: [
            { name: "Privacy Policy", href: "/privacy" },
            { name: "Terms & Conditions", href: "/terms" },
        ],
    },
];

export function Footer() {
    return (
        <footer className="relative w-full bg-black pt-20 pb-8 px-4 md:px-8 overflow-hidden">
            {/* CTA Section */}
            <div className="max-w-[1400px] mx-auto mb-20 relative px-6 md:px-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="relative z-10 flex flex-col items-center md:items-start gap-4 text-center md:text-left">
                        <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 mb-2">
                            <img src="/assets/me.png" alt="Onkar" className="w-full h-full object-cover grayscale" />
                        </div>
                        <h2 className={cn(outfit.className, "text-5xl md:text-9xl font-bold tracking-tighter text-white leading-[0.9]")}>
                            Let's create <br />
                            <span className="text-zinc-600">something real.</span>
                        </h2>
                    </div>

                    {/* Interactive Magnetic Orb */}
                    <MagneticOrb />
                </div>
            </div>

            {/* Main Footer Card */}
            <div className="max-w-[1400px] mx-auto bg-[#0A0A0A] border border-white/5 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 max-w-lg">
                        <h3 className={cn(outfit.className, "text-4xl font-black uppercase tracking-tighter text-white")}>
                            ONKAR
                        </h3>
                        <p className="text-zinc-400 text-lg leading-relaxed font-sans">
                            Building digital experiences that matter, one line of code at a time. Crafting interfaces that feel alive, solving problems that make a difference, and turning ideas into reality. Every pixel has a purpose. Every interaction tells a story.
                        </p>
                    </div>

                    {/* Links Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                        {footerLinks.map((section) => (
                            <div key={section.title} className="flex flex-col gap-4">
                                <h4 className="text-white font-medium text-sm text-zinc-500">{section.title}</h4>
                                <ul className="flex flex-col gap-3">
                                    {section.links.map((link) => (
                                        <li key={link.name}>
                                            <Link href={link.href} className="text-zinc-400 hover:text-white transition-colors text-sm font-medium">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Decorative Gradients inside card */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            </div>

            {/* Bottom Bar */}
            <div className="max-w-[1400px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-medium uppercase tracking-wider px-4 md:px-0">
                <p>© 2026 ONKAR YAGLEWAD. ALL RIGHTS RESERVED.</p>

                <div className="flex items-center gap-6">
                    {socialLinks.map((social) => (
                        <Link
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <social.icon className="w-5 h-5" strokeWidth={1.5} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}

function MagneticOrb() {
    const ref = React.useRef<HTMLDivElement>(null);
    const [position, setPosition] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 };
        const center = { x: left + width / 2, y: top + height / 2 };

        // Calculate distance from center
        const distance = { x: clientX - center.x, y: clientY - center.y };

        // Magnetic pull (dampened)
        setPosition({ x: distance.x * 0.1, y: distance.y * 0.1 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center cursor-pointer group"
        >
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[100px] animate-pulse group-hover:bg-blue-500/40 transition-colors duration-500" />
            <div className="absolute inset-10 bg-indigo-500/20 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500" />
        </motion.div>
    );
}
