/* 3rd party */
import React from 'react'

export default function Address ({ data }) {
  return (
    <article className="_article-info _address f6 sans-serif flex flex-column self-center justify-center">
      <div className="flex flex-row">
        <span>{data.line1}</span>
      </div>
      <div className="flex flex-row">
        <span>{data.line2}</span>
      </div>
    </article>
  )
}