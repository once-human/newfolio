import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AmbientLight } from "@/components/ambient-light";
import { outfit } from "@/lib/fonts";
import TransitionWrapper from "@/components/transition-wrapper";

export const metadata: Metadata = {
  metadataBase: new URL("https://onkaryaglewad.com"),
  title: "Onkar Yaglewad | Product Engineer | Portfolio",
  description: "Product Engineer specializing in high-performance, detail-driven web interfaces. Building fluid experiences with Next.js, React, and Framer Motion.",
  keywords: ["Product Engineer", "Frontend Developer", "Next.js", "React", "Design Engineer", "Pune", "Onkar Yaglewad", "Web Development"],
  authors: [{ name: "Onkar Yaglewad", url: "https://onkaryaglewad.com" }],
  creator: "Onkar Yaglewad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://onkaryaglewad.com",
    title: "Onkar Yaglewad | Product Engineer",
    description: "Building interfaces you can feel. Product Engineer based in Pune.",
    siteName: "Onkar Yaglewad Portfolio",
    images: [
      {
        url: "/assets/me.png",
        width: 800,
        height: 800,
        alt: "Onkar Yaglewad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Onkar Yaglewad | Product Engineer",
    description: "Product Engineer building fluid, detail-driven web experiences.",
    images: ["/assets/me.png"], // Twitter will read this from the public folder
  },
  icons: {
    icon: "/assets/me.png",
    shortcut: "/assets/me.png",
    apple: "/assets/me.png",
  },
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
