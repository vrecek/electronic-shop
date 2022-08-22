import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { CommentType } from '../../../interfaces/ProductInterface'

const Comment = ({ rate, postedDate, text, author }: CommentType) => {
   return (
      <article className="comment">

         <div className="info">

            <div>

               {
                  [...Array(5)].map((x, i) => (
                     <span key={ i } className={ i < rate ? 'active' : '' }>
                        <AiFillStar />
                     </span>
                  ))
               }

            </div>

            <div>

               <h6 className='date'>{ postedDate }</h6>
               <h6>{ author.name }</h6>

            </div>

         </div>

         <p>{ text }</p>

      </article>
   )
}

export default Comment