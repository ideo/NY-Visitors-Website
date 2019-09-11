/* 3rd party */
import React from 'react'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'

export default function EssentialInfo({ data: { address, network, contact }}) {
  return (
    <div className="_wrapper-info outline">
      <Address data={address} />
      <Network data={network} />
      <Contact data={contact} />  
    </div>
  )
}