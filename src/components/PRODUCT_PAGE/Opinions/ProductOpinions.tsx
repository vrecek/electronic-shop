import React from 'react'
import { UserContext } from '../../../App'
import { OpinionsSection } from '../../../interfaces/ProductPageInterfaces'
import { Hook } from '../../../interfaces/ReusableInterfaces'
import UserType from '../../../interfaces/UserInterface'
import CommentForm from './CommentForm'
import CommentSection from './CommentSection'
import OpinionsRateSummary from './OpinionsRateSummary'

const ProductOpinions = ({ comments, rates, prodId }: OpinionsSection) => {
   const user: Hook<UserType> = React.useContext(UserContext)

   return (
      <section className="product-opinions">

         <OpinionsRateSummary rates={ rates } />

         <h3 className="comm-h">Comments ({ comments.length })</h3>

         {
            user && <CommentForm prodId={ prodId } userId={ user._id } />
         }

         <CommentSection comments={ comments } />


      </section>
   )
}

export default ProductOpinions