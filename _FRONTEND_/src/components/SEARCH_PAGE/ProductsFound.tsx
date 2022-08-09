import React from 'react'
import { SearchedProductType } from '../../interfaces/SearchInterfaces'
import AsideFilters from './AsideFilters'
import ProductsSection from './ProductsSection'

const ProductsFound = () => {
   const products: SearchedProductType[] = [
      {
         image: 'https://media.steelseriescdn.com/thumbs/filer_public/90/7f/907f4761-3b7c-4dc0-9095-1396f5c236fe/purchase-gallery-arctis-3-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png',
         name: 'Lorem ipsum dolorsit amet',
         price: 999,
         rate: 4,
         id: '1234',
         tags: ['Wired mouse', 'Logitech']
      },
      {
         image: 'https://media.steelseriescdn.com/thumbs/filer_public/90/7f/907f4761-3b7c-4dc0-9095-1396f5c236fe/purchase-gallery-arctis-3-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png',
         name: 'Lorem ipsum dolorsit amet',
         price: 999,
         rate: 4,
         id: '1234',
         tags: ['Wired mouse', 'Logitech']
      },
      {
         image: 'https://media.steelseriescdn.com/thumbs/filer_public/90/7f/907f4761-3b7c-4dc0-9095-1396f5c236fe/purchase-gallery-arctis-3-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png',
         name: 'Lorem ipsum dolorsit amet',
         price: 999,
         rate: 4,
         id: '1234',
         tags: ['Wired mouse', 'Logitech']
      },
      {
         image: 'https://media.steelseriescdn.com/thumbs/filer_public/90/7f/907f4761-3b7c-4dc0-9095-1396f5c236fe/purchase-gallery-arctis-3-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png',
         name: 'Lorem ipsum dolorsit amet',
         price: 999,
         rate: 4,
         id: '1234',
         tags: ['Wired mouse', 'Logitech']
      },
      {
         image: 'https://media.steelseriescdn.com/thumbs/filer_public/90/7f/907f4761-3b7c-4dc0-9095-1396f5c236fe/purchase-gallery-arctis-3-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png',
         name: 'Lorem ipsum dolorsit amet',
         price: 999,
         rate: 4,
         id: '1234',
         tags: ['Wired mouse', 'Logitech']
      },
      {
         image: 'https://media.steelseriescdn.com/thumbs/filer_public/90/7f/907f4761-3b7c-4dc0-9095-1396f5c236fe/purchase-gallery-arctis-3-2019-black-hero.png__1920x1080_q100_crop-fit_optimize_subsampling-2.png',
         name: 'Lorem ipsum dolorsit amet',
         price: 999,
         rate: 4,
         id: '1234',
         tags: ['Wired mouse', 'Logitech']
      },
   ]

   return (
      <section className="products">

         <AsideFilters />
         <ProductsSection products={ products } />

      </section>
   )
}

export default ProductsFound