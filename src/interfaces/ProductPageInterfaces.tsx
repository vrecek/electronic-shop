import { CommentType, RatingType } from "./ProductInterface"
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
   rate: number,
   salePercent: number,
   quantity: number
}

export interface DetailsBody {
   technical: string[],
   functions: string[]
}

export interface DetailsType extends DetailsBody {
   para: string,
}

export interface OpinionsSection {
   comments: CommentType[]
   rates: RatingType,
   prodId: string
} 

export interface PostCommentFetch {
   date: string,
   user: string
}