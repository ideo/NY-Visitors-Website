/* 3rd party */
import React from 'react'

export default function FaqSection({ data }) { 
  return (
    <section className="_section-get-here flex flex-column w-100 items-center">        
      <div className="_inner-get-here outline w-80 w-70-ns">
        <header className="_header-get-here bb w-100 flex flex-row items-center">
          <h3 className="f3 fw5 serif ma0 w-100">01/ Get Here</h3>
        </header>
        <div className="_content-get-here pt3 pr3 pb3 w-100">
          <ul className="_items-get-here ma0 serif">
            {data.map(({ question, answer }, index) => (
              <li className="mb3" key={index}>
                <h4 className="ma0 fw6">
                  {question}
                </h4>
                <p className="sans-serif f7 lh-copy">
                  {answer}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
    </section>
  )
}
