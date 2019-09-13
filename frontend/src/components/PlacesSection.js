/* 3rd party */
import React, { useState, useEffect } from 'react'

/* 1st party */
import PlaceCategory from './PlaceCategory'
import PlacesMap from './PlacesMap'
import { hydrate, ENDPOINTS, isMobile, isDesktop } from '../utils'

export default function PlacesSection() {
  
  // hydrate `place` categories from endpoint
  const [placeCategories, setPlaceCategories] = useState([])
  useEffect(() => {
    async function hydratePlaces() {
      const data = await hydrate(ENDPOINTS.PLACE_CATEGORIES, 'id:ASC')
      setPlaceCategories(data)
    }
    hydratePlaces()
  }, [])

  // expanding & collapsing UI
  const [expandedCategoryIndex, setExpandedCategoryIndex] = useState(0)
  function handlePlaceCategoryClick(index) {
    setExpandedCategoryIndex(index)
  }  

  // hovering + touching a place from the places list
  const [activePlaceId, setActivePlaceId] = useState(null)
  function handleActivePlaceIdChange(id) {
    setActivePlaceId(id)
  }

  let currentPlaces = 
    placeCategories[expandedCategoryIndex] ? 
    placeCategories[expandedCategoryIndex].places :
    [] 

  let currentCategoryColor = 
    placeCategories[expandedCategoryIndex] ? 
    placeCategories[expandedCategoryIndex].color :
    '#ff0033' 

  return (
    <section className="_section-places flex flex-column w-100 items-center">        
      <div className="_inner-places outline w-80 w-70-m">

        <header className="_header-places bb w-100 flex flex-row items-center">
          <h3 className="f3 fw5 serif ma0 w-100">
            02/ Around the Studio
          </h3>
        </header>

        <div className="_content-places w-100 flex flex-column flex-row-l">
          {!isDesktop() && 
            <PlacesMap
              activePlaceId={activePlaceId}
              data={currentPlaces}
              color={currentCategoryColor} />
          }
          <div className="_list-places w-100 w-50-l br-l overflow-y-scroll">

            {placeCategories.map((placeCategory, index) => (
              <PlaceCategory
                key={index}
                data={placeCategory}
                handleActivePlaceIdChange={handleActivePlaceIdChange}
                onPlaceCategoryHeaderClick={handlePlaceCategoryClick.bind(null, index)}
                isExpanded={index === expandedCategoryIndex}
              /> 
            ))}

          </div>
          {isDesktop() && 
            <PlacesMap
              activePlaceId={activePlaceId}
              data={currentPlaces}
              color={currentCategoryColor} />
          }
        </div>
      </div>
      
    </section>
  )
}
