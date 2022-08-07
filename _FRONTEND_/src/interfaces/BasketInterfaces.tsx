import DropDown from "../functions/DropdownClass"
import { State } from "./ReusableInterfaces"

export interface SectionInfoType {
   h1Text: string,
   h2Text?: string
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
   shipment: string,
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

export interface CartProduct {
   id: string,
   image: string,
   name: string,
   price: number,
   quantity: number
}

export interface CartProductExt extends CartProduct {
   state: State<CartProduct[]>
}

export interface ProductSectionType {
   products: CartProduct[],
   state: State<CartProduct[]>
}