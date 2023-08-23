// Import core libraries
import {graphql} from 'gatsby'

export const headerFragment = graphql`
fragment headerFragment on ContentfulNavbar {
  logo {
    gatsbyImageData(height: 100)
    description
  }
  logoLink
  items {
    name
    to
    showOff
  }
}
`