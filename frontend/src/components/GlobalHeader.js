/* 3rd party */
import React, { useState } from 'react'
import classNames from 'classnames'
import { HashLink as Link } from 'react-router-hash-link'


export default function GlobalHeader() {
  
  // mobile menu state
  const [isMenuOpen, setMenuIsOpen] = useState(false)
  function toggleMenu(event) {
    event.preventDefault()
    setMenuIsOpen(!isMenuOpen)
  }

  return (
    <header className="_header-global serif flex flex-row justify-between w-100">        
      
      {/* branding */}
      <div className="_branding-global flex serif w-50 w-30-l outline">  
        <span className="f7 f6-m f5-l self-center">
          Visitor Guide | New York
        </span>
      </div>

      {/* mobile menu */}
      <button 
        onClick={toggleMenu}
        className={classNames('_button-expand-mobile-nav', 'hamburger--slider', 'hamburger', {'is-active': isMenuOpen})} 
        type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>  

      {isMenuOpen &&
        <div className="_modal-menu serif flex flex-column justify-around">
          <nav className="flex flex-column items-end tr pa5">
            <Link
              to="#get-here"
              onClick={toggleMenu}
              className="_modal-menu-link flex black link f2 pa3">
              Get here
            </Link>
            <Link
              to="#around-studio"
              onClick={toggleMenu}
              className="_modal-menu-link flex black link f2 pa3">
              Around the Studio
            </Link>
            <Link 
              to="#in-studio"
              onClick={toggleMenu}
              className="_modal-menu-link flex black link f2 pa3">
              In the Studio
            </Link>
          </nav>
        </div>
      }

      {/* desktop menu */}
      <nav className="_nav-global w-50 flex flex-row justify-end">
        <Link 
          to="#get-here" 
          className="flex pa3 w-30-ns w-20-l dib justify-center outline link underline-hover">
          <span className="f5-ns f6  self-center">
            Get Here
          </span>
        </Link>
        <Link 
          to="#around-studio" 
          className="flex pa3 w-30-ns w-30-l dib justify-center outline link underline-hover">
          <span className="f5-ns f6 self-center">
            Around the Studio
          </span>
        </Link>
        <Link 
          to="#in-studio" 
          className="f5-ns pa3 f6 flex w-30-ns w-20-l dib justify-center outline link underline-hover">
          <span className="self-center">
            In the Studio
          </span>
        </Link>
      </nav>

    </header>
  )
}