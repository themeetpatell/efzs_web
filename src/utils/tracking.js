const TAG_ID = import.meta.env.VITE_GTAG_ID
const CONVERSION_LABEL = import.meta.env.VITE_GOOGLE_ADS_CONVERSION_LABEL
const EXPLICIT_SEND_TO = import.meta.env.VITE_GOOGLE_ADS_SEND_TO

const conversionSendTo = EXPLICIT_SEND_TO || (TAG_ID && CONVERSION_LABEL ? `${TAG_ID}/${CONVERSION_LABEL}` : '')

export const initGoogleTag = () => {
  if (!TAG_ID || typeof window === 'undefined') return

  if (document.getElementById('gtag-js')) return

  const script = document.createElement('script')
  script.id = 'gtag-js'
  script.src = `https://www.googletagmanager.com/gtag/js?id=${TAG_ID}`
  script.async = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = window.gtag || gtag
  window.gtag('js', new Date())
  window.gtag('config', TAG_ID)
}

export const trackLeadSubmission = ({ page, formId, value } = {}) => {
  if (typeof window === 'undefined') return

  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'lead_submission',
    formId: formId || 'zoho-lead',
    page: page || window.location.pathname,
    value: value || 1,
  })

  if (typeof window.gtag === 'function') {
    window.gtag('event', 'lead_submit', {
      event_category: 'lead',
      event_label: page || window.location.pathname,
      value: value || 1,
    })

    if (conversionSendTo) {
      window.gtag('event', 'conversion', {
        send_to: conversionSendTo,
        value: value || 1,
      })
    }
  }
}
