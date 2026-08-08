import { useMemo, useState } from 'react'
import DepartmentCard from '../components/DepartmentCard'
import departments from '../data/departments.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../hooks/useLanguage'

export default function DepartmentsPage() {
  const { t } = useLanguage()
  useDocumentTitle('Departments')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () => departments.filter((department) => department.name.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  )

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.pages.departments.title}</h1>
      <p className="mt-3 text-slate-700">{t.pages.departments.subtitle}</p>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={t.common.searchDepartment}
        className="mt-6 w-full rounded-md border border-slate-300 px-4 py-2 outline-none focus:border-govBlue"
      />
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((department) => (
          <DepartmentCard key={department.name} department={department} />
        ))}
      </div>
    </section>
  )
}
