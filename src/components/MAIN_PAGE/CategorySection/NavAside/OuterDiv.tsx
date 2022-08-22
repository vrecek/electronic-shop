import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io'

const OuterDiv = ({ category }: { category: string }) => {
   return (
      <div className="outer-div">

         <h5>{ category }</h5>
         <span><IoMdArrowDropright /></span>

      </div>
   )
}

export default OuterDiv