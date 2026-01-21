import { motion } from 'framer-motion'
import { FaArrowRight, FaCheckCircle, FaHandshake, FaChartLine, FaRocket, FaGlobe, FaUsers, FaBullseye, FaTrophy, FaChartBar, FaShieldAlt, FaThumbsUp } from 'react-icons/fa'
import ZohoForm from '../components/ZohoForm'

const LandingPage4 = () => {
  return (
    <div className="landing-page-4">
      {/* Hero Section - Stats Focused */}
      <section className="landing-hero-v4">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="container-modern">
          <motion.div
            className="landing-hero-content-v4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="hero-badge-modern"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Professional Consultants
            </motion.span>
            
            <h1 className="landing-hero-title-v4">
              Build & Grow Your Business in the UAE <span>with Expert Support</span>
            </h1>
            
            <p className="landing-hero-subtitle-v4">
              Professional consultants guiding you through every phase — from setup planning to scalable operations.
            </p>

            <div className="hero-metrics-v4">
              <div className="metric-card-v4">
                <FaTrophy className="metric-icon" />
                <div className="metric-content">
                  <div className="metric-value">100+</div>
                  <div className="metric-label">Successful Setups</div>
                </div>
              </div>
              <div className="metric-card-v4">
                <FaChartBar className="metric-icon" />
                <div className="metric-content">
                  <div className="metric-value">2-3</div>
                  <div className="metric-label">Days Average</div>
                </div>
              </div>
              <div className="metric-card-v4">
                <FaBullseye className="metric-icon" />
                <div className="metric-content">
                  <div className="metric-value">100%</div>
                  <div className="metric-label">Success Rate</div>
                </div>
              </div>
            </div>

            <motion.div
              className="hero-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://wa.me/971551690373?text=Hi%2C%20I%20want%20to%20connect%20with%20a%20setup%20expert%20for%20UAE%20business" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-large"
              >
                Connect With a Setup Expert <FaArrowRight />
              </a>
              <a 
                href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-large"
              >
                Book Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Our Approach - Connected Steps */}
      <section className="section-modern landing-approach-v4">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">Our Approach</span>
            <h2 className="section-title-modern">A Structured Path to Success</h2>
          </motion.div>

          <div className="landing-approach-steps-v4">
            {[
              {
                icon: <FaHandshake />,
                title: 'Listen & Understand Goals',
                desc: 'We begin with a detailed session to learn your business idea.'
              },
              {
                icon: <FaChartLine />,
                title: 'Strategize the Best Jurisdiction',
                desc: 'Free Zone vs Mainland recommendation based on market, costs & goals.'
              },
              {
                icon: <FaRocket />,
                title: 'Plan the Setup Pathway',
                desc: 'Step‑by‑step strategy including timelines, documents, and compliance triggers.'
              },
              {
                icon: <FaGlobe />,
                title: 'Operational Insight Support',
                desc: 'Guidance on visa planning, corporate banking, business activities, and post‑setup growth planning.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="landing-approach-card-v4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="approach-icon-wrapper-v4">
                  {item.icon}
                </div>
                <h3 className="approach-title-v4">{item.title}</h3>
                <p className="approach-desc-v4">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Matters - Redesigned */}
      <section className="section-modern landing-why-matters-v4">
        <div className="container-modern">
          <motion.div
            className="landing-matters-card-v4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="matters-lead-panel">
              <div className="matters-lead-top">
                <motion.div
                  className="matters-icon-wrapper-v4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <FaUsers />
                </motion.div>
                <span className="matters-label">Why This Matters</span>
              </div>
              <h2 className="matters-title-v4">Why This Matters</h2>
              <p className="matters-desc-v4">
                UAE offers strategic advantages like tax incentives, business expansion potential, and global market access — we make sure your launch is smooth and aligned with your business goals.
              </p>
            </div>

            <div className="matters-benefits-v4">
              {[
                { icon: <FaCheckCircle />, title: 'Tax Incentives' },
                { icon: <FaCheckCircle />, title: 'Business Expansion' },
                { icon: <FaCheckCircle />, title: 'Global Market Access' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="matters-benefit-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="benefit-icon-bubble">{item.icon}</div>
                  <div className="benefit-body">
                    <h3 className="benefit-title">{item.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Promise - Redesigned */}
      <section className="section-modern landing-promise-v4">
        <div className="container-modern">
          <motion.div
            className="landing-promise-card-v4"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="promise-left-v4">
              <div className="promise-topline">
                <div className="promise-icon-circle-v4">
                  <FaShieldAlt />
                </div>
                <div className="promise-badge-v4">
                  <FaThumbsUp />
                  <span>Our Promise</span>
                </div>
              </div>

              <h2 className="promise-title-v4">No Ambiguity. No Delays.</h2>
              <p className="promise-desc-v4">
                Practical roadmap + expert support. We make your UAE business setup journey clear, fast, and stress-free.
              </p>
            </div>

            <div className="promise-right-v4">
              <div className="promise-detail-card">
                <div className="promise-detail-header">
                  <div className="promise-icon-chip">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <h3>What You Can Expect</h3>
                    <p>Support that stays clear and responsive.</p>
                  </div>
                </div>
                <ul className="promise-list">
                  {[
                    'Clear Communication',
                    'Fast Execution',
                    'Expert Guidance'
                  ].map((item, index) => (
                    <li key={index}>
                      <FaCheckCircle />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Serve - Completely Redesigned */}
      <section className="section-modern landing-who-we-serve-v4">
        <div className="container-modern">
          <motion.div
            className="who-we-serve-header-v4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="who-we-serve-icon-wrapper-v4">
              <FaUsers />
            </div>
            <h2 className="who-we-serve-title-v4">Who We Serve</h2>
            <p className="who-we-serve-subtitle-v4">
              Entrepreneurs, SMEs, investors, and international companies looking to enter the UAE market with confidence and clarity.
            </p>
          </motion.div>

          <div className="who-we-serve-grid-v4">
            {[
              { 
                label: 'Entrepreneurs', 
                icon: <FaRocket />,
                description: 'Starting your business journey in the UAE',
                color: '#1B76F0'
              },
              { 
                label: 'SMEs', 
                icon: <FaChartLine />,
                description: 'Scaling and expanding your operations',
                color: '#0960d9'
              },
              { 
                label: 'Investors', 
                icon: <FaTrophy />,
                description: 'Strategic investment opportunities',
                color: '#0a4fb8'
              },
              { 
                label: 'International Companies', 
                icon: <FaGlobe />,
                description: 'Global expansion into the UAE market',
                color: '#1B76F0'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="who-we-serve-card-v4"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="who-we-serve-card-bg-v4" style={{ '--card-color': item.color }}></div>
                <div className="who-we-serve-card-content-v4">
                  <div className="who-we-serve-card-icon-v4">
                    {item.icon}
                  </div>
                  <h3 className="who-we-serve-card-title-v4">{item.label}</h3>
                  <p className="who-we-serve-card-desc-v4">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-modern landing-form-section">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">Get Started</span>
            <h2 className="section-title-modern">Connect With a Setup Expert</h2>
            <p className="section-description-modern">Get a tailored UAE business plan with clear next steps.</p>
          </motion.div>
          <ZohoForm pageName="build-grow-uae-business-expert-support" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage4
