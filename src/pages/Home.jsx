import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheck, FaArrowRight, FaShieldAlt, FaClock, FaUsers, FaDollarSign, FaHeadset, FaStar, FaBuilding, FaIdCard, FaHandshake, FaGlobe, FaBriefcase, FaFileAlt, FaCalculator, FaBalanceScale } from 'react-icons/fa'
import TestimonialCarousel from '../components/TestimonialCarousel'
import CostCalculator from './CostCalculator'

const Home = () => {
  // Actual Free Zone pricing from reference
  const freeZones = [
    { name: 'Meydan Free Zone', price: '12,500', location: 'Dubai' },
    { name: 'IFZA Free Zone', price: '12,900', location: 'Dubai' },
    { name: 'Sharjah Publishing City (SPC)', price: '5,750', location: 'Sharjah' },
    { name: 'Masdar City Free Zone', price: '7,000', location: 'Abu Dhabi' },
    { name: 'Ajman Free Zone', price: '5,555', location: 'Ajman' },
    { name: 'RAKEZ Free Zone', price: '6,010', location: 'Ras Al Khaimah' },
    { name: 'UAQ Free Zone', price: '5,500', location: 'Umm Al Quwain' },
    { name: 'Creative City Free Zone', price: '5,530', location: 'Fujairah' },
  ]

  const emirates = [
    {
      name: 'Dubai',
      zones: ['Meydan Free Zone', 'IFZA Free Zone'],
      description: 'Dubai is home to more than 30 free zones, making it the most diverse emirate for investors. Some of the best options include Meydan Free Zone and IFZA (International Free Zone Authority).'
    },
    {
      name: 'Abu Dhabi',
      zones: ['Masdar City'],
      description: 'Abu Dhabi has over 8 major free zones. Masdar City Free Zone is a pioneering hub for sustainability, clean energy, technology, and innovation, offering a forward-looking ecosystem with world-class facilities.'
    },
    {
      name: 'Sharjah',
      zones: ['SPC Free Zone', 'Sharjah Media City'],
      description: 'Sharjah operates around 6 free zones. SPC Free Zone offers more than 1,500 business activities, covering trading, consultancy, media, IT, e-commerce, and service sectors.'
    },
    {
      name: 'Ajman',
      zones: ['Ajman Free Zone'],
      description: 'Ajman Free Zone has become well-known for its affordable setup options for small entrepreneurs. Suitable for trading, consultancy, e-commerce, and freelancers.'
    },
    {
      name: 'Ras Al Khaimah',
      zones: ['RAKEZ'],
      description: 'RAKEZ is known for being one of the most cost-effective free zones in the UAE, offering licenses for industrial, manufacturing, trading, education, media, and service-oriented businesses.'
    },
    {
      name: 'Fujairah',
      zones: ['Creative City'],
      description: 'Fujairah Creative City is ideal for media, consultancy, IT services, and freelancers, offering packages without the need for physical office space.'
    },
    {
      name: 'Umm Al Quwain',
      zones: ['UAQ FTZ'],
      description: 'UAQ Free Trade Zone is popular for its simple, affordable, and flexible setup options. Particularly attractive for freelancers, small traders, startups, and consultancy businesses.'
    }
  ]

  const services = [
    { num: '01', title: 'UAE Free Zone Business Setup', desc: 'Assistance in establishing your company in a UAE Free Zone with full licensing, compliance, and registration support.' },
    { num: '02', title: 'UAE Mainland Business Setup', desc: 'Complete support for setting up your business in the UAE Mainland, including licensing, local approvals, and legal requirements.' },
    { num: '03', title: 'Resident Visa Processing', desc: 'End-to-end assistance with obtaining your UAE resident visa, including document preparation and government submissions.' },
    { num: '04', title: 'Basic Health Insurance', desc: 'Guidance and support in securing mandatory basic health insurance for you and your employees.' },
    { num: '05', title: 'Bank Account Opening Assistance', desc: 'Professional support in opening corporate and personal bank accounts in UAE banks smoothly and efficiently.' },
    { num: '06', title: 'Corporate Tax Registration and Filing', desc: 'Complete assistance with registering your company for corporate tax and filing returns in compliance with UAE laws.' },
    { num: '07', title: 'VAT Registration and Filing', desc: 'Help with VAT registration, filing, and compliance to ensure your business meets all UAE tax requirements.' },
    { num: '08', title: 'Bookkeeping Services', desc: 'Accurate and timely bookkeeping to manage your financial records, transactions, and reporting needs.' },
    { num: '09', title: 'Business Liquidation and Deregistration', desc: 'Support in closing your business legally, handling deregistration, and clearing any outstanding obligations.' },
  ]

  const testimonials = [
    {
      text: "I've had an outstanding experience with Easy Free Zone Setup FZC LLC, and much of that is thanks to Deepanshu's exceptional customer service. The company demonstrates professionalism and efficiency. Available 24/7, he's always responsive, knowledgeable, and willing to go above and beyond.",
      name: 'Aman',
      country: 'NO'
    },
    {
      text: "Very clear and concise information providing the information requested and more when looking at changing regulatory authorities for trade license with commercials in mind.",
      name: 'Adam Long',
      country: 'ES'
    },
    {
      text: "Excellent Service, very efficient and they keep you informed throughout the process. Would highly recommend. The agent who dealt with my case was very responsive and helpful.",
      name: 'Mark',
      country: 'GB'
    },
    {
      text: "If you are looking to set up tax residence in UAE, Ramshad is the man! A lot of companies over charge and can be dodgy, Ramshad is a real deal and went above and beyond and I was set up in pretty much a month!",
      name: 'Alex P',
      country: 'GB'
    },
    {
      text: "Ramshad at Easy Free Zone setup made the process of setting up our LLC's in the UAE so easy. Honest, transparent and always went above and beyond, responding to the million questions we had, there were also no hidden charges.",
      name: 'Alisha Cooke',
      country: 'GB'
    }
  ]

  return (
    <div className="home-page-modern">
      
      {/* HERO */}
      <section className="hero-modern">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="hero-container-modern">
          <motion.div 
            className="hero-content-modern"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-title-modern">
                Launch Your Business in the UAE — <span>Fast, Simple, 100% Legal</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle-modern"
            >
              From company formation to visas and banking — we handle everything so you can focus on growth
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-stats-inline"
            >
              <div className="stat-badge">
                <FaClock />
                <span>2-3 Days Setup</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-badge">
                <FaStar />
                <span>100+ Companies</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-badge">
                <FaShieldAlt />
                <span>100% Legal</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-cta-buttons"
            >
              <a href="https://wa.me/971554182103?text=Hi%2C%20I%20want%20to%20start%20a%20company%20in%20UAE" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <FaArrowRight /> Start Company in UAE
              </a>
              <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Book Free Consultation
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FREE ZONES */}
      <section className="section-modern freezones-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Free Zones</span>
            <h2 className="section-title-modern">Best UAE Free Zone Locations</h2>
            <p className="section-description-modern">Join thousands of successful entrepreneurs who chose us for their UAE business setup. We provide end-to-end solutions for Dubai Free Zone company formation with guaranteed results.</p>
          </motion.div>

          <div className="freezones-grid-modern">
            {freeZones.map((zone, index) => (
              <motion.div 
                key={index}
                className="freezone-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <h3 className="zone-name-modern">{zone.name}</h3>
                <div className="zone-price-modern">
                  <span className="zone-price-label">Starting from</span>
                  <span className="zone-price-amount">AED {zone.price}</span>
                </div>
                <Link to="/contact" className="btn btn-primary btn-zone-card">
                  Register my company <FaArrowRight />
                </Link>
                <div className="zone-accent-modern"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 EMIRATES */}
      <section className="section-modern emirates-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Feature</span>
            <h2 className="section-title-modern">About 7 Emirates Free Zone</h2>
            <p className="section-description-modern">7 Emirates • 7+ freezones • Unlimited Opportunities</p>
          </motion.div>

          <div className="emirates-slider-wrapper">
            <motion.div 
              className="emirates-grid-modern"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
            >
              {[...emirates, ...emirates].map((emirate, index) => (
                <div 
                  key={index}
                  className="emirate-card-modern"
                >
                  <h3 className="emirate-name-modern">{emirate.name}</h3>
                  <div className="emirate-highlights-modern">
                    <span className="emirate-label-modern">Key Highlights</span>
                    <div className="zones-tags-modern">
                      {emirate.zones.map((zone, i) => (
                        <span
                          key={i}
                          className="zone-tag-modern"
                        >
                          {zone}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="emirate-desc-modern">{emirate.description}</p>
                  <div className="emirate-accent-modern"></div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section-modern services-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">One Stop Solution</span>
            <h2 className="section-title-modern">Our Services</h2>
          </motion.div>

          <div className="services-grid-modern-home">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card-modern-home"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <span className="service-num-modern">{service.num}</span>
                <h3 className="service-title-modern-home">{service.title}</h3>
                <p className="service-desc-modern-home">{service.desc}</p>
                <div className="service-accent-modern-home"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section-modern why-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Why Choose Easy Free Zone Setup?</span>
            <h2 className="section-title-modern">Dubai's Leading Free Zone Company Formation Experts</h2>
            <p className="section-description-modern">Join thousands of successful entrepreneurs who chose us for their UAE business setup. We provide end-to-end solutions for Dubai Free Zone company formation with guaranteed results.</p>
          </motion.div>

          <div className="why-grid-modern">
            {[
              { icon: <FaClock />, title: 'Fast Setup in 2-3 Days', desc: 'Quick and streamlined business registration process with all documentation handled professionally.', label: 'Execution Speed' },
              { icon: <FaUsers />, title: 'Expert Guidance', desc: 'Professional consultants specializing in UAE business formation, licensing, and regulatory compliance.', label: 'Expertise' },
              { icon: <FaDollarSign />, title: 'Transparent Pricing', desc: 'No hidden charges. We provide a transparent breakdown of costs, offering the same rates as free zone authorities.', label: 'Best Pricing' },
              { icon: <FaShieldAlt />, title: '100% Ownership', desc: 'Full foreign ownership in UAE Free Zones with complete control over your business decisions.', label: 'Full Control' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="why-card-modern"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <motion.div
                  className="why-icon-modern"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="why-title-modern">{item.title}</h3>
                <p className="why-desc-modern">{item.desc}</p>
                <span className="why-label-modern">{item.label}</span>
                <div className="why-accent-modern"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-modern testimonials-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Testimonials</span>
            <h2 className="section-title-modern">Loved by Founders</h2>
          </motion.div>

          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FREE ZONE VS MAINLAND */}
      <section className="section-modern comparison-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Comparison</span>
            <h2 className="section-title-modern">Difference Between Free Zone and Mainland</h2>
            <p className="section-description-modern">Understanding the key differences between UAE Free Zone and Mainland business setup to make the right choice for your business venture.</p>
          </motion.div>

          <div className="comparison-cards-modern">
            <motion.div 
              className="comparison-card-modern comparison-card-freezone"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="card-icon-modern"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaBuilding />
              </motion.div>
              <h3 className="comparison-title-modern">UAE Free Zone</h3>
              <p className="comparison-subtitle-modern">Perfect for international businesses seeking 100% ownership and tax benefits</p>
              <ul className="comparison-list-modern">
                <li><FaCheck /> 100% foreign ownership</li>
                <li><FaCheck /> Tax-free environment</li>
                <li><FaCheck /> Easy repatriation of capital</li>
                <li><FaCheck /> Streamlined setup process</li>
              </ul>
              <div className="comparison-accent-modern"></div>
            </motion.div>
            <motion.div 
              className="comparison-card-modern comparison-card-mainland"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className="card-icon-modern"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <FaGlobe />
              </motion.div>
              <h3 className="comparison-title-modern">UAE Mainland</h3>
              <p className="comparison-subtitle-modern">Ideal for businesses targeting the local UAE market with full access</p>
              <ul className="comparison-list-modern">
                <li><FaCheck /> Full UAE market access</li>
                <li><FaCheck /> Government contract eligibility</li>
                <li><FaCheck /> No geographical restrictions</li>
                <li><FaCheck /> Wider business activity scope</li>
              </ul>
              <div className="comparison-accent-modern"></div>
            </motion.div>
          </div>

          <motion.div 
            className="comparison-details-wrapper"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="comparison-header-modern"
            >
              <h3 className="comparison-header-title">Detailed Comparison</h3>
              <p className="comparison-header-desc">Comprehensive comparison to help you make the right business decision</p>
            </motion.div>
            
            <div className="comparison-aspects-grid">
              {[
                {
                  aspect: 'Ownership',
                  freezone: '100% foreign ownership permitted',
                  mainland: '100% foreign ownership in most sectors'
                },
                {
                  aspect: 'Office Requirements',
                  freezone: 'No Need of Physical Office',
                  mainland: 'Physical Office is Mandatory'
                },
                {
                  aspect: 'Business Scope',
                  freezone: 'Mostly designed for B2B, except some business activities',
                  mainland: 'Designed for B2B and B2C'
                },
                {
                  aspect: 'Taxes',
                  freezone: 'There are a few exceptions; however, all applicable UAE taxes will apply',
                  mainland: 'All UAE taxes applicable'
                },
                {
                  aspect: 'Visa Flexibility',
                  freezone: 'Multiple visa eligibility available without a physical office',
                  mainland: 'Visa eligibility available depends on office size'
                },
                {
                  aspect: 'Licensing and Procedures',
                  freezone: '2 to 3 working days without physical presence of shareholders',
                  mainland: '5 to 10 working days with physical presence of shareholders'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="comparison-aspect-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="aspect-header-card">
                    <div className="aspect-number">0{index + 1}</div>
                    <h4 className="aspect-title">{item.aspect}</h4>
              </div>
              
                  <div className="comparison-options">
                    <div className="comparison-option freezone-option">
                      <div className="option-header">
                        <FaBuilding className="option-icon" />
                        <span className="option-label">Free Zone</span>
                </div>
                      <p className="option-text">{item.freezone}</p>
              </div>
              
                    <div className="comparison-divider">
                      <span className="divider-text">VS</span>
              </div>
              
                    <div className="comparison-option mainland-option">
                      <div className="option-header">
                        <FaGlobe className="option-icon" />
                        <span className="option-label">Mainland</span>
                </div>
                      <p className="option-text">{item.mainland}</p>
                </div>
              </div>
              
                  <div className="aspect-accent-line"></div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="comparison-note-card"
            >
              <div className="note-icon">💡</div>
              <div className="note-content">
                <strong>Note:</strong> Information presented as factual comparison. Consult with business setup experts to determine the best option for your specific requirements.
            </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* COST CALCULATOR */}
      <section className="section-modern calculator-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Cost Calculator</span>
            <h2 className="section-title-modern">Get Your Instant Free Zone Setup Quote</h2>
            <p className="section-description-modern">Calculate your business setup costs in minutes. Get a detailed quotation instantly.</p>
          </motion.div>
          <CostCalculator />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="cta-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content-modern"
          >
            <h2 className="cta-title-modern">Start Your UAE Business Today</h2>
            <p className="cta-desc-modern">Free consultation • Fast setup • 100% transparency</p>
            <div className="cta-buttons-group">
              <a href="https://wa.me/971554182103?text=Hi%2C%20I%20want%20to%20start%20a%20company%20in%20UAE" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <FaArrowRight /> Get Started Now
              </a>
              <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-large">
                Book Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Home
