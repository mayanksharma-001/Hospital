import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
import { APPOINTMENT_URL } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'
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
  ['/gallery', 'gallery'],
  ['/contact', 'contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex h-[74px] w-full max-w-7xl items-center gap-4 px-4 lg:px-6" aria-label="Main navigation">
        <NavLink to="/" className="flex min-w-0 shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-govBlue text-white">DH</div>
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-navy">{t.navbar.hospitalName}</p>
            <p className="truncate text-xs text-slate-600">{t.navbar.location}</p>
          </div>
        </NavLink>

        <div className="hidden flex-1 items-center justify-center gap-5 xl:flex">
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-md px-2 py-1 text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-50 text-govBlue' : 'text-slate-700 hover:text-govBlue'
                }`
              }
            >
              {t.navbar[label]}
            </NavLink>
          ))}
        </div>

        <div className="ml-auto hidden items-center gap-2 xl:flex">
          <button
            type="button"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700 hover:border-slate-400"
          >
            {t.navbar.languageToggle}
          </button>
          <button
            type="button"
            onClick={() => openAppointment(APPOINTMENT_URL)}
            className="rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
          >
            {t.navbar.appointment}
          </button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="ml-auto rounded-md border border-slate-300 p-2 xl:hidden"
          aria-label={open ? t.navbar.closeMenu : t.navbar.openMenu}
          aria-expanded={open}
        >
          {open ? <HiX className="text-xl" /> : <HiMenu className="text-xl" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-slate-200 bg-white px-4 pb-4 xl:hidden">
          <div className="grid gap-1 py-3">
            {links.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-md px-3 py-2 text-sm font-medium ${
                    isActive ? 'bg-blue-50 text-govBlue' : 'text-slate-700 hover:bg-slate-50'
                  }`
                }
              >
                {t.navbar[label]}
              </NavLink>
            ))}
          </div>
          <div className="grid gap-2 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
              className="rounded-md border border-slate-300 px-3 py-2 text-sm font-medium text-slate-700"
            >
              {t.navbar.languageToggle}
            </button>
            <button
              type="button"
              onClick={() => openAppointment(APPOINTMENT_URL)}
              className="rounded-md bg-govBlue px-4 py-2 text-sm font-semibold text-white"
            >
              {t.navbar.appointment}
            </button>
          </div>
        </div>
      ) : null}
    </header>
  )
}
