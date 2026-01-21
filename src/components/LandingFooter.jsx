import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaWhatsapp, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const LandingFooter = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-modern landing-footer">
      <div className="footer-top-accent"></div>
      <div className="footer-container-modern">
        <div className="footer-content-modern landing-footer-content">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-section-modern footer-company landing-footer-company"
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
                href="https://wa.me/971551690373"
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

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="footer-section-modern footer-contact landing-footer-contact"
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
                  href="https://wa.me/971551690373"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-item-modern"
                  whileHover={{ x: 5, scale: 1.02 }}
                >
                  <FaWhatsapp className="contact-icon-modern" />
                  <div>
                    <span className="contact-label">WhatsApp</span>
                    <span className="contact-value">+971 55 169 0373</span>
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
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="footer-copyright"
          >
            &copy; {currentYear} Easy Free Zone Setup. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default LandingFooter
