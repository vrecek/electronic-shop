import React from 'react'
import ContactInformationsList from './ContactInformationsList'

const ContactInformations = () => {
   return (
      <section className="informations">

         <h1 className='top'>Contact details</h1>
         <h2 className='btm'>Service always available 24/7</h2>

         <ContactInformationsList />

      </section>
   )
}

export default ContactInformations