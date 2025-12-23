import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaArrowUp, FaWhatsapp, FaMapMarkerAlt, FaClock, FaShieldAlt, FaAward, FaGlobe } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    'Free Zone Setup',
    'Mainland Setup',
    'Freelance Visa',
    'Visa Processing',
    'Bank Account Opening',
    'Tax Registration',
    'Bookkeeping Services'
  ]

  const resources = [
    'Business Setup Guide',
    'Visa Application Guide',
    'Tax Compliance Guide',
    'Free Zone Comparison'
  ]

  return (
    <footer className="footer-modern">
      <div className="footer-top-accent"></div>
      <div className="footer-container-modern">
        <div className="footer-content-modern">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-section-modern footer-company"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="footer-logo-wrapper"
            >
              <Link to="/">
                <img src="/efzslogo.png" alt="Easy Free Zone Setup" className="footer-logo-modern" />
              </Link>
            </motion.div>
            <p className="footer-description">
              Your trusted partner for seamless business setup in UAE free zones. 
              Over years of experience helping entrepreneurs establish their presence in the UAE.
            </p>
            <div className="footer-badges">
              <motion.div
                className="footer-badge"
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <FaShieldAlt />
                <span>100% Legal Compliance</span>
              </motion.div>
            </div>
            <div className="social-links-modern">
              <motion.a
                href="https://www.linkedin.com/company/105756232/admin/dashboard/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="social-link-modern"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/easyfreezonesetup/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="social-link-modern"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/easyfreezonesetup"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="social-link-modern"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="https://wa.me/971554182103"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="social-link-modern"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="footer-section-modern"
          >
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-modern">
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/" className="footer-link-modern">
                    Home
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/services" className="footer-link-modern">
                    Services
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/about" className="footer-link-modern">
                    About Us
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/resources" className="footer-link-modern">
                    Resources
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/faq" className="footer-link-modern">
                    FAQ
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/contact" className="footer-link-modern">
                    Contact
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section-modern"
          >
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links-modern">
              {services.map((service, index) => {
                let servicePath = '/services'
                if (service === 'Freelance Visa') {
                  servicePath = '/services/freelance-visa'
                } else if (service === 'Free Zone Setup') {
                  servicePath = '/freezone'
                } else if (service === 'Mainland Setup') {
                  servicePath = '/mainland'
                }
                return (
                  <li key={index}>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link to={servicePath} className="footer-link-modern">
                        {service}
                      </Link>
                    </motion.div>
                  </li>
                )
              })}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="footer-section-modern"
          >
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links-modern">
              {resources.map((resource, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link to="/resources" className="footer-link-modern">
                      {resource}
                    </Link>
                  </motion.div>
                </li>
              ))}
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/calculator" className="footer-link-modern">
                    UAE Cost Calculator
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link to="/calculator-latin-america" className="footer-link-modern">
                    Latin America Calculator
                  </Link>
                </motion.div>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="footer-section-modern footer-contact"
          >
            <h4 className="footer-heading">Contact Us</h4>
            <ul className="footer-contact-modern">
              <li>
                <motion.a
                  href="mailto:admin@easyfreezonesetup.com"
                  className="contact-item-modern"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <FaEnvelope className="contact-icon-modern" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span className="contact-value">admin@easyfreezonesetup.com</span>
                  </div>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="https://wa.me/971554182103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-modern"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <FaWhatsapp className="contact-icon-modern" />
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">+971 55 418 2103</span>
                  </div>
                </motion.a>
              </li>
              <li>
                <motion.div
                  className="contact-item-modern"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <FaMapMarkerAlt className="contact-icon-modern" />
                  <div>
                    <span className="contact-label">Address</span>
                    <span className="contact-value">Dubai, UAE</span>
                  </div>
                </motion.div>
              </li>
              <li>
                <motion.div
                  className="contact-item-modern"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <FaClock className="contact-icon-modern" />
                  <div>
                    <span className="contact-label">Business Hours</span>
                    <span className="contact-value">Mon-Fri: 9:30AM-6:30PM GST</span>
                  </div>
                </motion.div>
              </li>
            </ul>
          </motion.div>
        </div>

        <div className="footer-divider-modern"></div>

        <div className="footer-bottom-modern">
          <div className="footer-bottom-content">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="footer-copyright"
            >
              &copy; {currentYear} Easy Free Zone Setup. All rights reserved.
            </motion.p>
            <div className="footer-legal-links">
              <Link to="/privacy" className="footer-legal-link">Privacy Policy</Link>
              <span className="footer-separator">|</span>
              <Link to="/terms" className="footer-legal-link">Terms of Service</Link>
            </div>
          </div>
          <motion.button
            className="scroll-top-btn"
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer

