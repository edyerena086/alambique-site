// Import core libraries
import React, { FC } from 'react'
import { Helmet } from 'react-helmet'

// Import interfaces
import { SeoPropsInterface } from './interfaces'

const Seo: FC<SeoPropsInterface> = ({ 
  pageTitle, 
  metaDescription, 
  metaKeywords, 
  ogTitle, 
  ogDescription, 
  ogImage, 
  ogUrl, 
  ogType 
}) => {
  return (
    <Helmet title={`${pageTitle} - Alambique Café`}>
      <meta name={'description'} content={metaDescription} />
      <meta name={'keywords'} content={metaKeywords} />
      {/* OG TAGS */}
      { ogTitle && (<meta property={'og:title'} content={ogTitle} />) }
      { ogDescription && (<meta property={'og:description'} content={ogDescription} />) }
      { ogUrl && (<meta property={'og:url'} content={ogUrl} />) }
      { ogType && (<meta property={'og:type'} content={ogType} />) }
      { ogImage?.url && (<meta property={'og:image'} content={ogImage.url} />) }
      <meta property={'og:locale'} content={'es_MX'} />
    </Helmet>
  )
}

export default Seo
