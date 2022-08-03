import React from 'react'
import { PossibleHomepageCategory, HomepageProductType } from '../../interfaces/ReusableInterfaces'
import ProductsRow from '../Common/Products/Row/ProductsRow'
import LayoutNavigation from '../Layout/Navigation/LayoutNavigation'
import CategorySection from './CategorySection/CategorySection'
import SliderContainer from './Slider/SliderContainer'
import item from '../../images/prod1.png'
import ProductsCategorySection from '../Common/Products/Category/ProductsCategorySection'
import cats from '../../data/possibleCategoriesSection.json'

const MAIN_PAGE = () => {
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
   const possibleCategories: PossibleHomepageCategory[] = [...Array(1)].map(x => cats[Math.floor(Math.random() * cats.length)] as PossibleHomepageCategory)

   return (
      <main className="main-page">

         <LayoutNavigation />

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
            category={ possibleCategories[0] }
         />

         <div style={{height:'500vh'}}>xd</div>

      </main>
   )
}

export default MAIN_PAGE