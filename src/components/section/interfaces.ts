// Import core libraries
import { ReactNode } from 'react'

export type sectionType = 'default' | 'inverted' | 'footer'

export interface SectionPropsInterface {
  children?: ReactNode | null
  type?: sectionType
  isFluid?: boolean
  divStyles?: string
}
