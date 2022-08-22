import React from 'react'
import '../../css/Register.css'
import '../../css/LoginAndRegStyles.css'
import WelcomeSection from './WelcomeSection'
import RegisterForm from './RegisterForm'
import LayoutWrap from '../Layout/LayoutWrap'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import { UserContext } from '../../App'

const REGISTER_PAGE = () => {
   window.scrollTo(0, 0)

   const user = React.useContext(UserContext)
   const n: NavigateFunction = useNavigate()
   React.useEffect(() => {
      if(user) n('/', { replace: true })
   }, [])
   if(user) return (<></>)

   const PARA: string = 'Having registered account will get you benefits, like reviewing products, which can help other users decide to buy that product or not'
   const HEADER: string = 'No account? Create it here'
   const benefits: string[] = ['Full time support', 'Save credentials', 'Reviewing products', 'Free delivery for one month']

   return (
      <main className="register-page">

         <LayoutWrap onlyStrap={ true }>

            <section className="wrap">

               <WelcomeSection header={ HEADER } para={ PARA } list={ benefits } />
               <RegisterForm />

            </section>

         </LayoutWrap>

      </main>
   )
}

export default REGISTER_PAGE