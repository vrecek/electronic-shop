import React from 'react'
import { FilterType } from '../../interfaces/SearchInterfaces'

const FilterSection = ({ text, i1, i2, cname }: FilterType) => {
   return (
      <section className="select">

         <h2>{ text }</h2>

         <div className='wrap'>
            
            <div>

               <input className={ cname } type="radio" id={ i1.id } name='filter-input' />
               <label htmlFor={ i1.id }>{ i1.text }</label>

            </div>

            <div>
               
               <input className={ cname } type="radio" id={ i2.id } name='filter-input'/>
               <label htmlFor={ i2.id }>{ i2.text }</label>

            </div>

         </div>

      </section>
   )
}

export default FilterSection