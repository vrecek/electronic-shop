import React from 'react'
import { ContactInputDivType } from '../../interfaces/ContactInterfaces'

const ContactInput = ({ text, placeholder }: ContactInputDivType) => {
   return (
      <div className="input-div">

         <h5>{ text }</h5>
         <input type="text" spellCheck='false' placeholder={ placeholder} />

      </div>
   )
}

export default ContactInput