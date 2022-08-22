import React from 'react'
import '../../../css/LayoutFooter.css'
import { NavigationLinkType } from '../../../interfaces/NavigationInterfaces'
import FooterIcons from './FooterIcons'
import FooterList from './FooterList'
import FooterLogo from './FooterLogo'

const LayoutFooter = () => {
   const list1: NavigationLinkType[] = [
      {
         name: 'Latest',
         url: '/search/s/latest'
      },
      
      {
         name: 'On sale',
         url: '/search/s/sale'
      },

      {
         name: 'Popular',
         url: '/search/s/popular'
      }
   ]

   const list2: NavigationLinkType[] = [
      {
         name: 'Homepage',
         url: '/'
      },

      {
         name: 'Contact',
         url: '/contact'
      },
      
      {
         name: 'Terms & Conditions',
         url: '/terms-and-conditions'
      }
   ]

   return (
      <footer className="layout-footer">

         <section className="left">

            <FooterLogo />
            <FooterIcons />

         </section>

         <FooterList list={ list1 } />
         <FooterList list={ list2 } />

      </footer>
   )
}

export default LayoutFooter