'use client'
import { createContext, useContext, useEffect, useState } from 'react'
// Crée un contexte pour stocker le thème.
const ThemeContext = createContext();
// Définit un composant React appelé ThemeProvider pour fournir le thème à ses enfants.
export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        setTheme(localStorage.getItem('theme') || 'light');
    }, [setTheme]);
    // Rend le contexte ThemeContext disponible pour ses enfants avec la valeur [theme, setTheme].
    return <ThemeContext.Provider value={[theme, setTheme]}>
        {/* Rend les composants enfants du ThemeProvider. */}
        {children}
    </ThemeContext.Provider>
}
// Définit un hook personnalisé useTheme pour utiliser le thème actuel.
export function useTheme() {
    // Utilise le hook useContext pour accéder au thème actuel et à la fonction pour le modifier.
    const [theme, setTheme] = useContext(ThemeContext);
    const setThemeWithStorage = (theme) => {
        localStorage.setItem('theme', theme);
        setTheme(theme);
    }
    // Retourne le thème actuel et la fonction pour le modifier. 
    return [theme, setThemeWithStorage];
}
