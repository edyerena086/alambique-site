// Import core libraries
import React, { FC } from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { LogoPropsInterface } from './interfaces'

const Logo: FC<LogoPropsInterface> = ({ logo, logoLink }) => {
  const logoImage = getImage(logo)

  const styleClasses = {
    div: classy([
      'flex items-center'
    ]),
  }

  return (
    <div
      className={styleClasses.div}
    >
      <Link to={logoLink}>
        <GatsbyImage image={logoImage} alt={logo?.description} />
      </Link>
    </div>
  )
}

export default Logo
