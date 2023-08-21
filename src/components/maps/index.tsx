// Import core libraries
import React, {FC} from 'react'
import GoogleMapReact from 'google-map-react'

// Import utils
import {classy} from '@utils/index'

const Maps: FC = () => {
  const styleClasses = {
    section: classy([
      'h-[500px]'
    ]),
  }

  const apiKey = process.env.GATSBY_GOOGLE_MAPS_KEY

  console.log('my api ===>', apiKey)

  return (
    <section className={styleClasses.section}>
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={{lat: 25.686613, lng: -100.316116 }}
        defaultZoom={11}
      />
    </section>
  )
}

export default Maps
