import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavIconType } from '../../../../interfaces/NavigationInterfaces'

const NavIcon = ({ content, text, cname, additionalNum, clickUrl }: NavIconType) => {
   const n = useNavigate()

   return (
      <section onClick={ () => n(clickUrl) } className={`nav-icon ${ cname ?? '' }`}>

         { Number.isInteger(additionalNum) && <h6>{ additionalNum }</h6> }
         <span>{ content }</span>
         <h5 className='text-label'>{ text }</h5>

      </section>
   )
}

export default NavIcon