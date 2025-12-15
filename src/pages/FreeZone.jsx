import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaArrowRight, FaCheckCircle, FaStar, FaBuilding, FaShieldAlt, FaClock, FaGlobe, FaBriefcase, FaUsers, FaRocket, FaIdCard, FaWhatsapp } from 'react-icons/fa'

const FreeZone = () => {
  const heroHighlights = [
    { icon: <FaCheckCircle />, label: '100% foreign ownership' },
    { icon: <FaGlobe />, label: '15+ free zones curated' },
    { icon: <FaClock />, label: 'Fast-track licensing' }
  ]

  const heroStats = [
    { value: '3-5 days', label: 'Typical license timeline' },
    { value: '2000+', label: 'Companies launched' },
    { value: 'End-to-end', label: 'Licensing • Visas • Banking' }
  ]

  const keyFeatures = [
    '100% foreign ownership allowed',
    'Corporate and personal tax exemptions',
    'No minimum capital requirements',
    'Simplified business setup process',
    'Multiple business activities under one license',
    'Easy visa processing for employees'
  ]

  const benefits = [
    'Complete legal compliance assurance',
    'Faster business setup timeline',
    'Access to international markets',
    'World-class business infrastructure',
    'Professional ongoing support',
    'Cost-effective business operations'
  ]

  const packages = [
    {
      id: 1,
      icon: <FaStar />,
      title: 'First Year',
      firstYear: '12,000',
      renewal: 'Renewal',
      target: 'For UAE Residents, Consultants, Freelancers Earning $100K-$500K',
      features: [
        'Business License Setup',
        '1 Investor Visa',
        'Virtual Office Address',
        'MOA & Articles'
      ]
    },
    {
      id: 2,
      icon: <FaBuilding />,
      title: 'First Year',
      firstYear: '20,000',
      renewal: 'Renewal',
      target: 'For C-level Execs, Global Consultants, High-income Professionals',
      features: [
        'Premium Business License',
        '2 Investor Visas',
        'Office Address (Virtual)',
        'MOA & Articles'
      ]
    },
    {
      id: 3,
      icon: <FaClock />,
      title: 'First Year',
      firstYear: '25,000',
      renewal: 'Renewal',
      target: 'For Digital Entrepreneurs, Agencies, Creators, SaaS Founders',
      features: [
        'Digital Business License',
        '2 Investor Visas',
        'Registered Office Address',
        'Certificate of Incorporation'
      ]
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: 'First Year',
      firstYear: '45,000',
      renewal: 'Renewal',
      target: 'For HNIs, Family Offices, Startup Founders Relocating to UAE',
      features: [
        'Premium Trading License',
        '3 Investor Visas',
        'Flexi Desk Office Space',
        'Company Formation Documents'
      ]
    }
  ]

  const freeZones = [
    { name: 'Meydan Free Zone', price: '12,500', logo: 'Meydan' },
    { name: 'IFZA Free Zone', price: '12,900', logo: 'IFZA' },
    { name: 'Sharjah Publishing City (SPC)', price: '5,750', logo: 'SPC' },
    { name: 'Masdar City Free Zone', price: '7,000', logo: 'Masdar' },
    { name: 'Ajman Free Zone', price: '5,555', logo: 'Ajman' },
    { name: 'RAKEZ Free Zone', price: '6,010', logo: 'RAKEZ' },
    { name: 'UAQ Free Zone', price: '5,500', logo: 'UAQ' },
    { name: 'Creative City Free Zone', price: '5,530', logo: 'Creative' }
  ]

  const costComparison = [
    {
      emirate: 'Dubai Free Zone',
      license: '12,500',
      visa: '1,850',
      eChannel: '0',
      establishment: '2,000',
      visaStamping: '4,000',
      medical: '800',
      firstYear: '21,150',
      secondYear: '16,350',
      total: '37,500'
    },
    {
      emirate: 'Sharjah Free Zone',
      license: '5,760',
      visa: '1,600',
      eChannel: '2,280',
      establishment: '640',
      visaStamping: '2,200',
      medical: '695',
      firstYear: '13,175',
      secondYear: '9,640',
      total: '22,815'
    },
    {
      emirate: 'Abu Dhabi Free Zone',
      license: '7,000',
      visa: '2,000',
      eChannel: '2,600',
      establishment: '1,100',
      visaStamping: '3,050',
      medical: '800',
      firstYear: '16,550',
      secondYear: '10,600',
      total: '27,150'
    },
    {
      emirate: 'Ajman Free Zone',
      license: '5,555',
      visa: 'Package',
      eChannel: 'Package',
      establishment: 'Package',
      visaStamping: 'Package',
      medical: 'Package',
      firstYear: '13,131',
      secondYear: '13,131',
      total: '26,262'
    },
    {
      emirate: 'Ras Al Khaimah Free Zone',
      license: '6,010',
      visa: 'Package',
      eChannel: 'Package',
      establishment: 'Package',
      visaStamping: 'Package',
      medical: 'Package',
      firstYear: '12,010',
      secondYear: '12,010',
      total: '24,020'
    },
    {
      emirate: 'Umm Al Quwain Free Zone',
      license: '5,500',
      visa: 'Package',
      eChannel: 'Package',
      establishment: 'Package',
      visaStamping: 'Package',
      medical: 'Package',
      firstYear: '12,500',
      secondYear: '12,500',
      total: '25,000'
    },
    {
      emirate: 'Fujairah Free Zone',
      license: '5,530',
      visa: 'Package',
      eChannel: 'Package',
      establishment: 'Package',
      visaStamping: 'Package',
      medical: 'Package',
      firstYear: '12,500',
      secondYear: '12,500',
      total: '25,000'
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
              <span className="hero-badge-modern">Free Zone</span>
              <h1 className="setup-hero-title">UAE Free Zone Business Setup</h1>
              <p className="setup-hero-subtitle">
                Select the right jurisdiction, get transparent costs, and launch quickly with our licensing, visa, and banking specialists.
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
                  <p className="setup-card-kicker">What’s inside</p>
                  <h3>Licensing, visas, banking—handled</h3>
                  <p className="setup-card-subtext">Our launch squad runs approvals in parallel so you move in weeks, not months.</p>
                </div>
                <span className="setup-card-chip">
                  <FaRocket /> Launch ready
                </span>
              </div>
              <ul className="setup-card-list">
                {keyFeatures.slice(0, 3).map((item) => (
                  <li key={item}>
                    <FaCheckCircle /> {item}
                  </li>
                ))}
                <li>
                  <FaCheckCircle /> Dedicated advisor & weekly updates
                </li>
              </ul>
              <div className="setup-card-footer">
                <div>
                  <p className="setup-card-footer-title">Request tailored pricing</p>
                  <p className="setup-card-footer-subtext">We match a free zone to your industry, visa count, and bank needs.</p>
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
              Setting up a business in a UAE Free Zone offers numerous advantages, including 100% foreign ownership, 
              tax exemptions, and simplified business processes. Our expert team guides you through every step of the 
              process, handling documentation, government submissions, and follow-ups to ensure a smooth and efficient setup.
            </p>
            <p>
              With extensive experience across all UAE Free Zones, we help you choose the most suitable location for 
              your business needs. Whether you're looking for cost-effective solutions or premium services, we provide 
              comprehensive support tailored to your requirements.
            </p>
            <p>
              Each free zone has its distinct set of regulations and advantages. Our team stays updated with the latest 
              requirements and can help you navigate the complexities of business registration, licensing, and compliance 
              in your chosen free zone.
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
            <h2 className="section-title-modern">Business Setup Premium Packages</h2>
            <p className="section-description-modern">
              Choose the perfect package for your business needs. All packages include comprehensive support and transparent pricing.
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
                    <span className="price-label">{pkg.renewal}</span>
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
            <h2 className="section-title-modern">Best UAE Free Zone Locations</h2>
            <p className="section-description-modern">
              UAE has multiple Free Zones for business registration, each with its distinct set of regulations and advantages. 
              Find out more about the most popular Free Zones here.
            </p>
          </motion.div>

          <div className="freezones-grid-locations">
            {freeZones.map((zone, index) => (
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
                  {zone.logo}
                </div>
                <h3 className="freezone-location-name">{zone.name}</h3>
                <p className="freezone-location-price">Starting from AED {zone.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="freezone-comparison-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <h2 className="section-title-modern">UAE Free Zone Cost Comparison</h2>
            <p className="section-description-modern">
              Compare setup costs, visa eligibility, and annual fees across all major UAE Free Zones. 
              Make an informed decision for your business with our comprehensive cost breakdown.
            </p>
          </motion.div>

          <div className="comparison-table-wrapper">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Emirate</th>
                  <th>Business License Only</th>
                  <th>Visa Allocation</th>
                  <th>E-Channel Registration</th>
                  <th>Establishment Card</th>
                  <th>Visa Stamping</th>
                  <th>Medical Test and Emirates ID</th>
                  <th>First Year Cost</th>
                  <th>Second Year Cost</th>
                  <th>Total Cost for Two Years</th>
                </tr>
              </thead>
              <tbody>
                {costComparison.map((row, index) => (
                  <tr key={index}>
                    <td><strong>{row.emirate}</strong></td>
                    <td>AED {row.license}</td>
                    <td>{row.visa === 'Package' ? 'Package' : `AED ${row.visa}`}</td>
                    <td>{row.eChannel === 'Package' ? 'Package' : `AED ${row.eChannel}`}</td>
                    <td>{row.establishment === 'Package' ? 'Package' : `AED ${row.establishment}`}</td>
                    <td>{row.visaStamping === 'Package' ? 'Package' : `AED ${row.visaStamping}`}</td>
                    <td>{row.medical === 'Package' ? 'Package' : `AED ${row.medical}`}</td>
                    <td><strong>AED {row.firstYear}</strong></td>
                    <td><strong>AED {row.secondYear}</strong></td>
                    <td><strong>AED {row.total}</strong></td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="comparison-note">
              *All costs are approximate and may vary based on specific business requirements and current regulations.
            </p>
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
            <span className="cta-kicker">Free zone specialists</span>
            <h2 className="cta-title">Ready to launch in the right free zone?</h2>
            <p className="cta-desc">
              We’ll map the best jurisdiction, pricing, and visa mix for your business, then drive the licensing and banking workstreams.
            </p>
            <div className="cta-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn-primary-modern btn-large-modern">
                  Book a discovery call <FaArrowRight />
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

export default FreeZone
