import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaIdCard, FaEnvelope, FaPhone, FaCalculator, FaCheck, FaChevronLeft, FaChevronRight, FaDownload, FaFileAlt } from 'react-icons/fa'
import jsPDF from 'jspdf'

const LatinAmericaCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    jurisdiction: '',
    businessActivity: '',
    visas: '',
    email: '',
    phone: ''
  })

  const jurisdictions = [
    { name: 'Dubai Free Zone', code: 'DUBAI', costs: { 0: 3405.99, 1: 5762.94, 2: 7574.93, 3: 9386.92 } },
    { name: 'Sharjah Free Zone', code: 'SHARJAH', costs: { 0: 1876.02, 1: 3896.46, 2: 5121.25, 3: 6346.05 } },
    { name: 'Abu Dhabi Free Zone', code: 'ABUDHABI', costs: { 0: 1907.36, 1: 4509.54, 2: 6103.54, 3: 7697.55 } },
    { name: 'Ajman Free Zone', code: 'AJMAN', costs: { 0: 1513.62, 1: 3577.93, 2: 4678.75, 3: 5779.84 } },
    { name: 'RAK Free Zone', code: 'RAK', costs: { 0: 1637.60, 1: 3272.48, 2: 4907.36, 3: 6542.23 } },
    { name: 'UAQ Free Zone', code: 'UAQ', costs: { 0: 1498.64, 1: 3405.99, 2: 4768.39, 3: 6130.79 } },
    { name: 'Furjairah Free Zone', code: 'FURJAIRAH', costs: { 0: 1506.81, 1: 3405.99, 2: 4231.61, 3: 5321.53 } }
  ]

  const serviceFee = 1888.64 // Service fee in USD

  const businessActivities = [
    { name: 'E-Commerce', multiplier: 1.0 },
    { name: 'IT Consultancy', multiplier: 0.9 },
    { name: 'Advertising Agency', multiplier: 0.9 },
    { name: 'Software Development', multiplier: 0.9 },
    { name: 'Business Consultancy', multiplier: 0.9 },
    { name: 'Management Consultancy', multiplier: 0.9 },
    { name: 'General Trading', multiplier: 1.0 },
    { name: 'Digital Marketing', multiplier: 0.9 },
    { name: 'Education & Training', multiplier: 0.9 },
    { name: 'Sales & Marketing', multiplier: 0.9 },
    { name: 'Other Trading Activities', multiplier: 1.0 }
  ]

  const visaOptions = [0, 1, 2, 3]

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getSelectedJurisdiction = () => {
    return jurisdictions.find(j => j.name === formData.jurisdiction)
  }

  const getSelectedJurisdictionCost = () => {
    const selectedJurisdiction = getSelectedJurisdiction()
    const visaCount = parseInt(formData.visas, 10)

    if (!selectedJurisdiction || Number.isNaN(visaCount)) {
      return null
    }

    return selectedJurisdiction.costs?.[visaCount] ?? null
  }

  const calculateCost = () => {
    const selectedJurisdiction = getSelectedJurisdiction()
    const visaCount = parseInt(formData.visas, 10)

    if (!selectedJurisdiction || Number.isNaN(visaCount)) {
      return {
        packageCost: 0,
        serviceFee: 0,
        total: 0
      }
    }

    const packageCost = selectedJurisdiction.costs?.[visaCount] ?? 0

    return {
      packageCost,
      serviceFee,
      total: Math.round(packageCost + serviceFee)
    }
  }

  const costBreakdown = calculateCost()
  const progress = (currentStep / 5) * 100

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
    const prefix = 'QT-LA-'
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

  const generatePDF = async () => {
    const selectedJurisdiction = getSelectedJurisdiction()
    const visaCount = parseInt(formData.visas, 10) || 0
    const packageCost = selectedJurisdiction?.costs?.[visaCount] || 0
    const subjectText = `Quote for setting up business in ${selectedJurisdiction?.name || 'your chosen free zone'}`

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

    // Header: clean white background with subtle blue underline
    const headerHeight = 45
    doc.setFillColor(255, 255, 255)
    doc.rect(0, 0, pageWidth, headerHeight + 18, 'F')
    doc.setFillColor(primaryColor.r, primaryColor.g, primaryColor.b)
    // thinner underline slightly above the meta panel
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

    // Brand and contact in dark text for white header
    doc.setTextColor(darkColor.r, darkColor.g, darkColor.b)
    doc.setFontSize(20)
    doc.setFont('helvetica', 'bold')
    doc.text('Easy Free Zone Setup', logoX, 22)

    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.text('División América Latina', logoX, 30)
    doc.text('Soluciones de Negocios Globales', logoX, 36)
    doc.text('Sitio web: www.easyfreezonesetup.com', logoX, 42)

    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.text('QUOTE', pageWidth - 20, 30, { align: 'right' })

    // start content lower to clear underline and avoid overlap with meta card
    yPos = headerHeight + 32

    const quoteNumber = generateQuoteNumber()
    const quoteDate = new Date().toLocaleDateString('en-GB')

    let rightColX = pageWidth - 20
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)

    // Quote metadata (no card, just text)
    rightColX = pageWidth - 20
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.text(`Cotización #: ${quoteNumber}`, rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.setFont('helvetica', 'normal')
    doc.text(`Fecha de Cotización: ${quoteDate}`, rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.text('Persona de Contacto: Equipo Easy Free Zone Setup', rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.text('Correo: info@easyfreezonesetup.com', rightColX, yPos, { align: 'right' })
    yPos += 6
    doc.text('Teléfono: +971 52 167 6155', rightColX, yPos, { align: 'right' })

    yPos = headerHeight + 32
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(12)
    doc.text('Facturar A', 20, yPos)
    yPos += 6
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(10)
    doc.text(formData.email || 'No proporcionado', 20, yPos)
    yPos += 5
    doc.text(formData.phone || 'No proporcionado', 20, yPos)

    yPos += 10
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text('Easy Free Zone Setup - División América Latina', 20, yPos)
    yPos += 4
    doc.text('Soluciones de Negocios Globales', 20, yPos)
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
    doc.text(`Zona Franca: ${selectedJurisdiction?.name || 'Selección pendiente'}  |  Paquete de Visas: ${visaCount} visa${visaCount !== 1 ? 's' : ''}`, 26, yPos + 11)

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

    // Table header with rounded corners
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
    doc.text('Artículo', colX[1], tableTop + 9)
    doc.text('Cant.', colX[2], tableTop + 9, { align: 'right' })
    doc.text('Tarifa (USD)', colX[3], tableTop + 9, { align: 'right' })
    doc.text('Monto (USD)', colX[4], tableTop + 9, { align: 'right' })

    yPos = tableTop + tableHeaderHeight
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)

    const items = [
      {
        name: `${selectedJurisdiction?.name || 'Zona Franca'} paquete (${visaCount} visa${visaCount !== 1 ? 's' : ''})`,
        qty: 1,
        rate: Math.round(packageCost),
        amount: Math.round(packageCost)
      },
      {
        name: 'Tarifa de Servicio',
        qty: 1,
        rate: serviceFee,
        amount: serviceFee
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

    // Subtle border around the table area (header + rows)
    const tableBottomAfterRows = yPos
    doc.setDrawColor(220, 226, 235)
    doc.setLineWidth(0.4)
    if (doc.roundedRect) {
      doc.roundedRect(leftMargin, tableTop, tableWidth, tableBottomAfterRows - tableTop, 2, 2, 'S')
    } else {
      doc.rect(leftMargin, tableTop, tableWidth, tableBottomAfterRows - tableTop, 'S')
    }

    const subtotal = validItems.reduce((sum, item) => sum + item.amount, 0)
    // Subtotal in a light shaded box (no separator line)
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
    doc.text(`USD ${subtotal.toLocaleString()}`, colX[4], yPos + 11, { align: 'right' })

    yPos += 24
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Gracias por elegir Easy Free Zone Setup.', leftMargin, yPos)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    doc.text('Nuestros consultores se pondrán en contacto para finalizar su paquete personalizado.', leftMargin, yPos + 6)

    doc.addPage()
    yPos = 16
    // Page 2 header consistent with white theme
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
    doc.text('Esta es una cotización generada automáticamente basada en los detalles básicos proporcionados.', 20, yPos, { maxWidth: pageWidth - 40 })
    yPos += 7
    doc.text('La cotización final se puede compartir una vez que recibamos la información completa.', 20, yPos, { maxWidth: pageWidth - 40 })
    yPos += 7
    doc.text('Le pedimos amablemente que se comunique con nuestro representante de ventas para una consulta detallada.', 20, yPos, { maxWidth: pageWidth - 40 })

    yPos += 12
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Información y documentos requeridos:', 20, yPos)

    yPos += 14
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    const requirements = [
      'Documentos de registro empresarial;',
      'Identificación de propietarios/accionistas;',
      'Comprobante de domicilio (comercial y personal);',
      'Número de identificación fiscal o equivalente;',
      'Extractos bancarios (últimos 3-6 meses);',
      'Plan de negocios detallado;',
      'Documentación de fuente de fondos;',
      'Licencias profesionales (si aplica).'
    ]

    requirements.forEach(req => {
      doc.text(`• ${req}`, 25, yPos, { maxWidth: pageWidth - 50 })
      yPos += 7
    })

    yPos += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.setTextColor(primaryColor.r, primaryColor.g, primaryColor.b)
    doc.text('Servicios Adicionales Disponibles:', 20, yPos)

    yPos += 14
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.setTextColor(0, 0, 0)
    const additionalServices = [
      'Formación y registro de entidades legales;',
      'Cumplimiento fiscal y asesoría;',
      'Servicios de contabilidad y teneduría de libros;',
      'Soluciones bancarias y de pagos;',
      'Gestión de recursos humanos y nómina;',
      'Consultoría del mercado local.'
    ]

    additionalServices.forEach(service => {
      doc.text(`• ${service}`, 25, yPos, { maxWidth: pageWidth - 50 })
      yPos += 7
    })

    doc.save(`quotation-${quoteNumber}.pdf`)
  }

  const sendToGoogleSheets = async (data) => {
    // Replace this URL with your Google Apps Script Web App URL
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyuWFA_KPp2DJupYMl3rzXXwsQOma5KpItYHPMBbN430b13hOYNS0PgqEhHpjykmzS9Mw/exec'
    
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
    if (isSubmitting) return // Prevent double submission
    
    const { jurisdiction, businessActivity, visas, email, phone } = formData
    if (!jurisdiction || !businessActivity || !visas || !email || !phone) {
      alert('Please complete all fields')
      return
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address')
      return
    }

    if (!isValidPhone(phone)) {
      alert('Please enter a valid phone number (7-15 digits, digits and optional leading + only)')
      return
    }

    setIsSubmitting(true)
    try {
      // Prepare data for Google Sheets
      const costBreakdown = calculateCost()
      const timestamp = new Date().toISOString()
      const leadData = {
        timestamp,
        freeZone: jurisdiction,
        businessActivity,
        visasRequired: visas,
        email,
        phone,
        packageCost: costBreakdown.packageCost,
        serviceFee: costBreakdown.serviceFee,
        totalCost: costBreakdown.total,
        quoteNumber: generateQuoteNumber(),
        source: 'Latin America Calculator'
      }

      // Send to Google Sheets
      await sendToGoogleSheets(leadData)

      // Generate and download PDF
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
            <h2 className="step-title">Choose Your Free Zone</h2>
            <p className="step-description">Select the UAE free zone that best suits your business</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.jurisdiction}
                onChange={(e) => updateFormData('jurisdiction', e.target.value)}
              >
                <option value="">Select a free zone</option>
                {jurisdictions.map((j, index) => (
                  <option key={index} value={j.name}>{j.name}</option>
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
            <h2 className="step-title">Select Your Business Activity</h2>
            <p className="step-description">Choose the activity that best describes your business</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.businessActivity}
                onChange={(e) => updateFormData('businessActivity', e.target.value)}
              >
                <option value="">Select a business activity</option>
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
            <h2 className="step-title">No of Visa Required</h2>
            <p className="step-description">How many visas do you need for your business?</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.visas}
                onChange={(e) => updateFormData('visas', e.target.value)}
              >
                <option value="">Select number of visas</option>
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
            <h2 className="step-title">Email Address</h2>
            <p className="step-description">Please provide your email address for the quotation</p>
            <div className="step-input-wrapper">
              <input
                type="email"
                className="step-input"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => updateFormData('email', e.target.value)}
              />
            </div>
          </div>
        )
      case 5:
        return (
          <div className="calculator-step">
            <div className="step-icon-wrapper">
              <FaPhone className="step-icon" />
            </div>
            <h2 className="step-title">Contact Information</h2>
            <p className="step-description">Please provide your contact number for the quotation</p>
            <div className="step-input-wrapper">
              <input
                type="tel"
                className="step-input"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => updateFormData('phone', e.target.value)}
              />
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
              <span className="step-label">Step {currentStep} of 5</span>
            </div>
            <div className="progress-info">
              <span>{Math.round(progress)}% Complete</span>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
              </div>
            </div>
          </div>

          <div className="sidebar-disclaimer" style={{ marginBottom: '24px' }}>
            <span className="disclaimer-icon">💡</span>
            <p>This is a live estimate in USD. Final pricing may vary based on specific jurisdiction requirements and additional services.</p>
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
              <FaChevronLeft /> Previous
            </button>
            {currentStep < 5 ? (
              <button
                className="btn-nav btn-next"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.jurisdiction) ||
                  (currentStep === 2 && !formData.businessActivity) ||
                  (currentStep === 3 && !formData.visas) ||
                  (currentStep === 4 && !formData.email)
                }
              >
                Next Step <FaChevronRight />
              </button>
            ) : (
              <button
                className="btn-nav btn-submit"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                <FaDownload /> {isSubmitting ? 'Processing...' : 'Submit & Download Quotation'}
              </button>
            )}
          </div>
        </div>

        <div className="calculator-sidebar">
          <div className="sidebar-header">
            <FaCalculator className="sidebar-icon" />
            <h3 className="sidebar-title">Live Cost Summary (USD)</h3>
            <p className="sidebar-subtitle">Updates as you make selections</p>
          </div>

          <div className="cost-summary-box">
            <div className="cost-label">Estimated Total</div>
            <div className="cost-amount">
              {costBreakdown.total > 0 ? `USD $${costBreakdown.total.toLocaleString()}` : 'USD $0'}
            </div>
            <div className="cost-note">
              {costBreakdown.total > 0 ? 'Based on your selections' : 'Complete form to calculate'}
            </div>
          </div>

          <div className="selections-section">
            <div className="selections-header">
              <FaCheck className="selections-icon" />
              <h4 className="selections-title">Your Selections</h4>
            </div>
            <div className="selection-item">
              <span className="selection-label">Free Zone:</span>
              <span className="selection-value">
                {formData.jurisdiction || 'Not selected yet'}
                {getSelectedJurisdictionCost() !== null && (
                  <span className="selection-price">USD ${getSelectedJurisdictionCost().toLocaleString()}</span>
                )}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">Business Activity:</span>
              <span className="selection-value">
                {formData.businessActivity || 'Not selected yet'}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">Visas Required:</span>
              <span className="selection-value">
                {formData.visas ? `${formData.visas} visa${formData.visas !== '1' ? 's' : ''}` : 'Not selected yet'}
              </span>
            </div>
            {costBreakdown.total > 0 && (
              <div className="selection-item">
                <span className="selection-label">Service Fee:</span>
                <span className="selection-value">
                  <span className="selection-price">USD ${costBreakdown.serviceFee.toLocaleString()}</span>
                </span>
              </div>
            )}
            <div className="selection-item">
              <span className="selection-label">Contact Details:</span>
              <div className="selection-contact">
                <div>Email: {formData.email || 'Not provided yet'}</div>
                <div>Phone: {formData.phone || 'Not provided yet'}</div>
              </div>
            </div>
          </div>

          <div className="sidebar-progress">
            <span>Progress {Math.round(progress)}%</span>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }}></div>
            </div>
          </div>

          {currentStep === 5 && (
            <div className="ready-section">
              <p>Click "Submit & Download" to get your detailed quotation</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LatinAmericaCalculator
