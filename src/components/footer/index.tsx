// Import core libraries
import React, { FC } from 'react'

// Import components
import { Section } from '@components/index'

// Import utils
import { classy } from '@utils/index'

// Import sub-components
import TopFooter from './top.footer'
import BottomFooter from './bottom.footer'

// Import interfaces
import { FooterPropsInterface } from './interfaces'

const Footer: FC<FooterPropsInterface> = ({ sitemap, socialMedia }) => {
  const styleClasses = {
    footer: classy([]),
    footerWrapper: classy([])
  }

  return (
    <footer>
      <Section type='footer'>
        <TopFooter socialMedia={socialMedia} sitemap={sitemap} />
        <BottomFooter />
      </Section>
    </footer>
  )
}

export default Footer
