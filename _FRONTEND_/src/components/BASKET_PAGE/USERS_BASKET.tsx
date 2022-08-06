import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import ProductsSection from './Products/ProductsSection'
import Summary from './Summary/Summary'
import '../../css/Basket.css'

const USERS_BASKET = () => {
   return (
      <LayoutWrap onlyStrap={ true }>

         <main className="user-basket">
               
            <ProductsSection />
            <Summary />

         </main>

      </LayoutWrap>
   )
}

export default USERS_BASKET