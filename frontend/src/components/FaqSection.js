/* 3rd party */
import React from 'react'
import Rellax from 'react-rellax'
import anime from 'animejs'

/* 1st party */
import PolkadotTexture from '../styles/images/polkadot-texture.jpg'
import Sign from '../styles/images/sign.png'
import Sandy from '../styles/images/sandy.png'
import Tom from '../styles/images/tom.png'
import Tower from '../styles/images/tower.png'
import Bridge from '../styles/images/bridge.png'

function animate() {
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
}

export default function FaqSection({ data }) { 
  animate()
  
  return (
    <section className="_section-get-here flex flex-column w-100 items-center">        
      
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
            <path
              id="_path-blob-purple"
              d="M149,-106.3C193.3,-104.7,229.7,-52.3,208.4,-21.2C187.2,9.9,108.5,19.8,64.1,33.5C19.8,47.1,9.9,64.6,-7.3,71.9C-24.5,79.2,-49,76.4,-96.9,62.7C-144.7,49,-215.8,24.5,-220.1,-4.2C-224.3,-33,-161.7,-66,-113.8,-67.7C-66,-69.3,-33,-39.7,9.7,-49.3C52.3,-59,104.7,-108,149,-106.3Z" fill="#1f008e" />
          </g>
        </svg>
      </Rellax>

      <Rellax className="_blob-polka" as="div" speed={4} >
        <img src={PolkadotTexture} className="_bg-blob-polka" />
        <svg
          width="300"
          height="300"
          viewBox="0 0 600 600"
          xmlns="http://www.w3.org/2000/svg"
        >
          <clipPath id="_mask-polka" transform="translate(220,120) scale(0.6)">
            <path d="M106.1,-152.4C128.5,-150.6,131.6,-106,158.2,-66.7C184.8,-27.3,234.9,6.8,227,29.6C219,52.4,153,63.9,107.5,64.1C62.1,64.3,37.2,53.2,20,50.1C2.7,47,-6.9,51.8,-22.6,56.6C-38.3,61.3,-60,66,-103.7,63.3C-147.5,60.5,-213.3,50.3,-239.6,20.3C-265.8,-9.7,-252.5,-59.5,-228.7,-101.5C-204.9,-143.5,-170.6,-177.7,-130.7,-171.5C-90.8,-165.3,-45.4,-118.7,-1.8,-115.9C41.8,-113.1,83.6,-154.1,106.1,-152.4Z" fill="#FE840E" />
          </clipPath>
        </svg>
      </Rellax>

      <div className="_inner-get-here outline w-80 w-70-ns">
        <header className="_header-get-here bb w-100 flex flex-row items-center">
          <h3 className="f3 fw5 serif ma0 w-100">01/ Get Here</h3>
        </header>
        <div className="_content-get-here pt3 pr3 pb3 w-100">
          <ul className="_items-get-here ma0 serif">
            {data.map(({ question, answer }, index) => (
              <li className="mb3" key={index}>
                <h4 className="ma0 fw6">
                  {question}
                </h4>
                <p className="sans-serif f7 lh-copy">
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
