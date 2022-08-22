import React from 'react'
import { BiCog, BiPurchaseTagAlt } from 'react-icons/bi'
import { BsFillKeyFill } from 'react-icons/bs'
import { MdOutlineSaveAlt } from 'react-icons/md'
import { scroller } from 'react-scroll'
import { ContentsInfo } from '../../interfaces/ProfileInterfaces'

const TableOfContents = ({ nick }: ContentsInfo) => {
   const scroll = (to: string) => scroller.scrollTo(to, {})

   return (
      <section className="entry-left">

         <h1 className='header'>Welcome, { nick }</h1>

         <ul>
      
            <li onClick={ () => scroll('credentials-section') }> <span><BsFillKeyFill /></span> Account credentials</li>
            <li onClick={ () => scroll('saved-locations') }> <span><MdOutlineSaveAlt /></span> Saved locations</li>
            <li onClick={ () => scroll('purchase-history') }> <span><BiPurchaseTagAlt /></span> Purchase history</li>
            <li onClick={ () => scroll('manage-section') }> <span><BiCog /></span> Manage account</li>

         </ul>

      </section>
   )
}

export default TableOfContents