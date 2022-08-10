import React from 'react'
import { FigureImageType } from '../../interfaces/ReusableInterfaces'

const FigureImage = ({ cname, source, altTxt, action }: FigureImageType) => {
   const blank = ()=>{}

   return (
      <figure onClick={ action as any ?? blank } className={ cname ?? '' }>

         <img src={ source } alt={ altTxt ?? 'image' } />

      </figure>
   )
}

export default FigureImage