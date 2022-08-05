import React from 'react'
import '../../../../../css/HiddenMenu.css'
import { Ref } from '../../../../../interfaces/ReusableInterfaces'
import { NavigationMenuLinkType } from '../../../../../interfaces/NavigationInterfaces'
import { useNavigate } from 'react-router-dom'

const HiddenMenu = ({ menuRef }: { menuRef: Ref<HTMLElement>}) => {
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

   return (
      <aside ref={ menuRef } className="menu">

         <h6 className="is-logged">You are not logged in</h6>

         <ul>

            {
               links.map((x, i) => (
                  x.addMargin
                  ?
                     <li className='margin' key={ i }></li>
                  :
                     <li
                     key={ i }
                     onClick={ () => n(x.url) }
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