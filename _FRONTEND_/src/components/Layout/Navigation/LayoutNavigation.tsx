import React from 'react'
import NavigationContent from './NavigationContent/NavigationContent'
import NavigationStrap from './NavigationStrap/NavigationStrap'
import '../../../css/LayoutNavigation.css'
import HiddenMenu from './NavigationContent/HiddenMenu/HiddenMenu'
import { Ref } from '../../../interfaces/ReusableInterfaces'

const MenuContext = React.createContext<Ref<HTMLElement> | null>(null)

const LayoutNavigation = () => {
   const menuRef: Ref<HTMLElement> = React.useRef<HTMLElement>(null)

   return (
      <nav className="layout-navigation">

         <MenuContext.Provider value={ menuRef }>    

            <NavigationStrap />
            <NavigationContent />

            <HiddenMenu menuRef={ menuRef } />

         </MenuContext.Provider>

      </nav>
   )
}

export default LayoutNavigation
export { MenuContext }