// Import core libraries
import {graphql} from 'gatsby'

export const seoFragment = graphql`
fragment seoFragment on ContentfulSeo {
  pageTitle
  metaDescription
  metaKeywords
  ogTitle
  ogUrl
  ogType
  ogImage {
    url
  }
}
`
