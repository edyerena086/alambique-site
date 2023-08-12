// Import general interfaces
import { CtaPropsInterface } from '@common/interfaces'

type socialMediaItems = {
  items: CtaPropsInterface[]
}

export interface TopFooterPropsInterface {
  sitemap: CtaPropsInterface[]
  socialMedia: socialMediaItems
}

export interface FooterPropsInterface extends TopFooterPropsInterface {}
