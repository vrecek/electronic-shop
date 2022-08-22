import DropDown from "../functions/DropdownClass"
import { HookLoad, State } from "./ReusableInterfaces"
import { UserLocations } from "./UserInterface"

export interface SectionInfoType {
   h1Text: string,
   h2Text?: string
}

export interface CartProduct {
   id: string,
   image: string,
   name: string,
   price: number,
   quantity: number,
   discount: number
}

export interface CostInfoType {
   children: string,
   text: string,
   cname?: string
}

export interface ShipmentType {
   name: string,
   price: number,
   state: State<BasketShipmentType>
}

export interface BasketShipmentType {
   shipment: PaymentState,
   price: number
}

export interface ShipmentCurrentType {
   dd: DropDown,
   deliveryType: string
}

export interface ShipmentListType {
   shipState: State<BasketShipmentType>,
   dd: DropDown
}

export interface CartFetchJson {
   _id: string,
   mainImage: { src: string },
   name: string,
   price: number,
   onSalePercent: number,
   quantity: number,
   inCart: number
}

export interface CartProductExt extends CartProduct {
   state: State<HookLoad<CartFetchJson[]>>
}

export interface ProductSectionType {
   products: CartFetchJson[],
   state: State<HookLoad<CartFetchJson[]>>
}

// CONCLUSION

export interface ConclusionState {
   delivery: BasketShipmentType,
   products: CartFetchJson[],
   totalPrice: number
}


export interface DeliveryHook {
   credentials: UserLocations | null,
   sectionDisplay: DeliveryState | null
}
export const deliveryDefault = { credentials: null, sectionDisplay: null  }


export interface CreditCardCredentials {
   number: number | null,
   expiry: string | null,
   cvv: number | null
}
export interface PaymentHook {
   cardCredentials: CreditCardCredentials | null,
   type: PaymentMethodType
}
export const paymentDefault = { cardCredentials: null, sectionDisplay: null  }


export interface PaymentType {
   imgSrc: string,
   text: string,
   id: string
}

export interface DeliverySectionType {
   deliveryState: State<DeliveryHook>
   deliveryStateValue: DeliveryHook
}

export interface DeliveryStateHelp {
   deliveryState: State<DeliveryHook>
}

export interface AvailableLocationsType extends DeliveryStateHelp {
   locations: UserLocations[]
}

export type NewLocation = UserLocations | null | undefined

export interface OneLocationType extends UserLocations, DeliveryStateHelp {}


export interface PaymentSectionType {
   paymentState: State<PaymentHook>,
   paymentStateValue: PaymentHook
}


export type PaymentMethodType = 'On delivery' | 'Credit card' | 'Paypal' | null
export type DeliveryState = 'saved' | 'new' | null
export type PaymentState = 'On delivery' | 'Post office' | 'Parcel locker' | 'Courier 1' | 'Courier 2' | ''