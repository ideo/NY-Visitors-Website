/* 3rd party */
import React from 'react'

/* 1st party */
import EssentialInfo from './EssentialInfo'

export default function WelcomeSection({ data }) {
  
  return (
    <section className="_section-welcome flex flex-row justify-center w-100">
      <div className="_inner-welcome flex w-80 w-70-ns flex-column">
        
        <h1 className="serif fw5 f3 w-100 ma0 lh-solid">
          Welcome to <span className="ttu">IDEO</span>
        </h1>
        
        <h2 className="serif fw9 f1 f-headline-ns mb0 mt1 mt3-ns lh-solid">New York</h2>

        <EssentialInfo data={data} />
        
      </div>
    </section>
  )
}