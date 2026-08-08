import { Link } from 'react-router-dom'
import { HERO_IMAGES } from '../config/siteConfig'
import AnimatedSection from './AnimatedSection'

const stats = [
  { label: 'Total Beds', value: '270+' },
  { label: 'Departments', value: '16+' },
  { label: 'Doctors', value: '45+' },
  { label: '24×7 Emergency', value: 'Available' },
]

export default function AboutHospital() {
  return (
    <AnimatedSection className="px-4 py-14 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
        <img
          src={HERO_IMAGES[0]}
          alt="District Government Hospital building"
          loading="lazy"
          className="h-full min-h-[320px] w-full rounded-lg object-cover"
        />

        <div>
          <h2 className="text-3xl font-bold text-navy">About Hospital</h2>
          <p className="mt-4 text-slate-700">
            District Government Hospital, Churu serves as a key public healthcare institution for
            the district population. The hospital provides OPD services, emergency care, maternal
            and child care, diagnostics, blood bank support and inpatient facilities.
          </p>
          <p className="mt-3 text-slate-700">
            Located in Churu, Rajasthan, the hospital focuses on accessible, affordable and
            equitable healthcare delivery aligned with public health priorities.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-flex rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white"
          >
            Know More
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
