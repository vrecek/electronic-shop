import React from 'react'
import Button from '../../Common/Button'
import ProductStarsContainer from '../../Common/Products/ProductStarsContainer'
import ProductTags from '../../SEARCH_PAGE/ProductTags'
import { BsCartCheck } from 'react-icons/bs'
import ImagesSelect from './ImagesSelect'
import { ProductRightType } from '../../../interfaces/ProductPageInterfaces'

const RightSection = ({ images, name, company, tags, rate, price, para, id }: ProductRightType) => {
   return (
      <article className="right-product-section">

         <h2 className='company'>{ company }</h2>
         <h1 className="name">{ name }</h1>
         <ProductTags tags={ tags } />
         <ProductStarsContainer rate={ rate } />
         <h3 className="price">{ price } $</h3>
         <p>{ para }</p>
         <ImagesSelect allImages={ images } />
         <Button additional={ <BsCartCheck /> } text='Add to cart' />

      </article>
   )
}

export default RightSection