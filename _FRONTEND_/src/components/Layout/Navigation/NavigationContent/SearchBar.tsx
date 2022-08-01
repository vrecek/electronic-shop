import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
   return (
      <section className="search-container">

         <input type="text" placeholder='Search products...' />

         <div className="icon">
            <FiSearch />
         </div>

      </section>
   )
}

export default SearchBar