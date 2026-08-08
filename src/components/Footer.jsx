import { Link } from 'react-router-dom'
import {
  AMBULANCE_NUMBER,
  BLOOD_BANK_PHONE,
  HOSPITAL_ADDRESS,
  HOSPITAL_NAME,
  HOSPITAL_PHONE,
} from '../config/siteConfig'
import { useLanguage } from '../context/LanguageContext'

const quickLinks = [
  ['/', 'Home'],
  ['/about', 'About'],
  ['/departments', 'Departments'],
  ['/doctors', 'Doctors'],
  ['/facilities', 'Facilities'],
  ['/blood-bank', 'Blood Bank'],
  ['/beds', 'Bed Availability'],
  ['/opd-schedule', 'OPD'],
  ['/contact', 'Contact'],
]

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-navy px-4 py-12 text-slate-200 lg:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-govBlue">DH</div>
            <div>
              <p className="font-semibold">{HOSPITAL_NAME}</p>
              <p className="text-sm text-slate-400">Churu, Rajasthan</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Quick Links</h3>
          <div className="grid gap-2 text-sm">
            {quickLinks.map(([path, label]) => (
              <Link key={path} to={path} className="hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Important</h3>
          <ul className="space-y-2 text-sm">
            <li>Emergency: {HOSPITAL_PHONE}</li>
            <li>Ambulance: {AMBULANCE_NUMBER}</li>
            <li>Blood Bank: {BLOOD_BANK_PHONE}</li>
            <li>{t.onlineServices.title}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</h3>
          <p className="text-sm leading-relaxed">{HOSPITAL_ADDRESS}</p>
          <p className="mt-3 text-sm">Language: English | हिन्दी</p>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-slate-700 pt-5 text-sm text-slate-400">
        <p>© District Government Hospital, Churu, Rajasthan</p>
        <p className="mt-2">{t.footerDisclaimer}</p>
      </div>
    </footer>
  )
}
