import React from 'react'
import { SelectSectionType } from '../../interfaces/ProductPageInterfaces'

const SelectSection = ({ func }: SelectSectionType) => {
   return (
      <ul className='select-current-section'>
         
         <li onClick={ (e) => func(e, 'details') } className='active'>Details</li>
         <li onClick={ (e) => func(e, 'opinions') }>Opinions</li>

      </ul>
   )
}

export default SelectSection