// Import core libraries
import {graphql} from 'gatsby'

export const footerFragment = graphql`
fragment footerFragment on ContentfulFooter {
  id
  sitemap {
    name
    to
    showOff
  }
  socialMedia {
    items {
      name
      to
    }
  }
}
`
