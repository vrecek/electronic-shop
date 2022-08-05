import React from 'react'
import '../../../css/NewsletterSection.css'
import NewsletterForm from './NewsletterForm'
import NewsletterInfo from './NewsletterInfo'

const NewsletterSection = () => {
   return (
      <section className="newsletter">

         <NewsletterInfo />

         <NewsletterForm />

      </section>
   )
}

export default NewsletterSection