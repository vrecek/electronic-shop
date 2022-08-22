import React from 'react'
import Button from '../../Common/Button'
import ProductStarsContainer from '../../Common/Products/ProductStarsContainer'
import ProductTags from '../../SEARCH_PAGE/ProductTags'
import { BsCartCheck } from 'react-icons/bs'
import ImagesSelect from './ImagesSelect'
import { ProductRightType } from '../../../interfaces/ProductPageInterfaces'
import { LoadingCss } from '../../../functions/Loading'
import PriceSaleInfo from '../../Common/PriceSaleInfo'
import Fetches from '../../../functions/Fetches'

const RightSection = ({ images, name, company, tags, rate, price, para, id, salePercent, quantity }: ProductRightType) => {
   const addToCart = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const label = t.children[0] as HTMLElement
      t.style.pointerEvents = 'none'

      const l: LoadingCss = new LoadingCss('load')
      l.defaultStyleCircle({
         position: 'containerHeight'
      })
      l.append(t)

      try {
         await Fetches.mix(`${ process.env.REACT_APP_API_PRODUCT_ADD_TO_CART }/${ id }`, 'PUT')

         const navBasket = document.body.children[1].children[0].children[0].children[1].children[2].children[0].children[0]
         navBasket.textContent = (parseInt(navBasket.textContent ?? '0') + 1).toString()

         t.style.background = 'green'
         label.style.display = 'none'

      }catch(err) {
         t.style.pointerEvents = 'all'
         t.style.background = 'royalblue'
         label.style.display = 'block'

      }finally { l.remove() }
   }

   return (
      <article className="right-product-section">

         <h2 className='company'>{ company }</h2>
         <h1 className="name">{ name }</h1>
         <ProductTags tags={ tags } />
         <ProductStarsContainer rate={ rate } />
         <PriceSaleInfo original={ price } percent={ salePercent } />
         <p>{ para }</p>
         <ImagesSelect allImages={ images } />
         
         {
            quantity
            ?
            <Button cname='available' action={ addToCart } additional={ <BsCartCheck /> } text='Add to cart' />
            :
            <Button cname='not-available' text='Product not available' />
         }

      </article>
   )
}

export default RightSection