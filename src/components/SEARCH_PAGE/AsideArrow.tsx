import React from 'react'
import { RiArrowDropRightLine } from 'react-icons/ri'

const AsideArrow = () => {
   const expandFilters = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      const cont: HTMLElement = t.parentElement as HTMLElement

      cont.classList.toggle('expanded')

      if(cont.classList.contains('expanded')) {
         cont.style.transform = 'translateX(0)'
         t.style.transform = 'translateY(-50%) translateX(-100%) rotate(180deg)'
         return
      }

      cont.style.transform = 'translateX(-100%)'
      t.style.transform = 'translateY(-50%) translateX(0) rotate(0)'
   }

   return (
      <span onClick={ expandFilters } className="arrow">

         <RiArrowDropRightLine />

      </span>
   )
}

export default AsideArrow