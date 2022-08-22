import React from 'react'
import { HomepageItemType } from '../../../../interfaces/HomepageInterfaces'
import CategoryProduct from '../Row/CategoryProduct'
import CategoryArrows from './CategoryArrows'

const LeftProducts = ({ products }: { products: HomepageItemType[] }) => {
   return (
      <section className="left-products">

         <CategoryArrows />

         <section className="products-container">

            {
               products.map((x, i) => (
                  <CategoryProduct 
                     key={ i } 
                     salePerc={ x.onSalePercent }
                     id={ x._id }
                     name={ x.name }
                     price={ x.price }
                     image={ x.mainImage.src }
                     rating={ x.rating.summedRate }
                  />
               ))
            }

         </section>

      </section>
   )
}

export default LeftProducts