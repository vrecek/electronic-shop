import React from 'react'
import back from '../../images/logreg.jpg'
import { WelcomeSectionType } from '../../interfaces/LogregInterfaces'

const WelcomeSection = ({ header, para, list }: WelcomeSectionType) => {
   return (
      <section style={{ backgroundImage: `url(${ back })` }} className="left-section">

         <h1>{ header }</h1>
         <p>{ para }</p>
         {
            list &&
            <ul>
               {
                  list.map((x, i) => (
                     <li key={ i }>{ x }</li>
                  ))
               }
            </ul>
         }

      </section>
   )
}

export default WelcomeSection