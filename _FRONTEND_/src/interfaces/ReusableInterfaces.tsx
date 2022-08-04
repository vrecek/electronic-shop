export interface FigureImageType {
   cname?: string,
   altTxt?: string,
   source: string, 
}

export interface ButtonType {
   text: string,
   cname?: string,
   action?: React.MouseEventHandler,
   additional?: JSX.Element
}



export interface ProductType {
   id: string,
   rating: number,
   image: string,
   name: string,
   price: number
}



export interface ProductNamePriceType {
   name: string,
   price: number
}

/**
 * ROW INTERFACES
 */

export interface ProductsRowType {
   text: string,
   products: ProductType[],
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
   price: number
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
   products: HomepageProductType[]
}

/*********************************************/

/**
 * POSSIBLE HOMEPAGE CATEGORIES
 */

export interface ZoneCardDetails extends RowRightInfo {
   image: string
}
 
 /*********************************************/

export type Direction = 'left' | 'right'

export type Ref<T> = React.RefObject<T>