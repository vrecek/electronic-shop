import React from 'react'
import FigureImage from '../../FigureImage'
import ProductStarsContainer from '../ProductStarsContainer'
import ProductNamePrice from '../ProductNamePrice'
import { useNavigate } from 'react-router-dom'
import { HomepageProductType } from '../../../../interfaces/ReusableInterfaces'

const RowProduct = ({ rating, name, id, image, price, salePerc }: HomepageProductType) => {
   const n = useNavigate()
   
   return (
      <article onClick={ () => n(`/product/${ id }`)} className="row-product">

         <FigureImage source={ image } altTxt='product' />

         <div className="wrap">

            <ProductStarsContainer rate={ rating } />

            <ProductNamePrice 
               name={ name }
               salePercent={ salePerc }
               price={ price }
            />

         </div>

      </article>
   )
}

export default RowProduct