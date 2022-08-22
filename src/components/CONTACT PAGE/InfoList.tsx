import React from 'react'
import { ContactInfoListType } from '../../interfaces/ContactInterfaces'

const InfoList = ({ icon, children }: ContactInfoListType) => {
   return (
      <li>

         <span className='icon'>{ icon }</span>
         { children }

      </li>
   )
}

export default InfoList