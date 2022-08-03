import React from 'react'
import { HomepageProductType } from '../../../../interfaces/ReusableInterfaces'
import CategoryProduct from '../Row/CategoryProduct'
import CategoryArrows from './CategoryArrows'

const LeftProducts = ({ products }: { products: HomepageProductType[] }) => {
   return (
      <section className="left-products">

         <CategoryArrows />

         <section className="products-container">

            {
               products.map((x, i) => (
                  <CategoryProduct 
                     key={ i } 
                     id={ x.id }
                     name={ x.name }
                     price={ x.price }
                     image={ x.image }
                     rating={ x.rating }
                  />
               ))
            }

         </section>

      </section>
   )
}

export default LeftProducts