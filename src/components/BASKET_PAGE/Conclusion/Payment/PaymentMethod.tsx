import React from 'react'
import { PaymentType } from '../../../../interfaces/BasketInterfaces'
import FigureImage from '../../../Common/FigureImage'

const PaymentMethod = ({ imgSrc, text, id }: PaymentType) => {
   return (
      <div id={ text } className={`payment-method ${ id }`}>

         <div>

            <FigureImage source={ imgSrc }  altTxt='payment' />
            <label htmlFor={ id }>{ text }</label>

         </div>


         <input className='payment-input' id={ id } type="radio" name='payment' />

      </div>
   )
}

export default PaymentMethod