/* 3rd party */
import React from 'react'
import classNames from 'classnames'

/* 1st party */
import { ICON_TYPES } from '../utils'

function getIcon(type, color) {
  let icon

  switch(type) {
    case ICON_TYPES.PLACE:
      icon = (
        <svg className="_icon-place" version="1.1" x="0px" y="0px" viewBox="0 0 100 125">
          <g transform="translate(0,-952.36218)">
            <path 
              d="m 50,965.36218 c -13.25484,0 -24,10.0883 -24,25 0,5.3743 1.17605,8.7978 3.5625,13.00002 l 20.4375,36 20.4375,-36 C 72.82399,999.15988 74,995.73648 74,990.36218 c 0,-14.9117 -10.74516,-25 -24,-25 z m 0,12 c 6.62742,0 12,5.3726 12,12 0,6.6273 -5.37258,12.00002 -12,12.00002 -6.62742,0 -12,-5.37272 -12,-12.00002 0,-6.6274 5.37258,-12 12,-12 z" 
              fill={color} 
              stroke="#ffffff" 
              strokeWidth="3px"
              marker="none" 
              visibility="visible" 
              display="inline" 
              overflow="visible"/>
          </g>
        </svg>
      )
      break
    case ICON_TYPES.IDEO:
      icon = (
        <svg className="_icon-ideo" version="1.1"x="0px" y="0px"  viewBox="0 0 100 125">
          <g>
            <path d="M39.4,44.7h-5.1v11h5.1c3.3-0.1,5.5-2.3,5.5-5.5C44.9,47.1,42.7,44.7,39.4,44.7z"/>
            <path d="M50,5.2c-24.9,0-45,20.1-45,45s20.1,45,45,45s45-20.1,45-45S74.9,5.2,50,5.2z M26.8,44.7h-6.9v10.9h6.9v3H10v-3h6.9V44.7
		        H10v-3h16.8V44.7z M39.3,58.6h-8.1V41.8h8.2c5.1,0.1,8.7,3.7,8.7,8.4C48.1,54.9,44.5,58.6,39.3,58.6z M68.8,44.7H54.9v4h10.9v2.9
		        H54.9v4h13.9v2.9h-17V41.8h17V44.7z M80.8,59.4c-5.1,0-9.3-4.1-9.3-9.2c0-5.1,4.1-9.2,9.3-9.2c5.1,0,9.3,4.1,9.3,9.2
		        C90,55.3,85.9,59.4,80.8,59.4z"/>
	          <path d="M80.8,44.2c-3.3,0-6.1,2.7-6.1,6c0,3.3,2.7,6,6.1,6s6.1-2.7,6.1-6C86.8,46.9,84.1,44.2,80.8,44.2z"/>
          </g>
        </svg>
      )
    break
  }

  return icon
}

export default function Marker({ color, isActive, iconType }) {
  return (
    <div className={classNames('_marker-place', { '_active': isActive })}>
      {getIcon(iconType, color)}
    </div>
  )
}
