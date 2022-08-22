import { HomepageItemType } from "./HomepageInterfaces"
import { HookLoad, State } from "./ReusableInterfaces"

export interface FilterInput {
   id: string,
   text: string
}

export interface FilterType {
   text: string,
   i1: FilterInput,
   i2: FilterInput,
   cname: string
}

export interface SearchedProductType extends HomepageItemType {
   tags: string[],
   views: number
}

export interface SearchedType {
   original: SearchedProductType[],
   items: SearchedProductType[]
}

export interface DisplayProductsType {
   products: SearchedProductType[],
   query: string,
}

export interface FoundProductsType extends DisplayProductsType {
   state: State<HookLoad<SearchedType>>,
   original: SearchedProductType[]
}

export interface FilterAsideType {
   original: SearchedProductType[],
   state: State<HookLoad<SearchedType>>
}