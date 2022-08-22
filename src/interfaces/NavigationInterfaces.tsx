import { Ref } from "./ReusableInterfaces"

export interface NavigationLinkType {
   url: string,
   name: string
}

export interface NavigationMenuLinkType extends NavigationLinkType {
   addMargin?: boolean
}

export interface NavIconType {
   content: JSX.Element,
   text: string,
   clickUrl: string,
   cname?: string,
   additionalNum?: number
}

export type SliderButtonsType = {
   imgNum: number,
   slider: Ref<HTMLDivElement>
}

export interface LayoutWrapType {
   children: any,
   onlyStrap?: boolean
}
