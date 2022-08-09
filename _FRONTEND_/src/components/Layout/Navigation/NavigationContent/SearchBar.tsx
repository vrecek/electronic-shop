import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import NavigateClass from '../../../../functions/NavigateClass'

const SearchBar = () => {
   const n = useNavigate()
   const nc = new NavigateClass()

   const searchEnter = (e: React.KeyboardEvent) => {
      const t = e.target as HTMLInputElement
      const { value } = t

      if(value.length <= 1) return

      nc.searchNavigateEnter(e, n, `/search/b/${ value }`)
   }

   return (
      <section className="search-container">

         <input onKeyDown={ searchEnter } type="text" placeholder='Search products...' />

         <div className="icon">
            <FiSearch />
         </div>

      </section>
   )
}

export default SearchBar