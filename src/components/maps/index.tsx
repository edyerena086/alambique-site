// Import core libraries
import React, {FC} from 'react'
import GoogleMapReact from 'google-map-react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import {SectionTitle} from '@components/index'

// Import utils
import {classy} from '@utils/index'

// Import interfaces
import {MapsPropsInterface} from './interfaces'

const Maps: FC<MapsPropsInterface> = ({center, sectionTitle}) => {
  const styleClasses = {
    section: classy([
      'h-[400px] mb-8 md:mb-auto md:h-[600px] md:flex md:justify-center'
    ]),
    titleWrapper: classy([
      'md:z-[19] md:absolute bg-white py-4 px-6 md:shadow-lg md:rounded-b-lg'
    ]),
  }

  const apiKey = process.env.GATSBY_GOOGLE_MAPS_KEY

  return (
    <section className={styleClasses.section}>
      <div className={styleClasses.titleWrapper}>
        <SectionTitle isCentered>
          {sectionTitle?.raw && renderRichText(sectionTitle)}
        </SectionTitle>
      </div>
      <GoogleMapReact
        bootstrapURLKeys={{key: apiKey}}
        defaultCenter={{lat: center.lat, lng: center.lon }}
        defaultZoom={11}
      />
    </section>
  )
}

export default Maps
