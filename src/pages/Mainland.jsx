import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaStar, FaBuilding, FaShieldAlt, FaClock, FaGlobe, FaBriefcase, FaUsers, FaRocket, FaIdCard, FaHandshake, FaFileContract, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

const Mainland = () => {
  const heroHighlights = [
    { icon: <FaGlobe />, label: 'Direct access to UAE market' },
    { icon: <FaHandshake />, label: 'Government contract ready' },
    { icon: <FaClock />, label: 'Fast-track licensing' }
  ]

  const heroStats = [
    { value: '3-5 days', label: 'Average license timeline' },
    { value: 'Full scope', label: 'Licensing • Visas • Banking' },
    { value: 'One squad', label: 'Dedicated advisor + legal' }
  ]

  const keyFeatures = [
    'Direct access to UAE domestic market',
    'Ability to bid for government contracts',
    'No restrictions on business location within UAE',
    'Multiple office locations permitted',
    'Local sponsorship arrangements handled',
    'Comprehensive legal compliance support'
  ]

  const benefits = [
    'Stronger local market presence',
    'Government contract opportunities',
    'Flexible business operations',
    'Enhanced credibility with local partners',
    'Direct customer relationships',
    'Strategic market positioning'
  ]

  const packages = [
    {
      id: 1,
      icon: <FaStar />,
      title: 'Starter Package',
      firstYear: '18,000',
      renewal: '15,000',
      target: 'For Small Businesses & Startups',
      features: [
        'DED License Setup',
        'Trade Name Reservation',
        'MOA & Articles of Association',
        'Office Lease Support',
        '1 Investor Visa',
        'Basic Compliance Support'
      ]
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: 'Professional Package',
      firstYear: '28,000',
      renewal: '22,000',
      target: 'For Growing Businesses & SMEs',
      features: [
        'Premium DED License',
        'Trade Name & Initial Approval',
        'Complete MOA Documentation',
        'Office Space Assistance',
        '2-3 Investor Visas',
        'Full Compliance & Legal Support'
      ]
    },
    {
      id: 3,
      icon: <FaRocket />,
      title: 'Enterprise Package',
      firstYear: '45,000',
      renewal: '35,000',
      target: 'For Established Companies & Corporations',
      features: [
        'Enterprise DED License',
        'Priority Processing',
        'Comprehensive Legal Documentation',
        'Premium Office Solutions',
        '5+ Investor Visas',
        'Dedicated Account Manager',
        'Ongoing Compliance Support'
      ]
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'Custom Solution',
      firstYear: 'Custom',
      renewal: 'Custom',
      target: 'Tailored Solutions for Your Business',
      features: [
        'Customized License Structure',
        'Flexible Visa Allocation',
        'Strategic Business Setup',
        'Premium Office Locations',
        'Unlimited Visas (as per requirements)',
        'White-Glove Service'
      ]
    }
  ]

  const setupSteps = [
    {
      step: 1,
      title: 'Choose Business Activity',
      description: 'Determine the nature of your business to identify the appropriate license type—commercial, professional, industrial, or tourism.',
      icon: <FaBriefcase />
    },
    {
      step: 2,
      title: 'Select Legal Structure',
      description: 'Choose from Limited Liability Company (LLC), Sole Proprietorship, Civil Company, or Branch of a Foreign Company.',
      icon: <FaFileContract />
    },
    {
      step: 3,
      title: 'Reserve Trade Name',
      description: 'Ensure the chosen name complies with DED guidelines and is unique. We handle the reservation process for you.',
      icon: <FaIdCard />
    },
    {
      step: 4,
      title: 'Obtain Initial Approval',
      description: 'Submit necessary documents to the DED for preliminary approval of your business activity and trade name.',
      icon: <FaCheckCircle />
    },
    {
      step: 5,
      title: 'Lease Office Space',
      description: 'A physical office is mandatory. We assist in finding suitable office space that meets DED requirements.',
      icon: <FaMapMarkerAlt />
    },
    {
      step: 6,
      title: 'Finalize Licensing',
      description: 'Submit all documents to the DED, pay required fees, and obtain your business license. We handle the entire process.',
      icon: <FaShieldAlt />
    }
  ]

  const businessStructures = [
    {
      name: 'Limited Liability Company (LLC)',
      description: 'Most common structure for mainland businesses, suitable for most commercial activities.',
      features: ['2-50 shareholders', 'Minimum capital requirements', 'Limited liability protection']
    },
    {
      name: 'Sole Proprietorship',
      description: 'Ideal for individual entrepreneurs and small businesses with single ownership.',
      features: ['Single owner', 'Full control', 'Simplified structure']
    },
    {
      name: 'Civil Company',
      description: 'Designed for professional services such as consulting, legal, and medical practices.',
      features: ['Professional services', 'Partnership structure', 'Regulatory compliance']
    },
    {
      name: 'Branch of Foreign Company',
      description: 'For international companies looking to establish a presence in the UAE mainland.',
      features: ['Parent company extension', 'Brand continuity', 'International operations']
    }
  ]

  return (
    <div className="freezone-page-modern">
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
              <Link to="/" className="back-to-home-link">
                <FaArrowLeft /> Back to Home
              </Link>
              <span className="hero-badge-modern">Mainland</span>
              <h1 className="setup-hero-title">UAE Mainland Company Formation</h1>
              <p className="setup-hero-subtitle">
                Build a domestic footprint, win government contracts, and unlock local credibility with a full-stack launch team.
              </p>

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
                  Get Started Now <FaArrowRight />
                </Link>
                <Link to="/contact" className="btn-ghost-modern">
                  Schedule a Call
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
                  <p className="setup-card-kicker">Local-ready package</p>
                  <h3>Operate anywhere in the UAE</h3>
                  <p className="setup-card-subtext">Licensing, local approvals, and sponsor arrangements orchestrated for you.</p>
                </div>
                <span className="setup-card-chip">
                  <FaBriefcase /> Local-first
                </span>
              </div>
              <ul className="setup-card-list">
                {keyFeatures.slice(0, 3).map((item) => (
                  <li key={item}>
                    <FaCheckCircle /> {item}
                  </li>
                ))}
                <li>
                  <FaCheckCircle /> Dedicated compliance + banking concierge
                </li>
              </ul>
              <div className="setup-card-footer">
                <div>
                  <p className="setup-card-footer-title">Tailored pricing & roadmap</p>
                  <p className="setup-card-footer-subtext">We align on structure, visa count, and office footprint before you commit.</p>
                </div>
                <Link to="/contact" className="setup-card-link">
                  Talk to an expert <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="freezone-content-section">
        <div className="container-modern">
          <div className="freezone-content-text">
            <p>
              UAE Mainland company formation allows you to conduct business directly with the UAE market and government entities. 
              This setup is ideal for businesses looking to operate within the UAE domestic market and take advantage of the country's 
              strategic location as a gateway to the Middle East, Africa, and Asia.
            </p>
            <p>
              Our mainland setup service includes assistance with choosing the right business structure, obtaining all necessary approvals, 
              and ensuring compliance with local laws and regulations. We work closely with local authorities to streamline the process 
              and minimize delays, ensuring your business can start operations as quickly as possible.
            </p>
            <p>
              With a mainland license, you can bid for government contracts, operate anywhere within the UAE, and establish a strong local 
              presence that builds trust with UAE customers and partners. Recent legislative changes also permit 100% foreign ownership in 
              many sectors, eliminating the need for a local sponsor in most cases.
            </p>
          </div>
        </div>
      </section>

      <section className="freezone-features-benefits-section">
        <div className="container-modern">
          <div className="features-benefits-grid">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="features-card"
            >
              <h2 className="card-title">Key Features</h2>
              <ul className="features-list">
                {keyFeatures.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle className="list-icon" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="benefits-card"
            >
              <h2 className="card-title">Benefits</h2>
              <ul className="benefits-list">
                {benefits.map((benefit, index) => (
                  <li key={index}>
                    <FaCheckCircle className="list-icon" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="freezone-packages-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Mainland Business Setup Packages</h2>
            <p className="section-description-modern">
              Choose the perfect package for your mainland business needs. All packages include comprehensive support and transparent pricing.
            </p>
          </motion.div>

          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="package-card"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="package-number">{pkg.id}</div>
                <div className="package-icon">{pkg.icon}</div>
                <h3 className="package-title">{pkg.title}</h3>
                <div className="package-pricing">
                  <div className="price-row">
                    <span className="price-label">First Year</span>
                    <span className="price-amount">AED {pkg.firstYear}</span>
                  </div>
                  <div className="price-row">
                    <span className="price-label">Renewal</span>
                    <span className="price-amount">AED {pkg.renewal}</span>
                  </div>
                </div>
                <p className="package-target">{pkg.target}</p>
                <ul className="package-features">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-icon" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-primary btn-small">
                  Contact Us
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="custom-package-section"
          >
            <p className="custom-package-text">Need a custom package tailored to your specific requirements?</p>
            <Link to="/contact" className="btn btn-secondary">
              Request Custom Package Quote
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="freezone-locations-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Business Setup Process</h2>
            <p className="section-description-modern">
              Our streamlined process ensures a smooth and efficient mainland company formation experience.
            </p>
          </motion.div>

          <div className="setup-steps-grid">
            {setupSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="setup-step-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="step-number">{step.step}</div>
                <div className="step-icon">{step.icon}</div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="freezone-locations-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">Business Structure Options</h2>
            <p className="section-description-modern">
              Choose the legal structure that best suits your business needs and objectives.
            </p>
          </motion.div>

          <div className="freezones-grid-locations">
            {businessStructures.map((structure, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="freezone-location-card"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="freezone-logo-placeholder">
                  <FaBuilding />
                </div>
                <h3 className="freezone-location-name">{structure.name}</h3>
                <p className="freezone-location-price">{structure.description}</p>
                <ul className="structure-features-list">
                  {structure.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="feature-icon-small" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
            <span className="cta-kicker">Mainland experts</span>
            <h2 className="cta-title">Ready to establish your mainland business?</h2>
            <p className="cta-desc">
              We orchestrate licensing, approvals, and banking so you can focus on winning customers and government contracts.
            </p>
            <div className="cta-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary-modern btn-large-modern">
                  Book a consultation <FaArrowRight />
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

export default Mainland
