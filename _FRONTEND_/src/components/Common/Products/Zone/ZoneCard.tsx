import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ZoneCardDetails } from '../../../../interfaces/ReusableInterfaces'
import Button from '../../Button'
import FigureImage from '../../FigureImage'

const ZoneCard = ({ url, image, txt }: ZoneCardDetails) => {
   const n = useNavigate()

   return (
      <article className="card">

         <FigureImage source={ image } altTxt='category' />

         <section className="wrap">

            <h2>{ txt }</h2>

            <Button text='Check products' action={ () => n(url) } />

         </section>

      </article>
   )
}

export default ZoneCard