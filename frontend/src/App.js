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
      
      <svg
        className="_blob-polkadot"
        width="600"
        height="600"
        viewBox="0 0 600 600" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <clipPath id="_mask-polkadot">
          <g transform="translate(300,300)">
            <path id="s-polkadot" d="M74.8,-129C101.6,-99.1,131.3,-86.3,136.5,-65.2C141.7,-44.1,122.3,-14.6,131,28.4C139.7,71.4,176.4,128,173.1,172.9C169.9,217.8,126.6,250.9,84.3,243.3C42,235.7,0.6,187.4,-34.1,158.1C-68.8,128.8,-96.7,118.4,-115.2,98.9C-133.6,79.3,-142.5,50.5,-146.9,21C-151.3,-8.5,-151.1,-38.7,-138.9,-62.5C-126.6,-86.4,-102.2,-103.7,-77.1,-134.4C-51.9,-165.1,-26,-209,-1,-207.5C24,-206,47.9,-158.9,74.8,-129Z" fill="#000000" />
          </g>
        </clipPath>
      </svg>

      <Rellax className="_image-sign" as="div" speed={2} >
        <img src={Sign} />
      </Rellax>

      <Rellax className="_image-sandy" as="div" speed={2.5} >
        <img src={Sandy} />
      </Rellax>

      <Rellax className="_image-bridge" as="div" speed={2.8} >
        <img src={Bridge} />
      </Rellax>

      <Rellax className="_image-tom" as="div" speed={3.5} >
        <img src={Tom} />
      </Rellax>

      <Rellax className="_image-tower" as="div" speed={2} >
        <img src={Tower} />
      </Rellax>

      <Rellax className="_blob-purple" as="div" speed={4} >
      <svg
        width="600"
        height="600"
        className="_inner-blob-purple"
        viewBox="0 0 600 600"
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path id="_path-blob-purple" d="M149,-106.3C193.3,-104.7,229.7,-52.3,208.4,-21.2C187.2,9.9,108.5,19.8,64.1,33.5C19.8,47.1,9.9,64.6,-7.3,71.9C-24.5,79.2,-49,76.4,-96.9,62.7C-144.7,49,-215.8,24.5,-220.1,-4.2C-224.3,-33,-161.7,-66,-113.8,-67.7C-66,-69.3,-33,-39.7,9.7,-49.3C52.3,-59,104.7,-108,149,-106.3Z" fill="#1f008e" />
        </g>
      </svg>
      </Rellax>

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
