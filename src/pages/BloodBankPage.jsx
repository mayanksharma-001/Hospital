import { BLOOD_BANK_PHONE } from '../config/siteConfig'
import BloodBankCard from '../components/BloodBankCard'
import bloodBank from '../data/bloodBank.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../hooks/useLanguage'

export default function BloodBankPage() {
  const { t } = useLanguage()
  useDocumentTitle('Blood Bank')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.pages.bloodBank.title}</h1>
      <p className="mt-3 text-slate-700">{t.pages.bloodBank.subtitle}</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {bloodBank.map((item) => (
          <BloodBankCard key={item.group} item={item} />
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-cream p-5">
        <h2 className="text-xl font-semibold text-navy">{t.pages.bloodBank.donationTitle}</h2>
        <p className="mt-2 text-slate-700">
          {t.pages.bloodBank.donationContact}:{' '}
          <a href={`tel:${BLOOD_BANK_PHONE}`} className="font-semibold text-govBlue">
            {BLOOD_BANK_PHONE}
          </a>
        </p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
          {t.pages.bloodBank.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
