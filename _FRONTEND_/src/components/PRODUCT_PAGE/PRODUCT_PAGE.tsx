import React from 'react'
import FigureImage from '../Common/FigureImage'
import LayoutWrap from '../Layout/LayoutWrap'
import RightSection from './RightEntry/RightSection'
import '../../css/ProductPage.css'
import '../../css/ProductSections.css'
import SelectSection from './SelectSection'
import ProductDetails from './DetailsProduct/ProductDetails'
import { ProductSections } from '../../interfaces/ProductPageInterfaces'
import ProductOpinions from './Opinions/ProductOpinions'

const PRODUCT_PAGE = () => {
   const [currSection, setSection]  = React.useState<JSX.Element>(<ProductDetails />)

   const selectCurrentFunc = (e: React.MouseEvent, what: ProductSections) => {
      const t = e.target as HTMLElement

      for(let x of Array.from(t.parentElement!.children)) x.className = ''
      t.className = 'active'

      switch(what) {
         case 'details':
            setSection(<ProductDetails />)   
         break
         
         case 'opinions':
            setSection(<ProductOpinions />)   
         break
      }
   }

   return (
      <LayoutWrap>

         <main className="product-page">

            <section className="product-entry">

               <FigureImage source='http://localhost:3000/static/media/prod1.f514ce0c2ff223d4112a.png' altTxt='product' />
               <RightSection />

            </section>

            <SelectSection func={ selectCurrentFunc } />
            { currSection }

         </main>

      </LayoutWrap>
   )
}

export default PRODUCT_PAGE