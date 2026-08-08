import { useMemo, useState } from 'react'
import { translations } from '../data/translations'
import { LanguageContext } from './languageContextBase'

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')

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
