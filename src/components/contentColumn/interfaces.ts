// Import core libraries
import type { IGatsbyImageData } from 'gatsby-plugin-image'

type contentColumnItem = {
  isProduct?: boolean
  columnName: any
  description: any
  image: IGatsbyImageData
}

export interface ContentColumnPropsInterfaces {
  columns: contentColumnItem[]
  sectionTitle: any
  subTitle?: string | null
}