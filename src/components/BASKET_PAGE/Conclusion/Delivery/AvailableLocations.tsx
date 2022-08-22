import React from 'react'
import { AvailableLocationsType } from '../../../../interfaces/BasketInterfaces'
import OneLocation from './OneLocation'

const AvailableLocations = ({ locations, deliveryState }: AvailableLocationsType) => {
   return (
      <section className='available-locations'>

         <h5 className='address'>Saved ({ locations.length })</h5>

         {
            locations.map((x, i) => (
               <OneLocation
                  key={ i }
                  deliveryState={ deliveryState }
                  person={ x.person }
                  location={ x.location }
               />
            ))
         }

      </section>
   )
}

export default AvailableLocations