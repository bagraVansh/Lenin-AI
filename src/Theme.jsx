import {createContext, useState} from 'react';

export const appTheme = createContext()

export function Theme({children}) {
    const githubDarkTheme = {
        // Base Colors
        bgPrimary: "#0d1117",       // Main background
        bgSecondary: "#161b22",     // Secondary background, cards, etc.
        bgTertiary: "#21262d",      // Tertiary background, hover states

        // Text Colors
        textPrimary: "#c9d1d9",     // Primary text
        textSecondary: "#8b949e",   // Secondary text, subtitles, captions
        textTertiary: "#6e7681",    // Tertiary text, placeholders

        // Border Colors
        borderPrimary: "#30363d",   // Primary borders
        borderSecondary: "#21262d", // Secondary, subtle borders

        // Accent Colors
        accentBlue: "#58a6ff",      // Primary accent, links, focused elements
        accentGreen: "#3fb950",     // Success states, confirmed actions
        accentYellow: "#d29922",    // Warnings, attention needed
        accentOrange: "#db6d28",    // Moderate warnings
        accentRed: "#f85149",       // Errors, destructive actions
        accentPurple: "#bc8cff",    // Special highlights, tertiary actions

        // Button Colors
        buttonBg: "#21262d",        // Default button background
        buttonText: "#c9d1d9",      // Default button text
        buttonPrimaryBg: "#238636", // Primary button background
        buttonPrimaryText: "#ffffff", // Primary button text

        // Shadow
        shadow: "rgba(0, 0, 0, 0.4)" // Shadow color for elevated elements
    };

    const [theme, setTheme] = useState(githubDarkTheme)

    return (
        <appTheme.Provider value={{theme, setTheme}}>
            {children}
        </appTheme.Provider>
    )
}
