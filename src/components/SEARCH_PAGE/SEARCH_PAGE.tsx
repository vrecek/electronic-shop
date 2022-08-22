import React from 'react'
import LayoutWrap from '../Layout/LayoutWrap'
import '../../css/SearchPage.css'
import NoProducts from './NoProducts'
import ProductsFound from './ProductsFound'
import { DEFAULTSTATE, HookLoad } from '../../interfaces/ReusableInterfaces'
import { SearchedProductType, SearchedType } from '../../interfaces/SearchInterfaces'
import BlankPage from '../Common/BlankPage'
import { LoadingCss } from '../../functions/Loading'
import Fetches from '../../functions/Fetches'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const SEARCH_PAGE = () => {
   window.scrollTo(0, 0)

   const [products, setProducts] = React.useState<HookLoad<SearchedType>>(DEFAULTSTATE)
   const { type, query } = useParams()
   const n = useNavigate()
   const location = useLocation()

   React.useEffect(() => {
      const init = async () => {
         const l: LoadingCss = new LoadingCss('')
         l.defaultStyleCircle()
         l.append(document.body)

         try {
            const data = await Fetches.mix<SearchedProductType[]>(`${ process.env.REACT_APP_API_PRODUCT_SEARCH_ITEMS }/${ type }/${ query }`, 'GET')
            setProducts({
               finished: true,
               data: {
                  original: data.json,
                  items: data.json
               }
            })

         }catch(err: any) {
            n('/error', { state: { msg: err.json.msg, code: err.code }, replace: true })

         }finally {
            l.remove()
         }
      }
      init()
   }, [location])
   

   if(products.finished && products.data)
   return (
      <LayoutWrap>

         <main className="search-page">
           
            {
               products.data.items.length
               ?
                  <ProductsFound 
                     products={ products.data.items } 
                     query={ query! }
                     state={ setProducts } 
                     original={ products.data.original }
                  />
               :
                  <NoProducts query={ query! } />
            }

         </main>

      </LayoutWrap>
   )

   return (<BlankPage />)
}

export default SEARCH_PAGE