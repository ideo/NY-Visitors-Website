/* 3rd party */
import React from 'react'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'

export default function GlobalFooter() {
  return (
    <footer className="_footer-global serif flex flex-row w-100">        
      
      <div className="w-40 flex">
        <div className="_branding-global flex serif self-center justify-center">
          <span className="f6 self-center">
            | New York
          </span>
        </div>
      </div>
      
      <div className="w-30 flex">
        <Address data={{line1: 'hello', line2: 'goodbye'}} />
      </div>
      
      <div className="w-30 flex">
        <Network data={{name: 'foo', password: 'bar'}} />
      </div>

      <div className="w-30 flex">
        <Contact data={{phone: '', email: ''}} />
      </div>

    </footer>
  )
}