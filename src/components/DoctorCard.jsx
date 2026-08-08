export default function DoctorCard({ doctor }) {
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
      <p className="mt-2 text-sm text-slate-700">Department: {doctor.department}</p>
      <p className="text-sm text-slate-700">Qualification: {doctor.qualification}</p>
      <p className="mt-2 text-sm font-medium text-terracotta">OPD Schedule: {doctor.opdTiming}</p>
      <p className="text-sm text-slate-700">Days: {doctor.days}</p>
    </article>
  )
}
