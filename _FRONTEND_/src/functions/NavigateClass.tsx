import { NavigateFunction } from "react-router-dom";

interface HelperReturn {
   key: string,
   value: string
}

export default class NavigateClass {

   private searchHelper(ev: KeyboardEvent | React.KeyboardEvent): HelperReturn {
      const { key } = ev

      const target = ev.target as HTMLInputElement
      const value: string = target?.value ?? ''

      return { key, value }
   }

   public searchNavigateEnter(ev: KeyboardEvent | React.KeyboardEvent, navigate: NavigateFunction, url: string, cb?: () => void) {
      const { key, value } = this.searchHelper(ev)

      if(key === 'Enter' && value) {
         if(cb) cb()

         navigate(url, { replace: true })
      }   
   }

   public searchNavigateCorrect(ev: KeyboardEvent | React.KeyboardEvent, correctPass: string, cb: () => void) {
      const { key, value } = this.searchHelper(ev)

      if(key === 'Enter' && value === correctPass) {
         cb()
      }   
   }

}