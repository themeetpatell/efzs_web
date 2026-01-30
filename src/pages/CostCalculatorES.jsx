import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaIdCard, FaEnvelope, FaPhone, FaCalculator, FaCheck, FaChevronLeft, FaChevronRight, FaDownload, FaFileAlt } from 'react-icons/fa'
import jsPDF from 'jspdf'

const CostCalculatorES = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    freeZone: '',
    businessActivity: '',
    visas: '',
    email: '',
    phone: ''
  })

  const freeZones = [
    { name: 'Dubai Free Zone', code: 'DUBAI', costs: { 0: 12500, 1: 21150, 2: 27800, 3: 34450 } },
    { name: 'Sharjah Free Zone', code: 'SHARJAH', costs: { 0: 6885, 1: 14300, 2: 18795, 3: 23290 } },
    { name: 'Abu Dhabi Free Zone', code: 'ABUDHABI', costs: { 0: 7000, 1: 16550, 2: 22400, 3: 28250 } },
    { name: 'Ajman Free Zone', code: 'AJMAN', costs: { 0: 5555, 1: 13131, 2: 17171, 3: 21212 } },
    { name: 'RAK Free Zone', code: 'RAK', costs: { 0: 6010, 1: 12010, 2: 18100, 3: 24010 } },
    { name: 'UAQ Free Zone', code: 'UAQ', costs: { 0: 5500, 1: 12500, 2: 17500, 3: 22500 } },
    { name: 'Fujairah Free Zone', code: 'FURJ', costs: { 0: 5530, 1: 12500, 2: 15530, 3: 19530 } }
  ]

  const businessActivities = [
    { name: 'E-Commerce', multiplier: 1.0 },
    { name: 'Consultoría de TI', multiplier: 0.9 },
    { name: 'Agencia de Publicidad', multiplier: 0.9 },
    { name: 'Desarrollo de Software', multiplier: 0.9 },
    { name: 'Consultoría de Negocios', multiplier: 0.9 },
    { name: 'Consultoría de Gestión', multiplier: 0.9 },
    { name: 'Comercio General', multiplier: 1.0 },
    { name: 'Marketing Digital', multiplier: 0.9 },
    { name: 'Educación y Capacitación', multiplier: 0.9 },
    { name: 'Ventas y Marketing', multiplier: 0.9 },
    { name: 'Otras Actividades Comerciales', multiplier: 1.0 }
  ]

  const visaOptions = [0, 1, 2, 3]

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getSelectedFreeZone = () => {
    return freeZones.find(zone => zone.name === formData.freeZone)
  }

  const getSelectedZoneCost = () => {
    const selectedZone = getSelectedFreeZone()
    const visaCount = parseInt(formData.visas, 10)

    if (!selectedZone || Number.isNaN(visaCount)) {
      return null
    }

    return selectedZone.costs?.[visaCount] ?? null
  }

  const calculateCost = () => {
    const selectedZone = getSelectedFreeZone()
    const visaCount = parseInt(formData.visas, 10)

    if (!selectedZone || Number.isNaN(visaCount)) {
      return {
        packageCost: 0,
        total: 0
      }
    }

    const packageCost = selectedZone.costs?.[visaCount] ?? 0

    return {
      packageCost,
      total: Math.round(packageCost)
    }
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const generateQuoteNumber = () => {
    const prefix = 'QT-'
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
    return prefix + random
  }

  const isValidEmail = (value) => {
    if (!value) return false
    const trimmed = value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailPattern.test(trimmed)
  }

  const isValidPhone = (value) => {
    if (!value) return false
    const digitsOnly = value.replace(/[^\d+]/g, '')
    const phonePattern = /^\+?\d{7,15}$/
    return phonePattern.test(digitsOnly)
  }

  const costBreakdown = calculateCost()
  const progress = (currentStep / 5) * 100
  const emailInvalid = formData.email !== '' && !isValidEmail(formData.email)
  const phoneInvalid = formData.phone !== '' && !isValidPhone(formData.phone)

  const generatePDF = async () => {
    const selectedZone = getSelectedFreeZone()
    const visaCount = parseInt(formData.visas, 10) || 0
    const packageCost = selectedZone?.costs?.[visaCount] || 0
    const subjectText = `Cotización para abrir empresa en ${selectedZone?.name || 'la Free Zone elegida'}`

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()

    const primaryColor = { r: 14, g: 70, b: 190 }
    const darkColor = { r: 6, g: 41, b: 126 }
    const accentColor = { r: 255, g: 166, b: 43 }
    const lightPanel = { r: 245, g: 248, b: 255 }

    let yPos = 0

    const setColor = (colorObj) => {
      doc.setFillColor(colorObj.r, colorObj.g, colorObj.b)
      doc.setTextColor(colorObj.r, colorObj.g, colorObj.b)
    }

    const headerHeight = 45
    doc.setFillColor(255, 255, 255)
    doc.rect(0, 0, pageWidth, headerHeight + 18, 'F')
    doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.rect(0, headerHeight + 12, pageWidth, 2, 'F')

    let logoX = 20
    let logoY = 14
    let logoWidth = 45
    let logoHeight = 0

    try {
      const logoImg = await new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d', { willReadFrequently: true })
          ctx.drawImage(img, 0, 0)
          const imgData = canvas.toDataURL('image/png')
          resolve({ data: imgData, width: img.width, height: img.height })
        }
        img.onerror = reject
        img.src = '/efzslogo.png'
        setTimeout(() => reject(new Error('Logo load timeout')), 5000)
      })

      logoHeight = (logoImg.height / logoImg.width) * logoWidth
      doc.addImage(logoImg.data, 'PNG', logoX, logoY, logoWidth, logoHeight)
      logoX = logoX + logoWidth + 10
    } catch (error) {
      console.warn('Could not load logo:', error)
      logoX = 20
    }

    doc.setTextColor(darkColor.r, darkColor.g, darkColor.b)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Easy Free Zone Setup', logoX, 22)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('FZC LLC | Business Centre', logoX, 30)
    doc.text('Sharjah Publishing City Free Zone', logoX, 36)
    doc.text('Website: www.easyfreezonesetup.com', logoX, 42)

    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.text('COTIZACIÓN', pageWidth - 20, 30, { align: 'right' })

    yPos = headerHeight + 32

    const quoteNumber = generateQuoteNumber()
    const quoteDate = new Date().toLocaleDateString('es-ES')

    let rightColX = pageWidth - 20
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)

    rightColX = pageWidth - 20
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(`Cotización#: ${quoteNumber}`, rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.setFont('helvetica', 'normal')
    doc.text(`Fecha: ${quoteDate}`, rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.text('Contacto: Easy Free Zone Setup team', rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.text('Email: info@easyfreezonesetup.com', rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.text('Teléfono: +971 52 167 6155', rightColX, yPos, { align: 'right' })

    yPos = headerHeight + 32
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Facturar a', 20, yPos)
    yPos += 6
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.text(formData.email || 'No proporcionado', 20, yPos)
    yPos += 5
    doc.text(formData.phone || 'No proporcionado', 20, yPos)

    yPos += 10
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text('Easy Free Zone Setup FZC LLC', 20, yPos)
    yPos += 4
    doc.text('Business Centre, Sharjah Publishing City Free Zone', 20, yPos)
    yPos += 8
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    setColor(primaryColor)
    doc.text(`Asunto: ${subjectText}`, 20, yPos)
    doc.setTextColor(0, 0, 0)

    yPos += 12
    doc.setFillColor(lightPanel.r, lightPanel.g, lightPanel.b)
    doc.rect(20, yPos, pageWidth - 40, 16, 'F')
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text(`Free Zone: ${selectedZone?.name || 'Selección pendiente'}  |  Paquete de visas: ${visaCount} visa${visaCount !== 1 ? 's' : ''}`, 26, yPos + 11)

    yPos += 26

    const tableTop = yPos
    const leftMargin = 20
    const rightMargin = pageWidth - 20
    const tableWidth = rightMargin - leftMargin
    const colX = [
      leftMargin + 5,
      leftMargin + 18,
      rightMargin - 70,
      rightMargin - 50,
      rightMargin - 20
    ]

    const tableHeaderHeight = 14
    if (doc.roundedRect) {
      doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b)
      doc.roundedRect(leftMargin, tableTop, tableWidth, tableHeaderHeight, 2, 2, 'F')
    } else {
      doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b)
      doc.rect(leftMargin, tableTop, tableWidth, tableHeaderHeight, 'F')
    }

    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('#', colX[0], tableTop + 9)
    doc.text('Concepto', colX[1], tableTop + 9)
    doc.text('Cant.', colX[2], tableTop + 9, { align: 'right' })
    doc.text('Tarifa (AED)', colX[3], tableTop + 9, { align: 'right' })
    doc.text('Monto (AED)', colX[4], tableTop + 9, { align: 'right' })

    yPos = tableTop + tableHeaderHeight
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)

    const items = [
      {
        name: `Paquete ${selectedZone?.name || 'Free Zone'} (${visaCount} visa${visaCount !== 1 ? 's' : ''})`,
        qty: 1,
        rate: Math.round(packageCost),
        amount: Math.round(packageCost)
      }
    ]

    const validItems = items.filter(item => item.qty > 0)
    doc.setDrawColor(230, 230, 230)
    doc.setLineWidth(0.1)

    const rowHeight = 14
    validItems.forEach((item, index) => {
      const rowY = yPos + 9
      const isEven = index % 2 === 0
      doc.setFillColor(isEven ? 249 : 255, isEven ? 251 : 255, 255)
      doc.rect(leftMargin, yPos - 1, tableWidth, rowHeight, 'F')

      doc.text((index + 1).toString(), colX[0], rowY)
      doc.text(item.name, colX[1], rowY)
      doc.text(item.qty.toFixed(2), colX[2], rowY, { align: 'right' })
      doc.text(item.rate.toLocaleString(), colX[3], rowY, { align: 'right' })
      doc.text(item.amount.toLocaleString(), colX[4], rowY, { align: 'right' })
      doc.line(leftMargin, yPos + rowHeight - 2, rightMargin, yPos + rowHeight - 2)
      yPos += rowHeight
    })

    const tableBottomAfterRows = yPos
    doc.setDrawColor(220, 226, 235)
    doc.setLineWidth(0.4)
    if (doc.roundedRect) {
      doc.roundedRect(leftMargin, tableTop, tableWidth, tableBottomAfterRows - tableTop, 2, 2, 'S')
    } else {
      doc.rect(leftMargin, tableTop, tableWidth, tableBottomAfterRows - tableTop, 'S')
    }

    const subtotal = validItems.reduce((sum, item) => sum + item.amount, 0)
    yPos += 6
    const subBoxH = 14
    doc.setFillColor(lightPanel.r, lightPanel.g, lightPanel.b)
    if (doc.roundedRect) {
      doc.roundedRect(leftMargin, yPos, tableWidth, subBoxH, 2, 2, 'F')
    } else {
      doc.rect(leftMargin, yPos, tableWidth, subBoxH, 'F')
    }
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.setTextColor(0, 0, 0)
    doc.text('Subtotal', colX[3], yPos + 10, { align: 'right' })
    doc.text(subtotal.toLocaleString(), colX[4], yPos + 10, { align: 'right' })
    yPos += subBoxH + 8

    yPos += 10
    doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b)
    if (doc.roundedRect) {
      doc.roundedRect(leftMargin, yPos, tableWidth, 16, 2, 2, 'F')
    } else {
      doc.rect(leftMargin, yPos, tableWidth, 16, 'F')
    }
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(12)
    doc.setFont('helvetica', 'bold')
    doc.text('Total', colX[3], yPos + 11, { align: 'right' })
    doc.text(`AED ${subtotal.toLocaleString()}`, colX[4], yPos + 11, { align: 'right' })

    yPos += 24
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Gracias por elegir Easy FreezoneSetup.', leftMargin, yPos)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.text('Nuestros consultores se comunicarán contigo para finalizar tu paquete personalizado.', leftMargin, yPos + 6)

    doc.addPage()
    yPos = 16
    doc.setFillColor(255, 255, 255)
    doc.rect(0, 0, pageWidth, 20, 'F')
    doc.setTextColor(darkColor.r, darkColor.g, darkColor.b)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Notas Importantes y Requisitos', 20, 14)
    doc.setDrawColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.setLineWidth(0.8)
    doc.line(20, 18, pageWidth - 20, 18)

    yPos += 14
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('NOTAS:', 20, yPos)

    yPos += 8
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(9.5)
    doc.setTextColor(180, 0, 0)
    doc.setLineHeightFactor && doc.setLineHeightFactor(1.5)
    doc.text('Esta es una cotización generada automáticamente según los datos básicos proporcionados.', 20, yPos, { maxWidth: pageWidth - 40 })
    yPos += 7
    doc.text('La cotización final se compartirá una vez que recibamos la información completa.', 20, yPos, { maxWidth: pageWidth - 40 })
    yPos += 7
    doc.text('Le solicitamos contactar a nuestro representante de ventas para una consulta detallada.', 20, yPos, { maxWidth: pageWidth - 40 })

    yPos += 12
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Información y documentos requeridos de cada accionista:', 20, yPos)

    yPos += 14
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    const requirements = [
      '3 opciones de nombre de empresa en orden de prioridad;',
      'Copia a color del pasaporte (doble página);',
      'Correo electrónico;',
      'Número de teléfono;',
      'Dirección residencial;',
      'Comprobante de domicilio;',
      'Emirates ID válido y visa de EAU (si es residente);',
      'Foto tamaño pasaporte (fondo blanco, sin sonrisa, joyas o lentes).'
    ]

    requirements.forEach(req => {
      doc.text(`• ${req}`, 25, yPos, { maxWidth: pageWidth - 50 })
      yPos += 7
    })

    yPos += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.text('Documentos adicionales requeridos durante el proceso para nacionalidades y actividades de alto riesgo:', 20, yPos, { maxWidth: pageWidth - 40 })
    
    yPos += 14
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    const additionalDocs = [
      'Origen de los fondos;',
      'Estados de cuenta bancarios personales;',
      'Comprobante de domicilio;',
      'Modelo o plan de negocio;',
      'Completar el cuestionario de la autoridad.'
    ]

    additionalDocs.forEach(docItem => {
      doc.text(`• ${docItem}`, 25, yPos, { maxWidth: pageWidth - 50 })
      yPos += 7
    })

    doc.save(`cotizacion-${quoteNumber}.pdf`)
  }

  const sendToGoogleSheets = async (data) => {
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxcYfgPn7TP07pTDD2vNKayR7vukmxUpVzBo7Wirmh_nRvRnFBBPNhmF8uxt-F7nelZqw/exec'
    
    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      
      console.log('Data sent to Google Sheets successfully')
      return true
    } catch (error) {
      console.error('Error sending data to Google Sheets:', error)
      return false
    }
  }

  const handleSubmit = async () => {
    if (isSubmitting) return
    
    const { freeZone, businessActivity, visas, email, phone } = formData
    if (!freeZone || !businessActivity || !visas || !email || !phone) {
      alert('Por favor complete todos los campos')
      return
    }

    if (!isValidEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido')
      return
    }

    if (!isValidPhone(phone)) {
      alert('Por favor ingrese un número de teléfono válido (7-15 dígitos)')
      return
    }

    setIsSubmitting(true)
    try {
      const costBreakdown = calculateCost()
      const timestamp = new Date().toISOString()
      const leadData = {
        timestamp,
        freeZone,
        businessActivity,
        visasRequired: visas,
        email,
        phone,
        packageCost: costBreakdown.packageCost,
        serviceFee: costBreakdown.serviceFee,
        totalCost: costBreakdown.total,
        quoteNumber: generateQuoteNumber(),
        source: 'UAE Cost Calculator - Spanish',
        currency: 'AED'
      }

      await sendToGoogleSheets(leadData)
      await generatePDF()
    } finally {
      setIsSubmitting(false)
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="calculator-step">
            <div className="step-icon-wrapper">
              <FaMapMarkerAlt className="step-icon" />
            </div>
            <h2 className="step-title">Elige tu Free Zone</h2>
            <p className="step-description">Selecciona la Free Zone en Emiratos Árabes Unidos que mejor se adapte a las necesidades de tu negocio</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.freeZone}
                onChange={(e) => updateFormData('freeZone', e.target.value)}
              >
                <option value="">Selecciona una Free Zone</option>
                {freeZones.map((zone, index) => (
                  <option key={index} value={zone.name}>{zone.name}</option>
                ))}
              </select>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="calculator-step">
            <div className="step-icon-wrapper">
              <FaBriefcase className="step-icon" />
            </div>
            <h2 className="step-title">Selecciona tu Actividad Comercial</h2>
            <p className="step-description">Elige la actividad que mejor describe tu negocio</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.businessActivity}
                onChange={(e) => updateFormData('businessActivity', e.target.value)}
              >
                <option value="">Selecciona una actividad comercial</option>
                {businessActivities.map((activity, index) => (
                  <option key={index} value={activity.name}>{activity.name}</option>
                ))}
              </select>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="calculator-step">
            <div className="step-icon-wrapper">
              <FaIdCard className="step-icon" />
            </div>
            <h2 className="step-title">Número de Visas Requeridas</h2>
            <p className="step-description">¿Cuántas visas necesitas para tu negocio?</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.visas}
                onChange={(e) => updateFormData('visas', e.target.value)}
              >
                <option value="">Selecciona el número de visas</option>
                {visaOptions.map((num) => (
                  <option key={num} value={num}>{num} Visa{num !== 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
        )
      case 4:
        return (
          <div className="calculator-step">
            <div className="step-icon-wrapper">
              <FaEnvelope className="step-icon" />
            </div>
            <h2 className="step-title">Correo Electrónico</h2>
            <p className="step-description">Por favor proporciona tu correo electrónico para la cotización</p>
            <div className="step-input-wrapper">
              <input
                type="email"
                className="step-input"
                placeholder="Ingresa tu correo electrónico"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
              />
              {emailInvalid && <div className="input-error">Por favor ingresa un correo electrónico válido</div>}
            </div>
          </div>
        )
      case 5:
        return (
          <div className="calculator-step">
            <div className="step-icon-wrapper">
              <FaPhone className="step-icon" />
            </div>
            <h2 className="step-title">Datos de Contacto</h2>
            <p className="step-description">Por favor proporciona tu número de teléfono para la cotización</p>
            <div className="step-input-wrapper">
              <input
                type="tel"
                className="step-input"
                placeholder="Ingresa tu número de teléfono"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
              />
              {phoneInvalid && <div className="input-error">Ingresa 7-15 dígitos, solo números y + opcional al inicio</div>}
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="calculator-page">
      <div className="calculator-container">
        <div className="calculator-main">
          <div className="calculator-header">
            <div className="step-indicator">
              <div className="step-number">{currentStep}</div>
              <span className="step-label">Paso {currentStep} de 5</span>
            </div>
            <div className="progress-info">
              <span>{Math.round(progress)}% completado</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>

          <div className="top-disclaimer">
            <span className="disclaimer-icon">💡</span>
            <p>Esta es una estimación en tiempo real. El precio final puede variar según los requisitos específicos y los servicios adicionales.</p>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderStep()}
            </motion.div>
          </AnimatePresence>

          <div className="calculator-navigation">
            <button
              className="btn-nav btn-prev"
              onClick={prevStep}
              disabled={currentStep === 1}
            >
              <FaChevronLeft /> Anterior
            </button>
            {currentStep < 5 ? (
              <button
                className="btn-nav btn-next"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.freeZone) ||
                  (currentStep === 2 && !formData.businessActivity) ||
                  (currentStep === 3 && !formData.visas) ||
                  (currentStep === 4 && (!formData.email || emailInvalid)) ||
                  (currentStep === 5 && (!formData.phone || phoneInvalid))
                }
              >
                Siguiente paso <FaChevronRight />
              </button>
            ) : (
              <button
                className="btn-nav btn-submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <FaDownload /> {isSubmitting ? 'Procesando...' : 'Enviar y Descargar Cotización'}
              </button>
            )}
          </div>
        </div>

        <div className="calculator-sidebar">
          <div className="sidebar-header">
            <FaCalculator className="sidebar-icon" />
            <h3 className="sidebar-title">Resumen de costos en tiempo real</h3>
            <p className="sidebar-subtitle">Se actualiza a medida que realizas tus selecciones</p>
          </div>

          <div className="cost-summary-box">
            <div className="cost-label">TOTAL ESTIMADO</div>
            <div className="cost-amount">
              {costBreakdown.total > 0 ? `AED ${costBreakdown.total.toLocaleString()}` : 'AED 0'}
            </div>
            <div className="cost-note">
              {costBreakdown.total > 0 ? 'Según tus selecciones' : 'Completa el formulario para calcular'}
            </div>
          </div>

          <div className="selections-section">
            <div className="selections-header">
              <FaCheck className="selections-icon" />
              <h4 className="selections-title">Tus selecciones</h4>
            </div>
            <div className="selection-item">
              <span className="selection-label">FREE ZONE:</span>
              <span className="selection-value">
                {formData.freeZone || 'Aún no seleccionado'}
                {getSelectedZoneCost() !== null && (
                  <span className="selection-price">AED {getSelectedZoneCost().toLocaleString()}</span>
                )}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">ACTIVIDAD COMERCIAL:</span>
              <span className="selection-value">
                {formData.businessActivity || 'Aún no seleccionado'}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">VISAS REQUERIDAS:</span>
              <span className="selection-value">
                {formData.visas ? `${formData.visas} visas` : 'Aún no seleccionado'}
                {formData.visas && <span className="selection-visa">{formData.visas} Visa</span>}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">DATOS DE CONTACTO:</span>
              <div className="selection-contact">
                <div>Correo electrónico: {formData.email || 'Aún no proporcionado'}</div>
                <div>Teléfono: {formData.phone || 'Aún no proporcionado'}</div>
              </div>
            </div>
          </div>

          <div className="sidebar-progress">
            <span>Progreso {Math.round(progress)}%</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {currentStep === 5 && (
            <div className="ready-section">
              <p>Haz clic en "Enviar y Descargar" para obtener tu cotización detallada</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CostCalculatorES
