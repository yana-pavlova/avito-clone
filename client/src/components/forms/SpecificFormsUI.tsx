import { ChangeEvent } from 'react'
import { CarInput, RealEstateInput, ServiceInput } from '../../types/types'

type FormProps = {
  handleChange: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => void
}

type ApartmentFormProps = FormProps & {
  data: RealEstateInput | null
}

type CarFormProps = FormProps & {
  data: CarInput | null
}

type ServiceFormProps = FormProps & {
  data: ServiceInput | null
}

export const ApartmentForm = ({ handleChange, data }: ApartmentFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="input-propertyType"
          className="block text-gray-700 font-medium"
        >
          Тип недвижимости
        </label>
        <input
          type="text"
          id="input-propertyType"
          name="propertyType"
          value={data?.propertyType || ''}
          onChange={handleChange}
          required
          autoFocus
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="input-area" className="block text-gray-700 font-medium">
          Площадь в квадратных метрах
        </label>
        <input
          type="number"
          id="input-area"
          name="area"
          value={data?.area || ''}
          onChange={handleChange}
          min={0.1}
          step={0.1}
          inputMode="decimal"
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-rooms"
          className="block text-gray-700 font-medium"
        >
          Количество комнат
        </label>
        <input
          type="number"
          id="input-rooms"
          name="rooms"
          value={data?.rooms || ''}
          onChange={handleChange}
          min={1}
          step={1}
          pattern="\d+"
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-price"
          className="block text-gray-700 font-medium"
        >
          Цена в рублях
        </label>
        <input
          type="number"
          id="input-price"
          name="price"
          value={data?.price || ''}
          onChange={handleChange}
          min={1}
          step={1}
          pattern="\d+"
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  )
}

export const CarForm = ({ handleChange, data }: CarFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="input-brand"
          className="block text-gray-700 font-medium"
        >
          Марка автомобиля
        </label>
        <input
          type="text"
          id="input-brand"
          name="brand"
          value={data?.brand || ''}
          onChange={handleChange}
          required
          autoFocus
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-model"
          className="block text-gray-700 font-medium"
        >
          Модель автомобиля
        </label>
        <input
          type="text"
          id="input-model"
          name="model"
          value={data?.model || ''}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="input-year" className="block text-gray-700 font-medium">
          Год выпуска
        </label>
        <input
          type="number"
          id="input-year"
          name="year"
          value={data?.year || ''}
          onChange={handleChange}
          min={1900}
          max={new Date().getFullYear()}
          step={1}
          pattern="^\d{4}$"
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-mileage"
          className="block text-gray-700 font-medium"
        >
          Пробег в километрах
        </label>
        <input
          type="number"
          id="input-mileage"
          name="mileage"
          value={data?.mileage || ''}
          onChange={handleChange}
          min={0}
          step={1}
          pattern="\d+"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  )
}

export const ServiceForm = ({ handleChange, data }: ServiceFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="input-serviceType"
          className="block text-gray-700 font-medium"
        >
          Тип услуги
        </label>
        <input
          type="text"
          id="input-serviceType"
          name="serviceType"
          value={data?.serviceType || ''}
          onChange={handleChange}
          required
          autoFocus
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-experience"
          className="block text-gray-700 font-medium"
        >
          Опыт работы в годах
        </label>
        <input
          type="number"
          id="input-experience"
          name="experience"
          value={data?.experience || ''}
          onChange={handleChange}
          min={1}
          step={1}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="input-cost" className="block text-gray-700 font-medium">
          Стоимость услуги в рублях
        </label>
        <input
          type="number"
          id="input-cost"
          name="cost"
          value={data?.cost || ''}
          onChange={handleChange}
          min={1}
          step={1}
          required
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-workSchedule"
          className="block text-gray-700 font-medium"
        >
          График работы
        </label>
        <input
          type="text"
          id="input-workSchedule"
          name="workSchedule"
          value={data?.workSchedule || ''}
          onChange={handleChange}
          placeholder="По будням с 9:00 до 18:00"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  )
}
