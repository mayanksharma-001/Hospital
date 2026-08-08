import { useEffect, useState } from 'react'
import { APPOINTMENT_URL, HERO_IMAGES } from '../config/siteConfig'
import { useLanguage } from '../hooks/useLanguage'
import { openAppointment, openHospitalDirections, openHospitalLocation } from '../utils/navigation'

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [locationError, setLocationError] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((value) => (value + 1) % HERO_IMAGES.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative mt-[74px] min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0">
        {HERO_IMAGES.map((image, imageIndex) => (
          <img
            key={image}
            src={image}
            alt="District Government Hospital"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              imageIndex === index ? 'opacity-100' : 'opacity-0'
            }`}
            loading={imageIndex === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-navy/60" />

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-20 text-white lg:px-6">
        <p className="mb-4 inline-block w-fit rounded-full bg-white/20 px-4 py-1 text-sm">{t.hero.label}</p>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:max-w-2xl">{t.hero.title}</h1>
        <p className="mt-3 text-lg text-slate-100">{t.hero.subtitle}</p>
        <p className="mt-2 text-base text-slate-200">{t.hero.location}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => openAppointment(APPOINTMENT_URL)}
            className="rounded-md bg-terracotta px-5 py-3 text-sm font-semibold text-white hover:bg-orange-700"
          >
            {t.hero.appointment}
          </button>
          <button
            type="button"
            onClick={() => openHospitalDirections(() => setLocationError(true))}
            className="rounded-md border border-white/60 bg-white/10 px-5 py-3 text-sm font-semibold hover:bg-white/20"
          >
            {t.hero.directions}
          </button>
        </div>

        {locationError ? (
          <div className="mt-4 max-w-xl rounded-md bg-white/90 p-3 text-sm text-navy">
            <p>{t.hero.locationError}</p>
            <button
              type="button"
              onClick={openHospitalLocation}
              className="mt-2 rounded-md bg-govBlue px-3 py-1.5 text-xs font-semibold text-white"
            >
              {t.hero.fallback}
            </button>
          </div>
        ) : null}
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-white/95">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-2 px-4 py-3 text-center text-sm font-medium text-navy md:grid-cols-5 lg:px-6">
          {t.hero.quickInfo.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
