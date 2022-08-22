import React from 'react'
import { HistoryProductInfo } from '../../../interfaces/ProfileInterfaces'
import FigureImage from '../../Common/FigureImage'

const ProductInfo = ({ mainImage, quantity, name }: HistoryProductInfo) => {
   return (
      <div className="wrap">

         <FigureImage source={ mainImage.src } altTxt='product' />
         
         <div>

            <h3>{ name }</h3>
            <h3 className='total'>Total: { quantity }</h3>

         </div>

      </div>
   )
}

export default ProductInfo