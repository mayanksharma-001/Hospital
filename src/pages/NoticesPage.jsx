import notices from '../data/notices.json'
import { useLanguage } from '../hooks/useLanguage'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function NoticesPage() {
  const { t } = useLanguage()
  useDocumentTitle('Notices')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.notices.pageTitle}</h1>
      <div className="mt-8 space-y-4">
        {notices.map((notice) => (
          <article key={notice.title} className="rounded-lg border border-slate-200 bg-white p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-terracotta">{notice.category}</p>
              <p className="text-sm text-slate-600">{notice.date}</p>
            </div>
            <h2 className="mt-2 text-xl font-semibold text-navy">{notice.title}</h2>
            <p className="mt-2 text-sm text-slate-700">{notice.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
