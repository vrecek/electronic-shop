import React from 'react'
import { FigureImageType } from '../../interfaces/ReusableInterfaces'

const FigureImage = ({ cname, source, altTxt }: FigureImageType) => {
   return (
      <figure className={ cname ?? '' }>

         <img src={ source } alt={ altTxt ?? 'image' } />

      </figure>
   )
}

export default FigureImage