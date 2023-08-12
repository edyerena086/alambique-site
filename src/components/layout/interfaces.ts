// Import core libraries
import { ReactNode  } from 'react'

// Import other interfaces
import { FooterPropsInterface } from '@components/footer/interfaces'
import { HeaderPropsInterface } from '@components/header/interfaces'
import { SeoPropsInterface } from '@components/seo/interfaces'

export interface LayoutPropsInterface {
  children: ReactNode
  footer: FooterPropsInterface
  header: HeaderPropsInterface
  seo: SeoPropsInterface
}
