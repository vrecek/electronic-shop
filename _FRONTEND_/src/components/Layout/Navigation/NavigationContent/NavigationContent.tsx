import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'
import SearchBar from './SearchBar'

const NavigationContent = () => {
   return (
      <main className="nav-main-content">

         <LeftContent />
         <SearchBar />
         <RightContent />

      </main>
   )
}

export default NavigationContent