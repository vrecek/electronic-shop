import React from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import moveXScroll from '../../../../functions/moveXScroll'

const CategoryArrows = () => {
   return (
      <div className="arrows">

         <span onClick={ (e) => moveXScroll(e, 'left', 2) }> <MdOutlineArrowBackIosNew /> </span>
         <span onClick={ (e) => moveXScroll(e, 'right', 2) }> <MdOutlineArrowForwardIos /> </span>

      </div>
   )
}

export default CategoryArrows