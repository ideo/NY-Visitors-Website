/* 3rd party */
import React from 'react'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'

export default function EssentialInfo({ data }) {
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
      <Address data={address} />
      <Network data={network} />
      <Contact data={contact} />  
    </div>
  )
}