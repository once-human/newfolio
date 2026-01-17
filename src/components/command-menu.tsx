"use client";

import React, { useEffect } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Home,
    User,
    Briefcase,
    MessageSquare,
    Search,
    Github,
    Twitter,
    Linkedin,
    Moon,
    ArrowRight
} from "lucide-react";

// Apple-style "Fluid" Spring Config for Pop Animation
const OPEN_SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: (current: boolean) => boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open: boolean) => !open);
            }
            if (e.key === "Escape") {
                setOpen(() => false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [setOpen]);

    const runCommand = (command: () => void) => {
        setOpen(() => false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                >
                    {/* Backdrop - Dimmer with Blur */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setOpen(() => false)}
                    />

                    {/* Modal - Deep Dark Liquid Glass - Reference Match */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={OPEN_SPRING}
                        className="relative w-full max-w-[640px] overflow-hidden rounded-xl border border-white/[0.08] bg-[#080808] shadow-2xl flex flex-col"
                    >
                        <Command className="w-full bg-transparent flex flex-col h-full">

                            {/* Input Field */}
                            <div className="flex items-center border-b border-white/[0.08] px-3 py-3">
                                <Search className="mr-2 h-4 w-4 shrink-0 text-white/40" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-6 w-full rounded-md bg-transparent text-[14px] outline-none placeholder:text-white/30 text-white selection:bg-white/20 font-normal font-sans tracking-wide"
                                    autoFocus
                                />
                                <div className="ml-2 flex items-center gap-2">
                                    <div className="group flex items-center justify-center p-1 rounded-md hover:bg-white/10 cursor-pointer transition-colors">
                                        <Moon className="w-3.5 h-3.5 text-white/40 group-hover:text-white/80 transition-colors" />
                                    </div>
                                    <span className="flex items-center justify-center px-1.5 h-4.5 rounded-[4px] bg-white/[0.08] border border-white/[0.05] text-[9px] font-bold tracking-widest text-white/40">ESC</span>
                                </div>
                            </div>

                            {/* Scrollable List with Custom Scrollbar from globals.css */}
                            <Command.List className="max-h-[320px] overflow-y-auto overflow-x-hidden p-1.5 scrollbar-thin">
                                <Command.Empty className="py-8 text-center text-xs text-white/30">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="PAGES" className="text-[9px] uppercase tracking-widest text-white/20 font-semibold mb-1 px-2 mt-2 select-none">
                                    <CommandItem title="Home" subtitle="Go to homepage" onSelect={() => runCommand(() => router.push("/"))}>
                                        <Home className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="About" subtitle="Learn more about me" onSelect={() => runCommand(() => router.push("/about"))}>
                                        <User className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="Work" subtitle="View my projects" onSelect={() => runCommand(() => router.push("/work"))}>
                                        <Briefcase className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="Blogs" subtitle="Read my thoughts" onSelect={() => runCommand(() => router.push("/blogs"))}>
                                        <MessageSquare className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                </Command.Group>

                                <Command.Separator className="my-1.5 h-[1px] bg-white/[0.04] mx-2" />

                                <Command.Group heading="SOCIALS" className="text-[9px] uppercase tracking-widest text-white/20 font-semibold mb-1 px-2 mt-1 select-none">
                                    <CommandItem title="GitHub" subtitle="Check my open source work" onSelect={() => runCommand(() => window.open("https://github.com", "_blank"))}>
                                        <Github className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="Twitter" subtitle="Follow my updates" onSelect={() => runCommand(() => window.open("https://twitter.com", "_blank"))}>
                                        <Twitter className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="LinkedIn" subtitle="Connect with me" onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}>
                                        <Linkedin className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                </Command.Group>
                            </Command.List>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-3 py-2 border-t border-white/[0.08] text-[9px] text-white/30 font-medium tracking-wider bg-[#080808]">
                                <div className="flex gap-3 uppercase">
                                    <span className="cursor-pointer hover:text-white/50 transition-colors">Privacy</span>
                                    <span className="cursor-pointer hover:text-white/50 transition-colors">Terms</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="flex items-center gap-1.5">
                                        <div className="flex items-center justify-center p-0.5 min-w-[14px] h-[14px] bg-white/[0.08] rounded-[3px] border border-white/[0.05]">
                                            <span className="text-[8px] leading-none">↑</span>
                                        </div>
                                        <div className="flex items-center justify-center p-0.5 min-w-[14px] h-[14px] bg-white/[0.08] rounded-[3px] border border-white/[0.05]">
                                            <span className="text-[8px] leading-none">↓</span>
                                        </div>
                                        <span>Navigate</span>
                                    </span>
                                    <div className="w-[1px] h-3 bg-white/10 mx-1"></div>
                                    <span className="flex items-center gap-1.5">
                                        <div className="flex items-center justify-center p-0.5 min-w-[20px] h-[14px] bg-white/[0.08] rounded-[3px] border border-white/[0.05]">
                                            <span className="text-[9px] leading-none">↵</span>
                                        </div>
                                        <span>Open</span>
                                    </span>
                                </div>
                            </div>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Reusable Item Wrapper with specific "Highlight" style from reference
function CommandItem({
    children,
    title,
    subtitle,
    onSelect
}: {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    onSelect: () => void;
}) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="group flex items-center px-3 py-2.5 mb-0.5 text-sm text-white/50 rounded-lg cursor-pointer aria-selected:bg-white/[0.06] aria-selected:text-white transition-all duration-200"
        >
            <div className="flex items-center justify-center text-white/40 group-aria-selected:text-white transition-colors duration-200">
                {children}
            </div>
            <div className="flex flex-col ml-2">
                <span className="font-sans font-normal text-[13px] text-white/80 group-aria-selected:text-white">{title}</span>
                <span className="text-[11px] text-white/30 font-normal group-aria-selected:text-white/50">{subtitle}</span>
            </div>
            <div className="ml-auto opacity-0 group-aria-selected:opacity-100 transition-opacity duration-200 transform translate-x-[-4px] group-aria-selected:translate-x-0">
                <ArrowRight className="w-3.5 h-3.5 text-white/40" />
            </div>
        </Command.Item>
    );
}
