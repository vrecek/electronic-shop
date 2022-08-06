import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'
import Button from '../Common/Button'
import LogregInput from './LogregInput'
import ReCaptcha from 'react-google-recaptcha'
import { Ref } from '../../interfaces/ReusableInterfaces'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
   const captchaRef: Ref<any> = React.useRef<any>(null)

   const submitRegister = (e: React.FormEvent) => {
      e.preventDefault()
   }

   return (
      <form onSubmit={ submitRegister }>

         <div className='wrap'>

            <h2>Register</h2>

            <LogregInput type='text' icon={ <FiUser />} placeholder='Username' />
            <LogregInput type='text' icon={ <AiOutlineMail />} placeholder='Mail address' />
            <LogregInput type='password' icon={ <RiLockPasswordLine />} placeholder='Password' />
            <LogregInput type='password' icon={ <RiLockPasswordLine />} placeholder='Confirm password' />
            <ReCaptcha 
               ref={ captchaRef }
               sitekey={ process.env.REACT_APP_RECAPTCHA_CLIENT! } 
            />

            <Button text='Create account' />

            <Link className='center' to='/log-in'>Have the account? Log in here</Link>

         </div>

      </form>
   )
}

export default RegisterForm