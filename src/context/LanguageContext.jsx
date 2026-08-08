import { useEffect, useMemo, useState } from 'react'
import { translations } from '../data/translations'
import { LanguageContext } from './languageContextBase'

const LANGUAGE_STORAGE_KEY = 'hospital-site-language'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') {
      return 'en'
    }

    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
    return savedLanguage && translations[savedLanguage] ? savedLanguage : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
  }, [language])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
