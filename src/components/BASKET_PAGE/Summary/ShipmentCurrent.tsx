import React from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
import { ShipmentCurrentType } from '../../../interfaces/BasketInterfaces'

const ShipmentCurrent = ({ deliveryType, dd }: ShipmentCurrentType) => {
   const expandMenu = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const list: HTMLElement = t.parentElement!.children[1] as HTMLElement

      dd.switchActive()

      if(dd.getActive) {
         dd.expandMenu(t, list)
         
         return
      }

      dd.shrinkMenu(.3)
   }

   return (
      <div onClick={ expandMenu } className="current">

         <h6>{ deliveryType || 'Select shipment' }</h6>
         <span><IoMdArrowDropdown /></span>

      </div>
   )
}

export default ShipmentCurrent