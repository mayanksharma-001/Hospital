import { FaHospitalAlt } from 'react-icons/fa'
import gallery from '../data/gallery.json'
import facilities from '../data/facilities.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../hooks/useLanguage'

export default function FacilitiesPage() {
  const { t } = useLanguage()
  useDocumentTitle('Facilities')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.pages.facilities.title}</h1>
      <p className="mt-3 text-slate-700">{t.pages.facilities.subtitle}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {facilities.map((facility) => (
          <article key={facility} className="rounded-lg border border-slate-200 bg-white p-5">
            <FaHospitalAlt className="text-xl text-govBlue" />
            <h2 className="mt-3 text-lg font-semibold text-navy">{facility}</h2>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {gallery.slice(0, 3).map((item) => (
          <img
            key={item.title}
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="h-56 w-full rounded-lg object-cover"
          />
        ))}
      </div>
    </section>
  )
}
