/* 3rd party */
import React from 'react'
import anime from 'animejs'

/* 1st party */
import EssentialInfo from './EssentialInfo'
import { BASE_ANIME_CONFIG } from '../utils'

// describe svg animations
function animate() {
  // animate yellow blob
  anime({
    ...BASE_ANIME_CONFIG,
    targets: '#_path-yellow',
    d: [
      { value: ['M155.3,-154.6C191.9,-154.4,205.8,-96.5,184.9,-56.1C164,-15.6,108.4,7.4,82.3,42.7C56.2,78,59.6,125.4,47,130.7C34.4,135.9,5.9,99,-34.3,87.3C-74.5,75.7,-126.5,89.3,-145,75.1C-163.6,60.8,-148.8,18.6,-135.2,-17.9C-121.6,-54.3,-109.4,-85,-87,-87.7C-64.7,-90.4,-32.4,-65.2,13.5,-81.3C59.4,-97.4,118.7,-154.8,155.3,-154.6Z'] },
      { value: ['M136.3,-178.4C156,-145.9,137.1,-83.3,150.6,-24C164.2,35.4,210.3,91.7,197.8,115.1C185.4,138.4,114.4,128.9,62.2,130.4C9.9,131.9,-23.6,144.4,-50.2,135.7C-76.8,127,-96.4,97,-114.6,65.9C-132.8,34.9,-149.6,2.8,-145.3,-26.3C-141,-55.3,-115.5,-81.3,-87.7,-112.4C-60,-143.5,-30,-179.7,14.1,-196.6C58.3,-213.5,116.6,-210.9,136.3,-178.4Z'] },
      { value: ['M152.6,-181.1C197.3,-144.4,232.6,-95.8,236,-46.1C239.5,3.7,211.1,54.6,173.1,80.6C135,106.7,87.4,107.8,43,128.5C-1.4,149.1,-42.4,189.2,-83.5,190.9C-124.6,192.7,-165.8,156.1,-164.9,115.6C-163.9,75.1,-120.9,30.7,-98.4,-3.5C-75.9,-37.7,-73.9,-61.8,-61,-104C-48,-146.2,-24,-206.6,15,-224.5C54,-242.3,108,-217.7,152.6,-181.1Z'] },
    ],
    easing: 'easeInOutSine',
    duration: 8000,
    delay: 0,
  })
}

export default function WelcomeSection({ data }) {
  animate()
  
  return (
    <section className="_section-welcome flex flex-row justify-center w-100">
      
      <svg 
        className="_blob-yellow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 800">
        <clipPath id="_mask-yellow" transform="translate(200,200)"> 
          <path id="_path-yellow"d="M155.3,-154.6C191.9,-154.4,205.8,-96.5,184.9,-56.1C164,-15.6,108.4,7.4,82.3,42.7C56.2,78,59.6,125.4,47,130.7C34.4,135.9,5.9,99,-34.3,87.3C-74.5,75.7,-126.5,89.3,-145,75.1C-163.6,60.8,-148.8,18.6,-135.2,-17.9C-121.6,-54.3,-109.4,-85,-87,-87.7C-64.7,-90.4,-32.4,-65.2,13.5,-81.3C59.4,-97.4,118.7,-154.8,155.3,-154.6Z" fill="#FFF900"/>
        </clipPath>
        <g clipPath="url(#_mask-yellow)">
          <rect width="600" height="600" fill="#FFF900" opacity="1" mask="url(#mask-yellow)"/>
        </g>
      </svg>


      <div className="_inner-welcome flex w-80 w-70-ns flex-column">
        
        <div className="_heading-welcome flex flex-column">
          <h1 className="serif fw5 f3 w-100 ma0 lh-solid">
            Welcome to <span className="ttu">IDEO</span>
          </h1>
          
          <h2 className="serif fw9 f1 f-headline-l mb0 mt1 mt3-ns lh-solid">New York</h2>
        </div>
        
        <EssentialInfo data={data} />
        
      </div>
    </section>
  )
}