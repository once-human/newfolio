"use client";

import React, { useEffect, useState } from "react";
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
    Linkedin
} from "lucide-react";
import { cn } from "@/lib/utils";

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
                        className="absolute inset-0 bg-black/60 backdrop-blur-md"
                        onClick={() => setOpen(() => false)}
                    />

                    {/* Modal - Dark Liquid Glass */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={OPEN_SPRING}
                        className="relative w-full max-w-2xl overflow-hidden rounded-xl border border-white/[0.1] bg-[#0a0a0a]/90 shadow-2xl backdrop-blur-2xl backdrop-saturate-150 flex flex-col"
                    >
                        <Command className="w-full bg-transparent flex flex-col h-full">

                            {/* Input Field */}
                            <div className="flex items-center border-b border-white/[0.08] px-4 py-1" cmdk-input-wrapper="">
                                <Search className="mr-3 h-5 w-5 shrink-0 opacity-50 text-white" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-14 w-full rounded-md bg-transparent py-3 text-lg outline-none placeholder:text-white/30 text-white selection:bg-white/20 font-medium font-sans"
                                    autoFocus
                                />
                                <div className="ml-2 flex items-center gap-2 text-[10px] uppercase font-bold tracking-widest text-white/30">
                                    <div className="flex items-center justify-center p-1.5 rounded-md hover:bg-white/10 cursor-pointer transition-colors">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
                                    </div>
                                    <span className="flex items-center justify-center h-6 w-8 rounded bg-white/[0.05] border border-white/[0.05]">Esc</span>
                                </div>
                            </div>

                            {/* Scrollable List with Custom Scrollbar */}
                            <Command.List className="max-h-[400px] overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 hover:scrollbar-thumb-white/20">
                                <Command.Empty className="py-12 text-center text-sm text-white/40">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Pages" className="text-[11px] uppercase tracking-widest text-white/30 font-bold mb-2 px-2 mt-2">
                                    <CommandItem title="Home" subtitle="Go to homepage" onSelect={() => runCommand(() => router.push("/"))}>
                                        <Home className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                    <CommandItem title="About" subtitle="Learn more about me" onSelect={() => runCommand(() => router.push("/about"))}>
                                        <User className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                    <CommandItem title="Work" subtitle="View my projects" onSelect={() => runCommand(() => router.push("/work"))}>
                                        <Briefcase className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                    <CommandItem title="Blogs" subtitle="Read my thoughts" onSelect={() => runCommand(() => router.push("/blogs"))}>
                                        <MessageSquare className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                </Command.Group>

                                <Command.Separator className="my-2 h-[1px] bg-white/[0.05] mx-2" />

                                <Command.Group heading="Socials" className="text-[11px] uppercase tracking-widest text-white/30 font-bold mb-2 px-2 mt-2">
                                    <CommandItem title="GitHub" subtitle="Check my open source work" onSelect={() => runCommand(() => window.open("https://github.com", "_blank"))}>
                                        <Github className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                    <CommandItem title="Twitter" subtitle="Follow my updates" onSelect={() => runCommand(() => window.open("https://twitter.com", "_blank"))}>
                                        <Twitter className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                    <CommandItem title="LinkedIn" subtitle="Connect with me" onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}>
                                        <Linkedin className="mr-3 h-5 w-5 opacity-70" />
                                    </CommandItem>
                                </Command.Group>
                            </Command.List>

                            {/* Footer */}
                            <div className="flex items-center justify-between px-4 py-3 border-t border-white/[0.08] text-[10px] text-white/30 font-medium tracking-wider uppercase bg-white/[0.01]">
                                <div className="flex gap-4">
                                    <span className="cursor-pointer hover:text-white/50 transition-colors">Privacy</span>
                                    <span className="cursor-pointer hover:text-white/50 transition-colors">Terms</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center gap-1">
                                        <span className="text-white/20">↑↓</span> Navigate
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <span className="text-white/20">↵</span> Open
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

// Reusable Item Wrapper for clean styles
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
            className="group flex items-center px-4 py-3 text-sm text-white/70 rounded-lg cursor-pointer data-[selected=true]:bg-white/[0.08] data-[selected=true]:text-white transition-colors duration-200"
        >
            {children}
            <div className="flex flex-col">
                <span className="font-medium text-white/90">{title}</span>
                <span className="text-xs text-white/40 font-light group-data-[selected=true]:text-white/60">{subtitle}</span>
            </div>
            <div className="ml-auto opacity-0 group-data-[selected=true]:opacity-100 transition-opacity">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white/50"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </div>
        </Command.Item>
    );
}
