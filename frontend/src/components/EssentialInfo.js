/* 3rd party */
import React from 'react'
import anime from 'animejs'
import isEmpty from 'lodash.isempty'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'
import PaperTexture from '../styles/images/paper-texture.jpg'
import { BASE_ANIME_CONFIG } from '../utils'

// describe svg animations
function animate() {
  // animate green blob
  anime({
    ...BASE_ANIME_CONFIG,
    targets: '#_path-green',
    d: [
      { value: ['M57.7,-20.3C90.3,-5,143.1,19.8,157.1,66.9C171.1,113.9,146.3,183.1,98.3,207.5C50.3,231.8,-20.8,211.4,-66.1,175.1C-111.4,138.8,-130.8,86.5,-134.6,39.4C-138.4,-7.7,-126.7,-49.7,-101.6,-63.2C-76.6,-76.8,-38.3,-61.9,-12.9,-51.6C12.5,-41.3,25,-35.6,57.7,-20.3Z'] },
      { value: ['M98.4,-82.8C107.2,-67.5,79.9,-27.7,73.7,23.8C67.5,75.3,82.3,138.6,53.4,178.4C24.4,218.3,-48.3,234.9,-74.6,203.5C-100.9,172.2,-80.6,93,-65.9,46.7C-51.2,0.5,-42,-12.9,-32,-28.5C-21.9,-44.1,-10.9,-62.1,16.9,-75.6C44.8,-89.1,89.7,-98.2,98.4,-82.8Z'] },
      { value: ['M55.2,-44.5C61.3,-36.3,49.2,-13.9,53.5,30.3C57.8,74.4,78.6,140.4,56.2,172.6C33.8,204.8,-31.7,203.3,-95.4,179.7C-159,156.1,-220.9,110.3,-211.7,71C-202.6,31.8,-122.4,-0.9,-75.3,-18.5C-28.1,-36.1,-14.1,-38.6,5.2,-42.7C24.5,-46.9,49,-52.7,55.2,-44.5Z'] },
    ],
    duration: 10000,
    delay: 800,
    endDelay: 0
  })
}

export default function EssentialInfo({ data }) {
  animate()
  
  const isLoading = isEmpty(data)

  const address = {
    line1: data['address-line-1'],
    line2: data['address-line-2'],
  }
  const network = {
    name: data['wifi-name'],
    password: data['wifi-password']
  }
  const contact = {
    email: data['email'],
    phone: data['phone']
  }

  return (
    <div className="_wrapper-info outline">
      
      <img src={PaperTexture} className="_bg-blob-green" />
      <svg
        className="_blob-green"
        width="300"
        height="300"
        viewBox="0 0 300 300"
        xmlns="http://www.w3.org/2000/svg">
        <clipPath id="_mask-green" transform="translate(220,120) scale(0.6)"> 
          <path id="_path-green" d="M156.7,-134.8C172.6,-105,134.1,-41.6,103.5,-3.9C73,33.8,50.4,45.7,20.4,71.2C-9.5,96.7,-46.9,135.7,-80.4,132.7C-114,129.7,-143.7,84.7,-149.9,39.4C-156.1,-5.8,-138.6,-51.2,-109.7,-84C-80.8,-116.8,-40.4,-136.9,15,-148.8C70.4,-160.8,140.7,-164.6,156.7,-134.8Z" fill="#FE840E" />
        </clipPath>
      </svg>

      <svg
        className="_blob-black"
        width="600"
        height="600"
        viewBox="0 0 600 600" 
        xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(300,300)">
          <path id="_path-black" d="M74.8,-129C101.6,-99.1,131.3,-86.3,136.5,-65.2C141.7,-44.1,122.3,-14.6,131,28.4C139.7,71.4,176.4,128,173.1,172.9C169.9,217.8,126.6,250.9,84.3,243.3C42,235.7,0.6,187.4,-34.1,158.1C-68.8,128.8,-96.7,118.4,-115.2,98.9C-133.6,79.3,-142.5,50.5,-146.9,21C-151.3,-8.5,-151.1,-38.7,-138.9,-62.5C-126.6,-86.4,-102.2,-103.7,-77.1,-134.4C-51.9,-165.1,-26,-209,-1,-207.5C24,-206,47.9,-158.9,74.8,-129Z" fill="#000000" />
        </g>
      </svg>

      <Address isLoading={isLoading} data={address} />
      <Network isLoading={isLoading} data={network} />
      <Contact isLoading={isLoading} data={contact} />  
    </div>
  )
}