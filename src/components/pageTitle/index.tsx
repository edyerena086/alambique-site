// Import core libraries
import React, { FC } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import { Section } from '@components/index'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { PageTitlePropsInterface } from './interfaces'

const PageTitle: FC<PageTitlePropsInterface> = ({ mainTitle, subTitle }) => {
  const styleClasses = {
    h1: classy([
      'font-title text-center md:text-left font-black text-3xl md:text-5xl'
    ]),
    h2: classy([
      'font-body text-center md:text-left text-base md:text-xl mt-2 font-bold uppercase'
    ]),
  }

  return (
    <Section>
      <h1 className={styleClasses.h1}>
        {
          mainTitle?.raw && renderRichText(mainTitle)
        }
      </h1>
      <h2 className={styleClasses.h2}>
        {
          subTitle
        }
      </h2>
    </Section>
  )
}

export default PageTitle
