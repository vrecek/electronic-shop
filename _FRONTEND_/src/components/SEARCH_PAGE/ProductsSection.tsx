import React from 'react'
import { SearchedProductType } from '../../interfaces/SearchInterfaces'
import SearchedProduct from './SearchedProduct'

const ProductsSection = ({ products }: { products: SearchedProductType[] }) => {
   return (
      <section className="products-section">

         <h1 className="searched-info">
            Search: <span>lorem ipsum</span>
         </h1>

         <section className="products-container">

            {
               products.map((x, i) => (
                  <SearchedProduct 
                     key={ i }
                     id={ x.id }
                     image={ x.image }
                     name={ x.name }
                     price={ x.price }
                     rate={ x.rate }
                     tags={ x.tags }
                  />
               ))
            }

         </section>

      </section>
   )
}

export default ProductsSection