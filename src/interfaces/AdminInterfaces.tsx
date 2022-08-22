import { StringExpression } from "mongoose"
import React from "react"
import PendingOrder from "./PendingOrderInterface"
import { State } from "./ReusableInterfaces"
import { Role } from "./UserInterface"

export type InputDivType = 'password' | 'text' | 'file' | 'number'

export interface AdminLoginDiv {
   label: string,
   type: InputDivType,
   textarea?: boolean,
   cname?: string,
   onchange?: React.ChangeEventHandler
   keydown?: React.KeyboardEventHandler
}

export interface EnterPasswordType {
   state: State<boolean>
   user: string,
   mail: StringExpression,
   role: Role
}

export interface AdminAsideList {
   icon: JSX.Element,
   text: string,
}

export interface AdminAsideListType extends AdminAsideList {
   click: (e: React.MouseEvent, txt: string) => void,
   addActive: boolean
}

export interface EntryHeaderType {
   icon: JSX.Element,
   children: string
}

export interface ModifyOptionsType {
   inputClass: string,
   inputType: InputDivType,
   maxInputs: number
}

export interface InputsRemoveAdd extends ModifyOptionsType {
   cname: string,
   text: string
}

export interface PendingOrderFetch {
   orders: PendingOrder[]
}

export interface OrderInformationObject {
   header: string,
   text: string | number | JSX.Element
}

export interface OrderInformation {
   entryHeader: string, 
   informations: OrderInformationObject[]
}

export interface OrderProductType {
   image: string,
   name: string,
   quantity: number,
   id: string
}