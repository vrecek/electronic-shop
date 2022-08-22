import { HomepageItemType } from "./HomepageInterfaces"

export interface FigureImageType {
   cname?: string,
   altTxt?: string,
   source: string, 
   action?: (e: React.MouseEvent, src: string) => void
}

export interface ButtonType {
   text: string,
   cname?: string,
   action?: React.MouseEventHandler,
   additional?: JSX.Element
}

export interface PriceDiscount {
   original: number,
   percent: number
}

export interface ProductNamePriceType {
   name: string,
   price: number,
   salePercent: number
}

/**
 * ROW INTERFACES
 */

export interface ProductsRowType {
   text: string,
   products: HomepageItemType[],
   rightSection: {
      text: string,
      url: string
   }
}

export interface HomepageProductType {
   id: string,
   rating: number,
   image: string,
   name: string,
   price: number,
   salePerc: number
}

export interface ProductsRowDivType {
   url: string,
   leftTxt: string,
   rightTxt: string
}

export interface RowRightInfo {
   url: string,
   txt: string
}

/*********************************************/

/**
 * POSSIBLE HOMEPAGE CATEGORIES
 */

export type PossibleHomepageCategory = 'household' | 'gaming' | 'work'

export interface DetermineRightReturn {
   imgSrc: string,
   element: JSX.Element
}

export interface PossibleCategoryType {
   category: PossibleHomepageCategory,
   products: HomepageItemType[]
}

/*********************************************/

/**
 * POSSIBLE HOMEPAGE CATEGORIES
 */

export interface ZoneCardDetails extends RowRightInfo {
   image: string
}
 
 /*********************************************/

export type Inputs = HTMLCollectionOf<HTMLInputElement>

export type Direction = 'left' | 'right'

export type Ref<T> = React.RefObject<T>

export type State<T> = React.Dispatch<React.SetStateAction<T>>

export type Hook<T> = T | null

export type HookLoad<T> = {
   finished: boolean,
   data: Hook<T>
}

export const DEFAULTSTATE = {
   finished: false,
   data: null
}