export type Role = 'user' | 'admin'

export interface UserLocations {
   _id?: string,

   person: {
      name: string,
      surname: string,
      phone: number
   },

   location: {
      country: string,
      city: string,
      zip: string,

      home: {
         street: string
         buildingNumber: number,
         apartmentNumber: number
      }
   }
}

export interface UserPurchase {
   products: {
      id: string,
      quantity: number
   }[],
   totalPrice: number,
   date: string,
   delivered: boolean,
   orderId: string
}

export default interface UserType {
   _id: string,

   username: string,

   mail: string,

   hash: string,

   salt: string,

   created: {
      num: number,
      str: string
   },

   purchaseHistory: UserPurchase[],

   savedLocations: UserLocations[],

   totalSpent: number,

   role: Role
}