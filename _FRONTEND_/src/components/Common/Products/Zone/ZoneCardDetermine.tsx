import { PossibleHomepageCategory, ZoneCardDetails } from "../../../../interfaces/ReusableInterfaces"
import cardsJson from '../../../../data/zoneProducts.json'
import g1 from '../../../../images/zone/gaming/zg1.jpg'
import g2 from '../../../../images/zone/gaming/zg2.jpg'
import g3 from '../../../../images/zone/gaming/zg3.jpg'
import w1 from '../../../../images/zone/work/zw1.jpg'
import w2 from '../../../../images/zone/work/zw2.jpg'
import w3 from '../../../../images/zone/work/zw3.jpg'
import h1 from '../../../../images/zone/household/zh1.jpg'
import h2 from '../../../../images/zone/household/zh2.jpg'
import h3 from '../../../../images/zone/household/zh3.jpg'

const getFromGaming = (): ZoneCardDetails[] => {
   const imgs: string[] = [g3, g2, g1]

   return cardsJson.gaming.map((x, i) => {
      return {
         url: x.url,
         txt: x.txt,
         image: imgs[i]
      }
   })
}

const getFromWork = (): ZoneCardDetails[] => {
   const imgs: string[] = [w2, w3, w1]

   return cardsJson.work.map((x, i) => {
      return {
         url: x.url,
         txt: x.txt,
         image: imgs[i]
      }
   })
}

const getFromHouse = (): ZoneCardDetails[] => {
   const imgs: string[] = [h2, h1, h3]

   return cardsJson.household.map((x, i) => {
      return {
         url: x.url,
         txt: x.txt,
         image: imgs[i]
      }
   })
}

const returnCardDetails = (category: PossibleHomepageCategory): ZoneCardDetails[] => {
   let cardDetails: ZoneCardDetails[] = []

   switch(category) {
      case 'gaming':
         cardDetails = getFromGaming()
      break

      case 'work':
         cardDetails = getFromWork()
      break

      case 'household':
         cardDetails = getFromHouse()
      break

      default:
         return []
   }

   return cardDetails
}

export default returnCardDetails