export type ProductSections = 'details' | 'opinions'

export interface SelectSectionType {
   func: (e: React.MouseEvent, what: ProductSections) => void
}