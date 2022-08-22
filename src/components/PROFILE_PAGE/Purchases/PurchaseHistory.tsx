import React from 'react'
import { MdKeyboardArrowDown } from 'react-icons/md'
import AppendResult from '../../../functions/AppendText'
import DropDown from '../../../functions/DropdownClass'
import Fetches from '../../../functions/Fetches'
import { LoadingCss } from '../../../functions/Loading'
import { HistoryProduct, ProductFetch } from '../../../interfaces/ProfileInterfaces'
import { DEFAULTSTATE, HookLoad, Ref } from '../../../interfaces/ReusableInterfaces'
import { UserPurchase } from '../../../interfaces/UserInterface'
import OneOrder from './OneOrder'

const PurchaseHistory = ({ history }: { history: UserPurchase[] }) => {
   const historyCont: Ref<HTMLDivElement> = React.useRef<HTMLDivElement>(null) 
   const [products, setProducts] = React.useState<HookLoad<HistoryProduct[][]>>(DEFAULTSTATE)

   const dd: DropDown = new DropDown()

   React.useEffect(() => {
      const init = async () => {
         const l: LoadingCss = new LoadingCss('')
         l.defaultStyleCircle({
            position: 'containerHeight',
            backgroundClr: 'rgba(240, 240, 240, .8)'
         })
         l.append(historyCont.current!)

         const flatHistory = history.map(
            x => x.products.map(
               y => { 
                  return { id: y.id, quantity: y.quantity } 
               }
            )
         ).flat()

         try {
            const data = await Fetches.mix<ProductFetch>(
               process.env.REACT_APP_API_PRODUCT_GET_PURCHASES!, 
               'POST', 
               history.map(x => x.products.map(y => y.id))
            )

            data.json.products.map((x, i) => {
               x.map((y, j) => {
                  const index = flatHistory.findIndex(z => z.id === y._id)
                  Object.assign(data.json.products[i][j], { quantity: flatHistory[index].quantity })
               })
            })

            setProducts({
               finished: true,
               data: data.json.products
            })

         }catch(err: any) {
            const ar: AppendResult = new AppendResult('h5', 'error-result')
            ar.setMessage = err.json.msg
            ar.appendTo(historyCont.current!)

         }finally { l.remove() }
      }
      init()
   }, [])

   const expandMenu = (e: React.MouseEvent): void => {
      const t = e.target as HTMLElement
      const itemsContainer: HTMLElement = historyCont.current!.children[1] as HTMLElement

      dd.switchActive()
      dd.rotateArrow(t)
      if(dd.getActive) {
         dd.expandMenu(t, itemsContainer)
         return
      }
      dd.shrinkMenu(.4)
   }

   return (
      <section ref={ historyCont } className="purchase-history">

         <div className="entry">

            <h1 className="header">Purchase history ({ history.length })</h1>
            <span onClick={ expandMenu }><MdKeyboardArrowDown /></span>

         </div>

         <section className="container">

            {
               products.data?.length
               ?
                  history.map((x, i) => (
                     <OneOrder 
                        key={ i }
                        details={ x }
                        products={ products.data![i] }
                     />
                  ))
               :
                  <></>
            }

         </section>

      </section>
   )
}

export default PurchaseHistory