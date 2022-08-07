import React from 'react'
import DropDown from '../../../functions/DropdownClass'
import { ShipmentType } from '../../../interfaces/BasketInterfaces'
import CostInfo from './CostInfo'
import ShipmentCurrent from './ShipmentCurrent'
import ShipmentList from './ShipmentList'

const Shipment = ({ state, name, price }: ShipmentType) => {
   const dd: DropDown = new DropDown()

   return (
      <section className="delivery-dropdown">

         <CostInfo text='DELIVERY' cname='info'>
            { price.toString()}
         </CostInfo>

         <section className="wrap">

            <ShipmentCurrent dd={ dd } deliveryType={ name } />

            <ShipmentList dd={ dd } shipState={ state } />

         </section>

      </section>
   )
}

export default Shipment