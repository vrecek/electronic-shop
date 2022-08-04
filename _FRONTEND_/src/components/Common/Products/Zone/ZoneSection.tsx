import React from 'react'
import { PossibleHomepageCategory } from '../../../../interfaces/ReusableInterfaces'
import '../../../../css/ZoneSection.css'
import EntryZoneInfo from './EntryZoneInfo'
import CardsSection from './CardsSection'

const ZoneSection = ({ category }: { category: PossibleHomepageCategory }) => {
   return (
      <section className="zone-section">

         <EntryZoneInfo category={ category } />

         <CardsSection category={ category } />

      </section>
   )
}

export default ZoneSection