import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import '../styles/webinar.css'
import { 
  FaPlay, 
  FaCalendarAlt, 
  FaClock, 
  FaMapMarkerAlt, 
  FaCheck, 
  FaChevronDown, 
  FaChevronUp,
  FaLinkedin,
  FaQuestionCircle,
  FaMoneyBillWave,
  FaGraduationCap,
  FaFileAlt,
  FaBalanceScale,
  FaShieldAlt,
  FaUsers,
  FaHeart,
  FaGift,
  FaVideo,
  FaComments,
  FaLock
} from 'react-icons/fa'

const Webinar = () => {
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, mins: 0, secs: 0 })
  const [expandedTopic, setExpandedTopic] = useState(0)
  // Countdown timer - live until January 29, 2026, 4:00 PM GST
  useEffect(() => {
    const targetDate = new Date('2026-01-29T16:00:00+04:00').getTime()
    
    const updateCountdown = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000)
        })
      } else {
        setCountdown({ days: 0, hours: 0, mins: 0, secs: 0 })
      }
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  const topics = [
    {
      icon: <FaQuestionCircle />,
      title: 'Misconceptions About Dubai',
      description: 'Debunk common myths and understand the real Dubai business landscape.'
    },
    {
      icon: <FaMoneyBillWave />,
      title: 'Actual Cost of Living for a Family of 4',
      description: 'Get real numbers on what it actually costs to live comfortably in Dubai with a family.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Education & Healthcare in Dubai',
      description: 'Learn about the quality and costs of education and healthcare systems in Dubai.'
    },
    {
      icon: <FaFileAlt />,
      title: 'Freezone vs Mainland Business Setup',
      description: 'Understand the key differences and which option is best for your business goals.'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Key Business Rules & Regulations',
      description: 'Navigate the essential legal requirements and compliance standards for UAE businesses.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Tax Benefits & Double Tax Treaties',
      description: 'Discover the tax advantages and international tax treaty benefits available in the UAE.'
    },
    {
      icon: <FaUsers />,
      title: 'Open Forum – Your Questions Answered',
      description: 'Get personalized answers to all your questions during our live Q&A session.'
    }
  ]

  // Load Zoho form script
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `
      window.handleRecurringDateTimeChange = function(el) {
        var selected = document.querySelector('#timezone') && document.querySelector('#timezone').options && document.querySelector('#timezone').options[el.selectedIndex];
        if(selected) {
          var entityId = selected.getAttribute('data-campaignid');
          var sysIdSel = '[name="sysId"]';
          var sysIdInput = document.querySelector(sysIdSel);
          if(sysIdInput && entityId) {
            sysIdInput.value = entityId;
          }
        }
      }
      
      var mndFileds=new Array('NAME','REGISTRATIONCF1','EMAIL');
      var fldLangVal=new Array('First name','Last name','E-mail');
      var name='';
      var email='';
      function reloadImg(){document.getElementById('imgid').src = document.getElementById('imgid').src;}
      window.checkMandatory4680864000000069026 = function(){
        var emailPattern = /^([^\\s@<>]{1,200})@([^\\s@<>]{1,300})$/;
        for(i=0;i<mndFileds.length;i++){
          var fieldObj=document.forms['WebForm4680864000000069026'][mndFileds[i]];
          if(fieldObj) {
            if(((fieldObj.value).replace(/^\\s+|\\s+$/g, '')).length==0){
              alert(fldLangVal[i] +' cannot be empty.');
              fieldObj.focus();
              return false;
            }else if(fieldObj.nodeName=='SELECT'){
              if(fieldObj.options[fieldObj.selectedIndex].value=='-None-'){
                alert(fldLangVal[i] +' cannot be none.');
                fieldObj.focus();
                return false;
              }
            } else if(fieldObj.type =='checkbox'){
              if (fieldObj.checked == false){
                alert('Please accept  '+fldLangVal[i]);
                fieldObj.focus();
                return false;
              }
            } else if(mndFileds[i] == 'EMAIL' && fieldObj.value && !(emailPattern.test(fieldObj.value))) {
              fieldObj.focus();
              return false;
            }
            if(fieldObj.type == 'text') {
              fieldObj.value = fieldObj.value.trim();
            }
            try{if(fieldObj.name == 'Last Name'){name = fieldObj.value;}}catch(e){}
          }
        }
      }
      
      // Attach timezone change handler
      setTimeout(function() {
        var timezoneSelect = document.querySelector('#timezone');
        if(timezoneSelect) {
          timezoneSelect.addEventListener('change', function(e) {
            handleRecurringDateTimeChange(e.target);
          });
        }
      }, 100);
    `
    document.body.appendChild(script)
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="webinar-page">
      {/* Hero Section */}
      <section className="webinar-hero">
        <div className="webinar-hero-background">
          <div className="webinar-pattern"></div>
        </div>
        <div className="container-modern">
          <div className="webinar-hero-content">
            <div className="webinar-hero-left">
              <motion.div
                className="webinar-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaPlay className="play-icon" />
                <span>Free Live Webinar</span>
              </motion.div>

              <motion.h1
                className="webinar-title"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Setting Up Your <span className="highlight">Business in Dubai</span>
              </motion.h1>

              <motion.p
                className="webinar-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Looking to move to Dubai to set up your business here by March 2026? Then this webinar is a must-attend for you.
              </motion.p>

              <motion.div
                className="webinar-details"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="webinar-detail-item">
                  <FaCalendarAlt />
                  <span>January 29, 2026</span>
                </div>
                <div className="webinar-detail-item">
                  <FaClock />
                  <span>4:00 PM - 5:00 PM GST</span>
                </div>
                <div className="webinar-detail-item">
                  <FaMapMarkerAlt />
                  <span>Online via Zoho Webinar</span>
                </div>
              </motion.div>

              <motion.div
                className="webinar-countdown"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="countdown-label">WEBINAR STARTS IN:</div>
                <div className="countdown-timer">
                  <div className="countdown-box">
                    <div className="countdown-number">{String(countdown.days).padStart(2, '0')}</div>
                    <div className="countdown-label-small">DAYS</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-number">{String(countdown.hours).padStart(2, '0')}</div>
                    <div className="countdown-label-small">HOURS</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-number">{String(countdown.mins).padStart(2, '0')}</div>
                    <div className="countdown-label-small">MINS</div>
                  </div>
                  <div className="countdown-box">
                    <div className="countdown-number">{String(countdown.secs).padStart(2, '0')}</div>
                    <div className="countdown-label-small">SECS</div>
                  </div>
                </div>
              </motion.div>
            </div>

            <motion.div
              className="webinar-hero-right"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              id="register"
            >
              <div className="webinar-form-card">
                <h3 className="form-card-title">Reserve Your Free Spot</h3>
                <p className="form-card-subtitle">Limited seats available • Live Q&A included</p>
                
                <div id="zmWebToEntityForm" className="zoho-meeting-form-wrapper">
                  <form 
                    action='https://meeting.zoho.com/meeting/WebForm' 
                    name='WebForm4680864000000069026' 
                    method='POST' 
                    onSubmit={(e) => {
                      document.charset = "UTF-8";
                      if (typeof window.checkMandatory4680864000000069026 === 'function') {
                        const result = window.checkMandatory4680864000000069026();
                        if (!result) {
                          e.preventDefault();
                        }
                      }
                    }}
                    acceptCharset='UTF-8'
                    className="webinar-form"
                  >
                    <input type='text' style={{display:'none'}} name='xnQsjsdp' value='0d6d77967f85e540fb14a0175401d33a6c180c26772363a32678f09a1a5d91ed' />
                    <input type='hidden' name='zc_gad' id='zc_gad' value='' />
                    <input type='text' style={{display:'none'}} name='xmIwtLD' value='c1a337176db46dcabaea81760e94de2838e1fd8441363d71fad89f5310941066d33a04322a5735cc42263aa48a89ba9f' />
                    <input type='text' style={{display:'none'}} name='actionType' value='UmVnaXN0cmF0aW9ucw==' />
                    <input type='text' style={{display:'none'}} name='returnURL' value='https://meeting.zoho.com/postregister' />
                    <input type='text' style={{display:'none'}} name='sysId' value='4680864000000069011' />
                    <input type='text' style={{display:'none'}} name='isEmbedForm' value='true' />
                    
                    {/* Timezone is fixed to Asia/Dubai by default; keep as hidden input */}
                    <input type="hidden" name="timezone" value="Asia/Dubai" />
                    
                    <div className="form-group">
                      <label>First name <span className="required">*</span></label>
                      <input 
                        type='text' 
                        maxLength='40' 
                        name='NAME'
                        placeholder="John"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Last name <span className="required">*</span></label>
                      <input 
                        type='text' 
                        maxLength='100' 
                        name='REGISTRATIONCF1'
                        placeholder="Smith"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>E-mail <span className="required">*</span></label>
                      <input 
                        type='email' 
                        maxLength='251' 
                        name='EMAIL'
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    
                    <div className="form-group">
                      <label>Phone</label>
                      <input 
                        type='tel' 
                        maxLength='100' 
                        name='REGISTRATIONCF7'
                        placeholder="+971 50 XXX XXXX"
                      />
                    </div>
                    
                    <button type="submit" className="webinar-submit-btn">
                      Register Now - It's Free
                    </button>
                    
                    <div className="form-security">
                      <FaLock />
                      <span>Your information is secure and will never be shared</span>
                    </div>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Statistics */}
          <motion.div
            className="webinar-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="stat-item">
              <div className="stat-number">100+</div>
              <div className="stat-text">Companies Formed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2-3</div>
              <div className="stat-text">Days Setup Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-text">Legal & Compliant</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-text">Free Zone Partners</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Agenda Section */}
      <section className="webinar-agenda">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">WEBINAR AGENDA</span>
            <h2 className="section-title-modern">What You'll Learn</h2>
            <p className="section-description-modern">
              In just 60 minutes, our experts will cover everything you need to know about setting up your business in Dubai successfully.
            </p>
          </motion.div>

          <div className="agenda-topics">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                className={`agenda-topic-card ${expandedTopic === index ? 'expanded' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setExpandedTopic(expandedTopic === index ? -1 : index)}
              >
                <div className="topic-icon">{topic.icon}</div>
                <div className="topic-content">
                  <div className="topic-header">
                    <span className="topic-number">Topic {index + 1}</span>
                    <h3 className="topic-title">{topic.title}</h3>
                  </div>
                  {expandedTopic === index && (
                    <p className="topic-description">{topic.description}</p>
                  )}
                </div>
                <div className="topic-chevron">
                  {expandedTopic === index ? <FaChevronUp /> : <FaChevronDown />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speaker Section */}
      <section className="webinar-speaker">
        <div className="container-modern">
          <motion.div
            className="section-header-modern"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label-modern">YOUR EXPERT HOST</span>
            <h2 className="section-title-modern">Meet Your Speaker</h2>
          </motion.div>

          <motion.div
            className="speaker-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="speaker-avatar">
              <img src="/ramshad.jpg" alt="Mohamed Ramshadali" className="speaker-photo" />
            </div>
            <div className="speaker-info">
              <h3 className="speaker-name">Mohamed Ramshadali</h3>
              <p className="speaker-title">Co-founder & Managing Director</p>
              <div className="speaker-company">
                <FaUsers />
                <span>Easy Free Zone</span>
              </div>
              <p className="speaker-bio">
                Leading our company with extensive expertise in UAE business formation and strategic business development. 
                With years of experience helping entrepreneurs establish their businesses in Dubai, Mohamed brings invaluable 
                insights into navigating the UAE business landscape.
              </p>
              <a href="https://www.linkedin.com/in/mohamed-ramshadali-27b2b21a5/" className="speaker-linkedin">
                <FaLinkedin />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Attend Section */}
      <section className="webinar-why-attend">
        <div className="container-modern">
          <motion.div
            className="why-attend-grid"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="why-left">
              <span className="why-label">WHY ATTEND?</span>
              <h2 className="why-title">Get Expert Guidance for Your Dubai Move</h2>
              <p className="why-attend-intro">
                Whether you're an entrepreneur, freelancer, or business owner looking to expand to Dubai, this webinar provides the clarity and confidence you need to make informed decisions about your move.
              </p>

              <ul className="benefits-list">
                <li>
                  <div className="checkmark-large"><FaCheck /></div>
                  <span>Expert insights from UAE business formation specialists</span>
                </li>
                <li>
                  <div className="checkmark-large"><FaCheck /></div>
                  <span>Clear understanding of actual costs and requirements</span>
                </li>
                <li>
                  <div className="checkmark-large"><FaCheck /></div>
                  <span>Personalized answers during live Q&A</span>
                </li>
                <li>
                  <div className="checkmark-large"><FaCheck /></div>
                  <span>Recording sent to all registrants</span>
                </li>
              </ul>

              <a href="#register" className="why-cta-btn">Reserve My Free Spot</a>
            </div>

            <div className="why-right">
              <div className="perfect-for-card">
                <h3>This Webinar is Perfect For:</h3>
                <div className="perfect-list">
                  <div className="perfect-item">
                    <div className="perfect-icon"><FaUsers /></div>
                    <div className="perfect-text">Entrepreneurs planning to relocate by March 2026</div>
                  </div>
                  <div className="perfect-item">
                    <div className="perfect-icon"><FaFileAlt /></div>
                    <div className="perfect-text">Business owners exploring Dubai expansion</div>
                  </div>
                  <div className="perfect-item">
                    <div className="perfect-icon"><FaGraduationCap /></div>
                    <div className="perfect-text">Professionals considering the UAE for career growth</div>
                  </div>
                  <div className="perfect-item">
                    <div className="perfect-icon"><FaHeart /></div>
                    <div className="perfect-text">Families evaluating Dubai as their new home</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="webinar-final-cta">
        <div className="container-modern">
          <motion.div
            className="final-cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="final-cta-title">Ready to Start Your Dubai Journey?</h2>
            <p className="final-cta-subtitle">
              Join us on January 29th and get all your questions answered by UAE business experts.
            </p>
            <a href="#register" className="final-cta-button">
              Register Now — Limited Spots Available →
            </a>
            <div className="cta-features">
              <span>
                <FaGift />
                Free registration
              </span>
              <span>•</span>
              <span>
                <FaVideo />
                Recording included
              </span>
              <span>•</span>
              <span>
                <FaComments />
                Live Q&A
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Webinar
