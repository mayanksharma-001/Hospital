import { useMemo, useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import gallery from '../data/gallery.json'
import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { useLanguage } from '../hooks/useLanguage'

const ALL_CATEGORY = '__all__'

export default function GalleryPage() {
  const { t } = useLanguage()
  useDocumentTitle('Gallery')
  const [selected, setSelected] = useState(null)
  const categories = useMemo(
    () => [
      { value: ALL_CATEGORY, label: t.common.all },
      ...Array.from(new Set(gallery.map((item) => item.category)), (category) => ({
        value: category,
        label: category,
      })),
    ],
    [t.common.all],
  )
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY)

  const filtered =
    activeCategory === ALL_CATEGORY ? gallery : gallery.filter((item) => item.category === activeCategory)

  return (
    <section className="mx-auto mt-[74px] max-w-7xl px-4 py-14 lg:px-6">
      <h1 className="text-3xl font-bold text-navy md:text-4xl">{t.pages.gallery.title}</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            type="button"
            key={category.value}
            onClick={() => setActiveCategory(category.value)}
            className={`rounded-full px-4 py-1.5 text-sm ${
              activeCategory === category.value ? 'bg-govBlue text-white' : 'bg-slate-100 text-slate-700'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <button
            type="button"
            key={item.title}
            onClick={() => setSelected(item)}
            className="overflow-hidden rounded-lg"
          >
            <img src={item.image} alt={item.title} loading="lazy" className="h-56 w-full object-cover" />
          </button>
        ))}
      </div>

      {selected ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4">
          <div className="relative max-w-4xl rounded-lg bg-white p-4">
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute right-4 top-4 rounded-full bg-slate-100 p-2"
              aria-label={t.common.closeImage}
            >
              <FaTimes />
            </button>
            <img src={selected.image} alt={selected.title} className="max-h-[80vh] w-full rounded-md object-cover" />
            <p className="mt-3 text-sm text-slate-700">{selected.title}</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}
