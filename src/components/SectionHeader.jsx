export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="mb-8 text-center lg:mb-10">
      <h2 className="text-2xl font-bold text-navy md:text-3xl">{title}</h2>
      {subtitle ? <p className="mx-auto mt-3 max-w-3xl text-slate-700">{subtitle}</p> : null}
    </div>
  )
}
