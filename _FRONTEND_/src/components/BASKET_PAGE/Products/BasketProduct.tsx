import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { CartProductExt } from '../../../interfaces/BasketInterfaces'
import FigureImage from '../../Common/FigureImage'

const BasketProduct = ({ image, name, price, id, state }: CartProductExt) => {
   const n = useNavigate()

   const removeFromCart = (): void => {
      state((curr: any) => {
         const filtered = curr.filter((x: CartProductExt) => x.id !== id)

         return filtered
      })
   }

   const modifyQuantity = (type: 'plus' | 'minus'): void => {
      state((curr: any) => {
         const current = curr as CartProductExt[]

         const index: number = current.findIndex(x => x.id === id)
         curr[index].quantity += type === 'minus' ? -1 : 1

         return [...curr]
      })
   }
   
   const changeQuantity = (e: React.MouseEvent, type: 'plus' | 'minus') => {
      const t = e.target as HTMLElement
      const currentCont: Element = t.parentElement!.parentElement!.children[1]

      let current: number = parseInt(currentCont.textContent ?? '0')

      if(type === 'plus') {
         current += 1
         modifyQuantity('plus')
         
      }else if(type === 'minus') {
         if(current <= 1) {
            removeFromCart()

            return
         }

         current -= 1
         modifyQuantity('minus')
      }
     
      currentCont.textContent = current.toString()
   }

   return (
      <tr>

         <td onClick={ () => n(`/product/${ id }`) } className='image'>
            <FigureImage source={ image } altTxt='product' />
         </td>

         <td className='name'>
            { name }
         </td>

         <td className='quantity'>
            <div className="buttons">
               <span onClick={ e => changeQuantity(e, 'plus') }><AiOutlinePlus /></span>
               <span onClick={ e => changeQuantity(e, 'minus') }><AiOutlineMinus /></span>
            </div>

            <div className='num'>1</div>
         </td>

         <td className='price'>
            { price } $
         </td>

      </tr>
   )
}

export default BasketProduct