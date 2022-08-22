import React from 'react'
import { EntryInformationsType } from '../../interfaces/ProfileInterfaces'
import TableOfContents from './TableOfContents'
import TimeAndExpenses from './TimeAndExpenses'

const EntryInformations = ({ nick, moneySpent, created }: EntryInformationsType) => {
   return (
      <section className="entry-informations">

         <TableOfContents nick={ nick } />

         <TimeAndExpenses moneySpent={ moneySpent } created={ created } />

      </section>
   )
}

export default EntryInformations