import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaCheck, FaArrowRight, FaShieldAlt, FaClock, FaUsers, FaDollarSign, FaHeadset, FaStar, FaBuilding, FaIdCard, FaHandshake, FaGlobe, FaBriefcase, FaFileAlt, FaCalculator, FaBalanceScale } from 'react-icons/fa'
import TestimonialCarousel from '../components/TestimonialCarousel'
import CostCalculatorES from './CostCalculatorES'

const HomeES = () => {
  // Actual Free Zone pricing from reference
  const freeZones = [
    { name: 'Meydan Free Zone', price: '12,500', location: 'Dubái', code: 'Meydan', logo: '/meydan.png' },
    { name: 'IFZA Free Zone', price: '12,900', location: 'Dubái', code: 'IFZA', logo: '/IFZA.png' },
    { name: 'Sharjah Publishing City (SPC)', price: '5,750', location: 'Sharjah', code: 'SPC', logo: '/SPC.png' },
    { name: 'Masdar City Free Zone', price: '7,000', location: 'Abu Dhabi', code: 'Masdar', logo: '/Masdar City.png' },
    { name: 'Ajman Free Zone', price: '5,555', location: 'Ajman', code: 'Ajman', logo: '/Ajman.png' },
    { name: 'RAKEZ Free Zone', price: '6,010', location: 'Ras Al Khaimah', code: 'RAKEZ', logo: '/RAKEZ.png' },
    { name: 'UAQ Free Zone', price: '5,500', location: 'Umm Al Quwain', code: 'UAQ', logo: '/UAQ.png' },
    { name: 'Creative City Free Zone', price: '5,530', location: 'Fujairah', code: 'Creative', logo: '/Creative city.png' },
  ]

  const emirates = [
    {
      name: 'Dubái',
      zones: ['Meydan Free Zone', 'IFZA Free Zone'],
      description: 'Dubái alberga más de 30 free zones, lo que lo convierte en el emirato más diverso para los inversionistas. Algunas de las mejores opciones incluyen Meydan Free Zone e IFZA (International Free Zone Authority).'
    },
    {
      name: 'Abu Dhabi',
      zones: ['Masdar City'],
      description: 'Abu Dhabi cuenta con más de 8 free zones principales. Masdar City Free Zone es un hub pionero en sostenibilidad, energía limpia, tecnología e innovación, ofreciendo un ecosistema de vanguardia con instalaciones de clase mundial.'
    },
    {
      name: 'Sharjah',
      zones: ['SPC Free Zone', 'Sharjah Media City'],
      description: 'Sharjah opera alrededor de 6 free zones. SPC Free Zone ofrece más de 1.500 actividades comerciales, abarcando comercio, consultoría, medios, tecnología, e-commerce y servicios.'
    },
    {
      name: 'Ajman',
      zones: ['Ajman Free Zone'],
      description: 'Ajman Free Zone se ha consolidado como una opción reconocida por sus costos accesibles para pequeños emprendedores. Es ideal para comercio, consultoría, e-commerce y freelancers.'
    },
    {
      name: 'Ras Al Khaimah',
      zones: ['RAKEZ'],
      description: 'RAKEZ es conocida por ser una de las free zones más rentables de los EAU, ofreciendo licencias para negocios industriales, manufactura, comercio, educación, medios y servicios.'
    },
    {
      name: 'Fujairah',
      zones: ['Creative City'],
      description: 'Fujairah Creative City es ideal para medios, consultoría, servicios de TI y freelancers, ofreciendo paquetes sin necesidad de espacio de oficina físico.'
    },
    {
      name: 'Umm Al Quwain',
      zones: ['UAQ FTZ'],
      description: 'UAQ Free Trade Zone es popular por sus opciones de configuración simples, accesibles y flexibles. Particularmente atractiva para freelancers, pequeños comerciantes, startups y negocios de consultoría.'
    }
  ]

  const services = [
    { num: '01', title: 'Apertura de empresa en free zone en Emiratos Árabes Unidos', desc: 'Asesoría para establecer tu empresa en una free zone de Emiratos Árabes Unidos, incluyendo licencias, cumplimiento normativo y soporte completo de registro.' },
    { num: '02', title: 'Apertura de empresa en mainland en Emiratos Árabes Unidos', desc: 'Acompañamiento completo para abrir tu empresa en mainland en Emiratos Árabes Unidos, incluyendo licencias, aprobaciones locales y requisitos legales.' },
    { num: '03', title: 'Tramitación de visa de residencia', desc: 'Asesoría integral para obtener tu visa de residencia en Emiratos Árabes Unidos, incluyendo la preparación de documentos y los trámites ante las autoridades.' },
    { num: '04', title: 'Seguro médico básico', desc: 'Orientación y apoyo para contratar el seguro médico básico obligatorio para ti y tus empleados.' },
    { num: '05', title: 'Asistencia para la apertura de cuenta bancaria', desc: 'Soporte profesional para abrir cuentas bancarias corporativas y personales en bancos de Emiratos Árabes Unidos de forma ágil y eficiente.' },
    { num: '06', title: 'Registro y declaración del impuesto corporativo', desc: 'Asesoría completa para registrar tu empresa en el impuesto corporativo y presentar las declaraciones conforme a la normativa de Emiratos Árabes Unidos.' },
    { num: '07', title: 'Registro y declaración de IVA', desc: 'Apoyo en el registro, declaración y cumplimiento del IVA para asegurar que tu empresa cumpla con todos los requisitos fiscales en Emiratos Árabes Unidos.' },
    { num: '08', title: 'Servicios de contabilidad', desc: 'Contabilidad precisa y oportuna para gestionar tus registros financieros, transacciones y necesidades de reportes.' },
    { num: '09', title: 'Liquidación y cancelación de empresas', desc: 'Apoyo para cerrar tu empresa de forma legal, gestionar la cancelación y resolver cualquier obligación pendiente.' },
  ]

  const testimonials = [
    {
      text: "Excelente servicio, muy eficientes y te mantienen informado durante todo el proceso. Los recomiendo totalmente. El asesor que llevó mi caso fue muy atento y servicial.",
      name: 'Mark',
      country: 'GB'
    },
    {
      text: "Si estás buscando establecer residencia fiscal en los EAU, ¡Ramshad es el indicado! Muchas empresas cobran de más y pueden ser poco confiables, Ramshad es real y fue más allá de lo esperado. ¡Quedé configurado en aproximadamente un mes!",
      name: 'Alex P',
      country: 'GB'
    },
    {
      text: "Ramshad en Easy Free Zone Setup hizo que el proceso de crear nuestras LLC en los EAU fuera muy fácil. Honesto, transparente y siempre fue más allá, respondiendo a las millones de preguntas que teníamos, tampoco hubo cargos ocultos.",
      name: 'Alisha Cooke',
      country: 'GB'
    },
    {
      text: "He tenido una experiencia excepcional con Easy Free Zone Setup FZC LLC, y mucho de eso es gracias al excepcional servicio al cliente de Deepanshu. La empresa demuestra profesionalismo y eficiencia. Disponible 24/7, siempre receptivo, conocedor y dispuesto a ir más allá.",
      name: 'Aman',
      country: 'NO'
    },
    {
      text: "Información muy clara y concisa proporcionando la información solicitada y más cuando se trata de cambiar autoridades regulatorias para licencias comerciales con aspectos comerciales en mente.",
      name: 'Adam Long',
      country: 'ES'
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
                Crea tu empresa en Emiratos Árabes Unidos — <span>rápido, simple y 100% legal</span>
              </h1>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="hero-subtitle-modern"
            >
              Desde la creación de tu empresa hasta visas y banca — nos encargamos de todo para que tú te enfoques en crecer
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="hero-stats-inline"
            >
              <div className="stat-badge">
                <FaClock />
                <span>Apertura en 2 a 3 días</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-badge">
                <FaStar />
                <span>+100 empresas</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-badge">
                <FaShieldAlt />
                <span>100% legal</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="hero-cta-buttons"
            >
              <a href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20Emiratos%20%C3%81rabes%20Unidos" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <FaArrowRight /> Crear mi empresa
              </a>
              <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Agendar una asesoría
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
            <span className="section-label-modern">FREE ZONES</span>
            <h2 className="section-title-modern">Las mejores Free Zone de Emiratos Árabes Unidos</h2>
            <p className="section-description-modern">Únete a miles de emprendedores exitosos que nos eligieron para abrir su empresa en Emiratos Árabes Unidos. Ofrecemos soluciones integrales para la creación de empresas en Free Zones de Dubái, con resultados garantizados.</p>
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
                <div className="zone-logo-wrapper">
                  {zone.logo ? (
                    <img
                      src={zone.logo}
                      alt={`${zone.name} logo`}
                      className="zone-logo-img"
                      loading="lazy"
                    />
                  ) : (
                    <div className="zone-logo-fallback">{zone.code || zone.name}</div>
                  )}
                </div>
                <h3 className="zone-name-modern">{zone.name}</h3>
                <div className="zone-price-modern">
                  <span className="zone-price-label">DESDE</span>
                  <span className="zone-price-amount">AED {zone.price}</span>
                </div>
                <Link to="/es/contacto" className="btn btn-primary btn-zone-card">
                  Registrar mi empresa <FaArrowRight />
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
            <span className="section-label-modern">CARACTERÍSTICAS</span>
            <h2 className="section-title-modern">Sobre las free zones de los 7 Emiratos</h2>
            <p className="section-description-modern">7 Emiratos • Más de 7 free zones • Oportunidades ilimitadas</p>
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
                    <span className="emirate-label-modern">PUNTOS CLAVE</span>
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
            <span className="section-label-modern">SOLUCIÓN INTEGRAL</span>
            <h2 className="section-title-modern">Nuestros servicios</h2>
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
            <span className="section-label-modern">¿POR QUÉ ELEGIR EASY FREE ZONE SETUP?</span>
            <h2 className="section-title-modern">Los principales expertos en creación de empresas en free zones de Dubái</h2>
            <p className="section-description-modern">Únete a miles de emprendedores exitosos que nos eligieron para abrir su empresa en Emiratos Árabes Unidos. Ofrecemos soluciones integrales para la creación de empresas en free zones de Dubái, con resultados garantizados.</p>
          </motion.div>

          <div className="why-grid-modern">
            {[
              { icon: <FaClock />, title: 'Apertura rápida en 2 a 3 días', desc: 'Proceso de registro empresarial ágil y simplificado, con toda la documentación gestionada de forma profesional.', label: 'Rapidez de ejecución' },
              { icon: <FaUsers />, title: 'Asesoría experta', desc: 'Consultores profesionales especializados en creación de empresas en Emiratos Árabes Unidos, licencias y cumplimiento normativo.', label: 'Experiencia' },
              { icon: <FaDollarSign />, title: 'Precios transparentes', desc: 'Sin cargos ocultos. Ofrecemos un desglose claro y transparente de costos, con tarifas alineadas a las autoridades de las free zones.', label: 'Mejores precios' },
              { icon: <FaShieldAlt />, title: '100% propiedad', desc: 'Propiedad extranjera total en free zones de Emiratos Árabes Unidos, con control completo sobre las decisiones de tu negocio.', label: 'Control total' }
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
            <span className="section-label-modern">TESTIMONIOS</span>
            <h2 className="section-title-modern">Recomendado por emprendedores</h2>
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
            <span className="section-label-modern">COMPARACIÓN</span>
            <h2 className="section-title-modern">Diferencias entre free zone y Mainland</h2>
            <p className="section-description-modern">Conoce las principales diferencias entre abrir una empresa en free zone y en Mainland en Emiratos Árabes Unidos para tomar la mejor decisión para tu negocio.</p>
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
              <h3 className="comparison-title-modern">free zone en Emiratos Árabes Unidos</h3>
              <p className="comparison-subtitle-modern">Ideal para negocios internacionales que buscan 100% de propiedad y beneficios fiscales</p>
              <ul className="comparison-list-modern">
                <li><FaCheck /> 100% de propiedad extranjera</li>
                <li><FaCheck /> Entorno libre de impuestos</li>
                <li><FaCheck /> Repatriación sencilla de capital</li>
                <li><FaCheck /> Proceso de apertura simplificado</li>
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
              <h3 className="comparison-title-modern">Mainland en Emiratos Árabes Unidos</h3>
              <p className="comparison-subtitle-modern">Ideal para empresas que buscan operar en el mercado local de Emiratos Árabes Unidos con acceso total</p>
              <ul className="comparison-list-modern">
                <li><FaCheck /> Acceso total al mercado de Emiratos Árabes Unidos</li>
                <li><FaCheck /> Elegibilidad para contratos gubernamentales</li>
                <li><FaCheck /> Sin restricciones geográficas</li>
                <li><FaCheck /> Mayor alcance de actividades comerciales</li>
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
              <h3 className="comparison-header-title">Comparación detallada</h3>
              <p className="comparison-header-desc">Comparación completa para ayudarte a tomar la mejor decisión para tu negocio</p>
            </motion.div>
            
            <div className="comparison-aspects-grid">
              {[
                {
                  aspect: 'Propiedad',
                  freezone: 'Se permite el 100% de propiedad extranjera',
                  mainland: '100% de propiedad extranjera en la mayoría de los sectores'
                },
                {
                  aspect: 'Requisitos de oficina',
                  freezone: 'No requiere oficina física',
                  mainland: 'La oficina física es obligatoria'
                },
                {
                  aspect: 'Alcance del negocio',
                  freezone: 'Diseñado principalmente para negocios B2B, con excepción de algunas actividades comerciales',
                  mainland: 'Diseñado para negocios B2B y B2C'
                },
                {
                  aspect: 'Impuestos',
                  freezone: 'Existen algunas excepciones; sin embargo, aplican todos los impuestos correspondientes en Emiratos Árabes Unidos',
                  mainland: 'Aplican todos los impuestos de Emiratos Árabes Unidos'
                },
                {
                  aspect: 'Flexibilidad de visas',
                  freezone: 'Posibilidad de múltiples visas sin necesidad de una oficina física',
                  mainland: 'La cantidad de visas disponibles depende del tamaño de la oficina'
                },
                {
                  aspect: 'Licencias y procedimientos',
                  freezone: 'De 2 a 3 días hábiles sin presencia física de los accionistas',
                  mainland: 'De 5 a 10 días hábiles con presencia física de los accionistas'
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
                        <span className="option-label">FREE ZONE</span>
                      </div>
                      <p className="option-text">{item.freezone}</p>
                    </div>
              
                    <div className="comparison-divider">
                      <span className="divider-text">VS</span>
                    </div>
              
                    <div className="comparison-option mainland-option">
                      <div className="option-header">
                        <FaGlobe className="option-icon" />
                        <span className="option-label">MAINLAND</span>
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
                <strong>Nota:</strong> La información se presenta como una comparación informativa. Consulta con expertos en creación de empresas para determinar la mejor opción según tus necesidades específicas.
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
            <span className="section-label-modern">CALCULADORA DE COSTOS</span>
            <h2 className="section-title-modern">Obtén tu cotización instantánea para abrir tu empresa en Free Zone</h2>
            <p className="section-description-modern">Calcula los costos de apertura de tu empresa en minutos. Obtén una cotización detallada al instante.</p>
          </motion.div>
          <CostCalculatorES />
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
            <h2 className="cta-title-modern">Empieza hoy tu negocio en Emiratos Árabes Unidos</h2>
            <p className="cta-desc-modern">Consulta gratuita • Apertura rápida • 100% transparencia</p>
            <div className="cta-buttons-group">
              <a href="https://wa.me/971551690373?text=Hola%2C%20quiero%20crear%20una%20empresa%20en%20Emiratos%20%C3%81rabes%20Unidos" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large">
                <FaArrowRight /> Crear mi empresa
              </a>
              <a href="https://admin-easyfreezonesetup.zohobookings.com/#/Startcompanyintheuae" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-large">
                Agendar consulta
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default HomeES
