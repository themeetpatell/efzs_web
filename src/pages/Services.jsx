import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaBuilding, FaIdCard, FaHandshake, FaGlobe, FaBriefcase, FaShieldAlt, FaCheckCircle, FaArrowRight, FaClock, FaDollarSign, FaHeadset, FaRocket, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa'

const Services = () => {
  const heroHighlights = [
    { icon: <FaCheckCircle />, label: 'Setup, visas, tax, banking' },
    { icon: <FaClock />, label: 'Fast, transparent timelines' },
    { icon: <FaShieldAlt />, label: 'Compliance built-in' }
  ]

  const heroStats = [
    { value: '2000+', label: 'Launches delivered' },
    { value: '24/7', label: 'Advisor support' },
    { value: 'One team', label: 'Licensing • Visas • Banking' }
  ]

  const services = [
    {
      icon: <FaFileAlt />,
      title: 'UAE Free Zone Business Setup',
      description: 'Assistance in establishing your company in a UAE Free Zone with full licensing, compliance, and registration support.',
      features: ['License Application', 'Name Reservation', 'Document Preparation', 'Government Liaison', '100% Foreign Ownership', 'Tax Benefits']
    },
    {
      icon: <FaBuilding />,
      title: 'UAE Mainland Business Setup',
      description: 'Complete support for setting up your business in the UAE Mainland, including licensing, local approvals, and legal requirements.',
      features: ['Local Sponsorship', 'DED Registration', 'MOA Preparation', 'Trade Name Reservation', 'Business License', 'Government Approvals']
    },
    {
      icon: <FaIdCard />,
      title: 'Resident Visa Processing',
      description: 'End-to-end assistance with obtaining your UAE resident visa, including document preparation and government submissions.',
      features: ['Investor Visa', 'Employee Visa', 'Family Visa', 'Visa Renewal', 'Emirates ID', 'Medical Insurance']
    },
    {
      icon: <FaHandshake />,
      title: 'Bank Account Opening Assistance',
      description: 'Professional support in opening corporate and personal bank accounts in UAE banks smoothly and efficiently.',
      features: ['Account Selection', 'Documentation Support', 'Bank Introductions', 'Multi-Currency Accounts', 'Online Banking Setup', 'Ongoing Support']
    },
    {
      icon: <FaGlobe />,
      title: 'Corporate Tax Registration & Filing',
      description: 'Complete assistance with registering your company for corporate tax and filing returns in compliance with UAE laws.',
      features: ['Tax Registration', 'TRN Application', 'Tax Filing', 'Compliance Management', 'Tax Planning', 'Advisory Services']
    },
    {
      icon: <FaBriefcase />,
      title: 'VAT Registration & Filing',
      description: 'Help with VAT registration, filing, and compliance to ensure your business meets all UAE tax requirements.',
      features: ['VAT Registration', 'TRN Issuance', 'VAT Returns', 'Compliance Review', 'Refund Claims', 'VAT Advisory']
    },
    {
      icon: <FaFileAlt />,
      title: 'Bookkeeping Services',
      description: 'Accurate and timely bookkeeping to manage your financial records, transactions, and reporting needs.',
      features: ['Daily Bookkeeping', 'Financial Statements', 'Transaction Recording', 'Bank Reconciliation', 'Expense Management', 'Payroll Processing']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Basic Health Insurance',
      description: 'Guidance and support in securing mandatory basic health insurance for you and your employees.',
      features: ['Insurance Selection', 'Policy Comparison', 'Application Support', 'Coverage Review', 'Renewal Assistance', 'Claims Support']
    },
    {
      icon: <FaFileAlt />,
      title: 'Business Liquidation & Deregistration',
      description: 'Support in closing your business legally, handling deregistration, and clearing any outstanding obligations.',
      features: ['License Cancellation', 'Visa Cancellation', 'Bank Account Closure', 'Asset Liquidation', 'Final Settlements', 'Government Clearances']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="services-page-modern">
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
              <span className="hero-badge-modern">Services</span>
              <h1 className="setup-hero-title">Everything you need under one roof</h1>
              <p className="setup-hero-subtitle">Licensing, visas, tax, and banking guided by specialists who move quickly and keep you in the loop.</p>

              <div className="setup-pill-grid">
                {heroHighlights.map((item) => (
                  <div className="setup-pill" key={item.label}>
                    <span className="pill-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="setup-hero-actions">
                <Link to="/contact" className="btn-primary-modern btn-large-modern">
                  Book a discovery call <FaArrowRight />
                </Link>
                <Link to="/calculator" className="btn-ghost-modern">
                  Estimate my costs
                </Link>
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
                  <p className="setup-card-kicker">Service bundle</p>
                  <h3>From launch to compliance</h3>
                  <p className="setup-card-subtext">Pick only what you need or run the full stack with one accountable team.</p>
                </div>
                <span className="setup-card-chip">
                  <FaRocket /> Growth-ready
                </span>
              </div>
              <ul className="setup-card-list">
                <li>
                  <FaCheckCircle /> Free zone & mainland company formation
                </li>
                <li>
                  <FaCheckCircle /> Visa processing, banking, tax, and VAT
                </li>
                <li>
                  <FaCheckCircle /> Always-on advisory and renewals
                </li>
              </ul>
              <div className="setup-card-footer">
                <div>
                  <p className="setup-card-footer-title">Not sure where to start?</p>
                  <p className="setup-card-footer-subtext">Share your business model—we’ll map the right jurisdiction and steps.</p>
                </div>
                <Link to="/contact" className="setup-card-link">
                  Talk to an expert <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-modern services-main-section">
        <div className="container-modern">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="services-list-modern"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="service-item-modern"
                whileHover={{ x: 10 }}
              >
                <div className="service-item-header">
                  <span className="service-number-display">0{index + 1}</span>
                  <motion.div
                    className="service-icon-display"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="service-item-content">
                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-description">{service.description}</p>
                  <div className="service-features-inline">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-inline">
                        {feature}{idx < service.features.length - 1 ? '' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="process-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Our Process</span>
            <h2 className="section-title-modern">Simple Steps to Success</h2>
            <p className="section-description-modern">Get your business up and running in no time</p>
          </motion.div>

          <div className="process-steps-modern">
            {[
              { step: '01', title: 'Consultation', desc: 'Free initial consultation to understand your requirements' },
              { step: '02', title: 'Documentation', desc: 'We handle all paperwork and documentation' },
              { step: '03', title: 'Application', desc: 'Submit applications to relevant authorities' },
              { step: '04', title: 'Approval', desc: 'Receive your license and start operations' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="process-step-modern"
              >
                <motion.div
                  className="step-number-modern"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {process.step}
                </motion.div>
                <h4 className="step-title-modern">{process.title}</h4>
                <p className="step-desc-modern">{process.desc}</p>
                {index < 3 && <div className="step-connector-modern"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE BENEFITS */}
      <section className="section-modern service-benefits-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Benefits</span>
            <h2 className="section-title-modern">Why Choose Our Services</h2>
            <p className="section-description-modern">Comprehensive solutions with unmatched expertise</p>
          </motion.div>

          <div className="service-benefits-compact">
            {[
              { icon: <FaClock />, title: 'Fast Processing', desc: '2-3 day setup for most free zones with parallel workstreams' },
              { icon: <FaCheckCircle />, title: 'Compliance Built-In', desc: 'Legal, KYC, and banking requirements baked into every milestone' },
              { icon: <FaDollarSign />, title: 'Transparent Pricing', desc: 'No surprises—scopes, timelines, and costs agreed up front' },
              { icon: <FaHeadset />, title: '24/7 Support', desc: 'Dedicated advisor with real-time updates across channels' },
              { icon: <FaRocket />, title: 'Remote-Friendly', desc: 'Launch without travel; we coordinate everything on your behalf' },
              { icon: <FaShieldAlt />, title: 'Senior Guidance', desc: 'Certified specialists who stay accountable beyond go-live' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="service-benefit-item-compact"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="benefit-icon-compact">
                  {benefit.icon}
                </div>
                <div className="benefit-content-compact">
                  <h3 className="benefit-title-compact">{benefit.title}</h3>
                  <p className="benefit-desc-compact">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="section-modern service-categories-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Categories</span>
            <h2 className="section-title-modern">Service Categories</h2>
            <p className="section-description-modern">Comprehensive business setup solutions</p>
          </motion.div>

          <div className="service-categories-grid">
            {[
              { title: 'Business Setup', count: '2 Services', icon: <FaBuilding />, desc: 'Free Zone & Mainland setup' },
              { title: 'Visa Services', count: '1 Service', icon: <FaIdCard />, desc: 'Resident visa processing' },
              { title: 'Financial Services', count: '3 Services', icon: <FaBriefcase />, desc: 'Banking, tax & bookkeeping' },
              { title: 'Compliance', count: '2 Services', icon: <FaShieldAlt />, desc: 'Insurance & liquidation' }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="service-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-count">{category.count}</p>
                <p className="category-desc">{category.desc}</p>
                <div className="category-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-modern services-faq-section">
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
            <p className="section-description-modern">Common questions about our services</p>
          </motion.div>

          <div className="services-faq-grid">
            {[
              { q: 'How long does business setup take?', a: 'Most free zone setups can be completed in 2-3 working days without physical presence.' },
              { q: 'What documents are required?', a: 'Typically passport copies, photos, and business plan. We provide a complete checklist.' },
              { q: 'Do you offer remote setup?', a: 'Yes, we can handle the entire process remotely for most free zones.' },
              { q: 'What are your service fees?', a: 'Our fees are transparent with no hidden costs. Contact us for a detailed quote.' },
              { q: 'Can you help with visa processing?', a: 'Yes, we provide complete visa processing services for investors and employees.' },
              { q: 'Do you offer ongoing support?', a: 'Yes, we provide post-setup support including license renewal and compliance.' }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="services-faq-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="faq-icon-wrapper">
                  <FaQuestionCircle />
                </div>
                <h4 className="faq-question-services">{faq.q}</h4>
                <p className="faq-answer-services">{faq.a}</p>
                <div className="faq-accent-services"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-banner-card"
          >
            <span className="cta-kicker">Full-stack setup</span>
            <h2 className="cta-title">Ready to get your UAE launch moving?</h2>
            <p className="cta-desc">Book a consultation and we’ll map the right mix of licensing, visas, and banking for your business.</p>
            <div className="cta-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary-modern btn-large-modern">
                  Get Free Consultation <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/971554182103" target="_blank" rel="noopener noreferrer" className="btn-ghost-modern">
                  <FaWhatsapp /> Chat on WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
