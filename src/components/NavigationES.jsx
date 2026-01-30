import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { FaChevronDown } from 'react-icons/fa'

const NavigationES = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const location = useLocation()
  const servicesDropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)
      ) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const servicesItems = [
    { path: '/es/servicios', label: 'Constitución de Empresas - Servicios' },
    { path: '/es/free-zone', label: 'Apertura en Free Zone' },
    { path: '/es/mainland', label: 'Apertura en Mainland' },
    { path: '/es/visa-freelance', label: 'Visa Freelance' },
  ]

  const navLinks = [
    { path: '/es', label: 'Inicio' },
    { path: '/es/nosotros', label: 'Nosotros' },
  ]

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown)
  }

  const isServicesActive = servicesItems.some(item => location.pathname === item.path)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`nav-modern ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="nav-container-modern">
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/es" className="nav-logo-modern">
            <img src="/efzslogo.png" alt="Easy Free Zone Setup" className="logo-image-modern" />
          </Link>
        </motion.div>

        <div className={`nav-links-modern ${isMobileMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link, index) => (
            <motion.div
              key={link.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={link.path}
                className={`nav-link-modern ${location.pathname === link.path ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="nav-link-text">{link.label}</span>
                {location.pathname === link.path && (
                  <motion.div
                    className="nav-link-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}

          {/* Services Dropdown */}
          <div className="nav-dropdown-wrapper" ref={servicesDropdownRef}>
            <motion.button
              className={`nav-link-modern nav-dropdown-trigger ${isServicesActive ? 'active' : ''}`}
              onClick={() => toggleDropdown('services')}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="nav-link-text">Servicios</span>
              <motion.div
                animate={{ rotate: openDropdown === 'services' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown size={12} />
              </motion.div>
            </motion.button>
            <AnimatePresence>
              {openDropdown === 'services' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="nav-dropdown-menu"
                >
                  {servicesItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`nav-dropdown-item ${location.pathname === item.path ? 'active' : ''}`}
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setOpenDropdown(null)
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Link */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/es/contacto"
              className={`nav-link-modern ${location.pathname === '/es/contacto' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="nav-link-text">Contacto</span>
              {location.pathname === '/es/contacto' && (
                <motion.div
                  className="nav-link-indicator"
                  layoutId="activeIndicator"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </motion.div>

          {/* Language Switcher - Mobile */}
          <div className="mobile-lang-switcher language-switcher">
            <Link to="/" className="lang-btn">EN</Link>
            <span className="lang-divider">|</span>
            <Link to="/es" className="lang-btn active">ES</Link>
          </div>

          {/* Mobile CTA Button */}
          <motion.a
            href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20Emiratos"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-button-mobile"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Crear mi empresa
          </motion.a>
        </div>

        {/* Language Switcher - Desktop */}
        <div className="desktop-lang-switcher language-switcher">
          <Link to="/" className="lang-btn">EN</Link>
          <span className="lang-divider">|</span>
          <Link to="/es" className="lang-btn active">ES</Link>
        </div>

        {/* CTA Button */}
        <motion.a
          href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20Emiratos"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta-button"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Crear mi empresa
        </motion.a>

        <motion.button
          className="mobile-menu-btn-modern"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenu size={24} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </motion.nav>
  )
}

export default NavigationES
