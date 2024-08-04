"use client";

import styles from "./floating-theme-toggle.module.css";
import CONTEXTS from "@/context/contexts";

export default function FloatingThemeToggle() {
    const {themeState, setThemeState} = CONTEXTS.useThemeContext();

    function handleToggleButton() {
        setThemeState({darkMode: !themeState.darkMode});
    }

    return <div className={styles.container}>
        <svg onClick={handleToggleButton} xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 16 16" fill="#202020"
             className={`size-4 ${styles.svgIcons}`}>
            <path
                d="M14.438 10.148c.19-.425-.321-.787-.748-.601A5.5 5.5 0 0 1 6.453 2.31c.186-.427-.176-.938-.6-.748a6.501 6.501 0 1 0 8.585 8.586Z"/>
        </svg>

        <svg onClick={handleToggleButton} xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 16 16" fill="#ffffff" className={`size-4 ${styles.svgIcons}`}>
            <path
                d="M8 1a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 1ZM10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM12.95 4.11a.75.75 0 1 0-1.06-1.06l-1.062 1.06a.75.75 0 0 0 1.061 1.062l1.06-1.061ZM15 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 15 8ZM11.89 12.95a.75.75 0 0 0 1.06-1.06l-1.06-1.062a.75.75 0 0 0-1.062 1.061l1.061 1.06ZM8 12a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 12ZM5.172 11.89a.75.75 0 0 0-1.061-1.062L3.05 11.89a.75.75 0 1 0 1.06 1.06l1.06-1.06ZM4 8a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 4 8ZM4.11 5.172A.75.75 0 0 0 5.173 4.11L4.11 3.05a.75.75 0 1 0-1.06 1.06l1.06 1.06Z"/>
        </svg>

        <div className={`${styles.toggleButton} ${themeState.darkMode ? styles.toggleLeft : styles.toggleRight}`}></div>
    </div>
}