// Import general interfaces
import { CtaPropsInterface } from '@common/interfaces'
import type { IGatsbyImageData } from 'gatsby-plugin-image'

export interface NavbarPropsInterface {
  items: CtaPropsInterface[]
}

export interface LogoPropsInterface {
  logo: IGatsbyImageData
  logoLink: string
}

export interface HeaderPropsInterface extends NavbarPropsInterface, LogoPropsInterface {}
