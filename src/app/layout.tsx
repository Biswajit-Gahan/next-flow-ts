import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import React from "react";
import ContextProviders from "@/context/context-providers";
import {cookies, headers} from "next/headers";
import CONFIG from "@/utils/configurations/config";
import helpers from "@/utils/helpers/helpers";
import {redirect, RedirectType} from "next/navigation";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: {
        template: "%s | </NextFlow>",
        default: "</NextFlow>"
    },
    description: "A TypeScript NextJs Application.",
};

export default async function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {

    const theme = cookies().get(CONFIG.COOKIES_CONFIG.KEY_THEME)?.value
    const pathName = headers().get("pathname") || "";
    const pathOrigin = `/${pathName.split("/")[1]}`

    const RESTRICTED_PATHS = [
        CONFIG.PATHS_CONFIG.DEFAULT_PATHS.PRODUCTS,
        CONFIG.PATHS_CONFIG.DEFAULT_PATHS.GALLERY,
    ]

    if(RESTRICTED_PATHS.includes(pathOrigin)) {
        const validateUser = await helpers.VALIDATE_USER();
        if(!validateUser.isAuthenticated) redirect("/fallback", "replace" as RedirectType);
    }

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
