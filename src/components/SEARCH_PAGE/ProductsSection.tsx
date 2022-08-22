import React from 'react'
import { DisplayProductsType } from '../../interfaces/SearchInterfaces'
import SearchedProduct from './SearchedProduct'

const ProductsSection = ({ products, query }: DisplayProductsType) => {
   return (
      <section className="products-section">

         <h1 className="searched-info">
            Search: <span>{ query }</span>
         </h1>

         <section className="products-container">

            {
               products.map((x, i) => (
                  <SearchedProduct 
                     key={ i }
                     onSalePercent={ x.onSalePercent }
                     _id={ x._id }
                     commonCategory={ '' }
                     mainImage={ x.mainImage }
                     name={ x.name }
                     price={ x.price }
                     rating={ x.rating }
                     tags={ x.tags }
                     views={ x.views }
                  />
               ))
            }

         </section>

      </section>
   )
}

export default ProductsSection