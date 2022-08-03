import React from 'react'
import { DetermineRightReturn, PossibleHomepageCategory } from '../../../../interfaces/ReusableInterfaces'
import FigureImage from '../../FigureImage'
import gamingImg from '../../../../images/productsCategoryRight/gaming.jpg'
import householdImg from '../../../../images/productsCategoryRight/household.jpg'
import workImg from '../../../../images/productsCategoryRight/work.jpg'
import * as jsx from './RightJSX'

const RightInformations = ({ category }: { category: PossibleHomepageCategory }) => {
   const determineContent = (): DetermineRightReturn => {
      let img: string = ''
      let ele: JSX.Element = <></>
      
      switch(category) {
         case 'gaming':
            img = gamingImg 
            ele = jsx.RightJSXGaming()
         break;
         
         case 'work':
            img = workImg 
            ele = jsx.RightJSXWork()
         break;

         case 'household':
            img = householdImg 
            ele = jsx.RightJSXHousehold()
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