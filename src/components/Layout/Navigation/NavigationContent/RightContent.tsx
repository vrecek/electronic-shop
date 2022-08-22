import React from 'react'
import NavIcon from './NavIcon'
import { AiOutlineUserAdd } from 'react-icons/ai'
import { BiLogIn } from 'react-icons/bi'
import { BsCart2 } from 'react-icons/bs'
import UserType from '../../../../interfaces/UserInterface'
import { UserContext } from '../../../../App'
import { Hook } from '../../../../interfaces/ReusableInterfaces'
import { MdOutlineManageAccounts } from 'react-icons/md'
import getCookieArray from '../../../../functions/getCookieArray'

const RightContent = () => {
   const user: Hook<UserType> = React.useContext(UserContext)

   return (
      <section className="right-content">

         <NavIcon clickUrl='/basket' content={ <BsCart2 /> } text='Cart' additionalNum={ getCookieArray('cart').length } />
         {
            user
            ?
               <NavIcon clickUrl='/profile' content={ <MdOutlineManageAccounts /> } text='Profile' />
            :
               <>
                  <NavIcon clickUrl='/register' content={ <AiOutlineUserAdd /> } text='Register' />
                  <NavIcon clickUrl='/log-in' content={ <BiLogIn /> } text='Log in' />
               </>
         }

      </section>
   )
}

export default RightContent