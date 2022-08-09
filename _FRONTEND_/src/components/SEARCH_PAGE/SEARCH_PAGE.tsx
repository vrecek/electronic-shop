import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/SearchPage.css'
import NoProducts from './NoProducts'
import ProductsFound from './ProductsFound'

const SEARCH_PAGE = () => {
   // b - bar
   // t - type (work, gaming, household)
   // c - category (phones, games, equipment, components, small_devices)
   // ct - category type (wszystko w aside; wireless mouse, samsung, iphone, membrane keyboards)

   return (
      <LayoutWrap>

         <main className="search-page">

            {/* <NoProducts /> */}
            <ProductsFound />

         </main>

      </LayoutWrap>
   )
}

export default SEARCH_PAGE