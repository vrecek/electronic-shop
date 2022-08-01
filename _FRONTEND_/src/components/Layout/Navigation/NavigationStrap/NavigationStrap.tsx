import React from 'react'
import image from '../../../../images/reactImg.png'
import FigureImage from '../../../Common/FigureImage'
import NavigationStrapList from './NavigationStrapList'

const NavigationStrap = () => {
   return (
      <section className="nav-strap">

         <NavigationStrapList />

         <FigureImage source={ image } altTxt='Powered by react' />

      </section>
   )
}

export default NavigationStrap