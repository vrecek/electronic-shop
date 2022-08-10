import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CommentType } from '../../../interfaces/ProductPageInterfaces'

const Comment = ({ rate, date, text, username }: CommentType) => {
   return (
      <article className="comment">

         <div className="info">

            {
               [...Array(5)].map((x, i) => (
                  <span key={ i } className={ i < rate ? 'active' : '' }>
                     <AiFillStar />
                  </span>
               ))
            }

            <h6>{ username }</h6>
            <h6 className='date'>{ date }</h6>

         </div>

         <p>{ text }</p>

      </article>
   )
}

export default Comment