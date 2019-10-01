/* 3rd party */
import React from 'react'

/* 1st party */
import Loading from './Loading'

export default function Address ({ data, isLoading }) {
  return (
    <article className="_article-info _address f5-l f6 bb sans-serif flex flex-column self-center justify-center">
      {isLoading && <Loading />}
      {!isLoading && 
        <>
          <div className="flex flex-row mb1">
            <span>{data.line1}</span>
          </div>
          <div className="flex flex-row">
            <span>{data.line2}</span>
          </div>
        </>
      }
    </article>
  )
}