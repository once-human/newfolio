"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from "framer-motion";
import { outfit } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Github, Twitter, Linkedin, Instagram, Send, Star } from "lucide-react";
import { ParticleBurst } from "./particle-burst";

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

import { useScrollContext } from "@/context/scroll-context";
import { useInView } from "framer-motion";

// ... existing imports

export function Footer() {
    // ... existing mouse hooks
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [profileBursts, setProfileBursts] = React.useState<{ id: number }[]>([]);

    const handleProfileClick = (e: React.MouseEvent) => {
        setProfileBursts(prev => [...prev, { id: Date.now() }]);
    };

    const removeProfileBurst = (id: number) => {
        setProfileBursts(prev => prev.filter(b => b.id !== id));
    };

    // Profile Visibility Logic
    const { setFooterProfileVisible } = useScrollContext();
    const profileRef = React.useRef(null);
    const isProfileInView = useInView(profileRef, {
        amount: 0.5,
        margin: "0px 0px -40% 0px" // Only trigger when element is above the bottom 40% of screen
    });

    React.useEffect(() => {
        setFooterProfileVisible(isProfileInView);
    }, [isProfileInView, setFooterProfileVisible]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // ... existing logic
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
    };

    const spotlightBackground = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.01), transparent 100%)`;

    return (
        <footer className="relative w-full bg-black pt-20 pb-8 px-4 md:px-8 overflow-hidden">
            {/* CTA Section */}
            <div className="max-w-[1400px] mx-auto mb-[-80px] relative px-6 md:px-0 z-0">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="relative z-10 flex flex-col items-start gap-0 text-left pointer-events-none">
                        <div className="flex flex-row items-center gap-6 md:gap-8">
                            <div
                                ref={profileRef}
                                onClick={handleProfileClick}
                                className="relative w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-white/10 shrink-0 transition-all duration-700 ease-out cursor-pointer group/profile"
                                style={{
                                    filter: isProfileInView ? "grayscale(0%)" : "grayscale(100%)",
                                    transform: isProfileInView ? "scale(1.05)" : "scale(1)"
                                }}
                            >
                                <img src="/assets/me.png" alt="Onkar" className="w-full h-full object-cover group-hover/profile:scale-110 transition-transform duration-500" />

                                <AnimatePresence>
                                    {profileBursts.map((burst) => (
                                        <ParticleBurst key={burst.id} onComplete={() => removeProfileBurst(burst.id)} />
                                    ))}
                                </AnimatePresence>
                            </div>
                            <h2 className={cn(outfit.className, "text-5xl md:text-9xl font-bold tracking-tighter text-white leading-[0.9]")}>
                                Let's create
                            </h2>
                        </div>
                        <h2 className={cn(outfit.className, "text-5xl md:text-9xl font-bold tracking-tighter text-zinc-600 leading-[0.9]")}>
                            something real.
                        </h2>
                    </div>

                    {/* Interactive Magnetic Orb - Shifted Down Slightly */}
                    <div className="pb-20 translate-y-4 md:translate-y-10">
                        <MagneticOrb />
                    </div>
                </div>
            </div>

            {/* Main Footer Card - Liquid Glass */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.01, backgroundColor: "rgba(0,0,0,0.5)" }}
                whileTap={{ scale: 0.99 }}
                onMouseMove={handleMouseMove}
                transition={{ duration: 0.5 }}
                className="max-w-[1400px] mx-auto bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden z-10 shadow-2xl group/card"
            >
                {/* Spotlight Effect Layer */}
                <motion.div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"
                    style={{ background: spotlightBackground }}
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
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
            </motion.div>

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

    const [bursts, setBursts] = React.useState<{ id: number; x: number; y: number }[]>([]);
    const [texts, setTexts] = React.useState<{ id: number; text: string; x: number; y: number; rotation: number }[]>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 };
        const center = { x: left + width / 2, y: top + height / 2 };

        // Calculate distance from center
        const distance = { x: clientX - center.x, y: clientY - center.y };

        // Magnetic pull (dampened but stronger now)
        setPosition({ x: distance.x * 0.3, y: distance.y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = ref.current?.getBoundingClientRect() ?? { left: 0, top: 0, width: 0, height: 0 };
        const center = { x: left + width / 2, y: top + height / 2 };
        // We want the burst to originate from the center of the orb, but visually it feels better if it's slightly towards the click if it's way off, 
        // but for a "core" explosion, center is best.
        // Let's add a unique ID for each click to trigger independent bursts
        setBursts((prev) => [...prev, { id: Date.now(), x: 0, y: 0 }]);

        // Add random text
        const words = [
            "phew!", "boom!", "zap!", "pow!", "whoa!", "nice!", "cool!", "magic!", "spark!", "pop!",
            "wowsers!", "gosh!", "neat!", "super!", "rad!", "yay!", "yipee!", "whee!", "omg!", "yass!",
            "slay!", "epic!", "sick!", "dope!", "woah!", "bam!", "bang!", "kaboom!", "zing!", "zow!",
            "smash!", "crash!", "yeet!", "yoink!", "bop!", "bonk!", "snap!", "crack!", "wham!", "crunch!",
            "splash!", "bazinga!", "eureka!", "hurray!", "bravo!", "yeah!", "yup!", "haha!", "lol!", "win!",
            "top!", "max!", "ultra!", "mega!", "hyper!", "giga!", "tera!", "blam!", "plop!", "fizz!",
            "buzz!", "beep!", "boop!", "ding!", "winning!"
        ];
        const randomWord = words[Math.floor(Math.random() * words.length)];
        // Random position relative to center (Wider spread: 300px range)
        const randomX = (Math.random() - 0.5) * 300;
        const randomY = (Math.random() - 0.5) * 300;
        const randomRotation = (Math.random() - 0.5) * 40; // More tilt

        setTexts((prev) => [...prev, { id: Date.now(), text: randomWord, x: randomX, y: randomY, rotation: randomRotation }]);
    };

    const removeBurst = (id: number) => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
    };

    const removeText = (id: number) => {
        setTexts((prev) => prev.filter((t) => t.id !== id));
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            whileTap={{ scale: 0.9 }}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center cursor-pointer group select-none"
        >
            <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[100px] animate-pulse group-hover:bg-blue-500/40 transition-colors duration-500" />
            <div className="absolute inset-10 bg-indigo-500/20 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.3)] group-hover:scale-110 transition-transform duration-500 overflow-visible">
                {/* Bursts */}
                <AnimatePresence>
                    {bursts.map((burst) => (
                        <ParticleBurst key={burst.id} onComplete={() => removeBurst(burst.id)} />
                    ))}
                </AnimatePresence>

                {/* Floating Texts */}
                <AnimatePresence>
                    {texts.map((item) => (
                        <FloatingText key={item.id} text={item.text} x={item.x} y={item.y} rotation={item.rotation} onComplete={() => removeText(item.id)} />
                    ))}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}


const FloatingText = ({ text, x, y, rotation, onComplete }: { text: string; x: number; y: number; rotation: number; onComplete: () => void }) => {
    React.useEffect(() => {
        const timer = setTimeout(onComplete, 1000); // Slower timeout
        return () => clearTimeout(timer);
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5, x, y, rotate: rotation }}
            animate={{ opacity: 1, scale: 1.25, x: x + (Math.random() - 0.5) * 30, y: y }} // Softer punch
            exit={{ opacity: 0, scale: 0, y: y - 20 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }} // Softer spring
            className={cn("absolute whitespace-nowrap text-white font-bold tracking-tighter pointer-events-none z-50", outfit.className)}
            style={{ fontSize: "1.75rem", textShadow: "0 4px 12px rgba(0,0,0,0.5)" }} // Smaller text
        >
            {text}
        </motion.div>
    );
};
