import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaFileAlt, FaBuilding, FaIdCard, FaHandshake, FaGlobe, FaBriefcase, FaShieldAlt, FaCheckCircle, FaArrowRight, FaClock, FaDollarSign, FaHeadset, FaRocket, FaQuestionCircle, FaWhatsapp } from 'react-icons/fa'

const ServicesES = () => {
  const heroHighlights = [
    { icon: <FaCheckCircle />, label: 'Constitución, visas, impuestos, banca' },
    { icon: <FaClock />, label: 'Tiempos rápidos y transparentes' },
    { icon: <FaShieldAlt />, label: 'Cumplimiento incluido' }
  ]

  const heroStats = [
    { value: '100+', label: 'Empresas constituidas' },
    { value: '24/7', label: 'Soporte de asesores' },
    { value: 'Un solo equipo', label: 'Licencias • Visas • Banca' }
  ]

  const services = [
    {
      icon: <FaFileAlt />,
      title: 'Creación de Empresa en Zona Franca de EAU',
      description: 'Asistencia para establecer tu empresa en una Zona Franca de EAU con licenciamiento completo, cumplimiento y soporte de registro.',
      features: ['Solicitud de Licencia', 'Reserva de Nombre', 'Preparación de Documentos', 'Enlace Gubernamental', '100% Propiedad Extranjera', 'Beneficios Fiscales']
    },
    {
      icon: <FaBuilding />,
      title: 'Creación de Empresa en Mainland de EAU',
      description: 'Soporte completo para establecer tu negocio en el Mainland de EAU, incluyendo licenciamiento, aprobaciones locales y requisitos legales.',
      features: ['Patrocinio Local', 'Registro DED', 'Preparación de MOA', 'Reserva de Nombre Comercial', 'Licencia Comercial', 'Aprobaciones Gubernamentales']
    },
    {
      icon: <FaIdCard />,
      title: 'Trámite de Visa de Residente',
      description: 'Asistencia integral para obtener tu visa de residente en EAU, incluyendo preparación de documentos y presentaciones gubernamentales.',
      features: ['Visa de Inversor', 'Visa de Empleado', 'Visa Familiar', 'Renovación de Visa', 'Emirates ID', 'Seguro Médico']
    },
    {
      icon: <FaHandshake />,
      title: 'Asistencia para Apertura de Cuenta Bancaria',
      description: 'Soporte profesional para abrir cuentas bancarias corporativas y personales en bancos de EAU de manera fluida y eficiente.',
      features: ['Selección de Cuenta', 'Soporte en Documentación', 'Presentaciones Bancarias', 'Cuentas Multidivisa', 'Configuración de Banca en Línea', 'Soporte Continuo']
    },
    {
      icon: <FaGlobe />,
      title: 'Registro y Declaración de Impuesto Corporativo',
      description: 'Asistencia completa con el registro de tu empresa para impuestos corporativos y declaraciones en cumplimiento con las leyes de EAU.',
      features: ['Registro Fiscal', 'Solicitud de TRN', 'Declaración de Impuestos', 'Gestión de Cumplimiento', 'Planificación Fiscal', 'Servicios de Asesoría']
    },
    {
      icon: <FaBriefcase />,
      title: 'Registro y Declaración de IVA',
      description: 'Ayuda con el registro de IVA, declaración y cumplimiento para asegurar que tu negocio cumpla con todos los requisitos fiscales de EAU.',
      features: ['Registro de IVA', 'Emisión de TRN', 'Declaraciones de IVA', 'Revisión de Cumplimiento', 'Reclamaciones de Reembolso', 'Asesoría de IVA']
    },
    {
      icon: <FaFileAlt />,
      title: 'Servicios de Contabilidad',
      description: 'Contabilidad precisa y oportuna para gestionar tus registros financieros, transacciones y necesidades de reportes.',
      features: ['Contabilidad Diaria', 'Estados Financieros', 'Registro de Transacciones', 'Conciliación Bancaria', 'Gestión de Gastos', 'Procesamiento de Nómina']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Seguro de Salud Básico',
      description: 'Guía y soporte para asegurar el seguro de salud básico obligatorio para ti y tus empleados.',
      features: ['Selección de Seguro', 'Comparación de Pólizas', 'Soporte en Solicitud', 'Revisión de Cobertura', 'Asistencia en Renovación', 'Soporte en Reclamaciones']
    },
    {
      icon: <FaFileAlt />,
      title: 'Liquidación y Baja de Empresa',
      description: 'Soporte para cerrar tu negocio legalmente, manejando la baja y liquidando cualquier obligación pendiente.',
      features: ['Cancelación de Licencia', 'Cancelación de Visa', 'Cierre de Cuenta Bancaria', 'Liquidación de Activos', 'Liquidaciones Finales', 'Autorizaciones Gubernamentales']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <div className="services-page-modern">
      <section className="setup-hero">
        <div className="setup-hero-ink primary" />
        <div className="setup-hero-ink secondary" />
        <div className="container-modern">
          <div className="setup-hero-grid">
            <motion.div
              className="setup-hero-copy"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="hero-badge-modern">Servicios</span>
              <h1 className="setup-hero-title">Todo lo que necesitas bajo un mismo techo</h1>
              <p className="setup-hero-subtitle">Licencias, visas, impuestos y banca guiados por especialistas que se mueven rápido y te mantienen informado.</p>

              <div className="setup-pill-grid">
                {heroHighlights.map((item) => (
                  <div className="setup-pill" key={item.label}>
                    <span className="pill-icon">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="setup-hero-actions">
                <a href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20EAU" target="_blank" rel="noopener noreferrer" className="btn-primary-modern btn-large-modern">
                  Crear mi empresa en EAU <FaArrowRight />
                </a>
                <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn-ghost-modern">
                  Reservar Consulta Gratuita
                </a>
              </div>

              <div className="setup-hero-stats">
                {heroStats.map((stat) => (
                  <div className="setup-hero-stat" key={stat.label}>
                    <span className="stat-value">{stat.value}</span>
                    <span className="stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="setup-hero-card"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
            >
              <div className="setup-card-header">
                <div>
                  <p className="setup-card-kicker">Paquete de servicios</p>
                  <h3>Desde el lanzamiento hasta el cumplimiento</h3>
                  <p className="setup-card-subtext">Elige solo lo que necesitas o ejecuta todo el proceso con un solo equipo responsable.</p>
                </div>
                <span className="setup-card-chip">
                  <FaRocket /> Listo para crecer
                </span>
              </div>
              <ul className="setup-card-list">
                <li>
                  <FaCheckCircle /> Constitución de empresa en zona franca y mainland
                </li>
                <li>
                  <FaCheckCircle /> Trámite de visas, banca, impuestos e IVA
                </li>
                <li>
                  <FaCheckCircle /> Asesoría continua y renovaciones
                </li>
              </ul>
              <div className="setup-card-footer">
                <div>
                  <p className="setup-card-footer-title">¿No sabes por dónde empezar?</p>
                  <p className="setup-card-footer-subtext">Comparte tu modelo de negocio—te indicaremos la jurisdicción y los pasos correctos.</p>
                </div>
                <Link to="/es/contacto" className="setup-card-link">
                  Habla con un experto <FaArrowRight />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-modern services-main-section">
        <div className="container-modern">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="services-list-modern"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="service-item-modern"
                whileHover={{ x: 10 }}
              >
                <div className="service-item-header">
                  <span className="service-number-display">0{index + 1}</span>
                  <motion.div
                    className="service-icon-display"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                </div>
                <div className="service-item-content">
                  <h3 className="service-item-title">{service.title}</h3>
                  <p className="service-item-description">{service.description}</p>
                  <div className="service-features-inline">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="feature-inline">
                        {feature}{idx < service.features.length - 1 ? '' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="process-section-modern">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Nuestro Proceso</span>
            <h2 className="section-title-modern">Pasos Simples hacia el Éxito</h2>
            <p className="section-description-modern">Pon tu negocio en marcha en poco tiempo</p>
          </motion.div>

          <div className="process-steps-modern">
            {[
              { step: '01', title: 'Consulta', desc: 'Consulta inicial gratuita para entender tus requisitos' },
              { step: '02', title: 'Documentación', desc: 'Nosotros manejamos todo el papeleo y documentación' },
              { step: '03', title: 'Solicitud', desc: 'Presentamos solicitudes ante las autoridades correspondientes' },
              { step: '04', title: 'Aprobación', desc: 'Recibe tu licencia y comienza operaciones' }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.05 }}
                className="process-step-modern"
              >
                <motion.div
                  className="step-number-modern"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  {process.step}
                </motion.div>
                <h4 className="step-title-modern">{process.title}</h4>
                <p className="step-desc-modern">{process.desc}</p>
                {index < 3 && <div className="step-connector-modern"></div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE BENEFITS */}
      <section className="section-modern service-benefits-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Beneficios</span>
            <h2 className="section-title-modern">Por Qué Elegir Nuestros Servicios</h2>
            <p className="section-description-modern">Soluciones integrales con experiencia inigualable</p>
          </motion.div>

          <div className="service-benefits-compact">
            {[
              { icon: <FaClock />, title: 'Procesamiento Rápido', desc: 'Configuración en 2-3 días para la mayoría de zonas francas con flujos de trabajo paralelos' },
              { icon: <FaCheckCircle />, title: 'Cumplimiento Incluido', desc: 'Requisitos legales, KYC y bancarios integrados en cada hito' },
              { icon: <FaDollarSign />, title: 'Precios Transparentes', desc: 'Sin sorpresas—alcances, tiempos y costos acordados por adelantado' },
              { icon: <FaHeadset />, title: 'Soporte 24/7', desc: 'Asesor dedicado con actualizaciones en tiempo real a través de todos los canales' },
              { icon: <FaRocket />, title: 'Proceso Remoto', desc: 'Lanza sin viajar; coordinamos todo en tu nombre' },
              { icon: <FaShieldAlt />, title: 'Guía Senior', desc: 'Especialistas certificados que se mantienen responsables más allá del lanzamiento' }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="service-benefit-item-compact"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="benefit-icon-compact">
                  {benefit.icon}
                </div>
                <div className="benefit-content-compact">
                  <h3 className="benefit-title-compact">{benefit.title}</h3>
                  <p className="benefit-desc-compact">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE CATEGORIES */}
      <section className="section-modern service-categories-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">Categorías</span>
            <h2 className="section-title-modern">Categorías de Servicios</h2>
            <p className="section-description-modern">Soluciones integrales de constitución de empresas</p>
          </motion.div>

          <div className="service-categories-grid">
            {[
              { title: 'Constitución de Empresa', count: '2 Servicios', icon: <FaBuilding />, desc: 'Constitución en Zona Franca y Mainland' },
              { title: 'Servicios de Visa', count: '1 Servicio', icon: <FaIdCard />, desc: 'Trámite de visa de residente' },
              { title: 'Servicios Financieros', count: '3 Servicios', icon: <FaBriefcase />, desc: 'Banca, impuestos y contabilidad' },
              { title: 'Cumplimiento', count: '2 Servicios', icon: <FaShieldAlt />, desc: 'Seguros y liquidación' }
            ].map((category, index) => (
              <motion.div
                key={index}
                className="service-category-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="category-icon-wrapper">
                  {category.icon}
                </div>
                <h3 className="category-title">{category.title}</h3>
                <p className="category-count">{category.count}</p>
                <p className="category-desc">{category.desc}</p>
                <div className="category-accent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-modern services-faq-section">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header-modern"
          >
            <span className="section-label-modern">FAQ</span>
            <h2 className="section-title-modern">Preguntas Frecuentes</h2>
            <p className="section-description-modern">Preguntas comunes sobre nuestros servicios</p>
          </motion.div>

          <div className="services-faq-grid">
            {[
              { q: '¿Cuánto tiempo toma constituir una empresa?', a: 'La mayoría de las constituciones en zona franca se pueden completar en 2-3 días hábiles sin presencia física.' },
              { q: '¿Qué documentos se requieren?', a: 'Típicamente copias de pasaporte, fotos y plan de negocios. Proporcionamos una lista completa.' },
              { q: '¿Ofrecen constitución remota?', a: 'Sí, podemos manejar todo el proceso de forma remota para la mayoría de las zonas francas.' },
              { q: '¿Cuáles son sus tarifas de servicio?', a: 'Nuestras tarifas son transparentes sin costos ocultos. Contáctanos para una cotización detallada.' },
              { q: '¿Pueden ayudar con el trámite de visa?', a: 'Sí, proporcionamos servicios completos de trámite de visa para inversores y empleados.' },
              { q: '¿Ofrecen soporte continuo?', a: 'Sí, proporcionamos soporte post-constitución incluyendo renovación de licencia y cumplimiento.' }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="services-faq-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="faq-icon-wrapper">
                  <FaQuestionCircle />
                </div>
                <h4 className="faq-question-services">{faq.q}</h4>
                <p className="faq-answer-services">{faq.a}</p>
                <div className="faq-accent-services"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cta-banner-card"
          >
            <span className="cta-kicker">Constitución completa</span>
            <h2 className="cta-title">¿Listo para poner en marcha tu lanzamiento en EAU?</h2>
            <p className="cta-desc">Reserva una consulta y te indicaremos la combinación correcta de licencias, visas y banca para tu negocio.</p>
            <div className="cta-actions">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20EAU" target="_blank" rel="noopener noreferrer" className="btn-primary-modern btn-large-modern">
                  Crear mi empresa en EAU <FaArrowRight />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn-ghost-modern">
                  Reservar Consulta Gratuita
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ServicesES
