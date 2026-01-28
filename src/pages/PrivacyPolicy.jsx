import { motion } from 'framer-motion'
import { useEffect } from 'react'

const PrivacyPolicy = () => {
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
          Privacy Policy
        </h1>
        <p style={{ color: '#666', marginBottom: '2rem' }}>
          Last updated: January 28, 2026
        </p>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            1. Introduction
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Easy Free Zone Setup ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            2. Information We Collect
          </h2>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#4a5568' }}>
            2.1 Personal Information
          </h3>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We may collect personal information that you voluntarily provide to us when you:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Fill out contact forms or request a quote</li>
            <li>Register for our services</li>
            <li>Subscribe to our newsletter</li>
            <li>Communicate with us via email, phone, or WhatsApp</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            This information may include: name, email address, phone number, company name, business details, and any other information you choose to provide.
          </p>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', color: '#4a5568' }}>
            2.2 Automatically Collected Information
          </h3>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            When you visit our website, we may automatically collect certain information about your device, including:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referral source</li>
            <li>Pages viewed and time spent on pages</li>
            <li>Device information</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            3. How We Use Your Information
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We use the information we collect to:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Provide, maintain, and improve our services</li>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you information about our services, updates, and promotional materials (with your consent)</li>
            <li>Process your business setup applications</li>
            <li>Analyze website usage and optimize user experience</li>
            <li>Comply with legal obligations</li>
            <li>Detect, prevent, and address technical issues or fraudulent activity</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            4. Information Sharing and Disclosure
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li><strong>Service Providers:</strong> Third-party companies that help us provide our services (e.g., payment processors, government authorities for license processing)</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            5. Data Security
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            6. Cookies and Tracking Technologies
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookies through your browser settings. We may use:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li><strong>Essential Cookies:</strong> Necessary for website functionality</li>
            <li><strong>Analytics Cookies:</strong> To understand how visitors use our website</li>
            <li><strong>Marketing Cookies:</strong> To deliver relevant advertisements</li>
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            7. Your Rights
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Depending on your location, you may have the following rights:
          </p>
          <ul style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem', paddingLeft: '2rem' }}>
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict processing of your data</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
            <li>Lodge a complaint with a supervisory authority</li>
          </ul>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            To exercise these rights, please contact us at admin@easyfreezonesetup.com
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            8. Data Retention
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            9. Third-Party Links
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            10. Children's Privacy
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            11. Changes to This Privacy Policy
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#2d3748' }}>
            12. Contact Us
          </h2>
          <p style={{ lineHeight: '1.8', color: '#4a5568', marginBottom: '1rem' }}>
            If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy
