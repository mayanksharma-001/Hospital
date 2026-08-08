import { APPOINTMENT_URL } from '../config/siteConfig'
import { useLanguage } from '../context/LanguageContext'
import { openAppointment } from '../utils/navigation'

export default function OnlineServicesSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-govBlue px-4 py-14 text-white lg:px-6">
      <div className="mx-auto max-w-7xl rounded-lg bg-blue-900/40 p-8 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{t.onlineServices.title}</h2>
        <p className="mx-auto mt-3 max-w-3xl text-blue-100">{t.onlineServices.text}</p>
        <button
          type="button"
          onClick={() => openAppointment(APPOINTMENT_URL)}
          className="mt-6 rounded-md bg-white px-5 py-3 text-sm font-semibold text-govBlue"
        >
          {t.onlineServices.cta}
        </button>
      </div>
    </section>
  )
}
