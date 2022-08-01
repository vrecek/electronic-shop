import React from 'react'
import FigureImage from '../../Common/FigureImage'
import '../../../css/Slider.css'
import SliderButtons from './SliderButtons'
import { Ref } from '../../../interfaces/ReusableInterfaces'

const SliderContainer = () => {
   const sliderRef: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null)
   const slides: string[] = [
      'https://www.10wallpaper.com/wallpaper/1366x768/1207/Taiwan-Nature_Landscape_Wallpaper_1366x768.jpg',
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Desktop-HD-1080p-PC-Images-Download.jpg',
      'https://akademiaducha.pl/wp-content/uploads/2017/02/colorful-dmt-frog-IMG-FILE-1920x1080-Widescreen-High-Resolution-1080p-HD-Desktop-Wallpaper-Mr-HD-Wallpapers2.jpg',
      'https://www.10wallpaper.com/wallpaper/1366x768/1207/Taiwan-Nature_Landscape_Wallpaper_1366x768.jpg',
      'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Desktop-HD-1080p-PC-Images-Download.jpg',
   ]
   
   return (
      <section className="slider-container">

         <div ref={ sliderRef } className="moving-section">

            {
               slides.map((x, i) => (
                  <FigureImage key={ i } altTxt='slide' source={ x } />
               ))
            }

         </div>

         <SliderButtons slider={ sliderRef } imgNum={ slides.length - 2 } />

      </section>
   )
}

export default SliderContainer