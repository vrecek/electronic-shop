import React from 'react'
import { OneLocationType } from '../../../../interfaces/BasketInterfaces'

const OneLocation = ({ person, location, deliveryState }: OneLocationType) => {
   const { name, surname, phone } = person
   const { home, country, zip, city } = location

   const changeDeliveryDetails = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const children: Element[] = Array.from(t.parentElement!.children)
      children.splice(0, 1)

      for(let x of children) x.className = ''
      t.className = 'active'

      deliveryState((curr: any) => {
         curr.credentials = {
            person,
            location
         }
         
         return {...curr}
      })
   }

   return (
      <article onClick={ changeDeliveryDetails }>

         <div className="person">

            <h4>{ name }&nbsp;</h4>
            <h4>{ surname }</h4>

         </div>

         <div>

            <h4>{ phone }</h4>

         </div>

         <div className="location">

            <h4>{ country },&nbsp;</h4>
            <h4>{ city }&nbsp;</h4>
            <h4>{ zip }</h4>

         </div>

         <div className="home">

            <h4>{ home.street }&nbsp;&nbsp;</h4>
            <h4>{ home.buildingNumber } / { home.apartmentNumber }</h4>

         </div>

      </article>
   )
}

export default OneLocation