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

const AboutES = () => {
  const heroHighlights = [
    { title: 'Transparencia desde el primer día', description: 'Alcances fijos, facturación por hitos y comunicación proactiva.' },
    { title: 'Diseñado para EAU', description: 'Especialistas en zonas francas y mainland que eliminan las conjeturas.' },
    { title: 'Ejecución sobre papeleo', description: 'Licencias, visas y banca manejadas por un solo equipo que se mueve rápido.' }
  ]

  const heroStats = [
    { value: '100+', label: 'Empresas constituidas' },
    { value: '3-5 días', label: 'Tiempo promedio de licencia' },
    { value: '4.9/5', label: 'Satisfacción del cliente' }
  ]

  const principles = [
    { icon: <FaBullseye />, title: 'Claridad primero', description: 'Mapeamos la jurisdicción correcta, costos y tiempos antes de que te comprometas.' },
    { icon: <FaShieldAlt />, title: 'Cumplimiento incluido', description: 'Requisitos regulatorios, KYC y bancarios integrados en cada hito.' },
    { icon: <FaHandshake />, title: 'Guía de socios', description: 'Trabaja directamente con asesores senior que son dueños de los resultados, no de tickets.' },
    { icon: <FaRocket />, title: 'Momentum siempre', description: 'Ciclos rápidos, resúmenes semanales y decisiones tomadas contigo, no por ti.' }
  ]

  const missionVision = [
    {
      icon: <FaBullseye />,
      title: 'Nuestra Misión',
      description: 'Empoderar a emprendedores con un camino predecible y transparente hacia la entrada al mercado de EAU respaldado por expertos que ejecutan.'
    },
    {
      icon: <FaEye />,
      title: 'Nuestra Visión',
      description: 'Ser el socio de lanzamiento más confiable de la región, conocido por claridad, velocidad y servicio de clase mundial mucho después de la incorporación.'
    }
  ]

  const process = [
    {
      phase: '01',
      title: 'Plan y ajuste',
      detail: 'Alineamos modelo de negocio, ajuste de zona franca o mainland, y requisitos de cumplimiento en 48 horas.'
    },
    {
      phase: '02',
      title: 'Licencias y autorizaciones',
      detail: 'Solicitudes, aprobaciones y expedientes bancarios manejados en paralelo con actualizaciones de progreso transparentes.'
    },
    {
      phase: '03',
      title: 'Lanzamiento y sostenimiento',
      detail: 'Visas, activación de cuenta corporativa y manuales de renovación para que operes desde el primer día.'
    }
  ]

  const teamMembers = [
    {
      name: 'Mohamed Ramshadali',
      role: 'Cofundador, Director General',
      description: 'Liderando nuestra empresa con amplia experiencia en constitución de empresas en EAU y desarrollo estratégico de negocios.',
      icon: <FaUserTie />,
      photo: '/ramshad.jpg'
    },
    {
      name: 'Seba Nageeb',
      role: 'Consultora Legal',
      description: 'Consultora legal experta especializada en derecho empresarial de EAU y cumplimiento regulatorio con conocimiento integral de regulaciones de Zonas Francas.',
      icon: <FaUserCircle />,
      photo: '/seba.jpg'
    },
    {
      name: 'Deepanshu Mendiratta',
      role: 'Asesor de Constitución de Empresas',
      description: 'Asesor empresarial experto especializado en constitución de empresas en EAU y regulaciones de Zonas Francas.',
      icon: <FaUserTie />,
      photo: '/deepanshu.jpg'
    },
    {
      name: 'Fathimath Minha',
      role: 'Directora de Marketing',
      description: 'Liderando nuestras iniciativas de marketing y estrategias de comunicación con clientes para asegurar una entrega de servicio excepcional.',
      icon: <FaUserCircle />,
      photo: '/minha.jpg'
    }
  ]

  const capabilities = [
    { icon: <FaCheckCircle />, title: 'Constitución de Empresas', desc: 'Asistencia en el establecimiento de negocios en varias zonas francas de EAU, asegurando cumplimiento con todos los requisitos legales.' },
    { icon: <FaGavel />, title: 'Licencias y Registro', desc: 'Gestión de todo el proceso para obtener las licencias y registros necesarios para las operaciones de tu negocio.' },
    { icon: <FaRocket />, title: 'Trámite de Visas', desc: 'Facilitación de solicitudes de visa para propietarios de negocios, empleados y sus familias para un proceso de reubicación fluido.' },
    { icon: <FaChartLine />, title: 'Asistencia Bancaria', desc: 'Guía a clientes en la apertura de cuentas bancarias corporativas con instituciones financieras reconocidas en EAU.' }
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
                Quiénes Somos
              </motion.div>

              <h1 className="hero-mega-title">
                Hacemos que la
                <span className="title-highlight"> Constitución de Empresas</span>
                <br />en EAU sea Simple y Rápida
              </h1>

              <p className="hero-description">
                Tu socio integral para constitución de empresas, licencias, visas y banca en EAU. Hemos ayudado a cientos de emprendedores a convertir sus sueños de negocios en EAU en realidad.
              </p>

              <div className="hero-feature-list">
                {[
                  { icon: <FaCheckCircle />, text: 'Proceso de constitución rápido de 3 días' },
                  { icon: <FaCheckCircle />, text: 'Precios 100% transparentes' },
                  { icon: <FaCheckCircle />, text: 'Guía experta en cada paso' }
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
                <a href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20EAU" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
                  Crear mi empresa en EAU <FaArrowRight />
                </a>
                <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn-hero-secondary">
                  Reservar Consulta Gratuita
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
                <p>Empresas Constituidas</p>
              </div>
              <div className="visual-card card-2">
                <FaHandshake className="card-icon" />
                <h3>2-3 Días</h3>
                <p>Tiempo Promedio de Constitución</p>
              </div>
              <div className="visual-card card-3">
                <FaShieldAlt className="card-icon" />
                <h3>100%</h3>
                <p>Cumplimiento Legal</p>
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
            <span className="section-label-modern">Lo que representamos</span>
            <h2 className="section-title-modern">Principios que te mantienen avanzando</h2>
            <p className="section-description-modern">Un lienzo moderno y minimalista que mantiene el tema azul y blanco mientras eleva la claridad, estructura y energía.</p>
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
            <span className="section-label-modern">Cómo trabajamos</span>
            <h2 className="section-title-modern">Ejecución en tres movimientos claros</h2>
            <p className="section-description-modern">Sin ruido—solo una secuencia predecible que mantiene tu lanzamiento en EAU a tiempo y dentro del presupuesto.</p>
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
            <span className="section-label-modern">Las personas</span>
            <h2 className="section-title-modern">Conoce al equipo detrás de los lanzamientos</h2>
            <p className="section-description-modern">Especialistas senior que navegan regulaciones, banca y marketing para que tú te enfoques en el crecimiento.</p>
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
              <div className="team-avatar-new">
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="team-avatar-img" loading="lazy" />
                ) : (
                  member.icon
                )}
              </div>
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
            <span className="section-label-modern">Lo que entregamos</span>
            <h2 className="section-title-modern">Soluciones integrales de constitución de empresas</h2>
            <p className="section-description-modern">Servicios de punta a punta diseñados para reducir riesgos y acelerar tu expansión en EAU.</p>
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
            <h2 className="about-cta-title">¿Listo para comenzar tu viaje empresarial en EAU?</h2>
            <p className="about-cta-desc">
              Únete a miles de emprendedores que eligieron Easy Free Zone Setup para una constitución de empresas transparente e integral. Te guiaremos
              a través de cada hito con claridad y velocidad.
            </p>
            <div className="about-cta-buttons">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/es/contacto" className="btn btn-primary btn-large">
                  Obtener Consulta Gratuita <FaArrowRight />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/es/servicios" className="btn btn-primary btn-large">
                  Ver Nuestros Servicios <FaArrowRight />
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

export default AboutES
