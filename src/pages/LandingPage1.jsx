import { FaArrowRight, FaShieldAlt, FaUsers, FaHandshake, FaChartLine, FaHeadset, FaAward, FaCheckCircle, FaMapMarkerAlt } from 'react-icons/fa'
import ZohoForm from '../components/ZohoForm'

const LandingPage1 = () => {
  return (
    <div className="landing-page-1">
      {/* Hero Section - Complete Redesign */}
      <section className="landing-hero-redesigned">
        <div className="hero-background-elements">
          <div className="hero-gradient-orb orb-1"></div>
          <div className="hero-gradient-orb orb-2"></div>
          <div className="hero-gradient-orb orb-3"></div>
          <div className="hero-grid-pattern"></div>
        </div>
        
        <div className="container-modern">
          <div className="hero-content-redesigned">
            {/* Badge */}
            <div className="hero-badge-redesigned">
              <div className="badge-pulse-dot"></div>
              <FaMapMarkerAlt className="badge-icon-redesigned" />
              <span>Trusted UAE Business Setup Guidance</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="hero-title-redesigned">
              <span className="title-line-1">Start & Grow Your</span>
              <span className="title-line-2">
                <span className="gradient-highlight">UAE Business</span> with
              </span>
              <span className="title-line-3">Trusted Setup Guidance</span>
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle-redesigned">
              Expert consultants helping global founders choose the right path in Free Zone and Mainland business setup without guesswork.
            </p>

            {/* Stats Grid */}
            <div className="hero-stats-redesigned">
              <div className="stat-card-redesigned">
                <div className="stat-icon-container">
                  <FaUsers className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-value-redesigned">100+</div>
                  <div className="stat-text-redesigned">Companies Setup</div>
                </div>
              </div>
              <div className="stat-card-redesigned">
                <div className="stat-icon-container">
                  <FaCheckCircle className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-value-redesigned">2-3</div>
                  <div className="stat-text-redesigned">Days Setup</div>
                </div>
              </div>
              <div className="stat-card-redesigned">
                <div className="stat-icon-container">
                  <FaShieldAlt className="stat-icon" />
                </div>
                <div className="stat-info">
                  <div className="stat-value-redesigned">100%</div>
                  <div className="stat-text-redesigned">Legal Compliance</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-redesigned">
              <a 
                href="https://wa.me/971551690373?text=Hi%2C%20I%20want%20to%20get%20free%20consultancy%20for%20UAE%20business%20setup" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary-redesigned"
              >
                <span>Get Your Free Consultancy Call</span>
                <FaArrowRight className="btn-arrow" />
                <div className="btn-shine"></div>
              </a>
              <a 
                href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-secondary-redesigned"
              >
                <span>Book Consultation</span>
                <FaArrowRight className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Us - Enhanced Grid */}
      <section className="section-modern landing-features-v1">
        <div className="container-modern">
          <div className="section-header-modern">
            <span className="section-label-modern">Why Work With Us</span>
            <h2 className="section-title-modern">Practical Guidance Through Every Step</h2>
            <p className="section-description-modern">Trusted by entrepreneurs worldwide for transparent, expert business setup guidance</p>
          </div>

          <div className="landing-features-grid-v1">
            {[
              {
                icon: <FaChartLine />,
                title: 'Practical Guidance',
                desc: 'Practical guidance through every step of UAE business setup planning.',
                color: '#1B76F0'
              },
              {
                icon: <FaHandshake />,
                title: 'Tailored Recommendations',
                desc: 'Tailored recommendations for Free Zone or Mainland based on your goals.',
                color: '#0960d9'
              },
              {
                icon: <FaShieldAlt />,
                title: 'Transparent Pricing',
                desc: 'Transparent pricing and no hidden surprises throughout the process.',
                color: '#1B76F0'
              },
              {
                icon: <FaHeadset />,
                title: 'Comprehensive Support',
                desc: 'Support with visas, corporate banking info, local compliance, and operational planning.',
                color: '#0960d9'
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="landing-feature-card-v1"
              >
                <div className="feature-icon-wrapper-v1">
                  {feature.icon}
                </div>
                <h3 className="feature-title-v1">{feature.title}</h3>
                <p className="feature-desc-v1">{feature.desc}</p>
                <div className="feature-accent-v1"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do - Enhanced List */}
      <section className="section-modern landing-what-we-do-v1">
        <div className="container-modern">
          <div className="section-header-modern">
            <span className="section-label-modern">What We Do</span>
            <h2 className="section-title-modern">We Help Businesses With</h2>
          </div>

          <div className="landing-services-list-v1">
            {[
              'Choosing the best jurisdiction (Free Zone, Mainland or Offshore)',
              'Understanding license types for your activities',
              'Step‑by‑step setup strategy and documentation support',
              'Assistance with visas, bank account setup insights, and long‑term compliance guidance'
            ].map((service, index) => (
              <div
                key={index}
                className="landing-service-item-v1"
              >
                <div className="service-number-v1">{index + 1}</div>
                <span className="service-text-v1">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve - Enhanced Card */}
      <section className="section-modern landing-who-we-serve-v1">
        <div className="container-modern">
          <div className="landing-audience-card-v1">
            <div className="audience-header-v1">
              <div className="audience-icon-wrapper-v1">
                <FaUsers />
              </div>
              <h2 className="audience-title-v1">Who We Serve</h2>
            </div>
            <p className="audience-desc-v1">
              Entrepreneurs, SMEs, investors, and international companies looking to enter the UAE market with confidence and clarity.
            </p>
            <div className="audience-badges-v1">
              <span className="audience-badge">Entrepreneurs</span>
              <span className="audience-badge">SMEs</span>
              <span className="audience-badge">Investors</span>
              <span className="audience-badge">International Companies</span>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-modern landing-form-section">
        <div className="container-modern">
          <div className="section-header-modern">
            <span className="section-label-modern">Get Started</span>
            <h2 className="section-title-modern">Get Your Free Consultancy Call</h2>
            <p className="section-description-modern">Let’s map your business blueprint in the UAE today.</p>
          </div>
          <ZohoForm pageName="start-grow-uae-business-trusted-guidance" />
        </div>
      </section>
    </div>
  )
}

export default LandingPage1
