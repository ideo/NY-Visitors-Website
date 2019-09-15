/* 3rd party */
import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import anime from 'animejs'

/* 1st party */
import GlobalHeader from './components/GlobalHeader'
import GlobalFooter from './components/GlobalFooter'
import WelcomeSection from './components/WelcomeSection'
import FaqSection from './components/FaqSection'
import PlacesSection from './components/PlacesSection'
import StudioSection from './components/StudioSection'
import Authenticated from './components/Authenticated'
import { hydrate, ENDPOINTS } from './utils'
import PaperTexture from './styles/images/paper-texture.jpg'

const Root = () => {
  
  // animate yellow blob
  anime({
    targets: '#s-yellow',
    d: [
      { value: ['M155.3,-154.6C191.9,-154.4,205.8,-96.5,184.9,-56.1C164,-15.6,108.4,7.4,82.3,42.7C56.2,78,59.6,125.4,47,130.7C34.4,135.9,5.9,99,-34.3,87.3C-74.5,75.7,-126.5,89.3,-145,75.1C-163.6,60.8,-148.8,18.6,-135.2,-17.9C-121.6,-54.3,-109.4,-85,-87,-87.7C-64.7,-90.4,-32.4,-65.2,13.5,-81.3C59.4,-97.4,118.7,-154.8,155.3,-154.6Z'] },
      { value: ['M136.3,-178.4C156,-145.9,137.1,-83.3,150.6,-24C164.2,35.4,210.3,91.7,197.8,115.1C185.4,138.4,114.4,128.9,62.2,130.4C9.9,131.9,-23.6,144.4,-50.2,135.7C-76.8,127,-96.4,97,-114.6,65.9C-132.8,34.9,-149.6,2.8,-145.3,-26.3C-141,-55.3,-115.5,-81.3,-87.7,-112.4C-60,-143.5,-30,-179.7,14.1,-196.6C58.3,-213.5,116.6,-210.9,136.3,-178.4Z'] },
      { value: ['M152.6,-181.1C197.3,-144.4,232.6,-95.8,236,-46.1C239.5,3.7,211.1,54.6,173.1,80.6C135,106.7,87.4,107.8,43,128.5C-1.4,149.1,-42.4,189.2,-83.5,190.9C-124.6,192.7,-165.8,156.1,-164.9,115.6C-163.9,75.1,-120.9,30.7,-98.4,-3.5C-75.9,-37.7,-73.9,-61.8,-61,-104C-48,-146.2,-24,-206.6,15,-224.5C54,-242.3,108,-217.7,152.6,-181.1Z'] },
    ],
    easing: 'easeInOutSine',
    duration: 8000,
    loop: true,
    autoplay: true,
    delay: 0,
    endDelay: 0,
    direction: 'alternate'
  })

  anime({
    targets: '#s-green',
    d: [
      { value: ['M57.7,-20.3C90.3,-5,143.1,19.8,157.1,66.9C171.1,113.9,146.3,183.1,98.3,207.5C50.3,231.8,-20.8,211.4,-66.1,175.1C-111.4,138.8,-130.8,86.5,-134.6,39.4C-138.4,-7.7,-126.7,-49.7,-101.6,-63.2C-76.6,-76.8,-38.3,-61.9,-12.9,-51.6C12.5,-41.3,25,-35.6,57.7,-20.3Z'] },
      { value: ['M98.4,-82.8C107.2,-67.5,79.9,-27.7,73.7,23.8C67.5,75.3,82.3,138.6,53.4,178.4C24.4,218.3,-48.3,234.9,-74.6,203.5C-100.9,172.2,-80.6,93,-65.9,46.7C-51.2,0.5,-42,-12.9,-32,-28.5C-21.9,-44.1,-10.9,-62.1,16.9,-75.6C44.8,-89.1,89.7,-98.2,98.4,-82.8Z'] },
      { value: ['M55.2,-44.5C61.3,-36.3,49.2,-13.9,53.5,30.3C57.8,74.4,78.6,140.4,56.2,172.6C33.8,204.8,-31.7,203.3,-95.4,179.7C-159,156.1,-220.9,110.3,-211.7,71C-202.6,31.8,-122.4,-0.9,-75.3,-18.5C-28.1,-36.1,-14.1,-38.6,5.2,-42.7C24.5,-46.9,49,-52.7,55.2,-44.5Z'] },
    ],
    easing: 'easeOutQuad',
    duration: 10000,
    loop: true,
    autoplay: true,
    delay: 800,
    endDelay: 0,
    direction: 'alternate'
  })

  anime({
    targets: '#s-black',
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
        className="_blob-yellow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800">
        <clipPath id="_mask-yellow" transform="translate(200,200)"> 
          <path id="s-yellow"d="M155.3,-154.6C191.9,-154.4,205.8,-96.5,184.9,-56.1C164,-15.6,108.4,7.4,82.3,42.7C56.2,78,59.6,125.4,47,130.7C34.4,135.9,5.9,99,-34.3,87.3C-74.5,75.7,-126.5,89.3,-145,75.1C-163.6,60.8,-148.8,18.6,-135.2,-17.9C-121.6,-54.3,-109.4,-85,-87,-87.7C-64.7,-90.4,-32.4,-65.2,13.5,-81.3C59.4,-97.4,118.7,-154.8,155.3,-154.6Z" fill="#FFF900"/>
        </clipPath>
        <g clipPath="url(#_mask-yellow)">
          <rect width="600" height="600" fill="#FFF900" opacity="1" mask="url(#mask-yellow)"/>
        </g>
      </svg>

      <img src={PaperTexture} className="_bg-blob-green" />

      <svg
        className="_blob-green"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg"
      >
      <clipPath id="_mask-green" transform="translate(440,180) scale(0.8)"> 
        <path id="s-green" d="M156.7,-134.8C172.6,-105,134.1,-41.6,103.5,-3.9C73,33.8,50.4,45.7,20.4,71.2C-9.5,96.7,-46.9,135.7,-80.4,132.7C-114,129.7,-143.7,84.7,-149.9,39.4C-156.1,-5.8,-138.6,-51.2,-109.7,-84C-80.8,-116.8,-40.4,-136.9,15,-148.8C70.4,-160.8,140.7,-164.6,156.7,-134.8Z" fill="#FE840E" />
      </clipPath>
      </svg>

      <svg
        className="_blob-black"
        width="600"
        height="600"
        viewBox="0 0 600 600" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(300,300)">
          <path id="s-black" d="M74.8,-129C101.6,-99.1,131.3,-86.3,136.5,-65.2C141.7,-44.1,122.3,-14.6,131,28.4C139.7,71.4,176.4,128,173.1,172.9C169.9,217.8,126.6,250.9,84.3,243.3C42,235.7,0.6,187.4,-34.1,158.1C-68.8,128.8,-96.7,118.4,-115.2,98.9C-133.6,79.3,-142.5,50.5,-146.9,21C-151.3,-8.5,-151.1,-38.7,-138.9,-62.5C-126.6,-86.4,-102.2,-103.7,-77.1,-134.4C-51.9,-165.1,-26,-209,-1,-207.5C24,-206,47.9,-158.9,74.8,-129Z" fill="#000000" />
        </g>
      </svg>

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
