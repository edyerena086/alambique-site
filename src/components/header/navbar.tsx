// Import core libraries
import React, { FC, Fragment, useState } from 'react'
import { Link } from 'gatsby'
import { TfiMenu, TfiClose } from "react-icons/tfi"

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { NavbarPropsInterface } from './interfaces'

const Navbar: FC<NavbarPropsInterface> = ({ items }) => {
  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const styleClasses = {
    button: classy([
      'absolute text-3xl right-8 top-6 cursor-pointer md:hidden'
    ]),
    nav: classy([
      'md:flex items-center md:static',
      'md:pb-0 pb-12',
      'absolute md:static',
      'bg-white md:z-auto z-[-1] letf-0 w-full md:w-auto md:pl-0 pl-9',
      'shadow-lg md:shadow-none',
      'transition-all duration-500 ease-in'
    ]),
    li: classy([
      'md:ml-8',
      'md:my-0 my-6',
      'font-title font-bold'
    ]),
    link: classy([
      'hover:text-pink text-xs lg:text-base'
    ]),
  }

  return (
    <Fragment>
      <div className={styleClasses.button} onClick={() => setIsOpenMenu(!isOpenMenu)}>
        { !isOpenMenu ?<TfiMenu /> : <TfiClose /> }
      </div>
      {/* Navbar */}
      <ul className={`${styleClasses.nav} ${isOpenMenu ? 'top-auto opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
        {
          items.map((item, index) => (
            <li key={`navbar-item-${index}`} className={styleClasses.li}>
              <Link className={styleClasses.link} to={item.to}>{ item.name }</Link>
            </li>
          ))
        }
      </ul>
    </Fragment>
  )
}

export default Navbar
