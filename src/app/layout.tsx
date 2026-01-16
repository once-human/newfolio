import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { AmbientLight } from "@/components/ambient-light";

const outfit = Outfit({ subsets: ["latin"] });

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
        {children}
      </body>
    </html>
  );
}
