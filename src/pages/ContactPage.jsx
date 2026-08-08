import {
  AMBULANCE_NUMBER,
  BLOOD_BANK_PHONE,
  HOSPITAL_ADDRESS,
  HOSPITAL_EMAIL,
  HOSPITAL_NAME,
  HOSPITAL_PHONE,
} from '../config/siteConfig'
import { useLanguage } from '../context/LanguageContext'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { openHospitalDirections, openHospitalLocation } from '../utils/navigation'
import { useState } from 'react'

export default function ContactPage() {
  useDocumentTitle('Contact')
  const [error, setError] = useState(false)
  const { t } = useLanguage()

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.contact}</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <article className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-navy">{HOSPITAL_NAME}</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>Address: {HOSPITAL_ADDRESS}</li>
            <li>
              Phone: <a href={`tel:${HOSPITAL_PHONE}`} className="font-semibold text-govBlue">{HOSPITAL_PHONE}</a>
            </li>
            <li>
              Emergency: <a href={`tel:${HOSPITAL_PHONE}`} className="font-semibold text-govBlue">{HOSPITAL_PHONE}</a>
            </li>
            <li>
              Ambulance: <a href={`tel:${AMBULANCE_NUMBER}`} className="font-semibold text-govBlue">{AMBULANCE_NUMBER}</a>
            </li>
            <li>
              Blood Bank: <a href={`tel:${BLOOD_BANK_PHONE}`} className="font-semibold text-govBlue">{BLOOD_BANK_PHONE}</a>
            </li>
            <li>Email: {HOSPITAL_EMAIL}</li>
            <li>Working Hours: OPD 9:00 AM - 2:00 PM | Emergency 24×7</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openHospitalDirections(() => setError(true))}
              className="rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white"
            >
              Get Directions
            </button>
            <button
              type="button"
              onClick={openHospitalLocation}
              className="rounded-md border border-slate-300 px-4 py-2 text-sm"
            >
              Open Hospital Location
            </button>
          </div>

          {error ? <p className="mt-3 text-sm text-amber-700">{t.hero.locationError}</p> : null}
        </article>

        <article className="overflow-hidden rounded-lg border border-slate-200 bg-white p-2">
          <iframe
            title="District Government Hospital location"
            src="https://www.google.com/maps?q=28.2898,74.9594&z=15&output=embed"
            className="h-[360px] w-full rounded-md border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </article>
      </div>
    </section>
  )
}
