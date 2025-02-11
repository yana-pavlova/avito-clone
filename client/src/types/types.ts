export type ItemType = 'Недвижимость' | 'Авто' | 'Услуги'

export type ItemBase = {
  id: number
  name: string
  description: string
  location: string
  type: ItemType
  image?: string
}

export type ItemBaseInput = Omit<ItemBase, 'id'>

type RealEstate = ItemBase & {
  type: 'Недвижимость'
  propertyType: string
  area: number
  rooms: number
  price: number
}
export type RealEstateInput = Omit<RealEstate, 'id'>

type Car = ItemBase & {
  type: 'Авто'
  brand: string
  model: string
  year: number
  mileage?: number
}
export type CarInput = Omit<Car, 'id'>

type Service = ItemBase & {
  type: 'Услуги'
  serviceType: string
  experience: number
  cost: number
  workSchedule?: string
}
export type ServiceInput = Omit<Service, 'id'>

export type Item = RealEstate | Car | Service
export type ItemInput = RealEstateInput | CarInput | ServiceInput
