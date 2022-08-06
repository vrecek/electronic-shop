import React from 'react'
import { LayoutWrapType } from '../../interfaces/NavigationInterfaces'
import LayoutFooter from './Footer/LayoutFooter'
import LayoutNavigation from './Navigation/LayoutNavigation'
import NavigationStrap from './Navigation/NavigationStrap/NavigationStrap'

const LayoutWrap = ({ children, onlyStrap }: LayoutWrapType) => {
   return (
      <>

         {
            onlyStrap
            ?
            <NavigationStrap />
            :
            <LayoutNavigation />
         }
      
            { children }

         <LayoutFooter />
      
      </>
   )
}

export default LayoutWrap