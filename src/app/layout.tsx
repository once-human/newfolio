import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Onkar Yaglewad | Portfolio",
  description: "Creative Engineer & Developer",
};

import { AmbientLight } from "@/components/ambient-light";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} dark scroll-smooth`}>
      <body className="font-sans antialiased bg-black text-zinc-100 min-h-screen selection:bg-white/20">
        <AmbientLight />
        <Header />
        {children}
      </body>
    </html>
  );
}
