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
        <select
          value={data?.propertyType || ''}
          onChange={handleChange}
          id="input-propertyType"
          name="propertyType"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
          autoFocus
        >
          <option value="" disabled>
            Выберите тип недвижимости
          </option>
          <option value="apartment">Квартира</option>
          <option value="house">Дом</option>
          <option value="townhouse">Таунхаус</option>
          <option value="duplex">Дуплекс</option>
          <option value="loft">Лофт</option>
          <option value="penthouse">Пентхаус</option>
          <option value="studio">Студия</option>
          <option value="apartments">Апартаменты</option>
          <option value="room">Комната</option>
          <option value="office">Офис</option>
          <option value="retail">Торговое помещение</option>
          <option value="warehouse">Склад</option>
          <option value="industrial">Производственное помещение</option>
          <option value="garage">Гараж</option>
          <option value="parking">Паркинг</option>
          <option value="land">Земельный участок</option>
          <option value="hotel">Гостиница</option>
          <option value="restaurant">Ресторан / кафе</option>
          <option value="building">Здание целиком</option>
          <option value="other">Другое</option>
        </select>
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
        <select
          id="input-brand"
          name="brand"
          value={data?.brand || ''}
          onChange={handleChange}
          required
          autoFocus
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="" disabled>
            Выберите марку автомобиля
          </option>
          <option value="audi">Audi</option>
          <option value="bmw">BMW</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="citroen">Citroën</option>
          <option value="fiat">Fiat</option>
          <option value="ford">Ford</option>
          <option value="honda">Honda</option>
          <option value="hyundai">Hyundai</option>
          <option value="kia">Kia</option>
          <option value="lexus">Lexus</option>
          <option value="mazda">Mazda</option>
          <option value="mercedes">Mercedes-Benz</option>
          <option value="mitsubishi">Mitsubishi</option>
          <option value="nissan">Nissan</option>
          <option value="opel">Opel</option>
          <option value="peugeot">Peugeot</option>
          <option value="renault">Renault</option>
          <option value="skoda">Škoda</option>
          <option value="subaru">Subaru</option>
          <option value="suzuki">Suzuki</option>
          <option value="toyota">Toyota</option>
          <option value="volkswagen">Volkswagen</option>
          <option value="volvo">Volvo</option>
          <option value="other">Другая</option>
        </select>
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
        <select
          id="input-serviceType"
          name="serviceType"
          value={data?.serviceType || ''}
          onChange={handleChange}
          required
          autoFocus
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="" disabled>
            Выберите тип услуги
          </option>
          <option value="repair">Ремонт</option>
          <option value="cleaning">Уборка</option>
          <option value="delivery">Доставка</option>
          <option value="moving">Переезд</option>
          <option value="construction">Строительство</option>
          <option value="plumbing">Сантехника</option>
          <option value="electrical">Электрика</option>
          <option value="painting">Покраска</option>
          <option value="gardening">Ландшафтные работы</option>
          <option value="it-services">IT-услуги</option>
          <option value="tutoring">Обучение и репетиторство</option>
          <option value="beauty">Косметология и уход</option>
          <option value="fitness">Фитнес и тренировки</option>
          <option value="legal">Юридические услуги</option>
          <option value="accounting">Бухгалтерия</option>
          <option value="marketing">Маркетинг и реклама</option>
          <option value="event-planning">Организация мероприятий</option>
          <option value="photography">Фотосъёмка</option>
          <option value="other">Другое</option>
        </select>
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
