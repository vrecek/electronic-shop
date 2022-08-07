interface ElementColors {
   color?: string,
   background?: string
}

type color = 'color' | 'background'

export default class DropDown {
   private active: boolean
   private activeList: {
      item: HTMLElement,
      id: string
   } | null

   private activeColors?: ElementColors
   private defaultColors?: ElementColors

   private changeColors(element: HTMLElement, isActive: boolean): void {
      if(!this.defaultColors) {
         const clr = window.getComputedStyle(element, null).getPropertyValue('color')
         const back = window.getComputedStyle(element, null).getPropertyValue('background-color')

         this.defaultColors = {
            color: clr,
            background: back
         }
      }
      
      const clrObject = isActive ? this.activeColors : this.defaultColors

      for(let x in clrObject) {
         const c = x as color
         element.style[c] = `${ clrObject[c] }`
      }
   }

   private randomId(): string {
      const chars: string = 'abcdefghijklmnoprstuwvxyzABCDEFGHIJKLMNOPRSTUWVXYZ1234567890'
      const len: number = chars.length

      let output: string = ''
      for(let i = 0; i < 6; i++) {
         output += chars[Math.floor(Math.random() * len) + 1]
      }

      return output
   }

   private filterExpand(x: string): boolean {
      if(/[0-9.]/ig.test(x)) return true

      return false
   }

   public constructor(activeColors?:ElementColors) {
      this.active = false
      this.activeColors = activeColors
      this.activeList = null
   }

   /*
      list MUST BE:
         -height: 0
         -display: none
         -overflow: hidden
   */
   public expandMenu(clickedList: HTMLElement, hiddenList: HTMLElement, display?: 'block' | 'flex'): void {
      if(!this.active) return

      if(this.activeColors) this.changeColors(clickedList, true)

      hiddenList.style.height = 'auto'
      hiddenList.style.display = display || 'block'
      
      const height: number =  parseFloat(
                                 window.getComputedStyle(hiddenList, null).getPropertyValue('height')
                                 .split('')
                                 .filter(x => this.filterExpand(x) )
                                 .join('')
                              )

      hiddenList.style.height = '0'
         
      setTimeout(() => {
         const id: string = this.randomId()

         hiddenList.setAttribute('_expand_', id)

         this.activeList = {
            item: hiddenList,
            id
         }

         hiddenList.style.height = `${ height }px`
      }, 5);
   }

   public shrinkMenu(yourTransitionSecs: number, clickedList?: HTMLElement): void {
      if(this.active || !this.activeList) return
      if(this.activeColors && clickedList) this.changeColors(clickedList, false)

      const { item } = this.activeList

      item.style.height = '0px'
      this.activeList = null

      setTimeout(() => {
         item.style.display = 'none'
      }, yourTransitionSecs * 1000);
   }  

   public rotateArrow(arrow: HTMLElement): void {
      if(this.active) {
         arrow.style.transform = 'rotate(180deg)'
         return
      }

      arrow.style.transform = 'rotate(0)'
   }

   public switchActive(): void { this.active = !this.active }

   public get getActive(): boolean { return this.active }
}