import React from 'react'
import { UserContext } from '../../../../App'
import '../../../../css/SavedLocations.css'
import { DeliveryStateHelp } from '../../../../interfaces/BasketInterfaces'
import { Hook } from '../../../../interfaces/ReusableInterfaces'
import UserType from '../../../../interfaces/UserInterface'
import AvailableLocations from './AvailableLocations'

const SavedLocations = ({ deliveryState }: DeliveryStateHelp) => {
   const user: Hook<UserType> = React.useContext(UserContext)

   const displayDelivery = (): JSX.Element => {
      if(!user) return <h2 className="no-saved">Log in to use saved locations</h2>
      else if(!user.savedLocations.length) return <h2 className="no-saved">No saved locations</h2>

      return <AvailableLocations deliveryState={ deliveryState } locations={ user.savedLocations } />
   }

   return (
      <section className="saved-locations">

         { displayDelivery() }

      </section>
   )
}

export default SavedLocations