import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AboutPage from './pages/AboutPage'
import BedAvailabilityPage from './pages/BedAvailabilityPage'
import BloodBankPage from './pages/BloodBankPage'
import ContactPage from './pages/ContactPage'
import DepartmentsPage from './pages/DepartmentsPage'
import DoctorsPage from './pages/DoctorsPage'
import FacilitiesPage from './pages/FacilitiesPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import NoticesPage from './pages/NoticesPage'
import OPDSchedulePage from './pages/OPDSchedulePage'
import PatientInfoPage from './pages/PatientInfoPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/departments" element={<DepartmentsPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/blood-bank" element={<BloodBankPage />} />
          <Route path="/beds" element={<BedAvailabilityPage />} />
          <Route path="/opd-schedule" element={<OPDSchedulePage />} />
          <Route path="/notices" element={<NoticesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/patient-information" element={<PatientInfoPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
