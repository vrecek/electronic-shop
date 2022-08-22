import React from 'react'
import FigureImage from '../Common/FigureImage'
import LayoutWrap from '../Layout/LayoutWrap'
import RightSection from './RightEntry/RightSection'
import '../../css/ProductPage.css'
import '../../css/ProductSections.css'
import SelectSection from './SelectSection'
import ProductDetails from './DetailsProduct/ProductDetails'
import { ProductSections } from '../../interfaces/ProductPageInterfaces'
import ProductOpinions from './Opinions/ProductOpinions'
import { LoadingCss } from '../../functions/Loading'
import { useNavigate, useParams } from 'react-router-dom'
import { DEFAULTSTATE, HookLoad } from '../../interfaces/ReusableInterfaces'
import BlankPage from '../Common/BlankPage'
import Fetches from '../../functions/Fetches'
import { ProductType } from '../../interfaces/ProductInterface'

const PRODUCT_PAGE = () => {
   const [product, setProduct] = React.useState<HookLoad<ProductType>>(DEFAULTSTATE)
   const [currSection, setSection]  = React.useState<JSX.Element>(<></>)
   const { id } = useParams()
   const n = useNavigate()
   
   React.useEffect(() => {
      window.scrollTo(0, 0)

      const init = async () => {
         const l = new LoadingCss('load')
         l.defaultStyleCircle()
         l.append(document.body)
      
         try {
            const data = await Fetches.mix<ProductType>(`${ process.env.REACT_APP_API_PRODUCT_PAGE_ITEM }/${ id }`, 'GET')

            const { detailsParagraph, details } = data.json
            setSection(<ProductDetails para={ detailsParagraph } technical={ details.technical } functions={ details.functions } />)
            
            setProduct({
               finished: true,
               data: data.json
            })

         }catch(err: any) {
            n('/error', { state: { msg: err.json.msg, code: err.code }, replace: true })

         }finally {
            l.remove()
         }
      }
      init()

   }, [])

   if(product.finished && product.data) {
      const { tags, paragraph, price, _id, company, name, additionalImages, rating, mainImage, onSalePercent, quantity } = product.data

      const selectCurrentFunc = (e: React.MouseEvent, what: ProductSections) => {
         const t = e.target as HTMLElement

         for(let x of Array.from(t.parentElement!.children)) x.className = ''
         t.className = 'active'

         switch(what) {
            case 'details':
               const { detailsParagraph, details } = product.data!

               setSection(<ProductDetails para={ detailsParagraph } technical={ details.technical } functions={ details.functions } />)   
            break
            
            case 'opinions':
               setSection(<ProductOpinions prodId={ product.data!._id } rates={ product.data!.rating } comments={ product.data!.opinions } />)   
            break
         }
      }  

      return (
         <LayoutWrap>
   
            <main className="product-page">
   
               <section className="product-entry">
   
                  <FigureImage cname='main-figure' source={ mainImage.src } altTxt='product' />
                  <RightSection 
                     images={ [mainImage.src, ...additionalImages.map(x => x.src)] }
                     name={ name }
                     quantity={ quantity }
                     company={ company }
                     tags={ tags }
                     para={ paragraph }
                     price={ price }
                     rate={ rating.summedRate }
                     salePercent={ onSalePercent }
                     id={ _id }
                  />
   
               </section>
   
               <SelectSection func={ selectCurrentFunc } />
               <section className="content">
   
                  { currSection }
   
               </section>
   
            </main>
   
         </LayoutWrap>
      )
   }

   return (<BlankPage />)
}

export default PRODUCT_PAGE