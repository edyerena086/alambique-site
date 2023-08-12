// Import core libraries
import React, { FC } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import utils
import { classy } from '@utils/index'

// Import utils
import { HomeHeroBannerPropsInterface } from './interfaces'

const HomeHeroBanner: FC<HomeHeroBannerPropsInterface> = ({ pageTitle, description, background }) => {
  const backgroundImage = getImage(background)

  const styleClasses = {
    section: classy([
      'h-[280px] md:h-[500px]'
    ]),
    container: classy([
      'container mx-auto top-[-280px] md:top-[-500px] relative z-10 grid md:grid-cols-2 lg:grid-cols-3 h-[280px] md:h-[500px]'
    ]),
    contentWrapper: classy([
      'bg-slate-950/80 h-full px-6 flex items-center'
    ]),
    h1: classy([
      'font-title text-5xl text-center md:text-left font-black text-white'
    ]),
    h4: classy([
      'font-body uppercase text-center md:text-left text-sm text-white font-bold mt-8 lg:w-[70%]'
    ]),
    backgroundImage: classy([
      'w-full max-h-[280px] md:max-h-[500px]',
    ]),
  }

  return (
    <section className={styleClasses.section}>
      <GatsbyImage className={styleClasses.backgroundImage} image={backgroundImage} alt={'background'} />
      <div className={styleClasses.container}>
        <div className={styleClasses.contentWrapper}>
          <div>
            <h1 className={styleClasses.h1}>
              {
                pageTitle?.raw && renderRichText(pageTitle)
              }
            </h1>
            <h4 className={styleClasses.h4}>
              {
                description?.raw && renderRichText(description)
              }
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHeroBanner
