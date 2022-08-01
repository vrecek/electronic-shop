import React from 'react'
import '../../../css/CategorySection.css'
import CategoryAside from './NavAside/CategoryAside'
import CategoryList from './CategoryList'

const CategorySection = () => {
   return (
      <section className="category-section">

         <CategoryAside />
         <CategoryList />

      </section>
   )
}

export default CategorySection