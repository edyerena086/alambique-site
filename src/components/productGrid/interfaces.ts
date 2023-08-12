// Import core libraries
import type { IGatsbyImageData } from 'gatsby-plugin-image'

export type productPropsType = {
  title: string
  isFood: boolean
  name: any
  description: any
  image: IGatsbyImageData
}

export type productCountStateType = {
  drinks: number
  food: number
}

export interface ProductGridPropsInterface {
  products: productPropsType[]
}
