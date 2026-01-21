import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const LandingNavigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`landing-nav ${isScrolled ? 'scrolled' : ''}`} aria-label="Landing navigation">
      <div className="landing-nav-glow" aria-hidden="true" />

      <div className="landing-nav-container">
        <Link to="/" className="landing-nav-logo" aria-label="Easy Free Zone Setup home">
          <img src="/efzslogo.png" alt="Easy Free Zone Setup" />
        </Link>

        <div className="landing-nav-actions">
          <a
            href="https://wa.me/971551690373?text=Hi%2C%20I%20want%20to%20start%20a%20company%20in%20UAE"
            target="_blank"
          rel="noopener noreferrer"
          className="landing-cta-btn"
        >
            <span className="landing-cta-text-full">Setup My Business</span>
            <span className="landing-cta-text-short">Setup Business</span>
          </a>
        </div>
      </div>
    </nav>
  )
}

export default LandingNavigation
