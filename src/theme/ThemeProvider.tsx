import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./ThemeContext";
import {FC, ReactNode, useMemo, useState} from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

interface ThemeProviderProps {
    children: ReactNode;
}
export const ThemeProvider: FC<ThemeProviderProps>  = ({children}) => {
    const [theme, setTheme] = useState<Theme>(
        defaultTheme || Theme.LIGHT
    );

    const defaultPropsContext = useMemo(()=> ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultPropsContext}>
            {children}
        </ThemeContext.Provider>
    )
}