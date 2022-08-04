import { PossibleHomepageCategory } from "../interfaces/ReusableInterfaces"
import cats from '../data/possibleCategoriesSection.json'
import allCats from '../data/productCategories.json'
import shuffleArray from "./shuffleArray"

const returnCategoryHelp = (a: number, arr: any[]) => {
   if(a <= 0) return []
   if(a >= arr.length) return arr

   return arr.slice(0, a)
}

const getCommonCategory = (amount: number): PossibleHomepageCategory[] => {
   const categories = shuffleArray<PossibleHomepageCategory>(cats as PossibleHomepageCategory[])

   return returnCategoryHelp(amount, categories)
}

const getCategory = (amount: number): string[] => {
   const categories = shuffleArray(allCats)

   return returnCategoryHelp(amount, categories)
}

export { getCommonCategory, getCategory }