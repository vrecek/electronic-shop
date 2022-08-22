import React from 'react'
import { MdArrowDropUp } from 'react-icons/md'
import '../../css/ArrowTop.css'
import { Ref } from '../../interfaces/ReusableInterfaces'

const ArrowTop = () => {
   const arrowRef: Ref<HTMLSpanElement> = React.useRef<HTMLSpanElement>(null)

   React.useEffect(() => {
      const c = arrowRef.current!
      let isVisible: boolean = false
      
      window.addEventListener('scroll', () => {
         if(window.scrollY >= 400 && !isVisible) {
            isVisible = true
            c.style.opacity = '1'
            c.style.pointerEvents = 'all'
         }
         else if(window.scrollY < 400 && isVisible) {
            isVisible = false
            c.style.opacity = '0'
            c.style.pointerEvents = 'none'
         }
      })
   }, [])

   return (
      <span onClick={ () => window.scrollTo(0, 0) } ref={ arrowRef } className="arrow-top-layout">

         <MdArrowDropUp />

      </span>
   )
}

export default ArrowTop