// Import core libraries
import React, { FC } from 'react'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { SectionPropsInterface } from './interfaces'

const Section: FC<SectionPropsInterface> = ({ children = null, type = 'default', isFluid = false, divStyles = '' }) => {
  const styleClasses = {
    section: classy([
      type === 'footer' ? 'bg-greyDark' : type === 'inverted' ? 'bg-greyLight' : '',
      'py-section px-4 lg:px-0'
    ]),
    div: classy([
      'container mx-auto',
      divStyles,
    ]),
  }

  return (
    <section
      className={styleClasses.section}
    >
      {
        isFluid ? (children) : (<div className={styleClasses.div}>{ children }</div>)
      }
    </section>
  )
}

export default Section
