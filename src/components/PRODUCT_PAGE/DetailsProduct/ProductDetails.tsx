import React from 'react'
import { DetailsType } from '../../../interfaces/ProductPageInterfaces'
import TableBody from './TableBody'
import TableHead from './TableHead'

const ProductDetails = ({ para, technical, functions }: DetailsType) => {
   return (
      <section className="product-details">

         <p>{ para }</p>

         <h2>Full specification</h2>
         
         <table>

            <TableHead />
            <TableBody technical={ technical } functions={ functions } />

         </table>

      </section>
   )
}

export default ProductDetails