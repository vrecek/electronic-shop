import React from 'react'
import { BasketShipmentType, CartProduct } from '../../../interfaces/BasketInterfaces'
import Button from '../../Common/Button'
import SectionInfo from '../SectionInfo'
import CostInfo from './CostInfo'
import Shipment from './Shipment'

const Summary = ({ products }: { products: CartProduct[] }) => {
   const [delivery, setDelivery] = React.useState<BasketShipmentType>({
      shipment: '',
      price: 0
   })
   const totalPrice: number = products.reduce((p, c) => p + (c.price * c.quantity), 0)

   return (
      <section className="summary main">

         <SectionInfo 
            h1Text='Summary'
         />

         <CostInfo text='ITEMS' cname='info'>
            { totalPrice.toString() }
         </CostInfo>

         {
            products.length
            ?
            <>
               <Shipment 
               state={ setDelivery }
               name={ delivery.shipment }
               price={ delivery.price }
               />

               <CostInfo text='Total cost' cname='total'>
                  { (totalPrice + delivery.price).toString() }
               </CostInfo>

               <Button text='Payment' />
            </>
            :
            <h2 className='no-prods'>No products</h2>
         }

      </section>
   )
}

export default Summary