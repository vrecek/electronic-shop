import React from 'react'
import { useNavigate } from 'react-router-dom'
import getCookieArray from '../../../functions/getCookieArray'
import NavigateClass from '../../../functions/NavigateClass'
import { Ref } from '../../../interfaces/ReusableInterfaces'

const SearchbarComponent = ({ }) => {
   const resultsCont: Ref<HTMLUListElement> = React.useRef<HTMLUListElement>(null)
   const n = useNavigate()
   const nc = new NavigateClass()
   const results: string[] = getCookieArray('sblr')
   
   let currentFocus: boolean = false

   const clearSearchResults = (): void => {
      const cont = resultsCont.current!
      for(let x of Array.from(cont.children)) x.remove()

      cont.style.display = 'none'
   }
   const displayResults = (arr?: string[]): void => {
      const cont = resultsCont.current!

      cont.style.display = 'block'

      for(let x of arr ?? results.slice(0, 10)) {
         const li = document.createElement('li')

         li.textContent = x
         li.addEventListener('mouseover', () => currentFocus = true)
         li.addEventListener('mouseout', () => currentFocus = false)
         li.addEventListener('click', () => {
            clearSearchResults()

            n(`/search/b/${ x }`)
         })

         cont.appendChild(li)
      }
   }


   const searchEnter = (e: React.KeyboardEvent) => {
      const t = e.target as HTMLInputElement
      const { value } = t

      if(value.length <= 1) return

      clearSearchResults()

      nc.searchNavigateEnter(e, n, `/search/b/${ value }`)
   }

   const focusFunc = (): void => {
      if(!results.length) return

      displayResults()
   }

   const blurFunc = (): void => {
      if(currentFocus) return

      clearSearchResults()
   }

   const keyFunc = (e: React.ChangeEvent): void => {
      const t = e.target as HTMLInputElement
      const { value } = t

      const regex: RegExp = new RegExp(value, 'i')
      const newResults: string[] = results.filter(x => regex.test(x))

      if(value.length <= 1 || !newResults.length) {
         clearSearchResults()
         return
      }
      
      displayResults(newResults)
   }

   return (
      <>
         <input 
            onChange={ keyFunc }
            onBlur={ blurFunc } 
            onFocus={ focusFunc } 
            spellCheck='false' 
            onKeyDown={ searchEnter } 
            type="text" 
            placeholder='Search products...' 
         />

         <ul ref={ resultsCont } className='last-results'>

         </ul>
      </>
   )
}

export default SearchbarComponent