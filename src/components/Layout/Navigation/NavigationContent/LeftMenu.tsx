import React from 'react'
import { MenuContext } from '../LayoutNavigation'

const LeftMenu = () => {
   const menu = React.useContext(MenuContext)
   let toggled: boolean = false

   const toggleMenu = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const hiddenMenu = menu!.current

      if(!hiddenMenu) return

      toggled = !toggled

      const values: number[][] = [
         toggled ? [38, 38, 135] : [0, 0, 0],
         toggled ? [50, 50, 50] : [10, 50, 90]
      ]
      const spans = Array.from(t.children as HTMLCollectionOf<HTMLElement>)

      for(let [i, x] of Object.entries(spans)) {
         const int: number = parseInt(i)

         x.style.top = `${ values[1][int] }%`
         x.style.transform = `translateY(-50%) rotate(${ values[0][int] }deg)`
      }

      hiddenMenu.style.transform = `translateX(${ toggled ? 0 : 100 }%)`
   }

   return (
      <div onClick={ toggleMenu } className="menu-icon">

         <span></span>
         <span></span>
         <span></span>

      </div>
   )
}

export default LeftMenu