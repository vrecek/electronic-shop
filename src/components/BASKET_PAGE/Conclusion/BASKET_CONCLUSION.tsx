import React from 'react'
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom'
import { ConclusionState, CreditCardCredentials, deliveryDefault, DeliveryHook, NewLocation, PaymentHook } from '../../../interfaces/BasketInterfaces'
import BlankPage from '../../Common/BlankPage'
import LayoutWrap from '../../Layout/LayoutWrap'
import '../../../css/OrderSummary.css'
import CurrentLocation from './CurrentLocation'
import PaymentSection from './Payment/PaymentSection'
import DeliverySection from './Delivery/DeliverySection'
import Button from '../../Common/Button'
import AppendResult from '../../../functions/AppendText'
import { LoadingCss } from '../../../functions/Loading'
import { Hook, Inputs } from '../../../interfaces/ReusableInterfaces'
import UserType, { UserLocations } from '../../../interfaces/UserInterface'
import Fetches from '../../../functions/Fetches'
import { UserContext } from '../../../App'

const BASKET_CONCLUSION = () => {
   const n: NavigateFunction = useNavigate()
   const state = useLocation().state as ConclusionState
   const user: Hook<UserType> = React.useContext(UserContext)

   const [deliveryData, setDelivery] = React.useState<DeliveryHook>(deliveryDefault)
   const [paymentData, setPayment] = React.useState<PaymentHook>({
      cardCredentials: null,
      type: state?.delivery?.shipment === 'On delivery' ? 'On delivery' : null
   })


   // HOMEPAGE IF STATE NOT PRESENT 
   const isState: boolean = !!(!!state?.delivery && !!state?.products)
   React.useEffect(() => {
      window.scrollTo(0, 0)
      
      if(!isState) n('/', { replace: true })
   }, [])
   if(!isState) return (<BlankPage />)
   // # # # # # # # # # # # # # # # # #


   const { products, delivery, totalPrice } = state

   const getNewDeliveryData = (form: HTMLFormElement): NewLocation => {
      if(deliveryData.sectionDisplay === 'new') {
         const elemArr: HTMLInputElement[] = Array.from(form.elements as Inputs)
         const elements = elemArr.filter(x => x.classList.contains('location-input'))

         const values = elements.map(x => x.value)

         if(values.some(x => !x)) {
            setDelivery({ sectionDisplay: 'new', credentials: null })

            return null
         }

         const credentialsObj: UserLocations = {
            person: {
               name: values[0],
               surname: values[1],
               phone: parseInt(values[2])
            },

            location: {
               country: values[3],
               city: values[4],
               zip: values[5],

               home: {
                  street: values[6],
                  buildingNumber: parseInt(values[7]),
                  apartmentNumber: parseInt(values[8])
               }
            }
         }

         setDelivery({sectionDisplay: 'new', credentials: credentialsObj})

         return credentialsObj
      }
   }
   const getSaveValue = (form: HTMLFormElement): boolean => {
      const elemArr: HTMLInputElement[] = Array.from(form.elements as Inputs)

      return elemArr[elemArr.length - 2].checked
   }
   const getNewCreditData = (form: HTMLFormElement): CreditCardCredentials | null => {
      const elements = Array.from(form.elements as Inputs).filter(x => x.classList.contains('credit-input')).map(x => x.value)

      if(!elements.length || elements.some(x => !x)) return null

      const detailsObj: CreditCardCredentials = {
         number: parseInt(elements[0]) || null,
         expiry: elements[1] || null,
         cvv: parseInt(elements[2]) || null
      }

      setPayment((curr: any) => {
         curr.cardCredentials = detailsObj

         return {...curr}
      })

      return detailsObj
   }

   const submitOrder = async (e: React.FormEvent) => {
      e.preventDefault()

      const t = e.target as HTMLFormElement

      const l: LoadingCss = new LoadingCss('')
      l.defaultStyleCircle({ 
         position: 'containerWidth',
         backgroundClr: 'rgba(200, 200, 200, .8)',
         width: '20%'
      })
      l.append(t)

      const location: UserLocations | null | undefined = deliveryData.credentials ?? getNewDeliveryData(t)
      const cardDetails = getNewCreditData(t)

      try {
         await Fetches.mix(`${ process.env.REACT_APP_API_USER_REALISE }`, 'PUT', {
            paymentMethod: paymentData.type,
            creditCardDetails: cardDetails,

            deliveryType: delivery.shipment,
            deliveryDetails: location,
            shouldSave: getSaveValue(t),

            totalPrice,

            user: user ? {
               name: user.username,
               mail: user.mail,
               id: user._id
            } : null,

            products: products.map(x => { return { id: x._id, quantity: x.inCart } })
         })

         n('/basket/conclusion/final', { state: { allow: true }, replace: true })


      }catch(err: any) {
         const ar: AppendResult = new AppendResult('h6', 'submit-result')
         ar.setMessage = err?.json?.msg || 'Unkown error. Try again or contact us'
         ar.appendTo(t, 2.5)
      
      }finally {
         l.remove()
      }
   }

   return (
      <LayoutWrap onlyStrap={ true }>

         <form onSubmit={ submitOrder } className="order-summary">

            <CurrentLocation />

            <div className="wrap">

               <PaymentSection 
                  paymentState={ setPayment } 
                  paymentStateValue={ paymentData }
               />

               <DeliverySection 
                  deliveryState={ setDelivery }
                  deliveryStateValue={ deliveryData } 
               />

            </div>

            <Button cname='submit-order' text="Submit order" />

         </form>

      </LayoutWrap>
   )
}

export default BASKET_CONCLUSION