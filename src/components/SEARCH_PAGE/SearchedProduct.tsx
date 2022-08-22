import React from 'react'
import { useNavigate } from 'react-router-dom'
import { SearchedProductType } from '../../interfaces/SearchInterfaces'
import Button from '../Common/Button'
import FigureImage from '../Common/FigureImage'
import PriceSaleInfo from '../Common/PriceSaleInfo'
import ProductStarsContainer from '../Common/Products/ProductStarsContainer'
import ProductTags from './ProductTags'

const SearchedProduct = ({ tags, name, price, mainImage, rating, _id, onSalePercent }: SearchedProductType) => {
   const n = useNavigate()

   return (
      <article className="product">

         <FigureImage source={ mainImage.src } altTxt='product' />

         <section className="text-wrap">

            <div>
               <h2 className="name">{ name }</h2>
               <ProductTags tags={ tags } />
               <ProductStarsContainer rate={ rating.summedRate } />
            </div>

            <PriceSaleInfo original={ price } percent={ onSalePercent } />
            
            <Button action={ () => n(`/product/${ _id }`) } text='Product page' />

         </section>

      </article>
   )
}

export default SearchedProduct