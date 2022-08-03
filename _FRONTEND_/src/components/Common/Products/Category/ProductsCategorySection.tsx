import React from 'react'
import LeftProducts from './LeftProducts'
import RightInformations from './RightInformations'
import '../../../../css/ProductsCategorySection.css'
import { PossibleCategoryType } from '../../../../interfaces/ReusableInterfaces'

const ProductsCategorySection = ({ category, products }: PossibleCategoryType) => {
   return (
      <section className="products-category-section">

         <LeftProducts products={ products } />
         <RightInformations category={ category } />

      </section>
   )
}

export default ProductsCategorySection