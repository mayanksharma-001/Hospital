import BloodBankCard from '../components/BloodBankCard'
import bloodBank from '../data/bloodBank.json'
import { BLOOD_BANK_PHONE } from '../config/siteConfig'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function BloodBankPage() {
  useDocumentTitle('Blood Bank')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Blood Bank</h1>
      <p className="mt-3 text-slate-700">
        Blood availability information is subject to change. Please contact the hospital for the
        latest status.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {bloodBank.map((item) => (
          <BloodBankCard key={item.group} item={item} />
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-slate-200 bg-cream p-5">
        <h2 className="text-xl font-semibold text-navy">Blood Donation Information</h2>
        <p className="mt-2 text-slate-700">Contact Blood Bank: <a href={`tel:${BLOOD_BANK_PHONE}`} className="font-semibold text-govBlue">{BLOOD_BANK_PHONE}</a></p>
        <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
          <li>Donor age generally should be between 18 and 60 years.</li>
          <li>Carry valid ID proof during donation.</li>
          <li>Stay hydrated and have a light meal before donation.</li>
        </ul>
      </div>
    </section>
  )
}
