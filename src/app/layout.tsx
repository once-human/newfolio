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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${outfit.variable} antialiased bg-black text-white selection:bg-emerald-500/30 selection:text-emerald-500`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
