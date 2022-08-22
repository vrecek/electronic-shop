import React from 'react'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import calculateSalePercent from '../../../functions/calcSalePercent'
import { BasketShipmentType, CartFetchJson } from '../../../interfaces/BasketInterfaces'
import Button from '../../Common/Button'
import SectionInfo from '../SectionInfo'
import CostInfo from './CostInfo'
import Shipment from './Shipment'

const Summary = ({ products }: { products: CartFetchJson[] }) => {
   const n: NavigateFunction = useNavigate()
   const [delivery, setDelivery] = React.useState<BasketShipmentType>({
      shipment: '',
      price: 0
   })

   const totalPrice: number = products.reduce((p, c) => p + (calculateSalePercent(c.price, c.onSalePercent) * c.inCart), 0)

   const realizeOrder = () => {
      if(!delivery.shipment || !delivery.price) return

      n('/basket/conclusion', { state: { delivery, products, totalPrice } })
   }

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

               <Button action={ realizeOrder } text='Payment' />
            </>
            :
            <h2 className='no-prods'>No products</h2>
         }

      </section>
   )
}

export default Summary