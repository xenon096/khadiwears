import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    // 1. Initialize State
    const [theme, setTheme] = useState(() => {
        // Check if we are in a browser environment
        if (typeof window !== "undefined") {
            // Check Local Storage first
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                return savedTheme;
            }
            // If no local storage, check System Preference
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark';
            }
        }
        // Default to light
        return 'light';
    });

    // 2. Effect Hook: Applies the class to the <HTML> tag whenever 'theme' changes
    useEffect(() => {
        const root = window.document.documentElement;

        // Remove the old class to avoid conflicts (e.g., class="light dark")
        root.classList.remove('light', 'dark');

        // Add the new class
        root.classList.add(theme);

        // Save to Local Storage so it remembers on refresh
        localStorage.setItem('theme', theme);
    }, [theme]);

    // 3. Toggle Function
    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// Custom Hook for easy access
export const useTheme = () => useContext(ThemeContext);