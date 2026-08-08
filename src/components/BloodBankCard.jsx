export default function BloodBankCard({ item }) {
  const available = item.units > 0

  return (
    <article className="rounded-lg border border-slate-200 bg-white p-5 text-center">
      <p className="text-2xl font-bold text-navy">{item.group}</p>
      <p className="mt-2 text-lg font-semibold text-govBlue">{item.units} Units</p>
      <p className={`mt-1 text-sm font-medium ${available ? 'text-emerald-700' : 'text-red-700'}`}>
        {available ? 'Available' : 'Low Availability'}
      </p>
      <p className="mt-2 text-xs text-slate-600">Last updated: {item.lastUpdated}</p>
    </article>
  )
}
