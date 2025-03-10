import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import {
  CarInput,
  Item,
  ItemBase,
  RealEstateInput,
  ServiceInput,
} from '../../types/types'
import { BaseForm } from '../../components/forms/BaseFormUI'
import {
  ServiceForm,
  CarForm,
  ApartmentForm,
} from '../../components/forms/SpecificFormsUI'
import {
  useCreateItemMutation,
  useUpdateItemMutation,
} from '../../store/itemsApi'
import { useEditContext } from '../../store/editContext'
import {
  normalizeSpaces,
  getDataFromLocalStorage,
  saveDataInLocalStorage,
  removeDataFromLocalStorage,
} from '../../utils'
import { useNavigate } from 'react-router-dom'
import { LOCAL_STORAGE_KEY_FORM_DRAFT } from '../../constants'
import isEqual from 'lodash/isEqual'
import { BackButton } from '../../components/back-button/BackButton'

export const FormPage = () => {
  const [createItem] = useCreateItemMutation()
  const { isEditing, setIsEditing, editItem, setEditItem } = useEditContext()
  const [updateItem] = useUpdateItemMutation()
  const [data, setData] = useState<Partial<Item>>(() => {
    return (
      getDataFromLocalStorage(LOCAL_STORAGE_KEY_FORM_DRAFT) || {
        type: 'Недвижимость',
      }
    )
  })
  const [isSecondStep, setIsSecondStep] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isEditing && isEqual(editItem, data)) {
      setEditItem(null)
      return
    }
    saveDataInLocalStorage(LOCAL_STORAGE_KEY_FORM_DRAFT, data)
  }, [data])

  useEffect(() => {
    if (isEditing && editItem) {
      setData({ ...editItem })
    }
  }, [isEditing, editItem])

  const isBaseFormValid = () => {
    return data.name && data.description && data.location && data.type
  }

  const handleNext = () => {
    if (isBaseFormValid()) {
      setIsSecondStep(true)
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!isSecondStep) {
      handleNext()
    } else {
      let response
      if (isEditing) {
        response = await updateItem(data)
        setIsEditing(false)
        setEditItem(null)
      } else {
        response = await createItem(data)
      }
      removeDataFromLocalStorage(LOCAL_STORAGE_KEY_FORM_DRAFT)
      if (response.data.id !== undefined) {
        navigate(`/item/${response.data.id}`)
      }
    }
  }

  const handleChange = (
    e:
      | ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLSelectElement>
      | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: normalizeSpaces(e.target.value),
    }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6 flex flex-col w-full"
    >
      {!isSecondStep && (
        <>
          <BaseForm handleChange={handleChange} data={data as ItemBase} />
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 rounded-md transition"
          >
            Далее
          </button>
        </>
      )}
      {isSecondStep && (
        <>
          <BackButton onClick={() => setIsSecondStep(false)} />
          <div className="space-y-4">
            {(() => {
              switch (data?.type) {
                case 'Услуги':
                  return (
                    <ServiceForm
                      handleChange={handleChange}
                      data={data as ServiceInput}
                    />
                  )
                case 'Авто':
                  return (
                    <CarForm
                      handleChange={handleChange}
                      data={data as CarInput}
                    />
                  )
                case 'Недвижимость':
                  return (
                    <ApartmentForm
                      handleChange={handleChange}
                      data={data as RealEstateInput}
                    />
                  )
                default:
                  return null
              }
            })()}
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 rounded-md transition"
          >
            Опубликовать объявление
          </button>
        </>
      )}
    </form>
  )
}
