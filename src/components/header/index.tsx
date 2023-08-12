// Import core libraries
import React, { FC } from 'react'

// Import utils
import { classy } from '@utils/index'

// Import sub-components
import Logo from './logo'
import Navbar from './navbar'

// Import interfaces
import { HeaderPropsInterface } from './interfaces'

const Header: FC<HeaderPropsInterface> = ({ items, logo, logoLink }) => {
  const styleClasses = {
    header: classy([
      'sticky top-0 z-[20] bg-white',
      'py-3 px-0 md:px-2 lg:px-0'
    ]),
    nav: classy([
      'md:flex items-center justify-between mx-auto container'
    ]),
  }

  return (
    <header className={styleClasses.header}>
      <nav className={styleClasses.nav}>
        <Logo logoLink={logoLink} logo={logo} />
        <Navbar items={items} />
      </nav>
    </header>
  )
}

export default Header
