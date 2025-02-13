export const API_URL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : process.env.REACT_APP_API_URL

export const FIELD_LABELS: Record<string, string> = {
  description: 'Описание',
  location: 'Местоположение',
  type: 'Тип',
  propertyType: 'Тип недвижимости',
  area: 'Площадь (м²)',
  rooms: 'Количество комнат',
  price: 'Цена (₽)',
  brand: 'Марка',
  model: 'Модель',
  year: 'Год выпуска',
  mileage: 'Пробег (км)',
  serviceType: 'Тип услуги',
  experience: 'Опыт (лет)',
  cost: 'Стоимость (₽)',
  workSchedule: 'График работы',
}

export const LOCAL_STORAGE_KEY_FORM_DRAFT = 'form-draft'

export const MOCK_IMAGE_URL = '/image-placeholder.jpg'
