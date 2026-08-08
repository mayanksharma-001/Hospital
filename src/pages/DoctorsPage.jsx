import { useMemo, useState } from 'react'
import DoctorCard from '../components/DoctorCard'
import doctors from '../data/doctors.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function DoctorsPage() {
  useDocumentTitle('Doctors Directory')
  const [query, setQuery] = useState('')
  const [department, setDepartment] = useState('all')

  const departments = useMemo(
    () => ['all', ...new Set(doctors.map((doctor) => doctor.department))],
    [],
  )

  const filtered = useMemo(
    () =>
      doctors.filter((doctor) => {
        const matchesQuery = doctor.name.toLowerCase().includes(query.trim().toLowerCase())
        const matchesDepartment = department === 'all' || doctor.department === department
        return matchesQuery && matchesDepartment
      }),
    [department, query],
  )

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">Doctors Directory</h1>
      <p className="mt-3 text-slate-700">Find doctors by name and department with OPD schedule details.</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search doctor"
          className="rounded-md border border-slate-300 px-4 py-2 outline-none focus:border-govBlue"
        />
        <select
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          className="rounded-md border border-slate-300 px-4 py-2 outline-none focus:border-govBlue"
        >
          {departments.map((item) => (
            <option key={item} value={item}>
              {item === 'all' ? 'All Departments' : item}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((doctor) => (
          <DoctorCard key={doctor.name} doctor={doctor} />
        ))}
      </div>
    </section>
  )
}
