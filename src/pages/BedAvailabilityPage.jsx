import BedCard from '../components/BedCard'
import beds from '../data/beds.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../hooks/useLanguage'

export default function BedAvailabilityPage() {
  const { t } = useLanguage()
  useDocumentTitle('Bed Availability')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.pages.beds.title}</h1>
      <p className="mt-3 text-slate-700">{t.pages.beds.subtitle}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {beds.map((bed) => (
          <BedCard key={bed.ward} bed={bed} />
        ))}
      </div>
    </section>
  )
}
