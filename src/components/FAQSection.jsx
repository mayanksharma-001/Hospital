import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'
import faqs from '../data/faq.json'
import { useLanguage } from '../context/LanguageContext'

export default function FAQSection() {
  const [open, setOpen] = useState(0)
  const { t } = useLanguage()

  return (
    <section className="px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-center text-2xl font-bold text-navy md:text-3xl">{t.faq}</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((faq, index) => (
            <article key={faq.question} className="rounded-lg border border-slate-200 bg-white">
              <button
                type="button"
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between p-4 text-left"
              >
                <span className="font-semibold text-navy">{faq.question}</span>
                <FaChevronDown
                  className={`text-sm text-slate-500 transition ${open === index ? 'rotate-180' : ''}`}
                />
              </button>
              {open === index ? <p className="px-4 pb-4 text-sm text-slate-700">{faq.answer}</p> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
