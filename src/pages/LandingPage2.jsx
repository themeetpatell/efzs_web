import { motion } from 'framer-motion'
import { FaCheck, FaArrowRight, FaRocket, FaChartLine, FaGlobe, FaLightbulb, FaUsers, FaArrowUp, FaBuilding, FaHandshake } from 'react-icons/fa'
import ZohoForm from '../components/ZohoForm'

const LandingPage2 = () => {
  return (
    <div className="landing-page-2">
      {/* Hero Section - Asymmetric Layout */}
      <section className="landing-hero-v2">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="container-modern">
          <motion.div
            className="landing-hero-content-v2"
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
              Professional UAE Business Strategy
            </motion.span>

            <h1 className="landing-hero-title-v2">
              Launch, Scale & Expand in UAE — <span>With the Right Setup Guidance</span>
            </h1>

            <p className="landing-hero-subtitle-v2">
              Skip confusion. Get professional UAE business strategy and launch support tailored to your vision.
            </p>

            <div className="hero-benefits-preview-v2">
              <div className="benefit-preview-item">
                <FaArrowUp className="preview-icon" />
                <span>Scale Faster</span>
              </div>
              <div className="benefit-preview-item">
                <FaBuilding className="preview-icon" />
                <span>Expert Strategy</span>
              </div>
              <div className="benefit-preview-item">
                <FaHandshake className="preview-icon" />
                <span>Personalized Support</span>
              </div>
            </div>

            <motion.div
              className="hero-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <a 
                href="https://wa.me/971551690373?text=Hi%2C%20I%20want%20to%20book%20a%20strategic%20setup%20call%20for%20UAE%20business" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary btn-large"
              >
                Book Your Strategic Setup Call <FaArrowRight />
              </a>
              <a 
                href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary btn-large"
              >
                Get Started
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What You Gain - Gradient Cards */}
      <section className="section-modern landing-benefits-v2">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">What You Gain</span>
            <h2 className="section-title-modern">Expert Insights & Personalized Support</h2>
          </motion.div>

          <div className="benefits-v2-grid">
            {[
              {
                icon: <FaLightbulb />,
                title: 'Expert Insight',
                desc: 'Expert insight into Free Zone vs Mainland advantages for your business.',
                gradient: 'linear-gradient(135deg, #1B76F0 0%, #0960d9 100%)'
              },
              {
                icon: <FaChartLine />,
                title: 'Personalized Roadmap',
                desc: 'A personalized setup roadmap — realistic timelines & cost expectations.',
                gradient: 'linear-gradient(135deg, #0960d9 0%, #0848b8 100%)'
              },
              {
                icon: <FaGlobe />,
                title: 'Comprehensive Guidance',
                desc: 'Guidance on how to plan corporate banking, visa allocation, and compliance.',
                gradient: 'linear-gradient(135deg, #1B76F0 0%, #0960d9 100%)'
              },
              {
                icon: <FaRocket />,
                title: 'Ongoing Support',
                desc: 'Ongoing support to ensure smooth operations after setup.',
                gradient: 'linear-gradient(135deg, #0960d9 0%, #0848b8 100%)'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card-v2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                style={{ '--card-gradient': benefit.gradient }}
              >
                <div className="benefit-icon-wrapper-v2">
                  {benefit.icon}
                </div>
                <h3 className="benefit-title-v2">{benefit.title}</h3>
                <p className="benefit-desc-v2">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help - Timeline Style */}
      <section className="section-modern landing-how-we-help-v2">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">How We Help</span>
            <h2 className="section-title-modern">Comprehensive Business Setup Support</h2>
          </motion.div>

          <div className="landing-services-timeline-v2">
            {[
              {
                title: 'Free Zone Advisory',
                desc: 'Options matched to your sector and growth plans.',
                step: '01'
              },
              {
                title: 'Mainland Strategy',
                desc: 'Navigate regulations and market access with expert help.',
                step: '02'
              },
              {
                title: 'Operational Assistance',
                desc: 'Banking, visas, licensing framework explained.',
                step: '03'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="landing-service-timeline-item-v2"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="timeline-step-v2">{service.step}</div>
                <div className="timeline-content-v2">
                  <h3 className="service-card-title-v2">{service.title}</h3>
                  <p className="service-card-desc-v2">{service.desc}</p>
                </div>
                {index < 2 && <div className="timeline-connector-v2"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By - Stats Card */}
      <section className="section-modern landing-trusted-v2">
        <div className="container-modern">
          <motion.div
            className="landing-trusted-card-v2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="trusted-header-v2">
              <div className="trusted-icon-wrapper-v2">
                <FaUsers />
              </div>
              <h2 className="trusted-title-v2">Trusted By Global Founders</h2>
            </div>
            <p className="trusted-desc-v2">
              From startups to scaling firms — we guide diverse businesses to make informed decisions that save time and cost.
            </p>
            <div className="trusted-stats-v2">
              <div className="trusted-stat-item">
                <div className="trusted-stat-number">100+</div>
                <div className="trusted-stat-label">Businesses Guided</div>
              </div>
              <div className="trusted-stat-divider"></div>
              <div className="trusted-stat-item">
                <div className="trusted-stat-number">50+</div>
                <div className="trusted-stat-label">Countries Served</div>
              </div>
              <div className="trusted-stat-divider"></div>
              <div className="trusted-stat-item">
                <div className="trusted-stat-number">98%</div>
                <div className="trusted-stat-label">Satisfaction Rate</div>
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
            <h2 className="section-title-modern">Book Your Strategic Setup Call Today</h2>
            <p className="section-description-modern">Let’s build your UAE growth plan.</p>
          </motion.div>
          <ZohoForm pageName="launch-scale-expand-uae-setup-guidance" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage2
