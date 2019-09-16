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
    targets: '#s-polkadot',
    d: [
      { value: ['M102.3,-171.2C112,-153,85.1,-89.8,71.9,-52.3C58.6,-14.9,59,-3.2,79.4,27.3C99.8,57.9,140.2,107.2,136.2,125.8C132.2,144.3,83.7,132.1,49.4,120.1C15.2,108.1,-4.8,96.3,-33,95.6C-61.1,94.9,-97.4,105.4,-111.8,94C-126.1,82.6,-118.5,49.3,-124.9,16.9C-131.2,-15.5,-151.6,-47,-142.3,-64C-133,-80.9,-94.1,-83.4,-65.4,-93C-36.8,-102.5,-18.4,-119.3,14,-141C46.3,-162.7,92.6,-189.5,102.3,-171.2Z'] },
      { value: ['M84.7,-128.5C107.5,-117.2,122,-89.8,127.1,-62.7C132.2,-35.6,128,-8.9,119.7,14C111.5,37,99.2,56.1,91.3,96.7C83.5,137.2,80.1,199.1,51.6,234C23.2,269,-30.2,277,-74.2,260.5C-118.3,244.1,-152.8,203.3,-175.5,161C-198.2,118.8,-209,75.2,-215,31.1C-221.1,-13,-222.4,-57.6,-203.5,-90.3C-184.5,-123.1,-145.2,-144,-107.9,-148.6C-70.6,-153.3,-35.3,-141.6,-2.2,-138.3C31,-134.9,62,-139.8,84.7,-128.5Z'] },
      { value: ['M74,-116.5C97.2,-100.3,118.2,-81.9,135.8,-57.8C153.5,-33.6,167.8,-3.7,177.6,35.5C187.4,74.6,192.7,123.1,165.9,130.7C139,138.4,80.1,105.2,40.9,97.5C1.8,89.9,-17.6,107.8,-41,113C-64.4,118.3,-91.9,110.9,-134.9,97C-177.9,83.1,-236.4,62.8,-232.3,38.3C-228.2,13.9,-161.4,-14.7,-138.8,-63.1C-116.2,-111.5,-137.9,-179.8,-122.1,-199.5C-106.3,-219.1,-53.2,-190.1,-13.9,-168.5C25.4,-146.9,50.8,-132.7,74,-116.5Z'] },
    ],
    easing: 'easeOutQuad',
    duration: 7600,
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
