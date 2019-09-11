/* 3rd party */
import React from 'react'

export default function GlobalFooter() {
  return (
    <footer className="_footer-global serif flex flex-row w-100">        
      
      <div className="w-40 flex">
        <div className="_branding-global flex serif self-center justify-center">
          <span className="f6 self-center">
            | New York
          </span>
        </div>
      </div>
      
      <div className="w-30 flex">
        <article className="_article-info _address f6 sans-serif flex self-center flex-column justify-center">
          <div className="flex flex-row">
            <span>SKkklkl</span>
          </div>
          <div className="flex flex-row">
            <span>sjkjh</span>
          </div>
        </article>
      </div>
      
      <div className="w-30 flex">
        <article className="_article-info _network f6 sans-serif flex flex-column self-center justify-center">
          <div className="flex flex-row">
            <span>Network: {'ssss'}</span>
          </div>
          <div className="flex flex-row">
            <span>Password: {'pass'}</span>
          </div>
        </article>
      </div>

      <div className="w-30 justify-center flex self-center">
        <article className="_article-info _contact f6 sans-serif flex flex-column self-center justify-center">
          <div className="flex flex-row">
            <span className="pr2">Phone:</span>
            <a className="no-underline underline-hover black flex w-40" href={`tel:${'s'}`}>{'kjhkjlkjlkjhlkjhlkjhlkjhlkjh'}</a>
          </div>
          <div className="flex flex-row">
            <span className="pr2">Email:</span>
            <a className="no-underline underline-hover black flex" href={`mailto:${'s'}`}>{''}</a>
          </div>
        </article>
      </div>
    </footer>
  )
}