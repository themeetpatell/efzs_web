import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaPhone, FaArrowRight } from 'react-icons/fa'

const FloatingButtons = () => {
  const whatsappNumber = '971554182103'
  const phoneNumber = '+971554182103'
  const whatsappMessage = encodeURIComponent('Hello! I would like to know more about your services.')

  return (
    <>
      <div className="floating-buttons">
        <motion.a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn floating-btn-whatsapp"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>
        <motion.a
          href={`tel:${phoneNumber}`}
          className="floating-btn floating-btn-call"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Call"
        >
          <FaPhone />
        </motion.a>
      </div>

      {/* Sticky Bottom CTA */}
      <motion.div
        className="sticky-bottom-cta"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <Link to="/calculator" className="sticky-cta-btn">
          <span>Start Company in Dubai</span>
          <FaArrowRight />
        </Link>
      </motion.div>
    </>
  )
}

export default FloatingButtons


