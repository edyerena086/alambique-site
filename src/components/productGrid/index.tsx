// Import core libraries
import React, { FC, useState, useEffect } from 'react'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

// Import components
import { Section } from '@components/index'

// Import Utils
import { classy } from '@utils/index'

// Import interfaces
import { ProductGridPropsInterface, productCountStateType, productPropsType } from './interfaces'

const ProductGrid: FC<ProductGridPropsInterface> = ({ products }) => {
  const productCountState: productCountStateType = { drinks: 0, food: 0}
  const productsPropArray: productPropsType[] = []
  const [productsCount, setProductsCount] = useState(productCountState)
  const [productsToRender, setProductsToRender] = useState(productsPropArray)
  const [filterBy, setFilterBy] = useState(0)
  const [manyProducts, setManyProducts] = useState(12)

  useEffect(() => {
    let foodCount: number = 0
    let drinkCount: number = 0
    let productsArray: productPropsType[] = []
    if (filterBy === 0) {
      products.map((item, index) => {
        item.isFood ? foodCount++ : drinkCount++
  
        if (index < manyProducts) {
          productsArray.push(item)
        }
      })
    } else {
      const isTrue = filterBy === 1 ? true : false
      let counter = 0
      products.map(item => {
        if (item.isFood === isTrue && counter < manyProducts) {
          counter++
          productsArray.push(item)
        }
      })
    }

    filterBy === 0 ? setProductsCount({ drinks: drinkCount, food: foodCount }) : ''
    setProductsToRender(productsArray)
  }, [filterBy, manyProducts])

  const styleClasses = {
    wrapper: classy([
      'grid grid-cols-1 md:grid-cols-4 gap-4'
    ]),
    filtersWrapper: classy([
      'border-b-2 border-b-grey pb-5 sticky top-[150px]'
    ]),
    gridWrapper: classy([
      'md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3'
    ]),
    productWrapper: classy([
      'bg-white p-3 rounded-lg shadow-md'
    ]),
    h3: classy([
      'font-title text-xl text-center pb-4 font-black'
    ]),
    imageWrapper: classy([
      'flex w-full justify-center mb-4'
    ]),
    moreButtonWrapper: classy([
      'col-span-2 md:col-span-3 justify-center flex mt-8'
    ]),
    moreButton: classy([
      'font-body uppercase bg-greyDark hover:bg-pink px-10 text-center text-white py-4 rounded-full'
    ]),
    h4: classy([
      'font-title text-lg font-extrabold'
    ]),
    filterButton: classy([
      'block w-[50%] md:w-full lg:w-[55%] flex justify-between font-body font-bold text-base mt-2'
    ]),
    filterButtonChip: classy([
      'bg-pink w-12 rounded-full text-white'
    ]),
  }
  return (
    <Section type='inverted'>
      <div className={styleClasses.wrapper}>
        {/* Filters */}
        <div>
          <section className={styleClasses.filtersWrapper}>
            <h4 className={styleClasses.h4}>Filtros</h4>
            <button onClick={() => setFilterBy(filterBy === 2 ? 0 : 2)} className={styleClasses.filterButton}>
              <span className={`${filterBy === 2 ? 'text-pink' : 'text-black'}`}>Bebidas</span> <span className={styleClasses.filterButtonChip}>{productsCount.drinks}</span>
            </button>
            <button onClick={() => setFilterBy(filterBy === 1 ? 0 : 1)} className={styleClasses.filterButton}>
              <span className={`${filterBy === 1 ? 'text-pink' : 'text-black'}`}>Alimentos</span> <span className={styleClasses.filterButtonChip}>{productsCount.food}</span>
            </button>
          </section>
        </div>
        {/* Grid */}
        <div className={styleClasses.gridWrapper}>
          {
            productsToRender.map((item, index) => {
              const productImage = getImage(item.image)
              return (
                <div key={`product-grid-item${index}`}>
                  <div className={styleClasses.productWrapper}>
                    <div className={styleClasses.imageWrapper}>
                      <GatsbyImage image={productImage} alt={item.title} />
                    </div>
                    <h3 className={styleClasses.h3}>
                      {
                        item.name?.raw && renderRichText(item.name)
                      }
                    </h3>
                    {
                      item.description?.raw && renderRichText(item.description)
                    }
                  </div>
                </div>
              )
            })
          }
          {/* Button span */}
          <div className={styleClasses.moreButtonWrapper}>
            <button onClick={() => setManyProducts(manyProducts + 6)} className={styleClasses.moreButton}>Ver más productos</button>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default ProductGrid
