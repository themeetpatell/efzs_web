import { useEffect } from 'react'
import { initGoogleTag } from '../utils/tracking'

const TrackingInitializer = () => {
  useEffect(() => {
    initGoogleTag()
  }, [])

  return null
}

export default TrackingInitializer
