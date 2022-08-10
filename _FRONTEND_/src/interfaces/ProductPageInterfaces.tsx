import { Ref } from "./ReusableInterfaces"

export type ProductSections = 'details' | 'opinions'

export interface SelectSectionType {
   func: (e: React.MouseEvent, what: ProductSections) => void
}

export interface ImagesSelectType {
   allImages: string[]
}

export interface ProductRightType {
   id: string,
   images: string[],
   price: number,
   company: string,
   name: string,
   para: string,
   tags: string[],
   rate: number
}

export interface CommentType {
   text: string,
   rate: number,
   date: string,
   username: string
}