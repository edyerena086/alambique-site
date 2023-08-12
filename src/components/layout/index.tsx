// Import core libraries
import React, { FC, Fragment } from 'react'

// Import components
import { Footer, Header, Seo } from '@components/index'

// Import interfaces
import { LayoutPropsInterface } from './interfaces'

const Layout: FC<LayoutPropsInterface> = ({ children, footer, header, seo }) => {
  return (
    <Fragment>
      <Seo { ...seo } />
      <Header {...header} />
      {
        children
      }
      <Footer {...footer} />
    </Fragment>
  )
}

export default Layout
