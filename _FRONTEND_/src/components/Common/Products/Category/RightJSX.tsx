import React from 'react'
import { NavigateFunction } from 'react-router-dom'
import Button from '../../Button'

const RightJSXHousehold = (n: NavigateFunction) => {
   return (
      <section className="right-details household">

         <h1>Browse products for your household</h1>

         <Button action={ () => n('/search/t/household') } text='House products' />

      </section>
   )
}

const RightJSXGaming = (n: NavigateFunction) => {
   return (
      <section className="right-details gaming">

         <h1>Browse recommended products for gamers</h1>

         <Button action={ () => n('/search/t/gaming') } text='Gaming products' />

      </section>
   )
}

const RightJSXWork = (n: NavigateFunction) => {
   return (
      <section className="right-details work">

         <h1>Browse products that facilitates work</h1>

         <Button action={ () => n('/search/t/work') } text='Products for work' />

      </section>
   )
}

export { RightJSXHousehold, RightJSXGaming, RightJSXWork }