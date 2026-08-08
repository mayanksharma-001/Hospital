import patientInfo from '../data/patientInfo.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function PatientInfoPage() {
  useDocumentTitle('Patient Information')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Patient Information</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {patientInfo.map((section) => (
          <article key={section.title} className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-semibold text-navy">{section.title}</h2>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-slate-700">
              {section.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
