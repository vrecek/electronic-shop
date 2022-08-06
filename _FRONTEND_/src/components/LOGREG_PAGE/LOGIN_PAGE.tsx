import React from 'react'
import NavigationStrap from '../Layout/Navigation/NavigationStrap/NavigationStrap'
import '../../css/Login.css'
import '../../css/LoginAndRegStyles.css'
import WelcomeSection from './WelcomeSection'
import LoginForm from './LoginForm'
import LayoutFooter from '../Layout/Footer/LayoutFooter'
import LayoutWrap from '../Layout/LayoutWrap'

const LOGIN_PAGE = () => {
   const PARA: string = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis enim officiis possimus facere, provident asperiores corrupti culpa consequatur veritatis, deserunt aut, odio ut animi voluptatibus rerum! Veniam illo veritatis ipsum?'
   const HEADER: string = 'Got the account? Log in here'

   return (
      <main className="login-page">

         <LayoutWrap onlyStrap={ true }>

            <section className="wrap">

               <WelcomeSection header={ HEADER } para={ PARA } />
               <LoginForm />

            </section>

         </LayoutWrap>

      </main>
   )
}

export default LOGIN_PAGE