import { Link } from 'react-router-dom'
import { HERO_IMAGES } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'
import AnimatedSection from './AnimatedSection'

export default function AboutHospital() {
  const { t } = useLanguage()

  const stats = [
    { label: t.aboutHospital.stats.totalBeds, value: '270+' },
    { label: t.aboutHospital.stats.departments, value: '16+' },
    { label: t.aboutHospital.stats.doctors, value: '45+' },
    { label: t.aboutHospital.stats.emergency, value: t.aboutHospital.stats.available },
  ]

  return (
    <AnimatedSection className="px-4 py-14 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
        <img
          src={HERO_IMAGES[0]}
          alt={t.navbar.hospitalName}
          loading="lazy"
          className="h-full min-h-[320px] w-full rounded-lg object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-navy">{t.aboutHospital.title}</h2>
          <p className="mt-4 text-slate-700">{t.aboutHospital.paragraphOne}</p>
          <p className="mt-3 text-slate-700">{t.aboutHospital.paragraphTwo}</p>
          <Link to="/about" className="mt-6 inline-flex rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white">
            {t.aboutHospital.knowMore}
          </Link>
        </div>
      </div>

      <div className="mx-auto mt-8 grid max-w-7xl gap-4 md:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="rounded-lg border border-slate-200 bg-cream p-5 text-center">
            <p className="text-2xl font-bold text-navy">{stat.value}</p>
            <p className="mt-1 text-sm text-slate-700">{stat.label}</p>
          </article>
        ))}
      </div>
    </AnimatedSection>
  )
}
