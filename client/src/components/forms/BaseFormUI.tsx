import { ChangeEvent } from 'react'
import { ItemBase } from '../../types/types'
import { setErrorTextAndNumberRequiredInput, resetError } from '../../utils'

type BaseFormProps = {
  handleChange: (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => void
  data: ItemBase | null
}

export const BaseForm = ({ handleChange, data }: BaseFormProps) => {
  return (
    <div className="space-y-4">
      <div>
        <label htmlFor="input-name" className="block text-gray-700 font-medium">
          Название объявления
        </label>
        <input
          type="text"
          id="input-name"
          name="name"
          value={data?.name || ''}
          required
          autoFocus
          onChange={handleChange}
          placeholder="Продам квартиру"
          pattern="[A-Za-zА-Яа-я0-9]+"
          onInvalid={setErrorTextAndNumberRequiredInput}
          onInput={resetError}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="input-description"
          className="block text-gray-700 font-medium mb-1"
        >
          Описание объявления
        </label>
        <textarea
          id="input-description"
          name="description"
          value={data?.description || ''}
          required
          onChange={handleChange}
          placeholder="Скажите несколько слов о том, что вы продаёте"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none resize-y min-h-[100px]"
          rows={3}
          minLength={20}
        />
      </div>

      <div>
        <label
          htmlFor="input-location"
          className="block text-gray-700 font-medium"
        >
          Локация объявления
        </label>
        <input
          type="text"
          id="input-location"
          name="location"
          value={data?.location || ''}
          minLength={5}
          required
          onChange={handleChange}
          placeholder="Метро Кутузовская"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="select-type"
          className="block text-gray-700 font-medium"
        >
          Категория
        </label>
        <select
          id="select-type"
          name="type"
          value={data?.type || 'Недвижимость'}
          required
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
          <option value="Недвижимость">Недвижимость</option>
          <option value="Авто">Авто</option>
          <option value="Услуги">Услуги</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="input-image"
          className="block text-gray-700 font-medium"
        >
          Приложите ссылку на фотографию
        </label>
        <input
          type="url"
          id="input-image"
          name="image"
          value={data?.image || ''}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          className="w-full px-3 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </div>
  )
}
