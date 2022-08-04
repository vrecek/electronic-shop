import React from 'react'
import '../../../css/LayoutFooter.css'
import { NavigationLinkType } from '../../../interfaces/NavigationInterfaces'
import FooterIcons from './FooterIcons'
import FooterList from './FooterList'
import FooterLogo from './FooterLogo'

const LayoutFooter = () => {
   const list1: NavigationLinkType[] = [
      {
         name: 'Search products',
         url: '/'
      },

      {
         name: 'Latest',
         url: '/'
      },
      
      {
         name: 'On sale',
         url: '/'
      },

      {
         name: 'Popular',
         url: '/'
      }
   ]

   const list2: NavigationLinkType[] = [
      {
         name: 'Homepage',
         url: '/'
      },

      {
         name: 'Contact',
         url: '/'
      },
      
      {
         name: 'Terms & Conditions',
         url: '/'
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