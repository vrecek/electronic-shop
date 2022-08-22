import React from 'react'
import { BasketShipmentType, PaymentState, ShipmentListType } from '../../../interfaces/BasketInterfaces'
import { State } from '../../../interfaces/ReusableInterfaces'

const ShipmentList = ({ shipState, dd }: ShipmentListType) => {
   const shipmentTypes: BasketShipmentType[] = [
      {
         shipment: 'On delivery',
         price: 4
      },
      
      {
         shipment: 'Post office',
         price: 2
      },
      
      {
         shipment: 'Parcel locker',
         price: 1
      }, 

      {
         shipment: 'Courier 1',
         price: 3
      },

      {
         shipment: 'Courier 2',
         price: 3
      },
   ]

   const changeShipment = (e: React.MouseEvent): void => {
      const t = e.target as HTMLElement

      const price: number = parseInt(t.getAttribute('data-price') ?? '0')
      const type: string = t.getAttribute('data-type') ?? ''

      dd.switchActive()
      dd.shrinkMenu(.3)
      
      shipState({ price, shipment: type as PaymentState })
   }

   return (
      <ul className="select">

         {
            shipmentTypes.map((x, i) => (
               <li 
               onClick={ changeShipment }
               data-price={ x.price } 
               data-type={ x.shipment } 
               key={ i }>

                  <h6>{ x.shipment }</h6>
                  <h6>{ x.price } $</h6>

               </li>
            ))
         }

      </ul>
   )
}

export default ShipmentList