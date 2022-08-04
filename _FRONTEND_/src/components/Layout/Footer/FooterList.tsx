import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationLinkType } from '../../../interfaces/NavigationInterfaces'

const FooterList = ({ list }: { list: NavigationLinkType[] }) => {
   const n = useNavigate()

   return (
      <ul>

         {
            list.map((x, i) => (
               <li onClick={ () => n(x.url) } key={ i }>
                  { x.name }
               </li>
            ))
         }

      </ul>
   )
}

export default FooterList