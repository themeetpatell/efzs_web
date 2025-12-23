import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
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

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <AnimatePresence mode="wait">
          <Routes>
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
          </Routes>
        </AnimatePresence>
        <Footer />
        <FloatingButtons />
      </div>
    </Router>
  )
}

export default App

