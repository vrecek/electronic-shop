import React from 'react'
import '../../../../../css/HiddenMenu.css'
import { Hook, Ref } from '../../../../../interfaces/ReusableInterfaces'
import { NavigationMenuLinkType } from '../../../../../interfaces/NavigationInterfaces'
import { useNavigate } from 'react-router-dom'
import UserType from '../../../../../interfaces/UserInterface'
import { UserContext } from '../../../../../App'
import Fetches from '../../../../../functions/Fetches'
import { LoadingCss } from '../../../../../functions/Loading'
import MenuSearch from './MenuSearch'

const HiddenMenu = ({ menuRef }: { menuRef: Ref<HTMLElement>}) => {
   const user: Hook<UserType> = React.useContext(UserContext)
   const n = useNavigate()

   const links: NavigationMenuLinkType[] = [
      {
         name: 'Log in',
         url: '/log-in'
      },

      {
         name: 'Register',
         url: '/register'
      },

      {
         name: '',
         url: '',
         addMargin: true
      },

      {
         name: 'Homepage',
         url: '/'
      },

      {
         name: '',
         url: '',
         addMargin: true
      },

      {
         name: 'Terms & Conditions',
         url: '/terms-and-conditions'
      },

      {
         name: 'Contact',
         url: '/contact'
      },
   ]

   if(user) {
      links.splice(0, 2)
      links.unshift(
         {
            name: 'Profile',
            url: '/profile'
         },

         {
            name: 'Logout',
            url: '/'
         }
      )

      if(user.role === 'admin') {
         links.unshift(
            {
               name: 'Admin Panel',
               url: process.env.REACT_APP_ADMIN_URL!
            }
         )
      }
   }

   const logoutUser = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      const l = new LoadingCss('')
      l.defaultStyleCircle({
         position: 'containerWidth'
      })
      l.append(t.parentElement!.parentElement!)
      
      try {
         await Fetches.mix(process.env.REACT_APP_API_USER_LOGOUT!, 'POST')
         window.location.pathname = '/'

      }catch(err) {
         l.remove()
      }
   }

   return (
      <aside ref={ menuRef } className="menu">

         <h6 className="is-logged">{ user ? `Logged as: ${ user.username }` : 'You are not logged in' }</h6>

         <MenuSearch />

         <ul>

            {
               links.map((x, i) => (
                  x.addMargin
                  ?
                     <li className='margin' key={ i }></li>
                  :
                     <li
                     key={ i }
                     onClick={ 
                        user && x.name === 'Logout' ? logoutUser : () => n(x.url) 
                     }
                     >
                        { x.name }
                     </li>
               ))
            }

         </ul>

      </aside>
   )
}

export default HiddenMenu