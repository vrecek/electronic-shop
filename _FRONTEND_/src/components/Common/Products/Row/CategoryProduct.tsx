import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomepageProductType } from '../../../../interfaces/ReusableInterfaces'
import Button from '../../Button'
import FigureImage from '../../FigureImage'
import ProductNamePrice from '../ProductNamePrice'
import ProductStarsContainer from '../ProductStarsContainer'

const CategoryProduct = ({ name, image, id, rating, price }: HomepageProductType) => {
   const n = useNavigate()
   
   return (
      <article>

         <FigureImage source={ image } altTxt='product' />

         <div className="wrap">

            <ProductStarsContainer rate={ rating} />

            <ProductNamePrice name={ name } price={ price } />

            <Button action={ () => n(`/product/${ id }`) } text='Visit product' />

         </div>

      </article>
   )
}

export default CategoryProduct