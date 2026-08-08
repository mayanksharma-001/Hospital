import { FaHospitalSymbol } from 'react-icons/fa'
import { useLanguage } from '../hooks/useLanguage'

export default function DepartmentCard({ department }) {
  const { t } = useLanguage()

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <FaHospitalSymbol className="text-xl text-govBlue" />
      <h3 className="mt-3 text-lg font-semibold text-navy">{department.name}</h3>
      <p className="mt-2 text-sm text-slate-700">{department.description}</p>
      <p className="mt-2 text-xs font-medium text-terracotta">
        {t.cards.opdPrefix} {department.timing}
      </p>
    </article>
  )
}
