import React from 'react'
import { SectionInfoType } from '../../interfaces/BasketInterfaces'

const SectionInfo = ({ h1Text, h2Text }: SectionInfoType) => {
   return (
      <div className="sect-info">

         <h1>{ h1Text }</h1>
         { h2Text && <h2>{ h2Text }</h2> }

      </div>
   )
}

export default SectionInfo