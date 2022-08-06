import React from 'react'
import NavigationStrap from '../Layout/Navigation/NavigationStrap/NavigationStrap'
import '../../css/Register.css'
import '../../css/LoginAndRegStyles.css'
import LayoutFooter from '../Layout/Footer/LayoutFooter'
import WelcomeSection from './WelcomeSection'
import RegisterForm from './RegisterForm'
import LayoutWrap from '../Layout/LayoutWrap'

const REGISTER_PAGE = () => {
   const PARA: string = 'Having registered account will get you benefits, like reviewing products, which can help other users decide to buy that product or not'
   const HEADER: string = 'No account? Create it here'
   const benefits: string[] = ['Full time support', 'Saving buy credentials', 'Reviewing products', 'Free delivery for one month']

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