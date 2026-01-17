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
    Linkedin
} from "lucide-react";
import { cn } from "@/lib/utils";

// Apple-style "Fluid" Spring Config for Pop Animation
const OPEN_SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;
const CLOSE_SPRING = { type: "spring", stiffness: 300, damping: 30, opacity: { duration: 0.2 } } as const;

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(true); // Toggle logic handled by caller usually, but specific shortcut ensures open
            }
            if (e.key === "Escape") {
                setOpen(false);
            }
        };

        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, [setOpen]);

    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4"
                >
                    {/* Backdrop - Dimmer with Blur */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
                        onClick={() => setOpen(false)}
                    />

                    {/* Modal - Dark Liquid Glass */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={OPEN_SPRING}
                        className="relative w-full max-w-lg overflow-hidden rounded-xl border border-white/[0.08] bg-[#121212]/80 shadow-2xl backdrop-blur-2xl backdrop-saturate-150"
                    >
                        <Command className="w-full bg-transparent">

                            {/* Input Field */}
                            <div className="flex items-center border-b border-white/[0.08] px-4" cmdk-input-wrapper="">
                                <Search className="mr-2 h-4 w-4 shrink-0 opacity-50 text-white" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-white/40 text-white selection:bg-white/20"
                                    autoFocus
                                />
                                <div className="ml-2 flex items-center gap-1 text-[10px] uppercase font-bold tracking-widest text-white/30">
                                    <span className="flex items-center justify-center h-5 w-5 rounded bg-white/[0.05] border border-white/[0.05]">Esc</span>
                                </div>
                            </div>

                            {/* Scrollable List */}
                            <Command.List className="max-h-[300px] overflow-y-auto overflow-x-hidden p-2">
                                <Command.Empty className="py-6 text-center text-sm text-white/40">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Pages" className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-2 px-2 mt-2">
                                    <CommandItem onSelect={() => runCommand(() => router.push("/"))}>
                                        <Home className="mr-2 h-4 w-4" />
                                        <span>Home</span>
                                        <span className="ml-auto text-xs text-white/30">Go to homepage</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/about"))}>
                                        <User className="mr-2 h-4 w-4" />
                                        <span>About</span>
                                        <span className="ml-auto text-xs text-white/30">Learn more about me</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/work"))}>
                                        <Briefcase className="mr-2 h-4 w-4" />
                                        <span>Work</span>
                                        <span className="ml-auto text-xs text-white/30">View my projects</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => router.push("/blogs"))}>
                                        <MessageSquare className="mr-2 h-4 w-4" />
                                        <span>Blogs</span>
                                        <span className="ml-auto text-xs text-white/30">Read my thoughts</span>
                                    </CommandItem>
                                </Command.Group>

                                <Command.Separator className="my-1 h-[1px] bg-white/[0.05]" />

                                <Command.Group heading="Socials" className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-2 px-2 mt-2">
                                    <CommandItem onSelect={() => runCommand(() => window.open("https://github.com", "_blank"))}>
                                        <Github className="mr-2 h-4 w-4" />
                                        <span>GitHub</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => window.open("https://twitter.com", "_blank"))}>
                                        <Twitter className="mr-2 h-4 w-4" />
                                        <span>Twitter</span>
                                    </CommandItem>
                                    <CommandItem onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))}>
                                        <Linkedin className="mr-2 h-4 w-4" />
                                        <span>LinkedIn</span>
                                    </CommandItem>
                                </Command.Group>
                            </Command.List>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

// Reusable Item Wrapper for clean styles
function CommandItem({ children, onSelect }: { children: React.ReactNode; onSelect: () => void }) {
    return (
        <Command.Item
            onSelect={onSelect}
            className="flex items-center px-3 py-3 text-sm text-white/70 rounded-md cursor-pointer data-[selected=true]:bg-white/[0.08] data-[selected=true]:text-white transition-colors duration-200"
        >
            {children}
        </Command.Item>
    );
}
