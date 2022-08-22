import React from 'react'
import { ImagesSelectType } from '../../../interfaces/ProductPageInterfaces'
import FigureImage from '../../Common/FigureImage'

const ImagesSelect = ({ allImages }: ImagesSelectType) => {
   const changeImage = (e: React.MouseEvent, src: string) => {
      const t = e.target as HTMLElement
      const children: Element[] = Array.from(t.parentElement!.children)

      for(let x of children) x.className = ''
      t.className = 'active'

      const img: HTMLImageElement = t.parentElement?.parentElement!.parentElement!.children[0].children[0] as HTMLImageElement
      img.src = src
   }

   return (
      <section className="select-images">

         {
            allImages.map((x, i) => (
               <FigureImage 
                  cname={ i === 0 ? 'active' : '' }
                  action={ (e) => changeImage(e, x) }
                  key={ i }
                  source={ x } 
                  altTxt='product' 
               />
            ))
         }

      </section>
   )
}

export default ImagesSelect