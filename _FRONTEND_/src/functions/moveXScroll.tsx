import { Direction } from "../interfaces/ReusableInterfaces";

const moveXScroll = (e: React.MouseEvent, type: Direction, parentNum: number) => {
   if(parentNum <= 0) return

   const t = e.target as HTMLElement
   let parent: HTMLElement | null = null
   
   for(let i = 0; i < parentNum; i++) {
      if(!parent) {
         parent = t.parentElement!
         continue
      }

      parent = parent.parentElement!
   }
   
   if(!parent) return

   const movingContainer: HTMLElement = parent.children[1] as HTMLElement
   const prodWidth: number = movingContainer.children[0].clientWidth

   movingContainer.scrollLeft += type === 'left' ? -prodWidth : prodWidth
}

export default moveXScroll