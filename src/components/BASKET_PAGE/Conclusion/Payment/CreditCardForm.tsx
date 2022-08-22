import React from 'react'
import InputDiv from '../../../ADMIN/Login/InputDiv'
import '../../../../css/CreditCardForm.css'

const CreditCardForm = () => {
   const numberValidate = (e: React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      const { value } = t
      const len: number = value.length

      if(len > 16) { t.value = value.slice(0, 16) }
   }

   const cvvValidate = (e: React.ChangeEvent) => {
      const t = e.target as HTMLInputElement

      const { value } = t
      const len: number = value.length

      if(len > 3) { t.value = value.slice(0, 3) }
   }

   const expiryValidate = (e: React.KeyboardEvent) => {
      const t = e.target as HTMLInputElement
      const { key } = e

      let value: string = ''

      if(key === 'Backspace') value = t.value.slice(0, t.value.length - 1)
      else value = t.value + e.key

      const len: number = value.length

      if(len >= 5) {
         t.value = value.slice(0, 4)
         return
      }

      if(len === 3 && key === 'Backspace') {
         t.value = value.slice(0, 3)
         return
      }

      if(len === 3) t.value = t.value + '/'
   }

   return (
      <section className="credit-card-form">

         <InputDiv onchange={ numberValidate } cname='credit-input' label='Card number' type='text' />

         <div className="wrap">

            <InputDiv keydown={ expiryValidate } cname='credit-input' label='Expiry date' type='text' />
            <InputDiv onchange={ cvvValidate } cname='credit-input' label='CVV' type='text' />

         </div>

      </section>
   )
}

export default CreditCardForm