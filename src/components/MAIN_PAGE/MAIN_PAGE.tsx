import React from 'react'
import { PossibleHomepageCategory, DEFAULTSTATE, HookLoad } from '../../interfaces/ReusableInterfaces'
import ProductsRow from '../Common/Products/Row/ProductsRow'
import CategorySection from './CategorySection/CategorySection'
import SliderContainer from './Slider/SliderContainer'
import ProductsCategorySection from '../Common/Products/Category/ProductsCategorySection'
import ZoneSection from '../Common/Products/Zone/ZoneSection'
import { getCategory, getCommonCategory } from '../../functions/getCategory'
import NewsletterSection from './Newsletter/NewsletterSection'
import LayoutWrap from '../Layout/LayoutWrap'
import { LoadingCss } from '../../functions/Loading'
import Fetches from '../../functions/Fetches'
import { HomepageProducts } from '../../interfaces/HomepageInterfaces'
import BlankPage from '../Common/BlankPage'
import { useNavigate } from 'react-router-dom'

const MAIN_PAGE = () => {
   window.scrollTo(0, 0)

   const [commonCategories] = React.useState<PossibleHomepageCategory[]>(getCommonCategory(2))
   const [categories] = React.useState<string[]>(getCategory(4))

   const [items, setItems] = React.useState<HookLoad<HomepageProducts>>(DEFAULTSTATE)
   const n = useNavigate()

   React.useEffect(() => {
      const init = async () => {
         const l = new LoadingCss('load')
         l.defaultStyleCircle()
         l.append(document.body)

         try {
            const data = await Fetches.mix<HomepageProducts>(`${ process.env.REACT_APP_API_PRODUCT_ALL_HOMEPAGE }`, 'POST', {
               commonCategory: commonCategories,
               categories
            })

            setItems({
               finished: true,
               data: data.json
            })

         }catch(err: any) {
            n('/error', { state: { code: err.code, msg: err.json.msg }, replace: true })

         }finally {
            l.remove()
         }
      }
      init()
   }, [])

   if(items.finished && items?.data)
   return (
      <main className="main-page">

         <LayoutWrap>

            <SliderContainer />

            <CategorySection />

            <ProductsRow 
               text={ categories[0] }
               rightSection={{
                  text: 'See more',
                  url: `/search/c/${ categories[0] }`
               }}
               products={ items.data.firstRow }
            />

            <ProductsCategorySection 
               products={ items.data.firstCommon }
               category={ commonCategories[0] }
            />

            <ZoneSection
               category={ commonCategories[1] }
            />

            <ProductsRow 
               text={ categories[1] }
               rightSection={{
                  text: 'See more',
                  url: `/search/c/${ categories[1] }`
               }}
               products={ items.data.secondRow }
            />

            <ProductsRow 
               text={ categories[2] }
               rightSection={{
                  text: 'See more',
                  url: `/search/c/${ categories[2] }`
               }}
               products={ items.data.thirdRow }
            />

            <ProductsCategorySection 
               products={ items.data.secondCommon }
               category={ commonCategories[1] }
            />

            <ProductsRow 
               text={ categories[3] }
               rightSection={{
                  text: 'See more',
                  url: `/search/c/${ categories[3] }`
               }}
               products={ items.data.fourthRow }
            />

            <ZoneSection
               category={ commonCategories[0] }
            />       

            <NewsletterSection />

         </LayoutWrap>

      </main>
   )

   return (<BlankPage />)
}

export default MAIN_PAGE