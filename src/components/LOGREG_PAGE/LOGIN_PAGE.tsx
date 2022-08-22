import React from 'react'
import '../../css/Login.css'
import '../../css/LoginAndRegStyles.css'
import WelcomeSection from './WelcomeSection'
import LoginForm from './LoginForm'
import LayoutWrap from '../Layout/LayoutWrap'
import { UserContext } from '../../App'
import { NavigateFunction, useNavigate } from 'react-router-dom'

const LOGIN_PAGE = () => {
   window.scrollTo(0, 0)

   const user = React.useContext(UserContext)
   const n: NavigateFunction = useNavigate()
   React.useEffect(() => {
      if(user) n('/', { replace: true })
   }, [])
   if(user) return (<></>)

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