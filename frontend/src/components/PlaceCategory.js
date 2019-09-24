/* 3rd party */
import React from 'react'
import classNames from 'classnames'

/* 1st party */
import Place from './Place'
import ExpandableHeader from './ExpandableHeader'

export default function PlaceCategory({ 
  data, onPlaceCategoryHeaderClick, handleActivePlaceIdChange, isExpanded 
}) {
  const { color, name, places } = data
  
  return (
    <article className={classNames('_article-expandable', { '_expanded' : isExpanded })}>
      
      <ExpandableHeader
        color={color}
        handleClick={onPlaceCategoryHeaderClick}
        title={name} />
      
      {isExpanded &&
        <section className="_section-places-list mt3 mb2 mt0-l mb0-1">
          {places.map((place, index) => (
            <Place
              key={index}
              data={place} 
              handlePlaceMouseEnter={handleActivePlaceIdChange.bind(null, place.id)}
              handlePlaceMouseLeave={handleActivePlaceIdChange.bind(null, null)}
            />
          ))}
        </section>
      }
      
    </article>
  )
}
