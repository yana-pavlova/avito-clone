import { ChangeEvent } from 'react'

export const normalizeSpaces = (value: string) =>
  value.replace(/^\s+/, '').replace(/\s{2,}/g, ' ')

export const setErrorTextAndNumberRequiredInput = (
  e: ChangeEvent<HTMLInputElement>
) => {
  if (!e.target.value) {
    e.target.setCustomValidity('Это поле обязательно для заполнения')
  } else {
    e.target.setCustomValidity('Допустимы только буквы и цифры')
  }
}

export const resetError = (e: ChangeEvent<HTMLInputElement>) =>
  e.target.setCustomValidity('')
