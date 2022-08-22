import React from 'react'
import { FiSearch } from 'react-icons/fi'
import SearchbarComponent from '../SearchbarComponent'

const SearchBar = () => {
   return (
      <section className="search-container">

         <SearchbarComponent />

         <div className="icon">
            
            <FiSearch />

         </div>

      </section>
   )
}

export default SearchBar