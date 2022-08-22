import React from 'react'
import { InputDivType } from '../../interfaces/LogregInterfaces'

const LogregInput = ({ icon, placeholder, type }: InputDivType) => {
   return (
      <div className="input-div">

         <span className="icon">{ icon }</span>
         <input placeholder={ placeholder } type={ type } spellCheck='false' />

      </div>
   )
}

export default LogregInput