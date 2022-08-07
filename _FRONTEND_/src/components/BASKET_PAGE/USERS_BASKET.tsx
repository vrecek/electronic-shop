import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import ProductsSection from './Products/ProductsSection'
import Summary from './Summary/Summary'
import '../../css/Basket.css'
import { CartProduct } from '../../interfaces/BasketInterfaces'

const USERS_BASKET = () => {
   const prods: CartProduct[] = [
      {
         id: 'fuifashj8793hnu',
         image: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080P-3D-Images-For-Desktop.jpg',
         name: 'Lorem ipsum dolor sitamet',
         price: 999,
         quantity: 1
      },

      {
         id: 'fuifaasdd',
         image: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/1080P-3D-Images-For-Desktop.jpg',
         name: 'Lorem ipsum dolor sitamet',
         price: 999,
         quantity: 1
      }
   ]
   const [products, setProducts] = React.useState<CartProduct[]>(prods)
   

   return (
      <LayoutWrap onlyStrap={ true }>

         <main className="user-basket">
               
            <ProductsSection products={ products } state={ setProducts } />
            <Summary products={ products } />

         </main>

      </LayoutWrap>
   )
}

export default USERS_BASKET