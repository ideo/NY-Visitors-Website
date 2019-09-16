/* 3rd party */
import React from 'react'
import Rellax from 'react-rellax'

import PolkadotTexture from '../styles/images/polkadot-texture.jpg'
import Sign from '../styles/images/sign.png'
import Sandy from '../styles/images/sandy.png'
import Tom from '../styles/images/tom.png'
import Tower from '../styles/images/tower.png'
import Bridge from '../styles/images/bridge.png'

export default function FaqSection({ data }) { 
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
          <path id="_path-blob-purple" d="M149,-106.3C193.3,-104.7,229.7,-52.3,208.4,-21.2C187.2,9.9,108.5,19.8,64.1,33.5C19.8,47.1,9.9,64.6,-7.3,71.9C-24.5,79.2,-49,76.4,-96.9,62.7C-144.7,49,-215.8,24.5,-220.1,-4.2C-224.3,-33,-161.7,-66,-113.8,-67.7C-66,-69.3,-33,-39.7,9.7,-49.3C52.3,-59,104.7,-108,149,-106.3Z" fill="#1f008e" />
        </g>
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
