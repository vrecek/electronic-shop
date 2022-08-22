import React from 'react'
import Button from '../../Common/Button'
import '../../../css/CookiePopup.css'
import { BiCookie } from 'react-icons/bi'
import Fetches from '../../../functions/Fetches'

const CookiePopup = () => {
   const confirmCookie = async (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const cont = t.parentElement!.parentElement! as HTMLElement
      cont.remove()

      try { await Fetches.mix(process.env.REACT_APP_API_COMMON_COOKIE_CONFIRM!, 'PATCH') }
      catch(err) {}
   }

   return (
      <section className="cookie-popup">

         <section className="wrap">

            <span className="icon"><BiCookie /></span>
            <h1>We're using cookies</h1>
            <p>We only use cookies that are necessary to this site's functionality.</p>
            <Button text='I understand' action={ confirmCookie } />

         </section>

      </section>
   )
}

export default CookiePopup