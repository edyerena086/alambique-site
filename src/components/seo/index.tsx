// Import core libraries
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

// Import interfaces
import { SeoPropsInterface } from './interfaces'

const Seo: FC<SeoPropsInterface> = ({ pageTitle, metaDescription, metaKeywords }) => {
  return (
    <Helmet title={`${pageTitle} - Alambique Café`}>
      <meta name={'description'} content={metaDescription} />
      <meta name={'keywords'} content={metaKeywords} />
    </Helmet>
  )
}

export default Seo
