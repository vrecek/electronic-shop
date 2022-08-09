import React from 'react'
import FigureImage from '../Common/FigureImage'
import empty from '../../images/search_empty.png'

const NoProducts = () => {
   return (
      <section className="no-products">

         <h1>No products found for: <span>lorem ipsum</span></h1>
         <FigureImage source={ empty } altTxt='no products' />
         
      </section>
   )
}

export default NoProducts