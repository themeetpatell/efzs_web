import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaMapMarkerAlt, FaBriefcase, FaIdCard, FaEnvelope, FaPhone, FaCalculator, FaCheck, FaChevronLeft, FaChevronRight, FaDownload, FaFileAlt } from 'react-icons/fa'
import jsPDF from 'jspdf'

const CostCalculator = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    freeZone: '',
    businessActivity: '',
    visas: '',
    email: '',
    phone: ''
  })

  const freeZones = [
    { name: 'RAK Free Zone', basePrice: 6010, code: 'RAK' },
    { name: 'Meydan Free Zone', basePrice: 12500, code: 'MEYDAN' },
    { name: 'IFZA Free Zone', basePrice: 12900, code: 'IFZA' },
    { name: 'Sharjah Publishing City (SPC)', basePrice: 5750, code: 'SPC' },
    { name: 'Masdar City Free Zone', basePrice: 7000, code: 'MASDAR' },
    { name: 'Ajman Free Zone', basePrice: 5555, code: 'AJMAN' },
    { name: 'UAQ Free Zone', basePrice: 5500, code: 'UAQ' },
    { name: 'Creative City Free Zone', basePrice: 5530, code: 'CREATIVE' }
  ]

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

  const visaOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const getSelectedFreeZone = () => {
    return freeZones.find(zone => zone.name === formData.freeZone)
  }

  const getSelectedActivity = () => {
    return businessActivities.find(activity => activity.name === formData.businessActivity)
  }

  const calculateCost = () => {
    const selectedZone = getSelectedFreeZone()
    const selectedActivity = getSelectedActivity()
    const visaCount = parseInt(formData.visas) || 0

    if (!selectedZone) {
      return {
        baseLicense: 0,
        visaAllocationFee: 0,
        establishmentCard: 0,
        visaFee: 0,
        medicalTest: 0,
        emiratesId: 0,
        total: 0
      }
    }

    const baseLicense = selectedZone.basePrice
    const activityMultiplier = selectedActivity?.multiplier || 1.0
    const adjustedLicense = baseLicense * activityMultiplier

    const visaAllocationFee = visaCount * 1850
    const establishmentCard = visaCount * 2000
    const visaFee = visaCount * 4000
    const medicalTest = visaCount * 400
    const emiratesId = visaCount * 400

    const total = adjustedLicense + visaAllocationFee + establishmentCard + visaFee + medicalTest + emiratesId

    return {
      baseLicense: adjustedLicense,
      visaAllocationFee,
      establishmentCard,
      visaFee,
      medicalTest,
      emiratesId,
      total: Math.round(total)
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
    const prefix = 'QT-'
    const random = Math.floor(Math.random() * 1000000).toString().padStart(6, '0')
    return prefix + random
  }

  const generatePDF = async () => {
    const selectedZone = getSelectedFreeZone()
    const selectedActivity = getSelectedActivity()
    const visaCount = parseInt(formData.visas) || 0

    const doc = new jsPDF()
    const pageWidth = doc.internal.pageSize.getWidth()
    const pageHeight = doc.internal.pageSize.getHeight()

    let yPos = 0

    const headerHeight = 45
    doc.setFillColor(0, 102, 255)
    doc.rect(0, 0, pageWidth, headerHeight, 'F')

    let logoX = 20
    let logoY = 12
    let logoWidth = 35
    let logoHeight = 0

    try {
      const logoImg = await new Promise((resolve, reject) => {
        const img = new Image()
        img.crossOrigin = 'anonymous'
        img.onload = () => {
          const canvas = document.createElement('canvas')
          canvas.width = img.width
          canvas.height = img.height
          const ctx = canvas.getContext('2d')
          ctx.drawImage(img, 0, 0)
          const imgData = canvas.toDataURL('image/png')
          resolve({ data: imgData, width: img.width, height: img.height })
        }
        img.onerror = reject
        img.src = '/efsz logo.png'
        setTimeout(() => reject(new Error('Logo load timeout')), 5000)
      })

      logoHeight = (logoImg.height / logoImg.width) * logoWidth
      doc.addImage(logoImg.data, 'PNG', logoX, logoY, logoWidth, logoHeight)
      logoX = logoX + logoWidth + 10
    } catch (error) {
      console.warn('Could not load logo:', error)
      logoX = 20
    }

    doc.setTextColor(255, 255, 255)
    doc.setFontSize(18)
    doc.setFont('helvetica', 'bold')
    doc.text('Easy FreezoneSetup', logoX, 20)

    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text('FZC LLC | Business Centre', logoX, 27)
    doc.text('Sharjah Publishing City Free Zone', logoX, 33)
    doc.text('Phone: +971 52 167 6155 | Website: www.easyfreezonesetup.com', logoX, 39)

    doc.setTextColor(0, 0, 0)
    doc.setFontSize(32)
    doc.setFont('helvetica', 'bold')
    doc.text('QUOTE', pageWidth - 20, 28, { align: 'right' })

    yPos = headerHeight + 15

    const quoteNumber = generateQuoteNumber()
    const quoteDate = new Date().toLocaleDateString('en-GB')

    const rightColX = pageWidth - 20
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.setTextColor(0, 0, 0)
    doc.text(`Quote#: ${quoteNumber}`, rightColX, yPos, { align: 'right' })
    yPos += 5
    doc.text(`Quote Date: ${quoteDate}`, rightColX, yPos, { align: 'right' })
    yPos += 5
    doc.text('Contact Person: Easyfreezonesetup team', rightColX, yPos, { align: 'right' })
    yPos += 5
    doc.text('Email: info@easyfreezonesetup.com', rightColX, yPos, { align: 'right' })
    yPos += 5
    doc.text('Phone: +971 52 167 6155', rightColX, yPos, { align: 'right' })

    yPos = headerHeight + 15
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('Bill To:', 20, yPos)
    yPos += 6
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    doc.text(formData.email || 'Not provided', 20, yPos)
    yPos += 5
    doc.text(formData.phone || 'Not provided', 20, yPos)

    yPos += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(8)
    doc.text('Easy Free Zone Setup FZC LLC', 20, yPos)
    yPos += 4
    doc.text('Business Centre, Sharjah Publishing City Free Zone', 20, yPos)
    yPos += 6
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text(`Subject: ${selectedZone?.name || 'Free Zone'}`, 20, yPos)

    yPos += 18

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

    doc.setFillColor(0, 51, 153)
    doc.rect(leftMargin, tableTop, tableWidth, 12, 'F')

    doc.setTextColor(255, 255, 255)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(10)
    doc.text('#', colX[0], tableTop + 8)
    doc.text('Item', colX[1], tableTop + 8)
    doc.text('Qty', colX[2], tableTop + 8, { align: 'right' })
    doc.text('Rate', colX[3], tableTop + 8, { align: 'right' })
    doc.text('Amount', colX[4], tableTop + 8, { align: 'right' })

    yPos = tableTop + 12
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)

    const items = [
      { name: 'Business License FZ', qty: 1, rate: Math.round(selectedZone?.basePrice * (selectedActivity?.multiplier || 1.0)), amount: Math.round(selectedZone?.basePrice * (selectedActivity?.multiplier || 1.0)) },
      { name: 'Visa Allocation Fee', qty: visaCount, rate: 1850, amount: visaCount * 1850 },
      { name: 'Establishment Card', qty: visaCount, rate: 2000, amount: visaCount * 2000 },
      { name: 'Investor or Partner Visa Fee', qty: visaCount, rate: 4000, amount: visaCount * 4000 },
      { name: 'Medical Test Fees', qty: visaCount, rate: 400, amount: visaCount * 400 },
      { name: 'Emirates ID Application Fee', qty: visaCount, rate: 400, amount: visaCount * 400 }
    ]

    const validItems = items.filter(item => item.qty > 0)
    
    validItems.forEach((item, index) => {
      const rowY = yPos + 7
      doc.setDrawColor(220, 220, 220)
      doc.setLineWidth(0.1)
      doc.line(leftMargin, rowY - 2, rightMargin, rowY - 2)
      
      doc.text((index + 1).toString(), colX[0], rowY)
      doc.text(item.name, colX[1], rowY)
      doc.text(item.qty.toFixed(2), colX[2], rowY, { align: 'right' })
      doc.text(item.rate.toLocaleString(), colX[3], rowY, { align: 'right' })
      doc.text(item.amount.toLocaleString(), colX[4], rowY, { align: 'right' })
      yPos += 9
    })

    const subtotal = validItems.reduce((sum, item) => sum + item.amount, 0)
    yPos += 3
    doc.setDrawColor(200, 200, 200)
    doc.setLineWidth(0.3)
    doc.line(leftMargin, yPos, rightMargin, yPos)
    yPos += 6
    
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(9)
    doc.text('Sub Total', colX[3], yPos, { align: 'right' })
    doc.text(subtotal.toLocaleString(), colX[4], yPos, { align: 'right' })

    yPos += 8
    doc.setFillColor(0, 51, 153)
    doc.rect(leftMargin, yPos, tableWidth, 12, 'F')
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(11)
    doc.setFont('helvetica', 'bold')
    doc.text('Total', colX[3], yPos + 8, { align: 'right' })
    doc.text(`AED ${subtotal.toLocaleString()}`, colX[4], yPos + 8, { align: 'right' })

    doc.addPage()
    yPos = 20

    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('NOTES:', 20, yPos)

    yPos += 8
    doc.setFont('helvetica', 'italic')
    doc.setFontSize(9)
    doc.setTextColor(255, 0, 0)
    doc.text('This is an auto-generated quotation based on the basic details provided.', 20, yPos, { maxWidth: pageWidth - 40 })
    yPos += 6
    doc.text('The final quotation can be shared once we receive the complete information.', 20, yPos, { maxWidth: pageWidth - 40 })
    yPos += 6
    doc.text('We kindly request you to contact our sales representative for a detailed consultation.', 20, yPos, { maxWidth: pageWidth - 40 })

    yPos += 12
    doc.setTextColor(0, 0, 0)
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Required information and documents of each shareholder:', 20, yPos)

    yPos += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const requirements = [
      '3 company name options in order of priority;',
      'Clear colored passport copy (double page spread);',
      'Email address;',
      'Phone number;',
      'Residential address;',
      'Proof of address;',
      'Valid Emirates ID and UAE visa (if client is resident);',
      'Passport size photo (white background, no smiling, jewelry, or glasses).'
    ]

    requirements.forEach(req => {
      doc.text(`• ${req}`, 25, yPos, { maxWidth: pageWidth - 50 })
      yPos += 5.5
    })

    yPos += 10
    doc.setFont('helvetica', 'bold')
    doc.setFontSize(11)
    doc.text('Additional Documents Required During the Process for High Risk Nationalities and High Risk Business Activities:', 20, yPos, { maxWidth: pageWidth - 40 })
    
    yPos += 8
    doc.setFont('helvetica', 'normal')
    doc.setFontSize(9)
    const additionalDocs = [
      'Source of Wealth;',
      'Personal Bank Statements;',
      'Proof of Address;',
      'Business Model or Plan;',
      'Fill Up the Questionnaire from the Authority.'
    ]

    additionalDocs.forEach(docItem => {
      doc.text(`• ${docItem}`, 25, yPos, { maxWidth: pageWidth - 50 })
      yPos += 5.5
    })

    doc.save(`quotation-${quoteNumber}.pdf`)
  }

  const handleSubmit = async () => {
    if (!formData.freeZone || !formData.businessActivity || !formData.visas || !formData.email || !formData.phone) {
      alert('Please complete all fields')
      return
    }
    await generatePDF()
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
            <p className="step-description">Select the UAE free zone that best suits your business needs</p>
            <div className="step-input-wrapper">
              <select
                className="step-select"
                value={formData.freeZone}
                onChange={(e) => updateFormData('freeZone', e.target.value)}
              >
                <option value="">Select a free zone</option>
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
            <h2 className="step-title">Select Your Business Activity</h2>
            <p className="step-description">Choose the activity that best describes your business</p>
            <div className="activity-list">
              {businessActivities.map((activity, index) => (
                <motion.div
                  key={index}
                  className={`activity-item ${formData.businessActivity === activity.name ? 'active' : ''}`}
                  onClick={() => updateFormData('businessActivity', activity.name)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {activity.name}
                  {formData.businessActivity === activity.name && <FaCheck className="check-icon" />}
                </motion.div>
              ))}
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
                  (currentStep === 1 && !formData.freeZone) ||
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
              >
                <FaDownload /> Submit & Download Quotation
              </button>
            )}
          </div>
        </div>

        <div className="calculator-sidebar">
          <div className="sidebar-header">
            <FaCalculator className="sidebar-icon" />
            <h3 className="sidebar-title">Live Cost Summary</h3>
            <p className="sidebar-subtitle">Updates as you make selections</p>
          </div>

          <div className="cost-summary-box">
            <div className="cost-label">Estimated Total</div>
            <div className="cost-amount">
              {costBreakdown.total > 0 ? `AED ${costBreakdown.total.toLocaleString()}` : 'AED 0'}
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
                {formData.freeZone || 'Not selected yet'}
                {getSelectedFreeZone() && (
                  <span className="selection-price">AED {getSelectedFreeZone().basePrice.toLocaleString()}</span>
                )}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">Business Activity:</span>
              <span className="selection-value">
                {formData.businessActivity || 'Not selected yet'}
                {getSelectedActivity() && (
                  <span className="selection-multiplier">{getSelectedActivity().multiplier}x multiplier</span>
                )}
              </span>
            </div>
            <div className="selection-item">
              <span className="selection-label">Visas Required:</span>
              <span className="selection-value">
                {formData.visas ? `${formData.visas} visas` : 'Not selected yet'}
                {formData.visas && <span className="selection-visa">{formData.visas} Visa</span>}
              </span>
            </div>
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

          <div className="sidebar-disclaimer">
            <span className="disclaimer-icon">💡</span>
            <p>This is a live estimate. Final pricing may vary based on specific requirements and additional services.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CostCalculator
