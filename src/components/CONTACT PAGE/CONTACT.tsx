import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/Contact.css'
import ContactInformations from './ContactInformations'
import ContactForm from './ContactForm'

const CONTACT = () => {
   window.scrollTo(0, 0)
   
   return (
      <LayoutWrap>

         <main className="contact-page">

            <ContactInformations />
            <ContactForm />

         </main>

      </LayoutWrap>
   )
}

export default CONTACT