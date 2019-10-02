/* 3rd party */
import React from 'react'
import isEmpty from 'lodash.isempty'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'

export default function GlobalFooter({ data }) {
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
    <footer className="_footer-global serif flex flex-row-l flex-column w-100 outline">        
      
      <div className="w-100 w-20-l flex pa1 pa0-l flex-row items-center justify-center">
        <h3 className="_message-footer serif mt4 fw6 f3">See you soon!</h3>
        <div className="_branding-global flex serif mt1 ml3 m0-l">
          <span className="f6 self-center">
            |&nbsp;&nbsp;New York
          </span>
        </div>
      </div>
      
      <div className="w-100 w-80-l flex flex-column flex-row-l">
        <div className="w-80 self-center w-30-l flex">
          <Address isLoading={isLoading} data={address} />
        </div>
        
        <div className="w-80 self-center w-30-l flex">
          <Network isLoading={isLoading} data={network} />
        </div>

        <div className="w-80 self-center w-30-l flex">
          <Contact isLoading={isLoading} data={contact} />
        </div>
      </div>
    </footer>
  )
}