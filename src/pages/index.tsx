// Import core libraries
import React, { FC, Fragment } from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'

// Import components
import { Layout, ImageColumn, ContentColumn, HomeHeroBanner } from '@components/index'

const IndexPage: FC<PageProps> = ({ data }) => {
  const { footer, seo, header, imageColumn, conciencia, products, homeHeroBanner } = data?.contentfulHomePage

  return (
    <Fragment>
      <Layout seo={seo} header={header} footer={footer}>
        <HomeHeroBanner { ...homeHeroBanner } />
        <ContentColumn { ...products } />
        <ImageColumn {...imageColumn} />
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
    homeHeroBanner {
      background {
        gatsbyImageData(formats: PNG, height: 600)
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
          gatsbyImageData(formats: PNG, height: 200)
        }
      }
    }
    imageColumn {
      image {
        gatsbyImageData(formats: PNG, height: 350)
      }
      text {
        raw
      }
      sectionTitle {
        raw
      }
    }
    conciencia {
      columns {
        isProduct
        image {
          gatsbyImageData(formats: PNG, height: 160)
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

export default IndexPage
