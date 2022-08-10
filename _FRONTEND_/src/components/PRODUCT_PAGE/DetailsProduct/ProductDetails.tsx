import React from 'react'
import TableBody from './TableBody'
import TableHead from './TableHead'

const ProductDetails = () => {
   return (
      <section className="product-details">

         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit distinctio voluptatibus deserunt. Dolore, beatae libero unde vitae odit nihil porro pariatur sed cupiditate, iure, officiis consequuntur quasi eaque! Minima, dolores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laborum at cupiditate illo sed facilis, ipsa ipsum, nemo tempore, sit vel nostrum labore facere nam. Asperiores debitis sit ipsum nulla.</p>

         <h2>Full specification</h2>
         
         <table>

            <TableHead />
            <TableBody />

         </table>

      </section>
   )
}

export default ProductDetails