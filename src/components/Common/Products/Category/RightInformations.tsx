import React from 'react'
import { DetermineRightReturn, PossibleHomepageCategory } from '../../../../interfaces/ReusableInterfaces'
import FigureImage from '../../FigureImage'
import gamingImg from '../../../../images/productsCategoryRight/gaming.jpg'
import householdImg from '../../../../images/productsCategoryRight/household.jpg'
import workImg from '../../../../images/productsCategoryRight/work.jpg'
import * as jsx from './RightJSX'
import { useNavigate } from 'react-router-dom'

const RightInformations = ({ category }: { category: PossibleHomepageCategory }) => {
   const n = useNavigate()

   const determineContent = (): DetermineRightReturn => {
      let img: string = ''
      let ele: JSX.Element = <></>
      
      switch(category) {
         case 'gaming':
            img = gamingImg 
            ele = jsx.RightJSXGaming(n)
         break;
         
         case 'work':
            img = workImg 
            ele = jsx.RightJSXWork(n)
         break;

         case 'household':
            img = householdImg 
            ele = jsx.RightJSXHousehold(n)
         break;
      }

      return { imgSrc: img, element: ele }
   }

   const { imgSrc, element } = determineContent()

   return (
      <aside className="right-informations">

         <FigureImage source={ imgSrc } altTxt='Category Recommended' />
         { element }

      </aside>
   )
}

export default RightInformations