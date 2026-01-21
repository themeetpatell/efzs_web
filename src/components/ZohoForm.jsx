import { useEffect } from 'react'
import { trackLeadSubmission } from '../utils/tracking'

const ZohoForm = ({ pageName }) => {
  useEffect(() => {
    // Initialize Zoho form tracking after component mounts
    const initTracking = () => {
      if (typeof window !== 'undefined' && window.zfutm_zfAdvLead) {
        window.zfutm_zfAdvLead.zfautm_DHtmlSprt()
      }
    }
    
    if (document.readyState === 'complete') {
      initTracking()
    } else {
      window.addEventListener('load', initTracking)
      return () => window.removeEventListener('load', initTracking)
    }
  }, [])

  const handleSubmit = () => {
    trackLeadSubmission({
      page: pageName,
      formId: 'zoho-lead',
      value: 1,
    })
  }

  return (
    <div className="zoho-form-wrapper">
      <form 
        action='https://forms.zohopublic.com/easyfreezonesetupfzcllc1/form/GetMyBusinessRegistered/formperma/NOwafgiVlWvFepRA2fNDXd8dEtcYr1sdzXAOAUCvrTo/htmlRecords/submit' 
        name='form' 
        id='form' 
        method='POST' 
        acceptCharset='UTF-8' 
        encType='multipart/form-data'
        className="zoho-form"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="zf_referrer_name" value="" />
        <input type="hidden" name="zf_redirect_url" value="" />
        <input type="hidden" name="zc_gad" value="" />
        
        <h2 className="zoho-form-title">Get My Business Registered</h2>
        
        <div className="zoho-form-row">
          <div className="zoho-form-group zoho-form-group-half">
            <label className="zoho-form-label">
              First Name
              <em className="zoho-form-required">*</em>
            </label>
            <input 
              type="text" 
              maxLength="255" 
              name="Name_First" 
              fieldType="7" 
              placeholder="i.e. Meet" 
              className="zoho-form-input"
              required
            />
          </div>

          <div className="zoho-form-group zoho-form-group-half">
            <label className="zoho-form-label">
              Last Name
              <em className="zoho-form-required">*</em>
            </label>
            <input 
              type="text" 
              maxLength="255" 
              name="Name_Last" 
              fieldType="7" 
              placeholder="i.e. Patel" 
              className="zoho-form-input"
              required
            />
          </div>
        </div>

        <div className="zoho-form-group">
          <label className="zoho-form-label">
            Your WhatsApp Number
            <em className="zoho-form-required">*</em>
          </label>
          <div className="zoho-phone-wrapper">
            <select 
              name="PhoneNumber_countrycodeval" 
              id="international_PhoneNumber_countrycodeval" 
              className="zoho-form-select zoho-phone-code-select"
              defaultValue="+971"
              required
            >
              <option value="+971">🇦🇪 +971 (UAE)</option>
              <option value="+1">🇺🇸 +1 (US/Canada)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+91">🇮🇳 +91 (India)</option>
              <option value="+86">🇨🇳 +86 (China)</option>
              <option value="+33">🇫🇷 +33 (France)</option>
              <option value="+49">🇩🇪 +49 (Germany)</option>
              <option value="+81">🇯🇵 +81 (Japan)</option>
              <option value="+61">🇦🇺 +61 (Australia)</option>
              <option value="+27">🇿🇦 +27 (South Africa)</option>
              <option value="+234">🇳🇬 +234 (Nigeria)</option>
              <option value="+92">🇵🇰 +92 (Pakistan)</option>
              <option value="+880">🇧🇩 +880 (Bangladesh)</option>
              <option value="+94">🇱🇰 +94 (Sri Lanka)</option>
              <option value="+977">🇳🇵 +977 (Nepal)</option>
              <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
              <option value="+965">🇰🇼 +965 (Kuwait)</option>
              <option value="+974">🇶🇦 +974 (Qatar)</option>
              <option value="+973">🇧🇭 +973 (Bahrain)</option>
              <option value="+968">🇴🇲 +968 (Oman)</option>
              <option value="+961">🇱🇧 +961 (Lebanon)</option>
              <option value="+962">🇯🇴 +962 (Jordan)</option>
              <option value="+20">🇪🇬 +20 (Egypt)</option>
              <option value="+212">🇲🇦 +212 (Morocco)</option>
              <option value="+213">🇩🇿 +213 (Algeria)</option>
              <option value="+216">🇹🇳 +216 (Tunisia)</option>
              <option value="+351">🇵🇹 +351 (Portugal)</option>
              <option value="+34">🇪🇸 +34 (Spain)</option>
              <option value="+39">🇮🇹 +39 (Italy)</option>
              <option value="+31">🇳🇱 +31 (Netherlands)</option>
              <option value="+32">🇧🇪 +32 (Belgium)</option>
              <option value="+41">🇨🇭 +41 (Switzerland)</option>
              <option value="+43">🇦🇹 +43 (Austria)</option>
              <option value="+46">🇸🇪 +46 (Sweden)</option>
              <option value="+47">🇳🇴 +47 (Norway)</option>
              <option value="+45">🇩🇰 +45 (Denmark)</option>
              <option value="+358">🇫🇮 +358 (Finland)</option>
              <option value="+353">🇮🇪 +353 (Ireland)</option>
              <option value="+64">🇳🇿 +64 (New Zealand)</option>
              <option value="+65">🇸🇬 +65 (Singapore)</option>
              <option value="+60">🇲🇾 +60 (Malaysia)</option>
              <option value="+62">🇮🇩 +62 (Indonesia)</option>
              <option value="+66">🇹🇭 +66 (Thailand)</option>
              <option value="+84">🇻🇳 +84 (Vietnam)</option>
              <option value="+63">🇵🇭 +63 (Philippines)</option>
              <option value="+82">🇰🇷 +82 (South Korea)</option>
              <option value="+55">🇧🇷 +55 (Brazil)</option>
              <option value="+52">🇲🇽 +52 (Mexico)</option>
              <option value="+54">🇦🇷 +54 (Argentina)</option>
              <option value="+56">🇨🇱 +56 (Chile)</option>
              <option value="+57">🇨🇴 +57 (Colombia)</option>
              <option value="+51">🇵🇪 +51 (Peru)</option>
              <option value="+7">🇷🇺 +7 (Russia)</option>
              <option value="+90">🇹🇷 +90 (Turkey)</option>
            </select>
            <input 
              type="text" 
              compname="PhoneNumber" 
              name="PhoneNumber_countrycode" 
              phoneFormat="1" 
              isCountryCodeEnabled="true" 
              maxLength="20" 
              value="" 
              fieldType="11" 
              id="international_PhoneNumber_countrycode" 
              placeholder="55 123 4567" 
              className="zoho-form-input zoho-phone-number"
              required
            />
          </div>
        </div>

        <div className="zoho-form-group">
          <label className="zoho-form-label">
            Your Email
            <em className="zoho-form-required">*</em>
          </label>
          <input 
            type="email" 
            maxLength="255" 
            name="Email" 
            value="" 
            fieldType="9" 
            placeholder="i.e. yourname@yourdomain.com" 
            className="zoho-form-input"
            required
          />
        </div>

        <div className="zoho-form-group">
          <label className="zoho-form-label">
            What Business You Want to Start?
            <em className="zoho-form-required">*</em>
          </label>
          <input 
            type="text" 
            name="SingleLine" 
            value="" 
            fieldType="1" 
            maxLength="255" 
            placeholder="Describe your business" 
            className="zoho-form-input"
            required
          />
        </div>

        <div className="zoho-form-group">
          <label className="zoho-form-label">
            When Do You Want to Start?
            <em className="zoho-form-required">*</em>
          </label>
          <select name="Dropdown" className="zoho-form-select" required>
            <option selected="true" value="-Select-">-Select-</option>
            <option value="Immediately">Immediately</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
          </select>
        </div>

        <button type="submit" className="zoho-form-submit">
          <em>Submit</em>
        </button>
      </form>
    </div>
  )
}

export default ZohoForm
