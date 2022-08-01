import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'
import { NavAsideListType } from '../../../../interfaces/HomepageInterfaces'
import AsideList from './AsideList'

const CategoryAside = () => {
   const asideList: NavAsideListType[] = [
      {
         outerDiv: { category: 'PCs' }
      },

      {
         outerDiv: { category: 'Phones' }
      },

      {
         outerDiv: { category: 'Laptops' }
      },

      {
         outerDiv: { category: 'Keyboards' }
      },

      {
         outerDiv: { category: 'Mouses' }
      },

      {
         outerDiv: { category: 'Headphones' }
      },

      {
         outerDiv: { category: 'Components' }
      },

      {
         outerDiv: { category: 'Accessories' }
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