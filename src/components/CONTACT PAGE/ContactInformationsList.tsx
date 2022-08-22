import React from 'react'
import InfoList from './InfoList'
import { BsFillDoorOpenFill, BsFillTelephoneForwardFill } from 'react-icons/bs'
import { GoMail } from 'react-icons/go'
import { DiGithubAlt } from 'react-icons/di'
import { BiCopy } from 'react-icons/bi'

const ContactInformationsList = () => {
   const MAIL: string = 'loremipsum@gmail.com'

   const openGthb = () => window.open('https://github.com/vrecek', 'blank')

   const animateCopy = (t: HTMLElement) => {
      t.style.transform = 'scale(.5)'

      setTimeout(() => t.style.transform = 'scale(1)', 300);
   }

   const copyToClipboard = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      window.navigator.clipboard.writeText(MAIL)
      animateCopy(t)

      const children: Element[] = Array.from(t.children)
      if(children.some(x => x.tagName === 'H6')) return

      const h6 = document.createElement('h6')
      h6.textContent = 'Copied!'

      t.appendChild(h6)

      setTimeout(() => h6.remove(), 2000)
   }

   return (
      <ul>

         <InfoList icon={ <BsFillTelephoneForwardFill /> }>
            997-456-765
         </InfoList>

         <InfoList icon={ <GoMail /> }>
            { MAIL }
            <span onClick={ copyToClipboard } className="copy-mail"><BiCopy /></span>
         </InfoList>

         <InfoList icon={ <DiGithubAlt /> }>
            Github account
            <span onClick={ openGthb } className="gth-open">
               <BsFillDoorOpenFill />
            </span>
         </InfoList>

      </ul>
   )
}

export default ContactInformationsList