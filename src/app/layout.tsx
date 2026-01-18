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

import { ScrollProvider } from "@/context/scroll-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(outfit.className, "bg-black text-white antialiased")}>
        <ScrollProvider>
          <Header />
          <AmbientLight />

          <TransitionWrapper>
            {children}
          </TransitionWrapper>
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
