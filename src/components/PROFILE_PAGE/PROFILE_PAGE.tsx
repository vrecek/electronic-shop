import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Profile.css'
import EntryInformations from './EntryInformations'
import Credentials from './Credentials'
import Management from './Management'
import { UserContext } from '../../App'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import UserType, { UserLocations } from '../../interfaces/UserInterface'
import BlankPage from '../Common/BlankPage'
import { Hook } from '../../interfaces/ReusableInterfaces'
import SavedLocations from './SavedLocations'
import PurchaseHistory from './Purchases/PurchaseHistory'

const PROFILE_PAGE = () => {
   const user: Hook<UserType> = React.useContext(UserContext)
   const n: NavigateFunction = useNavigate()

   React.useEffect(() => {
      if(!user) n('/', { replace: true })
   }, [])

   const [locations, setLocations] = React.useState<UserLocations[]>(user?.savedLocations ?? [])

   if(user)
   return (
      <LayoutWrap>

         <main className="profile-page">

            <EntryInformations nick={ user.username } created={ user.created } moneySpent={ user.totalSpent } />
            <Credentials Name={ user.username} Mail={ user.mail } />
            <SavedLocations locations={ locations } setState={ setLocations } />
            <PurchaseHistory history={ user.purchaseHistory } />
            <Management userId={ user._id } />

         </main>
         
      </LayoutWrap>
   )

   return (<BlankPage />)
}

export default PROFILE_PAGE