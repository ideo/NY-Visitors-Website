/* 1st party */
import React from 'react'

export default function ExpandableHeader({ handleClick, color, title }) {
  
  function onClick(e) {
    e.stopPropagation()
    handleClick()
  }

  return (
    <header
      className="_header-expandable flex flex-row items-center"
      onClick={onClick}
      onTouchStart={onClick}>
      <h4 className="_heading-expandable pl4 mb1 w-80 ttu fw6 f4 serif">
        <div className="_inner-expandable dib">
          <div className="_title-expandable pr1">{title}</div>
          {color &&
            <div style={{ backgroundColor: color }} className="_underline-expandable flex">
              <div className="flex-grow-1"></div>
            </div>
          }
        </div>
      </h4>
      <span className="_arrow-expandable w-20 flex flex-grow-1">&nbsp;</span>
    </header>
  )
}