import React, { CSSProperties } from 'react'
import { ButtonType } from '../../interfaces/ReusableInterfaces'

const Button = ({ text, additional, action, cname }: ButtonType) => {
   const blank = () => {}
   const noPointers = {
      pointerEvents: 'none'
   } as CSSProperties

   return (
      <button onClick={ action ?? blank } className={ cname ?? '' }>

         <label style={ noPointers }>{ text }</label>
         {
            additional && <span style={ noPointers }>{ additional }</span>
         }

      </button>
   )
}

export default Button