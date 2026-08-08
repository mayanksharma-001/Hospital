import {
  FaCalendarCheck,
  FaBriefcaseMedical,
  FaUserMd,
  FaTint,
  FaBed,
  FaAmbulance,
} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { APPOINTMENT_URL } from '../config/siteConfig'
import { openAppointment } from '../utils/navigation'
import SectionHeader from './SectionHeader'
import AnimatedSection from './AnimatedSection'

const services = [
  {
    title: 'Book Appointment',
    description: 'Access official hospital online appointment services.',
    icon: FaCalendarCheck,
    action: () => openAppointment(APPOINTMENT_URL),
  },
  {
    title: 'Find a Doctor',
    description: 'Search specialists by department and OPD schedule.',
    icon: FaUserMd,
    to: '/doctors',
  },
  {
    title: 'OPD Schedule',
    description: 'Check OPD days and timings before visiting.',
    icon: FaBriefcaseMedical,
    to: '/opd-schedule',
  },
  {
    title: 'Blood Bank',
    description: 'View blood group stock information and contacts.',
    icon: FaTint,
    to: '/blood-bank',
  },
  {
    title: 'Bed Availability',
    description: 'Ward-wise occupancy details for patient guidance.',
    icon: FaBed,
    to: '/beds',
  },
  {
    title: 'Emergency Services',
    description: 'Get emergency and ambulance contacts quickly.',
    icon: FaAmbulance,
    to: '/contact',
  },
]

export default function QuickServices() {
  return (
    <AnimatedSection className="bg-cream px-4 py-14 lg:px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Quick Services" subtitle="Access essential hospital information in one click." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            const cardClass =
              'rounded-lg border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md'

            if (service.to) {
              return (
                <Link key={service.title} to={service.to} className={cardClass}>
                  <Icon className="text-2xl text-govBlue" />
                  <h3 className="mt-3 text-lg font-semibold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm text-slate-700">{service.description}</p>
                </Link>
              )
            }

            return (
              <button
                type="button"
                key={service.title}
                onClick={service.action}
                className={`${cardClass} text-left`}
              >
                <Icon className="text-2xl text-govBlue" />
                <h3 className="mt-3 text-lg font-semibold text-navy">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-700">{service.description}</p>
              </button>
            )
          })}
        </div>
      </div>
    </AnimatedSection>
  )
}
