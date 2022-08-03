import { NavigationLinkType } from "./NavigationInterfaces";

export interface CategoryNavListType extends NavigationLinkType {
   icon: JSX.Element
}

export interface NavAsideListType {
   category: string,
   hiddenContent: JSX.Element
}