import { HOSPITAL_LATITUDE, HOSPITAL_LONGITUDE } from '../config/siteConfig'

export function openAppointment(url) {
  window.open(url, '_blank', 'noopener,noreferrer')
}

export function openHospitalLocation() {
  const destination = `${HOSPITAL_LATITUDE},${HOSPITAL_LONGITUDE}`
  window.open(
    `https://www.google.com/maps/search/?api=1&query=${destination}`,
    '_blank',
    'noopener,noreferrer',
  )
}

export function openHospitalDirections(onError) {
  const destination = `${HOSPITAL_LATITUDE},${HOSPITAL_LONGITUDE}`

  if (!navigator.geolocation) {
    openHospitalLocation()
    onError?.()
    return
  }

  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const origin = `${coords.latitude},${coords.longitude}`
      const url = `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${destination}&travelmode=driving`
      window.open(url, '_blank', 'noopener,noreferrer')
    },
    () => {
      openHospitalLocation()
      onError?.()
    },
    { enableHighAccuracy: true, timeout: 10000 },
  )
}
