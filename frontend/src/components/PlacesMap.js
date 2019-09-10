/* 3rd party */
import React from 'react'
import GoogleMap from 'google-map-react'

/* 1st party */
import { MAP, ICON_TYPES } from '../utils'
import Marker from './Marker'

const [lat, lng] = MAP.IDEO_NYC_LAT_LNG

export default function PlacesMap({ data, color, activePlaceId }) {
  return (
    <div className="_map-places w-50">
      <GoogleMap
        apiKey={MAP.API_KEY}
        center={MAP.IDEO_NYC_LAT_LNG}
        zoom={MAP.ZOOM}
        options={{
          styles: MAP.STYLES
        }}>
        
        <Marker
          isActive={true}
          iconType={ICON_TYPES.IDEO}
          lat={lat}
          lng={lng}
          color={'#000000'}
          name={'IDEO NYC'} />

        {data.map(({latitude, longitude, name, id}, index) => (
          <Marker
            isActive={activePlaceId === id}
            iconType={ICON_TYPES.PLACE}
            key={index}
            lat={latitude}
            lng={longitude}
            color={color}
            name={name} />
        ))}
      
      </GoogleMap>
    </div>
  )
}