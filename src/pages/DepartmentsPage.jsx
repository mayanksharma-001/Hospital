import { useMemo, useState } from 'react'
import DepartmentCard from '../components/DepartmentCard'
import departments from '../data/departments.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function DepartmentsPage() {
  useDocumentTitle('Departments')
  const [query, setQuery] = useState('')

  const filtered = useMemo(
    () =>
      departments.filter((department) =>
        department.name.toLowerCase().includes(query.trim().toLowerCase()),
      ),
    [query],
  )

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Departments</h1>
      <p className="mt-3 text-slate-700">Explore available hospital departments and OPD timings.</p>
      <input
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search department"
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
