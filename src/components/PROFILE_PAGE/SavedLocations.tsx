import React from 'react'
import { LocationState } from '../../interfaces/ProfileInterfaces'
import ProfileLocation from './ProfileLocation'

const SavedLocations = ({ locations, setState }: LocationState) => {
   return (
      <section className="saved-locations">

         <h1 className='header'>Saved locations ({ locations.length })</h1>
         
         {
            locations.length
            ?
               locations.map((x, i) => (
                  <ProfileLocation 
                     key={ i }
                     locations={ x }
                     setState={ setState }
                  />
               ))
            :
            <h2 className='no-locations'>No saved locations</h2>
         }

      </section>
   )
}

export default SavedLocations