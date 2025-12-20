import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheckCircle, FaArrowRight, FaFileAlt, FaUserTie, FaUsers, FaGlobe, FaBriefcase, FaClock, FaShieldAlt, FaRocket, FaIdCard, FaHandshake, FaDollarSign, FaQuestionCircle, FaCertificate, FaPortrait, FaHeadset, FaPhone, FaWhatsapp, FaStar, FaBuilding } from 'react-icons/fa'

const FreelanceVisa = () => {
  const heroHighlights = [
    'No physical office needed',
    'Renewable freelance license',
    '2-year residence visa'
  ]

  const heroStats = [
    { value: 'AED 9,999', label: 'All-in yearly package' },
    { value: '2 years', label: 'Visa validity' },
    { value: 'Family-ready', label: 'Sponsor dependents' }
  ]

  const packageInclusions = [
    {
      icon: <FaUserTie />,
      title: 'Freelance Permit - 1 Year Validity',
      description: 'Renewable annually, allowing you to carry out your freelance activities legally in the UAE.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Co-working Lease Agreement - 1 Year Validity',
      description: 'Includes access to co-working space within the Free Zone.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Freelance Visa - 2 Years Validity',
      description: 'Issued under the Free Zone Authority with full legal residency rights.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Medical Test',
      description: 'Assistance with the mandatory medical test required for visa issuance.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Biometric & Emirates ID',
      description: 'Support with biometric appointment and Emirates ID processing.'
    },
    {
      icon: <FaUserTie />,
      title: 'Basic Health Insurance',
      description: 'Provided as per UAE requirements (coverage excludes Dubai and Abu Dhabi).'
    }
  ]

  const documentsRequired = [
    'Passport copy (2-page spread)',
    'Passport cover photo (both sides)',
    'Passport-size photo (white background)',
    'Visa cancellation document / Visit visa copy',
    'Previous residence visa - if applicable',
    'Previous Emirates ID - if applicable',
    'Mobile number',
    'Email ID',
    'Attested degree - if applicable',
    'Chosen profession from approved list',
    'Father\'s name',
    'Mother\'s name',
    'Spouse\'s name',
    'Religion and faith'
  ]

  const packageBenefits = [
    {
      icon: <FaUsers />,
      title: 'Eligibility to Sponsor Dependents',
      description: 'You can sponsor your family under your freelance visa. The commonly used profession \'PR Specialist\' does not require an attested degree and is exempt from the AED 3,000 immigration security deposit normally required for dependents.'
    },
    {
      icon: <FaBriefcase />,
      title: 'Access to Co-working Facilities',
      description: 'Enjoy access to a professional co-working space inside the Free Zone Authority premises, ideal for meetings and networking.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Access to Corporate Support Letters',
      description: 'You can request official documents such as Salary Certificates, NOCs, and other corporate letters directly from the Free Zone Authority (Service charges will apply based on the type of request).'
    }
  ]

  const whyChoosePoints = [
    '100% legal freelance operation under a UAE Free Zone',
    '2-year residence visa with renewable freelance license',
    'No physical office requirement',
    'Affordable yearly cost',
    'Suitable for consultants, professionals, creatives, and independent workers'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="freelance-visa-page-modern">
      <section className="setup-hero">
        <div className="setup-hero-ink primary" />
        <div className="setup-hero-ink secondary" />
        <div className="container-modern">
          <div className="setup-hero-grid">
            <motion.div
              className="setup-hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="setup-hero-title">Free Zone Freelance Visa</h1>
              <p className="setup-hero-subtitle">
                Launch your UAE freelance career with a compliant license, 2-year visa, and residency support—all without an office.
              </p>

              <div className="setup-pill-grid">
                {heroHighlights.map((item) => (
                  <div className="setup-pill" key={item}>
                    <span className="pill-icon">
                      <FaCheckCircle />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="setup-hero-actions">
                <a href="https://wa.me/971554182103?text=Hi%2C%20I%20want%20to%20start%20a%20company%20in%20UAE" target="_blank" rel="noopener noreferrer" className="btn-primary-modern btn-large-modern">
                  Start Company in UAE <FaArrowRight />
                </a>
                <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn-ghost-modern">
                  Book A Free Consultation
                </a>
              </div>

              <div className="setup-hero-stats">
                {heroStats.map((stat) => (
                  <div className="setup-hero-stat" key={stat.label}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="setup-hero-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="setup-card-header">
                <div>
                  <p className="setup-card-kicker">Package snapshot</p>
                  <h3>AED 9,999 / year</h3>
                  <p className="setup-card-subtext">Permit, visa, co-working lease, and ID processing managed end-to-end.</p>
                </div>
                <span className="setup-card-chip">
                  <FaRocket /> Ready to work
                </span>
              </div>
              <ul className="setup-card-list">
                {whyChoosePoints.slice(0, 3).map((item) => (
                  <li key={item}>
                    <FaCheckCircle /> {item}
                  </li>
                ))}
                <li>
                  <FaCheckCircle /> Dependents can be sponsored
                </li>
              </ul>
              <div className="setup-card-footer">
                <div>
                  <p className="setup-card-footer-title">Next step</p>
                  <p className="setup-card-footer-subtext">Pick your profession, share your documents, and we start your file in 24 hours.</p>
                </div>
                <Link to="/contact" className="setup-card-link">
                  Start my file <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Package Overview</h2>
            <p className="package-overview-text">
              The Free Zone Freelance Visa Package is a perfect choice for professionals seeking independence and flexibility to live and work legally in the UAE. This package allows you to operate as a licensed freelancer under a recognized UAE Free Zone authority, enjoy a professional workspace, and secure a 2-year residence visa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-header-modern"
            style={{ marginTop: '60px' }}
          >
            <h2 className="section-title-modern">Package Inclusions</h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="package-inclusions-grid"
          >
            {packageInclusions.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="package-inclusion-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="package-inclusion-icon">
                  {item.icon}
                </div>
                <h3 className="package-inclusion-title">{item.title}</h3>
                <p className="package-inclusion-desc">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-modern documents-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="documents-header-modern"
          >
            <FaFileAlt className="documents-icon" />
            <h2 className="section-title-modern">Documents & Details Required</h2>
          </motion.div>

          <div className="documents-list-modern">
            {documentsRequired.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="document-item-modern"
              >
                <FaCheckCircle className="document-check-icon" />
                <span>{doc}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern cost-payment-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">$ Cost and Payment Terms</h2>
          </motion.div>

          <div className="cost-payment-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="package-fees-card"
            >
              <div className="cost-card-icon">
                <FaDollarSign />
              </div>
              <h3 className="cost-card-title">Package Fees</h3>
              <div className="fee-item">
                <span>Freelance Visa Package:</span>
                <strong className="fee-amount">AED 9,999/year</strong>
              </div>
              <div className="fee-item">
                <span>Research & Knowledge Fee:</span>
                <strong className="fee-amount">AED 25/year</strong>
              </div>
              <div className="fee-item">
                <span>Pre-approval Fee:</span>
                <strong className="fee-amount">AED 524*</strong>
              </div>
              <p className="fee-note">* Applicable for certain nationalities</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="payment-details-card"
            >
              <div className="cost-card-icon">
                <FaCheckCircle />
              </div>
              <h3 className="cost-card-title">Payment Details</h3>
              <div className="payment-detail-item">
                <FaUserTie className="payment-icon" />
                <div>
                  <strong>Visa Validity</strong>
                  <span>2 Years</span>
                </div>
              </div>
              <div className="payment-detail-item">
                <FaFileAlt className="payment-icon" />
                <div>
                  <strong>Payment Terms</strong>
                  <span>Payable in two terms (1st year and 2nd year)</span>
                </div>
              </div>
              <div className="payment-detail-item">
                <FaDollarSign className="payment-icon" />
                <div>
                  <strong>$ Payment Methods</strong>
                  <div className="payment-methods">
                    <div><FaCheckCircle className="method-check" /> Direct bank transfer to Free Zone Authority</div>
                    <div><FaCheckCircle className="method-check" /> Payment link (2.5% fee applies)</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="important-note-card"
          >
            <FaStar className="note-icon" />
            <div>
              <strong>Important Note</strong>
              <p>If you do not renew your package in the second year, both your freelance permit and freelance visa will be automatically cancelled by the Free Zone Authority.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-modern benefits-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Benefits of the Freelance Visa Package</h2>
          </motion.div>

          <div className="package-benefits-grid">
            {packageBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="package-benefit-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="package-benefit-icon">
                  {benefit.icon}
                </div>
                <h3 className="package-benefit-title">{benefit.title}</h3>
                <p className="package-benefit-desc">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern why-choose-package-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Why Choose This Package?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="why-choose-list-box"
          >
            <ul className="why-choose-list">
              {whyChoosePoints.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FaCheckCircle className="why-choose-check" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>


      <section className="cta-banner">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-banner-card"
          >
            <span className="cta-kicker">Need a launch partner?</span>
            <h2 className="cta-title">Ready to start your freelance journey in the UAE?</h2>
            <p className="cta-desc">
              Get expert guidance and start your freelance visa application today. Our team handles the paperwork while you focus on your craft.
            </p>
            <div className="cta-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/971554182103?text=Hi%2C%20I%20want%20to%20start%20a%20company%20in%20UAE" target="_blank" rel="noopener noreferrer" className="btn-primary-modern btn-large-modern">
                  Start Company in UAE <FaArrowRight />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn-ghost-modern">
                  Book A Free Consultation
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FreelanceVisa
