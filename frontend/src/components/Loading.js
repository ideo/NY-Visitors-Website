/* 3rd party */
import React from 'react'

/* Credits: https://dribbble.com/shots/5092176-Newton-Loader */
export default function Loading() {
  return (
    <div className="_loading">
      <span className="_dot"></span>
      <div className="_dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}