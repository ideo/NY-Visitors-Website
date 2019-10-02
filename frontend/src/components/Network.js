/* 3rd party */
import React from 'react'

/* 1st party */
import Loading from './Loading'

export default function Network ({ data, isLoading }) {
  return (
    <article className="_article-info _network f5-l f6 bb sans-serif flex flex-column self-center justify-center">
      {isLoading && <Loading />}
      {!isLoading && 
        <>
          <div className="flex flex-row mb1">
            <span>Network: {data.name}</span>
          </div>
          <div className="flex flex-row">
            <span>Password: {data.password}</span>
          </div>
        </>
      }
    </article>
  )
}