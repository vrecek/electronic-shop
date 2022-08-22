import React from 'react'
import { ProductNamePriceType } from '../../../interfaces/ReusableInterfaces'
import PriceSaleInfo from '../PriceSaleInfo';

const ProductNamePrice = ({ name, price, salePercent }: ProductNamePriceType) => {
   return (
      <>
         <h5 className="name">{ name }</h5>
         <PriceSaleInfo original={ price } percent={ salePercent } />
      </>
   )
}

export default ProductNamePrice