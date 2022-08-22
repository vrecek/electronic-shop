import React from 'react'
import { RatingType } from '../../../interfaces/ProductInterface'
import ProductStarsContainer from '../../Common/Products/ProductStarsContainer'

const OpinionsRateSummary = ({ rates }: { rates: RatingType }) => {
   const { one, two, three, four, five } = rates

   return (
      <section className="rate-summary">

         <div className="wrap">
            <ProductStarsContainer rate={ 5 } />
            <h3>{ five }</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 4 } />
            <h3>{ four }</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 3 } />
            <h3>{ three }</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 2 } />
            <h3>{ two }</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 1 } />
            <h3>{ one }</h3>
         </div>

      </section>
   )
}

export default OpinionsRateSummary