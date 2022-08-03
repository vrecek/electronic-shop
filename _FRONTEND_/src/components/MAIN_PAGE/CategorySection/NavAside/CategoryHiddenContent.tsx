import React from 'react'
import { useNavigate } from 'react-router-dom'
import { NavigationLinkType } from '../../../../interfaces/NavigationInterfaces'

const CategoryHiddenContent = ({ itemsLists }: { itemsLists: NavigationLinkType[][] }) => {
   const n = useNavigate()

   return (
      <section className="hidden-nav-category-content">
         
         {
            itemsLists.map((x, i) => (
               <ul key={ i }>
                  {
                     x.map((y, j) => (
                        <li 
                        onClick={ () => n(`/search/tag${ y.url }`) } 
                        key={ j }
                        >
                           { y.name }
                        </li>
                     ))
                  }
               </ul>
            ))
         }

      </section>
   )
}

export default CategoryHiddenContent