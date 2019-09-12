/* 3rd party */
import React, { createRef } from 'react'

/* 1st party */
import Address from './Address'
import Network from './Network'
import Contact from './Contact'
import { getVerticalGridAlignmentDiscrepancy, getOffsetTop } from '../utils'

const wrapperElRef = createRef()

export default function EssentialInfo({ data }) {
  function getStyle() {
    let discrepancy = 0
    let currentMarginTop = 0
    if (wrapperElRef && wrapperElRef.current) {
      discrepancy = getVerticalGridAlignmentDiscrepancy(wrapperElRef.current)
      currentMarginTop =  wrapperElRef.current.style.marginTop
    }
    if (discrepancy !== 0) {
      return { marginTop: `${discrepancy}px` }
    }
    return {marginTop: currentMarginTop}
  }

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
    <div  
      ref={wrapperElRef}
      className="_wrapper-info outline"
      style={getStyle()}>
      <Address data={address} />
      <Network data={network} />
      <Contact data={contact} />  
    </div>
  )
}