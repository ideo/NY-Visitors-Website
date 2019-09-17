/* 3rd party */
import React from 'react'

export default function Network ({ data }) {
  return (
    <article className="_article-info _network f7 f6-ns bb-ns sans-serif flex flex-column self-center justify-center">
      <div className="flex flex-row">
        <span>Network: {data.name}</span>
      </div>
      <div className="flex flex-row">
        <span>Password: {data.password}</span>
      </div>
    </article>
  )
}