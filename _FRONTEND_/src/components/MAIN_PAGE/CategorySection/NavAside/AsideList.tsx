import React from 'react'
import { NavAsideListType } from '../../../../interfaces/HomepageInterfaces'
import OuterDiv from './OuterDiv'

const AsideList = ({ content }: { content: NavAsideListType }) => {
   return (
      <li className='outer-li'>
         
         <OuterDiv category={ content.outerDiv.category } />

      </li>
   )
}

export default AsideList