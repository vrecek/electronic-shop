import React from 'react'
import AppendResult from '../../functions/AppendText'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { Inputs } from '../../interfaces/ReusableInterfaces'
import Button from '../Common/Button'
import ContactInput from './ContactInput'

const ContactForm = () => {
   const submitContact = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleCircle({
         position: 'containerWidth',
         width: '20%',
         height: '20%'
      })
      l.append(t)

      const ar: AppendResult = new AppendResult('h5', 'mail-result')

      try {
         await Fetches.mix(
            process.env.REACT_APP_API_MAILER_CONTACT!, 
            'POST',
            Array.from(t.elements as Inputs).slice(0, 3).map(x => x.value)
         )

         ar.setMessage = 'Successfully sent a message'

      }catch(err: any) {
         ar.setMessage = err.json.msg
      
      }finally {
         ar.appendTo(t, 2.5)
         l.remove()
      }
   }

   return (
      <form onSubmit={ submitContact }>

         <h1 className='top'>Contact form</h1>
         <h2 className='btm'>Write to us your message</h2>

         <ContactInput placeholder='Name...' text='Your name' />
         <ContactInput placeholder='Mail...' text='Your mail' />
         <textarea spellCheck='false'></textarea>

         <Button text='Send message' />

      </form>
   )
}

export default ContactForm