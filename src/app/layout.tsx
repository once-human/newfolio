import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AmbientLight } from "@/components/ambient-light";
import { outfit } from "@/lib/fonts";
import TransitionWrapper from "@/components/transition-wrapper";

export const metadata: Metadata = {
  title: "Onkar Yaglewad | Portfolio",
  description: "Creative Engineer building the future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(outfit.className, "bg-black text-white antialiased")}>
        <Header />
        <AmbientLight />

        {/* Global Ambient Background (Blue Light) */}
        <div className="fixed top-0 left-0 w-full h-[500px] bg-blue-500/10 blur-[150px] pointer-events-none -translate-y-1/2 z-[-1]" />

        <TransitionWrapper>
          {children}
        </TransitionWrapper>
        <Footer />
      </body>
    </html>
  );
}
