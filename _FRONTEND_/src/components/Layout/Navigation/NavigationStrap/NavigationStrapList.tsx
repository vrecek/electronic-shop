import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationLinkType } from '../../../../interfaces/NavigationInterfaces'

const NavigationStrapList = () => {
   const n = useNavigate()

   const links: NavigationLinkType[] = [
      {
         url: '/',
         name: 'Homepage'
      },

      {
         url: '/terms-and-conditions',
         name: 'Terms & Conditions'
      },

      {
         url: '/contact',
         name: 'Contact'
      }
   ]

   return (
      <ul>

         {
            links.map((x, i) => (
               <li 
               onClick={ () => n(x.url) } 
               key={ i }
               >
                  { x.name }
               </li>
            ))
         }

      </ul>
   )
}

export default NavigationStrapList