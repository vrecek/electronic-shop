import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { FaGithubSquare } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { FooterIconsType } from '../../../interfaces/FooterInterfaces'

const FooterIcons = () => {
   const icons: FooterIconsType[] = [
      {
         url: 'https://github.com/vrecek',
         icon: <FaGithubSquare />
      },

      {
         url: '/',
         icon: <AiFillFacebook />
      },

      {
         url: '/',
         icon: <AiFillTwitterSquare />
      },

      {
         url: '/',
         icon: <AiFillInstagram />
      },
   ]

   return (
      <div className="icons">

         {
            icons.map((x, i) => (
               <span key={ i } onClick={ () => window.open(x.url, 'blank') }>
                  { x.icon }
               </span>
            ))
         }

      </div>
   )
}

export default FooterIcons