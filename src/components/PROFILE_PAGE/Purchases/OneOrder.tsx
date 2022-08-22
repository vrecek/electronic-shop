import React from 'react'
import { FaTimes } from 'react-icons/fa';
import { TiTick } from 'react-icons/ti'
import { PurchaseHistoryType } from '../../../interfaces/ProfileInterfaces'
import InfoSection from './InfoSection';
import ProductInfo from './ProductInfo';

const OneOrder = ({ details, products }: PurchaseHistoryType) => {
   const deliveredIcon: JSX.Element = details.delivered ? <span className='yes'><TiTick /></span> : <span className='no'><FaTimes /></span>

   return (
      <article className="order">

         <section className="product">
            {
               products.map((x, i) => (
                  <ProductInfo 
                     key={ i }
                     mainImage={ x.mainImage }
                     name={ x.name }
                     quantity={ x.quantity }
                  />
               ))
            }
         </section>

         <h6 className="id">ID: &nbsp;{ details.orderId }</h6>
         <InfoSection cname='ordered' header='Ordered' info={ details.date } />
         <InfoSection cname='cost' header='Total cost' info={ `${ details.totalPrice }$` } />
         <InfoSection cname='delivered' header='Delivered' info={ deliveredIcon } />

      </article>
   )
}

export default OneOrder