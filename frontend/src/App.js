/* 3rd party */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import anime from 'animejs'
import Rellax from 'react-rellax'

/* 1st party */
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import WelcomeSection from './components/WelcomeSection'
import FaqSection from './components/FaqSection'
import PlacesSection from './components/PlacesSection'
import StudioSection from './components/StudioSection'
import Authenticated from './components/Authenticated'
import { hydrate, ENDPOINTS } from './utils'
import PolkadotTexture from './styles/images/polkadot-texture.jpg'
import Sign from './styles/images/sign.png'
import Sandy from './styles/images/sandy.png'
import Tom from './styles/images/tom.png'
import Tower from './styles/images/tower.png'
import Bridge from './styles/images/bridge.png'

const Root = () => {
  

  anime({
    targets: '#_path-blob-purple',
    d: [
      { value: ['M162.5,-151.6C203.3,-121.6,224.1,-60.8,217.5,-6.6C210.9,47.6,176.9,95.2,136.1,128.2C95.2,161.2,47.6,179.6,2.2,177.4C-43.1,175.1,-86.3,152.3,-135.3,119.3C-184.3,86.3,-239.1,43.1,-237.1,2C-235.1,-39.1,-176.3,-78.3,-127.3,-108.3C-78.3,-138.3,-39.1,-159.1,10.8,-170C60.8,-180.8,121.6,-181.6,162.5,-151.6Z'] },
      { value: ['M73.3,-51.5C107.5,-39.1,156.2,-19.6,172.5,16.3C188.8,52.1,172.5,104.2,138.3,119.7C104.2,135.2,52.1,114.1,19.6,94.5C-13,75,-25.9,56.9,-49.4,41.4C-72.9,25.9,-107,13,-102.6,4.4C-98.2,-4.2,-55.5,-8.5,-32,-20.8C-8.5,-33.2,-4.2,-53.6,7.7,-61.2C19.6,-68.9,39.1,-63.8,73.3,-51.5Z'] }
    ],
    easing: 'easeOutBack',
    duration: 6000,
    loop: true,
    autoplay: true,
    delay: 400,
    endDelay: 0,
    direction: 'alternate'
  })

  // hydrate `faq` and `info` items from endpoint
  const [faqs, setfaqs] = useState([])
  const [info, setInfo] = useState([])
  useEffect(() => {
    async function hydrateApp() {
      const faqs = await hydrate(ENDPOINTS.FAQS, 'id:ASC')
      setfaqs(faqs)
      // We only need 1 item here: the 1st item.
      const [info] = await hydrate(ENDPOINTS.INFOS, 'id:ASC')
      setInfo(info)
    }
    hydrateApp()
  }, [])

  return (
    <>

      <GlobalHeader />
      <WelcomeSection data={info} />
      <FaqSection data={faqs} />
      <PlacesSection />
      <StudioSection />
      <GlobalFooter data={info} />
    </>
  )

}

export default function App({ data}) {
  return (
    <Router>
      <Route path='/' exact component={ () => <Root data={data} /> } />
      <Route path='/authenticated' exact component={ Authenticated } />
    </Router>    
  )
}
