import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Button from '../Common/Button'
import LoginOptions from './LoginOptions'
import LogregInput from './LogregInput'

const LoginForm = () => {
   const submitLogin = (e: React.FormEvent) => {
      e.preventDefault()
   }

   return (
      <form onSubmit={ submitLogin }>

         <div className='wrap'>

            <h2>Log in</h2>

            <LogregInput type='text' icon={ <AiOutlineMail />} placeholder='Mail address' />
            <LogregInput type='password' icon={ <RiLockPasswordLine />} placeholder='Password' />

            <LoginOptions />

            <Button text='Log into account' />

            <Link className='center' to='/register'>No account? Register here</Link>

         </div>

      </form>
   )
}

export default LoginForm