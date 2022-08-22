import React from 'react'
import PaymentMethod from './PaymentMethod'
import creditimg from '../../../../images/creditcard.jpg'
import paypalimg from '../../../../images/paypal.png'
import { Ref } from '../../../../interfaces/ReusableInterfaces'
import { PaymentMethodType, PaymentSectionType } from '../../../../interfaces/BasketInterfaces'
import CreditCardForm from './CreditCardForm'
import PaypalInfo from './PaypalInfo'

const PaymentSection = ({ paymentState, paymentStateValue }: PaymentSectionType) => {
   const paymentRef: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null) 
   const deliveryType = paymentStateValue.type

   React.useEffect(() => {
      const c: HTMLDivElement = paymentRef.current!
      const methods: Element[] = Array.from(c.children)
      
      if(deliveryType === 'On delivery') {
         for(let x of methods) {
            if(x.classList.contains('onplace')) {
               const input: HTMLInputElement = x.children[1] as HTMLInputElement
               input.checked = true

               continue
            }

            x.classList.add('blank')
         }

         return
      }

      for(let x of methods.slice(0, 2)) {
         x.children[1].addEventListener('change', (e: Event) => {
            const t = e.target as HTMLElement

            paymentState({
               cardCredentials: null,
               type: t.parentElement!.id as PaymentMethodType
            })
         })
      }

      methods[2].classList.add('blank')
   }, [])

   const displaySection = (): JSX.Element => {
      if(deliveryType === 'Credit card')
         return <CreditCardForm />

      else if(deliveryType === 'Paypal')
         return <PaypalInfo />

      return <></>
   }

   return (
      <section className="payment-section cont">

         <h4 className="info">Payment</h4>

         <div ref={ paymentRef }>

            <PaymentMethod id='credit' imgSrc={ creditimg } text='Credit card' />
            <PaymentMethod id='paypal' imgSrc={ paypalimg } text='Paypal' />
            <PaymentMethod id='onplace' imgSrc={ paypalimg } text='On delivery' />

            { displaySection() }

         </div>

      </section>
   )
}

export default PaymentSection