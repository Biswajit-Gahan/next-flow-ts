"use client";

import React, {createContext, useContext, useReducer} from "react";
import CONFIG from "@/utils/configurations/config";
import HELPERS from "@/utils/helpers/helpers";

type ThemeState = {
    darkMode?: boolean;
}

type ThemeContextProps = {
    children: React.ReactNode;
}

type ActionType = {
    payload: ThemeState;
}

const initialThemeState: ThemeState = {
    darkMode: HELPERS.CLIENT_COOKIES.getCookie(CONFIG.COOKIES_CONFIG.KEY_THEME) === CONFIG.THEMES_CONFIG.DARK,
}

const ThemeContext = createContext<{themeState:ThemeState, setThemeState: React.Dispatch<ActionType>}>(
    {
        themeState:initialThemeState, setThemeState: () => {}
    }
);

function themeReducer(state: ThemeState, {payload}: ActionType) {
    return {...state, ...payload};
}

export default function ThemeContextProvider({children}: ThemeContextProps) {
    const [themeState, setThemeState] = useReducer(themeReducer, initialThemeState);

    return <ThemeContext.Provider value={{themeState, setThemeState}}>
        {children}
    </ThemeContext.Provider>
}

export function useThemeContext() {
    const context = useContext(ThemeContext);

    if(!context) throw new Error(CONFIG.MESSAGE_CONFIG.INVALID_CONTEXT("ThemeContext"));

    function setThemeState(state: ThemeState) {
        HELPERS.CLIENT_COOKIES.setCookie(
            CONFIG.COOKIES_CONFIG.KEY_THEME,
            state.darkMode ? CONFIG.THEMES_CONFIG.DARK : CONFIG.THEMES_CONFIG.LIGHT,
            HELPERS.CLIENT_COOKIES.setExpires(24)
        );

        context.setThemeState({
            payload: state
        })
    }

    return {themeState: context.themeState, setThemeState}
}