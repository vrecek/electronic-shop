import React from 'react'
import { FaSearch } from 'react-icons/fa'
import SearchbarComponent from '../../SearchbarComponent'

const MenuSearch = () => {
   return (
      <section className="menu-search">

         <SearchbarComponent />

         <span><FaSearch /></span>

      </section>
   )
}

export default MenuSearch