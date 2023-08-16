// Import core libraries
import React, { FC } from 'react'
import { Link } from 'gatsby'

// Import utils
import { classy } from '@utils/index'

const BottomFooter: FC = () => {
  const styleClasses = {
    div: classy([
      'md:flex md:items-center md:justify-between',
      'border-t-2 border-t-grey',
      'pt-5'
    ]),
    paragraph: classy([
      'text-white text-xs md:text-sm font-body uppercase text-center md:text-left mb-3 md:mb-0'
    ]),
    link: classy([
      'mt-2.5',
      'hover:text-pink block'
    ]),
  }

  return (
    <div className={styleClasses.div}>
      <p className={styleClasses.paragraph}>
        Todos los derechos reservados Lamabique Café { new Date().getFullYear() }
      </p>

      <Link to={'/aviso-de-privacidad'} className={`${styleClasses.paragraph} ${styleClasses.link}`}>Aviso de Privacidad</Link>
    </div>
  )
}

export default BottomFooter
