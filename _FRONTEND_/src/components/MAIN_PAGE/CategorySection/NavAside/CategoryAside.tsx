import React from 'react'
import { NavAsideListType } from '../../../../interfaces/HomepageInterfaces'
import AsideList from './AsideList'
import CategoryHiddenContent from './CategoryHiddenContent'
import itemTypes from '../../../../data/categoryItems.json'

const CategoryAside = () => {
   const asideList: NavAsideListType[] = [
      {
         category: 'PCs',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.pc } />
      },

      {
         category: 'Phones',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.phone } />
      },

      {
         category: 'Laptops',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.laptop } />
      },

      {
         category: 'Keyboards',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.keyboard } />
      },

      {
         category: 'Mouses',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.mouse } />
      },

      {
         category: 'Headphones',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.headphone } />
      },

      {
         category: 'Components / Accessories',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.other } />
      },

      {
         category: 'Home appliances',
         hiddenContent: <CategoryHiddenContent itemsLists={ itemTypes.household } />
      }
   ]

   return (
      <aside className="categories-aside">

         <h1 className='h-info'>Categories</h1>

         <ul className='first-list'>

            {
               asideList.map((x, i) => (
                  <AsideList key={ i } content={ x } />
               ))
            }

         </ul>

      </aside>
   )
}

export default CategoryAside