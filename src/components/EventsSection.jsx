import events from '../data/events.json'
import { useLanguage } from '../hooks/useLanguage'
import SectionHeader from './SectionHeader'

export default function EventsSection() {
  const { t } = useLanguage()

  return (
    <section className="bg-cream px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={t.events.title} subtitle={t.events.subtitle} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {events.map((event) => (
            <article key={event.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-navy">{event.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{event.date}</p>
              <p className="text-sm text-slate-600">{event.time}</p>
              <p className="text-sm text-slate-600">{event.location}</p>
              <p className="mt-3 text-sm text-slate-700">{event.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
