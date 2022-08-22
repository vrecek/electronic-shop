import React from 'react'
import SectionInfo from '../SectionInfo'
import '../../../css/BasketProduct.css'
import BasketProduct from './BasketProduct'
import TableHead from './TableHead'
import { ProductSectionType } from '../../../interfaces/BasketInterfaces'

const ProductsSection = ({ products, state }: ProductSectionType) => {
   return (
      <section className="products-section main">

         <SectionInfo 
            h1Text='Basket'
            h2Text={`Total: ${ products.length }`}
         />

         <section className="products-container">

            {
               products?.length
               ?
                  <table>

                     <TableHead />

                     <tbody>
                        {
                           products.map((x, i) => (
                              <BasketProduct 
                                 key={ i }
                                 discount={ x.onSalePercent }
                                 state={ state }
                                 name={ x.name }
                                 id={ x._id }
                                 price={ x.price }
                                 image={ x.mainImage.src }
                                 quantity={ x.quantity }
                              />
                           ))
                        }
                     </tbody>

                  </table>
               :
                  <></>
            }

         </section>

      </section>
   )
}

export default ProductsSection