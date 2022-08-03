import React from 'react'
import { ProductNamePriceType } from '../../../interfaces/ReusableInterfaces'

const ProductNamePrice = ({ name, price }: ProductNamePriceType) => {
   return (
      <>
         <h5 className="name">{ name }</h5>
         <h5 className="price">{ price }$</h5>
      </>
   )
}

export default ProductNamePrice