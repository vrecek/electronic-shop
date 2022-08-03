import React from 'react'
import FigureImage from '../../Common/FigureImage'
import '../../../css/Slider.css'
import SliderButtons from './SliderButtons'
import { Ref } from '../../../interfaces/ReusableInterfaces'
import sl1 from '../../../images/slide1.jpg'
import sl2 from '../../../images/slide2.jpg'
import sl3 from '../../../images/slide3.jpg'

const SliderContainer = () => {
   const sliderRef: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null)
   const slides: string[] = [
      sl3,
      sl1,
      sl2,
      sl3,
      sl1
   ]
   
   return (
      <header className="slider-container">

         <div ref={ sliderRef } className="moving-section">

            {
               slides.map((x, i) => (
                  <FigureImage key={ i } altTxt='slide' source={ x } />
               ))
            }

         </div>

         <SliderButtons slider={ sliderRef } imgNum={ slides.length - 2 } />

      </header>
   )
}

export default SliderContainer