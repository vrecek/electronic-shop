export default interface PendingOrder {
   _id: string,
   
   user: {
      id: string,
      name: string,
      mail: string
   },

   products: {
      id: string,
      quantity: number,
      image: string,
      name: string
   }[]

   date: string,
   cost: number,

   deliveryMethod: string,
   personInfo: {
      name: string,
      surname: string,
      phone: number
   },
   
   location: {
      country: string,
      city: string,
      zip: string,

      home: {
         street: string,
         buildingNumber: number,
         apartmentNumber: number
      }
   }

   paymentMethod: string,
   paymentDetails: {
      cardNumber: number,
      expiry: string,
      cvv: number
   } | null
}