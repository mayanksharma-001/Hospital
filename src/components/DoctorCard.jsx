import { useLanguage } from '../hooks/useLanguage'

export default function DoctorCard({ doctor }) {
  const { t } = useLanguage()

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-4">
      <img
        src={doctor.photo}
        alt={doctor.name}
        loading="lazy"
        className="h-52 w-full rounded-md object-cover"
      />
      <h3 className="mt-4 text-lg font-semibold text-navy">{doctor.name}</h3>
      <p className="text-sm text-govBlue">{doctor.designation}</p>
      <p className="mt-2 text-sm text-slate-700">
        {t.cards.doctorDepartment}: {doctor.department}
      </p>
      <p className="text-sm text-slate-700">
        {t.cards.doctorQualification}: {doctor.qualification}
      </p>
      <p className="mt-2 text-sm font-medium text-terracotta">
        {t.cards.doctorSchedule}: {doctor.opdTiming}
      </p>
      <p className="text-sm text-slate-700">
        {t.cards.doctorDays}: {doctor.days}
      </p>
    </article>
  )
}
