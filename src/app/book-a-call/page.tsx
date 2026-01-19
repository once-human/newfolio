"use client";

import React from "react";
import { motion } from "framer-motion";
import { outfit, playfair } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Script from "next/script";

export default function BookACallPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 px-6 overflow-hidden">
            <Script
                id="cal-embed"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                      (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                      Cal("init", "letstalk", {origin:"https://app.cal.com"});

                      Cal.ns.letstalk("inline", {
                        elementOrSelector:"#my-cal-inline-letstalk",
                        config: {"layout":"month_view"},
                        calLink: "once-human/letstalk",
                      });

                      Cal.ns.letstalk("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
                    `,
                }}
            />

            <div className="max-w-[1200px] mx-auto relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 text-center mb-16"
                >
                    <span className="text-blue-500 font-medium tracking-widest uppercase text-sm">
                        Schedule a Session
                    </span>
                    <h1 className={cn(outfit.className, "text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.9]")}>
                        Book a <span className={cn(playfair.className, "text-zinc-600 italic font-normal")}>call.</span>
                    </h1>
                    <p className="text-xl text-zinc-400 font-sans max-w-2xl mx-auto">
                        Pick a time that works best for you and let's discuss your project,
                        ideas, or any professional inquiries.
                    </p>
                </motion.div>

                {/* Cal.com Embed - Direct Integration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                    <div
                        style={{ width: '100%', height: '100%', minHeight: '700px' }}
                        id="my-cal-inline-letstalk"
                    ></div>
                </motion.div>
            </div>
        </main>
    );
}
