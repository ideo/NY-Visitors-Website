/* 3rd party */
import React from 'react'

/* 1st party */
import Loading from './Loading'

export default function Contact({ data, isLoading }) {
  return (
    <article className="_article-info _contact f7 f6-ns sans-serif flex flex-column self-center justify-center">
      {isLoading && <Loading />}
      {!isLoading && 
        <>
          <div className="flex flex-row">
            <span className="pr2">Phone:</span>
            <a className="no-underline underline-hover black flex w-40" href={`tel:${data.phone}`}>{data.phone}</a>
          </div>
          <div className="flex flex-row">
            <span className="pr2">Email:</span>
            <a className="no-underline underline-hover black flex" href={`mailto:${data.email}`}>{data.email}</a>
          </div>
        </>
      }
    </article>
  )
}