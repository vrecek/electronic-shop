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
   const IMG: string[] = ['http://localhost:3000/static/media/prod1.f514ce0c2ff223d4112a.png', 'https://i0.wp.com/deskcom-dz.com/wp-content/uploads/2022/05/purchase-gallery-arctis-3-2019-black-lay.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png?fit=1050%2C600&ssl=1']

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

               <FigureImage cname='main-figure' source={ IMG[0] } altTxt='product' />
               <RightSection 
                  images={ IMG }
                  name='Lorem ipsum dolor sitamet'
                  company='Loremispum'
                  tags={ ['Loremsi', 'Dolorsit', 'Amet'] }
                  para='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae laborum quod nam. Maxime, quas itaque accusamus odio vel facilis deleniti optio est quidem quam enim ex sint molestiae! Est?'
                  price={ 999 }
                  rate={ 4 }
                  id='123'
               />

            </section>

            <SelectSection func={ selectCurrentFunc } />
            <section className="content">

               { currSection }

            </section>

         </main>

      </LayoutWrap>
   )
}

export default PRODUCT_PAGE