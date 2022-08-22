import React from 'react'
import { DeliveryHook, DeliveryState } from '../../../../interfaces/BasketInterfaces'
import { State } from '../../../../interfaces/ReusableInterfaces'

const DeliveryMethod = ({ state }: { state: State<DeliveryHook>}) => {
   const changeStateSection = (val: DeliveryState): void => {
      state({
         sectionDisplay: val,
         credentials: null
      })
   }

   return (
      <section className="delivery-method">

         <div>

            <label htmlFor="existing">Saved locations</label>
            <input onChange={ () => changeStateSection('saved') } name='delivery' id='existing' type="radio" />

         </div>

         <div>

            <label htmlFor="new">New location</label>
            <input onChange={ () => changeStateSection('new') } name='delivery' id='new' type="radio" />

         </div>

      </section>
   )
}

export default DeliveryMethod