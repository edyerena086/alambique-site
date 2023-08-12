// Import core libraries
import React, { FC } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import components
import { Section, SectionTitle } from '@components/index'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { ImageColumnPropsInterface } from './interfaces'

const ImageColumn: FC<ImageColumnPropsInterface> = ({ image, sectionTitle, subTitle = null, text }) => {
  const dynamicImage = getImage(image)

  const styleClasses = {
    wrapper: classy([
      'md:flex md:items-center md:justify-between'
    ]),
    imageWrapper: classy([
      'w-full md:w-1/3 flex justify-center'
    ]),
    image: classy([
      'max-w-[50%] md:max-w-[70%] lg:max-w-[100%] rounded-full border-6 border-white shadow-slate-500 shadow-xl'
    ]),
    columnWrapper: classy([
      'w-full mt-8 md:mt-0 md:px-auto md:w-2/3 imageColumnParagraph'
    ]),
  }
  return (
    <Section type={'inverted'}>
      <div className={styleClasses.wrapper}>
        {/* Image */}
        <div className={styleClasses.imageWrapper}>
          <GatsbyImage className={styleClasses.image} image={dynamicImage} alt={'Nuestra promesa'} />
        </div>
        {/* Column */}
        <div className={styleClasses.columnWrapper}>
          <SectionTitle subTitle={subTitle}>
            {
              sectionTitle?.raw && renderRichText(sectionTitle)
            }
          </SectionTitle>

          
          {
            text?.raw && renderRichText(text)
          }
        </div>
      </div>
    </Section>
  )
}

export default ImageColumn
