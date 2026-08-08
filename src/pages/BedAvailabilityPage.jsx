import BedCard from '../components/BedCard'
import beds from '../data/beds.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function BedAvailabilityPage() {
  useDocumentTitle('Bed Availability')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Bed Availability</h1>
      <p className="mt-3 text-slate-700">
        Availability shown on this website may not reflect real-time occupancy. Please contact the
        hospital for confirmation.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {beds.map((bed) => (
          <BedCard key={bed.ward} bed={bed} />
        ))}
      </div>
    </section>
  )
}
