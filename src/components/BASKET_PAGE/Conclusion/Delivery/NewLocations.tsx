import React from 'react'
import '../../../../css/NewLocations.css'
import InputDiv from '../../../ADMIN/Login/InputDiv'

const NewLocations = () => {
   return (
      <section className="inputs-new-locations">

         <InputDiv cname='location-input' label='Name' type='text' />
         <InputDiv cname='location-input' label='Surname' type='text' />
         <InputDiv cname='location-input' label='Phone number' type='number' />

         <div className="delivery-wrap">

            <InputDiv cname='location-input' label='Country' type='text' />
            <InputDiv cname='location-input' label='City' type='text' />

         </div>

         <InputDiv cname='location-input' label='Zip code' type='text' />

         <InputDiv cname='location-input' label='Street' type='text' />
         
         <div className="delivery-wrap">

            <InputDiv cname='location-input' label='Building nr' type='number' />
            <InputDiv cname='location-input' label='Apartament nr' type='number' />

         </div>

         <div className='save'>

            <input type="checkbox" id='save' />
            <label htmlFor="save">Save for further orders</label>
            
         </div>

      </section>
   )
}

export default NewLocations