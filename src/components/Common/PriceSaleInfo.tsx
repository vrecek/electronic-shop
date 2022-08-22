import React from 'react'
import calculateSalePercent from '../../functions/calcSalePercent'
import { PriceDiscount } from '../../interfaces/ReusableInterfaces'

const PriceSaleInfo = ({ percent, original }: PriceDiscount) => {
   const fixedPrice = calculateSalePercent(original, percent)
   
   return (
      <h5 className={`price ${ percent ? 'sale' : '' }`}>

         <span className="original">{ original }$</span> 
         { percent ? <span className='fixed'>{ fixedPrice }$</span> : null }
         
      </h5>
   )
}

export default PriceSaleInfo