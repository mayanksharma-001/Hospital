import { HERO_IMAGES } from '../config/siteConfig'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function AboutPage() {
  useDocumentTitle('About Hospital')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">About District Government Hospital</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
        <img
          src={HERO_IMAGES[1]}
          alt="District Government Hospital campus"
          className="h-full min-h-[320px] w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="space-y-4 text-slate-700">
          <p>
            District Government Hospital, Churu is a public healthcare institution dedicated to
            equitable, accessible and affordable treatment for all citizens across urban and rural
            areas of the district.
          </p>
          <p>
            The hospital provides outpatient services, emergency support, inpatient wards,
            diagnostics, blood bank assistance, maternal and child care, and referral support for
            specialized treatment.
          </p>
          <p>
            The mission of the hospital is to strengthen trust in public healthcare through quality
            clinical services, patient-focused care and timely emergency response.
          </p>
          <p>
            The hospital continues to support district-level public health programs, awareness
            campaigns and preventive care initiatives for community well-being.
          </p>
        </div>
      </div>
    </section>
  )
}
