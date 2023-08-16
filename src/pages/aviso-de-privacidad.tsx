// Import core libraries
import React, {FC} from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'

// Import components
import { Layout, PageTitle, RichContent } from '@components/index'

const AvisoDePrivacidadPage: FC<PageProps> = ({ data }) => {
  const { seo, footer, header, pageTitle, richContent } = data?.contentfulLegalPage

  return (
    <Layout seo={seo} footer={footer} header={header}>
      <PageTitle {...pageTitle} />
      <RichContent {...richContent} />
    </Layout>
  )
}

export const query = graphql`
query LegalPageQuery {
  contentfulLegalPage {
    seo {
      pageTitle
      metaDescription
      metaKeywords
    }
    header {
      logo {
        gatsbyImageData(formats: PNG, height: 100)
      }
      logoLink
      items {
        name
        to
        showOff
      }
    }
    pageTitle{
      mainTitle {
        raw
      }
      subTitle
    }
    richContent {
      isInverted
      content {
        raw
      }
    }
    footer {
      id
      sitemap {
        name
        to
        showOff
      }
      socialMedia {
        items {
          name
          to
        }
      }
    }
  }
}
`

export default AvisoDePrivacidadPage
