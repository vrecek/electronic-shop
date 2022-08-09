import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchedProductType } from '../../interfaces/SearchInterfaces'
import Button from '../Common/Button'
import FigureImage from '../Common/FigureImage'
import ProductStarsContainer from '../Common/Products/ProductStarsContainer'
import ProductTags from './ProductTags'

const SearchedProduct = ({ tags, name, price, image, rate, id }: SearchedProductType) => {
   const n = useNavigate()

   return (
      <article className="product">

         <FigureImage source={ image } altTxt='product' />

         <section className="text-wrap">

            <h2 className="name">{ name }</h2>
            <ProductTags tags={ tags } />
            <h3 className="price">{ price } $</h3>
            <ProductStarsContainer rate={ rate } />
            <Button action={ () => n(`/product/${ id }`) } text='Product page' />

         </section>

      </article>
   )
}

export default SearchedProduct