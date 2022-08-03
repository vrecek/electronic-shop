import React from 'react'
import Button from '../../Button'

const RightJSXHousehold = () => {
   return (
      <section className="right-details household">

         <h1>Browse products for your household</h1>

         <Button text='House products' />

      </section>
   )
}

const RightJSXGaming = () => {
   return (
      <section className="right-details gaming">

         <h1>Browse recommended products for gamers</h1>

         <Button text='Gaming products' />

      </section>
   )
}

const RightJSXWork = () => {
   return (
      <section className="right-details work">

         <h1>Browse products that facilitates work</h1>

         <Button text='Products for work' />

      </section>
   )
}

export { RightJSXHousehold, RightJSXGaming, RightJSXWork }