import React from 'react'
import { LocationWrapType } from '../../interfaces/ProfileInterfaces'

const LocationWrap = ({ header, details }: LocationWrapType) => {
   return (
      <div className='div-wrap'>

         <h3>{ header }:</h3>
         <div>
            {
               details.map((x, i) => (
                  <h4 key={ i }>{ x }</h4>
               ))
            }
         </div>

      </div>
   )
}

export default LocationWrap