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
    <footer className="_footer-global serif flex flex-row-l flex-column w-100 ba bn-l">        
      
      <div className="w-100 w-20-l flex pa1 pa0-l flex-row items-center justify-center">
        <h3 className="_message-footer serif fw5 f5">See you soon!</h3>
        <div className="_branding-global flex serif mt1 ml3 m0-l">
          <span className="f6 self-center">
            |&nbsp;&nbsp;New York
          </span>
        </div>
      </div>
      
      <div className="w-100 w-80-l flex flex-column flex-row-l">
        <div className="w-80 self-center w-30-l flex f7">
          <Address data={address} />
        </div>
        
        <div className="w-80 self-center w-30-l flex">
          <Network data={network} />
        </div>

        <div className="w-80 self-center w-30-l flex">
          <Contact data={contact} />
        </div>
      </div>
    </footer>
  )
}