/* 3rd party */
import React from 'react'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'

export default function GlobalFooter({ data }) {
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
    <footer style={{display: 'none'}} className="_footer-global serif flex flex-row w-100">        
      
      <div className="w-20 flex">
        <div className="_branding-global flex serif self-center justify-center">
          <span className="f6 self-center">
            |&nbsp;&nbsp;New York
          </span>
        </div>
      </div>
      
      <div className="w-30 flex f7">
        <Address data={address} />
      </div>
      
      <div className="w-30 flex">
        <Network data={network} />
      </div>

      <div className="w-30 flex">
        <Contact data={contact} />
      </div>

    </footer>
  )
}