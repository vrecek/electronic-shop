import React from 'react'
import { AiOutlineUser } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
import { Link, useNavigate } from 'react-router-dom'
import AppendResult from '../../functions/AppendText'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { Inputs } from '../../interfaces/ReusableInterfaces'
import Button from '../Common/Button'
import LoginOptions from './LoginOptions'
import LogregInput from './LogregInput'

const LoginForm = () => {
   const submitLogin = async (e: React.FormEvent) => {
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
         const [username, password, remember] = Array.from(t.elements as Inputs).map(x => {
            if(x.type === 'checkbox') return x.checked
            return x.value
         })

         await Fetches.mix(process.env.REACT_APP_API_USER_SIGNIN!, 'POST', {
            username, password, remember
         })
   
         at.setMessage = 'You successfully logged in'

         t.style.pointerEvents = 'none'
         setTimeout(() => window.location.pathname = '/', 1500);

      }catch(err: any) {
         at.setMessage = err.json.msg

      }finally {
         at.appendTo(t, 1.5)
         l.remove()
      }
   }

   return (
      <form onSubmit={ submitLogin }>

         <div className='wrap'>

            <h2>Log in</h2>

            <LogregInput type='text' icon={ <AiOutlineUser />} placeholder='Username' />
            <LogregInput type='password' icon={ <RiLockPasswordLine />} placeholder='Password' />

            <LoginOptions />

            <Button text='Log into account' />

            <Link className='center' to='/register'>No account? Register here</Link>

         </div>

      </form>
   )
}

export default LoginForm