import React from 'react'
import { ProductInfoType } from '../../../interfaces/ProfileInterfaces'

const InfoSection = ({ info, header, cname }: ProductInfoType) => {
   return (
      <section className={`${ cname } center`}>

         <h4>{ header }:</h4>
         <h3>{ info }</h3>

      </section>
   ) 
}

export default InfoSection