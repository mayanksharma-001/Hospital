import {
  AMBULANCE_NUMBER,
  BLOOD_BANK_PHONE,
  HOSPITAL_ADDRESS,
  HOSPITAL_PHONE,
} from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'

export default function EmergencyBanner() {
  const { t } = useLanguage()

  return (
    <section className="bg-red-50 px-4 py-12 lg:px-6">
      <div className="mx-auto max-w-7xl rounded-lg border border-red-200 bg-white p-6">
        <h2 className="text-2xl font-bold text-navy">{t.emergency.title}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          <Info label={t.emergency.emergencyNumber} value={HOSPITAL_PHONE} phone />
          <Info label={t.emergency.ambulance} value={AMBULANCE_NUMBER} phone />
          <Info label={t.emergency.reception} value={HOSPITAL_PHONE} phone />
          <Info label={t.emergency.bloodBank} value={BLOOD_BANK_PHONE} phone />
          <Info label={t.emergency.address} value={HOSPITAL_ADDRESS} />
        </div>
      </div>
    </section>
  )
}

function Info({ label, value, phone = false }) {
  return (
    <article>
      <p className="text-xs font-semibold uppercase tracking-wide text-red-700">{label}</p>
      {phone ? (
        <a href={`tel:${value}`} className="mt-1 inline-block text-sm font-semibold text-navy">
          {value}
        </a>
      ) : (
        <p className="mt-1 text-sm font-semibold text-navy">{value}</p>
      )}
    </article>
  )
}
