import React from 'react'
import shuffleArray from '../../functions/shuffleArray'
import { Inputs } from '../../interfaces/ReusableInterfaces'
import { FilterAsideType, FilterInput, SearchedProductType } from '../../interfaces/SearchInterfaces'
import Button from '../Common/Button'
import AsideArrow from './AsideArrow'
import FilterSection from './FilterSection'

const AsideFilters = ({ original, state }: FilterAsideType) => {
   const price: FilterInput[] = [
      {
         id: 'price-asc',
         text: 'Ascending'
      },

      {
         id: 'price-desc',
         text: 'Descending'
      }
   ]
   const alphabet: FilterInput[] = [
      {
         id: 'alphabet-az',
         text: 'A - Z'
      },

      {
         id: 'alphabet-za',
         text: 'Z - A'
      }
   ]
   const views: FilterInput[] = [
      {
         id: 'views-highest',
         text: 'Highest'
      },

      {
         id: 'views-lowest',
         text: 'Lowest'
      }
   ]

   const resetFilters = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement
      const form = t.parentElement!.children[1] as HTMLFormElement

      for(let x of Array.from(form.elements as Inputs)) x.checked = false
   }

   const applyFilters = (e: React.MouseEvent) => {
      const t = e.target as HTMLElement

      const form = t.parentElement!.children[1] as HTMLFormElement
      const elements = Array.from(form.elements as Inputs)

      const [priceAsc, priceDesc] = elements.filter(x => x.className === 'price').map(x => x.checked)
      const [az, za] = elements.filter(x => x.className === 'alpha').map(x => x.checked)
      const [viewsHigh, viewsLow] = elements.filter(x => x.className === 'views').map(x => x.checked)

      let copyOriginal: SearchedProductType[] = shuffleArray([...original])

      // BY PRICE
      if(priceAsc) copyOriginal = copyOriginal.sort((a, b) => a.price - b.price)
      else if(priceDesc) copyOriginal = copyOriginal.sort((a, b) => b.price - a.price)


      // BY NAME
      else if(az || za) {
         let alphabetically: boolean = az ? true : false

         const sortFunc = (a: SearchedProductType, b: SearchedProductType): number => {
            const aLower: string = a.name.toLowerCase(), bLower: string = b.name.toLowerCase()

            if(aLower < bLower) return alphabetically ? -1 : 1
            if(aLower > bLower) return alphabetically ? 1 : -1

            return 0
         }

         copyOriginal = copyOriginal.sort(sortFunc)
      }
      

      // BY VIEWS
      else if(viewsHigh) copyOriginal = copyOriginal.sort((a, b) => b.views - a.views)
      else if(viewsLow) copyOriginal = copyOriginal.sort((a, b) => a.views - b.views)

      state((curr: any) => {
         curr.data.items = copyOriginal

         return {...curr}
      })
   }

   return (
      <aside className="filters">

         <h1>Filter products ({ original.length })</h1>

         <form onSubmit={ (e) => e.preventDefault() }>

            <FilterSection
               text='Price'
               i1={ price[0] }
               i2={ price[1] }
               cname='price'
            />

            <FilterSection
               text='Alphabet'
               i1={ alphabet[0] }
               i2={ alphabet[1] }
               cname='alpha'
            />

            <FilterSection
               text='Views'
               i1={ views[0] }
               i2={ views[1] }
               cname='views'
            />

         </form>

         <Button action={ resetFilters } cname='reset' text='Reset' />
         <Button action={ applyFilters } cname='apply' text='Apply' />

         <AsideArrow />

      </aside>
   )
}

export default AsideFilters