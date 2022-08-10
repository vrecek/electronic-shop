import React from 'react'
import CommentSection from './CommentSection'
import OpinionsRateSummary from './OpinionsRateSummary'

const ProductOpinions = () => {
   return (
      <section className="product-opinions">

         <OpinionsRateSummary />

         <h3 className="comm-h">Comments (999)</h3>
         <CommentSection />


      </section>
   )
}

export default ProductOpinions