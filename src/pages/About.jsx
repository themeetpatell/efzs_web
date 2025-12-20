import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  FaRocket,
  FaEye,
  FaBullseye,
  FaCheckCircle,
  FaArrowRight,
  FaUserTie,
  FaGavel,
  FaChartLine,
  FaUserCircle,
  FaHandshake,
  FaShieldAlt,
  FaClock,
  FaBuilding
} from 'react-icons/fa'

const About = () => {
  const heroHighlights = [
    { title: 'Transparent from day one', description: 'Fixed scopes, milestone-based billing, and proactive communication.' },
    { title: 'Built for the UAE', description: 'Free zone and mainland specialists who remove the guesswork.' },
    { title: 'Execution over paperwork', description: 'Licensing, visas, and banking handled by one squad that ships fast.' }
  ]

  const heroStats = [
    { value: '100+', label: 'Company launches delivered' },
    { value: '3-5 days', label: 'Average license timeline' },
    { value: '4.9/5', label: 'Client satisfaction' }
  ]

  const principles = [
    { icon: <FaBullseye />, title: 'Clarity first', description: 'We map the right jurisdiction, costs, and timelines before you commit.' },
    { icon: <FaShieldAlt />, title: 'Compliance built-in', description: 'Regulatory, KYC, and banking requirements baked into every milestone.' },
    { icon: <FaHandshake />, title: 'Partner-led guidance', description: 'Work directly with senior advisors who own outcomes, not tickets.' },
    { icon: <FaRocket />, title: 'Momentum always', description: 'Fast cycles, weekly recaps, and decisions made with you, not for you.' }
  ]

  const missionVision = [
    {
      icon: <FaBullseye />,
      title: 'Our Mission',
      description: 'Empower entrepreneurs with a predictable, transparent path to UAE market entry backed by experts who execute.'
    },
    {
      icon: <FaEye />,
      title: 'Our Vision',
      description: 'Be the most trusted launch partner in the region, known for clarity, speed, and world-class service long after incorporation.'
    }
  ]

  const process = [
    {
      phase: '01',
      title: 'Blueprint & fit',
      detail: 'We align on business model, free zone or mainland fit, and compliance requirements within 48 hours.'
    },
    {
      phase: '02',
      title: 'Licensing & clearances',
      detail: 'Applications, approvals, and banking dossiers handled in parallel with transparent progress updates.'
    },
    {
      phase: '03',
      title: 'Launch & sustain',
      detail: 'Visas, corporate bank activation, and renewal playbooks so you operate from day one.'
    }
  ]

  const teamMembers = [
    {
      name: 'Mohamed Ramshadali',
      role: 'Co-founder, Managing Director',
      description: 'Leading our company with extensive expertise in UAE business formation and strategic business development.',
      icon: <FaUserTie />
    },
    {
      name: 'Seba Nageeb',
      role: 'Legal Consultant',
      description: 'Expert legal consultant specializing in UAE business law and regulatory compliance with comprehensive knowledge of Free Zone regulations.',
      icon: <FaUserCircle />
    },
    {
      name: 'Deepanshu Mendiratta',
      role: 'Business Setup Advisor',
      description: 'Expert business advisor specializing in UAE company formation and Free Zone regulations.',
      icon: <FaUserTie />
    },
    {
      name: 'Fathimath Minha',
      role: 'Head of Marketing',
      description: 'Leading our marketing initiatives and client communication strategies to ensure exceptional service delivery.',
      icon: <FaUserCircle />
    }
  ]

  const capabilities = [
    { icon: <FaCheckCircle />, title: 'Company Formation', desc: 'Assisting in the establishment of businesses across various free zones in the UAE, ensuring compliance with all legal requirements.' },
    { icon: <FaGavel />, title: 'Licensing & Registration', desc: 'Managing the entire process of obtaining necessary licenses and registrations for your business operations.' },
    { icon: <FaRocket />, title: 'Visa Processing', desc: 'Facilitating visa applications for business owners, employees, and their families for a smooth relocation process.' },
    { icon: <FaChartLine />, title: 'Bank Account Assistance', desc: 'Guiding clients through corporate bank account opening with reputable financial institutions in the UAE.' }
  ]

  return (
    <div className="about-page-modern">
      <section className="about-hero-revamp">
        <div className="container-modern">
          <div className="hero-split-layout">
            <motion.div
              className="hero-left-content"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="hero-badge-pill"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="badge-dot"></span>
                Who We Are
              </motion.div>

              <h1 className="hero-mega-title">
                We Make UAE
                <span className="title-highlight"> Business Setup</span>
                <br />Simple & Fast
              </h1>

              <p className="hero-description">
                Your end-to-end partner for company formation, licensing, visas, and banking in the UAE. We've helped hundreds of entrepreneurs turn their UAE business dreams into reality.
              </p>

              <div className="hero-feature-list">
                {[
                  { icon: <FaCheckCircle />, text: 'Fast 3-day setup process' },
                  { icon: <FaCheckCircle />, text: '100% transparent pricing' },
                  { icon: <FaCheckCircle />, text: 'Expert guidance every step' }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="feature-item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                  >
                    {item.icon}
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="hero-cta-group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <a href="https://wa.me/971554182103?text=Hi%2C%20I%20want%20to%20start%20a%20company%20in%20UAE" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
                  Start Company in UAE <FaArrowRight />
                </a>
                <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                  Book A Free Consultation
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              className="hero-right-visual"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="visual-card card-1">
                <FaBuilding className="card-icon" />
                <h3>100+</h3>
                <p>Companies Launched</p>
              </div>
              <div className="visual-card card-2">
                <FaHandshake className="card-icon" />
                <h3>2-3 Days</h3>
                <p>Average Setup Time</p>
              </div>
              <div className="visual-card card-3">
                <FaShieldAlt className="card-icon" />
                <h3>100%</h3>
                <p>Legal Compliance</p>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="hero-bg-elements">
          <div className="bg-circle circle-1"></div>
          <div className="bg-circle circle-2"></div>
          <div className="bg-grid"></div>
        </div>
      </section>

      <section className="about-section">
        <div className="container-modern">
          <div className="section-header-modern about-centered-header">
            <span className="section-label-modern">What we stand for</span>
            <h2 className="section-title-modern">Principles that keep you moving</h2>
            <p className="section-description-modern">A modern, minimal canvas that keeps the blue-and-white theme while elevating clarity, structure, and energy.</p>
          </div>

          <div className="about-pillars-grid">
            {principles.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                className="about-pillars-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="pillar-icon">{pillar.icon}</div>
                <h3>{pillar.title}</h3>
                <p>{pillar.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section mission-vision-section">
        <div className="container-modern">
          <div className="mission-vision-grid">
            {missionVision.map((item, index) => (
              <motion.div
                key={item.title}
                className="mission-card"
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
              >
                <div className="mission-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section process-section">
        <div className="container-modern">
          <div className="section-header-modern about-centered-header">
            <span className="section-label-modern">How we work</span>
            <h2 className="section-title-modern">Execution in three clear moves</h2>
            <p className="section-description-modern">No noise—just a predictable sequence that keeps your UAE launch on time and on budget.</p>
          </div>

          <div className="process-grid">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                className="process-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
              >
                <div className="process-phase">{step.phase}</div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                <div className="process-accent" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section">
        <div className="container-modern">
          <div className="section-header-modern about-centered-header">
            <span className="section-label-modern">The people</span>
            <h2 className="section-title-modern">Meet the team behind the launches</h2>
            <p className="section-description-modern">Senior specialists who navigate regulations, banking, and marketing so you stay focused on growth.</p>
          </div>

          <div className="team-grid-new">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                className="team-item-new"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
              >
                <div className="team-avatar-new">{member.icon}</div>
                <h3 className="team-name-new">{member.name}</h3>
                <p className="team-role-new">{member.role}</p>
                <p className="team-description-new">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section capabilities-section">
        <div className="container-modern">
          <div className="section-header-modern about-centered-header">
            <span className="section-label-modern">What we deliver</span>
            <h2 className="section-title-modern">Comprehensive business setup solutions</h2>
            <p className="section-description-modern">End-to-end services designed to de-risk and accelerate your UAE expansion.</p>
          </div>

          <div className="services-list-new">
            {capabilities.map((item, index) => (
              <motion.div
                key={item.title}
                className="service-item-new"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <div className="service-icon-new">{item.icon}</div>
                <div className="service-content-new">
                  <h3 className="service-title-new">{item.title}</h3>
                  <p className="service-desc-new">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-modern about-cta-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="about-cta-card"
          >
            <h2 className="about-cta-title">Ready to start your UAE business journey?</h2>
            <p className="about-cta-desc">
              Join thousands of entrepreneurs who chose Easy Free Zone Setup for transparent, end-to-end company formation. We will guide
              you through every milestone with clarity and speed.
            </p>
            <div className="about-cta-buttons">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/contact" className="btn btn-primary btn-large">
                  Get Free Consultation <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/services" className="btn btn-primary btn-large">
                  View Our Services <FaArrowRight />
                </Link>
              </motion.div>
            </div>
            <div className="about-cta-accent" />
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
