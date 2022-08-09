import React from 'react'
import Button from '../../Common/Button'
import ProductStarsContainer from '../../Common/Products/ProductStarsContainer'
import ProductTags from '../../SEARCH_PAGE/ProductTags'
import { BsCartCheck } from 'react-icons/bs'

const RightSection = () => {
   return (
      <article className="right-product-section">

         <h2 className='company'>Loremispum</h2>
         <h1 className="name">Lorem ipsum dolor sitamet</h1>
         <ProductTags tags={ ['Loremsi', 'Dolorsit', 'Amet'] } />
         <ProductStarsContainer rate={ 4 } />
         <h3 className="price">999 $</h3>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae laborum quod nam. Maxime, quas itaque accusamus odio vel facilis deleniti optio est quidem quam enim ex sint molestiae! Est?</p>
         <Button additional={ <BsCartCheck /> } text='Add to cart' />

      </article>
   )
}

export default RightSection