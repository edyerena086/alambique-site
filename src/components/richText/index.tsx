// Import core libraries
import React, {FC} from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

// Import components
import { Section } from '@components/index'

// Import interfaces
import { RichTextPropsInterface } from './interfaces'

const RichContent: FC<RichTextPropsInterface> = ({ content, isInverted }) => {
  return (
    <Section divStyles={'richContent'} type={isInverted ? 'inverted' : 'default'}>
      {
        content?.raw && renderRichText(content)
      }
    </Section>
  )
}

export default RichContent
