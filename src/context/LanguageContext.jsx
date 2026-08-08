import { createContext, useContext, useMemo, useState } from 'react'

const translations = {
  en: {
    languageLabel: 'English',
    navbar: {
      home: 'Home',
      about: 'About Hospital',
      departments: 'Departments',
      doctors: 'Doctors',
      facilities: 'Facilities',
      bloodBank: 'Blood Bank',
      beds: 'Bed Availability',
      opd: 'OPD Schedule',
      notices: 'Notices',
      gallery: 'Gallery',
      contact: 'Contact',
      appointment: 'Book Appointment',
    },
    hero: {
      label: 'Government Healthcare Services',
      title: 'District Government Hospital',
      subtitle: 'Quality Healthcare Services for Every Citizen',
      location: 'Churu, Rajasthan',
      appointment: 'BOOK APPOINTMENT',
      directions: 'GO TO HOSPITAL',
      locationError:
        'Live location access is needed for turn-by-turn directions. Opening hospital location directly.',
      fallback: 'Open Hospital Location',
      quickInfo: ['24×7 Emergency', 'Ambulance Service', 'Blood Bank', 'Pharmacy', 'Diagnostic Services'],
    },
    onlineServices: {
      title: 'Access Online Hospital Services',
      text: 'For appointments, registration, reports and other online services, please use the official hospital service portal.',
      cta: 'Go to Hospital Services ↗',
    },
    emergency: {
      title: 'Need Emergency Assistance?',
    },
    faq: 'Frequently Asked Questions',
    contact: 'Contact & Location',
    footerDisclaimer:
      'Information provided on this website is for public awareness and may be subject to change.',
  },
  hi: {
    languageLabel: 'हिन्दी',
    navbar: {
      home: 'मुख्य पृष्ठ',
      about: 'अस्पताल परिचय',
      departments: 'विभाग',
      doctors: 'डॉक्टर',
      facilities: 'सुविधाएँ',
      bloodBank: 'ब्लड बैंक',
      beds: 'बेड उपलब्धता',
      opd: 'ओपीडी समय-सारणी',
      notices: 'सूचनाएँ',
      gallery: 'गैलरी',
      contact: 'संपर्क',
      appointment: 'अपॉइंटमेंट बुक करें',
    },
    hero: {
      label: 'सरकारी स्वास्थ्य सेवाएँ',
      title: 'जिला सरकारी अस्पताल',
      subtitle: 'हर नागरिक के लिए गुणवत्तापूर्ण स्वास्थ्य सेवाएँ',
      location: 'चूरू, राजस्थान',
      appointment: 'अपॉइंटमेंट बुक करें',
      directions: 'अस्पताल जाएँ',
      locationError:
        'लाइव दिशा-निर्देश के लिए लोकेशन अनुमति आवश्यक है। अस्पताल का स्थान खोला जा रहा है।',
      fallback: 'अस्पताल स्थान खोलें',
      quickInfo: ['24×7 आपातकाल', 'एंबुलेंस सेवा', 'ब्लड बैंक', 'फार्मेसी', 'जांच सेवाएँ'],
    },
    onlineServices: {
      title: 'ऑनलाइन अस्पताल सेवाएँ प्राप्त करें',
      text: 'अपॉइंटमेंट, पंजीकरण, रिपोर्ट और अन्य ऑनलाइन सेवाओं के लिए आधिकारिक अस्पताल सेवा पोर्टल का उपयोग करें।',
      cta: 'अस्पताल सेवाओं पर जाएँ ↗',
    },
    emergency: {
      title: 'आपातकालीन सहायता चाहिए?',
    },
    faq: 'अक्सर पूछे जाने वाले प्रश्न',
    contact: 'संपर्क एवं स्थान',
    footerDisclaimer:
      'इस वेबसाइट पर दी गई जानकारी जन-जागरूकता हेतु है और समय-समय पर बदल सकती है।',
  },
}

const LanguageContext = createContext(null)

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

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider')
  }

  return context
}
