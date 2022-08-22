import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/ErrorPage.css'
import FigureImage from '../Common/FigureImage'
import backImg from '../../images/error.png'
import Button from '../Common/Button'
import { ErrorState } from '../../interfaces/ErrorPageInterfaces'

const ERROR_PAGE = () => {
   const state = useLocation().state as ErrorState
   const n = useNavigate()

   const getDefaultStatus = (code: number): string => {
      switch(code) {
         case 404: return 'Not found'
         case 401: return 'Unauthorized'
         case 403: return 'Forbidden'
         case 400: return 'Bad request'
         default: return 'Internal server error'
      }
   }
   const getMessageExplain = (code: number): string => {
      switch(code) {
         case 404: return 'The Product you searched for, was not found. It is either already non existent or you messed up with the URL. Make sure you did everyting normally.'
         case 401: return "You are not authorized to access to this resource. Maybe you tried access profile page when not logged, or access someone's profile. You shouldn't see this message if you've done everything normal."
         case 403: return 'Action was forbidden. Server understood request, but declined to do so. This can occur when for example posting a comment to the same product'
         case 400: return "Action couldn't be done due to client's side error. This can happen when not filling every input in a form, or when all required options wasn't selected."
         case 500: return "Server could not proccess your request due to it's own problems. If you did not do anything wrong and if you are getting this message multiple times, please contact us."
         default: return 'An unkown error has occurred. If you are getting this message multiple times, please contact us.'
      }
   }

   const CODE: number = state?.code ?? 503
   const MSG: string = state?.msg ?? 'Unkown error'
   const MSG_DEFAULT: string = getDefaultStatus(CODE)
   const MSG_EXPLAIN: string = getMessageExplain(CODE)
   

   return (
      <LayoutWrap onlyStrap={ true }>

         <main className="error-page">

            <FigureImage source={ backImg } altTxt='background' />

            <section className="content">

               <div>

                  <h1>{ CODE }</h1>
                  <h5>{ MSG_DEFAULT }</h5>
                  <p>{ MSG }</p>
                  <p>{ MSG_EXPLAIN }</p>

               </div>
               
               <Button action={ () => n('/', { replace: true }) } text='Homepage' />

            </section>

         </main>

      </LayoutWrap>
   )
}

export default ERROR_PAGE