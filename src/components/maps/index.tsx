// Import core libraries
import React, {FC} from 'react'
import GoogleMapReact from 'google-map-react'

// Import components
import {SectionTitle} from '@components/index'

// Import utils
import {classy} from '@utils/index'

const Maps: FC = () => {
  const styleClasses = {
    section: classy([
      'h-[600px] flex justify-center'
    ]),
    titleWrapper: classy([
      'z-[19] absolute bg-white py-4 px-6 shadow-lg rounded-b-lg'
    ]),
  }

  const apiKey = process.env.GATSBY_GOOGLE_MAPS_KEY

  console.log('my api ===>', apiKey)

  return (
    <section className={styleClasses.section}>
      <div className={styleClasses.titleWrapper}>
        <SectionTitle isCentered>
          <p>Próximamente <b>cerca</b> de ti</p>
        </SectionTitle>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={{lat: 25.686613, lng: -100.316116 }}
        defaultZoom={11}
      />
    </section>
  )
}

export default Maps
