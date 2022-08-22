const calculateSalePercent = (originalPrice: number, salePercent: number): number => {
   if(!salePercent) return originalPrice

   const calc: number = Math.floor((originalPrice / 100) * salePercent)

   return originalPrice - calc
}

export default calculateSalePercent