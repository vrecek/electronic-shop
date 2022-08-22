import React from 'react'
import { UserContext } from '../../App'
import AppendResult from '../../functions/AppendText'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import Button from '../Common/Button'

const Management = ({ userId }: { userId: string }) => {
   let deleted: boolean = false
   const ar: AppendResult = new AppendResult('h6')

   const deleteAccount = async (e: React.MouseEvent) => {
      if(deleted) return

      const t = e.target as HTMLElement

      if(!ar.isAppended()) {
         ar.setMessage = 'Are you sure? This proccess cannot be reversed'
         ar.appendTo(t, 2.5)

         return
      }

      ar.removeAppended()

      deleted = true
      
      const l = new LoadingCss('')
      l.defaultStyleCircle({ position: 'containerHeight' })
      l.append(t)

      try {
         await Fetches.mix(`${ process.env.REACT_APP_API_USER_DELETE_ACCOUNT }/${ userId }`, 'DELETE')
         ar.setMessage = 'Successfully deleted account'
         window.location.pathname = '/'

      }catch(err: any) {
         deleted = false
         ar.setMessage = err.json.msg

      }finally {
         l.remove()
         ar.appendTo(t, 2)
      }
   }

   return (
      <section className="manage-section">

         <h1 className="header">Manage account</h1>

         <Button action={ deleteAccount } text='Delete account' />

      </section>
   )
}

export default Management