import React from 'react'
import { DetailsBody } from '../../../interfaces/ProductPageInterfaces'

const TableBody = ({ technical, functions }: DetailsBody) => {
   const len: number = Math.max(technical.length, functions.length)

   return (
      <tbody>

         {
            [...Array(len)].map((x, i) => (
               <tr key={ i }>
                  {
                     technical[i] 
                     ? <td>{ technical[i]  }</td>
                     : <td></td>
                  }

                  {
                     functions[i] 
                     ? <td>{ functions[i] }</td>
                     : <td></td>
                  }
               </tr>
            ))
         }

      </tbody>
   )
}

export default TableBody