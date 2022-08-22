type ElementsType = 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1'

class AppendResult {
   private message: string
   private element: ElementsType
   private cname: string
   private isElementAppended: boolean

   private appendedElement: Element | null
   private timeout: NodeJS.Timer | null

   public constructor(element: ElementsType, cname?: string) {
      this.message = 'No message set'
      this.isElementAppended = false
      this.cname = cname ?? ''
      this.element = element

      this.timeout = null
      this.appendedElement = null
   }

   
   private nullProperties(): void {
      this.appendedElement = null
      this.timeout = null
      this.isElementAppended = false
   }


   public appendTo(appendTo: HTMLElement, removeAfterSeconds?: number): void {
      if(this.isElementAppended) return

      const elem = document.createElement( this.element )
      elem.className = this.cname
      elem.textContent = this.message

      appendTo.appendChild( elem )

      this.isElementAppended = true
      this.appendedElement = elem

      if(!removeAfterSeconds) return

      this.timeout = setTimeout( () => {
         elem.remove()
         this.nullProperties()
      }, removeAfterSeconds * 1000 )
   }


   public isAppended(): boolean {
      return this.isElementAppended
   }


   public removeAppended(): void {
      if(!this.isElementAppended || !this.appendedElement) return

      if(this.timeout) clearTimeout(this.timeout)
      
      this.appendedElement.remove()
      this.nullProperties()
   }


   public set setMessage(msg: string) {
      this.message = msg
   }
}

export default AppendResult