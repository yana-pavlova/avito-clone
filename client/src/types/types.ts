type ItemBase = {
  id: number
  name: string
  description: string
  location: string
  type: 'Недвижимость' | 'Авто' | 'Услуги'
}

export type ItemBaseInput = Omit<ItemBase, 'id'>

type RealEstate = ItemBase & {
  type: 'Недвижимость'
  propertyType: string
  area: number
  rooms: number
  price: number
}
type RealEstateInput = Omit<RealEstate, 'id'>

type Car = ItemBase & {
  type: 'Авто'
  brand: string
  model: string
  year: number
  mileage?: number
}
type CarInput = Omit<Car, 'id'>

type Service = ItemBase & {
  type: 'Услуги'
  serviceType: string
  experience: number
  cost: number
  workSchedule?: string
}
type ServiceInput = Omit<Service, 'id'>

export type Item = RealEstate | Car | Service
export type ItemInput = RealEstateInput | CarInput | ServiceInput
