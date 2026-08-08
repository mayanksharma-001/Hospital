export default function BedCard({ bed }) {
  const available = bed.total - bed.occupied
  const percentage = Math.max(0, Math.round((available / bed.total) * 100))

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5">
      <h3 className="text-lg font-semibold text-navy">{bed.ward}</h3>
      <p className="mt-2 text-sm text-slate-700">
        {available} / {bed.total} Available
      </p>
      <div className="mt-3 h-2 rounded-full bg-slate-200">
        <div className="h-2 rounded-full bg-govBlue" style={{ width: `${percentage}%` }} />
      </div>
      <div className="mt-3 text-xs text-slate-600">
        Occupied: {bed.occupied} | Total: {bed.total}
      </div>
    </article>
  )
}
