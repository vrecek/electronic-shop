import React from 'react'
import { CredentialsType } from '../../interfaces/ProfileInterfaces'

const Credentials = (props: CredentialsType) => {
   const vals = Object.values(props)

   return (
      <section className="credentials-section">

         <h1 className="header">Credentials</h1>

         <table>

            <tbody>
               
               {
                  Object.keys(props).map((x, i) => (
                     <tr key={ i }>
                        <td>{ x }</td>
                        <td>{ vals[i] }</td>
                     </tr>
                  ))
               }

            </tbody>
         
         </table>

      </section>
   )
}

export default Credentials