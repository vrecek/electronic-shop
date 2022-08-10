import React from 'react'
import ProductStarsContainer from '../../Common/Products/ProductStarsContainer'

const OpinionsRateSummary = () => {
   return (
      <section className="rate-summary">

         <div className="wrap">
            <ProductStarsContainer rate={ 5 } />
            <h3>999</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 4 } />
            <h3>999</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 3 } />
            <h3>999</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 2 } />
            <h3>999</h3>
         </div>

         <div className="wrap">
            <ProductStarsContainer rate={ 1 } />
            <h3>999</h3>
         </div>

      </section>
   )
}

export default OpinionsRateSummary