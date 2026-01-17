import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/header";
import { AmbientLight } from "@/components/ambient-light";
import { outfit } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Onkar Yaglewad | Portfolio",
  description: "Creative Engineer building the future.",
};

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(outfit.className, "bg-background text-foreground antialiased")}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <AmbientLight />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
