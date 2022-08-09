import React from 'react'
import { FilterInput } from '../../interfaces/SearchInterfaces'
import Button from '../Common/Button'
import FilterSection from './FilterSection'

const AsideFilters = () => {
   const price: FilterInput[] = [
      {
         name: 'price',
         id: 'price-asc',
         text: 'Ascending'
      },

      {
         name: 'price',
         id: 'price-desc',
         text: 'Descending'
      }
   ]

   const alphabet: FilterInput[] = [
      {
         name: 'alphabet',
         id: 'alphabet-az',
         text: 'A - Z'
      },

      {
         name: 'alphabet',
         id: 'alphabet-za',
         text: 'Z - A'
      }
   ]

   const views: FilterInput[] = [
      {
         name: 'views',
         id: 'views-highest',
         text: 'Highest'
      },

      {
         name: 'views',
         id: 'views-lowest',
         text: 'Lowest'
      }
   ]

   return (
      <aside className="filters">

         <h1>Filter products (999)</h1>

         <FilterSection
            text='Price'
            i1={ price[0] }
            i2={ price[1] }
         />

         <FilterSection
            text='Alphabet'
            i1={ alphabet[0] }
            i2={ alphabet[1] }
         />

         <FilterSection
            text='Views'
            i1={ views[0] }
            i2={ views[1] }
         />

         <Button cname='reset' text='Reset' />
         <Button cname='apply' text='Apply' />

      </aside>
   )
}

export default AsideFilters