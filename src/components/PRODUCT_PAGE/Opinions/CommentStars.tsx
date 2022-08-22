import React from 'react'
import { AiFillStar } from 'react-icons/ai'
import { State } from '../../../interfaces/ReusableInterfaces'

const CommentStars = ({ state }: { state: State<number> }) => {
   const setRate = (e: React.MouseEvent, num: number) => {
      const t = e.target as HTMLElement
      const children: Element[] = Array.from(t.parentElement!.children)

      for(let i = 0; i < 5; i++) {
         children[i].className = ''

         if(i <= num - 1) {
            children[i].className = 'active'
         }
      }

      state(num)
   }

   return (
      <div className="stars">

         {
            [...Array(5)].map((x, i) => (
               <span key={ i } onClick={ (e) => setRate(e, i + 1) }>
                  <AiFillStar />
               </span>
            ))
         }

      </div>
   )
}

export default CommentStars