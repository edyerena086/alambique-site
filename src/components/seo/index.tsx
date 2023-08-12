// Import core libraries
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

// Import interfaces
import { SeoPropsInterface } from './interfaces'

const Seo: FC<SeoPropsInterface> = ({ pageTitle }) => {
  return (
    <Helmet title={pageTitle} />
  )
}

export default Seo
