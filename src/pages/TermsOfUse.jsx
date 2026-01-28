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
        style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 20px 12px' }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.06rem', color: '#1a365d' }}>
          Terms of Use
        </h1>
        <p style={{ color: '#666', marginBottom: '0.03rem' }}>
          Last updated: January 28, 2026
        </p>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            1. Acceptance of Terms
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            Welcome to Easy Free Zone Setup. These Terms of Use ("Terms") constitute a legally binding agreement between you ("Client," "you," or "your") and Easy Free Zone Setup ("Company," "we," "our," or "us"). By accessing our website (www.easyfreezonesetup.com), using our services, or engaging with our platform in any way, you acknowledge that you have read, understood, and agree to be bound by these Terms.
          </p>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            If you do not agree with any part of these Terms, you must immediately discontinue use of our website and services. These Terms apply to all visitors, users, clients, and others who access or use our services.
          </p>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            By using our services, you represent and warrant that you are at least 18 years of age, have the legal capacity to enter into binding contracts, and are not prohibited from using our services under UAE or other applicable laws.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            2. Description of Services
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            Easy Free Zone Setup is a professional business setup consultancy operating in the United Arab Emirates. We provide comprehensive services to facilitate business establishment and operations in the UAE:
          </p>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.1 Company Formation Services
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Free Zone Company Setup:</strong> Company formation in various UAE free zones including DMCC, DIFC, DAFZA, RAKEZ, Ajman Free Zone, and others</li>
            <li><strong>Mainland Company Formation:</strong> Commercial license setup through Dubai Economic Department (DED) and other mainland authorities</li>
            <li><strong>Offshore Company Formation:</strong> Offshore company registration for international business operations</li>
            <li><strong>Branch Office Setup:</strong> Establishment of branch offices for foreign companies</li>
            <li><strong>Representative Office:</strong> Setting up representative offices for market research and liaison activities</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.2 Visa and Immigration Services
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Investor/Partner Visas:</strong> Residence visa processing for company owners and shareholders</li>
            <li><strong>Employment Visas:</strong> Work permit and residence visa for employees</li>
            <li><strong>Freelance Visa:</strong> Independent professional visa for freelancers and self-employed individuals</li>
            <li><strong>Dependent Visas:</strong> Family sponsorship and dependent visa processing</li>
            <li><strong>Golden Visa:</strong> Long-term residence visa processing (5 and 10-year options)</li>
            <li><strong>Visa Renewal:</strong> Assistance with visa renewal and extension procedures</li>
            <li><strong>Emirates ID:</strong> Emirates ID application and renewal services</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.3 Banking and Financial Services
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Corporate Bank Account Opening:</strong> Assistance with opening business bank accounts in UAE banks</li>
            <li><strong>Personal Bank Account:</strong> Support for personal banking requirements</li>
            <li><strong>Payment Gateway Setup:</strong> Merchant account and payment processing solutions</li>
            <li><strong>Financial Consultation:</strong> Guidance on banking requirements and financial planning</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.4 Compliance and Support Services
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Tax Registration:</strong> VAT registration, corporate tax registration, and compliance support</li>
            <li><strong>Bookkeeping Services:</strong> Monthly bookkeeping and financial record maintenance</li>
            <li><strong>PRO Services:</strong> Government liaison and documentation services</li>
            <li><strong>License Renewal:</strong> Annual license renewal and amendment services</li>
            <li><strong>Attestation Services:</strong> Document attestation and legalization</li>
            <li><strong>Business Consultation:</strong> Advisory services for business structure and operations</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            3. User Responsibilities and Obligations
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            When using our services, you agree to comply with all applicable laws and these Terms:
          </p>
          
          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            3.1 Information Accuracy
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li>Provide accurate, complete, and truthful information at all times</li>
            <li>Submit genuine and unaltered documents and identification</li>
            <li>Update us promptly of any changes to your information</li>
            <li>Ensure all business activity descriptions are accurate and compliant</li>
            <li>Disclose any relevant background information that may affect service delivery</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            3.2 Legal Compliance
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li>Comply with all UAE federal and emirate-level laws and regulations</li>
            <li>Adhere to free zone authority rules and regulations</li>
            <li>Follow immigration and labor law requirements</li>
            <li>Maintain compliance with tax obligations and financial reporting</li>
            <li>Respect intellectual property rights and licensing requirements</li>
            <li>Not engage in any illegal, fraudulent, or prohibited activities</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            3.3 Account Security
          </h3>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li>Maintain confidentiality of your account credentials and sensitive information</li>
            <li>Notify us immediately of any unauthorized access or security breaches</li>
            <li>Take responsibility for all activities under your account</li>
            <li>Use secure communication channels for sensitive information</li>
          </ul>

          <h3 style={{ fontSize: '1.3rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            3.4 Prohibited Uses
          </h3>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            You agree not to:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li>Use our services for any unlawful purpose or in violation of these Terms</li>
            <li>Engage in activities involving money laundering, terrorism financing, or fraud</li>
            <li>Provide false, misleading, or deceptive information</li>
            <li>Interfere with or disrupt our services or servers</li>
            <li>Attempt to gain unauthorized access to our systems or networks</li>
            <li>Use our services to harm, threaten, or harass others</li>
            <li>Reproduce, distribute, or modify our content without authorization</li>
            <li>Use automated systems to access or collect data from our website</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            4. Service Fees and Payment
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            Service fees will be communicated to you before you commit to any service. Payment terms include:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Fees are subject to change and will be confirmed in writing</li>
            <li>Payment may be required in full or in installments as specified</li>
            <li>Government fees are separate from our service fees</li>
            <li>Refund policies will be detailed in your service agreement</li>
            <li>Late payments may incur additional charges</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            5. Intellectual Property
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            All content on this website, including text, graphics, logos, images, and software, is the property of Easy Free Zone Setup or its content suppliers and is protected by UAE and international copyright laws. You may not:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Reproduce, distribute, or modify any content without permission</li>
            <li>Use our trademarks or branding without authorization</li>
            <li>Create derivative works from our content</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            6. Disclaimer of Warranties
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            Our services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Uninterrupted or error-free service</li>
            <li>Specific results or outcomes from our services</li>
            <li>That our services will meet your specific requirements</li>
            <li>The accuracy or completeness of information provided</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            While we strive for excellence, government processing times and approvals are beyond our control.
          </p>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            7. Limitation of Liability
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            To the fullest extent permitted by law, Easy Free Zone Setup shall not be liable for:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Indirect, incidental, special, or consequential damages</li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Delays or failures in government processing</li>
            <li>Third-party actions or decisions</li>
            <li>Force majeure events</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            Our total liability shall not exceed the amount paid by you for the specific service in question.
          </p>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            8. Confidentiality
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            We maintain strict confidentiality of all client information. However, you acknowledge that we may need to share certain information with:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Government authorities for license and visa processing</li>
            <li>Banks for account opening procedures</li>
            <li>Free zone authorities as required</li>
            <li>Professional advisors when necessary</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            9. Termination
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Violation of these Terms of Use</li>
            <li>Fraudulent or illegal activity</li>
            <li>Non-payment of fees</li>
            <li>Providing false information</li>
            <li>Any other reason we deem appropriate</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            10. Indemnification
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            You agree to indemnify and hold harmless Easy Free Zone Setup, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem', paddingLeft: '2rem' }}>
            <li>Your use of our services</li>
            <li>Your violation of these Terms of Use</li>
            <li>Your violation of any applicable laws</li>
            <li>Information you provide to us</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            11. Governing Law and Jurisdiction
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            These Terms of Use shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
          </p>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            12. Changes to Terms
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting on this website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.
          </p>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            13. Severability
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            If any provision of these Terms of Use is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
          </p>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            14. Entire Agreement
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            These Terms of Use, together with our Privacy Policy and any service agreements, constitute the entire agreement between you and Easy Free Zone Setup regarding the use of our services.
          </p>
        </section>

        <section style={{ marginBottom: '0.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.2rem', color: '#2d3748' }}>
            15. Contact Information
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.2rem' }}>
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', listStyle: 'none', paddingLeft: '0' }}>
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
