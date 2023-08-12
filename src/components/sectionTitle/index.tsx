// Import core libraries
import React, { FC, Fragment } from 'react'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { SectionTitlePropsInterface } from './interfaces'

const SectionTitle: FC<SectionTitlePropsInterface> = ({ children, isCentered = false, subTitle = null }) => {
  const styleClasses = {
    h2: classy([
      'font-title text-2xl md:text-4xl font-extrabold',
      'text-center md:text-left',
      isCentered ? 'md:text-center' : ''
    ]),
    paragraph: classy([
      'text-body uppercase text-xs md:text-sm font-bold mt-6',
      isCentered ? 'text-center' : ''
    ]),
  }

  return (
    <Fragment>
      <h2 className={styleClasses.h2}>
        {
          children
        }
      </h2>
      {
        subTitle && (<p className={styleClasses.paragraph}>{ subTitle }</p>)
      }
    </Fragment>
  )
}

export default SectionTitle
