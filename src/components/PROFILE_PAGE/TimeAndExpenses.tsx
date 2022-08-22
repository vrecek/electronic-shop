import React from 'react'
import { TimeAndMoneyInfo } from '../../interfaces/ProfileInterfaces'

const TimeAndExpenses = ({ created, moneySpent }: TimeAndMoneyInfo) => {
   const { num } = created

   const DAY: number = 24 * 60 * 60 * 1000
   const days: number = Math.floor((Date.now() - num) / DAY)

   return (
      <section className="entry-right">

         <h2>You created account at:</h2>
         <h3 style={{ marginBottom: '1.5em' }}>{ created.str }</h3>

         <h2>Which is:</h2>
         <div className="days">
            <h4>{ days } days</h4>
         </div>

         <h2>You spent total:</h2>
         <h3>{ moneySpent } $</h3>

      </section>
   )
}

export default TimeAndExpenses