import React from 'react'
import LayoutWrap from '../../Layout/LayoutWrap'
import CurrentLocation from '../Conclusion/CurrentLocation'
import '../../../css/OrderedFinal.css'
import Button from '../../Common/Button'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import DeliveryTime from './DeliveryTime'
import DeliveryPargraphs from './DeliveryPargraphs'
import BlankPage from '../../Common/BlankPage'

const ORDERED_MESSAGE = () => {
   const n: NavigateFunction = useNavigate()
   const state = useLocation().state as { allow: true }

   React.useEffect(() => {
      if(!state?.allow) n('/', { replace: true })
   }, [])

   window.scrollTo(0, 0)

   if(state?.allow)
   return (
      <LayoutWrap onlyStrap={ true }>

         <div className="final-wrap">

            <main className="ordered-message">

               <CurrentLocation isFinal={ true } />

               <h1>Thank you for ordering from our website!</h1>

               <DeliveryPargraphs />
               <DeliveryTime />

               <Button text='Back to homepage' action={ () => window.location.pathname = '/' } />

            </main>

         </div>

      </LayoutWrap>
   )

   return (<BlankPage />)
}

export default ORDERED_MESSAGE