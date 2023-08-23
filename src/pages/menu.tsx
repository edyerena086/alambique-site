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
      ...seoFragment
    }
    header {
      ...headerFragment
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
        description
      }
    }
    footer {
      ...footerFragment
    }
  }
}
`

export default MenuPage
