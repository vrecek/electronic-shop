import React from 'react'
import LayoutNavigation from '../Layout/Navigation/LayoutNavigation'
import CategorySection from './CategorySection/CategorySection'
import SliderContainer from './Slider/SliderContainer'

const MAIN_PAGE = () => {
   return (
      <main className="main-page">

         <LayoutNavigation />

         <SliderContainer />

         <CategorySection />

         <div style={{height:'500vh'}}>xd</div>

      </main>
   )
}

export default MAIN_PAGE