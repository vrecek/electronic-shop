import React from 'react'
import { NavAsideListType } from '../../../../interfaces/HomepageInterfaces'
import '../../../../css/HiddenNavCategoryContent.css'
import OuterDiv from './OuterDiv'

const AsideList = ({ content }: { content: NavAsideListType }) => {
   return (
      <li className='outer-li'>
         
         <OuterDiv category={ content.category } />
         { content.hiddenContent }

      </li>
   )
}

export default AsideList