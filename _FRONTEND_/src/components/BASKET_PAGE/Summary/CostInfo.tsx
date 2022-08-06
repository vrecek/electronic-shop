import React from 'react'
import { CostInfoType } from '../../../interfaces/BasketInterfaces'

const CostInfo = ({ children, text, cname }: CostInfoType) => {
   return (
      <div className={`total-cost ${ cname ?? '' }`}>

         <h5>{ text }: </h5>
         <span>{ children } $</span>

      </div>
   )
}

export default CostInfo