export interface ProductImage {
   src: string,
   filename: string
}

export interface CommentType {
   author: {
      id: string,
      name: string
   },
   text: string,
   rate: number,
   postedDate: string
}

export interface RatingType {
   one: number,
   two: number,
   three: number,
   four: number,
   five: number,
   summedRate: number
}

export interface ProductType {
   _id: string,

   name: string,

   company: string,

   price: number,

   quantity: number,

   onSalePercent: number,

   paragraph: string,

   detailsParagraph: string,

   tags: string[],

   mainImage: ProductImage,

   additionalImages: ProductImage[],

   views: number,

   details: {
      technical: string[],
      functions: string[]
   }

   rating: RatingType,

   created: {
      num: number,
      str: string
   },

   opinions: CommentType[]
}