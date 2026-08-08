import { APPOINTMENT_URL } from '../config/siteConfig'
import doctors from '../data/doctors.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { openAppointment } from '../utils/navigation'

export default function OPDSchedulePage() {
  useDocumentTitle('OPD Schedule')

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">OPD Schedule</h1>
      <p className="mt-3 rounded-md border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        OPD timings may change. Please verify the schedule before visiting the hospital.
      </p>

      <div className="mt-6 overflow-x-auto rounded-lg border border-slate-200">
        <table className="min-w-full bg-white text-left text-sm">
          <thead className="bg-slate-100 text-navy">
            <tr>
              <th className="px-4 py-3">Department</th>
              <th className="px-4 py-3">Doctor</th>
              <th className="px-4 py-3">Days</th>
              <th className="px-4 py-3">Morning Timing</th>
              <th className="px-4 py-3">Afternoon Timing</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => {
              const [morningTiming, afternoonTiming = '-'] = doctor.opdTiming.split(' - ')

              return (
                <tr key={doctor.name} className="border-t border-slate-200">
                  <td className="px-4 py-3">{doctor.department}</td>
                  <td className="px-4 py-3">{doctor.name}</td>
                  <td className="px-4 py-3">{doctor.days}</td>
                  <td className="px-4 py-3">{morningTiming}</td>
                  <td className="px-4 py-3">{afternoonTiming}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <button
        type="button"
        onClick={() => openAppointment(APPOINTMENT_URL)}
        className="mt-6 rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white"
      >
        Book Appointment
      </button>
    </section>
  )
}
