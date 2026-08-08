import { Link } from 'react-router-dom'
import notices from '../data/notices.json'
import { useLanguage } from '../hooks/useLanguage'
import SectionHeader from './SectionHeader'

export default function NoticesPreview() {
  const { t } = useLanguage()

  return (
    <section className="px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={t.notices.previewTitle} subtitle={t.notices.previewSubtitle} />
        <div className="grid gap-4 md:grid-cols-2">
          {notices.slice(0, 4).map((notice) => (
            <article key={notice.title} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{notice.category}</p>
              <h3 className="mt-2 text-lg font-semibold text-navy">{notice.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{notice.date}</p>
              <p className="mt-3 text-sm text-slate-700">{notice.description}</p>
            </article>
          ))}
        </div>
        <Link to="/notices" className="mt-6 inline-flex text-sm font-semibold text-govBlue">
          {t.notices.viewAll}
        </Link>
      </div>
    </section>
  )
}
