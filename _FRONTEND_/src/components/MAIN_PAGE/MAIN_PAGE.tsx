import React from 'react'
import { PossibleHomepageCategory, HomepageProductType } from '../../interfaces/ReusableInterfaces'
import ProductsRow from '../Common/Products/Row/ProductsRow'
import CategorySection from './CategorySection/CategorySection'
import SliderContainer from './Slider/SliderContainer'
import item from '../../images/prod1.png'
import ProductsCategorySection from '../Common/Products/Category/ProductsCategorySection'
import ZoneSection from '../Common/Products/Zone/ZoneSection'
import { getCategory, getCommonCategory } from '../../functions/getCategory'
import NewsletterSection from './Newsletter/NewsletterSection'
import LayoutWrap from '../Layout/LayoutWrap'

const MAIN_PAGE = () => {
   window.scrollTo(0, 0)

   const recommendedProducts: HomepageProductType[] = [
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet dlugi text',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice krotki',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
      {
         id: React.useId(),
         name: 'RowProductNamePrice ipsum dolorem amet',
         rating: 3,
         image: item,
         price: 99
      },
   ]

   const possibleCategories: PossibleHomepageCategory[] = getCommonCategory(2)
   const categories: string[] = getCategory(3)

   return (
      <main className="main-page">

         <LayoutWrap>

            <SliderContainer />

            <CategorySection />

            <ProductsRow 
               text='Recommended'
               rightSection={{
                  text: 'See more',
                  url: '/'
               }}
               products={ recommendedProducts }
            />

            <ProductsCategorySection 
               products={ recommendedProducts }
               category={ possibleCategories[1] }
            />

            <ZoneSection
               category={ possibleCategories[0] }
            />

            <ProductsRow 
               text={ categories[0] }
               rightSection={{
                  text: 'See more',
                  url: '/'
               }}
               products={ recommendedProducts }
            />

            <ProductsRow 
               text={ categories[1] }
               rightSection={{
                  text: 'See more',
                  url: '/'
               }}
               products={ recommendedProducts }
            />

            <ProductsCategorySection 
               products={ recommendedProducts }
               category={ possibleCategories[0] }
            />

            <ProductsRow 
               text={ categories[2] }
               rightSection={{
                  text: 'See more',
                  url: '/'
               }}
               products={ recommendedProducts }
            />

            <ZoneSection
               category={ possibleCategories[1] }
            />       

            <NewsletterSection />

         </LayoutWrap>

      </main>
   )
}

export default MAIN_PAGE