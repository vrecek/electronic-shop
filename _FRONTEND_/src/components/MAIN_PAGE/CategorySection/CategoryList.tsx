import React from 'react'
import { AiFillExclamationCircle, AiOutlineExclamationCircle, AiOutlineFire, AiOutlinePercentage } from 'react-icons/ai'
import { BsCheckAll } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { CategoryNavListType } from '../../../interfaces/HomepageInterfaces'

const CategoryList = () => {
   const n = useNavigate()
   const lists: CategoryNavListType[] = [
      {
         name: 'Latest',
         url: '/',
         icon: <AiOutlineExclamationCircle />
      },

      {
         name: 'Popular',
         url: '/',
         icon: <AiOutlineFire />
      },

      {
         name: 'On sale',
         url: '/',
         icon: <AiOutlinePercentage />
      },

      {
         name: 'Last searched',
         url: '/',
         icon: <BsCheckAll />
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