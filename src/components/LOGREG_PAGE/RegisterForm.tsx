import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { FiUser } from 'react-icons/fi'
import Button from '../Common/Button'
import LogregInput from './LogregInput'
import ReCaptcha from 'react-google-recaptcha'
import { Inputs, Ref } from '../../interfaces/ReusableInterfaces'
import { Link, useNavigate } from 'react-router-dom'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import AppendResult from '../../functions/AppendText'

const RegisterForm = () => {
   const captchaRef: Ref<any> = React.useRef<any>(null)
   const n = useNavigate()

   const submitRegister = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const l = new LoadingCss('')
      l.defaultStyleCircle({
         position: 'containerWidth',
         width: '25%'
      })
      l.append(t)

      const at = new AppendResult('h6')

      try {
         const credentials = Array.from(t.elements as Inputs).map(x => x?.value)
         await Fetches.mix(process.env.REACT_APP_API_USER_REGISTER!, 'POST', [...credentials.slice(0, 5)])
   
         at.setMessage = 'Successfully created account. You can now log in'

         t.style.pointerEvents = 'none'
         setTimeout(() => n('/log-in', { replace: true }), 1500);

      }catch(err: any) {
         at.setMessage = err.json.msg
         captchaRef.current.reset()

      }finally {
         at.appendTo(t, 1.5)
         l.remove()
      }
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