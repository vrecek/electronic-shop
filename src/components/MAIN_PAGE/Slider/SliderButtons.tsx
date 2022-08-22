import React from 'react'
import { SliderButtonsType } from '../../../interfaces/NavigationInterfaces'

const SliderButtons = ({ imgNum, slider }: SliderButtonsType) => {
   const sliderFunc = (e: React.MouseEvent, num: number) => {
      const s = slider.current!
      const t = e.target as HTMLElement
      const btnCont: Element[] = Array.from(t.parentElement!.children) 

      for(const x of btnCont) x.className = 'btn'
      t.className = 'btn active'

      s.style.transform = `translateX(-${ num * 100 }%)`
   }

   return (
      <section className='slider-buttons-container'>
         
         {
            [...Array(imgNum)].map((x, i) => (
               <div 
               onClick={ (e) => sliderFunc(e, i + 1) }
               className={`btn ${ i === 0 ? 'active' : '' }`} 
               key={ i }>

               </div>
            ))
         }
         
      </section>
   )
}

export default SliderButtons