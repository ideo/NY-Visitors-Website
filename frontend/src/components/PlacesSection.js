/* 3rd party */
import React, { useState, useEffect } from 'react'
import Rellax from 'react-rellax'

/* 1st party */
import PlaceCategory from './PlaceCategory'
import PlacesMap from './PlacesMap'
import { hydrate, ENDPOINTS, isDesktop } from '../utils'
import Key from '../styles/images/key.png'
import RedDot1 from '../styles/images/red-dot-1.png'
import BlackBlob from '../styles/images/black-blob.png'
import GoldenBlob from '../styles/images/golden-blob.png'
import PurpleBlob2 from '../styles/images/purple-blob-2.png'

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
    '#cccccc' 

  return (
    <section
      id="around-studio"
      className="_section-places flex flex-column w-100 mt0-l items-center">        
      
      <Rellax className="_image-key" as="div" speed={1.8} >
        <img src={Key} />
      </Rellax>

      <Rellax className="_image-red-dot-3" as="div" speed={2.7} >
        <img src={RedDot1} />
      </Rellax>
      
      <Rellax className="_image-black-blob" as="div" speed={1.8} >
        <img src={BlackBlob} />
      </Rellax>

      <Rellax className="_image-golden-blob" as="div" speed={2.3} >
        <img src={GoldenBlob} />
      </Rellax>
      
      <Rellax className="_image-purple-blob" as="div" speed={0.3} >
        <img src={PurpleBlob2} />
      </Rellax>
      
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
