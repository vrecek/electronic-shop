import React from 'react'
import Button from '../Common/Button'
import ContactInput from './ContactInput'

const ContactForm = () => {
   const submitContact = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement
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