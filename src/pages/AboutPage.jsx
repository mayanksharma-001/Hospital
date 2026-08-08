import { HERO_IMAGES } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function AboutPage() {
  const { t } = useLanguage()
  useDocumentTitle('About Hospital')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.pages.about.title}</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <img
          src={HERO_IMAGES[1]}
          alt={t.navbar.hospitalName}
          className="h-full min-h-[320px] w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="space-y-4 text-slate-700">
          <p>{t.pages.about.introOne}</p>
          <p>{t.pages.about.introTwo}</p>
          <p>{t.pages.about.introThree}</p>
          <p>{t.pages.about.introFour}</p>
        </div>
      </div>
    </section>
  )
}
