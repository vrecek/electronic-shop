export interface InputDivType {
   icon: JSX.Element,
   placeholder: string,
   type: 'password' | 'text'
}

export interface WelcomeSectionType {
   header: string,
   para: string,
   list?: string[]
}