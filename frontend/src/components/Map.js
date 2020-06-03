import React from 'react'
import { useGoogleMaps } from 'react-hook-google-maps'

const API_KEY = 'AIzaSyCQrdVemCc5-Q6dP0kwKHHwCsH5XcQfXa8'

const  mapContainerStyle = {
   height: '60vh',
   width: '60vw',
   margin: '1em 0',
   borderRadius: '0.3em'
}

const mapInitConf = {
   zoom: 7,
   center: { lat: 56.83324, lng: 13.94082 },
   mapTypeId: 'hybrid'
 };

export default function Map(props) {
   const { ref, map, google } = useGoogleMaps(API_KEY, mapInitConf)

   console.log(map)
   console.log(google);

   return (
      <div style={mapContainerStyle} ref={ref}/>
   )
}