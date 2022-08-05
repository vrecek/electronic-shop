import React from 'react'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'

const LayoutWrap = ({ children }: { children: any }) => {
   return (
      <>

         <LayoutNavigation />
      
         { children }

         <LayoutFooter />
      
      </>
   )
}

export default LayoutWrap