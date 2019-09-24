/* 3rd party */
import React, { useState } from 'react'
import classNames from 'classnames'

/* 1st party */
import ExpandableHeader from './ExpandableHeader'

export default function StudioItem({ data }) {
  const { question, response } = data
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <article className={classNames('_article-expandable', 'w-100', { '_expanded' : isExpanded })}>
      
      <ExpandableHeader
        handleClick={() => { setIsExpanded(!isExpanded) }}
        title={question} />
      
      {isExpanded &&
        <p 
          className="_response-studio pl4 pr4 lh-copy mv3 sans-serif f6"
          dangerouslySetInnerHTML={{ __html: response }}>
        </p>
      }
      
    </article>
  )
}