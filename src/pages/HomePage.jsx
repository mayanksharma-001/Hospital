import AboutHospital from '../components/AboutHospital'
import EmergencyBanner from '../components/EmergencyBanner'
import EventsSection from '../components/EventsSection'
import FAQSection from '../components/FAQSection'
import HeroSlider from '../components/HeroSlider'
import NoticesPreview from '../components/NoticesPreview'
import OnlineServicesSection from '../components/OnlineServicesSection'
import QuickServices from '../components/QuickServices'
import { useDocumentTitle } from '../hooks/useDocumentTitle'

export default function HomePage() {
  useDocumentTitle('Home')

  return (
    <>
      <HeroSlider />
      <QuickServices />
      <AboutHospital />
      <OnlineServicesSection />
      <NoticesPreview />
      <EventsSection />
      <EmergencyBanner />
      <FAQSection />
    </>
  )
}
