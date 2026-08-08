import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'
import { APPOINTMENT_URL } from '../config/siteConfig'
import { useLanguage } from '../context/LanguageContext'
import { openAppointment } from '../utils/navigation'

const links = [
  ['/', 'home'],
  ['/about', 'about'],
  ['/departments', 'departments'],
  ['/doctors', 'doctors'],
  ['/facilities', 'facilities'],
  ['/blood-bank', 'bloodBank'],
  ['/beds', 'beds'],
  ['/opd-schedule', 'opd'],
  ['/notices', 'notices'],
  ['/gallery', 'gallery'],
  ['/contact', 'contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-6" aria-label="Main navigation">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-govBlue text-white">DH</div>
          <div>
            <p className="text-sm font-semibold text-navy">District Government Hospital</p>
            <p className="text-xs text-slate-600">Churu, Rajasthan</p>
          </div>
        </div>

        <div className="hidden items-center gap-4 xl:flex">
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'font-semibold text-govBlue' : 'text-slate-700 hover:text-govBlue'}`
              }
            >
              {t.navbar[label]}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700"
          >
            English / हिन्दी
          </button>
          <button
            type="button"
            onClick={() => openAppointment(APPOINTMENT_URL)}
            className="rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800"
          >
            {t.navbar.appointment}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="rounded-md border border-slate-300 p-2 xl:hidden"
          aria-label="Toggle menu"
        >
          {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 xl:hidden">
          <div className="grid gap-3 py-4">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700"
              >
                {t.navbar[label]}
              </NavLink>
            ))}
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="flex-1 rounded-md border border-slate-300 py-2 text-sm"
            >
              English / हिन्दी
            </button>
            <button
              type="button"
              onClick={() => openAppointment(APPOINTMENT_URL)}
              className="flex-1 rounded-md bg-govBlue py-2 text-sm font-semibold text-white"
            >
              {t.navbar.appointment}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
