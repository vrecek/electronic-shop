import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductTags = ({ tags }: { tags: string[] }) => {
   const n = useNavigate()

   return (
      <section className="tags">

         {
            tags.map((x, i) => (
               <span onClick={ () => n(`/search/tg/${ x }`) } key={ i }>{ x }</span>
            ))
         }

      </section>
   )
}

export default ProductTags