import {
  FaAmbulance,
  FaBed,
  FaBriefcaseMedical,
  FaCalendarCheck,
  FaTint,
  FaUserMd,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { APPOINTMENT_URL } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'
import { openAppointment } from '../utils/navigation'
import AnimatedSection from './AnimatedSection'
import SectionHeader from './SectionHeader'

export default function QuickServices() {
  const { t } = useLanguage()

  const services = [
    {
      key: 'appointment',
      icon: FaCalendarCheck,
      action: () => openAppointment(APPOINTMENT_URL),
    },
    {
      key: 'doctor',
      icon: FaUserMd,
      to: '/doctors',
    },
    {
      key: 'opd',
      icon: FaBriefcaseMedical,
      to: '/opd-schedule',
    },
    {
      key: 'bloodBank',
      icon: FaTint,
      to: '/blood-bank',
    },
    {
      key: 'beds',
      icon: FaBed,
      to: '/beds',
    },
    {
      key: 'emergency',
      icon: FaAmbulance,
      to: '/contact',
    },
  ]

  return (
    <AnimatedSection className="bg-cream px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title={t.quickServices.title} subtitle={t.quickServices.subtitle} />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const cardClass =
              'rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md'
            const content = t.quickServices.cards[service.key]

            if (service.to) {
              return (
                <Link key={service.key} to={service.to} className={cardClass}>
                  <Icon className="text-2xl text-govBlue" />
                  <h3 className="mt-3 text-lg font-semibold text-navy">{content.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{content.description}</p>
                </Link>
              )
            }

            return (
              <button
                type="button"
                key={service.key}
                onClick={service.action}
                className={`${cardClass} text-left`}
              >
                <Icon className="text-2xl text-govBlue" />
                <h3 className="mt-3 text-lg font-semibold text-navy">{content.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{content.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
