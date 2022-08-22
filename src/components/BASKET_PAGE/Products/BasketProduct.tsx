import React from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { CartFetchJson, CartProductExt } from '../../../interfaces/BasketInterfaces'
import FigureImage from '../../Common/FigureImage'
import Fetches from '../../../functions/Fetches'
import { LoadingCss } from '../../../functions/Loading'
import PriceSaleInfo from '../../Common/PriceSaleInfo'

const BasketProduct = ({ image, name, price, id, state, discount, quantity }: CartProductExt) => {
   const n = useNavigate()

   const removeFromCart = async (t: HTMLElement): Promise<void> => {
      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleCircle({
         position: 'containerHeight',
         backgroundClr: 'rgba(255, 255, 255, .8)'
      })
      l.append(t)

      try {
         await Fetches.mix(`${ process.env.REACT_APP_API_USER_REMOVE_FROM_CART }/${ id }`, 'PATCH')

         l.remove()

         state((curr: any) => {
            return {
               finished: true,
               data: curr.data.filter((x: CartFetchJson) => x._id !== id)
            }
         })

      }catch(err) {}
   }

   const modifyQuantity = (type: 'plus' | 'minus'): void => {
      state((curr: any) => {
         const current = curr.data as CartFetchJson[]

         const index: number = current.findIndex(x => x._id === id)
         current[index].inCart += type === 'minus' ? -1 : 1

         return {...curr}
      })
   }
   
   const changeQuantity = (e: React.MouseEvent, type: 'plus' | 'minus') => {
      const t = e.target as HTMLElement
      const currentCont: Element = t.parentElement!.parentElement!.parentElement!.children[0].children[0]

      let current: number = parseInt(currentCont.textContent ?? '0')

      if(type === 'plus') {
         if(current + 1 > quantity) return
         
         current += 1
         modifyQuantity('plus')
         
      }else if(type === 'minus') {
         if(current <= 1) {
            removeFromCart(currentCont.parentElement!.parentElement!.parentElement!)

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

            <div className='num'>
               <h6>1</h6>

               <div className="buttons">
                  <span onClick={ e => changeQuantity(e, 'plus') }><AiOutlinePlus /></span>
                  <span onClick={ e => changeQuantity(e, 'minus') }><AiOutlineMinus /></span>
               </div>
            </div>

         </td>

         <td className='price'>
            <PriceSaleInfo original={ price } percent={ discount } />
         </td>

      </tr>
   )
}

export default BasketProduct