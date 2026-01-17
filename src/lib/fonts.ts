import { Outfit, Playfair_Display } from "next/font/google";

export const outfit = Outfit({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    style: "italic"
});
