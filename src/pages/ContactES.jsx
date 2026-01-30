import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaCheckCircle, FaHeadset, FaCalendar, FaGlobe } from 'react-icons/fa'

const ContactES = () => {

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Correo Electrónico', content: 'admin@easyfreezonesetup.com', link: 'mailto:admin@easyfreezonesetup.com' },
    { icon: <FaWhatsapp />, title: 'WhatsApp', content: '+971 55 169 0373', link: 'https://wa.me/971551690373' }
  ]

  const officeLocations = [
    { city: 'Dubái', address: '406, Publishing Pavillion, Dubai Production City, Dubai, EAU', icon: <FaMapMarkerAlt /> }
  ]

  const whyContact = [
    { icon: <FaHeadset />, title: 'Soporte 24/7', desc: 'Asistencia las 24 horas del día para todas tus consultas' },
    { icon: <FaCheckCircle />, title: 'Asesoría Experta', desc: 'Obtén orientación de profesionales experimentados en constitución de empresas' },
    { icon: <FaClock />, title: 'Respuesta Rápida', desc: 'Respondemos todas las consultas en 24 horas' },
    { icon: <FaCalendar />, title: 'Consulta Gratuita', desc: 'Agenda una consulta gratuita para discutir tus necesidades' }
  ]

  const faqs = [
    { q: '¿Qué tan rápido pueden constituir mi empresa?', a: 'La mayoría de las constituciones en zona franca se pueden completar en 2-3 días hábiles sin presencia física.' },
    { q: '¿Necesito visitar EAU para constituir mi empresa?', a: 'No, podemos manejar todo el proceso de forma remota para la mayoría de las zonas francas.' },
    { q: '¿Qué documentos se requieren?', a: 'Típicamente copias de pasaporte, fotos y plan de negocios. Te proporcionaremos una lista completa.' },
    { q: '¿Pueden ayudar con el trámite de visa?', a: 'Sí, proporcionamos servicios completos de trámite de visa para inversores y empleados.' }
  ]

  return (
    <div className="contact-page-modern">
      <section className="page-hero-modern">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="page-hero-content-modern"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-badge-modern"
            >
              Contacto
            </motion.span>
            <h1 className="hero-title-modern">Contáctanos</h1>
            <p className="hero-subtitle-modern">Hablemos sobre cómo podemos ayudarte a constituir tu empresa</p>
          </motion.div>
        </div>
      </section>

      {/* WHY CONTACT US */}
      <section className="section-modern why-contact-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Por Qué Contactarnos</span>
            <h2 className="section-title-modern">Estamos Aquí para Ayudarte</h2>
            <p className="section-description-modern">Obtén orientación y soporte experto durante todo tu proceso de constitución de empresa</p>
          </motion.div>

          <div className="why-contact-grid">
            {whyContact.map((item, index) => (
              <motion.div
                key={index}
                className="why-contact-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="why-contact-icon"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="why-contact-title">{item.title}</h3>
                <p className="why-contact-desc">{item.desc}</p>
                <div className="why-contact-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM & INFO */}
      <section className="section-modern contact-main-section">
        <div className="container-modern">
          <div className="contact-content-modern">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="contact-info-modern"
            >
              <span className="section-label-modern">Información de Contacto</span>
              <h2 className="section-title-modern">Conectemos</h2>
              <p className="contact-info-description">
                ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para ayudarte. 
                Contáctanos a través de cualquiera de los canales a continuación.
              </p>

              <div className="contact-info-list-modern">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link || '#'}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.02 }}
                    className="contact-info-item-modern"
                  >
                    <motion.div
                      className="contact-icon-wrapper-modern"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      {info.icon}
                    </motion.div>
                    <div className="contact-info-content-modern">
                      <h4 className="contact-info-title-modern">{info.title}</h4>
                      <p className="contact-info-text-modern">{info.content}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <div className="social-section-modern">
                <h4 className="social-section-title">Síguenos</h4>
                <div className="social-icons-modern">
                  <motion.a
                    href="https://www.linkedin.com/company/105756232/admin/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/easyfreezonesetup/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaInstagram />
                  </motion.a>
                  <motion.a
                    href="https://www.facebook.com/easyfreezonesetup"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaFacebook />
                  </motion.a>
                  <motion.a
                    href="https://wa.me/971551690373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon-modern"
                    whileHover={{ scale: 1.2, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaWhatsapp />
                  </motion.a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="contact-form-wrapper-modern"
            >
              <div className="form-header-modern">
                <h3 className="form-title-modern">Registra tu Empresa en EAU</h3>
                <p className="form-subtitle-modern">Completa el formulario a continuación y te responderemos en 24 horas</p>
              </div>
              <form 
                action='https://forms.zohopublic.com/easyfreezonesetupfzcllc1/form/GetYourBusinessRegisteredintheUAE/formperma/n_UtknoahEc1yv7sXqafkGzEzyk8e2QrZ222E0PxoBw/htmlRecords/submit' 
                name='form' 
                id='form' 
                method='POST' 
                acceptCharset='UTF-8' 
                encType='multipart/form-data'
                className="contact-form-modern zoho-form"
              >
                <input type="hidden" name="zf_referrer_name" value="" />
                <input type="hidden" name="zf_redirect_url" value="" />
                <input type="hidden" name="zc_gad" value="" />
                
                <div className="form-group-modern">
                  <label htmlFor="SingleLine" className="form-label-modern">
                    Tu Nombre <em>*</em>
                  </label>
                  <input 
                    type="text" 
                    name="SingleLine" 
                    id="SingleLine"
                    fieldType="1" 
                    maxLength="255" 
                    placeholder="ej. Juan Pérez" 
                    className="form-input-modern"
                    required
                  />
                </div>

                <div className="form-group-modern">
                  <label className="form-label-modern">
                    Tu Número de WhatsApp <em>*</em>
                  </label>
                  <div className="phone-input-wrapper">
                    <div className="phone-code-group">
                      <label htmlFor="international_PhoneNumber_countrycodeval" className="phone-label-small">Código</label>
                      <input 
                        type="text" 
                        compname="PhoneNumber_countrycodeval" 
                        name="PhoneNumber_countrycodeval" 
                        phoneFormat="1" 
                        maxLength="10" 
                        id="international_PhoneNumber_countrycodeval" 
                        placeholder="+52"
                        className="form-input-modern phone-code"
                      />
                    </div>
                    <div className="phone-number-group">
                      <label htmlFor="international_PhoneNumber_countrycode" className="phone-label-small">Número</label>
                      <input 
                        type="text" 
                        compname="PhoneNumber" 
                        name="PhoneNumber_countrycode" 
                        phoneFormat="1" 
                        isCountryCodeEnabled="true" 
                        maxLength="20" 
                        value="" 
                        fieldType="11" 
                        id="international_PhoneNumber_countrycode" 
                        placeholder="55 1234 5678"
                        className="form-input-modern phone-number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="Email" className="form-label-modern">
                    Tu Correo Electrónico <em>*</em>
                  </label>
                  <input 
                    type="email" 
                    maxLength="255" 
                    name="Email" 
                    id="Email"
                    value="" 
                    fieldType="9" 
                    placeholder="ej. correo@tudominio.com" 
                    className="form-input-modern"
                    required
                  />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="Dropdown" className="form-label-modern">
                    Servicio de interés <em>*</em>
                  </label>
                  <select 
                    name="Dropdown" 
                    id="Dropdown"
                    className="form-input-modern form-select-modern"
                    required
                  >
                    <option selected="true" value="-Select-">-Seleccionar-</option>
                    <option value="UAE Free Zone Business Setup">Constitución de Empresa en Zona Franca de EAU</option>
                    <option value="UAE Mainland Business Setup">Constitución de Empresa en Mainland de EAU</option>
                    <option value="Resident Visa Processing">Trámite de Visa de Residente</option>
                    <option value="Bank Account Opening">Apertura de Cuenta Bancaria</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary btn-form-submit"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Enviar</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OFFICE LOCATIONS */}
      <section className="section-modern office-locations-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Nuestras Oficinas</span>
            <h2 className="section-title-modern">Visita Nuestras Ubicaciones</h2>
            <p className="section-description-modern">Tenemos oficinas en EAU para servirte mejor</p>
          </motion.div>

          <div className="office-locations-grid">
            {officeLocations.map((office, index) => (
              <motion.div
                key={index}
                className="office-location-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="office-icon-wrapper">
                  {office.icon}
                </div>
                <h3 className="office-city">{office.city}</h3>
                <p className="office-address">{office.address}</p>
                <div className="office-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="section-modern contact-faq-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">FAQ</span>
            <h2 className="section-title-modern">Preguntas Frecuentes</h2>
            <p className="section-description-modern">Respuestas rápidas a preguntas comunes sobre nuestros servicios</p>
          </motion.div>

          <div className="contact-faq-grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="contact-faq-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="faq-number">0{index + 1}</div>
                <h4 className="faq-question">{faq.q}</h4>
                <p className="faq-answer">{faq.a}</p>
                <div className="faq-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BUSINESS HOURS */}
      <section className="section-modern business-hours-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="business-hours-card"
          >
            <div className="hours-icon-wrapper">
              <FaClock />
            </div>
            <div className="hours-content">
              <h3 className="hours-title">Horario de Atención</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Lunes - Viernes</span>
                  <span className="hours-time">9:30 AM - 6:30 PM GST</span>
                </div>
              </div>
              <p className="hours-note">Soporte 24/7 disponible vía WhatsApp y correo electrónico</p>
            </div>
            <div className="hours-accent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactES
