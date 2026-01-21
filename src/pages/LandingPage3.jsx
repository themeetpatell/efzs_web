import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaCheckCircle, FaUserTie, FaClock, FaComments, FaShieldAlt, FaRocket, FaAward, FaThumbsUp } from 'react-icons/fa'
import ZohoForm from '../components/ZohoForm'

const LandingPage3 = () => {
  return (
    <div className="landing-page-3">
      {/* Hero Section - Minimal Clean */}
      <section className="landing-hero-v3">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="container-modern">
          <motion.div
            className="landing-hero-content-v3"
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
              Simple & Fast UAE Business Setup
            </motion.span>
            
            <h1 className="landing-hero-title-v3">
              UAE Business Setup Guidance — <span>Made Simple, Fast & Clear</span>
            </h1>
            
            <p className="landing-hero-subtitle-v3">
              Your partner for straightforward planning, expert insights, and fully supported execution from idea to operational launch.
            </p>

            <div className="hero-simple-features-v3">
              <div className="simple-feature-item">
                <FaCheckCircle className="simple-feature-icon" />
                <span>No Confusing Jargon</span>
              </div>
              <div className="simple-feature-item">
                <FaCheckCircle className="simple-feature-icon" />
                <span>Clear Milestones</span>
              </div>
              <div className="simple-feature-item">
                <FaCheckCircle className="simple-feature-icon" />
                <span>Expert Support</span>
              </div>
            </div>

            <motion.div
              className="hero-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://wa.me/971551690373?text=Hi%2C%20I%20want%20to%20start%20with%20a%20free%20assessment%20for%20UAE%20business%20setup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-large"
              >
                Start with a Free Assessment <FaArrowRight />
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

      {/* Why Clients Choose Us - Icon Grid */}
      <section className="section-modern landing-why-v3">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">Why Clients Choose Us</span>
            <h2 className="section-title-modern">Straightforward Process, Expert Support</h2>
          </motion.div>

          <div className="landing-why-grid-v3">
            {[
              {
                icon: <FaCheckCircle />,
                title: 'Straightforward Process',
                desc: 'No confusing jargon; clear milestones.'
              },
              {
                icon: <FaUserTie />,
                title: 'Experienced Consultants',
                desc: 'Local UAE business landscape expertise.'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Personalized Support',
                desc: 'Plans that align with your budget and business model.'
              },
              {
                icon: <FaComments />,
                title: 'Hassle‑Free Communication',
                desc: 'We keep you informed every step.'
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                className="landing-why-card-v3"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="why-icon-wrapper-v3">
                  {reason.icon}
                </div>
                <h3 className="why-title-v3">{reason.title}</h3>
                <p className="why-desc-v3">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services - Clean List */}
      <section className="section-modern landing-core-services-v3">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">Core Services We Support</span>
            <h2 className="section-title-modern">Comprehensive Business Setup Services</h2>
          </motion.div>

          <div className="landing-services-list-v3">
            {[
              'Free Zone Selection & Business Activity Analysis',
              'Mainland Setup Advisory & Jurisdiction Planning',
              'Residency & Work Visas Direction',
              'Corporate Banking Insights & Compliance Support'
            ].map((service, index) => (
              <motion.div
                key={index}
                className="landing-service-item-v3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="service-icon-circle-v3">
                  <FaCheck />
                </div>
                <span className="service-text-v3">{service}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise - Visual Emphasis */}
      <section className="section-modern landing-promise-v3">
        <div className="container-modern">
          <motion.div
            className="landing-promise-card-v3"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="promise-visual-v3">
              <div className="promise-icon-wrapper-v3">
                <FaShieldAlt />
              </div>
              <div className="promise-badge-v3">
                <FaThumbsUp />
                <span>Our Promise</span>
              </div>
            </div>
            <div className="promise-content-v3">
              <h2 className="promise-title-v3">No Ambiguity.<br />No Delays.</h2>
              <p className="promise-desc-v3">
                Practical roadmap + expert support.<br />We make your UAE business setup<br />journey clear, fast, and stress-free.
              </p>
              <div className="promise-points-v3">
                <div className="promise-point">
                  <div className="promise-check-circle">
                    <FaCheck />
                  </div>
                  <span>Clear Communication</span>
                </div>
                <div className="promise-point">
                  <div className="promise-check-circle">
                    <FaCheck />
                  </div>
                  <span>Fast Execution</span>
                </div>
                <div className="promise-point">
                  <div className="promise-check-circle">
                    <FaCheck />
                  </div>
                  <span>Expert Guidance</span>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="section-title-modern">Start with a Free Assessment</h2>
            <p className="section-description-modern">Understand your best UAE business setup path.</p>
          </motion.div>
          <ZohoForm pageName="uae-business-setup-simple-fast-clear" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage3
