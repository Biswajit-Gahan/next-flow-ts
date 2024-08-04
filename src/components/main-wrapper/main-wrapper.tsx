"use client";

import "./main-wrapper.css";
import React from "react";
import CONTEXTS from "@/context/contexts";
import CONFIG from "@/utils/configurations/config";
import FloatingThemeToggle from "@/components/floating-theme-toggle/floating-theme-toggle";

type MainWrapperProps = {
    children: React.ReactNode;
}

export default function MainWrapper({children}: MainWrapperProps) {
    const {themeState} = CONTEXTS.useThemeContext();

    return <main className={`main ${themeState.darkMode ? CONFIG.THEMES_CONFIG.DARK : CONFIG.THEMES_CONFIG.LIGHT}`}>
        {children}
        <FloatingThemeToggle />
    </main>
}