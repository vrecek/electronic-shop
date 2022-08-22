import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const ProductStarsContainer = ({ rate }: { rate: number }) => {
   return (
      <div className="product-stars-container">
         <h6>{ rate }</h6>
         {
            [...Array(5)].map((x, i) => (
               <span key={ i } className={ i < rate ? 'active' : '' }>
                  <AiFillStar />
               </span>
            ))
         }

      </div>
   )
}

export default ProductStarsContainer