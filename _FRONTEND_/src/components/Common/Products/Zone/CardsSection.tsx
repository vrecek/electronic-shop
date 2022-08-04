import React from 'react'
import { PossibleHomepageCategory, ZoneCardDetails } from '../../../../interfaces/ReusableInterfaces'
import ZoneCard from './ZoneCard'
import returnCardDetails from './ZoneCardDetermine'

const CardsSection = ({ category }: { category: PossibleHomepageCategory }) => {
   const cards: ZoneCardDetails[] = returnCardDetails(category)

   return (
      <section className="cards">

         {
            cards.map((x, i) => (
               <ZoneCard 
                  key={ i }
                  txt={ x.txt }
                  image={ x.image }
                  url={ x.url }
               />
            ))
         }

      </section>
   )
}

export default CardsSection