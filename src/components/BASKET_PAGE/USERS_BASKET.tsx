import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import ProductsSection from './Products/ProductsSection'
import Summary from './Summary/Summary'
import '../../css/Basket.css'
import { CartFetchJson } from '../../interfaces/BasketInterfaces'
import { DEFAULTSTATE, HookLoad } from '../../interfaces/ReusableInterfaces'
import Fetches from '../../functions/Fetches'
import { LoadingCss } from '../../functions/Loading'
import { NavigateFunction, useNavigate } from 'react-router-dom'
import BlankPage from '../Common/BlankPage'

const USERS_BASKET = () => {
   window.scrollTo(0, 0)

   const n: NavigateFunction = useNavigate()
   const [products, setProducts] = React.useState<HookLoad<CartFetchJson[]>>(DEFAULTSTATE)
   
   React.useEffect(() => {
      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleCircle()
      l.append(document.body)

      const init = async () => {
         try {
            const data = await Fetches.mix<{ products: CartFetchJson[]}>(process.env.REACT_APP_API_USER_GET_CART!, 'GET')

            setProducts({
               finished: true,
               data: data.json.products.map(x => {
                  return {...x, inCart: 1}
               })
            })

         }catch(err: any) {
            n('/error', { state: { code: err.code, msg: err.json.msg }, replace: true })
         
         }finally { l.remove() }
      }
      init()
   }, [])

   if(products.finished)
   return (
      <LayoutWrap onlyStrap={ true }>

         <main className="user-basket">
               
            <ProductsSection products={ products.data ?? [] } state={ setProducts } />
            <Summary products={ products.data ?? [] } />

         </main>

      </LayoutWrap>
   )

   return (<BlankPage />)
}

export default USERS_BASKET