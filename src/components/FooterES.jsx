import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaLinkedin, FaInstagram, FaFacebook, FaEnvelope, FaPhone, FaArrowUp, FaWhatsapp, FaMapMarkerAlt, FaClock, FaShieldAlt, FaAward, FaGlobe } from 'react-icons/fa'

const FooterES = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const services = [
    { name: 'Apertura de empresa en Free Zone', path: '/es/free-zone' },
    { name: 'Apertura de empresa en Mainland', path: '/es/mainland' },
    { name: 'Visa freelance', path: '/es/visa-freelance' },
    { name: 'Trámite de visas', path: '/es/servicios' },
    { name: 'Apertura de cuenta bancaria', path: '/es/servicios' },
    { name: 'Registro tributario', path: '/es/servicios' },
    { name: 'Servicios contables', path: '/es/servicios' }
  ]

  return (
    <footer className="footer-modern">
      <div className="footer-top-accent"></div>
      <div className="footer-container-modern">
        <div className="footer-content-modern">
          <div className="footer-section-modern footer-company">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="footer-logo-wrapper"
              >
                <Link to="/es">
                  <img src="/efzslogo.png" alt="Easy Free Zone Setup" className="footer-logo-modern" />
                </Link>
              </motion.div>
              <p className="footer-description">
                Tu aliado de confianza para una apertura de empresas sin complicaciones en Free Zone de Emiratos Árabes Unidos. 
                Años de experiencia ayudando a emprendedores a establecer su presencia en el país.
              </p>
              <div className="footer-badges">
                <motion.div
                  className="footer-badge"
                  whileHover={{ scale: 1.05, y: -3 }}
                >
                  <FaShieldAlt />
                  <span>100% Cumplimiento legal</span>
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
          </div>

          <div className="footer-right-stack">
            <div className="footer-links-stack">
              {/* Quick Links */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="footer-section-modern"
              >
                <h4 className="footer-heading">Enlaces rápidos</h4>
                <ul className="footer-links-modern">
                  <li>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link to="/es" className="footer-link-modern">
                        Inicio
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link to="/es/servicios" className="footer-link-modern">
                        Servicios
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link to="/es/nosotros" className="footer-link-modern">
                        Sobre nosotros
                      </Link>
                    </motion.div>
                  </li>
                  <li>
                    <motion.div whileHover={{ x: 5 }}>
                      <Link to="/es/contacto" className="footer-link-modern">
                        Contacto
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
                <h4 className="footer-heading">Nuestros servicios</h4>
                <ul className="footer-links-modern">
                  {services.map((service, index) => (
                    <li key={index}>
                      <motion.div whileHover={{ x: 5 }}>
                        <Link to={service.path} className="footer-link-modern">
                          {service.name}
                        </Link>
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="footer-section-modern footer-contact footer-contact-right"
            >
              <h4 className="footer-heading">Contáctanos</h4>
              <ul className="footer-contact-modern">
                <li>
                  <motion.a
                    href="mailto:admin@easyfreezonesetup.com"
                    className="contact-item-modern"
                    whileHover={{ x: 5, scale: 1.02 }}
                  >
                    <FaEnvelope className="contact-icon-modern" />
                    <div>
                      <span className="contact-label">CORREO ELECTRÓNICO</span>
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
                      <span className="contact-label">WHATSAPP</span>
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
                      <span className="contact-label">DIRECCIÓN</span>
                      <span className="contact-value">Dubái, Emiratos Árabes Unidos</span>
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
                      <span className="contact-label">HORARIO DE ATENCIÓN</span>
                      <span className="contact-value">Lun–Vie: 9:30 a.m. – 6:30 p.m. (GST)</span>
                    </div>
                  </motion.div>
                </li>
              </ul>
            </motion.div>
          </div>
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
              &copy; {currentYear} Easy Free Zone Setup. Todos los derechos reservados.
            </motion.p>
            <div className="footer-legal-links">
              <Link to="/privacy" className="footer-legal-link">Política de Privacidad</Link>
              <span className="footer-separator">|</span>
              <Link to="/terms" className="footer-legal-link">Términos de Servicio</Link>
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
            aria-label="Volver arriba"
          >
            <FaArrowUp />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default FooterES
