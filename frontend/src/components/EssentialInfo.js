/* 3rd party */
import React from 'react'

export default function EssentialInfo({ data: { address, network, contact }}) {
  return (
    <div className="_wrapper-info outline">
      
      <article className="_article-info _address f6 sans-serif flex flex-column self-center justify-center">
        <div className="flex flex-row">
          <span>{address.line1}</span>
        </div>
        <div className="flex flex-row">
          <span>{address.line2}</span>
        </div>
      </article>

      <article className="_article-info _network f6 sans-serif flex flex-column self-center justify-center">
        <div className="flex flex-row">
          <span>Network: {network.name}</span>
        </div>
        <div className="flex flex-row">
          <span>Password: {network.password}</span>
        </div>
      </article>

      <article className="_article-info _contact f6 sans-serif flex flex-column self-center justify-center">
        <div className="flex flex-row">
          <span className="pr2">Phone:</span>
          <a className="no-underline underline-hover black flex w-40" href={`tel:${contact.phone}`}>{contact.phone}</a>
        </div>
        <div className="flex flex-row">
          <span className="pr2">Email:</span>
          <a className="no-underline underline-hover black flex" href={`mailto:${contact.email}`}>{contact.email}</a>
        </div>
      </article>
    
    </div>
  )
}