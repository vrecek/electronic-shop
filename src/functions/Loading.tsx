abstract class Loading {
   protected className: string
   protected currentAppended: HTMLElement | undefined

   public abstract append( element: HTMLElement ): void
   public abstract remove(): void

   public constructor(className: string) {
      this.className = className
   }
}

interface CircleStyleType {
   backgroundClr?: string,
   clr1?: string,
   clr2?: string,
   position?: 'fixed' | 'containerWidth' | 'containerHeight',
   width?: string,
   height?: string,
   borderRadius?: string
}

export class LoadingCss extends Loading {
   private span1: HTMLSpanElement
   private span2: HTMLSpanElement
   private div: HTMLDivElement

   public constructor(className: string) {
      super(className)

      this.span1 = document.createElement('span')
      this.span2 = document.createElement('span')
      this.div = document.createElement('div')
   } 

   public defaultStyleCircle(circleStyles?: CircleStyleType): void {
      const appliedStyles: CircleStyleType = { 
         backgroundClr: circleStyles?.backgroundClr ?? 'rgba(30, 30, 30, .9)',
         clr1: circleStyles?.clr1 ?? 'royalblue',
         clr2: circleStyles?.clr2 ?? 'cornflowerblue',
         position: circleStyles?.position ?? 'fixed',
         width: circleStyles?.width ?? '',
         height: circleStyles?.height ?? '',
         borderRadius: circleStyles?.borderRadius ?? '2.5em'
      }

      const { backgroundClr, clr1, clr2, position, width, height, borderRadius } = appliedStyles

      const id: string = Math.random().toString(36).substring(2, 12)
      this.div.id = id

      let pos, w, h
      let mw: string = '100px'

      if(position === 'fixed') {
         pos = 'fixed'
         w = width || 'clamp(120px, 30vw, 180px)'

      }else if(position === 'containerWidth') {
         pos = 'absolute'
         w = width || '50%'

      }else if(position === 'containerHeight') {
         pos = 'absolute'
         h = height || '80%'
         mw = 'auto'
      }

      Object.assign(this.div.style, {
         position: pos,
         left: '0',
         top: '0',
         width: '100%',
         height: '100%',
         background: backgroundClr,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         zIndex: '9999'
      })

      Object.assign(this.span1.style, {
         background: clr1,
         borderRadius,
         position: 'relative',
         width: w ?? 'auto',
         height: h ?? 'auto',
         minWidth: mw,
         aspectRatio: 1
      })

      Object.assign(this.span2.style, {
         background: clr2,
         position: 'absolute',
         left: '50%',
         top: '50%',
         borderRadius: '50%',
         transform: 'translate(-50%, -50%)',
         width: '80%',
         height: '80%'
      })

      this.span1.animate([
         { transform: 'rotate(0deg)' },
         { transform: 'rotate(360deg)' }
      ], {
         duration: 3000,
         iterations: Infinity
      })
   }

   public append(element: HTMLElement, appendFirst?: boolean): void {
      this.div.className = this.className

      this.span1.appendChild(this.span2)
      this.div.appendChild(this.span1)

      this.currentAppended = this.div

      if(appendFirst) {
         element.prepend(this.div)
         return
      }

      element.appendChild(this.div)
   }

   public remove(): void {
      if(!this.currentAppended) return

      this.currentAppended.remove()
   }
}

export class LoadingImage extends Loading {
   private src: string

   public constructor(gifSrc: string, className?: string) {
      super(className ?? '')

      this.src = gifSrc
   } 

   public append(element: HTMLElement): void {
      const img = document.createElement('img')
      const div = document.createElement('div')

      div.className = this.className

      img.src = this.src

      div.appendChild(img)

      this.currentAppended = div
      element.appendChild(div)
   }

   public remove(): void {
      if(!this.currentAppended) return

      this.currentAppended.remove()
   }
}