import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { ProductsRowDivType } from '../../../../interfaces/ReusableInterfaces'
import RowTextDivRight from './RowTextDivRight'

const RowTextDiv = ({ leftTxt, rightTxt, url }: ProductsRowDivType) => {
   return (
      <div className='text-wrap'>

         <h2 className='left'>{ leftTxt }</h2>

         <RowTextDivRight txt={ rightTxt } url={ url } />

      </div>
   )
}

export default RowTextDiv