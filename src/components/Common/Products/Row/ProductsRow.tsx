import React from 'react'
import '../../../../css/ProductsRow.css'
import { ProductsRowType } from '../../../../interfaces/ReusableInterfaces'
import RowArrow from './RowArrow'
import RowProduct from './RowProduct'
import RowTextDiv from './RowTextDiv'

const ProductsRow = ({ products, text, rightSection }: ProductsRowType) => {
   return (
      <section className="products-row">

         <RowTextDiv
            leftTxt={ text[0].toUpperCase() + text.slice(1) }
            rightTxt={ rightSection.text }
            url={ rightSection.url }
         />

         <section className="wrap">

            <RowArrow type='left' />

            <section className="product-cont">

               {
                  products.map((x, i) => (
                     <RowProduct 
                        key={ i }
                        salePerc={ x.onSalePercent }
                        id={ x._id }
                        name={ x.name }
                        price={ x.price }
                        rating={ x.rating.summedRate }
                        image={ x.mainImage.src }
                     />
                  ))
               }

            </section>

            <RowArrow type='right' />
                        
         </section>

      </section>
   )
}

export default ProductsRow