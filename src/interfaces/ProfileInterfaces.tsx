import { State } from "./ReusableInterfaces"
import { UserLocations, UserPurchase } from "./UserInterface"

export interface ContentsInfo {
   nick: string
}

export interface TimeAndMoneyInfo {
   created: {
      str: string,
      num: number
   },

   moneySpent: number
}

export interface EntryInformationsType extends ContentsInfo, TimeAndMoneyInfo {}

export interface CredentialsType {
   Mail: string,
   Name: string
}

export interface LocationWrapType {
   header: string,
   details: (string|number)[]
}

export interface LocationState<T = UserLocations[]> {
   locations: T,
   setState: State<UserLocations[]>
}

export interface HistoryProduct {
   mainImage: { src: string },
   name: string,
   _id: string
   quantity: number
}

export interface PurchaseHistoryType {
   details: UserPurchase,
   products: HistoryProductInfo[]
}

export interface ProductFetch {
   products: HistoryProduct[][]
}

export interface HistoryProductInfo {
   mainImage: { src: string },
   quantity: number,
   name: string
}

export interface ProductInfoType {
   info: string | JSX.Element, 
   header: string, 
   cname: string
}