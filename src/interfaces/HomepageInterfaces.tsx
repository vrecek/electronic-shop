import { NavigationLinkType } from "./NavigationInterfaces";

export interface CategoryNavListType extends NavigationLinkType {
   icon: JSX.Element
}

export interface NavAsideListType {
   category: string,
   hiddenContent: JSX.Element
}

export interface HomepageItemType {
   _id: string,
   name: string,
   price: number,
   commonCategory: string,
   onSalePercent: number,
   mainImage: { src: string },
   rating: { summedRate: number }
}

export interface HomepageProducts {
   firstCommon: HomepageItemType[],
   secondCommon: HomepageItemType[],
   firstRow: HomepageItemType[],
   secondRow: HomepageItemType[],
   thirdRow: HomepageItemType[],
   fourthRow: HomepageItemType[],
}