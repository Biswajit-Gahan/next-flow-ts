import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import ContextProviders from "@/context/context-providers";
import {cookies} from "next/headers";
import CONFIG from "@/utils/configurations/config";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: "%s | </NextFlow>",
        default: "</NextFlow>"
    },
    description: "A TypeScript NextJs Application.",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const theme = cookies().get(CONFIG.COOKIES_CONFIG.KEY_THEME)?.value

    return (
        <html lang="en">
        <body className={`${inter.className} ${theme === CONFIG.THEMES_CONFIG.LIGHT ? CONFIG.THEMES_CONFIG.LIGHT : CONFIG.THEMES_CONFIG.DARK}`}>
        <ContextProviders>
            {children}
        </ContextProviders>
        </body>
        </html>
    );
}
