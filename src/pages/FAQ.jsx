import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaChevronDown, FaQuestionCircle, FaSearch, FaComments, FaPhone, FaTimes } from 'react-icons/fa'

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [openItems, setOpenItems] = useState(new Set())

  const categories = [
    'All',
    'Setup Process',
    'Pricing',
    'Documentation',
    'Ownership',
    'Renewal',
    'Business Activities',
    'Office Requirements',
    'Company Types',
    'Visas'
  ]

  const faqs = [
    {
      id: 1,
      question: 'What documents are required for UAE free zone company formation?',
      answer: 'The required documents typically include: passport copies of all shareholders and directors, passport-size photographs, proof of address (utility bill or bank statement), business plan or activity description, and any additional documents specific to your chosen free zone. Some free zones may also require educational certificates or professional qualifications depending on the business activity.',
      category: 'Documentation'
    },
    {
      id: 2,
      question: 'How long does it take to set up a company in a UAE free zone?',
      answer: 'The setup process typically takes 2-3 working days for most free zones. However, this can vary depending on the free zone authority, the complexity of your business activity, and the completeness of your documentation. Some free zones offer express services that can complete the process in 24 hours, while others may take up to 5-7 working days.',
      category: 'Setup Process'
    },
    {
      id: 3,
      question: 'What is the cost of setting up a company in a UAE free zone?',
      answer: 'Costs vary significantly by free zone and business activity. Basic packages typically range from AED 5,500 to AED 15,000 per year. This usually includes license fees, registration, and basic services. Additional costs may include visa fees (AED 1,000-3,000 per visa), office space (if required), and optional services like bank account opening assistance. We provide transparent pricing with no hidden fees.',
      category: 'Pricing'
    },
    {
      id: 4,
      question: 'Can I have 100% foreign ownership in a UAE free zone?',
      answer: 'Yes, one of the main advantages of UAE free zones is that they allow 100% foreign ownership. You can own your company completely without requiring a local partner or sponsor. This gives you full control over your business decisions, profits, and operations.',
      category: 'Ownership'
    },
    {
      id: 5,
      question: 'Do I need a physical office to set up a free zone company?',
      answer: 'Most free zones offer flexi-desk or virtual office packages, meaning you don\'t need a physical office space. However, this depends on your business activity and the specific free zone. Some activities may require a physical office, while others can operate with a virtual office or flexi-desk arrangement. We can help you choose the best option for your business needs.',
      category: 'Office Requirements'
    },
    {
      id: 6,
      question: 'What business activities can I conduct in a free zone?',
      answer: 'Free zones offer a wide range of business activities including trading, consultancy, IT services, e-commerce, media, education, healthcare, manufacturing, and many more. Each free zone has its own list of permitted activities. Some activities may be restricted to specific free zones, while others are available across multiple zones. We can help you identify the best free zone for your specific business activity.',
      category: 'Business Activities'
    },
    {
      id: 7,
      question: 'How many visas can I get with my free zone company?',
      answer: 'The number of visas depends on your license type and the free zone. Most free zones offer packages that include 1-3 visas, with options to add more. Some free zones offer unlimited visa eligibility based on your office space or license type. We can help you understand the visa options available for your chosen free zone and business activity.',
      category: 'Visas'
    },
    {
      id: 8,
      question: 'What is the difference between a free zone and mainland company?',
      answer: 'Free zone companies offer 100% foreign ownership, tax benefits, and streamlined setup processes, but are typically limited to B2B activities and cannot directly trade with the UAE mainland. Mainland companies can trade throughout the UAE and with the mainland, but may require a local partner (in some sectors) and have different tax obligations. Free zones are ideal for international businesses, while mainland is better for local market access.',
      category: 'Company Types'
    },
    {
      id: 9,
      question: 'How do I renew my free zone license?',
      answer: 'License renewal is typically required annually. The renewal process involves submitting updated documents, paying renewal fees, and ensuring all compliance requirements are met. Renewal fees are usually similar to initial setup costs. We handle the entire renewal process for our clients, ensuring timely renewal and continued compliance.',
      category: 'Renewal'
    },
    {
      id: 10,
      question: 'Can I open a bank account with a free zone company?',
      answer: 'Yes, you can open a corporate bank account with a free zone company. However, the process and requirements vary by bank. Most banks require your trade license, company documents, passport copies, proof of address, and sometimes a business plan. Some banks may require a minimum deposit or have specific requirements. We provide bank account opening assistance to help streamline this process.',
      category: 'Setup Process'
    },
    {
      id: 11,
      question: 'What are the tax implications for free zone companies?',
      answer: 'UAE free zones offer significant tax benefits. Most free zones provide 0% corporate tax, 0% personal income tax, and 0% capital gains tax. However, with the introduction of UAE Corporate Tax in 2023, some free zone companies may be subject to corporate tax unless they qualify for the free zone person exemption. We can help you understand the tax implications specific to your business.',
      category: 'Pricing'
    },
    {
      id: 12,
      question: 'Can I change my business activity after company formation?',
      answer: 'Yes, you can change or add business activities, but this requires submitting an application to the free zone authority and paying additional fees. The process typically takes 2-5 working days. Some activities may require additional approvals or documentation. We can assist with activity changes and ensure all regulatory requirements are met.',
      category: 'Business Activities'
    },
    {
      id: 13,
      question: 'Do I need to be physically present in UAE to set up the company?',
      answer: 'No, most free zones allow remote setup without requiring your physical presence. You can complete the entire process online by providing scanned copies of documents and signing digitally. However, some free zones or specific activities may require physical presence for certain steps. We handle the entire process remotely for most clients.',
      category: 'Setup Process'
    },
    {
      id: 14,
      question: 'What happens if I don\'t renew my license on time?',
      answer: 'Late renewal can result in penalties, fines, and in extreme cases, license cancellation. Penalties typically start accumulating after the renewal deadline and increase over time. It\'s crucial to renew on time to avoid additional costs and maintain your company\'s legal status. We send timely reminders and handle renewals proactively for our clients.',
      category: 'Renewal'
    },
    {
      id: 15,
      question: 'Can I operate outside the free zone with a free zone license?',
      answer: 'Free zone companies can conduct business internationally and with other free zones, but direct trading with UAE mainland requires special approval or a mainland trading license. Some free zones offer dual licensing options that allow both free zone and limited mainland trading. We can help you understand the trading restrictions and options available.',
      category: 'Business Activities'
    },
    {
      id: 16,
      question: 'What is the minimum capital requirement for free zone companies?',
      answer: 'Most UAE free zones do not require a minimum share capital. However, some free zones or specific business activities may have minimum capital requirements. The capital can be in any currency and doesn\'t need to be deposited in a bank account. We can clarify the capital requirements for your chosen free zone and activity.',
      category: 'Pricing'
    },
    {
      id: 17,
      question: 'How do I apply for a UAE residence visa through my free zone company?',
      answer: 'Once your company is established, you can apply for residence visas for yourself, employees, and dependents. The process involves obtaining entry permits, medical fitness tests, Emirates ID registration, and visa stamping. The number of visas depends on your license type. We provide complete visa processing services, handling all documentation and government submissions.',
      category: 'Visas'
    },
    {
      id: 18,
      question: 'Can I have multiple business activities under one license?',
      answer: 'Yes, most free zones allow multiple business activities under a single license. However, there may be restrictions on combining certain activities, and additional fees may apply for each activity. Some free zones offer activity packages that include multiple related activities. We can help you structure your license to include all necessary activities.',
      category: 'Business Activities'
    },
    {
      id: 19,
      question: 'What is the difference between a flexi-desk and virtual office?',
      answer: 'A flexi-desk provides access to a physical workspace on a part-time basis (e.g., 5-10 days per month), while a virtual office provides a business address and mail handling services without physical workspace access. Both options are cost-effective alternatives to a full office. The choice depends on whether you need occasional physical workspace access.',
      category: 'Office Requirements'
    },
    {
      id: 20,
      question: 'Can I convert my free zone company to a mainland company?',
      answer: 'Yes, it\'s possible to convert a free zone company to a mainland company, but this involves closing the free zone company and establishing a new mainland entity. The process requires meeting mainland requirements, which may include having a local partner depending on the activity. We can guide you through the conversion process if needed.',
      category: 'Company Types'
    },
    {
      id: 21,
      question: 'What support services do you provide after company setup?',
      answer: 'We provide ongoing support including license renewals, visa processing, bank account assistance, corporate tax registration and filing, VAT registration and filing, bookkeeping services, and business liquidation support. Our team is available 24/7 to assist with any questions or requirements that arise after your company is established.',
      category: 'Setup Process'
    },
    {
      id: 22,
      question: 'Are there any restrictions on repatriating profits from a free zone company?',
      answer: 'No, there are no restrictions on repatriating profits or capital from UAE free zone companies. You can freely transfer funds internationally without any limitations. This is one of the key advantages of operating in a UAE free zone.',
      category: 'Ownership'
    },
    {
      id: 23,
      question: 'What is the process for closing or liquidating a free zone company?',
      answer: 'The liquidation process involves settling all outstanding obligations, canceling visas, closing bank accounts, submitting cancellation applications to the free zone authority, and obtaining clearance certificates. The process typically takes 2-4 weeks. We provide complete liquidation services, ensuring all legal requirements are met and the process is completed smoothly.',
      category: 'Renewal'
    },
    {
      id: 24,
      question: 'Do I need to register for VAT as a free zone company?',
      answer: 'VAT registration is mandatory if your annual taxable supplies exceed AED 375,000, or if you expect to exceed this threshold. Even if below the threshold, voluntary registration is possible. Free zone companies are generally subject to VAT unless they qualify for specific exemptions. We provide VAT registration and filing services to ensure compliance.',
      category: 'Pricing'
    },
    {
      id: 25,
      question: 'Can I add or remove shareholders after company formation?',
      answer: 'Yes, you can add or remove shareholders after company formation. This requires submitting an application to the free zone authority, updating the company\'s memorandum of association, and paying applicable fees. The process typically takes 3-5 working days. We can assist with shareholder changes and ensure all documentation is properly updated.',
      category: 'Ownership'
    }
  ]

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'All' || faq.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <div className="faq-page-modern">
      <section className="page-hero-modern">
        <div className="hero-background-modern">
          <div className="hero-gradient-orb"></div>
        </div>
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="page-hero-content-modern"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-badge-modern"
            >
              Frequently Asked Questions
            </motion.span>
            <h1 className="hero-title-modern">Dubai Free Zone Company Setup FAQs</h1>
            <p className="hero-subtitle-modern">
              Get answers to the most common questions about UAE business formation, free zone company setup costs, and business licensing requirements.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="faq-section-modern">
        <div className="container-modern">
          <div className="faq-filters-modern">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`btn btn-filter tab-chip ${selectedCategory === category ? 'active' : ''}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="faq-search-modern">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search for questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="faq-search-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="search-clear-btn"
              >
                <FaTimes />
              </button>
            )}
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="faq-items-modern"
          >
            <AnimatePresence>
              {filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq) => (
                  <motion.div
                    key={faq.id}
                    variants={itemVariants}
                    exit={{ opacity: 0, height: 0 }}
                    className="faq-item-modern"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className={`faq-question-modern ${openItems.has(faq.id) ? 'open' : ''}`}
                    >
                      <div className="faq-question-content">
                        <FaQuestionCircle className="faq-icon" />
                        <span className="faq-question-text">{faq.question}</span>
                      </div>
                      <span className="faq-category-badge">{faq.category}</span>
                      <motion.div
                        animate={{ rotate: openItems.has(faq.id) ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq-chevron"
                      >
                        <FaChevronDown />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openItems.has(faq.id) && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="faq-answer-modern"
                        >
                          <p>{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="faq-no-results"
                >
                  <FaQuestionCircle className="no-results-icon" />
                  <h3>No FAQs found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="faq-cta-modern"
          >
            <div className="faq-cta-icon-wrapper">
              <FaQuestionCircle className="faq-cta-icon" />
            </div>
            <h2 className="faq-cta-title">Get Your Questions Answered</h2>
            <p className="faq-cta-desc">Everything you need to know about UAE business setup</p>
          </motion.div>
        </div>
      </section>

      <section className="faq-support-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="faq-support-content"
          >
            <h2 className="faq-support-title">Still Have Questions?</h2>
            <p className="faq-support-desc">
              Our UAE business setup experts are here to help you 24/7. Get personalized advice for your specific business needs.
            </p>
            <div className="faq-support-buttons">
              <motion.a
                href="https://wa.me/971551690373"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaComments />
                Live Chat Support
              </motion.a>
              <motion.a
                href="tel:+971551690373"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call +971 55 169 0373
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FAQ
