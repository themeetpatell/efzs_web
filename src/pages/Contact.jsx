import { motion } from 'framer-motion'
import { FaEnvelope, FaMapMarkerAlt, FaClock, FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook, FaCheckCircle, FaHeadset, FaCalendar, FaGlobe } from 'react-icons/fa'

const Contact = () => {

  const contactInfo = [
    { icon: <FaEnvelope />, title: 'Email', content: 'admin@easyfreezonesetup.com', link: 'mailto:admin@easyfreezonesetup.com' },
    { icon: <FaWhatsapp />, title: 'WhatsApp', content: '+971 55 418 2103', link: 'https://wa.me/971554182103' }
  ]

  const officeLocations = [
    { city: 'Dubai', address: '406, Publishing Pavillion, Dubai Production City, Dubai, UAE', icon: <FaMapMarkerAlt /> }
  ]

  const whyContact = [
    { icon: <FaHeadset />, title: '24/7 Support', desc: 'Round-the-clock assistance for all your queries' },
    { icon: <FaCheckCircle />, title: 'Expert Advice', desc: 'Get guidance from experienced business setup professionals' },
    { icon: <FaClock />, title: 'Fast Response', desc: 'We respond to all inquiries within 24 hours' },
    { icon: <FaCalendar />, title: 'Free Consultation', desc: 'Schedule a free consultation to discuss your needs' }
  ]

  const faqs = [
    { q: 'How quickly can you set up my business?', a: 'Most free zone setups can be completed in 2-3 working days without physical presence.' },
    { q: 'Do I need to visit UAE for business setup?', a: 'No, we can handle the entire process remotely for most free zones.' },
    { q: 'What documents are required?', a: 'Typically passport copies, photos, and business plan. We\'ll provide a complete checklist.' },
    { q: 'Can you help with visa processing?', a: 'Yes, we provide complete visa processing services for investors and employees.' }
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
              Contact
            </motion.span>
            <h1 className="hero-title-modern">Get In Touch</h1>
            <p className="hero-subtitle-modern">Let's discuss how we can help you set up your business</p>
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
            <span className="section-label-modern">Why Contact Us</span>
            <h2 className="section-title-modern">We're Here to Help</h2>
            <p className="section-description-modern">Get expert guidance and support throughout your business setup journey</p>
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
              <span className="section-label-modern">Contact Information</span>
              <h2 className="section-title-modern">Let's Connect</h2>
              <p className="contact-info-description">
                Have questions about our services? We're here to help. 
                Reach out to us through any of the channels below.
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
                <h4 className="social-section-title">Follow Us</h4>
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
                    href="https://wa.me/971554182103"
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
                <h3 className="form-title-modern">Send Us a Message</h3>
                <p className="form-subtitle-modern">Fill out the form below and we'll get back to you within 24 hours</p>
              </div>
              <form 
                action='https://forms.zohopublic.com/easyfreezonesetupfzcllc1/form/Contactus/formperma/E4R2i-c9Bbpj2ZEuFD3OAjiZocNhTtfhJqzri2xf_ns/htmlRecords/submit' 
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
                    Your Name <em>*</em>
                  </label>
                  <input 
                    type="text" 
                    name="SingleLine" 
                    id="SingleLine"
                    fieldType="1" 
                    maxLength="255" 
                    placeholder="i.e. Meet Patel" 
                    className="form-input-modern"
                    required
                  />
                </div>

                <div className="form-group-modern">
                  <label className="form-label-modern">
                    Your Phone <em>*</em>
                  </label>
                  <div className="phone-input-wrapper">
                    <div className="phone-code-group">
                      <label htmlFor="international_PhoneNumber_countrycodeval" className="phone-label-small">Code</label>
                      <input 
                        type="text" 
                        compName="PhoneNumber_countrycodeval" 
                        name="PhoneNumber_countrycodeval" 
                        phoneFormat="1" 
                        maxLength="10" 
                        id="international_PhoneNumber_countrycodeval" 
                        placeholder=""
                        className="form-input-modern phone-code"
                      />
                    </div>
                    <div className="phone-number-group">
                      <label htmlFor="international_PhoneNumber_countrycode" className="phone-label-small">Number</label>
                      <input 
                        type="text" 
                        compName="PhoneNumber" 
                        name="PhoneNumber_countrycode" 
                        phoneFormat="1" 
                        isCountryCodeEnabled="true" 
                        maxLength="20" 
                        value="" 
                        fieldType="11" 
                        id="international_PhoneNumber_countrycode" 
                        placeholder=""
                        className="form-input-modern phone-number"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="Email" className="form-label-modern">Your Email</label>
                  <input 
                    type="email" 
                    maxLength="255" 
                    name="Email" 
                    id="Email"
                    value="" 
                    fieldType="9" 
                    placeholder="i.e. email@yourdomain.com" 
                    className="form-input-modern"
                  />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="Dropdown" className="form-label-modern">
                    Services interested in <em>*</em>
                  </label>
                  <select 
                    name="Dropdown" 
                    id="Dropdown"
                    className="form-input-modern form-select-modern"
                    required
                  >
                    <option selected="true" value="-Select-">-Select-</option>
                    <option value="UAE Free Zone Business Setup">UAE Free Zone Business Setup</option>
                    <option value="UAE Mainland Business Setup">UAE Mainland Business Setup</option>
                    <option value="Resident Visa Processing">Resident Visa Processing</option>
                    <option value="Bank Account Opening">Bank Account Opening</option>
                  </select>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="MultiLine" className="form-label-modern">
                    Your Message <em>*</em>
                  </label>
                  <textarea 
                    name="MultiLine" 
                    id="MultiLine"
                    maxLength="65535" 
                    placeholder="Tell us about your requirements and we'll provide a customized solution..."
                    className="form-input-modern form-textarea-modern"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  className="btn btn-primary"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Submit</span>
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
            <span className="section-label-modern">Our Offices</span>
            <h2 className="section-title-modern">Visit Our Locations</h2>
            <p className="section-description-modern">We have offices across UAE to serve you better</p>
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
            <h2 className="section-title-modern">Frequently Asked Questions</h2>
            <p className="section-description-modern">Quick answers to common questions about our services</p>
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
              <h3 className="hours-title">Business Hours</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span className="hours-day">Monday - Friday</span>
                  <span className="hours-time">9:30 AM - 6:30 PM GST</span>
                </div>
              </div>
              <p className="hours-note">24/7 support available via WhatsApp and email</p>
            </div>
            <div className="hours-accent"></div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
