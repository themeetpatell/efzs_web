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
        style={{ maxWidth: '900px', margin: '0 auto', padding: '20px 20px 12px' }}
      >
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.06rem', color: '#1a365d' }}>
          Privacy Policy
        </h1>
        <p style={{ color: '#666', marginBottom: '0.03rem' }}>
          Last updated: January 28, 2026
        </p>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            1. Introduction
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            Easy Free Zone Setup ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains in detail how we collect, use, disclose, store, and safeguard your information when you visit our website (www.easyfreezonesetup.com) or use our business setup services in the United Arab Emirates.
          </p>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            By accessing our website or engaging our services, you acknowledge that you have read, understood, and agree to be bound by this Privacy Policy. If you do not agree with our policies and practices, please do not use our website or services. We reserve the right to make changes to this Privacy Policy at any time and for any reason. We will alert you about any changes by updating the "Last updated" date of this Privacy Policy.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            2. Information We Collect
          </h2>
          
          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.1 Personal Information You Provide
          </h3>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or when contacting us. The personal information we collect may include:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Contact Information:</strong> Full name, email address, phone number, WhatsApp number, mailing address</li>
            <li><strong>Business Information:</strong> Company name, business activity, trade name preferences, number of shareholders, visa requirements</li>
            <li><strong>Identification Documents:</strong> Passport copies, Emirates ID, photographs, educational certificates (when applicable)</li>
            <li><strong>Financial Information:</strong> Payment card details (processed securely through third-party payment processors), bank account information for company account opening</li>
            <li><strong>Professional Details:</strong> Educational qualifications, work experience, business plans, investment capacity</li>
            <li><strong>Communication Records:</strong> Inquiry details, customer service interactions, feedback, and survey responses</li>
          </ul>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.2 Automatically Collected Information
          </h3>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            When you visit, use, or interact with our website, we automatically collect certain technical information about your device and browsing actions:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Device Data:</strong> IP address, browser type and version, operating system, device identifiers, screen resolution</li>
            <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, search queries, referral URLs</li>
            <li><strong>Location Data:</strong> General geographic location based on IP address</li>
            <li><strong>Cookies and Tracking:</strong> Data collected through cookies, web beacons, and similar technologies</li>
          </ul>

          <h3 style={{ fontSize: '1.4rem', marginBottom: '0.03rem', color: '#4a5568', marginTop: '0.06rem' }}>
            2.3 Information from Third Parties
          </h3>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We may receive information about you from third parties such as social media platforms, marketing partners, public databases, and other sources that are legally permitted to share such information. This helps us maintain accurate records and provide better services.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            3. How We Use Your Information
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We process your personal information for various purposes depending on how you interact with our services. The legal bases for processing include consent, contractual necessity, legal obligations, and legitimate interests:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Service Delivery:</strong> To process your business setup applications, company formation, visa processing, bank account opening, and all related services</li>
            <li><strong>Communication:</strong> To respond to inquiries, provide customer support, send service updates, and maintain ongoing client relationships</li>
            <li><strong>Marketing:</strong> To send promotional materials, newsletters, special offers, and event invitations (only with your explicit consent, and you can opt-out anytime)</li>
            <li><strong>Payment Processing:</strong> To process transactions, manage billing, prevent fraud, and maintain financial records</li>
            <li><strong>Legal Compliance:</strong> To comply with UAE laws, regulations, and government requirements including anti-money laundering (AML) and know-your-customer (KYC) obligations</li>
            <li><strong>Website Improvement:</strong> To analyze usage patterns, optimize user experience, fix technical issues, and enhance our services</li>
            <li><strong>Security:</strong> To protect against fraudulent, unauthorized, or illegal activity, and to enforce our terms and conditions</li>
            <li><strong>Business Operations:</strong> To manage relationships, conduct business planning, and improve operational efficiency</li>
            <li><strong>Record Keeping:</strong> To maintain accurate business records and documentation as required by UAE law</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            4. Information Sharing and Disclosure
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We respect your privacy and do not sell, rent, or trade your personal information to third parties for their marketing purposes. However, we may share your information in the following circumstances:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Government Authorities:</strong> Free zone authorities, Dubai Economic Department (DED), Federal Authority for Identity and Citizenship (ICP), Ministry of Human Resources and Emiratisation, and other UAE government entities for license processing, visa applications, and regulatory compliance</li>
            <li><strong>Financial Institutions:</strong> Banks and payment processors for company bank account opening, transaction processing, and financial services</li>
            <li><strong>Service Providers:</strong> PRO service providers, typing centers, document attestation services, translation services, and other third-party vendors who assist in service delivery</li>
            <li><strong>Professional Advisors:</strong> Lawyers, auditors, accountants, and consultants when necessary for providing specialized services</li>
            <li><strong>Business Partners:</strong> Authorized partners and affiliates who help deliver our services under strict confidentiality agreements</li>
            <li><strong>Legal Obligations:</strong> Law enforcement, courts, regulators, and other authorities when required by law or legal process</li>
            <li><strong>Business Transfers:</strong> Potential buyers, investors, or successors in the event of a merger, acquisition, restructuring, or sale of assets</li>
            <li><strong>With Your Consent:</strong> Any other third parties with your explicit consent or at your direction</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            All third parties with whom we share your information are required to maintain the confidentiality of your data and use it only for the purposes for which it was disclosed.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            5. Data Security
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We implement comprehensive technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security practices include:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Encryption:</strong> SSL/TLS encryption for data transmission and secure storage encryption for sensitive data at rest</li>
            <li><strong>Access Controls:</strong> Strict authentication and authorization protocols limiting access to authorized personnel only</li>
            <li><strong>Data Protection:</strong> Regular security audits, vulnerability assessments, and penetration testing</li>
            <li><strong>Physical Security:</strong> Secure facilities with controlled access and surveillance systems</li>
            <li><strong>Employee Training:</strong> Regular training on data protection and confidentiality obligations</li>
            <li><strong>Incident Response:</strong> Established procedures for detecting, responding to, and reporting security breaches</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            However, please be aware that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your personal information, we cannot guarantee absolute security. You are responsible for maintaining the confidentiality of your account credentials.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            6. Cookies and Tracking Technologies
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We use cookies and similar tracking technologies to collect and store information when you interact with our website. This helps us provide a better user experience and understand how our services are used. Types of cookies we use:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Essential Cookies:</strong> Necessary for website functionality, including user authentication, security features, and basic website operations. These cannot be disabled.</li>
            <li><strong>Performance/Analytics Cookies:</strong> Help us understand how visitors interact with our website by collecting information about pages visited, time spent, and any errors encountered. We use services like Google Analytics.</li>
            <li><strong>Functional Cookies:</strong> Remember your preferences and choices (language, region, display preferences) to provide enhanced features</li>
            <li><strong>Marketing/Advertising Cookies:</strong> Track your browsing activity across websites to deliver relevant advertisements and measure campaign effectiveness</li>
            <li><strong>Social Media Cookies:</strong> Enable social media features and track engagement with our social content</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            You can control and manage cookies through your browser settings. Most browsers allow you to refuse cookies or delete specific cookies. However, disabling certain cookies may affect your experience and limit access to some website features. For detailed information about managing cookies, visit your browser's help section or www.aboutcookies.org.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            7. Your Rights and Choices
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            Under UAE data protection regulations and depending on your location, you may have the following rights regarding your personal information:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Right to Access:</strong> Request copies of your personal data and information about how we process it</li>
            <li><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete personal information</li>
            <li><strong>Right to Erasure:</strong> Request deletion of your personal data under certain circumstances</li>
            <li><strong>Right to Restriction:</strong> Request limitation on the processing of your personal information</li>
            <li><strong>Right to Object:</strong> Object to processing of your personal data for direct marketing or other purposes</li>
            <li><strong>Right to Data Portability:</strong> Receive your personal data in a structured, commonly used format</li>
            <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time where processing is based on consent</li>
            <li><strong>Right to Lodge Complaints:</strong> File a complaint with relevant data protection authorities</li>
            <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            To exercise these rights, please contact us at admin@easyfreezonesetup.com or +971 55 169 0373. We will respond to your request within 30 days. Please note that certain rights may be limited by law or our legitimate business needs.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            8. Data Retention
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and enforce our agreements. Retention periods vary based on:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li><strong>Client Records:</strong> Maintained for the duration of our business relationship and for 5-7 years thereafter as required by UAE commercial and tax laws</li>
            <li><strong>Financial Records:</strong> Retained for at least 5 years as mandated by UAE Federal Tax Authority regulations</li>
            <li><strong>License Documents:</strong> Retained for the validity period of licenses plus additional years as required by free zone regulations</li>
            <li><strong>Marketing Data:</strong> Retained until you unsubscribe or request deletion, subject to legal requirements</li>
            <li><strong>Website Analytics:</strong> Typically retained for 26 months as per Google Analytics default settings</li>
            <li><strong>Legal Claims:</strong> Extended retention when necessary for establishing, exercising, or defending legal claims</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            After the retention period expires, we securely delete or anonymize your personal information in accordance with applicable laws and regulations.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            9. International Data Transfers
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            While our primary operations and data storage are in the UAE, some of our service providers may be located in other countries. When we transfer your personal information internationally, we ensure adequate protection through:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li>Standard contractual clauses approved by relevant authorities</li>
            <li>Data processing agreements with security and confidentiality obligations</li>
            <li>Transfers to countries with adequate data protection laws</li>
            <li>Your explicit consent where required by law</li>
          </ul>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            10. Third-Party Links and Services
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            Our website may contain links to third-party websites, applications, or services that are not owned or controlled by us. This includes links to free zone websites, government portals, banking institutions, and social media platforms. We are not responsible for the privacy practices, content, or security of these external sites.
          </p>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We strongly encourage you to review the privacy policies of any third-party sites you visit. This Privacy Policy applies solely to information collected by our website and services.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            11. Children's Privacy
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            Our services are not directed to individuals under the age of 18, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. We will take steps to delete such information from our systems.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            12. Changes to This Privacy Policy
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We may update this Privacy Policy periodically to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem', paddingLeft: '2rem' }}>
            <li>Posting the updated Privacy Policy on this page with a new "Last updated" date</li>
            <li>Sending an email notification to registered users (for significant changes)</li>
            <li>Displaying a prominent notice on our website</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We encourage you to review this Privacy Policy regularly to stay informed about how we protect your information. Your continued use of our services after changes are posted constitutes acceptance of the updated Privacy Policy.
          </p>
        </section>

        <section style={{ marginBottom: '0.02rem' }}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '0.04rem', color: '#2d3748' }}>
            13. Contact Us
          </h2>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
          </p>
          <ul style={{ lineHeight: '1.6', color: '#4a5568', listStyle: 'none', paddingLeft: '0', marginBottom: '0.04rem' }}>
            <li style={{ marginBottom: '0.02rem' }}><strong>Company Name:</strong> Easy Free Zone Setup</li>
            <li style={{ marginBottom: '0.02rem' }}><strong>Email:</strong> admin@easyfreezonesetup.com</li>
            <li style={{ marginBottom: '0.02rem' }}><strong>WhatsApp:</strong> +971 55 169 0373</li>
            <li style={{ marginBottom: '0.02rem' }}><strong>Address:</strong> Dubai, United Arab Emirates</li>
          </ul>
          <p style={{ lineHeight: '1.6', color: '#4a5568', marginBottom: '0.04rem' }}>
            We are committed to resolving any privacy concerns and will respond to all requests within 30 days.
          </p>
        </section>
      </motion.div>
    </div>
  )
}

export default PrivacyPolicy
