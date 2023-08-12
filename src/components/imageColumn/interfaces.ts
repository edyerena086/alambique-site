// Import core libraries
import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface ImageColumnPropsInterface {
  image: IGatsbyImageData
  text: any
  sectionTitle: any
  subTitle?: string | null
}