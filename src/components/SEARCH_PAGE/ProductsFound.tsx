import React from 'react'
import { FoundProductsType } from '../../interfaces/SearchInterfaces'
import AsideFilters from './AsideFilters'
import ProductsSection from './ProductsSection'

const ProductsFound = ({ products, query, state, original }: FoundProductsType) => {
   return (
      <section className="products">

         <AsideFilters original={ original } state={ state } />
         <ProductsSection products={ products } query={ query } />

      </section>
   )
}

export default ProductsFound