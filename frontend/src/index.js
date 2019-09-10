/* 3rd party */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// import { config } from 'dotenv'

/* 1st party */
import * as serviceWorker from './serviceWorker'

/* css styles */
import 'tachyons'
import './styles/fonts.css'
import './styles/main.css'

require('dotenv').config()

const data = {
  essentials: {
    address: {
      line1: '395 Hudson Street, 8th Floor',
      line2: 'New York, NY 10014',
    },
    network: {
      name: 'IDEO-Guest',
      password: '6502893400'
    },
    contact: {
      phone: '212-965-6100',
      email: 'ny-experience@ideo.com'
    }
  },
  tips: [
    {
      question: 'Should I tell anyone I\'m coming?',
      answer: 'ABSOLUTELY! If you’re hoping to meet with clients in our office, coming in with a team of IDEOers, flying solo, or just want to poke your head in while on vacation in NYC, we always appreciate a heads up. Reach out to our Experience Team ny-experience@ideo.com. They’ll make sure we roll out the welcome mat for ya!'
    },
    {
      question: 'How do I get into the office?',
      answer: 'Office Hours are M-F 8:30-5:00. All of our visitors have to present their IDs to lobby security. Please plan accordingly, as it may take a few minutes to go through the process. After scanning your way through our lobby’s turnstiles, head right for the express elevators. Once on the 8th floor, you’ll see the glass doors of our sister company, SYPartners—head in the opposite direction down the hall to our space on the right.'
    },
    {
      question: 'Who is Lorem Ipsum?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae ligula vestibulum, aliquet purus et, suscipit nulla. Maecenas in diam nec sapien dictum accumsan a nec odio. Maecenas imperdiet magna et enim malesuada, at tempus quam elementum. Nullam rutrum eleifend nibh, et vestibulum quam iaculis a. Aliquam at erat lobortis elit viverra facilisis. Nulla cursus cursus enim, non molestie massa euismod eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus odio urna, eleifend ac volutpat vel, tincidunt non dolor. Nullam interdum sed libero nec aliquet. Vestibulum quis accumsan nisi. Cras porta, est varius lacinia consectetur, metus nulla condimentum eros, et tempus ex augue non dolor. Maecenas nec nulla nec nunc scelerisque auctor. Etiam orci odio, vulputate quis arcu a, vulputate sagittis elit.'
    },
  ] 
}

ReactDOM.render(<App data={data} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
