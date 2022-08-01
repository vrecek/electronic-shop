import React from 'react'
import { NavIconType } from '../../../../interfaces/NavigationInterfaces'

const NavIcon = ({ content, text, cname, additionalNum }: NavIconType) => {
   return (
      <section className={`nav-icon ${ cname ?? '' }`}>

         { additionalNum && <h6>{ additionalNum }</h6> }
         { content }
         <h5 className='text-label'>{ text }</h5>

      </section>
   )
}

export default NavIcon