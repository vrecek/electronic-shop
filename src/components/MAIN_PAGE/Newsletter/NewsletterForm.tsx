import React from 'react'
import Button from '../../Common/Button'

const NewsletterForm = () => {
   const submitForm = (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement
   }

   return (
      <form onSubmit={ submitForm }>

         <h2>Enter your mail</h2>
         <input type="text" />
         <Button text='Submit' />
         
      </form>
   )
}

export default NewsletterForm