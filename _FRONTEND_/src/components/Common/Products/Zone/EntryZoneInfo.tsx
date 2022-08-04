import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { PossibleHomepageCategory } from '../../../../interfaces/ReusableInterfaces'

const EntryZoneInfo = ({ category }: { category: PossibleHomepageCategory }) => {
   const capitalized: string = category[0].toUpperCase() + category.slice(1)

   return (
      <h1 className='entry-info'>
         <span className='cat-txt'>{ capitalized }</span>
         zone
         <span className="icon"> <FiShoppingCart /> </span>
      </h1>
   )
}

export default EntryZoneInfo