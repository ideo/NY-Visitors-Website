/* 3rd party */
import React from 'react'
import Rellax from 'react-rellax'
import anime from 'animejs'
import isEmpty from 'lodash.isempty'

/* 1st party */
import Loading from './Loading'
import PolkadotTexture from '../styles/images/polkadot-texture.jpg'
import PolkadotFlat from '../styles/images/polkaflat.png'
import EpicPoster from '../styles/images/epic.png'
import Sun from '../styles/images/sun.png'
import RedDot1 from '../styles/images/red-dot-1.png'
import RedDot2 from '../styles/images/red-dot-2.png'
import OceanBlob from '../styles/images/ocean-blob.png'
import Sign from '../styles/images/sign.png'
import Sandy from '../styles/images/sandy.png'
import Moon from '../styles/images/moon.png'
import Tom from '../styles/images/tom.png'
import Tower from '../styles/images/tower.png'
import Bridge from '../styles/images/bridge.png'
import Wrinkle from '../styles/images/wrinkle.png'
import { BASE_ANIME_CONFIG } from '../utils'

function animate() {
  anime({
    // animate purple blob
    ...BASE_ANIME_CONFIG,
    duration: 9000,
    delay: 1000,
    targets: '#_path-blob-purple',
    d: [
      { value: ['M162.5,-151.6C203.3,-121.6,224.1,-60.8,217.5,-6.6C210.9,47.6,176.9,95.2,136.1,128.2C95.2,161.2,47.6,179.6,2.2,177.4C-43.1,175.1,-86.3,152.3,-135.3,119.3C-184.3,86.3,-239.1,43.1,-237.1,2C-235.1,-39.1,-176.3,-78.3,-127.3,-108.3C-78.3,-138.3,-39.1,-159.1,10.8,-170C60.8,-180.8,121.6,-181.6,162.5,-151.6Z'] }
    ],
    easing: 'easeOutBack',
  })
  // anime({
  //   // animate polkadot blob
  //   ...BASE_ANIME_CONFIG,
  //   targets: '#_path-polka',
  //   d: [
  //     { value: ['M59.6,-57.5C104,-64.1,185.3,-92.9,217.3,-81.9C249.3,-70.9,232,-20,209.5,19.3C187,58.6,159.3,86.3,136.7,126C114.1,165.8,96.6,217.7,62.7,239.7C28.7,261.6,-21.7,253.6,-60.5,230.8C-99.2,208.1,-126.3,170.5,-155.7,135.5C-185.1,100.5,-216.8,68.1,-227.3,29.5C-237.8,-9.1,-227.1,-54,-197.5,-78.3C-167.9,-102.6,-119.4,-106.4,-83.3,-103.6C-47.2,-100.8,-23.6,-91.4,-8,-78.9C7.6,-66.4,15.1,-50.9,59.6,-57.5Z'] },
  //     { value: ['M118.2,-177.5C155.4,-160.1,189.1,-130.9,206.8,-93.9C224.5,-56.9,226.1,-12.1,197.7,12.5C169.4,37.1,111.2,41.5,80.9,62.2C50.7,83,48.4,120.2,28.8,149.3C9.2,178.5,-27.8,199.6,-71.5,204.6C-115.2,209.6,-165.7,198.4,-176.3,164.7C-187,131,-157.8,74.8,-163.8,24.4C-169.8,-26,-210.9,-70.5,-198.8,-88.2C-186.7,-105.9,-121.5,-96.7,-79.5,-111.8C-37.5,-127,-18.7,-166.5,10.9,-183.5C40.5,-200.4,81.1,-194.9,118.2,-177.5Z'] }
  //   ],
  //   duration: 9000,
  //   delay: 1000,
  // })
}

export default function FaqSection({ data }) { 
  animate()

  const isLoading = isEmpty(data)

  return (
    <section
      id="get-here"
      className="_section-get-here flex flex-column w-100 items-center">        
      
      <Rellax className="_image-sign" as="div" speed={2} >
        <img src={Sign} alt="sign" />
      </Rellax>

      <Rellax className="_image-sandy" as="div" speed={2.5} >
        <img src={Sandy} alt="Sandy" />
      </Rellax>
      
      <Rellax className="_image-moon" as="div" speed={2.0} >
        <img src={Moon} alt="moon" />
      </Rellax>

      <Rellax className="_image-bridge" as="div" speed={2.8} >
        <img src={Bridge} alt="bridge" />
      </Rellax>

      <Rellax className="_image-tom" as="div" speed={3.5} >
        <img src={Tom} alt="Tom" />
      </Rellax>

      <Rellax className="_image-tower" as="div" speed={2} >
        <img src={Tower} alt="tower" />
      </Rellax>

      <Rellax className="_blob-purple" as="div" speed={4} >
        <svg
          width="600"
          height="600"
          className="_inner-blob-purple"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(300,300)">
            <path
              id="_path-blob-purple"
              d="M103.9,-152.2C129.2,-145.4,140.6,-107.4,144,-73.5C147.5,-39.6,143,-9.8,145.9,26.2C148.8,62.2,159.1,104.4,137.6,106.6C116.1,108.7,62.8,70.6,30.5,60.3C-1.9,49.9,-13.3,67.2,-24,69.6C-34.7,72,-44.5,59.6,-85.9,52.1C-127.3,44.5,-200.3,41.9,-234.6,14.2C-268.8,-13.4,-264.5,-66.1,-244.7,-112.8C-225,-159.4,-189.8,-200,-146.4,-198.5C-103.1,-197.1,-51.5,-153.5,-6.1,-144C39.3,-134.5,78.6,-158.9,103.9,-152.2Z" fill="#1f008e" />
          </g>
        </svg>
      </Rellax>

      <Rellax className="_blob-polka" as="div" speed={4} >
        <img src={PolkadotTexture} alt="polka blob" className="_bg-blob-polka" />
        <svg
          width="300"
          height="300"
          viewBox="0 0 400 400"
          xmlns="http://www.w3.org/2000/svg">
          <clipPath id="_mask-polka" transform="translate(80,120) scale(0.4)">
            <path
              id="_path-polka"
              d="M62.5,-49.8C108.3,7.6,191.6,35.2,207.9,81C224.2,126.8,173.5,190.9,115.5,205.7C57.6,220.4,-7.7,185.9,-70.7,153.1C-133.7,120.3,-194.6,89.3,-217.9,35.8C-241.2,-17.7,-226.9,-93.6,-184.3,-150.3C-141.8,-207.1,-70.9,-244.5,-31.3,-219.6C8.3,-194.7,16.7,-107.3,62.5,-49.8Z" 
              fill="#FE840E" />
          </clipPath>
        </svg>
      </Rellax>

      <Rellax className="_image-wrinkle" as="div" speed={3.4} >
        <img src={Wrinkle} alt="wrinkle" />
      </Rellax>

      <Rellax className="_image-polkaflat" as="div" speed={2.4} >
        <img src={PolkadotFlat} alt="polka pattern" />
      </Rellax>

      <Rellax className="_image-ocean-blob" as="div" speed={4} >
        <img src={OceanBlob} alt="ocean blob" />
      </Rellax>
      
      <Rellax className="_image-sun" as="div" speed={5} >
        <img src={Sun} alt="sun" />
      </Rellax>
      
      <Rellax className="_image-red-dot-1" as="div" speed={4} >
        <img src={RedDot1} alt="red dot one" />
      </Rellax>

      <Rellax className="_image-red-dot-2" as="div" speed={3} >
        <img src={RedDot2} alt="red dot two" />
      </Rellax>
      
      <Rellax className="_image-epic-poster" as="div" speed={1.8} >
        <img src={EpicPoster} alt="red dot three" />
      </Rellax>

      <div className="_inner-get-here outline w-80 w-70-ns w-40-l">
        <header className="_header-get-here bb w-100 flex flex-row items-center">
          <h3 className="f3 fw5 serif ma0 w-100">01/ Get Here</h3>
        </header>
        <div className="_content-get-here pt3 pr3 pb3 w-100">
          {isLoading && <Loading />}

          <ul className="_items-get-here ma0 serif">
            {data.map(({ question, answer }, index) => (
              <li className="mb5" key={index}>
                <h4 className="ma0 fw6 f4-l f5">
                  {question}
                </h4>
                <p className="sans-serif f5-l f6 mv3 lh-copy">
                  {answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  )
}
