import React from 'react'
import { DeliverySectionType } from '../../../../interfaces/BasketInterfaces'
import DeliveryMethod from './DeliveryMethod'
import NewLocations from './NewLocations'
import SavedLocations from './SavedLocations'

const DeliverySection = ({ deliveryState, deliveryStateValue }: DeliverySectionType) => {
   const displayDelivery = (): JSX.Element => {
      if(deliveryStateValue.sectionDisplay === 'new') 
         return <NewLocations />
         
      else if(deliveryStateValue.sectionDisplay === 'saved') 
         return <SavedLocations deliveryState={ deliveryState } />

      return <></>
   }
   
   return (
      <section className="delivery-section cont">

         <h4 className="info">Delivery</h4>
         <h5 className='address'>Address</h5>

         <DeliveryMethod state={ deliveryState } />

         { displayDelivery() }

      </section>
   )
}

export default DeliverySection