'use client'
import { createContext, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'
import englishData from '@/i18n/en.json' // Importation des données de traduction anglaises
import frenchData from '@/i18n/fr.json' // Importation des données de traduction françaises
// Création d'un objet contenant les données de traduction pour chaque langue supportée
const translations = {
    en: englishData,
    fr: frenchData
}
// Création du contexte de localisation
const LocaleContext = createContext()
// Component pour fournir la localisation à l'application
export function LocaleProvider({ children }) {
    // State pour gérer la langue sélectionnée
    const [locale, setLocale] = useState('fr');
    // Rendu du contexte de localisation et du composant IntlProvider de react-intl
    return (
        <LocaleContext.Provider value={[locale, setLocale]}>
            {/*IntlProvider avec la langue actuelle et les traductions correspondantes */}
            <IntlProvider locale={locale} messages={translations[locale]}>
                {/* Rendu des enfants de LocaleProvider */}
                {children}
            </IntlProvider>
        </LocaleContext.Provider>
    );
}
// Hook personnalisé pour accéder à la localisation
export function useLocale() {
    const [locale, setLocale] = useContext(LocaleContext);
    return [locale, setLocale];
}