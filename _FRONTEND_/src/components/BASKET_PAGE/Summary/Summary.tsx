import React from 'react'
import Button from '../../Common/Button'
import SectionInfo from '../SectionInfo'
import CostInfo from './CostInfo'
import Delivery from './Delivery'

const Summary = () => {
   return (
      <section className="summary main">

         <SectionInfo 
            h1Text='Summary'
         />

         <CostInfo text='ITEMS' cname='info'>
            999
         </CostInfo>

         <Delivery />

         <CostInfo text='Total cost' cname='total'>
            999
         </CostInfo>

         <Button text='Payment' />

      </section>
   )
}

export default Summary