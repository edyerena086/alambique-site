// Import core libraries
import React, { FC } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import components
import { Section, SectionTitle } from '@components/index'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { ContentColumnPropsInterfaces } from './interfaces'

const ContentColumn: FC<ContentColumnPropsInterfaces> = ({ columns, sectionTitle, subTitle = null, isInverted = false }) => {
  const styleClasses = {
    contentWrapper: classy([
      'grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-9'
    ]),
    h3: classy([
      'text-center font-title text-xl md:text-2xl font-black mb-6'
    ]),
    imageWrapper: classy([
      'flex w-full justify-center mb-6'
    ]),
    image: classy([
      'rounded-full border-4 border-white shadow-slate-500 shadow-lg'
    ]),
    contentColumnWrapper: classy([
      'mb-7 md:mb-0'
    ]),
  }

  return (
    <Section type={isInverted ? 'inverted' : 'default'}>
      <SectionTitle isCentered subTitle={subTitle}>
        {
          sectionTitle?.raw && renderRichText(sectionTitle)
        }
      </SectionTitle>
      {/* Content Wrapper */}
      <div className={styleClasses.contentWrapper}>
        {
          columns.map((item, index) => {
            const dynamicImage = getImage(item.image)
            return (
              <div className={`${styleClasses.contentColumnWrapper} contentColumnWrapper`} key={`content-column-${index}-${Date.now()}`}>
                <div className={styleClasses.imageWrapper}><GatsbyImage class={item.isProduct ? '' : styleClasses.image} image={dynamicImage} alt={'Nuestra promesa'} /></div>
                {
                  item.columnName?.raw && (<h3 className={styleClasses.h3}>{renderRichText(item.columnName)}</h3>)
                }
                <span className={'contentColumnText'}>
                  {
                    item.description?.raw && renderRichText(item.description)
                  }
                </span>
              </div>
            )
          })
        }
      </div>
    </Section>
  )
}

export default ContentColumn
