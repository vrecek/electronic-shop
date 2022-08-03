import React from 'react'
import { MdOutlineArrowBackIosNew, MdOutlineArrowForwardIos } from 'react-icons/md'
import moveXScroll from '../../../../functions/moveXScroll'
import { Direction } from '../../../../interfaces/ReusableInterfaces'

const RowArrow = ({ type }: { type: Direction }) => {
   const icon: JSX.Element = type === 'left' ? <MdOutlineArrowBackIosNew /> : <MdOutlineArrowForwardIos />

   return (
      <div onClick={ (e) => moveXScroll(e, type, 1) } className="arrow">

         <span>  { icon } </span>

      </div>
   )
}

export default RowArrow