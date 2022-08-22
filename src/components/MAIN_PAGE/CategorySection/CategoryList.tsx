import React from 'react'
import { AiOutlineExclamationCircle, AiOutlineFire, AiOutlinePercentage } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { CategoryNavListType } from '../../../interfaces/HomepageInterfaces'

const CategoryList = () => {
   const n = useNavigate()
   const lists: CategoryNavListType[] = [
      {
         name: 'Latest',
         url: '/search/s/latest',
         icon: <AiOutlineExclamationCircle />
      },

      {
         name: 'Popular',
         url: '/search/s/popular',
         icon: <AiOutlineFire />
      },

      {
         name: 'On sale',
         url: '/search/s/sale',
         icon: <AiOutlinePercentage />
      }
   ]

   return (
      <ul className="categories-list">

         {
            lists.map((x, i) => (
               <li onClick={ () => n(x.url) } key={ i }>
                  { x.name }
                  <span>{ x.icon }</span>
               </li>
            ))
         }

      </ul>
   )
}

export default CategoryList