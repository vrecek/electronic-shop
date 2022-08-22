import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const CurrentLocation = ({ isFinal }: { isFinal?: boolean }) => {
   const n = useNavigate()
   
   return (
      <ul className='current-location'>

         <li className='text' onClick={ () => n('/') }>Home</li>
         <li className='icon'><span><MdKeyboardArrowRight /></span></li>
         
         {
            isFinal
            ?
               <>
                  <li className='current text'>Basket</li>

                  <li className='icon'><span><MdKeyboardArrowRight /></span></li>

                  <li className="current text">Summary</li>

                  <li className='icon'><span><MdKeyboardArrowRight /></span></li>

                  <li className="current text">Final</li>
               </>
            :
               <>
                  <li className='text' onClick={ () => n('/basket') }>Basket</li>

                  <li className='icon'><span><MdKeyboardArrowRight /></span></li>

                  <li className="current text">Summary</li>
               </>
         }

      </ul>
   )
}

export default CurrentLocation