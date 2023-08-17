// Import core libraries
import React, { FC } from 'react'
import { graphql } from 'gatsby'
import type { PageProps } from 'gatsby'

// Import components
import { Layout, PageTitle, ProductGrid } from '@components/index'

const MenuPage: FC<PageProps> = ({ data }) => {
  const { seo, footer, header, pageTitle, products } = data?.contentfulMenuPage

  return (
    <Layout seo={seo} footer={footer} header={header}>
      <PageTitle { ...pageTitle } />
      <ProductGrid products={products} />
    </Layout>
  )
}

export const query = graphql`
query MenuPageQuery {
  contentfulMenuPage {
    seo {
      pageTitle
      metaDescription
      metaKeywords
    }
    header {
      logo {
        gatsbyImageData(height: 100)
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
    products {
      isFood
      title
      name {
        raw
      }
      description {
        raw
      }
      image {
        gatsbyImageData(height: 200)
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

export default MenuPage
