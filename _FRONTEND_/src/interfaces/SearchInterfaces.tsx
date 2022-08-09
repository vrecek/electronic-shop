export interface SearchedProductType {
   id: string,
   name: string,
   image: string,
   tags: string[],
   rate: number,
   price: number
}

export interface FilterInput {
   name: string,
   id: string,
   text: string
}

export interface FilterType {
   text: string,
   i1: FilterInput,
   i2: FilterInput
}