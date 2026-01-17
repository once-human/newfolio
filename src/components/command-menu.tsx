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
    CornerDownLeft
} from "lucide-react";

// Apple-style "Fluid" Spring Config for Pop Animation
const OPEN_SPRING = { type: "spring", stiffness: 300, damping: 30 } as const;

interface CommandMenuProps {
    open: boolean;
    setOpen: (open: (current: boolean) => boolean) => void;
}

export function CommandMenu({ open, setOpen }: CommandMenuProps) {
    const router = useRouter();
    const [value, setValue] = React.useState("");

    // Prevent scrolling when open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [open]);

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
                    className="fixed inset-0 z-[100] flex items-center justify-center px-4"
                >
                    {/* Backdrop - Smooth Blur Animation (Open & Close) */}
                    <motion.div
                        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        animate={{ opacity: 1, backdropFilter: "blur(2px)" }}
                        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="absolute inset-0 bg-black/20"
                        onClick={() => setOpen(() => false)}
                    />

                    {/* Modal - Perfected Middle Ground Opacity (/85) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={OPEN_SPRING}
                        className="relative w-full max-w-2xl overflow-hidden rounded-[22px] border border-white/[0.08] bg-[#0a0a0a]/85 backdrop-blur-xl shadow-2xl flex flex-col min-h-[550px]"
                    >
                        <Command
                            className="w-full bg-transparent flex flex-col h-full"
                            value={value}
                            onValueChange={setValue}
                        >

                            {/* Input Field - Large and Prominent */}
                            <div className="flex items-center border-b border-white/[0.08] px-4 py-4">
                                <Search className="mr-3 h-5 w-5 shrink-0 text-white/40" />
                                <Command.Input
                                    placeholder="Type a command or search..."
                                    className="flex h-8 w-full rounded-md bg-transparent text-[17px] outline-none placeholder:text-white/30 text-white selection:bg-white/20 font-normal font-sans tracking-wide"
                                    autoFocus
                                />
                                <div className="ml-2 flex items-center gap-2">
                                    <span className="flex items-center justify-center px-2 h-6 rounded-[6px] bg-white/[0.08] border border-white/[0.05] text-[10px] font-bold tracking-widest text-white/40">ESC</span>
                                </div>
                            </div>

                            {/* Scrollable List with Smooth Scrolling */}
                            <Command.List className="max-h-[550px] flex-1 overflow-y-auto overflow-x-hidden p-2 scrollbar-thin scroll-smooth">
                                <Command.Empty className="py-12 text-center text-sm text-white/30">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Pages" className="text-[10px] text-white/20 font-medium mb-2 px-2 mt-3 select-none">
                                    <CommandItem title="Home" subtitle="Go to homepage" value="home" onSelect={() => runCommand(() => router.push("/"))} activeValue={value} setValue={setValue}>
                                        <Home className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="About" subtitle="Learn more about me" value="about" onSelect={() => runCommand(() => router.push("/about"))} activeValue={value} setValue={setValue}>
                                        <User className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="Work" subtitle="View my projects" value="work" onSelect={() => runCommand(() => router.push("/work"))} activeValue={value} setValue={setValue}>
                                        <Briefcase className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="Blogs" subtitle="Read my thoughts" value="blogs" onSelect={() => runCommand(() => router.push("/blogs"))} activeValue={value} setValue={setValue}>
                                        <MessageSquare className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                </Command.Group>

                                <Command.Separator className="my-2 h-[1px] bg-white/[0.04] mx-2" />

                                <Command.Group heading="Socials" className="text-[10px] text-white/20 font-medium mb-2 px-2 mt-2 select-none">
                                    <CommandItem title="GitHub" subtitle="Check my open source work" value="github" onSelect={() => runCommand(() => window.open("https://github.com", "_blank"))} activeValue={value} setValue={setValue}>
                                        <Github className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="Twitter" subtitle="Follow my updates" value="twitter" onSelect={() => runCommand(() => window.open("https://twitter.com", "_blank"))} activeValue={value} setValue={setValue}>
                                        <Twitter className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                    <CommandItem title="LinkedIn" subtitle="Connect with me" value="linkedin" onSelect={() => runCommand(() => window.open("https://linkedin.com", "_blank"))} activeValue={value} setValue={setValue}>
                                        <Linkedin className="mr-3 h-4 w-4" />
                                    </CommandItem>
                                </Command.Group>
                            </Command.List>

                            {/* Footer - Opaque Background to Contrast Glass Body */}
                            <div className="flex items-center justify-between px-4 py-2 border-t border-white/[0.08] text-[10px] text-white/30 font-medium tracking-wider bg-[#020202]/90 backdrop-blur-md">
                                <div className="flex gap-4 ml-1">
                                    <span className="cursor-pointer hover:text-white/50 transition-colors">Privacy</span>
                                    <span className="cursor-pointer hover:text-white/50 transition-colors">Terms</span>
                                </div>
                                <div className="flex items-center gap-4">
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
                                        <div className="flex items-center justify-center p-0.5 min-w-[14px] h-[14px] bg-white/[0.08] rounded-[3px] border border-white/[0.05]">
                                            <CornerDownLeft className="w-2 h-2" />
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

// Reusable Item Wrapper with Gliding Highlight
function CommandItem({
    children,
    title,
    subtitle,
    value,
    onSelect,
    activeValue,
    setValue
}: {
    children: React.ReactNode;
    title: string;
    subtitle: string;
    value: string;
    onSelect: () => void;
    activeValue: string;
    setValue: (val: string) => void;
}) {
    const isSelected = activeValue === value;

    return (
        <Command.Item
            onSelect={onSelect}
            value={value}
            onPointerEnter={() => setValue(value)}
            className="group relative flex items-center px-3 py-2.5 mb-0.5 text-sm text-white/50 rounded-xl cursor-pointer transition-all duration-200"
        >
            {isSelected && (
                <motion.div
                    layoutId="command-highlight"
                    className="absolute inset-0 bg-white/[0.08] rounded-xl z-0"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
            )}

            <div className="relative z-10 flex items-center w-full">
                <div className={`flex items-center justify-center transition-colors duration-200 ${isSelected ? "text-white" : "text-white/40"}`}>
                    {children}
                </div>
                <div className="flex flex-col ml-3">
                    <span className={`font-sans font-medium text-[13px] transition-colors duration-200 ${isSelected ? "text-white" : "text-white/80"}`}>
                        {title}
                    </span>
                    <span className={`text-[11px] font-normal transition-colors duration-200 ${isSelected ? "text-white/50" : "text-white/30"}`}>
                        {subtitle}
                    </span>
                </div>
                <div className={`ml-auto transition-all duration-200 transform ${isSelected ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-4px]"}`}>
                    <CornerDownLeft className="w-3.5 h-3.5 text-white/40" />
                </div>
            </div>
        </Command.Item>
    );
}
