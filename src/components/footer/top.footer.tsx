// Import core libraries
import React, { FC } from 'react'
import { Link } from 'gatsby'
import * as Icon from 'react-icons/fa'

// Import utils
import { classy } from '@utils/index'

// Import interfaces
import { TopFooterPropsInterface } from './interfaces'

const TopFooter: FC<TopFooterPropsInterface> = ({ sitemap, socialMedia }) => {
  const styleClasses = {
    div: classy([
      'md:flex md:justify-between pb-5'
    ]),
    sitemap: classy([
      'md:2/4 lg:w-1/4 w-full mb-6 md:mb-0'
    ]),
    sitemapList: classy([
      'grid grid-cols-3 md:grid-cols-2 gap-2'
    ]),
    sitemapLink: classy([
      'text-white text-xs md:text-sm font-body uppercase hover:text-grey'
    ]),
    socialMedia: classy([
      'flex'
    ]),
    socialMediaLi: classy([
      'ml-4 w-1/4 md:w-auto',
    ]),
    socialMediaIcon: classy([
      'text-white text-3xl hover:text-pink'
    ]),
  }

  return (
    <div className={styleClasses.div}>
      {/* Sitemap */}
      <div className={styleClasses.sitemap}>
        <ul className={styleClasses.sitemapList}>
          {
            sitemap.map((item, index) => (
              <li key={`sitemap-item${index}`}>
                <Link className={styleClasses.sitemapLink} to={item.to}>{ item.name }</Link>
              </li>
            ))
          }
        </ul>
      </div>
      {/* Social media */}
      <div>
        <ul className={styleClasses.socialMedia}>
          {
            socialMedia.items.map((item, index) => {
              const SocialMediaIcon = Icon[item.name]
              return (<li className={styleClasses.socialMediaLi} key={`social-media-item-${index}`}><a className={styleClasses.socialMediaIcon} target={'__blank'} href={item.to}><SocialMediaIcon /></a></li>)
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default TopFooter
