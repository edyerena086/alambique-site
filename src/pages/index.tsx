// Import core libraries
import React, { FC, Fragment } from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'

// Import components
import { Layout, ImageColumn, ContentColumn, HomeHeroBanner, Maps } from '@components/index'

const IndexPage: FC<PageProps> = ({ data }) => {
  const { footer, seo, header, imageColumn, conciencia, products, homeHeroBanner, location } = data?.contentfulHomePage

  return (
    <Fragment>
      <Layout seo={seo} header={header} footer={footer}>
        <HomeHeroBanner { ...homeHeroBanner } />
        <ContentColumn { ...products } />
        <ImageColumn {...imageColumn} />
        <Maps {...location} />
        <ContentColumn { ...conciencia } />
      </Layout>
    </Fragment>
  )
}

export const query = graphql`
query HomePageQuery {
  contentfulHomePage {
    title
    seo {
      ...seoFragment
    }
    header {
      ...headerFragment
    }
    homeHeroBanner {
      background {
        description
        gatsbyImageData(height: 600)
      }
      pageTitle {
        raw
      }
      description {
        raw
      }
    }
    products {
      sectionTitle {
        raw
      }
      isInverted
      subTitle
      columns {
        isProduct
        columnName {
          raw
        }
        description {
          raw
        }
        image {
          description
          gatsbyImageData(height: 200)
        }
      }
    }
    imageColumn {
      image {
        description
        gatsbyImageData(height: 350)
      }
      text {
        raw
      }
      sectionTitle {
        raw
      }
    }
    location {
      sectionTitle {
        raw
      }
      center {
        lat
        lon
      }
      store {
        lat
        lon
      }
    }
    conciencia {
      isInverted
      columns {
        isProduct
        image {
          description
          gatsbyImageData(height: 160)
        }
        columnName {
          raw
        }
        description {
          raw
        }
      }
      sectionTitle {
        raw
      }
    }
    footer {
      ...footerFragment
    }
  }
}
`

export default IndexPage
