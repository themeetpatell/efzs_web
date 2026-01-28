import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import LandingNavigation from './components/LandingNavigation'
import LandingFooter from './components/LandingFooter'
import FloatingButtons from './components/FloatingButtons'
import TrackingInitializer from './components/TrackingInitializer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import Resources from './pages/Resources'
import Guides from './pages/Guides'
import FAQ from './pages/FAQ'
import FreelanceVisa from './pages/FreelanceVisa'
import FreeZone from './pages/FreeZone'
import Mainland from './pages/Mainland'
import CostCalculator from './pages/CostCalculator'
import LatinAmericaCalculator from './pages/LatinAmericaCalculator'
import LandingPage1 from './pages/LandingPage1'
import LandingPage2 from './pages/LandingPage2'
import LandingPage3 from './pages/LandingPage3'
import LandingPage4 from './pages/LandingPage4'
import Webinar from './pages/Webinar'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfUse from './pages/TermsOfUse'

function AppContent() {
  const location = useLocation()
  const landingPaths = [
    '/start-grow-uae-business-trusted-guidance',
    '/launch-scale-expand-uae-setup-guidance',
    '/uae-business-setup-simple-fast-clear',
    '/build-grow-uae-business-expert-support',
    '/setting-up-your-business-in-dubai',
    '/landing-1',
    '/landing-2',
    '/landing-3',
    '/landing-4',
    '/webinar',
  ]
  const isLandingPage = landingPaths.includes(location.pathname)

  return (
    <div className="App">
      {isLandingPage ? <LandingNavigation /> : <Navigation />}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/services/freelance-visa" element={<FreelanceVisa />} />
          <Route path="/freezone" element={<FreeZone />} />
          <Route path="/mainland" element={<Mainland />} />
          <Route path="/calculator" element={<CostCalculator />} />
          <Route path="/calculator-latin-america" element={<LatinAmericaCalculator />} />
          <Route path="/start-grow-uae-business-trusted-guidance" element={<LandingPage1 />} />
          <Route path="/launch-scale-expand-uae-setup-guidance" element={<LandingPage2 />} />
          <Route path="/uae-business-setup-simple-fast-clear" element={<LandingPage3 />} />
          <Route path="/build-grow-uae-business-expert-support" element={<LandingPage4 />} />
          <Route path="/landing-1" element={<Navigate to="/start-grow-uae-business-trusted-guidance" replace />} />
          <Route path="/landing-2" element={<Navigate to="/launch-scale-expand-uae-setup-guidance" replace />} />
          <Route path="/landing-3" element={<Navigate to="/uae-business-setup-simple-fast-clear" replace />} />
          <Route path="/landing-4" element={<Navigate to="/build-grow-uae-business-expert-support" replace />} />
          <Route path="/setting-up-your-business-in-dubai" element={<Webinar />} />
          <Route path="/webinar" element={<Navigate to="/setting-up-your-business-in-dubai" replace />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
        </Routes>
      </AnimatePresence>
      {isLandingPage ? <LandingFooter /> : <Footer />}
      {!isLandingPage && <FloatingButtons />}
    </div>
  )
}

function App() {
  return (
    <Router>
      <TrackingInitializer />
      <AppContent />
    </Router>
  )
}

export default App
