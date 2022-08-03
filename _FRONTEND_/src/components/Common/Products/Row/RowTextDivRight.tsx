import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { RowRightInfo } from '../../../../interfaces/ReusableInterfaces'

const RowTextDivRight = ({ url, txt }: RowRightInfo) => {
   const n = useNavigate()

   return (
      <h2 onClick={ () => n(url) } className="right">

      { txt }
      <span> <AiOutlineArrowRight /> </span>

      </h2>
   )
}

export default RowTextDivRight