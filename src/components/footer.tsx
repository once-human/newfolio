"use client";

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
            <div className="max-w-[1400px] mx-auto mb-20 relative">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="relative z-10 flex items-center gap-4">
                        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-white/10">
                            <img src="/assets/me.png" alt="Onkar" className="w-full h-full object-cover grayscale" />
                        </div>
                        <h2 className={cn(outfit.className, "text-5xl md:text-8xl font-bold tracking-tighter text-white")}>
                            Let's create <br /> something real.
                        </h2>
                    </div>
                    {/* Glowing Orb */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96 pointer-events-none">
                        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[100px] animate-pulse" />
                        <div className="absolute inset-10 bg-indigo-500/20 rounded-full blur-[80px]" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)]" />
                    </div>
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
            <div className="max-w-[1400px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-500 text-xs font-medium uppercase tracking-wider">
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
