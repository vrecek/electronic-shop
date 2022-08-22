import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { UserContext } from '../../App'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { LocationState } from '../../interfaces/ProfileInterfaces'
import { Hook } from '../../interfaces/ReusableInterfaces'
import UserType, { UserLocations } from '../../interfaces/UserInterface'
import LocationWrap from './LocationWrap'

const ProfileLocation = ({ locations, setState }: LocationState<UserLocations>) => {
   const { name, phone, surname } = locations.person
   const { city, country, home, zip} = locations.location
   const user: Hook<UserType> = React.useContext(UserContext)

   const deleteLocation = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const container: HTMLElement = t.parentElement!

      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleCircle({
         position: 'containerHeight',
         backgroundClr: 'rgba(255, 255, 255, .8)',
         height: '55%'
      })
      l.append(container, true)

      try {
         await Fetches.mix(`${ process.env.REACT_APP_API_USER_DELETE_LOCATION }/${ user?._id }/${ locations._id }`, 'DELETE')
         setState((curr: any) => {
            return curr.filter((x: UserLocations) => x._id !== locations._id)
         })

      }catch(err) { l.remove() }
   }

   return (
      <article className="location">

         <span onClick={ deleteLocation } className="del-icon"><FaTimes /></span>

         <LocationWrap 
            header='Person'
            details={ [name, `${ surname }\xa0-`, phone] }
         />
         
         <LocationWrap 
            header='Location'
            details={ [`${ country },`, city, zip] }
         />

         <LocationWrap 
            header='House'
            details={ [home.street, `${ home.buildingNumber }\xa0/`, home.apartmentNumber] }
         />

      </article>
   )
}

export default ProfileLocation