import { motion } from 'framer-motion'
import { useEffect } from 'react'

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="content-wrapper"
        style={{ maxWidth: '900px', margin: '0 auto', padding: '100px 20px 60px' }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1a365d' }}>
          Terms of Use
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Last updated: January 28, 2026
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            By accessing and using the Easy Free Zone Setup website and services, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website or services.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            2. Description of Services
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Easy Free Zone Setup provides business setup services in the UAE, including but not limited to:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Free Zone company formation</li>
            <li>Mainland company setup</li>
            <li>Freelance visa processing</li>
            <li>Visa and immigration services</li>
            <li>Bank account opening assistance</li>
            <li>Tax registration and compliance</li>
            <li>Bookkeeping services</li>
            <li>Business consultation and advisory</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            3. User Responsibilities
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            When using our services, you agree to:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain the confidentiality of your account information</li>
            <li>Notify us immediately of any unauthorized use of your account</li>
            <li>Comply with all applicable UAE laws and regulations</li>
            <li>Use our services only for lawful purposes</li>
            <li>Not interfere with or disrupt our services or servers</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            4. Service Fees and Payment
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Service fees will be communicated to you before you commit to any service. Payment terms include:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Fees are subject to change and will be confirmed in writing</li>
            <li>Payment may be required in full or in installments as specified</li>
            <li>Government fees are separate from our service fees</li>
            <li>Refund policies will be detailed in your service agreement</li>
            <li>Late payments may incur additional charges</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            5. Intellectual Property
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            All content on this website, including text, graphics, logos, images, and software, is the property of Easy Free Zone Setup or its content suppliers and is protected by UAE and international copyright laws. You may not:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Reproduce, distribute, or modify any content without permission</li>
            <li>Use our trademarks or branding without authorization</li>
            <li>Create derivative works from our content</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            6. Disclaimer of Warranties
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Uninterrupted or error-free service</li>
            <li>Specific results or outcomes from our services</li>
            <li>That our services will meet your specific requirements</li>
            <li>The accuracy or completeness of information provided</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            While we strive for excellence, government processing times and approvals are beyond our control.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            7. Limitation of Liability
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            To the fullest extent permitted by law, Easy Free Zone Setup shall not be liable for:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Delays or failures in government processing</li>
            <li>Third-party actions or decisions</li>
            <li>Force majeure events</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Our total liability shall not exceed the amount paid by you for the specific service in question.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            8. Confidentiality
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We maintain strict confidentiality of all client information. However, you acknowledge that we may need to share certain information with:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Government authorities for license and visa processing</li>
            <li>Banks for account opening procedures</li>
            <li>Free zone authorities as required</li>
            <li>Professional advisors when necessary</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            9. Termination
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Violation of these Terms of Use</li>
            <li>Fraudulent or illegal activity</li>
            <li>Non-payment of fees</li>
            <li>Providing false information</li>
            <li>Any other reason we deem appropriate</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            10. Indemnification
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            You agree to indemnify and hold harmless Easy Free Zone Setup, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Your use of our services</li>
            <li>Your violation of these Terms of Use</li>
            <li>Your violation of any applicable laws</li>
            <li>Information you provide to us</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            11. Governing Law and Jurisdiction
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            These Terms of Use shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            12. Changes to Terms
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            13. Severability
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            14. Entire Agreement
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            These Terms of Use, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Easy Free Zone Setup regarding the use of our services.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            15. Contact Information
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', listStyle: 'none', paddingLeft: '0' }}>
            <li><strong>Email:</strong> admin@easyfreezonesetup.com</li>
            <li><strong>WhatsApp:</strong> +971 55 169 0373</li>
            <li><strong>Address:</strong> Dubai, UAE</li>
          </ul>
        </section>
      </motion.div>
    </div>
  )
}

export default TermsOfUse
