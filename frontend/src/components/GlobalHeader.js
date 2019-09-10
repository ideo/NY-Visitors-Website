/* 3rd party */
import React from 'react'

export default function GlobalHeader() {
  return (
    <header className="_header-global serif flex flex-row justify-between w-100">        
      <div className="_branding-global flex serif w-30 outline">
        
        <span className="f6 self-center">
          Visitor Guide | New York
        </span>
      
      </div>

      <nav className="_nav-global w-50 flex flex-row justify-end">
        
        <a href="#" className="flex w-20 dib justify-center outline link underline-hover">
          <span className="f6 self-center">
            Get Here
          </span>
        </a>
        <a href="#" className="flex w-30 dib justify-center outline link underline-hover">
          <span className="f6 self-center">
            Around the Studio
          </span>
        </a>
        <a href="#" className="f6 flex w-20 dib justify-center outline link underline-hover">
          <span className="self-center">
            In the Studio
          </span>
        </a>
      
      </nav>
    </header>
  )
}