/* 3rd party */
import React, { useState } from 'react'

export default function GlobalHeader() {
  
  // mobile menu state
  const [isMenuOpen, setMenuIsOpen] = useState(true)
  function toggleMenu(event) {
    event.preventDefault()
    setMenuIsOpen(!isMenuOpen)
  }

  return (
    <header className="_header-global serif flex flex-row justify-between w-100">        
      <div className="_branding-global flex serif w-30 outline">
        
        <span className="f6 self-center">
          Visitor Guide | New York
        </span>
      
      </div>

      {/* mobile menu */}
      <a href="#" onClick={toggleMenu} className="_button-expand-mobile-nav link db ba">
        <span className="_icon-menu white f3">
          &#9776;
        </span> 
      </a>

      {isMenuOpen &&
        <div className="_modal-menu serif flex flex-column justify-around">
          <nav className="flex flex-column items-end tr pa5">
            <a  href="#get-here" className="white flex link f2 pa3 ">Get here</a>
            <a  href="#around-studio" className="white flex link f2 pa3">Around the Studio</a>
            <a  href="#in-studio" className="white flex link f2 pa3">In the Studio</a>
          </nav>


        </div>
      }

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